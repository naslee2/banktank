var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
const binance = require('node-binance-api');

var app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/crypto_compare');
mongoose.Promise = global.Promise

var UserSchema = new mongoose.Schema({

}, { timestamps: true });

mongoose.model('User', UserSchema); 
var User = mongoose.model('User')

app.use(express.static( __dirname + '/client/dist' ));

app.set('views', path.join(__dirname, './views'));

binance.options({
  APIKEY: 'p7oze8VPMZhvfielHpY0jq3mtGat3uPDDPVRfnieatdZnkFrLRAugfHgmghJFsfa',
  APISECRET: 'IjFYnTE0xu7gpPQ1iVOrlMk4UaEPQQpPepmDgNwVW5pJjCx9jNTVuuoYQqLkolfb',
  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  test: true // If you want to use sandbox mode where orders are simulated
});

binance.prices((error, ticker) => {
  console.log("prices()", ticker);
  console.log("Price of ICX: ", ticker.ICXBTC);
});

  
app.get('/', function (req, res) {
  res.

})



app.listen(8000, function () {
    console.log("listening on port 8000");
})