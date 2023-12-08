const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: false
  },
  // email: {
  //   type: String,
  //   require: false
  // },
  // contact: {
  //   type: String,
  //   require: false
  // },
  // birthDate: {
  //   type: Date,
  //   require: false
  // },
  // country: {
  //   type: String,
  //   require: true
  // },
  // city: {
  //   type: String,
  //   require: true
  // },
  // street: {
  //   type: String,
  //   require: true
  // },
  // streetNum: {
  //   type: Number,
  //   require: true
  // },
  // district: {
  //   type: String,
  //   require: true
  // },
  // cep: {
  //   type: String,
  //   require: true
  // }
})

module.exports = mongoose.model("User", userSchema)