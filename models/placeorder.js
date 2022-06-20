const mongoose = require("mongoose");

const placeoderSchema = new mongoose.Schema({
  customer_id: {
    type: String,
    required: true,
  },
  customer_phone_number: {
    type: String,
    required: true,
  },
  service_type: {
    type: String,
    required: true,
  },
  car_name: {
    type: String,
    required: true,
  },
  car_model: {
    type: String,
    required: true,
  },

  loacation: {
    type: Object,
    required: true,
  },
  oder_detail: {
    type: String,
    required: true,
  },
  mechanic_id: {
    type: String,
    required: true,
  },
  mechanic_phone_number: {
    type: String,
    required: true,
  },
  oder_status: {
    type: String,
    required: true,
  },
  oder_amount: {
    type: String,
    required: false,
  }
});

placeoderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

placeoderSchema.set("toJSON", {
  virtuals: true,
});

exports.PlaceOder = mongoose.model("placeoder", placeoderSchema);
exports.placeoderSchema = placeoderSchema;
