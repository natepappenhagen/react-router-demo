const express = require('express');
// Next we set up the Router
const router = express.Router();
// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Movie = require('../models/movie');
// Creating the index route
// index route should show all the fruits
 router.get('/', async (req, res, next) => {

     try  {

      const allMovies = await Movie.find();

      res.json({
        status: 200,
        data: allMovies
      })

    } catch (err){

      res.send(err)

    }
});

// This is the route that the form is sending
// its info too
// aka the create route
router.post('/', async (req, res) => {
  console.log(req.session, ' this is session')


  try {
    const createdMovie = await User.create(req.body);

    req.session.logged = true;
    req.session.username = req.body.username;


    res.json({
      status: 200,
      data: 'login successful'
    });



  } catch(err){
    console.log(err);
    res.send(err);
  }
});




// Show Route
router.get('/', async (req, res, next) => {


     try  {

        const foundMovie = await Movie.findById(req.params.id);
        res.json({
          status: 200,
          data: foundMovie
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedMovie
    });
  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedMovie = await Movie.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedMovie
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
