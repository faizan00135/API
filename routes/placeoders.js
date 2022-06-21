const { PlaceOder } = require("../models/placeorder");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get(`/`, async (req, res) => {
  const placeoderList = await PlaceOder.find();

  if (!placeoderList) {
    res.status(500).json({ success: false });
  }
  res.send({ placeoderList, status: 200 });
});

router.post(`/`, async (req, res) => {
  let placeoder = new PlaceOder({
    customer_id: req.body.customer_id,
    customer_phone_number: req.body.customer_phone_number,
    service_type: req.body.service_type,
    car_name: req.body.car_name,
    car_model: req.body.car_model,
    loacation: req.body.loacation,
    oder_detail: req.body.oder_detail,
    mechanic_id: req.body.mechanic_id,
    mechanic_phone_number: req.body.mechanic_phone_number,
    oder_status: req.body.oder_status,
    oder_amount: req.body.oder_amount,
  });
  placeoder = await placeoder.save();

  if (!placeoder) {
    return res.status(500).send("The oder cannot be created");
  }

  res.send({ placeoder, status: 200 });
});

router.put(`/mechanic/:id`, async (req, res) => {
  const order = await PlaceOder.findOne({ mechanic_id: req.params.id });
  console.log(order);
  if (!order) {
    res.send("Not Done");
  }

  res.send({ order, status: 200 });
});

router.put(`/:id`, async (req, res) => {
  const order = await PlaceOder.findOneAndUpdate(
    { _id: req.params.id },
    {
      oder_status: req.body.oder_status,
    }
  );
  if (!order) {
    res.send("Not Done");
  }

  res.send({ order, status: 200 });
});

router.put(`/customer/:id`, async (req, res) => {
  const order = await PlaceOder.findOne({ customer_id: req.params.id });
  console.log(order);
  if (!order) {
    res.send("Not Done");
  }

  res.send({ order, status: 200 });
});
router.get(`/:id`, async (req, res) => {
  const placeoderList = await PlaceOder.findAll({ customer_id: req.params.id });
console.log(placeoderList)
  if (!placeoderList) {
    res.status(500).json({ success: false });
  }
  res.send({ placeoderList, status: 200 });
});

module.exports = router;
