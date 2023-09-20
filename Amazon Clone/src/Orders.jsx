import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "./css/Orders.css";
import Order from "./Order";
import {collection,query,where,orderBy,getDocs} from "firebase/firestore"
import { db } from "./firebase";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        try {
          console.log("fetching orders");
          // const querySnapshot = await db
          //   .collection("users") //accessing user collection
          //   .doc(user?.uid) //then get specific user
          //   .collection("orders") //then user order
          //   .orderBy("created", "desc") //then access the order by date created in decending order
          //   .get();

          const ordersRef=collection(db,"users",user.uid,"orders")
const q=query(
  ordersRef,
  orderBy("created", "desc")
)
const querySnapshot = await getDocs(q);
          const orderData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));

          setOrders(orderData);
          console.log("Order fetched successfully", orderData);
        } catch (error) {
          console.log("Error aa gya:", error);
        }
      };
      fetchOrders();
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
