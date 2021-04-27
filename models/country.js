const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema(
  {
    Continent_Name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    Continent_Code: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    Country_Name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    Two_Letter_Country_Code: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    Three_Letter_Country_Code: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    Country_Number: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { versionKey: false }
);

const Country = mongoose.model('Country', countrySchema);

exports.Country = Country;
