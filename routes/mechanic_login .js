const { Mechanic } = require("../models/mechanic");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post(`/`, async (req, res) => {
  let mechanic = await Mechanic.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log("Mechanic is ",mechanic)
  if (!mechanic) {
    const users = {
      email: req.body.email,
      password: req.body.password,
    };
    return res.send({ users,status: 500 });
  }

  res.send({ mechanic, status: 200 });
});

module.exports = router;
