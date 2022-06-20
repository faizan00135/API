const mongoose = require('mongoose');

const mechanicSchema = new mongoose.Schema({
  
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    experties: {
        type: String,
        required: true,
    },
    shop_location: {
        type: Object,
        required: true,
    },
    visting_fee: {
        type: String,
        required: false,
    }

});

mechanicSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

mechanicSchema.set('toJSON', {
    virtuals: true,
});

exports.Mechanic = mongoose.model('mechanic', mechanicSchema);
exports.mechanicSchema = mechanicSchema;
