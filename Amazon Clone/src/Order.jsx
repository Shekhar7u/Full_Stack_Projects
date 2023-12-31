import "./css/Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct"


function Order({order}) {
    console.log("Order props:",order)
  
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma" )}
      </p>

      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map(item =>(
        <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        hideButton
        />
      ))}
    </div>
  );
}


export default Order;
