const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
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

});

customerSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

customerSchema.set('toJSON', {
    virtuals: true,
});

exports.Customer = mongoose.model('customer', customerSchema);
exports.customerSchema = customerSchema;
