const { Customer } = require("../models/customer");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get(`/`, async (req, res) => {
  const customerList = await Customer.find();

  if (!customerList) {
    res.status(500).json({ success: false });
  }
  res.send({customerList,status:200});
});

router.post(`/`, async (req, res) => {
  let customer = new Customer({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
  });
  customer = await customer.save();

  if (!customer) {
    return res.status(500).send("The customer cannot be created");
  }

  res.send({customer,status:200});
});
router.put(`/name/:id`, async (req, res) => {
  const user = await Customer.findOneAndUpdate(
    { _id: req.params.id },
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    }
  );
  console.log(req.body.first_name,req.params.id)
  
  if (!user) {
    res.send("Not Done");
    return;
  }

  user.first_name=req.body.first_name;
  user.last_name=req.body.last_name;
  console.log(user)

  res.send({user,status:200});
});

router.put(`/phonenumber/:id`, async (req, res) => {
  const user = await Customer.findOneAndUpdate(
    { _id: req.params.id },
    {
      phone_number: req.body.phone_number,
    }
  );
  console.log(req.params.id)
  
  if (!user) {
    res.send("Not Done");
  }

  res.send({user,status:200});
});

router.put(`/password/:id`, async (req, res) => {
  const user = await Customer.findOneAndUpdate(
    { _id: req.params.id },
    {
      password: req.body.password,
    }
  );
  console.log(req.params.id)
  
  if (!user) {
    res.send("Not Done");
  }

  res.send({user,status:200});
});



module.exports = router;
