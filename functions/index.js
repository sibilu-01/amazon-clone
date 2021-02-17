const functions = require("firebase-functions");
const express = require ("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51ILJbKCgMT0FArHadJYpmQckIqryciQBF9SEP88stzCMo12xpCuEoB5GJxP5vWpnBhD6ZYBVdcY4s0opRGwTnzCy00dnOZGLdW')

//API

//App config

const app = express()

//Middlewares
app.use(cors({ origin : true}));
app.use(express.json());
//APT routes

app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>>', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    //OK - Created
    response.status(201).send ({
        clientSecret: paymentIntent.client_secret,
    })
})
//Listen command

exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/challenge-d2771/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
