const express = require("express");
const cors = require("cors");
const PayOS = require("@payos/node");

const payos = new PayOS(
  "99d5ceec-802f-4727-be7d-d0cd98e6dc9b",
  "604ab9ef-f43f-445b-90fc-27fec7ac2d71",
  "859b5343318e6f8ebaf8317a38c49485440b66d2573de504c64e8b701f9b311f"
);
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const YOUR_DOMAIN = "http://localhost:3001";

app.post("/create-payment-link", async (req, res) => {
  const paymentLink = await payos.createPaymentLink({
    ...req.body,
    orderCode: Math.floor(Math.random() * 1000000),
    returnUrl: `http://localhost:3000/link-book`,
    cancelUrl: `http://localhost:3000`,
  });

  return res.json(paymentLink);
});

app.listen(3001, () => {
  console.log("Backend server is running on port 3001");
});
