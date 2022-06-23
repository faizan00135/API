const { Mechanic } = require("../models/mechanic");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get(`/`, async (req, res) => {
  const mechanicList = await Mechanic.find();

  if (!mechanicList) {
    res.status(500).json({ success: false });
  }
  res.send({ mechanicList, status: 200 });
});

router.post(`/`, async (req, res) => {
  if (req.body.shop_location) {
    let mechanic = new Mechanic({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      phone_number: req.body.phone_number,
      experties: req.body.experties,
      shop_location: req.body.shop_location,
     
    });
    mechanic = await mechanic.save();

    if (!mechanic) {
      return res.status(500).send("The mechanic cannot be created");
    }

    res.send({ mechanic, status: 200 });
  } else {
    let mechanic = new Mechanic({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      phone_number: req.body.phone_number,
      experties: req.body.experties,
     
      
    });
    mechanic = await mechanic.save();

    if (!mechanic) {
      return res.status(500).send("The mechanic cannot be created");
    }

    res.send({ mechanic, status: 200 });
  }
});
router.put(`/name/:id`, async (req, res) => {
  const user = await Mechanic.findOneAndUpdate(
    { _id: req.params.id },
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    }
  );
  console.log(req.params.id)
  
  if (!user) {
    res.send("Not Done");
  }
  user.first_name=req.body.first_name;
  user.last_name=req.body.last_name;
  res.send({user,status:200});
});

router.put(`/phonenumber/:id`, async (req, res) => {
  const user = await Mechanic.findOneAndUpdate(
    { _id: req.params.id },
    {
      phone_number: req.body.phone_number,
    }
  );
  user.phone_number=req.body.phone_number;
  console.log(req.params.id)
  
  if (!user) {
    res.send("Not Done");
  }

  res.send({user,status:200});
});

router.put(`/password/:id`, async (req, res) => {
  const user = await Mechanic.findOneAndUpdate(
    { _id: req.params.id },
    {
      password: req.body.password,
    }
  );
  console.log(req.params.id)
  
  if (!user) {
    res.send("Not Done");
  }
  user.password=req.body.password;
  res.send({user,status:200});
});


module.exports = router;
