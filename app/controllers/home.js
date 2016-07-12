const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

/*!
 * Module dependencies.
 */

// get /
exports.index = function (req, res) {
  res.render('home/index', { reqCsrf:req.csrfToken()});
};

// get /qutotes
exports.getQuote = function (req, res) {
  console.log('getQuote');
  Quote.find({},{},{sort:{createdAt: -1}}, function(err, _quotes){
    if(err){
      console.log('something wrong');
      res.json(err);
    }else{

    }
    console.log(`quotes: ${_quotes}`);
    res.render('home/quotes', {quotes: _quotes});
  });
};
exports.postQuote = function (req, res) {
  console.log('postQuote');
  let quote = new Quote();
  console.log(req.body);
  if(req.body.name.trim() === '' || req.body.quote.trim() === ''){
    console.log('error');
    res.render('home/index', {
      $_SESSION: 'quote/name are mandatory',
      reqCsrf:req.csrfToken()
    });
    return
  }
  quote.name = req.body.name;
  quote.quote = req.body.quote;
  quote.save(function(err){
    if(err){
      console.log('error',err);
      res.render('home/index', {
        $_SESSION: 'something went wrong',
        reqCsrf:req.csrfToken()
      });
    }else{
      res.redirect('/');
    }
  })
};
