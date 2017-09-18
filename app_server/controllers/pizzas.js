/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('pizzas-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        pizzas: [{
            name: 'Dominos',
            address: '301 23rd St Ste B, Canyon, Tx 79015',
            rating: 3,
            facilities: ['Delivery', 'Food', 'Dining Area'],
            distance: '2mi'
        }, {
            name: 'Pizza Hut',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Drinks', 'Delivery Food', 'Dining Area'],
            distance: '3m'
        }, {
            name: 'La Bella Pizza',
            address: '700 23rd St, Canyon, Tx 79015',
            rating: 2,
            facilities: ['Food', 'Drinks', 'Delivery'],
            distance: '4m'
        }]
    });
};

/* GET 'pizza info' page */
module.exports.pizzaInfo = function(req, res) {
    res.render('pizza-info', {
        title: 'Dominos',
        pageHeader: {
            title: 'Dominos'
        },
        sidebar: {
            context: 'is on Loc8r because it is a great place to eat food and enjoy friends.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        pizza: {
            name: 'Dominos',
            address: '301 23rd St Ste B, Canyon, Tx 79015',
            rating: 3,
            facilities: ['Delivery', 'Food', 'Dining Area'],
            coords: {
                lat: 34.9847,
                lng: -101.9193
            },
            openingTimes: [{
                days: 'Monday - Thursday',
                opening: '10:30am',
                closing: '12:00am',
                closed: false
            }, {
                days: 'Friday - Saturday',
                opening: '10:30am',
                closing: '1:00am',
                closed: false
            }, {
                days: 'Sunday',
                opening: '10:30am',
                closing: '12:00am',
                closed: false
            }],
            reviews: [{
                author: 'Mickey Mouse',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Donald Duck',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'Was a little slow, but it could have been because it was gameday.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('pizza-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};