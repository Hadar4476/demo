const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
  {
    PlayerId: {
      type: Number,
      required: true,
      minlength: 3,
      maxlength: 255,
      unique: true,
    },
    NameFirst: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    NameLast: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    CurrentHandle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    CountryCode: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    TotalUSDPrize: {
      type: Number,
      required: true,
    },
    Game: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    Genre: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
  },
  { versionKey: false }
);

const Player = mongoose.model('Player', playerSchema);

exports.Player = Player;
