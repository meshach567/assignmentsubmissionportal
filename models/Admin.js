const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    task: { type: String, required: true},
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    status: { type: String, enum: [ 'Pending', 'Accepted', 'Rejected' ], default: 'Pending'},
    createdAt: { type: Date, default: Date.now}
})

module.exports = mongoose.model('Admin', adminSchema);