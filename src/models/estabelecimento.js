const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  neighborhood: String,
  city: String,
  state: String,
  zipCode: String
});

const contactSchema = new mongoose.Schema({
  phone: String,
  email: String
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const dailyOpeningHoursSchema = new mongoose.Schema({
  opens: String,
  closes: String
});

const establishmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  address: addressSchema,
  contact: contactSchema,
  menu: [productSchema],
  openingHours: {
    monday: dailyOpeningHoursSchema,
    tuesday: dailyOpeningHoursSchema,
    wednesday: dailyOpeningHoursSchema,
    thursday: dailyOpeningHoursSchema,
    friday: dailyOpeningHoursSchema,
    saturday: dailyOpeningHoursSchema,
    sunday: dailyOpeningHoursSchema
  },
  rating: {
    average: {
      type: Number,
      default: 0
    },
    totalReviews: {
      type: Number,
      default: 0
    }
  }
});

const Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;
