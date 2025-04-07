const Place = require('../models/place');
const { placeSchema } = require('../schemas/places');
const express = require('express')
const ErrorHandler = require('../utils/ExpressError');
const warpAsync = require('../utils/warpAsync');


const router = express.Router();


const validatePlace = (req, res, next) => {
  const { error } = placeSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(',')
    return next(new ErrorHandler(msg, 404))
  } else {
    next()
  }
}
router.get('/',warpAsync(async(req, res) => {
  const places = await Place.find()
  res.render('places/index',  { places } )
}))

router.get('/create', (req, res) => {
  res.render('places/create');
})

router.post('/',validatePlace, warpAsync(async(req, res) => {
    const place = new Place(req.body.place)
    await place.save();
    res.redirect('/places');
}))

router.get('/:id', warpAsync(async(req,res) => {
  const place = await Place.findById(req.params.id).populate('reviews')
  res.render('places/show', { place })
}))

router.get('/:id/edit', warpAsync(async(req,res) => {
  const place = await Place.findById(req.params.id);
  res.render('places/edit', { place })
}))

router.put('/:id', validatePlace, warpAsync(async(req, res) => {
  await Place.findByIdAndUpdate(req.params.id, { ...req.body.place })
  res.redirect('/places');
}))

router.delete('/:id', warpAsync(async (req, res) => {
  await Place.findByIdAndDelete(req.params.id);
  res.redirect('/places')
}))


module.exports = router;