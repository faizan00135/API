const { Service_Type } = require("../models/service_type");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get(`/`, async (req, res) => {
  const service_typeList = await Service_Type.find();

  if (!service_typeList) {
    res.status(500).json({ success: false });
  }
  res.send({service_typeList,status:200});
});

router.post(`/`, async (req, res) => {
  let service_type = new Service_Type({

    
    service_name: req.body.service_name,
   
  });
  service_type = await service_type.save();

  if (!service_type) {
    return res.status(500).send("The service type cannot be created");
  }

  res.send({service_type,status:200});
});



module.exports = router;
