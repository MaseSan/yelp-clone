const ejsMate = require('ejs-mate')
const express = require('express')
const methodOverride = require('method-override')
const path = require('path')
const mongoose = require('mongoose')
const app = express();




//connect to mongodb
mongoose.connect('mongodb://127.0.0.1/bestpoints')
  .then((result) => {
    console.log('connect to mongodb')
  }).catch((err) => {
    console.log(err)
  })


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs')
app.set('views' ,path.join(__dirname, 'views')) 

//middleware
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))






app.get('/', (req, res) => {
  res.render('home')
});

app.use('/places' ,require('./routes/places'));
app.use('/places/:place_id/reviews' ,require('./routes/review'));



//note jangan menggunakan Wild card (*)
app.all('/:UserId', (req, res, next) => {
	next(new ExpressError('Page not found', 404));
})



app.use((err,req,res,next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'is requared'
  res.status(statusCode).render('error', { err })
})



app.listen(3000, () => {
  console.log(`server is running on http://127.0.0.1:3000`)
})
