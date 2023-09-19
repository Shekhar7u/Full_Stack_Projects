import { useEffect, useState } from "react";
import "./css/Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "./Axios";
import { getCartTotal } from "./Reducer";
import { db } from "./firebase.js";
import { collection, doc, setDoc } from "firebase/firestore";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //Generate the special secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  console.log("THE SECRET IS >>>", clientSecret);
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async (result) => {
        const { paymentIntent, error } = result;

        if (error) {
          setError(error.message);
          setProcessing(false);
          setSucceeded(false);
        } else {
          if (paymentIntent && paymentIntent.id) {
            try {
              // Reference the Firestore collections and documents
              const userRef = doc(db, "users", user?.uid);
              const ordersCollectionRef = collection(userRef, "orders");

              // Set the order data in Firestore
              await setDoc(doc(ordersCollectionRef, paymentIntent.id), {
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
              });

              setSucceeded(true);
              setError(null);
              setProcessing(false);
              dispatch({
                type: "EMPTY_CART",
              });
              history.replace("/orders");
            } catch (error) {
              setError("Error creating  order please try again ");
              setProcessing(false);
              setSucceeded(false);
            }
          } else {
            setError("Payment confirmation failed. Please try again.");
            setProcessing(false);
            setSucceeded(false);
          }
        }
      });
  };

  const handleChange = (event) => {
    //Listen for changes in card Elements and display any error as the customer types their card details
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

  //
  const calculateTotal = () => {
    let total = 0;
    for (const item of cart) {
      total += item.price;
    }
    return total.toFixed(2);
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>CheckOut {<Link to="/checkout">{cart?.length} items</Link>}</h1>
        {/**Payment section - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>113 BHU</p>
            <p>Varanasi, Uttar Pradesh</p>
          </div>
        </div>
        {/**Payment section - Review Items*/}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {cart.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/**Payment section - Payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/**strip magic will go */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_priceContainer">
                Order Total :{calculateTotal()}
                <div></div>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>
              </div>
              {/**Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
