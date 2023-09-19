
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");


const stripe = require("stripe")("sk_test_51NrSMmSEjwDG31nJlNnSORJZcns3v226WWsQZK5B7ZwfbhLeNhQnXQNDBqQMOfkFMn9iM6B3cYcWPdeI3LOGLF9X00P05deYMR");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Connected to backend"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received  for this amount >>>", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "INR",
    });
    // Payment Intent creation successful

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log("Error creating Payment Intent", error);
    res.status(500).send({error: "Unable to create Payment Intent"});
  }
});
// -  Listen command
exports.api = functions.https.onRequest(app);


// http://127.0.0.1:5001/clone-bad52/us-central1/api
