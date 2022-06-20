const { Customer } = require("../models/customer");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post(`/`, async (req, res) => {
  let customer = await Customer.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (!customer) {
    const users = {
      email: req.body.email,
      password: req.body.password,
    };
    return res.send({ users,status: 500 });
  }

  res.send({ customer, status: 200 });
});

module.exports = router;
