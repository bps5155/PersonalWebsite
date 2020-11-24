const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true

    }
});

module.exports = Message = mongoose.model('message', MessageSchema);
//module.exports = mongoose.model('user', UserSchema);