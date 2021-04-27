const express = require('express');
const router = express.Router();
const { Country } = require('../models/country');

router.get('/search/:country', async (req, res) => {
  const { country } = req.params;
  const countries = await Country.find({
    Country_Name: { $regex: new RegExp('^' + country.toLowerCase(), 'i') },
  });
  if (!countries.length) return res.status(404).send('No countries available');
  res.send(countries);
});

router.get('/', async (req, res) => {
  const countries = await Country.find();
  if (!countries.length) return res.status(404).send('No countries available');
  res.send(countries);
});

module.exports = router;
