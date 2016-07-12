
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * schema
 */

var QuoteSchema = new Schema({
  name: { type: String, default: '' },
  quote: { type: String, default: '' },
},{
  timestamps: true
});


/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

QuoteSchema.method({

});

/**
 * Statics
 */

QuoteSchema.static({

});

/**
 * Register
 */

mongoose.model('Quote', QuoteSchema);
