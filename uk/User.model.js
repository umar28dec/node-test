const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String
})
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
