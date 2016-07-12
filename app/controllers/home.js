const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
  let quote = new Quote();
  quote.name = 'test';
  quote.save(function(err){});
  res.render('home/index', {
    title: 'Node Express Mongoose Boilerplate'
  });
};
