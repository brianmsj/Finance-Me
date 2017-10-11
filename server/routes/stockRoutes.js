const express = require('express');
const googleFinance = require('google-finance');


const router = express.Router();

router.get('/stockquotes', (req, res) => {
let today = new Date()
let yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

googleFinance.historical({
  symbols: ['GOOG','MSFT','AAPL','NOW','AMZN','NFLX'],
  from: yesterday,
  to: today
},function(err,result) {
  return result
}).then(quote => {
  let data = {
    goog: quote.GOOG.pop(-2),
    msft: quote.MSFT.pop(-2),
    aapl: quote.AAPL.pop(-2),
    now:  quote.NOW.pop(-2),
    amzn: quote.AMZN.pop(-2),
    nflx: quote.NFLX.pop(-2)
  }
  res.json(data)

});

})



module.exports = {router};
