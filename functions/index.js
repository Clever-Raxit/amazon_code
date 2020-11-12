const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response, request } = require('express');
const stripe = require("stripe")("sk_test_51Hk3joE4YTDvRgJ5fXSPIldyoDTfDpiQsLjHH7eaMExTkaUbhKBAsMenJylr0tr3NKElDJbiwoQHDHwT6WMakz9m00V3qJ6cpl")

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!! for this amount >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-595ba/us-central1/api