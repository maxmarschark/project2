const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyCuuJPLkkW-FTB-dBuv_GTBxu3_8B1UsC8",
  authDomain: "restaurantreview-ae4cc.firebaseapp.com",
  databaseURL: "https://restaurantreview-ae4cc.firebaseio.com",
  storageBucket: "restaurantreview-ae4cc.appspot.com",
  messagingSenderId: "691274524554"
};
firebase.initializeApp(config);

module.exports = firebase;
