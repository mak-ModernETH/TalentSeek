const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = User = mongoose.model("users", UserSchema);


//SCHEMA SETUP
// var userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     joined: Date
// })
// var User = mongoose.model("User", userSchema);
// User.create(
//     {
//         name: "Mulusew Simeneh",
//         email: "mulusewsimeneh13@gmail.com",
//         password: "1234",
//         joined: new Date()
//     }, function (err, user) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("New User Created");
//             console.log(user);  
//         }
//     }
// )