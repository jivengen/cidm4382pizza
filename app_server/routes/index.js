var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var ctrlPizzas = require('../controllers/pizzas');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/*Pizza Locations*/
router.get('/pizza', ctrlPizzas.homelist);
router.get('/pizza/info', ctrlPizzas.pizzaInfo);
router.get('/pizza/review/new', ctrlPizzas.addReview);


/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
