const { Vehicle_Type } = require("../models/vehicle_type");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get(`/`, async (req, res) => {
  const vehicle_typeList = await Vehicle_Type.find();

  if (!vehicle_typeList) {
    res.status(500).json({ success: false });
  }
  res.send({vehicle_typeList,status:200});
});

router.post(`/`, async (req, res) => {
  let vehicle_type = new Vehicle_Type({
    car_name: req.body.car_name,
    car_model: req.body.car_model,
   
  });
  vehicle_type = await vehicle_type.save();

  if (!vehicle_type) {
    return res.status(500).send("The vehicle type be created");
  }

  res.send({vehicle_type,status:200});
});



module.exports = router;
