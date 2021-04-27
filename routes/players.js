const express = require('express');
const router = express.Router();

const { Player } = require('../models/player');

router.get('/:countryCode', async (req, res) => {
  const { countryCode } = req.params;
  const playersPerCountry = await Player.find({
    CountryCode: { $regex: new RegExp('^' + countryCode.toLowerCase(), 'i') },
  });
  if (!playersPerCountry.length)
    return res.status(404).send('No players available for this country');
  res.send(playersPerCountry);
});

module.exports = router;
