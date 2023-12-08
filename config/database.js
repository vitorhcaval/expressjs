const mongoose = require("mongoose")
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/delivery')
  .then(() => console.log("conectado ao MongoDB"))
  .catch((err) => console.log(err))