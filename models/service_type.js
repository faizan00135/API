const mongoose = require('mongoose');

const service_typeSchema = new mongoose.Schema({
    service_name: {
        type: String,
        required: true,
    },
   

});

service_typeSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

service_typeSchema.set('toJSON', {
    virtuals: true,
});

exports.Service_Type = mongoose.model('service_type', service_typeSchema);
exports.service_typeSchema = service_typeSchema;
