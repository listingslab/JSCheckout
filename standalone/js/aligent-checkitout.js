(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "name": "checkitout",
  "version": "1.8.3",
  "description": "JavaScript/Sass App for Aligent_CheckItOut Module",
  "main": "src/js/Main.js",
  "repository": {
    "type": "git",
    "url": "https://bitbucket.org/aligent/ecomdev_checkitout_developer"
  },
  "license": "OSL-3.0",
  "author": {
    "name": "Chris Dorward",
    "email": "chris.dorward@aligent.com.au"
  },
  "dependencies": {
    "gsap": "^1.19.1"
  },
  "devDependencies": {
    "babel-preset-es2015": "^6.24.1",
    "babelify": "^7.3.0",
    "browser-sync": "^2.18.12",
    "browserify": "^14.3.0",
    "gulp": "^3.9.1",
    "gulp-connect": "^5.0.0",
    "gulp-notify": "^3.0.0",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^3.1.0",
    "gulp-sourcemaps": "^2.6.0",
    "gulp-uglify": "^2.1.2",
    "gulp-uglifycss": "^1.0.8",
    "http-server": "^0.10.0",
    "nodemon": "^1.11.0",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0"
  },
  "keywords": [
    "JavaScript",
    "ES6",
    "Sass",
    "MVC"
  ]
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Aligent CheckItOut
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @category   Aligent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @package    aligent-checkitout
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright  Copyright (c) 2017 Aligent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author     Chris Dorward <chris.dorward@aligent.com.au>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * src/js/Controller.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Handles anything to do with user interaction
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ControllerEmail = require('./controllers/ControllerEmail');

var _ControllerEmail2 = _interopRequireDefault(_ControllerEmail);

var _ControllerPassword = require('./controllers/ControllerPassword');

var _ControllerPassword2 = _interopRequireDefault(_ControllerPassword);

var _ControllerDeliveryPayment = require('./controllers/ControllerDeliveryPayment');

var _ControllerDeliveryPayment2 = _interopRequireDefault(_ControllerDeliveryPayment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller(main) {
    _classCallCheck(this, Controller);

    this.main = main;
    this.shortName = 'c';
    this.controllers = {};
    this.controllers.email = new _ControllerEmail2.default(main);
    this.controllers.password = new _ControllerPassword2.default(main);
    this.controllers.deliverypayment = new _ControllerDeliveryPayment2.default(main);
  }

  _createClass(Controller, [{
    key: 'setDependents',
    value: function setDependents(dependents) {
      // Set Dependent MVC Classes
      // See https://tinyurl.com/yaqgy73w
      for (var i = 0; i < dependents.length; i++) {
        this[dependents[i].shortName] = dependents[i];
      }
    }
  }]);

  return Controller;
}();

exports.default = Controller;

},{"./controllers/ControllerDeliveryPayment":5,"./controllers/ControllerEmail":6,"./controllers/ControllerPassword":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/Model.js
 * Load and manipulate data model
 *
 */

var Model = function () {
  function Model(main) {
    _classCallCheck(this, Model);

    this.main = main;
    this.shortName = 'm';

    // The Model Class is our run-time data store.
    // We could use Redux if we were feeling flash.
    // In this case we'll keep our data in an object called 'data'
    // here in the Model class which can be accessed from anywhere
    this.data = {};

    // Import data models from the ./models directory
    this.importModels();

    // Set up a customer object ready to be populated during runtime
    this.setOrder();
  }

  _createClass(Model, [{
    key: 'setDependents',
    value: function setDependents(dependents) {
      // Set Dependent MVC Classes
      // See https://tinyurl.com/yaqgy73w
      for (var i = 0; i < dependents.length; i++) {
        this[dependents[i].shortName] = dependents[i];
      }
    }
  }, {
    key: 'importModels',
    value: function importModels() {
      // Example data models for Ajax integration
      // config
      var config = require('../config');
      this.data.config = config.default.config;
      // orderSummary
      var orderSummary = require('./models/orderSummary');
      this.data.orderSummary = orderSummary.default.orderSummary;
      // customers
      var customers = require('./models/customers');
      this.data.customers = customers.default.customers;
      // promocodes
      var promocodes = require('./models/promocodes');
      this.data.promocodes = promocodes.default.promocodes;
      // giftcards
      var giftcards = require('./models/giftcards');
      this.data.giftcards = giftcards.default.giftcards;
    }
  }, {
    key: 'debugger',
    value: function _debugger() {
      jQuery('#debugger').val(JSON.stringify(this.data.order, null, "\t"));
    }
  }, {
    key: 'setOrder',
    value: function setOrder() {
      // Once this data model is populated, and order can be placed
      this.data.order = {
        'email': '',
        'customerType': '',
        'firstName': '',
        'lastName': '',
        'deliveryAddress': '',
        'billToDifferentAddress': '',
        'authorityToLeave': '',
        'paymentMethod': '',
        'newsletter': '',
        'promocodes': [],
        'giftcards': [],
        'subtotal': '',
        'discounts': '',
        'shipping': '',
        'grandtotal': ''
      };
      this.debugger();
    }
  }, {
    key: 'updateOrder',
    value: function updateOrder(key, value) {
      this.data.order[key] = value;
      this.debugger();
    }
  }, {
    key: 'redeemGift',
    value: function redeemGift(code) {
      // Check the supplied code against the model and update totals if it's good
      for (var i = 0; i < this.data.giftcards.length; i++) {
        if (this.data.giftcards[i].code === code) {
          this.data.order.giftcards.push(this.data.giftcards[i]);
          jQuery('#giftcard').val('');
          this.calculateOrderTotal();
          this.main.v.showTotals();
          this.debugger();
          return;
        }
      }
      this.main.v.shakeField(jQuery('#giftcard'));
      return;
    }
  }, {
    key: 'applyPromo',
    value: function applyPromo(code) {
      // Check the supplied code against the model and update totals if it's good
      for (var i = 0; i < this.data.promocodes.length; i++) {
        if (this.data.promocodes[i].code === code) {
          this.data.order.promocodes.push(this.data.promocodes[i]);
          jQuery('#promocode').val('');
          this.calculateOrderTotal();
          this.main.v.showTotals();
          this.debugger();
          return;
        }
      }
      this.main.v.shakeField(jQuery('#promocode'));
      return;
    }
  }, {
    key: 'getCustomerByEmail',
    value: function getCustomerByEmail() {
      this.main.m.data.order.email = jQuery('#email-address').val();
      this.main.v.views.loader.show('Checking email...');
      // wait a short time to simulate an ajax load
      // Checks for customer existence ../models/customers.json.
      // Returns a customer object if found, false if not
      setTimeout(function () {
        this.main.m.data.customer = false;
        var allCustomers = this.main.m.data.customers;
        for (var i = 0; i < allCustomers.length; i++) {
          if (this.main.m.data.order.email === allCustomers[i].email) {
            this.main.m.data.customer = allCustomers[i];
          }
        }
        this.main.v.views.loader.hide();
      }.bind(this), this.main.m.data.config.emailCheckDelay);
    }
  }, {
    key: 'addExistingCustomer',
    value: function addExistingCustomer() {
      this.updateOrder('firstName', this.main.m.data.customer.firstName);
      this.updateOrder('lastName', this.main.m.data.customer.lastName);
      this.updateOrder('deliveryAddress', this.main.m.data.customer.deliveryAddress);
      this.updateOrder('phonenumber', this.main.m.data.customer.phonenumber);
    }
  }, {
    key: 'calculateOrderTotal',
    value: function calculateOrderTotal() {
      // Quick & dirty math to calculate totals.
      // Probably won't be needed when app is using ajax
      var subtotal = 0;
      var discounts = 0;
      var shipping = 0;
      var grandtotal = 0;
      for (var i = 0; i < this.data.orderSummary.length; i++) {
        subtotal += Number(this.data.orderSummary[i].price);
      }
      if (subtotal <= this.data.config.freeShippingMin) {
        shipping = 10;
      }

      for (var _i = 0; _i < this.data.order.promocodes.length; _i++) {
        if (this.data.order.promocodes[_i].type === 'percent') {
          discounts = Math.round(subtotal / 100 * this.data.order.promocodes[_i].amount * 100) / 100;
        }
      }

      for (var _i2 = 0; _i2 < this.data.order.giftcards.length; _i2++) {
        discounts = this.data.order.giftcards[_i2].amount;
      }

      grandtotal = Math.round((subtotal - discounts + shipping) * 100) / 100;
      this.m.updateOrder('subtotal', subtotal);
      this.m.updateOrder('discounts', discounts);
      this.m.updateOrder('shipping', shipping);
      this.m.updateOrder('grandtotal', grandtotal);
    }
  }, {
    key: 'removeOrderItem',
    value: function removeOrderItem(sku) {
      // Pop an order item out of the orderSummary array by sku
      for (var i = this.data.summary.length - 1; i >= 0; i--) {
        if (this.data.summary[i].sku === sku) {
          this.data.summary.splice(i, 1);
        }
      }
    }
  }, {
    key: 'setPaymentMethod',
    value: function setPaymentMethod(option) {
      switch (option) {
        case 'card':
          jQuery('#card-div').fadeIn(this.main.m.data.config.animationDuration);
          jQuery('#paypal-div').hide();
          jQuery('#afterpay-div').hide();
          jQuery('#card').attr('src', '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/card_over.png');
          jQuery('#paypal').attr('src', '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/paypal.png');
          jQuery('#afterpay').attr('src', '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/afterpay.png');
          break;
        case 'paypal':
          jQuery('#card-div').hide();
          jQuery('#paypal-div').fadeIn(this.main.m.data.config.animationDuration);
          jQuery('#afterpay-div').hide();
          jQuery('#card').attr('src', '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/card.png');
          jQuery('#paypal').attr('src', '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/paypal_over.png');
          jQuery('#afterpay').attr('src', '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/afterpay.png');
          break;
        case 'afterpay':
          jQuery('#card-div').hide();
          jQuery('#paypal-div').hide();
          jQuery('#afterpay-div').fadeIn(this.main.m.data.config.animationDuration);
          jQuery('#card').attr('src', '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/card.png');
          jQuery('#paypal').attr('src', '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/paypal.png');
          jQuery('#afterpay').attr('src', '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/afterpay_over.png');
          break;
        default:
      }
      this.m.updateOrder('paymentMethod', option);
    }
  }]);

  return Model;
}();

exports.default = Model;

},{"../config":19,"./models/customers":8,"./models/giftcards":9,"./models/orderSummary":10,"./models/promocodes":11}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Aligent CheckItOut
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @category   Aligent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @package    aligent-checkitout
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright  Copyright (c) 2017 Aligent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author     Chris Dorward <chris.dorward@aligent.com.au>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * src/js/View.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Handles everything to do with displaying, logging & rendering
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ViewDeliveryPayment = require('./views/ViewDeliveryPayment');

var _ViewDeliveryPayment2 = _interopRequireDefault(_ViewDeliveryPayment);

var _ViewEmail = require('./views/ViewEmail');

var _ViewEmail2 = _interopRequireDefault(_ViewEmail);

var _ViewLoader = require('./views/ViewLoader');

var _ViewLoader2 = _interopRequireDefault(_ViewLoader);

var _ViewPassword = require('./views/ViewPassword');

var _ViewPassword2 = _interopRequireDefault(_ViewPassword);

var _ViewPlaceOrder = require('./views/ViewPlaceOrder');

var _ViewPlaceOrder2 = _interopRequireDefault(_ViewPlaceOrder);

var _ViewSummary = require('./views/ViewSummary');

var _ViewSummary2 = _interopRequireDefault(_ViewSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View(main) {
    _classCallCheck(this, View);

    this.main = main;
    this.shortName = 'v';
    this.views = {};
    this.views.summary = new _ViewSummary2.default(main);
    this.views.email = new _ViewEmail2.default(main);
    this.views.password = new _ViewPassword2.default(main);
    this.views.deliverypayment = new _ViewDeliveryPayment2.default(main);
    this.views.loader = new _ViewLoader2.default(main);
    this.views.placeorder = new _ViewPlaceOrder2.default(main);
  }

  _createClass(View, [{
    key: 'setDependents',
    value: function setDependents(dependents) {
      // Set Dependent MVC Classes
      // See https://tinyurl.com/yaqgy73w
      for (var i = 0; i < dependents.length; i++) {
        this[dependents[i].shortName] = dependents[i];
      }
    }
  }, {
    key: 'shakeField',
    value: function shakeField(field) {
      jQuery(field).removeClass('input-error-fade');
      jQuery(field).addClass('input-error');
      setTimeout(function () {
        jQuery(field).addClass('input-error-fade');
      }, this.main.m.data.config.cssTransitionDuration);
      jQuery(field).shake();
    }
  }, {
    key: 'showTotals',
    value: function showTotals() {
      jQuery('#subtotal').html('$' + this.m.data.order.subtotal);
      if (this.m.data.order.discounts === 0) {
        jQuery('.discounts').hide();
      } else {
        jQuery('#discounts').html('-$' + this.m.data.order.discounts);
        jQuery('.discounts').fadeIn(this.main.m.data.config.animationDuration);
      }

      if (this.m.data.order.promocodes.length === 0) {
        jQuery('.promocodes').hide();
      } else {
        var codes = '';
        for (var i = 0; i < this.m.data.order.promocodes.length; i++) {
          codes += '<strong>' + this.m.data.order.promocodes[i].code + '</strong>';
          if (i < this.m.data.order.promocodes.length) {
            codes += '<br />';
          }
        }
        jQuery('#promocodes').html(codes);
        jQuery('.promocodes').fadeIn(this.main.m.data.config.animationDuration);
      }

      if (this.m.data.order.giftcards.length === 0) {
        jQuery('.giftcards').hide();
      } else {
        var _codes = '';
        for (var _i = 0; _i < this.m.data.order.giftcards.length; _i++) {
          _codes += '<strong>' + this.m.data.order.giftcards[_i].code + '</strong>';
          if (_i < this.m.data.order.giftcards.length) {
            _codes += '<br />';
          }
        }
        jQuery('#giftcards').html(_codes);
        jQuery('.giftcards').fadeIn(this.main.m.data.config.animationDuration);
      }

      if (this.m.data.order.shipping === 0) {
        jQuery('#shipping-message').html('Enjoy <span class="bold">FREE EXPRESS SHIPPING</span> on us!');
        jQuery('#shipping').html('FREE');
      } else {
        var shortfall = Math.round((this.m.data.config.freeShippingMin - this.m.data.order.subtotal) * 100) / 100;
        jQuery('#shipping-message').html('You are AUD <span class="bold">$' + shortfall + '</span> away from FREE SHIPPING');
        jQuery('#shipping').html('$' + this.m.data.order.shipping);
      }
      jQuery('#grandtotal').html('$' + this.m.data.order.grandtotal);
    }
  }]);

  return View;
}();

exports.default = View;

},{"./views/ViewDeliveryPayment":12,"./views/ViewEmail":13,"./views/ViewLoader":14,"./views/ViewPassword":15,"./views/ViewPlaceOrder":16,"./views/ViewSummary":17}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/controllers/ControllerDeliveryPayment.js
 * Delivery Screen UI
 *
 */

var ControllerDeliveryPayment = function () {
  function ControllerDeliveryPayment(main) {
    _classCallCheck(this, ControllerDeliveryPayment);

    this.main = main;
  }

  _createClass(ControllerDeliveryPayment, [{
    key: 'setUI',
    value: function setUI() {
      var _this = this;

      jQuery(window).unbind('keypress');

      // Setup the google places auto fill address sccreen
      // https://developers.google.com/maps/documentation/javascript/places-autocomplete
      this.deliveryField = new google.maps.places.Autocomplete(document.getElementById('delivery-address'), {
        types: ['geocode'],
        main: this.main,
        callback: this.fillInDelivery
      });
      this.geolocate(this.deliveryField);
      this.deliveryField.addListener('place_changed', function () {
        jQuery('#delivery-address').val('');
        this.callback(this.getPlace());
      });

      jQuery('#delivery-manual-hidden').hide();
      jQuery('#address-not-found').click(function () {
        _this.main.v.views.deliverypayment.showManualDelivery();
        return false;
      });

      // Set default authorityToLeave signup to no
      if (this.main.m.data.order.authorityToLeave === '') {
        this.main.m.updateOrder('authorityToLeave', 'no');
        jQuery('#input-leave-info').hide();
      }
      jQuery('#authority-to-leave').click(function (event) {
        if (jQuery('#authority-to-leave').is(':checked')) {
          this.main.m.updateOrder('authorityToLeave', 'yes');
          this.main.v.views.deliverypayment.showAuthorityToLeave();
        } else {
          this.main.m.updateOrder('authorityToLeave', 'no');
          this.main.v.views.deliverypayment.hideAuthorityToLeave();
        }
      }.bind(this));

      jQuery('#firstname').focusout(function () {
        _this.main.m.updateOrder('firstName', jQuery('#firstname').val());
      });

      jQuery('#delivery-address').focusout(function () {
        _this.main.m.updateOrder('deliveryAddress', jQuery('#delivery-address').val());
      });

      jQuery('#billing-firstname').focusout(function () {
        _this.main.m.updateOrder('billingFirstName', jQuery('#billing-firstname').val());
      });

      jQuery('#billing-lastname').focusout(function () {
        _this.main.m.updateOrder('billingLastName', jQuery('#billing-lastname').val());
      });

      jQuery('#lastname').focusout(function () {
        _this.main.m.updateOrder('lastName', jQuery('#lastname').val());
      });

      jQuery('#input-leave-info').focusout(function () {
        _this.main.m.updateOrder('authorityToLeaveInfo', jQuery('#input-leave-info').val());
      });

      jQuery('#businessname').focusout(function () {
        _this.main.m.updateOrder('businessname', jQuery('#businessname').val());
      });

      jQuery('#phonenumber').focusout(function () {
        _this.main.m.updateOrder('phonenumber', jQuery('#phonenumber').val());
      });

      // Set default bill to different address as no
      // Setup the google places auto fill address sccreen
      // https://developers.google.com/maps/documentation/javascript/places-autocomplete
      this.billingField = new google.maps.places.Autocomplete(document.getElementById('billing-address'), {
        types: ['geocode'],
        main: this.main,
        callback: this.fillInBilling
      });
      this.geolocate(this.billingField);
      this.billingField.addListener('place_changed', function () {
        jQuery('#billing-address').val('');
        this.callback(this.getPlace());
      });

      if (this.main.m.data.order.billToDifferentAddress === '') {
        this.main.m.updateOrder('billToDifferentAddress', 'no');
        this.main.v.views.deliverypayment.hideBillingAddress();
        this.main.v.views.deliverypayment.hideManualBilling();
      }
      jQuery('#bill-to-different').click(function (event) {
        if (jQuery('#bill-to-different').is(':checked')) {
          this.main.m.updateOrder('billToDifferentAddress', 'yes');
          this.main.v.views.deliverypayment.showBillingAddress();
        } else {
          this.main.m.updateOrder('billToDifferentAddress', 'no');
          this.main.v.views.deliverypayment.hideBillingAddress();
        }
      }.bind(this));

      jQuery('#billing-address-not-found').click(function () {
        _this.main.v.views.deliverypayment.showManualBilling();
        return false;
      });

      // Set default payment method to paypal
      if (this.main.m.data.order.paymentMethod === '') {
        this.main.m.setPaymentMethod('paypal');
      }

      jQuery('.payment-option').click(function (event) {
        this.main.m.setPaymentMethod(event.target.id);
      }.bind(this));

      jQuery('.payment-option').hover(function (event) {
        if (event.target.id !== this.main.m.data.order.paymentMethod) {
          event.target.src = '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/' + event.target.id + '_over.png';
        }
      }.bind(this), function (event) {
        if (event.target.id !== this.main.m.data.order.paymentMethod) {
          event.target.src = '/skin/frontend/base/default/images/aligent/cartcheckitout/payment/' + event.target.id + '.png';
        }
      }.bind(this));

      jQuery('#apply-promo').click(function (event) {
        _this.main.m.applyPromo(jQuery('#promocode').val().toUpperCase());
      });

      jQuery('#redeem-giftcard').click(function (event) {
        _this.main.m.redeemGift(jQuery('#giftcard').val());
      });

      // Set default newsletter signup as yes
      if (this.main.m.data.order.newsletter === '') {
        this.main.m.updateOrder('newsletter', 'yes');
      }
      jQuery('#newsletter-signup').click(function (event) {
        if (jQuery('#newsletter-signup').is(':checked')) {
          this.main.m.updateOrder('newsletter', 'yes');
        } else {
          this.main.m.updateOrder('newsletter', 'no');
        }
      }.bind(this));

      //   if (event.keyCode === 13) {
      //     this.validateOrder();
      //   }
      // });
    }
  }, {
    key: 'geolocate',
    value: function geolocate(autocomplete) {
      var _this2 = this;

      // Bias the autocomplete object to the user's geographical location,
      jQuery('#place-order').click(function (event) {
        _this2.validateOrder();
      });

      // jQuery(window).keypress((event) => {
      // as supplied by the browser's 'navigator.geolocation' object.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          autocomplete.setBounds(circle.getBounds());
        });
      }
    }
  }, {
    key: 'fillInDelivery',
    value: function fillInDelivery(place) {
      var numComponents = place.address_components.length;
      var street0 = place.address_components[0].short_name || '';
      var street1 = place.address_components[1].short_name || '';
      var street2 = place.address_components[2].short_name || '';
      var streetAddress = street0 + ' ' + street1;
      if (numComponents === 8) {
        streetAddress = street0 + ' ' + street1 + ' ' + street2;
      }
      jQuery('#delivery-street-address').val(streetAddress);
      var city = place.address_components[numComponents - 5].short_name;
      jQuery('#delivery-city').val(city);
      var state = place.address_components[numComponents - 3].short_name;
      jQuery('#delivery-state').val(state);
      var postcode = place.address_components[numComponents - 1].short_name;
      jQuery('#delivery-postcode').val(postcode);
      var deliveryAddress = streetAddress + ', ' + city + ', ' + state + ', ' + postcode;
      jQuery('#delivery-address').val(deliveryAddress);
      this.main.m.updateOrder('deliveryAddress', deliveryAddress);
    }
  }, {
    key: 'fillInBilling',
    value: function fillInBilling(place) {
      var numComponents = place.address_components.length;
      var street0 = place.address_components[0].short_name || '';
      var street1 = place.address_components[1].short_name || '';
      var street2 = place.address_components[2].short_name || '';
      var streetAddress = street0 + ' ' + street1;
      if (numComponents === 8) {
        streetAddress = street0 + ' ' + street1 + ' ' + street2;
      }
      jQuery('#billing-street-address').val(streetAddress);
      var city = place.address_components[numComponents - 5].short_name;
      jQuery('#billing-city').val(city);
      var state = place.address_components[numComponents - 3].short_name;
      jQuery('#billing-state').val(state);
      var postcode = place.address_components[numComponents - 1].short_name;
      jQuery('#billing-postcode').val(postcode);
      var billingAddress = streetAddress + ', ' + city + ', ' + state + ', ' + postcode;
      jQuery('#billing-address').val(billingAddress);
      this.main.m.updateOrder('billingAddress', billingAddress);
      console.log('this.main.m.updateOrder');
    }
  }, {
    key: 'addTick',
    value: function addTick(field) {
      jQuery(field).removeClass('input-error');
      jQuery(field).addClass('input-ticked');
    }
  }, {
    key: 'removeTick',
    value: function removeTick(field) {
      jQuery(field).removeClass('input-ticked');
    }
  }, {
    key: 'validateOrder',
    value: function validateOrder() {
      var orderReady = true;
      var firstErrorField = false;

      // firstname field must not be blank
      if (jQuery('#firstname').val() === '') {
        this.main.v.shakeField(jQuery('#firstname'));
        this.removeTick(jQuery('#firstname'));
        orderReady = false;
        firstErrorField = jQuery('#firstname');
      } else {
        this.addTick(jQuery('#firstname'));
      }

      // lastname field must not be blank
      if (jQuery('#lastname').val() === '') {
        this.main.v.shakeField(jQuery('#lastname'));
        this.removeTick(jQuery('#lastname'));
        orderReady = false;
        if (!firstErrorField) {
          firstErrorField = jQuery('#lastname');
        }
      } else {
        this.addTick(jQuery('#lastname'));
      }

      // delivery address field must not be blank
      if (jQuery('#delivery-address').val() === '') {
        this.main.v.shakeField(jQuery('#delivery-address'));
        this.removeTick(jQuery('#delivery-address'));
        orderReady = false;
        if (!firstErrorField) {
          firstErrorField = jQuery('#delivery-address');
        }
      } else {
        this.addTick(jQuery('#delivery-address'));
      }

      if (this.main.m.data.order.billToDifferentAddress === 'yes') {
        // billing firstname must not be blank
        if (jQuery('#billing-firstname').val() === '') {
          this.main.v.shakeField(jQuery('#billing-firstname'));
          this.removeTick(jQuery('#billing-firstname'));
          orderReady = false;
          firstErrorField = jQuery('#billing-firstname');
        } else {
          this.addTick(jQuery('#billing-firstname'));
        }

        // billing lastname must not be blank
        if (jQuery('#billing-lastname').val() === '') {
          this.main.v.shakeField(jQuery('#billing-lastname'));
          this.removeTick(jQuery('#billing-lastname'));
          orderReady = false;
          firstErrorField = jQuery('#billing-lastname');
        } else {
          this.addTick(jQuery('#billing-lastname'));
        }

        // billing address must not be blank
        if (jQuery('#billing-address').val() === '') {
          this.main.v.shakeField(jQuery('#billing-address'));
          this.removeTick(jQuery('#billing-address'));
          orderReady = false;
          firstErrorField = jQuery('#billing-address');
        } else {
          this.addTick(jQuery('#billing-address'));
        }
      }

      if (this.main.m.data.order.paymentMethod === 'card') {
        // card number must not be blank
        if (jQuery('#cardnumber').val() === '') {
          this.main.v.shakeField(jQuery('#cardnumber'));
          this.removeTick(jQuery('#cardnumber'));
          orderReady = false;
          firstErrorField = jQuery('#cardnumber');
        } else {
          this.addTick(jQuery('#cardnumber'));
        }

        // expiry must not be blank
        if (jQuery('#expiry').val() === '') {
          this.main.v.shakeField(jQuery('#expiry'));
          this.removeTick(jQuery('#expiry'));
          orderReady = false;
          firstErrorField = jQuery('#expiry');
        } else {
          this.addTick(jQuery('#expiry'));
        }

        // cvc must not be blank
        if (jQuery('#cvc').val() === '') {
          this.main.v.shakeField(jQuery('#cvc'));
          this.removeTick(jQuery('#cvc'));
          orderReady = false;
          firstErrorField = jQuery('#cvc');
        } else {
          this.addTick(jQuery('#cvc'));
        }
      }

      // Submit the order if it's ready this.addTick(jQuery('#delivery-address'));
      if (orderReady) {
        this.submitOrder();
      } else {
        setTimeout(function () {
          jQuery(firstErrorField).focus();
        }, 500);
      }
    }
  }, {
    key: 'submitOrder',
    value: function submitOrder() {
      this.main.v.views.summary.hide();
      this.main.v.views.deliverypayment.hide();
      this.main.v.views.placeorder.show();
    }
  }]);

  return ControllerDeliveryPayment;
}();

exports.default = ControllerDeliveryPayment;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/controllers/ControllerEmail.js
 * Email Screen UI
 *
 */

var ControllerEmail = function () {
  function ControllerEmail(main) {
    _classCallCheck(this, ControllerEmail);

    this.main = main;
  }

  _createClass(ControllerEmail, [{
    key: 'setUI',
    value: function setUI() {
      var _this = this;

      jQuery(window).unbind('keypress');
      jQuery('#email-continue').click(function (event) {
        _this.main.c.controllers.email.checkValidity();
      });
      jQuery(window).keypress(function (event) {
        if (event.keyCode === 13) {
          _this.main.c.controllers.email.checkValidity();
        }
      });
    }
  }, {
    key: 'checkValidity',
    value: function checkValidity() {
      var validity = this.validateEmail(jQuery('#email-address').val());
      if (!validity.valid) {
        this.main.v.views.email.showError(validity.message);
      } else {
        this.main.v.views.email.hide();
      }
    }
  }, {
    key: 'validateEmail',
    value: function validateEmail(email) {
      // Check for empty field
      if (email === '') {
        return {
          valid: false,
          message: 'Enter your email address'
        };
      } else {
        // Check for a valid email address (@ sign, tld etc)
        // returns true if valid, false if not. http://hexillion.com/samples/
        var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
        if (!email.match(reEmail)) {
          return {
            valid: false,
            message: 'Not a valid email address'
          };
        }
      }
      return {
        valid: true
      };
    }
  }]);

  return ControllerEmail;
}();

exports.default = ControllerEmail;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/controllers/ControllerPassword.js
 * Password Screen UI
 *
 */

var ControllerPassword = function () {
  function ControllerPassword(main) {
    _classCallCheck(this, ControllerPassword);

    this.main = main;
  }

  _createClass(ControllerPassword, [{
    key: 'setUI',
    value: function setUI() {
      var _this = this;

      jQuery(window).unbind('keypress');
      jQuery('#password-continue').click(function (event) {
        _this.checkValidity();
      });
      jQuery(window).keypress(function (event) {
        if (event.keyCode === 13) {
          _this.checkValidity();
        }
      });
    }
  }, {
    key: 'checkValidity',
    value: function checkValidity() {
      var validity = this.validatePassword(jQuery('#password').val());
      if (!validity.valid) {
        this.main.v.views.password.showError(validity.message);
      } else {
        this.main.v.views.password.hide();
      }
    }
  }, {
    key: 'validatePassword',
    value: function validatePassword(password) {
      if (this.main.m.data.order.customerType === 'new') {
        if (password !== '' && password.length > 5) {
          return {
            valid: true
          };
        } else {
          return {
            valid: false,
            message: 'Please enter 6 or more characters.'
          };
        }
      } else {
        if (this.main.m.data.customer.password === password) {
          this.main.m.addExistingCustomer();
          return {
            valid: true
          };
        } else {
          return {
            valid: false,
            message: 'Incorrect password.'
          };
        }
      }
      return false;
    }
  }]);

  return ControllerPassword;
}();

exports.default = ControllerPassword;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/maodels/customers.js
 * Example Customers Model
 *
 */

exports.default = {
  "customers": [{
    "cId": "000001",
    "email": "chris.dorward@aligent.com.au",
    "firstName": "Chris",
    "lastName": "Dorward",
    "password": "password",
    "deliveryAddress": "58 Hampton St S, Goodwood, SA 5034",
    "country": "Australia",
    "billing": "200 Goodwood Road, Goodwood, SA 5034"
  }, {
    "cId": "000002",
    "email": "chris@listingslab.com",
    "firstName": "Christopher",
    "lastName": "Dorward",
    "password": "password",
    "deliveryAddress": "4 Holst Mead, Stowmarket, IP14 1TD",
    "billingAddress": "58 Hampton St S, Goodwood, SA 5034",
    "country": "Australia"
  }, {
    "cId": "000003",
    "email": "listingslab@gmail.com",
    "firstName": "Listingslab",
    "lastName": "",
    "password": "password",
    "deliveryAddress": "58 Hampton St S, Goodwood, SA 5034",
    "country": "Australia"
  }, {
    "cId": "000004",
    "email": "michael@aligent.com.au",
    "firstName": "Michael",
    "lastName": "Wylde",
    "password": "password",
    "deliveryAddress": "14 Stamford Court, Adelaide, SA 5000",
    "billingAddress": "18 Westpac Tower, Adelaide, SA 5000",
    "country": "Australia"
  }, {
    "cId": "000005",
    "email": "william.chambers@aligent.com.au",
    "firstName": "William",
    "lastName": "Chambers",
    "password": "password",
    "deliveryAddress": "14 Stamford Court, Adelaide, SA 5000",
    "country": "Australia",
    "businessName": "Aligent",
    "phonenumber": "0422 222 333"
  }]
};

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/maodels/coupons.js
 * Example giftcards Model
 *
 */

exports.default = {
  "giftcards": [{
    "code": "805956452585",
    "amount": "100"
  }, {
    "code": "0123456789",
    "amount": "50"
  }, {
    "code": "9876543210",
    "amount": "100"
  }]
};

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/models/orderSummary.js
 * Example Order Summary Model
 *
 */

exports.default = {
  "orderSummary": [{
    "sku": "000003",
    "title": "Fly Away Tankini",
    "image": "/skin/frontend/base/default/images/aligent/cartcheckitout/products/cds53ta5386.900_tiedyeabstraction_flyaway_tankini_1.1489675773.jpg",
    "desc": "Fly Away tankinis are in.",
    "size": "14",
    "colour": "Black",
    "price": "199.99"
  }, {
    "sku": "000001",
    "title": "Jets Arcadia Bandeau",
    "image": "/skin/frontend/base/default/images/aligent/cartcheckitout/products/jetj4954_arcadia_bandeau_4.1496373923.jpg",
    "desc": "Jets Arcadia Bandeau",
    "size": "10",
    "colour": "Blue",
    "price": "99.99"
  }, {
    "sku": "000002",
    "title": "Speedo Mens Avalon Heritage Watershort",
    "image": "/skin/frontend/base/default/images/aligent/cartcheckitout/products/sp1539a6220.960_mens_avalon_heritage_watershort_3.1484384302.jpg",
    "desc": "Speedo Mens Avalon Heritage Watershort",
    "size": "14",
    "colour": "Orange",
    "price": "79.99"
  }]
};

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/maodels/coupons.js
 * Example promocodes Model
 *
 */

exports.default = {
  "promocodes": [{
    "code": "25OFF",
    "type": "percent",
    "amount": "25"
  }, {
    "code": "100OFF",
    "type": "percent",
    "amount": "100"
  }]
};

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/views/ViewDeliveryPayment.js
 * Delivery Screen
 *
 */

var ViewDeliveryPayment = function () {
  function ViewDeliveryPayment(main) {
    _classCallCheck(this, ViewDeliveryPayment);

    this.main = main;
  }

  _createClass(ViewDeliveryPayment, [{
    key: 'show',
    value: function show() {
      this.main.m.calculateOrderTotal();
      jQuery('#middle').html(this.main.v.views.deliverypayment.getDeliveryContent());
      jQuery('#delivery-div').hide();
      jQuery('#delivery-div').fadeIn(this.main.m.data.config.animationDuration);
      jQuery('#right').html(this.main.v.views.deliverypayment.getPaymentContent());
      jQuery('#payment-div').hide();
      jQuery('#payment-div').fadeIn(this.main.m.data.config.animationDuration);
      this.main.v.showTotals();
      this.main.c.controllers.deliverypayment.setUI();
    }
  }, {
    key: 'showBillingAddress',
    value: function showBillingAddress() {
      jQuery('#billing-address-hidden').fadeIn(this.main.m.data.config.animationDuration);
      setTimeout(function () {
        jQuery('#billing-firstname').focus();
      }, 500);
    }
  }, {
    key: 'hideBillingAddress',
    value: function hideBillingAddress() {
      jQuery('#billing-address-hidden').hide();
    }
  }, {
    key: 'showAuthorityToLeave',
    value: function showAuthorityToLeave() {
      jQuery('#input-leave-info').fadeIn(this.main.m.data.config.animationDuration);
      setTimeout(function () {
        jQuery('#input-leave-info').focus();
      }, 500);
    }
  }, {
    key: 'showManualBilling',
    value: function showManualBilling() {
      jQuery('#billing-manual-hidden').fadeIn(this.main.m.data.config.animationDuration);
      setTimeout(function () {
        jQuery('#billing-street-address').focus();
      }, 500);
    }
  }, {
    key: 'hideManualBilling',
    value: function hideManualBilling() {
      jQuery('#billing-manual-hidden').hide();
    }
  }, {
    key: 'showManualDelivery',
    value: function showManualDelivery() {
      jQuery('#delivery-manual-hidden').fadeIn(this.main.m.data.config.animationDuration);
    }
  }, {
    key: 'hideAuthorityToLeave',
    value: function hideAuthorityToLeave() {
      jQuery('#input-leave-info').fadeOut(this.main.m.data.config.animationDuration);
    }
  }, {
    key: 'hide',
    value: function hide() {
      jQuery('#delivery-div').fadeOut(this.main.m.data.config.animationDuration);
      jQuery('#payment-div').fadeOut(this.main.m.data.config.animationDuration);
    }
  }, {
    key: 'getDeliveryContent',
    value: function getDeliveryContent() {
      var html = '\n          <div id="delivery-div">\n            <h3 class="screen-title">\n                <span class="screen-header">Delivery</span>\n            </h3>\n            <div class="instructions"></div>\n  \n            <div class="form-label" id="firstname-message" >First Name</div>\n            <input\n              id="firstname"\n              class="delivery-input"\n              type="text"\n              value="' + (this.main.m.data.order.firstName || '') + '"\n            />\n  \n            <div class="form-label" id="lastname-message" >Last Name</div>\n            <input\n              id="lastname"\n              class="delivery-input"\n              type="text"\n              value="' + (this.main.m.data.order.lastName || '') + '"\n            />\n            \n            <div class="form-label" id="delivery-address-message" >Delivery Address</div>\n            <input\n              id="delivery-address"\n              class="delivery-input"\n              type="text"\n              value="' + (this.main.m.data.order.deliveryAddress || '') + '"\n              placeholder=""\n            />\n            \n            <div class="delivery-address-not-found">\n                Your address not there? <a href="#" id="address-not-found" class="black-link">Click here</a>\n            </div>\n            \n            <div id="delivery-manual-hidden">\n            \n              <div class="form-label" id="input-delivery-street-address-message" >Street Address</div>\n              <input\n                id="delivery-street-address"\n                class="delivery-input"\n                type="text"\n              />\n              \n              <div class="form-label" id="input-delivery-city-message" >City</div>\n              <input\n                id="delivery-city"\n                class="delivery-input"\n                type="text"\n              />\n              \n              <div class="form-label" id="input-delivery-state-message" >State</div>\n              <input\n                id="delivery-state"\n                class="delivery-input"\n                type="text"\n              />\n              \n              <div class="form-label" id="input-delivery-state-message" >Postcode</div>\n              <input\n                id="delivery-postcode"\n                class="delivery-input"\n                type="text"\n              />\n              \n            </div>\n            \n            <div class="authority">\n              <input\n                title="Authority to leave" \n                type="checkbox" \n                class="checkbox" \n                id="authority-to-leave"\n              />\n              <label for="authority-to-leave">Authority to leave</label>\n            </div>\n            \n            <div id="input-authority">\n              <input\n                id="input-leave-info"\n                class="input-text-field"\n                type="text"\n                value=""\n              />\n            </div>\n            \n            <div class="form-label" id="businessname-message" >Business Name - <em>Optional</em></div>\n            <input\n              id="businessname"\n              class="input-text-field"\n              type="text"\n              value="' + (this.main.m.data.order.businessName || '') + '"\n            />\n            \n            <div class="form-label" id="phone-message" >Phone Number</div>\n            <input\n              id="phonenumber"\n              class="input-text-field"\n              type="text"\n              value="' + (this.main.m.data.order.phone || '') + '"\n            />\n            \n            <div class="billing-address">\n              <input\n                title="Bill to a different address" \n                type="checkbox" \n                class="checkbox" \n                id="bill-to-different"\n              />\n              <label for="bill-to-different">Bill to a different address</label>\n            </div>\n            \n            <div id="billing-address-hidden">\n            \n              <div class="form-label" id="billing-firstname-message" >First Name</div>\n                <input\n                  id="billing-firstname"\n                  class="delivery-input"\n                  type="text"\n                />\n              \n              <div class="form-label" id="billing-lastname-message" >Last Name</div>\n                <input\n                  id="billing-lastname"\n                  class="delivery-input"\n                  type="text"\n                />\n              \n              <div class="form-label" id="billing-address-message" >Billing Address</div>\n                <input\n                  id="billing-address"\n                  class="delivery-input"\n                  type="text"\n                  placeholder=""\n                />\n                \n              <div class="delivery-address-not-found">\n                Your address not there? <a href="#" id="billing-address-not-found" class="black-link">Click here</a>\n              </div>\n              \n              <div id="billing-manual-hidden">\n                <div class="form-label" id="billing-street-address-message" >Street Address</div>\n                <input\n                  id="billing-street-address"\n                  class="billing-input"\n                  type="text"\n                />\n                \n                <div class="form-label" id="billing-city-message" >City</div>\n                <input\n                  id="billing-city"\n                  class="delivery-input"\n                  type="text"\n                />\n                \n                <div class="form-label" id="billing-state-message" >State</div>\n                <input\n                  id="billing-state"\n                  class="delivery-input"\n                  type="text"\n                />\n                \n                <div class="form-label" id="billing-state-message" >Postcode</div>\n                <input\n                  id="billing-postcode"\n                  class="delivery-input"\n                  type="text"\n                />\n              </div>\n              \n              \n            \n            </div>\n  \n          </div>\n          ';
      return html;
    }
  }, {
    key: 'getPaymentContent',
    value: function getPaymentContent() {
      var html = '\n      <div id="payment-div">\n      \n        <h3 class="screen-title">\n          <span class="screen-header">Payment</span>\n        </h3>\n        \n        <div class="instructions">\n          How would you like to pay?\n        </div>\n        \n        <div class="payment-options">\n          <div class="card">\n              <img\n                  class="payment-option"\n                  id="card"\n                  alt="Pay with credit card"\n                  src="/skin/frontend/base/default/images/aligent/cartcheckitout/payment/card.png"\n              />\n          </div>\n          <div class="paypal">\n              <img\n                  class="payment-option"\n                  height="57"\n                  id="paypal"\n                  alt="Pay with PayPal"\n                  src="/skin/frontend/base/default/images/aligent/cartcheckitout/payment/paypal.png"\n              />\n          </div>\n          <div class="afterpay">\n              <img\n                  class="payment-option"\n                  height="57"\n                  id="afterpay"\n                  alt="Pay with Afterpay"\n                  src="/skin/frontend/base/default/images/aligent/cartcheckitout/payment/afterpay.png"\n              />\n          </div>\n        </div>\n        \n        <div class="payment-info" id="card-div">\n          <div id="cardnumber-message" class="form-label">Card Number</div>\n          <input\n              title="Card Number"\n              id="cardnumber"\n              class="input-text-field"\n              type="text"\n          />\n          <div class="expiry-cvc">\n              <div class="expiry">\n                  <div id="expiry-message" class="form-label">Expiry Date (MM/YY)</div>\n                  <input\n                      title="Expiry Date"\n                      id="expiry"\n                      class="input-text-field"\n                      type="text"\n                  />\n              </div>\n              <div class="cvc">\n                  <div id="cvc-message" class="form-label">CVC</div>\n                  <input\n                      title="CVC"\n                      id="cvc"\n                      class="input-text-field"\n                      type="text"\n                  />\n              </div>\n          </div>\n        </div>\n        \n        <div class="payment-info" id="paypal-div">\n            <p>You will be redirected to PayPal complete your order.</p>\n        </div>\n        \n        <div class="payment-info" id="afterpay-div">\n          <p><strong>4 equal payments of $' + Math.round(this.main.m.data.order.grandtotal / 4 * 100) / 100 + '</strong></p>\n          <p>Pay for your purchase over four equal fortnightly installments with no interest.\n              Afterpay makes it simple to pay when it suits you best. Available to customers in\n              Australia with a debit or credit card.</p>\n          <p>When you click \'<strong>PLACE YOUR ORDER</strong>\' you will be redirected to Afterpay\n              to complete your order.</p>\n          <p><a\n                class="afterpay-link"\n                href="https://www.afterpay.com.au"\n                target="_blank"\n          >Find out more</a></p>\n        </div>\n        \n        <div class="payment-separator" />\n        \n        <div id="promo-message" class="form-label">Promo Code</div>\n        <div class="promo">\n          <div class="input-promo">\n              <input\n                  title="Promo Code"\n                  id="promocode"\n                  class="input-text-field uppercase-field"\n                  type="text"\n              />\n          </div>\n          <div class="submit-promo">\n              <input\n                  id="apply-promo"\n                  type="button"\n                  value="Apply"\n              />\n          </div>\n        </div>\n        \n        <div id="gift-message" class="form-label">Gift Card</div>\n        \n        <div class="gift">\n          <div class="input-gift">\n            <input\n              title="Gift Card"\n              id="giftcard"\n              class="input-text-field"\n              type="text"\n            />\n          </div>\n          <div class="submit-gift">\n            <input\n              id="redeem-giftcard"\n              type="button"\n              value="Redeem"\n            />\n          </div>\n        </div>\n        \n        <div class="newsletter">\n          <input\n            type="checkbox"\n            class="checkbox"\n            id="newsletter-signup"\n            title="Sign up to newsletter"\n            checked="checked"\n          />\n          <label for="newsletter-signup">Sign up to Summer Lovers Club to be in the know!</label>\n        </div>\n        \n        <div class="free-shipping" id="shipping-message">\n          You are <span id="dollars-short" class="bold">$xx</span> away from <span class="bold">FREE SHIPPING</span>\n        </div>\n        \n        <div class="totals">\n          <div class="subtotal">\n            <div class="total-col">subtotal</div>\n            <div class="total-col flex-right" id="subtotal">$</div>\n          </div>\n          <div class="promocodes">\n            <div class="total-col">promo codes</div>\n            <div class="total-col flex-right" id="promocodes"></div>\n          </div>\n          <div class="giftcards">\n            <div class="total-col">gift cards</div>\n            <div class="total-col flex-right" id="giftcards"></div>\n          </div>\n          <div class="discounts">\n            <div class="total-col">discounts</div>\n            <div class="total-col flex-right" id="discounts">$</div>\n          </div>\n          <div class="shipping">\n            <div class="total-col">shipping</div>\n            <div class="total-col flex-right" id="shipping">$</div>\n          </div>\n          <div class="grandtotal">\n            <div class="total-col">Grand Total</div>\n            <div class="total-col flex-right" id="grandtotal">$</div>\n          </div>\n        </div>\n        \n        <input\n          id="place-order"\n          class="btn-place-order"\n          type="button"\n          value="PLACE YOUR ORDER"\n        />\n        \n      </div>\n    ';
      return html;
    }
  }]);

  return ViewDeliveryPayment;
}();

exports.default = ViewDeliveryPayment;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/views/ViewEmail.js
 *
 */

var ViewEmail = function () {
  function ViewEmail(main) {
    _classCallCheck(this, ViewEmail);

    this.main = main;
  }

  _createClass(ViewEmail, [{
    key: 'show',
    value: function show() {
      jQuery('#middle').html(this.main.v.views.email.getContent());
      jQuery('#email-div').hide();
      jQuery('#email-div').fadeIn(this.main.m.data.config.animationDuration, this.main.c.controllers.email.setUI.bind(this));
      setTimeout(function () {
        jQuery('#email-address').focus();
      }, 500);
    }
  }, {
    key: 'showError',
    value: function showError(message) {
      this.main.v.shakeField(jQuery('#email-address'));
      jQuery('#email-message').html('' + message);
    }
  }, {
    key: 'hide',
    value: function hide() {
      jQuery('#email-div').fadeOut(this.main.m.data.config.animationDuration, this.main.m.getCustomerByEmail.bind(this));
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var html = '\n      <div id="email-div">\n        <h3 class="screen-title">\n            <span class="screen-header">First things first</span>\n        </h3>\n        <div class="instructions">\n            <p>Please enter your email address to continue\n            to delivery &amp; payment.</p>\n        </div>\n        <div id="email">\n            <div class="form-label" id="email-message" >Email Address</div>\n            <input\n              id="email-address"\n              class="input-text-field"\n              type="text"\n              value="' + this.main.m.data.config.defaultEmail + '"\n            />\n            <input\n              id="email-continue"\n              type="button"\n              value="CONTINUE"\n            />\n        </div>\n      </div>';
      return html;
    }
  }]);

  return ViewEmail;
}();

exports.default = ViewEmail;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/views/ViewLoader.js
 *
 */

var ViewLoader = function () {
  function ViewLoader(main) {
    _classCallCheck(this, ViewLoader);

    this.main = main;
  }

  _createClass(ViewLoader, [{
    key: 'show',
    value: function show(message) {
      jQuery('#middle').html(this.getContent(message));
      jQuery('#loader-div').hide();
      jQuery('#loader-div').fadeIn(this.main.m.data.config.animationDuration);
    }
  }, {
    key: 'hide',
    value: function hide() {
      jQuery('#loader-div').fadeOut(this.main.m.data.config.animationDuration, this.main.v.views.password.show.bind(this));
    }
  }, {
    key: 'getContent',
    value: function getContent(message) {
      var html = '\n      <div id="loader-div">\n\n        <div class="loader">\n            <img\n                alt="' + message + '"\n                src="/skin/frontend/base/default/images/aligent/cartcheckitout/ajax-loader.gif"\n            />\n            &nbsp;&nbsp;&nbsp;' + message + '\n        </div>\n      </div>';
      return html;
    }
  }]);

  return ViewLoader;
}();

exports.default = ViewLoader;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/views/ViewPassword.js
 *
 */

var ViewPassword = function () {
  function ViewPassword(main) {
    _classCallCheck(this, ViewPassword);

    this.main = main;
  }

  _createClass(ViewPassword, [{
    key: 'show',
    value: function show() {
      jQuery('#middle').html(this.main.v.views.password.getContent());
      jQuery('#password-div').hide();
      jQuery('#password-div').fadeIn(this.main.m.data.config.animationDuration);
      this.main.c.controllers.password.setUI();
      setTimeout(function () {
        jQuery('#password').focus();
      }, 500);
    }
  }, {
    key: 'showError',
    value: function showError(message) {
      this.main.v.shakeField(jQuery('#password'));
      jQuery('#password-message').html('' + message);
    }
  }, {
    key: 'hide',
    value: function hide() {
      jQuery('#password-div').fadeOut(this.main.m.data.config.animationDuration, this.main.v.views.deliverypayment.show.bind(this));
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var customerType = 'none';
      var customerObj = this.main.m.data.customer;
      if (!customerObj) {
        this.main.m.updateOrder('customerType', 'new');
        customerType = 'new';
      } else {
        this.main.m.updateOrder('customerType', 'returning');
        customerType = 'returning';
      }
      var html = '';
      if (customerType === 'returning') {
        html += '\n          <div id="password-div">\n            <h3 class="screen-title">\n                <span class="screen-header">Welcome back!</span>\n            </h3>\n              <div class="instructions">\n              <p>Please enter your password to continue to delivery & payment</p>\n          </div>';
      } else if (customerType === 'new') {

        html += '\n            <div id="password-div">\n            <h3 class="screen-title">\n                <span class="screen-header">Welcome Aboard</span>\n            </h3>\n            <div class="instructions">\n              <p>Please create a password to continue to delivery & payment</p>\n            </div>';
      }

      html += '\n            <div id="password-message" class="form-label">Password</div>\n            <input\n              id="password"\n              class="input-text-field"\n              type="password"\n              value="' + this.main.m.data.config.defaultPassword + '"\n            />\n            \n            <input id="password-continue" type="button" value="CONTINUE" />\n          ';

      html += '\n            <div class="link-checkout-guest">\n              <a\n                  href="#"\n                  id="guest-checkout"\n              >Checkout as guest</a>\n            </div>\n          ';

      html += '</div>';
      return html;
    }
  }]);

  return ViewPassword;
}();

exports.default = ViewPassword;

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/views/ViewPlaceOrder.js
 *
 */

var ViewPlaceOrder = function () {
  function ViewPlaceOrder(main) {
    _classCallCheck(this, ViewPlaceOrder);

    this.main = main;
  }

  _createClass(ViewPlaceOrder, [{
    key: 'show',
    value: function show() {
      jQuery('#middle').html('');
      jQuery('#order-div').hide();
      jQuery('#order-div').fadeIn(this.main.m.data.config.animationDuration);
      jQuery('.debug').show();
    }
  }]);

  return ViewPlaceOrder;
}();

exports.default = ViewPlaceOrder;

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/views/ViewSummary.js
 * Order Summary
 *
 */

var ViewSummary = function () {
  function ViewSummary(main) {
    _classCallCheck(this, ViewSummary);

    this.main = main;
  }

  _createClass(ViewSummary, [{
    key: 'show',
    value: function show() {
      jQuery('#left').html(this.getContent());
      jQuery('#summary-div').hide();
      jQuery('#summary-div').fadeIn(this.main.m.data.config.animationDuration);
    }
  }, {
    key: 'hide',
    value: function hide() {
      jQuery('#summary-div').fadeOut(this.main.m.data.config.animationDuration);
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var summaryArr = this.main.m.data.orderSummary;
      var html = '\n      <div id="summary-div">\n        <h3 class="screen-title">\n            <span class="screen-header">\n               Order Summary\n            </span>\n        </h3>\n        <div class="summary-total">' + summaryArr.length + ' Items</div>\n      ';
      for (var i = 0; i < summaryArr.length; i++) {
        var div = '<div id="" class="summary-item">';
        div += '<div class="summary-item-image">\n                  <img\n                src="' + summaryArr[i].image + '"\n                alt="' + summaryArr[i].desc + '"\n                />\n              </div>';
        div += '<div class="summary-item-info">\n                  <div class="item-title">' + summaryArr[i].title + '</div>\n                  <div class="item-price">$' + summaryArr[i].price + '</div>\n                  <div class="item-size">Size ' + summaryArr[i].size + '</div>\n                  <div class="item-colour">Colour ' + summaryArr[i].colour + '</div>\n              </div>';
        div += '</div>';
        html += div;
      }
      html += '<a\n                href="/checkout/cart/"\n                title="back"\n                class="black-link font-small"\n                >&lt; Back to Shopping Bag</a>';
      html += '</div>';
      return html;
    }
  }]);

  return ViewSummary;
}();

exports.default = ViewSummary;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Model = require('./MVC/Model');

var _Model2 = _interopRequireDefault(_Model);

var _View = require('./MVC/View');

var _View2 = _interopRequireDefault(_View);

var _Controller = require('./MVC/Controller');

var _Controller2 = _interopRequireDefault(_Controller);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

var _jqueryUi = require('./utils/jquery.ui.shake');

var _jqueryUi2 = _interopRequireDefault(_jqueryUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Aligent CheckItOut
                                                                                                                                                           *
                                                                                                                                                           * @category   Aligent
                                                                                                                                                           * @package    aligent-checkitout
                                                                                                                                                           * @copyright  Copyright (c) 2017 Aligent
                                                                                                                                                           * @author     Chris Dorward <chris.dorward@aligent.com.au>
                                                                                                                                                           *
                                                                                                                                                           * src/js/main.js
                                                                                                                                                           * Main JavaScript entry
                                                                                                                                                           */

// import TweenLite from './utils/TweenLite.min';

var Main = function Main() {
  _classCallCheck(this, Main);

  // Instantiate MVC Classes. See https://tinyurl.com/yaqgy73w
  this.m = new _Model2.default(this);
  this.v = new _View2.default(this);
  this.c = new _Controller2.default(this);

  // Create an array of instantiated classes and Set Dependents
  var dependents = [this.m, this.v, this.c];
  this.m.setDependents(dependents);
  this.v.setDependents(dependents);
  this.c.setDependents(dependents);
};

// Run the Main class as soon as we can...


exports.default = Main;
var main = new Main();

// ... but wait till the dom has loaded before trying to do anything with it
jQuery(document).ready(function () {

  // What version are we? Change this up in /package.json
  var vs = _package2.default.name + ' vs ' + _package2.default.version + '\n';
  console.log(vs);
  console.log(CartCheckItOut);

  // Show the initial screens after a moment's loading delay (to simulate ajax loading)
  setTimeout(function () {
    // Kick off the application by showing the summary and the email capture form
    main.v.views.summary.show();
    main.v.views.email.show();
  }, main.m.data.config.loadingDelay);

  // Show the debugger if the config flag is set
  if (!main.m.data.config.debugger) {
    jQuery('.debug').hide();
  } else {
    main.m.debugger();
  }
});

},{"../../package.json":1,"./MVC/Controller":2,"./MVC/Model":3,"./MVC/View":4,"./utils/jquery.ui.shake":20}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/config.js
 * Config Model
 *
 * william.chambers@aligent.com.au, password
 * michael@aligent.com.au, password
 * chris.dorward@aligent.com.au, password
 * random@example.com, password
 */

exports.default = {
  "config": {
    "debugger": false,
    "defaultEmail": "",
    "defaultPassword": "",
    "cssTransitionDuration": 750,
    "animationDuration": 400,
    "loadingDelay": 500,
    "emailCheckDelay": 500,
    "freeShippingMin": 100
  }
};

},{}],20:[function(require,module,exports){
"use strict";

(function ($) {
	$.fn.shake = function (o) {
		if (typeof o === 'function') o = { callback: o };
		// Set options
		var o = $.extend({
			direction: "left",
			distance: 5,
			times: 3,
			speed: 100,
			easing: "swing"
		}, o);

		return this.each(function () {

			// Create element
			var el = $(this),
			    props = {
				position: el.css("position"),
				top: el.css("top"),
				bottom: el.css("bottom"),
				left: el.css("left"),
				right: el.css("right")
			};

			el.css("position", "relative");

			// Adjust
			var ref = o.direction == "up" || o.direction == "down" ? "top" : "left";
			var motion = o.direction == "up" || o.direction == "left" ? "pos" : "neg";

			// Animation
			var animation = {},
			    animation1 = {},
			    animation2 = {};
			animation[ref] = (motion == "pos" ? "-=" : "+=") + o.distance;
			animation1[ref] = (motion == "pos" ? "+=" : "-=") + o.distance * 2;
			animation2[ref] = (motion == "pos" ? "-=" : "+=") + o.distance * 2;

			// Animate
			el.animate(animation, o.speed, o.easing);
			for (var i = 1; i < o.times; i++) {
				// Shakes
				el.animate(animation1, o.speed, o.easing).animate(animation2, o.speed, o.easing);
			};
			el.animate(animation1, o.speed, o.easing).animate(animation, o.speed / 2, o.easing, function () {
				// Last shake
				el.css(props); // Restore
				if (o.callback) o.callback.apply(this, arguments); // Callback
			});
		});
	};
})(jQuery);

},{}]},{},[18])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlLmpzb24iLCIvdmFncmFudC9zd2ctbWFnZW50by92ZW5kb3IvYWxpZ2VudC9jaGVja2l0b3V0L3NyYy9qcy9NVkMvQ29udHJvbGxlci5qcyIsIi92YWdyYW50L3N3Zy1tYWdlbnRvL3ZlbmRvci9hbGlnZW50L2NoZWNraXRvdXQvc3JjL2pzL01WQy9Nb2RlbC5qcyIsIi92YWdyYW50L3N3Zy1tYWdlbnRvL3ZlbmRvci9hbGlnZW50L2NoZWNraXRvdXQvc3JjL2pzL01WQy9WaWV3LmpzIiwiL3ZhZ3JhbnQvc3dnLW1hZ2VudG8vdmVuZG9yL2FsaWdlbnQvY2hlY2tpdG91dC9zcmMvanMvTVZDL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJEZWxpdmVyeVBheW1lbnQuanMiLCIvdmFncmFudC9zd2ctbWFnZW50by92ZW5kb3IvYWxpZ2VudC9jaGVja2l0b3V0L3NyYy9qcy9NVkMvY29udHJvbGxlcnMvQ29udHJvbGxlckVtYWlsLmpzIiwiL3ZhZ3JhbnQvc3dnLW1hZ2VudG8vdmVuZG9yL2FsaWdlbnQvY2hlY2tpdG91dC9zcmMvanMvTVZDL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJQYXNzd29yZC5qcyIsIi92YWdyYW50L3N3Zy1tYWdlbnRvL3ZlbmRvci9hbGlnZW50L2NoZWNraXRvdXQvc3JjL2pzL01WQy9tb2RlbHMvY3VzdG9tZXJzLmpzIiwiL3ZhZ3JhbnQvc3dnLW1hZ2VudG8vdmVuZG9yL2FsaWdlbnQvY2hlY2tpdG91dC9zcmMvanMvTVZDL21vZGVscy9naWZ0Y2FyZHMuanMiLCIvdmFncmFudC9zd2ctbWFnZW50by92ZW5kb3IvYWxpZ2VudC9jaGVja2l0b3V0L3NyYy9qcy9NVkMvbW9kZWxzL29yZGVyU3VtbWFyeS5qcyIsIi92YWdyYW50L3N3Zy1tYWdlbnRvL3ZlbmRvci9hbGlnZW50L2NoZWNraXRvdXQvc3JjL2pzL01WQy9tb2RlbHMvcHJvbW9jb2Rlcy5qcyIsIi92YWdyYW50L3N3Zy1tYWdlbnRvL3ZlbmRvci9hbGlnZW50L2NoZWNraXRvdXQvc3JjL2pzL01WQy92aWV3cy9WaWV3RGVsaXZlcnlQYXltZW50LmpzIiwiL3ZhZ3JhbnQvc3dnLW1hZ2VudG8vdmVuZG9yL2FsaWdlbnQvY2hlY2tpdG91dC9zcmMvanMvTVZDL3ZpZXdzL1ZpZXdFbWFpbC5qcyIsIi92YWdyYW50L3N3Zy1tYWdlbnRvL3ZlbmRvci9hbGlnZW50L2NoZWNraXRvdXQvc3JjL2pzL01WQy92aWV3cy9WaWV3TG9hZGVyLmpzIiwiL3ZhZ3JhbnQvc3dnLW1hZ2VudG8vdmVuZG9yL2FsaWdlbnQvY2hlY2tpdG91dC9zcmMvanMvTVZDL3ZpZXdzL1ZpZXdQYXNzd29yZC5qcyIsIi92YWdyYW50L3N3Zy1tYWdlbnRvL3ZlbmRvci9hbGlnZW50L2NoZWNraXRvdXQvc3JjL2pzL01WQy92aWV3cy9WaWV3UGxhY2VPcmRlci5qcyIsIi92YWdyYW50L3N3Zy1tYWdlbnRvL3ZlbmRvci9hbGlnZW50L2NoZWNraXRvdXQvc3JjL2pzL01WQy92aWV3cy9WaWV3U3VtbWFyeS5qcyIsIi92YWdyYW50L3N3Zy1tYWdlbnRvL3ZlbmRvci9hbGlnZW50L2NoZWNraXRvdXQvc3JjL2pzL01haW4uanMiLCIvdmFncmFudC9zd2ctbWFnZW50by92ZW5kb3IvYWxpZ2VudC9jaGVja2l0b3V0L3NyYy9qcy9jb25maWcuanMiLCIvdmFncmFudC9zd2ctbWFnZW50by92ZW5kb3IvYWxpZ2VudC9jaGVja2l0b3V0L3NyYy9qcy91dGlscy9qcXVlcnkudWkuc2hha2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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NkIsR0FBN0IsRUFBa0M7QUFBRTtBQUNuQyxPQUFHLE9BQUgsQ0FBVyxVQUFYLEVBQXVCLEVBQUUsS0FBekIsRUFBZ0MsRUFBRSxNQUFsQyxFQUEwQyxPQUExQyxDQUFrRCxVQUFsRCxFQUE4RCxFQUFFLEtBQWhFLEVBQXVFLEVBQUUsTUFBekU7QUFDQTtBQUNELE1BQUcsT0FBSCxDQUFXLFVBQVgsRUFBdUIsRUFBRSxLQUF6QixFQUFnQyxFQUFFLE1BQWxDLEVBQ0EsT0FEQSxDQUNRLFNBRFIsRUFDbUIsRUFBRSxLQUFGLEdBQVUsQ0FEN0IsRUFDZ0MsRUFBRSxNQURsQyxFQUMwQyxZQUFVO0FBQUU7QUFDckQsT0FBRyxHQUFILENBQU8sS0FBUCxFQURtRCxDQUNwQztBQUNmLFFBQUcsRUFBRSxRQUFMLEVBQWUsRUFBRSxRQUFGLENBQVcsS0FBWCxDQUFpQixJQUFqQixFQUF1QixTQUF2QixFQUZvQyxDQUVEO0FBQ2xELElBSkQ7QUFLQSxHQWpDTSxDQUFQO0FBa0NBLEVBOUNEO0FBK0NBLENBaERELEVBZ0RHLE1BaERIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJuYW1lXCI6IFwiY2hlY2tpdG91dFwiLFxuICBcInZlcnNpb25cIjogXCIxLjguM1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSmF2YVNjcmlwdC9TYXNzIEFwcCBmb3IgQWxpZ2VudF9DaGVja0l0T3V0IE1vZHVsZVwiLFxuICBcIm1haW5cIjogXCJzcmMvanMvTWFpbi5qc1wiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9iaXRidWNrZXQub3JnL2FsaWdlbnQvZWNvbWRldl9jaGVja2l0b3V0X2RldmVsb3BlclwiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIk9TTC0zLjBcIixcbiAgXCJhdXRob3JcIjoge1xuICAgIFwibmFtZVwiOiBcIkNocmlzIERvcndhcmRcIixcbiAgICBcImVtYWlsXCI6IFwiY2hyaXMuZG9yd2FyZEBhbGlnZW50LmNvbS5hdVwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImdzYXBcIjogXCJeMS4xOS4xXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOiBcIl42LjI0LjFcIixcbiAgICBcImJhYmVsaWZ5XCI6IFwiXjcuMy4wXCIsXG4gICAgXCJicm93c2VyLXN5bmNcIjogXCJeMi4xOC4xMlwiLFxuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl4xNC4zLjBcIixcbiAgICBcImd1bHBcIjogXCJeMy45LjFcIixcbiAgICBcImd1bHAtY29ubmVjdFwiOiBcIl41LjAuMFwiLFxuICAgIFwiZ3VscC1ub3RpZnlcIjogXCJeMy4wLjBcIixcbiAgICBcImd1bHAtcmVuYW1lXCI6IFwiXjEuMi4yXCIsXG4gICAgXCJndWxwLXNhc3NcIjogXCJeMy4xLjBcIixcbiAgICBcImd1bHAtc291cmNlbWFwc1wiOiBcIl4yLjYuMFwiLFxuICAgIFwiZ3VscC11Z2xpZnlcIjogXCJeMi4xLjJcIixcbiAgICBcImd1bHAtdWdsaWZ5Y3NzXCI6IFwiXjEuMC44XCIsXG4gICAgXCJodHRwLXNlcnZlclwiOiBcIl4wLjEwLjBcIixcbiAgICBcIm5vZGVtb25cIjogXCJeMS4xMS4wXCIsXG4gICAgXCJ2aW55bC1idWZmZXJcIjogXCJeMS4wLjBcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCJeMS4xLjBcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcIkphdmFTY3JpcHRcIixcbiAgICBcIkVTNlwiLFxuICAgIFwiU2Fzc1wiLFxuICAgIFwiTVZDXCJcbiAgXVxufVxuIiwiLyoqXG4gKiBBbGlnZW50IENoZWNrSXRPdXRcbiAqXG4gKiBAY2F0ZWdvcnkgICBBbGlnZW50XG4gKiBAcGFja2FnZSAgICBhbGlnZW50LWNoZWNraXRvdXRcbiAqIEBjb3B5cmlnaHQgIENvcHlyaWdodCAoYykgMjAxNyBBbGlnZW50XG4gKiBAYXV0aG9yICAgICBDaHJpcyBEb3J3YXJkIDxjaHJpcy5kb3J3YXJkQGFsaWdlbnQuY29tLmF1PlxuICpcbiAqIHNyYy9qcy9Db250cm9sbGVyLmpzXG4gKiBIYW5kbGVzIGFueXRoaW5nIHRvIGRvIHdpdGggdXNlciBpbnRlcmFjdGlvblxuICpcbiAqL1xuXG5pbXBvcnQgQ29udHJvbGxlckVtYWlsIGZyb20gJy4vY29udHJvbGxlcnMvQ29udHJvbGxlckVtYWlsJztcbmltcG9ydCBDb250cm9sbGVyUGFzc3dvcmQgZnJvbSAnLi9jb250cm9sbGVycy9Db250cm9sbGVyUGFzc3dvcmQnO1xuaW1wb3J0IENvbnRyb2xsZXJEZWxpdmVyeVBheW1lbnQgZnJvbSAnLi9jb250cm9sbGVycy9Db250cm9sbGVyRGVsaXZlcnlQYXltZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG5cbiAgY29uc3RydWN0b3IobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy5zaG9ydE5hbWUgPSAnYyc7XG4gICAgdGhpcy5jb250cm9sbGVycyA9IHt9O1xuICAgIHRoaXMuY29udHJvbGxlcnMuZW1haWwgPSBuZXcgQ29udHJvbGxlckVtYWlsIChtYWluKTtcbiAgICB0aGlzLmNvbnRyb2xsZXJzLnBhc3N3b3JkID0gbmV3IENvbnRyb2xsZXJQYXNzd29yZCAobWFpbik7XG4gICAgdGhpcy5jb250cm9sbGVycy5kZWxpdmVyeXBheW1lbnQgPSBuZXcgQ29udHJvbGxlckRlbGl2ZXJ5UGF5bWVudCAobWFpbik7XG4gIH1cblxuICBzZXREZXBlbmRlbnRzKGRlcGVuZGVudHMpIHtcbiAgICAvLyBTZXQgRGVwZW5kZW50IE1WQyBDbGFzc2VzXG4gICAgLy8gU2VlIGh0dHBzOi8vdGlueXVybC5jb20veWFxZ3k3M3dcbiAgICBmb3IgKGxldCBpPTA7IGk8ZGVwZW5kZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzW2RlcGVuZGVudHNbaV0uc2hvcnROYW1lXSA9IGRlcGVuZGVudHNbaV07XG4gICAgfVxuICB9XG5cbn1cbiIsIi8qKlxuICogQWxpZ2VudCBDaGVja0l0T3V0XG4gKlxuICogQGNhdGVnb3J5ICAgQWxpZ2VudFxuICogQHBhY2thZ2UgICAgYWxpZ2VudC1jaGVja2l0b3V0XG4gKiBAY29weXJpZ2h0ICBDb3B5cmlnaHQgKGMpIDIwMTcgQWxpZ2VudFxuICogQGF1dGhvciAgICAgQ2hyaXMgRG9yd2FyZCA8Y2hyaXMuZG9yd2FyZEBhbGlnZW50LmNvbS5hdT5cbiAqXG4gKiBzcmMvanMvTW9kZWwuanNcbiAqIExvYWQgYW5kIG1hbmlwdWxhdGUgZGF0YSBtb2RlbFxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG5cbiAgY29uc3RydWN0b3IobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy5zaG9ydE5hbWUgPSAnbSc7XG5cbiAgICAvLyBUaGUgTW9kZWwgQ2xhc3MgaXMgb3VyIHJ1bi10aW1lIGRhdGEgc3RvcmUuXG4gICAgLy8gV2UgY291bGQgdXNlIFJlZHV4IGlmIHdlIHdlcmUgZmVlbGluZyBmbGFzaC5cbiAgICAvLyBJbiB0aGlzIGNhc2Ugd2UnbGwga2VlcCBvdXIgZGF0YSBpbiBhbiBvYmplY3QgY2FsbGVkICdkYXRhJ1xuICAgIC8vIGhlcmUgaW4gdGhlIE1vZGVsIGNsYXNzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCBmcm9tIGFueXdoZXJlXG4gICAgdGhpcy5kYXRhID0ge307XG5cbiAgICAvLyBJbXBvcnQgZGF0YSBtb2RlbHMgZnJvbSB0aGUgLi9tb2RlbHMgZGlyZWN0b3J5XG4gICAgdGhpcy5pbXBvcnRNb2RlbHMgKCk7XG5cbiAgICAvLyBTZXQgdXAgYSBjdXN0b21lciBvYmplY3QgcmVhZHkgdG8gYmUgcG9wdWxhdGVkIGR1cmluZyBydW50aW1lXG4gICAgdGhpcy5zZXRPcmRlciAoKTtcbiAgfVxuXG4gIHNldERlcGVuZGVudHMoZGVwZW5kZW50cykge1xuICAgIC8vIFNldCBEZXBlbmRlbnQgTVZDIENsYXNzZXNcbiAgICAvLyBTZWUgaHR0cHM6Ly90aW55dXJsLmNvbS95YXFneTczd1xuICAgIGZvciAobGV0IGk9MDsgaTxkZXBlbmRlbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHRoaXNbZGVwZW5kZW50c1tpXS5zaG9ydE5hbWVdID0gZGVwZW5kZW50c1tpXTtcbiAgICB9XG4gIH1cblxuICBpbXBvcnRNb2RlbHMgKCl7XG4gICAgLy8gRXhhbXBsZSBkYXRhIG1vZGVscyBmb3IgQWpheCBpbnRlZ3JhdGlvblxuICAgIC8vIGNvbmZpZ1xuICAgIGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuICAgIHRoaXMuZGF0YS5jb25maWcgPSBjb25maWcuZGVmYXVsdC5jb25maWc7XG4gICAgLy8gb3JkZXJTdW1tYXJ5XG4gICAgY29uc3Qgb3JkZXJTdW1tYXJ5ID0gcmVxdWlyZSgnLi9tb2RlbHMvb3JkZXJTdW1tYXJ5Jyk7XG4gICAgdGhpcy5kYXRhLm9yZGVyU3VtbWFyeSA9IG9yZGVyU3VtbWFyeS5kZWZhdWx0Lm9yZGVyU3VtbWFyeTtcbiAgICAvLyBjdXN0b21lcnNcbiAgICBjb25zdCBjdXN0b21lcnMgPSByZXF1aXJlKCcuL21vZGVscy9jdXN0b21lcnMnKTtcbiAgICB0aGlzLmRhdGEuY3VzdG9tZXJzID0gY3VzdG9tZXJzLmRlZmF1bHQuY3VzdG9tZXJzO1xuICAgIC8vIHByb21vY29kZXNcbiAgICBjb25zdCBwcm9tb2NvZGVzID0gcmVxdWlyZSgnLi9tb2RlbHMvcHJvbW9jb2RlcycpO1xuICAgIHRoaXMuZGF0YS5wcm9tb2NvZGVzID0gcHJvbW9jb2Rlcy5kZWZhdWx0LnByb21vY29kZXM7XG4gICAgLy8gZ2lmdGNhcmRzXG4gICAgY29uc3QgZ2lmdGNhcmRzID0gcmVxdWlyZSgnLi9tb2RlbHMvZ2lmdGNhcmRzJyk7XG4gICAgdGhpcy5kYXRhLmdpZnRjYXJkcyA9IGdpZnRjYXJkcy5kZWZhdWx0LmdpZnRjYXJkcztcbiAgfVxuXG4gIGRlYnVnZ2VyICgpe1xuICAgIGpRdWVyeSgnI2RlYnVnZ2VyJykudmFsKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5vcmRlciwgbnVsbCwgXCJcXHRcIikpO1xuICB9XG5cbiAgc2V0T3JkZXIgKCl7XG4gICAgLy8gT25jZSB0aGlzIGRhdGEgbW9kZWwgaXMgcG9wdWxhdGVkLCBhbmQgb3JkZXIgY2FuIGJlIHBsYWNlZFxuICAgIHRoaXMuZGF0YS5vcmRlciA9IHtcbiAgICAgICdlbWFpbCc6ICcnLFxuICAgICAgJ2N1c3RvbWVyVHlwZSc6ICcnLFxuICAgICAgJ2ZpcnN0TmFtZSc6ICcnLFxuICAgICAgJ2xhc3ROYW1lJzogJycsXG4gICAgICAnZGVsaXZlcnlBZGRyZXNzJzogJycsXG4gICAgICAnYmlsbFRvRGlmZmVyZW50QWRkcmVzcyc6ICcnLFxuICAgICAgJ2F1dGhvcml0eVRvTGVhdmUnOiAnJyxcbiAgICAgICdwYXltZW50TWV0aG9kJzogJycsXG4gICAgICAnbmV3c2xldHRlcic6ICcnLFxuICAgICAgJ3Byb21vY29kZXMnOiBbXSxcbiAgICAgICdnaWZ0Y2FyZHMnOiBbXSxcbiAgICAgICdzdWJ0b3RhbCc6ICcnLFxuICAgICAgJ2Rpc2NvdW50cyc6ICcnLFxuICAgICAgJ3NoaXBwaW5nJzogJycsXG4gICAgICAnZ3JhbmR0b3RhbCc6ICcnXG4gICAgfTtcbiAgICB0aGlzLmRlYnVnZ2VyICgpO1xuICB9XG5cbiAgdXBkYXRlT3JkZXIgKGtleSwgdmFsdWUpe1xuICAgIHRoaXMuZGF0YS5vcmRlcltrZXldID0gdmFsdWU7XG4gICAgdGhpcy5kZWJ1Z2dlciAoKTtcbiAgfVxuXG4gIHJlZGVlbUdpZnQgKGNvZGUpIHtcbiAgICAvLyBDaGVjayB0aGUgc3VwcGxpZWQgY29kZSBhZ2FpbnN0IHRoZSBtb2RlbCBhbmQgdXBkYXRlIHRvdGFscyBpZiBpdCdzIGdvb2RcbiAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5kYXRhLmdpZnRjYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZGF0YS5naWZ0Y2FyZHNbaV0uY29kZSA9PT0gY29kZSl7XG4gICAgICAgIHRoaXMuZGF0YS5vcmRlci5naWZ0Y2FyZHMucHVzaCh0aGlzLmRhdGEuZ2lmdGNhcmRzW2ldKTtcbiAgICAgICAgalF1ZXJ5KCcjZ2lmdGNhcmQnKS52YWwoJycpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyVG90YWwgKCk7XG4gICAgICAgIHRoaXMubWFpbi52LnNob3dUb3RhbHMgKCk7XG4gICAgICAgIHRoaXMuZGVidWdnZXIgKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYWluLnYuc2hha2VGaWVsZChqUXVlcnkoJyNnaWZ0Y2FyZCcpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBhcHBseVByb21vIChjb2RlKSB7XG4gICAgLy8gQ2hlY2sgdGhlIHN1cHBsaWVkIGNvZGUgYWdhaW5zdCB0aGUgbW9kZWwgYW5kIHVwZGF0ZSB0b3RhbHMgaWYgaXQncyBnb29kXG4gICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuZGF0YS5wcm9tb2NvZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLnByb21vY29kZXNbaV0uY29kZSA9PT0gY29kZSl7XG4gICAgICAgIHRoaXMuZGF0YS5vcmRlci5wcm9tb2NvZGVzLnB1c2godGhpcy5kYXRhLnByb21vY29kZXNbaV0pO1xuICAgICAgICBqUXVlcnkoJyNwcm9tb2NvZGUnKS52YWwoJycpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyVG90YWwgKCk7XG4gICAgICAgIHRoaXMubWFpbi52LnNob3dUb3RhbHMgKCk7XG4gICAgICAgIHRoaXMuZGVidWdnZXIgKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYWluLnYuc2hha2VGaWVsZChqUXVlcnkoJyNwcm9tb2NvZGUnKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZ2V0Q3VzdG9tZXJCeUVtYWlsICgpe1xuICAgIHRoaXMubWFpbi5tLmRhdGEub3JkZXIuZW1haWwgPSBqUXVlcnkoJyNlbWFpbC1hZGRyZXNzJykudmFsKCk7XG4gICAgdGhpcy5tYWluLnYudmlld3MubG9hZGVyLnNob3coJ0NoZWNraW5nIGVtYWlsLi4uJyk7XG4gICAgLy8gd2FpdCBhIHNob3J0IHRpbWUgdG8gc2ltdWxhdGUgYW4gYWpheCBsb2FkXG4gICAgLy8gQ2hlY2tzIGZvciBjdXN0b21lciBleGlzdGVuY2UgLi4vbW9kZWxzL2N1c3RvbWVycy5qc29uLlxuICAgIC8vIFJldHVybnMgYSBjdXN0b21lciBvYmplY3QgaWYgZm91bmQsIGZhbHNlIGlmIG5vdFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLm1haW4ubS5kYXRhLmN1c3RvbWVyID0gZmFsc2U7XG4gICAgICBsZXQgYWxsQ3VzdG9tZXJzID0gdGhpcy5tYWluLm0uZGF0YS5jdXN0b21lcnM7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8YWxsQ3VzdG9tZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKCB0aGlzLm1haW4ubS5kYXRhLm9yZGVyLmVtYWlsID09PSBhbGxDdXN0b21lcnNbaV0uZW1haWwpe1xuICAgICAgICAgIHRoaXMubWFpbi5tLmRhdGEuY3VzdG9tZXIgPSBhbGxDdXN0b21lcnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubWFpbi52LnZpZXdzLmxvYWRlci5oaWRlKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLm1haW4ubS5kYXRhLmNvbmZpZy5lbWFpbENoZWNrRGVsYXkpO1xuICB9XG5cbiAgYWRkRXhpc3RpbmdDdXN0b21lcigpIHtcbiAgICB0aGlzLnVwZGF0ZU9yZGVyKCdmaXJzdE5hbWUnLCB0aGlzLm1haW4ubS5kYXRhLmN1c3RvbWVyLmZpcnN0TmFtZSk7XG4gICAgdGhpcy51cGRhdGVPcmRlcignbGFzdE5hbWUnLCB0aGlzLm1haW4ubS5kYXRhLmN1c3RvbWVyLmxhc3ROYW1lKTtcbiAgICB0aGlzLnVwZGF0ZU9yZGVyKCdkZWxpdmVyeUFkZHJlc3MnLCB0aGlzLm1haW4ubS5kYXRhLmN1c3RvbWVyLmRlbGl2ZXJ5QWRkcmVzcyk7XG4gICAgdGhpcy51cGRhdGVPcmRlcigncGhvbmVudW1iZXInLCB0aGlzLm1haW4ubS5kYXRhLmN1c3RvbWVyLnBob25lbnVtYmVyKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZU9yZGVyVG90YWwgKCl7XG4gICAgLy8gUXVpY2sgJiBkaXJ0eSBtYXRoIHRvIGNhbGN1bGF0ZSB0b3RhbHMuXG4gICAgLy8gUHJvYmFibHkgd29uJ3QgYmUgbmVlZGVkIHdoZW4gYXBwIGlzIHVzaW5nIGFqYXhcbiAgICBsZXQgc3VidG90YWwgPSAwO1xuICAgIGxldCBkaXNjb3VudHMgPSAwO1xuICAgIGxldCBzaGlwcGluZyA9IDA7XG4gICAgbGV0IGdyYW5kdG90YWwgPSAwO1xuICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLmRhdGEub3JkZXJTdW1tYXJ5Lmxlbmd0aDsgaSsrKXtcbiAgICAgIHN1YnRvdGFsICs9IE51bWJlcih0aGlzLmRhdGEub3JkZXJTdW1tYXJ5W2ldLnByaWNlKTtcbiAgICB9XG4gICAgaWYgKHN1YnRvdGFsIDw9IHRoaXMuZGF0YS5jb25maWcuZnJlZVNoaXBwaW5nTWluKXtcbiAgICAgIHNoaXBwaW5nID0gMTA7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuZGF0YS5vcmRlci5wcm9tb2NvZGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmICh0aGlzLmRhdGEub3JkZXIucHJvbW9jb2Rlc1tpXS50eXBlID09PSAncGVyY2VudCcpe1xuICAgICAgICBkaXNjb3VudHMgPSBNYXRoLnJvdW5kICgoKHN1YnRvdGFsLzEwMCkqdGhpcy5kYXRhLm9yZGVyLnByb21vY29kZXNbaV0uYW1vdW50KSoxMDApLzEwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5kYXRhLm9yZGVyLmdpZnRjYXJkcy5sZW5ndGg7IGkrKyl7XG4gICAgICBkaXNjb3VudHMgPSB0aGlzLmRhdGEub3JkZXIuZ2lmdGNhcmRzW2ldLmFtb3VudDtcbiAgICB9XG5cbiAgICBncmFuZHRvdGFsID0gTWF0aC5yb3VuZCAoKChzdWJ0b3RhbCAtIGRpc2NvdW50cykgKyBzaGlwcGluZykqMTAwKS8xMDA7XG4gICAgdGhpcy5tLnVwZGF0ZU9yZGVyICgnc3VidG90YWwnLCBzdWJ0b3RhbCk7XG4gICAgdGhpcy5tLnVwZGF0ZU9yZGVyICgnZGlzY291bnRzJywgZGlzY291bnRzKTtcbiAgICB0aGlzLm0udXBkYXRlT3JkZXIgKCdzaGlwcGluZycsIHNoaXBwaW5nKTtcbiAgICB0aGlzLm0udXBkYXRlT3JkZXIgKCdncmFuZHRvdGFsJywgZ3JhbmR0b3RhbCk7XG4gIH1cblxuICByZW1vdmVPcmRlckl0ZW0gKHNrdSkge1xuICAgIC8vIFBvcCBhbiBvcmRlciBpdGVtIG91dCBvZiB0aGUgb3JkZXJTdW1tYXJ5IGFycmF5IGJ5IHNrdVxuICAgIGZvcih2YXIgaSA9IHRoaXMuZGF0YS5zdW1tYXJ5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZih0aGlzLmRhdGEuc3VtbWFyeVtpXS5za3UgPT09IHNrdSkge1xuICAgICAgICB0aGlzLmRhdGEuc3VtbWFyeS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0UGF5bWVudE1ldGhvZChvcHRpb24pIHtcbiAgICBzd2l0Y2gob3B0aW9uKSB7XG4gICAgICBjYXNlICdjYXJkJzpcbiAgICAgICAgalF1ZXJ5KCcjY2FyZC1kaXYnKS5mYWRlSW4odGhpcy5tYWluLm0uZGF0YS5jb25maWcuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICBqUXVlcnkoJyNwYXlwYWwtZGl2JykuaGlkZSgpO1xuICAgICAgICBqUXVlcnkoJyNhZnRlcnBheS1kaXYnKS5oaWRlKCk7XG4gICAgICAgIGpRdWVyeSgnI2NhcmQnKS5hdHRyKCdzcmMnLCAnL3NraW4vZnJvbnRlbmQvYmFzZS9kZWZhdWx0L2ltYWdlcy9hbGlnZW50L2NhcnRjaGVja2l0b3V0L3BheW1lbnQvY2FyZF9vdmVyLnBuZycpO1xuICAgICAgICBqUXVlcnkoJyNwYXlwYWwnKS5hdHRyKCdzcmMnLCAnL3NraW4vZnJvbnRlbmQvYmFzZS9kZWZhdWx0L2ltYWdlcy9hbGlnZW50L2NhcnRjaGVja2l0b3V0L3BheW1lbnQvcGF5cGFsLnBuZycpO1xuICAgICAgICBqUXVlcnkoJyNhZnRlcnBheScpLmF0dHIoJ3NyYycsICcvc2tpbi9mcm9udGVuZC9iYXNlL2RlZmF1bHQvaW1hZ2VzL2FsaWdlbnQvY2FydGNoZWNraXRvdXQvcGF5bWVudC9hZnRlcnBheS5wbmcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXlwYWwnOlxuICAgICAgICBqUXVlcnkoJyNjYXJkLWRpdicpLmhpZGUoKTtcbiAgICAgICAgalF1ZXJ5KCcjcGF5cGFsLWRpdicpLmZhZGVJbih0aGlzLm1haW4ubS5kYXRhLmNvbmZpZy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgIGpRdWVyeSgnI2FmdGVycGF5LWRpdicpLmhpZGUoKTtcbiAgICAgICAgalF1ZXJ5KCcjY2FyZCcpLmF0dHIoJ3NyYycsICcvc2tpbi9mcm9udGVuZC9iYXNlL2RlZmF1bHQvaW1hZ2VzL2FsaWdlbnQvY2FydGNoZWNraXRvdXQvcGF5bWVudC9jYXJkLnBuZycpO1xuICAgICAgICBqUXVlcnkoJyNwYXlwYWwnKS5hdHRyKCdzcmMnLCAnL3NraW4vZnJvbnRlbmQvYmFzZS9kZWZhdWx0L2ltYWdlcy9hbGlnZW50L2NhcnRjaGVja2l0b3V0L3BheW1lbnQvcGF5cGFsX292ZXIucG5nJyk7XG4gICAgICAgIGpRdWVyeSgnI2FmdGVycGF5JykuYXR0cignc3JjJywgJy9za2luL2Zyb250ZW5kL2Jhc2UvZGVmYXVsdC9pbWFnZXMvYWxpZ2VudC9jYXJ0Y2hlY2tpdG91dC9wYXltZW50L2FmdGVycGF5LnBuZycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FmdGVycGF5JzpcbiAgICAgICAgalF1ZXJ5KCcjY2FyZC1kaXYnKS5oaWRlKCk7XG4gICAgICAgIGpRdWVyeSgnI3BheXBhbC1kaXYnKS5oaWRlKCk7XG4gICAgICAgIGpRdWVyeSgnI2FmdGVycGF5LWRpdicpLmZhZGVJbih0aGlzLm1haW4ubS5kYXRhLmNvbmZpZy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgIGpRdWVyeSgnI2NhcmQnKS5hdHRyKCdzcmMnLCAnL3NraW4vZnJvbnRlbmQvYmFzZS9kZWZhdWx0L2ltYWdlcy9hbGlnZW50L2NhcnRjaGVja2l0b3V0L3BheW1lbnQvY2FyZC5wbmcnKTtcbiAgICAgICAgalF1ZXJ5KCcjcGF5cGFsJykuYXR0cignc3JjJywgJy9za2luL2Zyb250ZW5kL2Jhc2UvZGVmYXVsdC9pbWFnZXMvYWxpZ2VudC9jYXJ0Y2hlY2tpdG91dC9wYXltZW50L3BheXBhbC5wbmcnKTtcbiAgICAgICAgalF1ZXJ5KCcjYWZ0ZXJwYXknKS5hdHRyKCdzcmMnLCAnL3NraW4vZnJvbnRlbmQvYmFzZS9kZWZhdWx0L2ltYWdlcy9hbGlnZW50L2NhcnRjaGVja2l0b3V0L3BheW1lbnQvYWZ0ZXJwYXlfb3Zlci5wbmcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgICB0aGlzLm0udXBkYXRlT3JkZXIgKCdwYXltZW50TWV0aG9kJywgb3B0aW9uKTtcbiAgfVxuXG59XG4iLCIvKipcbiAqIEFsaWdlbnQgQ2hlY2tJdE91dFxuICpcbiAqIEBjYXRlZ29yeSAgIEFsaWdlbnRcbiAqIEBwYWNrYWdlICAgIGFsaWdlbnQtY2hlY2tpdG91dFxuICogQGNvcHlyaWdodCAgQ29weXJpZ2h0IChjKSAyMDE3IEFsaWdlbnRcbiAqIEBhdXRob3IgICAgIENocmlzIERvcndhcmQgPGNocmlzLmRvcndhcmRAYWxpZ2VudC5jb20uYXU+XG4gKlxuICogc3JjL2pzL1ZpZXcuanNcbiAqIEhhbmRsZXMgZXZlcnl0aGluZyB0byBkbyB3aXRoIGRpc3BsYXlpbmcsIGxvZ2dpbmcgJiByZW5kZXJpbmdcbiAqXG4gKi9cblxuaW1wb3J0IFZpZXdEZWxpdmVyeVBheW1lbnQgZnJvbSAnLi92aWV3cy9WaWV3RGVsaXZlcnlQYXltZW50JztcbmltcG9ydCBWaWV3RW1haWwgZnJvbSAnLi92aWV3cy9WaWV3RW1haWwnO1xuaW1wb3J0IFZpZXdMb2FkZXIgZnJvbSAnLi92aWV3cy9WaWV3TG9hZGVyJztcbmltcG9ydCBWaWV3UGFzc3dvcmQgZnJvbSAnLi92aWV3cy9WaWV3UGFzc3dvcmQnO1xuaW1wb3J0IFZpZXdQbGFjZU9yZGVyIGZyb20gJy4vdmlld3MvVmlld1BsYWNlT3JkZXInO1xuaW1wb3J0IFZpZXdTdW1tYXJ5IGZyb20gJy4vdmlld3MvVmlld1N1bW1hcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcblxuICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICB0aGlzLnNob3J0TmFtZSA9ICd2JztcbiAgICB0aGlzLnZpZXdzID0ge307XG4gICAgdGhpcy52aWV3cy5zdW1tYXJ5ID0gbmV3IFZpZXdTdW1tYXJ5IChtYWluKTtcbiAgICB0aGlzLnZpZXdzLmVtYWlsID0gbmV3IFZpZXdFbWFpbCAobWFpbik7XG4gICAgdGhpcy52aWV3cy5wYXNzd29yZCA9IG5ldyBWaWV3UGFzc3dvcmQgKG1haW4pO1xuICAgIHRoaXMudmlld3MuZGVsaXZlcnlwYXltZW50ID0gbmV3IFZpZXdEZWxpdmVyeVBheW1lbnQgKG1haW4pO1xuICAgIHRoaXMudmlld3MubG9hZGVyID0gbmV3IFZpZXdMb2FkZXIgKG1haW4pO1xuICAgIHRoaXMudmlld3MucGxhY2VvcmRlciA9IG5ldyBWaWV3UGxhY2VPcmRlciAobWFpbik7XG4gIH1cblxuICBzZXREZXBlbmRlbnRzKGRlcGVuZGVudHMpIHtcbiAgICAvLyBTZXQgRGVwZW5kZW50IE1WQyBDbGFzc2VzXG4gICAgLy8gU2VlIGh0dHBzOi8vdGlueXVybC5jb20veWFxZ3k3M3dcbiAgICBmb3IgKGxldCBpPTA7IGk8ZGVwZW5kZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzW2RlcGVuZGVudHNbaV0uc2hvcnROYW1lXSA9IGRlcGVuZGVudHNbaV07XG4gICAgfVxuICB9XG5cbiAgc2hha2VGaWVsZChmaWVsZCkge1xuICAgIGpRdWVyeShmaWVsZCkucmVtb3ZlQ2xhc3MoJ2lucHV0LWVycm9yLWZhZGUnKTtcbiAgICBqUXVlcnkoZmllbGQpLmFkZENsYXNzKCdpbnB1dC1lcnJvcicpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGpRdWVyeShmaWVsZCkuYWRkQ2xhc3MoJ2lucHV0LWVycm9yLWZhZGUnKTtcbiAgICB9LCB0aGlzLm1haW4ubS5kYXRhLmNvbmZpZy5jc3NUcmFuc2l0aW9uRHVyYXRpb24gKTtcbiAgICBqUXVlcnkoZmllbGQpLnNoYWtlKCk7XG4gIH1cblxuICBzaG93VG90YWxzICgpe1xuICAgIGpRdWVyeSgnI3N1YnRvdGFsJykuaHRtbChgJCR7dGhpcy5tLmRhdGEub3JkZXIuc3VidG90YWx9YCk7XG4gICAgaWYgKHRoaXMubS5kYXRhLm9yZGVyLmRpc2NvdW50cyA9PT0gMCl7XG4gICAgICBqUXVlcnkoJy5kaXNjb3VudHMnKS5oaWRlKCk7XG4gICAgfWVsc2V7XG4gICAgICBqUXVlcnkoJyNkaXNjb3VudHMnKS5odG1sKGAtJCR7dGhpcy5tLmRhdGEub3JkZXIuZGlzY291bnRzfWApO1xuICAgICAgalF1ZXJ5KCcuZGlzY291bnRzJykuZmFkZUluKHRoaXMubWFpbi5tLmRhdGEuY29uZmlnLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tLmRhdGEub3JkZXIucHJvbW9jb2Rlcy5sZW5ndGggPT09IDApe1xuICAgICAgalF1ZXJ5KCcucHJvbW9jb2RlcycpLmhpZGUoKTtcbiAgICB9ZWxzZXtcbiAgICAgIGxldCBjb2RlcyA9ICcnO1xuICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMubS5kYXRhLm9yZGVyLnByb21vY29kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29kZXMgKz0gYDxzdHJvbmc+JHt0aGlzLm0uZGF0YS5vcmRlci5wcm9tb2NvZGVzW2ldLmNvZGV9PC9zdHJvbmc+YDtcbiAgICAgICAgaWYgKGk8dGhpcy5tLmRhdGEub3JkZXIucHJvbW9jb2Rlcy5sZW5ndGgpe1xuICAgICAgICAgIGNvZGVzICs9ICc8YnIgLz4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBqUXVlcnkoJyNwcm9tb2NvZGVzJykuaHRtbChjb2Rlcyk7XG4gICAgICBqUXVlcnkoJy5wcm9tb2NvZGVzJykuZmFkZUluKHRoaXMubWFpbi5tLmRhdGEuY29uZmlnLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tLmRhdGEub3JkZXIuZ2lmdGNhcmRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBqUXVlcnkoJy5naWZ0Y2FyZHMnKS5oaWRlKCk7XG4gICAgfWVsc2V7XG4gICAgICBsZXQgY29kZXMgPSAnJztcbiAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLm0uZGF0YS5vcmRlci5naWZ0Y2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29kZXMgKz0gYDxzdHJvbmc+JHt0aGlzLm0uZGF0YS5vcmRlci5naWZ0Y2FyZHNbaV0uY29kZX08L3N0cm9uZz5gO1xuICAgICAgICBpZiAoaTx0aGlzLm0uZGF0YS5vcmRlci5naWZ0Y2FyZHMubGVuZ3RoKXtcbiAgICAgICAgICBjb2RlcyArPSAnPGJyIC8+JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgalF1ZXJ5KCcjZ2lmdGNhcmRzJykuaHRtbChjb2Rlcyk7XG4gICAgICBqUXVlcnkoJy5naWZ0Y2FyZHMnKS5mYWRlSW4odGhpcy5tYWluLm0uZGF0YS5jb25maWcuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm0uZGF0YS5vcmRlci5zaGlwcGluZyA9PT0gMCl7XG4gICAgICBqUXVlcnkoJyNzaGlwcGluZy1tZXNzYWdlJykuaHRtbChgRW5qb3kgPHNwYW4gY2xhc3M9XCJib2xkXCI+RlJFRSBFWFBSRVNTIFNISVBQSU5HPC9zcGFuPiBvbiB1cyFgKTtcbiAgICAgIGpRdWVyeSgnI3NoaXBwaW5nJykuaHRtbChgRlJFRWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc2hvcnRmYWxsID0gTWF0aC5yb3VuZCgodGhpcy5tLmRhdGEuY29uZmlnLmZyZWVTaGlwcGluZ01pbiAtIHRoaXMubS5kYXRhLm9yZGVyLnN1YnRvdGFsKSAqIDEwMCkgLyAxMDA7XG4gICAgICBqUXVlcnkoJyNzaGlwcGluZy1tZXNzYWdlJykuaHRtbChgWW91IGFyZSBBVUQgPHNwYW4gY2xhc3M9XCJib2xkXCI+JCR7c2hvcnRmYWxsfTwvc3Bhbj4gYXdheSBmcm9tIEZSRUUgU0hJUFBJTkdgKTtcbiAgICAgIGpRdWVyeSgnI3NoaXBwaW5nJykuaHRtbChgJCR7dGhpcy5tLmRhdGEub3JkZXIuc2hpcHBpbmd9YCk7XG4gICAgfVxuICAgIGpRdWVyeSgnI2dyYW5kdG90YWwnKS5odG1sKGAkJHt0aGlzLm0uZGF0YS5vcmRlci5ncmFuZHRvdGFsfWApO1xuICB9XG5cbn1cbiIsIi8qKlxuICogQWxpZ2VudCBDaGVja0l0T3V0XG4gKlxuICogQGNhdGVnb3J5ICAgQWxpZ2VudFxuICogQHBhY2thZ2UgICAgYWxpZ2VudC1jaGVja2l0b3V0XG4gKiBAY29weXJpZ2h0ICBDb3B5cmlnaHQgKGMpIDIwMTcgQWxpZ2VudFxuICogQGF1dGhvciAgICAgQ2hyaXMgRG9yd2FyZCA8Y2hyaXMuZG9yd2FyZEBhbGlnZW50LmNvbS5hdT5cbiAqXG4gKiBzcmMvanMvTVZDL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJEZWxpdmVyeVBheW1lbnQuanNcbiAqIERlbGl2ZXJ5IFNjcmVlbiBVSVxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyRGVsaXZlcnlQYXltZW50IHtcblxuICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcbiAgfVxuXG4gIHNldFVJICgpe1xuICAgIGpRdWVyeSh3aW5kb3cpLnVuYmluZCgna2V5cHJlc3MnKTtcblxuICAgIC8vIFNldHVwIHRoZSBnb29nbGUgcGxhY2VzIGF1dG8gZmlsbCBhZGRyZXNzIHNjY3JlZW5cbiAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9wbGFjZXMtYXV0b2NvbXBsZXRlXG4gICAgdGhpcy5kZWxpdmVyeUZpZWxkID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoXG4gICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGl2ZXJ5LWFkZHJlc3MnKSkse1xuICAgICAgICB0eXBlczogWydnZW9jb2RlJ10sXG4gICAgICAgIG1haW46IHRoaXMubWFpbixcbiAgICAgICAgY2FsbGJhY2s6dGhpcy5maWxsSW5EZWxpdmVyeSxcbiAgICAgIH0pO1xuICAgIHRoaXMuZ2VvbG9jYXRlKHRoaXMuZGVsaXZlcnlGaWVsZCk7XG4gICAgdGhpcy5kZWxpdmVyeUZpZWxkLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgZnVuY3Rpb24gKCl7XG4gICAgICBqUXVlcnkoJyNkZWxpdmVyeS1hZGRyZXNzJykudmFsKCcnKTtcbiAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5nZXRQbGFjZSgpKTtcbiAgICB9KTtcblxuICAgIGpRdWVyeSgnI2RlbGl2ZXJ5LW1hbnVhbC1oaWRkZW4nKS5oaWRlKCk7XG4gICAgalF1ZXJ5KCcjYWRkcmVzcy1ub3QtZm91bmQnKS5jbGljaygoKT0+e1xuICAgICAgdGhpcy5tYWluLnYudmlld3MuZGVsaXZlcnlwYXltZW50LnNob3dNYW51YWxEZWxpdmVyeSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgYXV0aG9yaXR5VG9MZWF2ZSBzaWdudXAgdG8gbm9cbiAgICBpZiAodGhpcy5tYWluLm0uZGF0YS5vcmRlci5hdXRob3JpdHlUb0xlYXZlID09PSAnJyl7XG4gICAgICB0aGlzLm1haW4ubS51cGRhdGVPcmRlciAoJ2F1dGhvcml0eVRvTGVhdmUnLCAnbm8nKTtcbiAgICAgIGpRdWVyeSgnI2lucHV0LWxlYXZlLWluZm8nKS5oaWRlKCk7XG4gICAgfVxuICAgIGpRdWVyeSgnI2F1dGhvcml0eS10by1sZWF2ZScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoalF1ZXJ5KCcjYXV0aG9yaXR5LXRvLWxlYXZlJykuaXMoJzpjaGVja2VkJykpe1xuICAgICAgICB0aGlzLm1haW4ubS51cGRhdGVPcmRlciAoJ2F1dGhvcml0eVRvTGVhdmUnLCAneWVzJyk7XG4gICAgICAgIHRoaXMubWFpbi52LnZpZXdzLmRlbGl2ZXJ5cGF5bWVudC5zaG93QXV0aG9yaXR5VG9MZWF2ZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMubWFpbi5tLnVwZGF0ZU9yZGVyICgnYXV0aG9yaXR5VG9MZWF2ZScsICdubycpO1xuICAgICAgICB0aGlzLm1haW4udi52aWV3cy5kZWxpdmVyeXBheW1lbnQuaGlkZUF1dGhvcml0eVRvTGVhdmUoKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgalF1ZXJ5KCcjZmlyc3RuYW1lJykuZm9jdXNvdXQoKCk9PntcbiAgICAgIHRoaXMubWFpbi5tLnVwZGF0ZU9yZGVyICgnZmlyc3ROYW1lJywgalF1ZXJ5KCcjZmlyc3RuYW1lJykudmFsKCkpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcjZGVsaXZlcnktYWRkcmVzcycpLmZvY3Vzb3V0KCgpPT57XG4gICAgICB0aGlzLm1haW4ubS51cGRhdGVPcmRlciAoJ2RlbGl2ZXJ5QWRkcmVzcycsIGpRdWVyeSgnI2RlbGl2ZXJ5LWFkZHJlc3MnKS52YWwoKSk7XG4gICAgfSk7XG5cbiAgICBqUXVlcnkoJyNiaWxsaW5nLWZpcnN0bmFtZScpLmZvY3Vzb3V0KCgpPT57XG4gICAgICB0aGlzLm1haW4ubS51cGRhdGVPcmRlciAoJ2JpbGxpbmdGaXJzdE5hbWUnLCBqUXVlcnkoJyNiaWxsaW5nLWZpcnN0bmFtZScpLnZhbCgpKTtcbiAgICB9KTtcblxuICAgIGpRdWVyeSgnI2JpbGxpbmctbGFzdG5hbWUnKS5mb2N1c291dCgoKT0+e1xuICAgICAgdGhpcy5tYWluLm0udXBkYXRlT3JkZXIgKCdiaWxsaW5nTGFzdE5hbWUnLCBqUXVlcnkoJyNiaWxsaW5nLWxhc3RuYW1lJykudmFsKCkpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcjbGFzdG5hbWUnKS5mb2N1c291dCgoKT0+e1xuICAgICAgdGhpcy5tYWluLm0udXBkYXRlT3JkZXIgKCdsYXN0TmFtZScsIGpRdWVyeSgnI2xhc3RuYW1lJykudmFsKCkpO1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcjaW5wdXQtbGVhdmUtaW5mbycpLmZvY3Vzb3V0KCgpPT57XG4gICAgICB0aGlzLm1haW4ubS51cGRhdGVPcmRlciAoJ2F1dGhvcml0eVRvTGVhdmVJbmZvJywgalF1ZXJ5KCcjaW5wdXQtbGVhdmUtaW5mbycpLnZhbCgpKTtcbiAgICB9KTtcblxuICAgIGpRdWVyeSgnI2J1c2luZXNzbmFtZScpLmZvY3Vzb3V0KCgpPT57XG4gICAgICB0aGlzLm1haW4ubS51cGRhdGVPcmRlciAoJ2J1c2luZXNzbmFtZScsIGpRdWVyeSgnI2J1c2luZXNzbmFtZScpLnZhbCgpKTtcbiAgICB9KTtcblxuICAgIGpRdWVyeSgnI3Bob25lbnVtYmVyJykuZm9jdXNvdXQoKCk9PntcbiAgICAgIHRoaXMubWFpbi5tLnVwZGF0ZU9yZGVyICgncGhvbmVudW1iZXInLCBqUXVlcnkoJyNwaG9uZW51bWJlcicpLnZhbCgpKTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGJpbGwgdG8gZGlmZmVyZW50IGFkZHJlc3MgYXMgbm9cbiAgICAvLyBTZXR1cCB0aGUgZ29vZ2xlIHBsYWNlcyBhdXRvIGZpbGwgYWRkcmVzcyBzY2NyZWVuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcGxhY2VzLWF1dG9jb21wbGV0ZVxuICAgIHRoaXMuYmlsbGluZ0ZpZWxkID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoXG4gICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpbGxpbmctYWRkcmVzcycpKSx7XG4gICAgICAgIHR5cGVzOiBbJ2dlb2NvZGUnXSxcbiAgICAgICAgbWFpbjogdGhpcy5tYWluLFxuICAgICAgICBjYWxsYmFjazp0aGlzLmZpbGxJbkJpbGxpbmdcbiAgICAgIH0pO1xuICAgIHRoaXMuZ2VvbG9jYXRlKHRoaXMuYmlsbGluZ0ZpZWxkKTtcbiAgICB0aGlzLmJpbGxpbmdGaWVsZC5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsIGZ1bmN0aW9uICgpe1xuICAgICAgalF1ZXJ5KCcjYmlsbGluZy1hZGRyZXNzJykudmFsKCcnKTtcbiAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5nZXRQbGFjZSgpKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm1haW4ubS5kYXRhLm9yZGVyLmJpbGxUb0RpZmZlcmVudEFkZHJlc3MgPT09ICcnKXtcbiAgICAgIHRoaXMubWFpbi5tLnVwZGF0ZU9yZGVyICgnYmlsbFRvRGlmZmVyZW50QWRkcmVzcycsICdubycpO1xuICAgICAgdGhpcy5tYWluLnYudmlld3MuZGVsaXZlcnlwYXltZW50LmhpZGVCaWxsaW5nQWRkcmVzcygpO1xuICAgICAgdGhpcy5tYWluLnYudmlld3MuZGVsaXZlcnlwYXltZW50LmhpZGVNYW51YWxCaWxsaW5nKCk7XG4gICAgfVxuICAgIGpRdWVyeSgnI2JpbGwtdG8tZGlmZmVyZW50JykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChqUXVlcnkoJyNiaWxsLXRvLWRpZmZlcmVudCcpLmlzKCc6Y2hlY2tlZCcpKXtcbiAgICAgICAgdGhpcy5tYWluLm0udXBkYXRlT3JkZXIgKCdiaWxsVG9EaWZmZXJlbnRBZGRyZXNzJywgJ3llcycpO1xuICAgICAgICB0aGlzLm1haW4udi52aWV3cy5kZWxpdmVyeXBheW1lbnQuc2hvd0JpbGxpbmdBZGRyZXNzKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5tYWluLm0udXBkYXRlT3JkZXIgKCdiaWxsVG9EaWZmZXJlbnRBZGRyZXNzJywgJ25vJyk7XG4gICAgICAgIHRoaXMubWFpbi52LnZpZXdzLmRlbGl2ZXJ5cGF5bWVudC5oaWRlQmlsbGluZ0FkZHJlc3MoKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgalF1ZXJ5KCcjYmlsbGluZy1hZGRyZXNzLW5vdC1mb3VuZCcpLmNsaWNrKCgpPT57XG4gICAgICB0aGlzLm1haW4udi52aWV3cy5kZWxpdmVyeXBheW1lbnQuc2hvd01hbnVhbEJpbGxpbmcoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IHBheW1lbnQgbWV0aG9kIHRvIHBheXBhbFxuICAgIGlmICh0aGlzLm1haW4ubS5kYXRhLm9yZGVyLnBheW1lbnRNZXRob2QgPT09ICcnKXtcbiAgICAgIHRoaXMubWFpbi5tLnNldFBheW1lbnRNZXRob2QoJ3BheXBhbCcpO1xuICAgIH1cblxuICAgIGpRdWVyeSgnLnBheW1lbnQtb3B0aW9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMubWFpbi5tLnNldFBheW1lbnRNZXRob2QoZXZlbnQudGFyZ2V0LmlkKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgalF1ZXJ5KCcucGF5bWVudC1vcHRpb24nKS5ob3ZlcihcbiAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaWQgIT09IHRoaXMubWFpbi5tLmRhdGEub3JkZXIucGF5bWVudE1ldGhvZCl7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9IGAvc2tpbi9mcm9udGVuZC9iYXNlL2RlZmF1bHQvaW1hZ2VzL2FsaWdlbnQvY2FydGNoZWNraXRvdXQvcGF5bWVudC8ke2V2ZW50LnRhcmdldC5pZH1fb3Zlci5wbmdgO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyksXG5cbiAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaWQgIT09IHRoaXMubWFpbi5tLmRhdGEub3JkZXIucGF5bWVudE1ldGhvZCkge1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5zcmMgPSBgL3NraW4vZnJvbnRlbmQvYmFzZS9kZWZhdWx0L2ltYWdlcy9hbGlnZW50L2NhcnRjaGVja2l0b3V0L3BheW1lbnQvJHtldmVudC50YXJnZXQuaWR9LnBuZ2A7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICBqUXVlcnkoJyNhcHBseS1wcm9tbycpLmNsaWNrKChldmVudCk9PntcbiAgICAgIHRoaXMubWFpbi5tLmFwcGx5UHJvbW8oalF1ZXJ5KCcjcHJvbW9jb2RlJykudmFsKCkudG9VcHBlckNhc2UoKSk7XG4gICAgfSk7XG5cbiAgICBqUXVlcnkoJyNyZWRlZW0tZ2lmdGNhcmQnKS5jbGljaygoZXZlbnQpPT57XG4gICAgICB0aGlzLm1haW4ubS5yZWRlZW1HaWZ0KGpRdWVyeSgnI2dpZnRjYXJkJykudmFsKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgbmV3c2xldHRlciBzaWdudXAgYXMgeWVzXG4gICAgaWYgKHRoaXMubWFpbi5tLmRhdGEub3JkZXIubmV3c2xldHRlciA9PT0gJycpe1xuICAgICAgdGhpcy5tYWluLm0udXBkYXRlT3JkZXIgKCduZXdzbGV0dGVyJywgJ3llcycpO1xuICAgIH1cbiAgICBqUXVlcnkoJyNuZXdzbGV0dGVyLXNpZ251cCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoalF1ZXJ5KCcjbmV3c2xldHRlci1zaWdudXAnKS5pcygnOmNoZWNrZWQnKSl7XG4gICAgICAgIHRoaXMubWFpbi5tLnVwZGF0ZU9yZGVyICgnbmV3c2xldHRlcicsICd5ZXMnKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLm1haW4ubS51cGRhdGVPcmRlciAoJ25ld3NsZXR0ZXInLCAnbm8nKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgLy8gICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAvLyAgICAgdGhpcy52YWxpZGF0ZU9yZGVyKCk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gIH1cblxuICBnZW9sb2NhdGUoYXV0b2NvbXBsZXRlKSB7XG4gICAgLy8gQmlhcyB0aGUgYXV0b2NvbXBsZXRlIG9iamVjdCB0byB0aGUgdXNlcidzIGdlb2dyYXBoaWNhbCBsb2NhdGlvbixcbiAgICBqUXVlcnkoJyNwbGFjZS1vcmRlcicpLmNsaWNrKChldmVudCk9PntcbiAgICAgIHRoaXMudmFsaWRhdGVPcmRlcigpO1xuICAgIH0pO1xuXG4gICAgLy8galF1ZXJ5KHdpbmRvdykua2V5cHJlc3MoKGV2ZW50KSA9PiB7XG4gICAgLy8gYXMgc3VwcGxpZWQgYnkgdGhlIGJyb3dzZXIncyAnbmF2aWdhdG9yLmdlb2xvY2F0aW9uJyBvYmplY3QuXG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBnZW9sb2NhdGlvbiA9IHtcbiAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2lyY2xlID0gbmV3IGdvb2dsZS5tYXBzLkNpcmNsZSh7XG4gICAgICAgICAgY2VudGVyOiBnZW9sb2NhdGlvbixcbiAgICAgICAgICByYWRpdXM6IHBvc2l0aW9uLmNvb3Jkcy5hY2N1cmFjeVxuICAgICAgICB9KTtcbiAgICAgICAgYXV0b2NvbXBsZXRlLnNldEJvdW5kcyhjaXJjbGUuZ2V0Qm91bmRzKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZmlsbEluRGVsaXZlcnkgKHBsYWNlKXtcbiAgICBsZXQgbnVtQ29tcG9uZW50cyA9IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50cy5sZW5ndGg7XG4gICAgY29uc3Qgc3RyZWV0MCA9IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1swXS5zaG9ydF9uYW1lIHx8ICcnO1xuICAgIGNvbnN0IHN0cmVldDEgPSBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbMV0uc2hvcnRfbmFtZSB8fCAnJztcbiAgICBjb25zdCBzdHJlZXQyID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzWzJdLnNob3J0X25hbWUgfHwgJyc7XG4gICAgbGV0IHN0cmVldEFkZHJlc3MgPSBgJHtzdHJlZXQwfSAke3N0cmVldDF9YDtcbiAgICBpZiAobnVtQ29tcG9uZW50cyA9PT0gOCl7XG4gICAgICBzdHJlZXRBZGRyZXNzID0gYCR7c3RyZWV0MH0gJHtzdHJlZXQxfSAke3N0cmVldDJ9YDtcbiAgICB9XG4gICAgalF1ZXJ5KCcjZGVsaXZlcnktc3RyZWV0LWFkZHJlc3MnKS52YWwoc3RyZWV0QWRkcmVzcyk7XG4gICAgY29uc3QgY2l0eSA9IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1tudW1Db21wb25lbnRzLTVdLnNob3J0X25hbWU7XG4gICAgalF1ZXJ5KCcjZGVsaXZlcnktY2l0eScpLnZhbChjaXR5KTtcbiAgICBjb25zdCBzdGF0ZSA9IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1tudW1Db21wb25lbnRzLTNdLnNob3J0X25hbWU7XG4gICAgalF1ZXJ5KCcjZGVsaXZlcnktc3RhdGUnKS52YWwoc3RhdGUpO1xuICAgIGNvbnN0IHBvc3Rjb2RlID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzW251bUNvbXBvbmVudHMtMV0uc2hvcnRfbmFtZTtcbiAgICBqUXVlcnkoJyNkZWxpdmVyeS1wb3N0Y29kZScpLnZhbChwb3N0Y29kZSk7XG4gICAgY29uc3QgZGVsaXZlcnlBZGRyZXNzID0gYCR7c3RyZWV0QWRkcmVzc30sICR7Y2l0eX0sICR7c3RhdGV9LCAke3Bvc3Rjb2RlfWA7XG4gICAgalF1ZXJ5KCcjZGVsaXZlcnktYWRkcmVzcycpLnZhbChkZWxpdmVyeUFkZHJlc3MpO1xuICAgIHRoaXMubWFpbi5tLnVwZGF0ZU9yZGVyICgnZGVsaXZlcnlBZGRyZXNzJywgZGVsaXZlcnlBZGRyZXNzKTtcbiAgfVxuXG4gIGZpbGxJbkJpbGxpbmcgKHBsYWNlKXtcbiAgICBsZXQgbnVtQ29tcG9uZW50cyA9IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50cy5sZW5ndGg7XG4gICAgY29uc3Qgc3RyZWV0MCA9IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1swXS5zaG9ydF9uYW1lIHx8ICcnO1xuICAgIGNvbnN0IHN0cmVldDEgPSBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbMV0uc2hvcnRfbmFtZSB8fCAnJztcbiAgICBjb25zdCBzdHJlZXQyID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzWzJdLnNob3J0X25hbWUgfHwgJyc7XG4gICAgbGV0IHN0cmVldEFkZHJlc3MgPSBgJHtzdHJlZXQwfSAke3N0cmVldDF9YDtcbiAgICBpZiAobnVtQ29tcG9uZW50cyA9PT0gOCl7XG4gICAgICBzdHJlZXRBZGRyZXNzID0gYCR7c3RyZWV0MH0gJHtzdHJlZXQxfSAke3N0cmVldDJ9YDtcbiAgICB9XG4gICAgalF1ZXJ5KCcjYmlsbGluZy1zdHJlZXQtYWRkcmVzcycpLnZhbChzdHJlZXRBZGRyZXNzKTtcbiAgICBjb25zdCBjaXR5ID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzW251bUNvbXBvbmVudHMtNV0uc2hvcnRfbmFtZTtcbiAgICBqUXVlcnkoJyNiaWxsaW5nLWNpdHknKS52YWwoY2l0eSk7XG4gICAgY29uc3Qgc3RhdGUgPSBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbbnVtQ29tcG9uZW50cy0zXS5zaG9ydF9uYW1lO1xuICAgIGpRdWVyeSgnI2JpbGxpbmctc3RhdGUnKS52YWwoc3RhdGUpO1xuICAgIGNvbnN0IHBvc3Rjb2RlID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzW251bUNvbXBvbmVudHMtMV0uc2hvcnRfbmFtZTtcbiAgICBqUXVlcnkoJyNiaWxsaW5nLXBvc3Rjb2RlJykudmFsKHBvc3Rjb2RlKTtcbiAgICBjb25zdCBiaWxsaW5nQWRkcmVzcyA9IGAke3N0cmVldEFkZHJlc3N9LCAke2NpdHl9LCAke3N0YXRlfSwgJHtwb3N0Y29kZX1gO1xuICAgIGpRdWVyeSgnI2JpbGxpbmctYWRkcmVzcycpLnZhbChiaWxsaW5nQWRkcmVzcyk7XG4gICAgdGhpcy5tYWluLm0udXBkYXRlT3JkZXIgKCdiaWxsaW5nQWRkcmVzcycsIGJpbGxpbmdBZGRyZXNzKTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5tYWluLm0udXBkYXRlT3JkZXInKTtcblxuICB9XG5cbiAgYWRkVGljayhmaWVsZCkge1xuICAgIGpRdWVyeShmaWVsZCkucmVtb3ZlQ2xhc3MgKCdpbnB1dC1lcnJvcicpO1xuICAgIGpRdWVyeShmaWVsZCkuYWRkQ2xhc3MgKCdpbnB1dC10aWNrZWQnKTtcblxuICB9XG5cbiAgcmVtb3ZlVGljayhmaWVsZCkge1xuICAgIGpRdWVyeShmaWVsZCkucmVtb3ZlQ2xhc3MgKCdpbnB1dC10aWNrZWQnKTtcbiAgfVxuXG4gIHZhbGlkYXRlT3JkZXIoKSB7XG4gICAgbGV0IG9yZGVyUmVhZHkgPSB0cnVlO1xuICAgIGxldCBmaXJzdEVycm9yRmllbGQgPSBmYWxzZTtcblxuICAgIC8vIGZpcnN0bmFtZSBmaWVsZCBtdXN0IG5vdCBiZSBibGFua1xuICAgIGlmIChqUXVlcnkoJyNmaXJzdG5hbWUnKS52YWwoKSA9PT0gJycpe1xuICAgICAgdGhpcy5tYWluLnYuc2hha2VGaWVsZChqUXVlcnkoJyNmaXJzdG5hbWUnKSk7XG4gICAgICB0aGlzLnJlbW92ZVRpY2soalF1ZXJ5KCcjZmlyc3RuYW1lJykpO1xuICAgICAgb3JkZXJSZWFkeSA9IGZhbHNlO1xuICAgICAgZmlyc3RFcnJvckZpZWxkID0galF1ZXJ5KCcjZmlyc3RuYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkVGljayhqUXVlcnkoJyNmaXJzdG5hbWUnKSk7XG4gICAgfVxuXG4gICAgLy8gbGFzdG5hbWUgZmllbGQgbXVzdCBub3QgYmUgYmxhbmtcbiAgICBpZiAoalF1ZXJ5KCcjbGFzdG5hbWUnKS52YWwoKSA9PT0gJycpe1xuICAgICAgdGhpcy5tYWluLnYuc2hha2VGaWVsZChqUXVlcnkoJyNsYXN0bmFtZScpKTtcbiAgICAgIHRoaXMucmVtb3ZlVGljayhqUXVlcnkoJyNsYXN0bmFtZScpKTtcbiAgICAgIG9yZGVyUmVhZHkgPSBmYWxzZTtcbiAgICAgIGlmICghZmlyc3RFcnJvckZpZWxkKXtcbiAgICAgICAgZmlyc3RFcnJvckZpZWxkID0galF1ZXJ5KCcjbGFzdG5hbWUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRUaWNrKGpRdWVyeSgnI2xhc3RuYW1lJykpO1xuICAgIH1cblxuICAgIC8vIGRlbGl2ZXJ5IGFkZHJlc3MgZmllbGQgbXVzdCBub3QgYmUgYmxhbmtcbiAgICBpZiAoalF1ZXJ5KCcjZGVsaXZlcnktYWRkcmVzcycpLnZhbCgpID09PSAnJyl7XG4gICAgICB0aGlzLm1haW4udi5zaGFrZUZpZWxkKGpRdWVyeSgnI2RlbGl2ZXJ5LWFkZHJlc3MnKSk7XG4gICAgICB0aGlzLnJlbW92ZVRpY2soalF1ZXJ5KCcjZGVsaXZlcnktYWRkcmVzcycpKTtcbiAgICAgIG9yZGVyUmVhZHkgPSBmYWxzZTtcbiAgICAgIGlmICghZmlyc3RFcnJvckZpZWxkKSB7XG4gICAgICAgIGZpcnN0RXJyb3JGaWVsZCA9IGpRdWVyeSgnI2RlbGl2ZXJ5LWFkZHJlc3MnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRUaWNrKGpRdWVyeSgnI2RlbGl2ZXJ5LWFkZHJlc3MnKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWFpbi5tLmRhdGEub3JkZXIuYmlsbFRvRGlmZmVyZW50QWRkcmVzcyA9PT0gJ3llcycpe1xuICAgICAgLy8gYmlsbGluZyBmaXJzdG5hbWUgbXVzdCBub3QgYmUgYmxhbmtcbiAgICAgIGlmIChqUXVlcnkoJyNiaWxsaW5nLWZpcnN0bmFtZScpLnZhbCgpID09PSAnJyl7XG4gICAgICAgIHRoaXMubWFpbi52LnNoYWtlRmllbGQoalF1ZXJ5KCcjYmlsbGluZy1maXJzdG5hbWUnKSk7XG4gICAgICAgIHRoaXMucmVtb3ZlVGljayhqUXVlcnkoJyNiaWxsaW5nLWZpcnN0bmFtZScpKTtcbiAgICAgICAgb3JkZXJSZWFkeSA9IGZhbHNlO1xuICAgICAgICBmaXJzdEVycm9yRmllbGQgPSBqUXVlcnkoJyNiaWxsaW5nLWZpcnN0bmFtZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRUaWNrKGpRdWVyeSgnI2JpbGxpbmctZmlyc3RuYW1lJykpO1xuICAgICAgfVxuXG4gICAgICAvLyBiaWxsaW5nIGxhc3RuYW1lIG11c3Qgbm90IGJlIGJsYW5rXG4gICAgICBpZiAoalF1ZXJ5KCcjYmlsbGluZy1sYXN0bmFtZScpLnZhbCgpID09PSAnJyl7XG4gICAgICAgIHRoaXMubWFpbi52LnNoYWtlRmllbGQoalF1ZXJ5KCcjYmlsbGluZy1sYXN0bmFtZScpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVUaWNrKGpRdWVyeSgnI2JpbGxpbmctbGFzdG5hbWUnKSk7XG4gICAgICAgIG9yZGVyUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgZmlyc3RFcnJvckZpZWxkID0galF1ZXJ5KCcjYmlsbGluZy1sYXN0bmFtZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRUaWNrKGpRdWVyeSgnI2JpbGxpbmctbGFzdG5hbWUnKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGJpbGxpbmcgYWRkcmVzcyBtdXN0IG5vdCBiZSBibGFua1xuICAgICAgaWYgKGpRdWVyeSgnI2JpbGxpbmctYWRkcmVzcycpLnZhbCgpID09PSAnJyl7XG4gICAgICAgIHRoaXMubWFpbi52LnNoYWtlRmllbGQoalF1ZXJ5KCcjYmlsbGluZy1hZGRyZXNzJykpO1xuICAgICAgICB0aGlzLnJlbW92ZVRpY2soalF1ZXJ5KCcjYmlsbGluZy1hZGRyZXNzJykpO1xuICAgICAgICBvcmRlclJlYWR5ID0gZmFsc2U7XG4gICAgICAgIGZpcnN0RXJyb3JGaWVsZCA9IGpRdWVyeSgnI2JpbGxpbmctYWRkcmVzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRUaWNrKGpRdWVyeSgnI2JpbGxpbmctYWRkcmVzcycpKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGlmICh0aGlzLm1haW4ubS5kYXRhLm9yZGVyLnBheW1lbnRNZXRob2QgPT09ICdjYXJkJyl7XG4gICAgICAvLyBjYXJkIG51bWJlciBtdXN0IG5vdCBiZSBibGFua1xuICAgICAgaWYgKGpRdWVyeSgnI2NhcmRudW1iZXInKS52YWwoKSA9PT0gJycpe1xuICAgICAgICB0aGlzLm1haW4udi5zaGFrZUZpZWxkKGpRdWVyeSgnI2NhcmRudW1iZXInKSk7XG4gICAgICAgIHRoaXMucmVtb3ZlVGljayhqUXVlcnkoJyNjYXJkbnVtYmVyJykpO1xuICAgICAgICBvcmRlclJlYWR5ID0gZmFsc2U7XG4gICAgICAgIGZpcnN0RXJyb3JGaWVsZCA9IGpRdWVyeSgnI2NhcmRudW1iZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkVGljayhqUXVlcnkoJyNjYXJkbnVtYmVyJykpO1xuICAgICAgfVxuXG4gICAgICAvLyBleHBpcnkgbXVzdCBub3QgYmUgYmxhbmtcbiAgICAgIGlmIChqUXVlcnkoJyNleHBpcnknKS52YWwoKSA9PT0gJycpe1xuICAgICAgICB0aGlzLm1haW4udi5zaGFrZUZpZWxkKGpRdWVyeSgnI2V4cGlyeScpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVUaWNrKGpRdWVyeSgnI2V4cGlyeScpKTtcbiAgICAgICAgb3JkZXJSZWFkeSA9IGZhbHNlO1xuICAgICAgICBmaXJzdEVycm9yRmllbGQgPSBqUXVlcnkoJyNleHBpcnknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkVGljayhqUXVlcnkoJyNleHBpcnknKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGN2YyBtdXN0IG5vdCBiZSBibGFua1xuICAgICAgaWYgKGpRdWVyeSgnI2N2YycpLnZhbCgpID09PSAnJyl7XG4gICAgICAgIHRoaXMubWFpbi52LnNoYWtlRmllbGQoalF1ZXJ5KCcjY3ZjJykpO1xuICAgICAgICB0aGlzLnJlbW92ZVRpY2soalF1ZXJ5KCcjY3ZjJykpO1xuICAgICAgICBvcmRlclJlYWR5ID0gZmFsc2U7XG4gICAgICAgIGZpcnN0RXJyb3JGaWVsZCA9IGpRdWVyeSgnI2N2YycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRUaWNrKGpRdWVyeSgnI2N2YycpKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIFN1Ym1pdCB0aGUgb3JkZXIgaWYgaXQncyByZWFkeSB0aGlzLmFkZFRpY2soalF1ZXJ5KCcjZGVsaXZlcnktYWRkcmVzcycpKTtcbiAgICBpZiAob3JkZXJSZWFkeSl7XG4gICAgICB0aGlzLnN1Ym1pdE9yZGVyICgpO1xuICAgIH1lbHNle1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBqUXVlcnkoZmlyc3RFcnJvckZpZWxkKS5mb2N1cygpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgfVxuICBzdWJtaXRPcmRlciAoKXtcbiAgICB0aGlzLm1haW4udi52aWV3cy5zdW1tYXJ5LmhpZGUoKTtcbiAgICB0aGlzLm1haW4udi52aWV3cy5kZWxpdmVyeXBheW1lbnQuaGlkZSgpO1xuICAgIHRoaXMubWFpbi52LnZpZXdzLnBsYWNlb3JkZXIuc2hvdygpO1xuICB9XG5cbn1cbiIsIi8qKlxuICogQWxpZ2VudCBDaGVja0l0T3V0XG4gKlxuICogQGNhdGVnb3J5ICAgQWxpZ2VudFxuICogQHBhY2thZ2UgICAgYWxpZ2VudC1jaGVja2l0b3V0XG4gKiBAY29weXJpZ2h0ICBDb3B5cmlnaHQgKGMpIDIwMTcgQWxpZ2VudFxuICogQGF1dGhvciAgICAgQ2hyaXMgRG9yd2FyZCA8Y2hyaXMuZG9yd2FyZEBhbGlnZW50LmNvbS5hdT5cbiAqXG4gKiBzcmMvanMvTVZDL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJFbWFpbC5qc1xuICogRW1haWwgU2NyZWVuIFVJXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJFbWFpbCB7XG5cbiAgY29uc3RydWN0b3IobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gIH1cblxuICBzZXRVSSAoKXtcbiAgICBqUXVlcnkod2luZG93KS51bmJpbmQoJ2tleXByZXNzJyk7XG4gICAgalF1ZXJ5KCcjZW1haWwtY29udGludWUnKS5jbGljaygoZXZlbnQpPT57XG4gICAgICB0aGlzLm1haW4uYy5jb250cm9sbGVycy5lbWFpbC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgfSk7XG4gICAgalF1ZXJ5KHdpbmRvdykua2V5cHJlc3MoKGV2ZW50KT0+e1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMubWFpbi5jLmNvbnRyb2xsZXJzLmVtYWlsLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrVmFsaWRpdHkgKCl7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB0aGlzLnZhbGlkYXRlRW1haWwgKGpRdWVyeSgnI2VtYWlsLWFkZHJlc3MnKS52YWwoKSk7XG4gICAgaWYgKCF2YWxpZGl0eS52YWxpZCl7XG4gICAgICB0aGlzLm1haW4udi52aWV3cy5lbWFpbC5zaG93RXJyb3IodmFsaWRpdHkubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFpbi52LnZpZXdzLmVtYWlsLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUVtYWlsIChlbWFpbCl7XG4gICAgLy8gQ2hlY2sgZm9yIGVtcHR5IGZpZWxkXG4gICAgaWYgKGVtYWlsID09PSAnJyl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICdFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDaGVjayBmb3IgYSB2YWxpZCBlbWFpbCBhZGRyZXNzIChAIHNpZ24sIHRsZCBldGMpXG4gICAgICAvLyByZXR1cm5zIHRydWUgaWYgdmFsaWQsIGZhbHNlIGlmIG5vdC4gaHR0cDovL2hleGlsbGlvbi5jb20vc2FtcGxlcy9cbiAgICAgIGNvbnN0IHJlRW1haWwgPSAvXig/OltcXHdcXCFcXCNcXCRcXCVcXCZcXCdcXCpcXCtcXC1cXC9cXD1cXD9cXF5cXGBcXHtcXHxcXH1cXH5dK1xcLikqW1xcd1xcIVxcI1xcJFxcJVxcJlxcJ1xcKlxcK1xcLVxcL1xcPVxcP1xcXlxcYFxce1xcfFxcfVxcfl0rQCg/Oig/Oig/OlthLXpBLVowLTldKD86W2EtekEtWjAtOVxcLV0oPyFcXC4pKXswLDYxfVthLXpBLVowLTldP1xcLikrW2EtekEtWjAtOV0oPzpbYS16QS1aMC05XFwtXSg/ISQpKXswLDYxfVthLXpBLVowLTldPyl8KD86XFxbKD86KD86WzAxXT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSlcXC4pezN9KD86WzAxXT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSlcXF0pKSQvO1xuICAgICAgaWYoIWVtYWlsLm1hdGNoKHJlRW1haWwpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdOb3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IHRydWVcbiAgICB9O1xuICB9XG5cbn1cbiIsIi8qKlxuICogQWxpZ2VudCBDaGVja0l0T3V0XG4gKlxuICogQGNhdGVnb3J5ICAgQWxpZ2VudFxuICogQHBhY2thZ2UgICAgYWxpZ2VudC1jaGVja2l0b3V0XG4gKiBAY29weXJpZ2h0ICBDb3B5cmlnaHQgKGMpIDIwMTcgQWxpZ2VudFxuICogQGF1dGhvciAgICAgQ2hyaXMgRG9yd2FyZCA8Y2hyaXMuZG9yd2FyZEBhbGlnZW50LmNvbS5hdT5cbiAqXG4gKiBzcmMvanMvTVZDL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXJQYXNzd29yZC5qc1xuICogUGFzc3dvcmQgU2NyZWVuIFVJXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJQYXNzd29yZCB7XG5cbiAgY29uc3RydWN0b3IobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gIH1cblxuICBzZXRVSSAoKXtcbiAgICBqUXVlcnkod2luZG93KS51bmJpbmQoJ2tleXByZXNzJyk7XG4gICAgalF1ZXJ5KCcjcGFzc3dvcmQtY29udGludWUnKS5jbGljaygoZXZlbnQpPT57XG4gICAgICB0aGlzLmNoZWNrVmFsaWRpdHkoKTtcbiAgICB9KTtcbiAgICBqUXVlcnkod2luZG93KS5rZXlwcmVzcygoZXZlbnQpPT57XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGVja1ZhbGlkaXR5ICgpe1xuICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy52YWxpZGF0ZVBhc3N3b3JkIChqUXVlcnkoJyNwYXNzd29yZCcpLnZhbCgpKTtcbiAgICBpZiAoIXZhbGlkaXR5LnZhbGlkKXtcbiAgICAgIHRoaXMubWFpbi52LnZpZXdzLnBhc3N3b3JkLnNob3dFcnJvcih2YWxpZGl0eS5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYWluLnYudmlld3MucGFzc3dvcmQuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlUGFzc3dvcmQgKHBhc3N3b3JkKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tLmRhdGEub3JkZXIuY3VzdG9tZXJUeXBlID09PSAnbmV3Jyl7XG4gICAgICBpZiAocGFzc3dvcmQgIT09ICcnICYmIHBhc3N3b3JkLmxlbmd0aCA+IDUpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbGlkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciA2IG9yIG1vcmUgY2hhcmFjdGVycy4nXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1haW4ubS5kYXRhLmN1c3RvbWVyLnBhc3N3b3JkID09PSBwYXNzd29yZCkge1xuICAgICAgICB0aGlzLm1haW4ubS5hZGRFeGlzdGluZ0N1c3RvbWVyKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsaWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiAnSW5jb3JyZWN0IHBhc3N3b3JkLidcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiIsIi8qKlxuICogQWxpZ2VudCBDaGVja0l0T3V0XG4gKlxuICogQGNhdGVnb3J5ICAgQWxpZ2VudFxuICogQHBhY2thZ2UgICAgYWxpZ2VudC1jaGVja2l0b3V0XG4gKiBAY29weXJpZ2h0ICBDb3B5cmlnaHQgKGMpIDIwMTcgQWxpZ2VudFxuICogQGF1dGhvciAgICAgQ2hyaXMgRG9yd2FyZCA8Y2hyaXMuZG9yd2FyZEBhbGlnZW50LmNvbS5hdT5cbiAqXG4gKiBzcmMvanMvbWFvZGVscy9jdXN0b21lcnMuanNcbiAqIEV4YW1wbGUgQ3VzdG9tZXJzIE1vZGVsXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImN1c3RvbWVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNJZFwiOiBcIjAwMDAwMVwiLFxuICAgICAgICAgIFwiZW1haWxcIjogXCJjaHJpcy5kb3J3YXJkQGFsaWdlbnQuY29tLmF1XCIsXG4gICAgICAgICAgXCJmaXJzdE5hbWVcIjogXCJDaHJpc1wiLFxuICAgICAgICAgIFwibGFzdE5hbWVcIjogXCJEb3J3YXJkXCIsXG4gICAgICAgICAgXCJwYXNzd29yZFwiOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgXCJkZWxpdmVyeUFkZHJlc3NcIjogXCI1OCBIYW1wdG9uIFN0IFMsIEdvb2R3b29kLCBTQSA1MDM0XCIsXG4gICAgICAgICAgXCJjb3VudHJ5XCI6IFwiQXVzdHJhbGlhXCIsXG4gICAgICAgICAgXCJiaWxsaW5nXCI6IFwiMjAwIEdvb2R3b29kIFJvYWQsIEdvb2R3b29kLCBTQSA1MDM0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY0lkXCI6IFwiMDAwMDAyXCIsXG4gICAgICAgICAgXCJlbWFpbFwiOiBcImNocmlzQGxpc3RpbmdzbGFiLmNvbVwiLFxuICAgICAgICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2hyaXN0b3BoZXJcIixcbiAgICAgICAgICBcImxhc3ROYW1lXCI6IFwiRG9yd2FyZFwiLFxuICAgICAgICAgIFwicGFzc3dvcmRcIjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIFwiZGVsaXZlcnlBZGRyZXNzXCI6IFwiNCBIb2xzdCBNZWFkLCBTdG93bWFya2V0LCBJUDE0IDFURFwiLFxuICAgICAgICAgIFwiYmlsbGluZ0FkZHJlc3NcIjogXCI1OCBIYW1wdG9uIFN0IFMsIEdvb2R3b29kLCBTQSA1MDM0XCIsXG4gICAgICAgICAgXCJjb3VudHJ5XCI6IFwiQXVzdHJhbGlhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY0lkXCI6IFwiMDAwMDAzXCIsXG4gICAgICAgICAgXCJlbWFpbFwiOiBcImxpc3RpbmdzbGFiQGdtYWlsLmNvbVwiLFxuICAgICAgICAgIFwiZmlyc3ROYW1lXCI6IFwiTGlzdGluZ3NsYWJcIixcbiAgICAgICAgICBcImxhc3ROYW1lXCI6IFwiXCIsXG4gICAgICAgICAgXCJwYXNzd29yZFwiOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgXCJkZWxpdmVyeUFkZHJlc3NcIjogXCI1OCBIYW1wdG9uIFN0IFMsIEdvb2R3b29kLCBTQSA1MDM0XCIsXG4gICAgICAgICAgXCJjb3VudHJ5XCI6IFwiQXVzdHJhbGlhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY0lkXCI6IFwiMDAwMDA0XCIsXG4gICAgICAgICAgXCJlbWFpbFwiOiBcIm1pY2hhZWxAYWxpZ2VudC5jb20uYXVcIixcbiAgICAgICAgICBcImZpcnN0TmFtZVwiOiBcIk1pY2hhZWxcIixcbiAgICAgICAgICBcImxhc3ROYW1lXCI6IFwiV3lsZGVcIixcbiAgICAgICAgICBcInBhc3N3b3JkXCI6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICBcImRlbGl2ZXJ5QWRkcmVzc1wiOiBcIjE0IFN0YW1mb3JkIENvdXJ0LCBBZGVsYWlkZSwgU0EgNTAwMFwiLFxuICAgICAgICAgIFwiYmlsbGluZ0FkZHJlc3NcIjogXCIxOCBXZXN0cGFjIFRvd2VyLCBBZGVsYWlkZSwgU0EgNTAwMFwiLFxuICAgICAgICAgIFwiY291bnRyeVwiOiBcIkF1c3RyYWxpYVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNJZFwiOiBcIjAwMDAwNVwiLFxuICAgICAgICAgIFwiZW1haWxcIjogXCJ3aWxsaWFtLmNoYW1iZXJzQGFsaWdlbnQuY29tLmF1XCIsXG4gICAgICAgICAgXCJmaXJzdE5hbWVcIjogXCJXaWxsaWFtXCIsXG4gICAgICAgICAgXCJsYXN0TmFtZVwiOiBcIkNoYW1iZXJzXCIsXG4gICAgICAgICAgXCJwYXNzd29yZFwiOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgXCJkZWxpdmVyeUFkZHJlc3NcIjogXCIxNCBTdGFtZm9yZCBDb3VydCwgQWRlbGFpZGUsIFNBIDUwMDBcIixcbiAgICAgICAgICBcImNvdW50cnlcIjogXCJBdXN0cmFsaWFcIixcbiAgICAgICAgICBcImJ1c2luZXNzTmFtZVwiOiBcIkFsaWdlbnRcIixcbiAgICAgICAgICBcInBob25lbnVtYmVyXCI6IFwiMDQyMiAyMjIgMzMzXCJcbiAgICAgICAgfVxuICAgIF1cbn07XG4iLCIvKipcbiAqIEFsaWdlbnQgQ2hlY2tJdE91dFxuICpcbiAqIEBjYXRlZ29yeSAgIEFsaWdlbnRcbiAqIEBwYWNrYWdlICAgIGFsaWdlbnQtY2hlY2tpdG91dFxuICogQGNvcHlyaWdodCAgQ29weXJpZ2h0IChjKSAyMDE3IEFsaWdlbnRcbiAqIEBhdXRob3IgICAgIENocmlzIERvcndhcmQgPGNocmlzLmRvcndhcmRAYWxpZ2VudC5jb20uYXU+XG4gKlxuICogc3JjL2pzL21hb2RlbHMvY291cG9ucy5qc1xuICogRXhhbXBsZSBnaWZ0Y2FyZHMgTW9kZWxcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIFwiZ2lmdGNhcmRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29kZVwiOiBcIjgwNTk1NjQ1MjU4NVwiLFxuICAgICAgICAgIFwiYW1vdW50XCI6IFwiMTAwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY29kZVwiOiBcIjAxMjM0NTY3ODlcIixcbiAgICAgICAgICBcImFtb3VudFwiOiBcIjUwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY29kZVwiOiBcIjk4NzY1NDMyMTBcIixcbiAgICAgICAgICBcImFtb3VudFwiOiBcIjEwMFwiXG4gICAgICAgIH1cbiAgICBdXG59O1xuIiwiLyoqXG4gKiBBbGlnZW50IENoZWNrSXRPdXRcbiAqXG4gKiBAY2F0ZWdvcnkgICBBbGlnZW50XG4gKiBAcGFja2FnZSAgICBhbGlnZW50LWNoZWNraXRvdXRcbiAqIEBjb3B5cmlnaHQgIENvcHlyaWdodCAoYykgMjAxNyBBbGlnZW50XG4gKiBAYXV0aG9yICAgICBDaHJpcyBEb3J3YXJkIDxjaHJpcy5kb3J3YXJkQGFsaWdlbnQuY29tLmF1PlxuICpcbiAqIHNyYy9qcy9NVkMvbW9kZWxzL29yZGVyU3VtbWFyeS5qc1xuICogRXhhbXBsZSBPcmRlciBTdW1tYXJ5IE1vZGVsXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcblwib3JkZXJTdW1tYXJ5XCI6IFtcbiAgICB7XG4gICAgICBcInNrdVwiOiBcIjAwMDAwM1wiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkZseSBBd2F5IFRhbmtpbmlcIixcbiAgICAgIFwiaW1hZ2VcIjogXCIvc2tpbi9mcm9udGVuZC9iYXNlL2RlZmF1bHQvaW1hZ2VzL2FsaWdlbnQvY2FydGNoZWNraXRvdXQvcHJvZHVjdHMvY2RzNTN0YTUzODYuOTAwX3RpZWR5ZWFic3RyYWN0aW9uX2ZseWF3YXlfdGFua2luaV8xLjE0ODk2NzU3NzMuanBnXCIsXG4gICAgICBcImRlc2NcIjogXCJGbHkgQXdheSB0YW5raW5pcyBhcmUgaW4uXCIsXG4gICAgICBcInNpemVcIjogXCIxNFwiLFxuICAgICAgXCJjb2xvdXJcIjogXCJCbGFja1wiLFxuICAgICAgXCJwcmljZVwiOiBcIjE5OS45OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNrdVwiOiBcIjAwMDAwMVwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkpldHMgQXJjYWRpYSBCYW5kZWF1XCIsXG4gICAgICBcImltYWdlXCI6IFwiL3NraW4vZnJvbnRlbmQvYmFzZS9kZWZhdWx0L2ltYWdlcy9hbGlnZW50L2NhcnRjaGVja2l0b3V0L3Byb2R1Y3RzL2pldGo0OTU0X2FyY2FkaWFfYmFuZGVhdV80LjE0OTYzNzM5MjMuanBnXCIsXG4gICAgICBcImRlc2NcIjogXCJKZXRzIEFyY2FkaWEgQmFuZGVhdVwiLFxuICAgICAgXCJzaXplXCI6IFwiMTBcIixcbiAgICAgIFwiY29sb3VyXCI6IFwiQmx1ZVwiLFxuICAgICAgXCJwcmljZVwiOiBcIjk5Ljk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwic2t1XCI6IFwiMDAwMDAyXCIsXG4gICAgICBcInRpdGxlXCI6IFwiU3BlZWRvIE1lbnMgQXZhbG9uIEhlcml0YWdlIFdhdGVyc2hvcnRcIixcbiAgICAgIFwiaW1hZ2VcIjogXCIvc2tpbi9mcm9udGVuZC9iYXNlL2RlZmF1bHQvaW1hZ2VzL2FsaWdlbnQvY2FydGNoZWNraXRvdXQvcHJvZHVjdHMvc3AxNTM5YTYyMjAuOTYwX21lbnNfYXZhbG9uX2hlcml0YWdlX3dhdGVyc2hvcnRfMy4xNDg0Mzg0MzAyLmpwZ1wiLFxuICAgICAgXCJkZXNjXCI6IFwiU3BlZWRvIE1lbnMgQXZhbG9uIEhlcml0YWdlIFdhdGVyc2hvcnRcIixcbiAgICAgIFwic2l6ZVwiOiBcIjE0XCIsXG4gICAgICBcImNvbG91clwiOiBcIk9yYW5nZVwiLFxuICAgICAgXCJwcmljZVwiOiBcIjc5Ljk5XCJcbiAgICB9XG4gIF1cbn07XG4iLCIvKipcbiAqIEFsaWdlbnQgQ2hlY2tJdE91dFxuICpcbiAqIEBjYXRlZ29yeSAgIEFsaWdlbnRcbiAqIEBwYWNrYWdlICAgIGFsaWdlbnQtY2hlY2tpdG91dFxuICogQGNvcHlyaWdodCAgQ29weXJpZ2h0IChjKSAyMDE3IEFsaWdlbnRcbiAqIEBhdXRob3IgICAgIENocmlzIERvcndhcmQgPGNocmlzLmRvcndhcmRAYWxpZ2VudC5jb20uYXU+XG4gKlxuICogc3JjL2pzL21hb2RlbHMvY291cG9ucy5qc1xuICogRXhhbXBsZSBwcm9tb2NvZGVzIE1vZGVsXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBcInByb21vY29kZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2RlXCI6IFwiMjVPRkZcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJwZXJjZW50XCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogXCIyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvZGVcIjogXCIxMDBPRkZcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJwZXJjZW50XCIsXG4gICAgICAgICAgXCJhbW91bnRcIjogXCIxMDBcIlxuICAgICAgICB9XG4gICAgXVxufTtcbiIsIi8qKlxuICogQWxpZ2VudCBDaGVja0l0T3V0XG4gKlxuICogQGNhdGVnb3J5ICAgQWxpZ2VudFxuICogQHBhY2thZ2UgICAgYWxpZ2VudC1jaGVja2l0b3V0XG4gKiBAY29weXJpZ2h0ICBDb3B5cmlnaHQgKGMpIDIwMTcgQWxpZ2VudFxuICogQGF1dGhvciAgICAgQ2hyaXMgRG9yd2FyZCA8Y2hyaXMuZG9yd2FyZEBhbGlnZW50LmNvbS5hdT5cbiAqXG4gKiBzcmMvanMvTVZDL3ZpZXdzL1ZpZXdEZWxpdmVyeVBheW1lbnQuanNcbiAqIERlbGl2ZXJ5IFNjcmVlblxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3RGVsaXZlcnlQYXltZW50IHtcblxuICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcbiAgfVxuXG4gIHNob3coKXtcbiAgICB0aGlzLm1haW4ubS5jYWxjdWxhdGVPcmRlclRvdGFsICgpO1xuICAgIGpRdWVyeSgnI21pZGRsZScpLmh0bWwodGhpcy5tYWluLnYudmlld3MuZGVsaXZlcnlwYXltZW50LmdldERlbGl2ZXJ5Q29udGVudCAoKSk7XG4gICAgalF1ZXJ5KCcjZGVsaXZlcnktZGl2JykuaGlkZSgpO1xuICAgIGpRdWVyeSgnI2RlbGl2ZXJ5LWRpdicpLmZhZGVJbih0aGlzLm1haW4ubS5kYXRhLmNvbmZpZy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgalF1ZXJ5KCcjcmlnaHQnKS5odG1sKHRoaXMubWFpbi52LnZpZXdzLmRlbGl2ZXJ5cGF5bWVudC5nZXRQYXltZW50Q29udGVudCAoKSk7XG4gICAgalF1ZXJ5KCcjcGF5bWVudC1kaXYnKS5oaWRlKCk7XG4gICAgalF1ZXJ5KCcjcGF5bWVudC1kaXYnKS5mYWRlSW4odGhpcy5tYWluLm0uZGF0YS5jb25maWcuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgIHRoaXMubWFpbi52LnNob3dUb3RhbHMgKCk7XG4gICAgdGhpcy5tYWluLmMuY29udHJvbGxlcnMuZGVsaXZlcnlwYXltZW50LnNldFVJKCk7XG4gIH1cblxuICBzaG93QmlsbGluZ0FkZHJlc3MoKXtcbiAgICBqUXVlcnkoJyNiaWxsaW5nLWFkZHJlc3MtaGlkZGVuJykuZmFkZUluKHRoaXMubWFpbi5tLmRhdGEuY29uZmlnLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBqUXVlcnkoJyNiaWxsaW5nLWZpcnN0bmFtZScpLmZvY3VzKCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGhpZGVCaWxsaW5nQWRkcmVzcygpe1xuICAgIGpRdWVyeSgnI2JpbGxpbmctYWRkcmVzcy1oaWRkZW4nKS5oaWRlKCk7XG4gIH1cblxuICBzaG93QXV0aG9yaXR5VG9MZWF2ZSgpe1xuICAgIGpRdWVyeSgnI2lucHV0LWxlYXZlLWluZm8nKS5mYWRlSW4odGhpcy5tYWluLm0uZGF0YS5jb25maWcuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGpRdWVyeSgnI2lucHV0LWxlYXZlLWluZm8nKS5mb2N1cygpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBzaG93TWFudWFsQmlsbGluZygpe1xuICAgIGpRdWVyeSgnI2JpbGxpbmctbWFudWFsLWhpZGRlbicpLmZhZGVJbih0aGlzLm1haW4ubS5kYXRhLmNvbmZpZy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgalF1ZXJ5KCcjYmlsbGluZy1zdHJlZXQtYWRkcmVzcycpLmZvY3VzKCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGhpZGVNYW51YWxCaWxsaW5nKCl7XG4gICAgalF1ZXJ5KCcjYmlsbGluZy1tYW51YWwtaGlkZGVuJykuaGlkZSgpO1xuICB9XG5cbiAgc2hvd01hbnVhbERlbGl2ZXJ5KCl7XG4gICAgalF1ZXJ5KCcjZGVsaXZlcnktbWFudWFsLWhpZGRlbicpLmZhZGVJbih0aGlzLm1haW4ubS5kYXRhLmNvbmZpZy5hbmltYXRpb25EdXJhdGlvbik7XG4gIH1cblxuICBoaWRlQXV0aG9yaXR5VG9MZWF2ZSgpe1xuICAgIGpRdWVyeSgnI2lucHV0LWxlYXZlLWluZm8nKS5mYWRlT3V0KHRoaXMubWFpbi5tLmRhdGEuY29uZmlnLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgfVxuXG4gIGhpZGUoKXtcbiAgICBqUXVlcnkoJyNkZWxpdmVyeS1kaXYnKS5mYWRlT3V0KHRoaXMubWFpbi5tLmRhdGEuY29uZmlnLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICBqUXVlcnkoJyNwYXltZW50LWRpdicpLmZhZGVPdXQodGhpcy5tYWluLm0uZGF0YS5jb25maWcuYW5pbWF0aW9uRHVyYXRpb24pO1xuICB9XG5cbiAgZ2V0RGVsaXZlcnlDb250ZW50ICgpe1xuICAgIGxldCBodG1sID0gYFxuICAgICAgICAgIDxkaXYgaWQ9XCJkZWxpdmVyeS1kaXZcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInNjcmVlbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2NyZWVuLWhlYWRlclwiPkRlbGl2ZXJ5PC9zcGFuPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnN0cnVjdGlvbnNcIj48L2Rpdj5cbiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiIGlkPVwiZmlyc3RuYW1lLW1lc3NhZ2VcIiA+Rmlyc3QgTmFtZTwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJkZWxpdmVyeS1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCIke3RoaXMubWFpbi5tLmRhdGEub3JkZXIuZmlyc3ROYW1lIHx8ICcnfVwiXG4gICAgICAgICAgICAvPlxuICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCIgaWQ9XCJsYXN0bmFtZS1tZXNzYWdlXCIgPkxhc3QgTmFtZTwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICBjbGFzcz1cImRlbGl2ZXJ5LWlucHV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5tYWluLm0uZGF0YS5vcmRlci5sYXN0TmFtZSB8fCAnJ31cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbGFiZWxcIiBpZD1cImRlbGl2ZXJ5LWFkZHJlc3MtbWVzc2FnZVwiID5EZWxpdmVyeSBBZGRyZXNzPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJkZWxpdmVyeS1hZGRyZXNzXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJkZWxpdmVyeS1pbnB1dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCIke3RoaXMubWFpbi5tLmRhdGEub3JkZXIuZGVsaXZlcnlBZGRyZXNzIHx8ICcnfVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxpdmVyeS1hZGRyZXNzLW5vdC1mb3VuZFwiPlxuICAgICAgICAgICAgICAgIFlvdXIgYWRkcmVzcyBub3QgdGhlcmU/IDxhIGhyZWY9XCIjXCIgaWQ9XCJhZGRyZXNzLW5vdC1mb3VuZFwiIGNsYXNzPVwiYmxhY2stbGlua1wiPkNsaWNrIGhlcmU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBpZD1cImRlbGl2ZXJ5LW1hbnVhbC1oaWRkZW5cIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiIGlkPVwiaW5wdXQtZGVsaXZlcnktc3RyZWV0LWFkZHJlc3MtbWVzc2FnZVwiID5TdHJlZXQgQWRkcmVzczwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImRlbGl2ZXJ5LXN0cmVldC1hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRlbGl2ZXJ5LWlucHV0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiIGlkPVwiaW5wdXQtZGVsaXZlcnktY2l0eS1tZXNzYWdlXCIgPkNpdHk8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJkZWxpdmVyeS1jaXR5XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRlbGl2ZXJ5LWlucHV0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiIGlkPVwiaW5wdXQtZGVsaXZlcnktc3RhdGUtbWVzc2FnZVwiID5TdGF0ZTwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImRlbGl2ZXJ5LXN0YXRlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRlbGl2ZXJ5LWlucHV0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiIGlkPVwiaW5wdXQtZGVsaXZlcnktc3RhdGUtbWVzc2FnZVwiID5Qb3N0Y29kZTwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImRlbGl2ZXJ5LXBvc3Rjb2RlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRlbGl2ZXJ5LWlucHV0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JpdHlcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBdXRob3JpdHkgdG8gbGVhdmVcIiBcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgaWQ9XCJhdXRob3JpdHktdG8tbGVhdmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYXV0aG9yaXR5LXRvLWxlYXZlXCI+QXV0aG9yaXR5IHRvIGxlYXZlPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaW5wdXQtYXV0aG9yaXR5XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtbGVhdmUtaW5mb1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC10ZXh0LWZpZWxkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCIgaWQ9XCJidXNpbmVzc25hbWUtbWVzc2FnZVwiID5CdXNpbmVzcyBOYW1lIC0gPGVtPk9wdGlvbmFsPC9lbT48L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cImJ1c2luZXNzbmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtdGV4dC1maWVsZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCIke3RoaXMubWFpbi5tLmRhdGEub3JkZXIuYnVzaW5lc3NOYW1lIHx8ICcnfVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiIGlkPVwicGhvbmUtbWVzc2FnZVwiID5QaG9uZSBOdW1iZXI8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cInBob25lbnVtYmVyXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC10ZXh0LWZpZWxkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5tYWluLm0uZGF0YS5vcmRlci5waG9uZSB8fCAnJ31cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJpbGxpbmctYWRkcmVzc1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkJpbGwgdG8gYSBkaWZmZXJlbnQgYWRkcmVzc1wiIFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICBpZD1cImJpbGwtdG8tZGlmZmVyZW50XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJpbGwtdG8tZGlmZmVyZW50XCI+QmlsbCB0byBhIGRpZmZlcmVudCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYmlsbGluZy1hZGRyZXNzLWhpZGRlblwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCIgaWQ9XCJiaWxsaW5nLWZpcnN0bmFtZS1tZXNzYWdlXCIgPkZpcnN0IE5hbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwiYmlsbGluZy1maXJzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZWxpdmVyeS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCIgaWQ9XCJiaWxsaW5nLWxhc3RuYW1lLW1lc3NhZ2VcIiA+TGFzdCBOYW1lPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cImJpbGxpbmctbGFzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZWxpdmVyeS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCIgaWQ9XCJiaWxsaW5nLWFkZHJlc3MtbWVzc2FnZVwiID5CaWxsaW5nIEFkZHJlc3M8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwiYmlsbGluZy1hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVsaXZlcnktaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxpdmVyeS1hZGRyZXNzLW5vdC1mb3VuZFwiPlxuICAgICAgICAgICAgICAgIFlvdXIgYWRkcmVzcyBub3QgdGhlcmU/IDxhIGhyZWY9XCIjXCIgaWQ9XCJiaWxsaW5nLWFkZHJlc3Mtbm90LWZvdW5kXCIgY2xhc3M9XCJibGFjay1saW5rXCI+Q2xpY2sgaGVyZTwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiYmlsbGluZy1tYW51YWwtaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbGFiZWxcIiBpZD1cImJpbGxpbmctc3RyZWV0LWFkZHJlc3MtbWVzc2FnZVwiID5TdHJlZXQgQWRkcmVzczwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJiaWxsaW5nLXN0cmVldC1hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmlsbGluZy1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiIGlkPVwiYmlsbGluZy1jaXR5LW1lc3NhZ2VcIiA+Q2l0eTwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJiaWxsaW5nLWNpdHlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZWxpdmVyeS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiIGlkPVwiYmlsbGluZy1zdGF0ZS1tZXNzYWdlXCIgPlN0YXRlPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cImJpbGxpbmctc3RhdGVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZWxpdmVyeS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiIGlkPVwiYmlsbGluZy1zdGF0ZS1tZXNzYWdlXCIgPlBvc3Rjb2RlPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cImJpbGxpbmctcG9zdGNvZGVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZWxpdmVyeS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGA7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRQYXltZW50Q29udGVudCAoKXtcbiAgICBjb25zdCBodG1sID0gYFxuICAgICAgPGRpdiBpZD1cInBheW1lbnQtZGl2XCI+XG4gICAgICBcbiAgICAgICAgPGgzIGNsYXNzPVwic2NyZWVuLXRpdGxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzY3JlZW4taGVhZGVyXCI+UGF5bWVudDwvc3Bhbj5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnN0cnVjdGlvbnNcIj5cbiAgICAgICAgICBIb3cgd291bGQgeW91IGxpa2UgdG8gcGF5P1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXltZW50LW9wdGlvbnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInBheW1lbnQtb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY2FyZFwiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQYXkgd2l0aCBjcmVkaXQgY2FyZFwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc2tpbi9mcm9udGVuZC9iYXNlL2RlZmF1bHQvaW1hZ2VzL2FsaWdlbnQvY2FydGNoZWNraXRvdXQvcGF5bWVudC9jYXJkLnBuZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBheXBhbFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInBheW1lbnQtb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjU3XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwicGF5cGFsXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlBheSB3aXRoIFBheVBhbFwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc2tpbi9mcm9udGVuZC9iYXNlL2RlZmF1bHQvaW1hZ2VzL2FsaWdlbnQvY2FydGNoZWNraXRvdXQvcGF5bWVudC9wYXlwYWwucG5nXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWZ0ZXJwYXlcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwYXltZW50LW9wdGlvblwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1N1wiXG4gICAgICAgICAgICAgICAgICBpZD1cImFmdGVycGF5XCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlBheSB3aXRoIEFmdGVycGF5XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9za2luL2Zyb250ZW5kL2Jhc2UvZGVmYXVsdC9pbWFnZXMvYWxpZ2VudC9jYXJ0Y2hlY2tpdG91dC9wYXltZW50L2FmdGVycGF5LnBuZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBheW1lbnQtaW5mb1wiIGlkPVwiY2FyZC1kaXZcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY2FyZG51bWJlci1tZXNzYWdlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+Q2FyZCBOdW1iZXI8L2Rpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdGl0bGU9XCJDYXJkIE51bWJlclwiXG4gICAgICAgICAgICAgIGlkPVwiY2FyZG51bWJlclwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtdGV4dC1maWVsZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBpcnktY3ZjXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBpcnlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJleHBpcnktbWVzc2FnZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkV4cGlyeSBEYXRlIChNTS9ZWSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXhwaXJ5IERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhwaXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXRleHQtZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3ZjXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY3ZjLW1lc3NhZ2VcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5DVkM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ1ZDXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImN2Y1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC10ZXh0LWZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5bWVudC1pbmZvXCIgaWQ9XCJwYXlwYWwtZGl2XCI+XG4gICAgICAgICAgICA8cD5Zb3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvIFBheVBhbCBjb21wbGV0ZSB5b3VyIG9yZGVyLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5bWVudC1pbmZvXCIgaWQ9XCJhZnRlcnBheS1kaXZcIj5cbiAgICAgICAgICA8cD48c3Ryb25nPjQgZXF1YWwgcGF5bWVudHMgb2YgJCR7TWF0aC5yb3VuZCgodGhpcy5tYWluLm0uZGF0YS5vcmRlci5ncmFuZHRvdGFsLzQpICogMTAwKSAvIDEwMH08L3N0cm9uZz48L3A+XG4gICAgICAgICAgPHA+UGF5IGZvciB5b3VyIHB1cmNoYXNlIG92ZXIgZm91ciBlcXVhbCBmb3J0bmlnaHRseSBpbnN0YWxsbWVudHMgd2l0aCBubyBpbnRlcmVzdC5cbiAgICAgICAgICAgICAgQWZ0ZXJwYXkgbWFrZXMgaXQgc2ltcGxlIHRvIHBheSB3aGVuIGl0IHN1aXRzIHlvdSBiZXN0LiBBdmFpbGFibGUgdG8gY3VzdG9tZXJzIGluXG4gICAgICAgICAgICAgIEF1c3RyYWxpYSB3aXRoIGEgZGViaXQgb3IgY3JlZGl0IGNhcmQuPC9wPlxuICAgICAgICAgIDxwPldoZW4geW91IGNsaWNrICc8c3Ryb25nPlBMQUNFIFlPVVIgT1JERVI8L3N0cm9uZz4nIHlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gQWZ0ZXJwYXlcbiAgICAgICAgICAgICAgdG8gY29tcGxldGUgeW91ciBvcmRlci48L3A+XG4gICAgICAgICAgPHA+PGFcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFmdGVycGF5LWxpbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5hZnRlcnBheS5jb20uYXVcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPkZpbmQgb3V0IG1vcmU8L2E+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXltZW50LXNlcGFyYXRvclwiIC8+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGlkPVwicHJvbW8tbWVzc2FnZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlByb21vIENvZGU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb21vXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXByb21vXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcm9tbyBDb2RlXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwicHJvbW9jb2RlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtdGV4dC1maWVsZCB1cHBlcmNhc2UtZmllbGRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtcHJvbW9cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cImFwcGx5LXByb21vXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJBcHBseVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBpZD1cImdpZnQtbWVzc2FnZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkdpZnQgQ2FyZDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdpZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ2lmdFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHRpdGxlPVwiR2lmdCBDYXJkXCJcbiAgICAgICAgICAgICAgaWQ9XCJnaWZ0Y2FyZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtdGV4dC1maWVsZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC1naWZ0XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJyZWRlZW0tZ2lmdGNhcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJSZWRlZW1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV3c2xldHRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJuZXdzbGV0dGVyLXNpZ251cFwiXG4gICAgICAgICAgICB0aXRsZT1cIlNpZ24gdXAgdG8gbmV3c2xldHRlclwiXG4gICAgICAgICAgICBjaGVja2VkPVwiY2hlY2tlZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3c2xldHRlci1zaWdudXBcIj5TaWduIHVwIHRvIFN1bW1lciBMb3ZlcnMgQ2x1YiB0byBiZSBpbiB0aGUga25vdyE8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmcmVlLXNoaXBwaW5nXCIgaWQ9XCJzaGlwcGluZy1tZXNzYWdlXCI+XG4gICAgICAgICAgWW91IGFyZSA8c3BhbiBpZD1cImRvbGxhcnMtc2hvcnRcIiBjbGFzcz1cImJvbGRcIj4keHg8L3NwYW4+IGF3YXkgZnJvbSA8c3BhbiBjbGFzcz1cImJvbGRcIj5GUkVFIFNISVBQSU5HPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VidG90YWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1jb2xcIj5zdWJ0b3RhbDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLWNvbCBmbGV4LXJpZ2h0XCIgaWQ9XCJzdWJ0b3RhbFwiPiQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvbW9jb2Rlc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLWNvbFwiPnByb21vIGNvZGVzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtY29sIGZsZXgtcmlnaHRcIiBpZD1cInByb21vY29kZXNcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2lmdGNhcmRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtY29sXCI+Z2lmdCBjYXJkczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLWNvbCBmbGV4LXJpZ2h0XCIgaWQ9XCJnaWZ0Y2FyZHNcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzY291bnRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtY29sXCI+ZGlzY291bnRzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtY29sIGZsZXgtcmlnaHRcIiBpZD1cImRpc2NvdW50c1wiPiQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcHBpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1jb2xcIj5zaGlwcGluZzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLWNvbCBmbGV4LXJpZ2h0XCIgaWQ9XCJzaGlwcGluZ1wiPiQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JhbmR0b3RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLWNvbFwiPkdyYW5kIFRvdGFsPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtY29sIGZsZXgtcmlnaHRcIiBpZD1cImdyYW5kdG90YWxcIj4kPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJwbGFjZS1vcmRlclwiXG4gICAgICAgICAgY2xhc3M9XCJidG4tcGxhY2Utb3JkZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHZhbHVlPVwiUExBQ0UgWU9VUiBPUkRFUlwiXG4gICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG59IiwiLyoqXG4gKiBBbGlnZW50IENoZWNrSXRPdXRcbiAqXG4gKiBAY2F0ZWdvcnkgICBBbGlnZW50XG4gKiBAcGFja2FnZSAgICBhbGlnZW50LWNoZWNraXRvdXRcbiAqIEBjb3B5cmlnaHQgIENvcHlyaWdodCAoYykgMjAxNyBBbGlnZW50XG4gKiBAYXV0aG9yICAgICBDaHJpcyBEb3J3YXJkIDxjaHJpcy5kb3J3YXJkQGFsaWdlbnQuY29tLmF1PlxuICpcbiAqIHNyYy9qcy9NVkMvdmlld3MvVmlld0VtYWlsLmpzXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdFbWFpbCB7XG5cbiAgY29uc3RydWN0b3IobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gIH1cblxuICBzaG93KCl7XG4gICAgalF1ZXJ5KCcjbWlkZGxlJykuaHRtbCh0aGlzLm1haW4udi52aWV3cy5lbWFpbC5nZXRDb250ZW50ICgpKTtcbiAgICBqUXVlcnkoJyNlbWFpbC1kaXYnKS5oaWRlKCk7XG4gICAgalF1ZXJ5KCcjZW1haWwtZGl2JykuZmFkZUluKHRoaXMubWFpbi5tLmRhdGEuY29uZmlnLmFuaW1hdGlvbkR1cmF0aW9uLCB0aGlzLm1haW4uYy5jb250cm9sbGVycy5lbWFpbC5zZXRVSS5iaW5kKHRoaXMpKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBqUXVlcnkoJyNlbWFpbC1hZGRyZXNzJykuZm9jdXMoKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgc2hvd0Vycm9yIChtZXNzYWdlKXtcbiAgICB0aGlzLm1haW4udi5zaGFrZUZpZWxkKGpRdWVyeSgnI2VtYWlsLWFkZHJlc3MnKSk7XG4gICAgalF1ZXJ5KCcjZW1haWwtbWVzc2FnZScpLmh0bWwoYCR7bWVzc2FnZX1gKTtcbiAgfVxuXG4gIGhpZGUoKXtcbiAgICBqUXVlcnkoJyNlbWFpbC1kaXYnKS5mYWRlT3V0KHRoaXMubWFpbi5tLmRhdGEuY29uZmlnLmFuaW1hdGlvbkR1cmF0aW9uLCB0aGlzLm1haW4ubS5nZXRDdXN0b21lckJ5RW1haWwuYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRDb250ZW50ICgpe1xuICAgIGxldCBodG1sID0gYFxuICAgICAgPGRpdiBpZD1cImVtYWlsLWRpdlwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJzY3JlZW4tdGl0bGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2NyZWVuLWhlYWRlclwiPkZpcnN0IHRoaW5ncyBmaXJzdDwvc3Bhbj5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluc3RydWN0aW9uc1wiPlxuICAgICAgICAgICAgPHA+UGxlYXNlIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcyB0byBjb250aW51ZVxuICAgICAgICAgICAgdG8gZGVsaXZlcnkgJmFtcDsgcGF5bWVudC48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZW1haWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCIgaWQ9XCJlbWFpbC1tZXNzYWdlXCIgPkVtYWlsIEFkZHJlc3M8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cImVtYWlsLWFkZHJlc3NcIlxuICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXRleHQtZmllbGRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiJHt0aGlzLm1haW4ubS5kYXRhLmNvbmZpZy5kZWZhdWx0RW1haWx9XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1jb250aW51ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICB2YWx1ZT1cIkNPTlRJTlVFXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG59XG4iLCIvKipcbiAqIEFsaWdlbnQgQ2hlY2tJdE91dFxuICpcbiAqIEBjYXRlZ29yeSAgIEFsaWdlbnRcbiAqIEBwYWNrYWdlICAgIGFsaWdlbnQtY2hlY2tpdG91dFxuICogQGNvcHlyaWdodCAgQ29weXJpZ2h0IChjKSAyMDE3IEFsaWdlbnRcbiAqIEBhdXRob3IgICAgIENocmlzIERvcndhcmQgPGNocmlzLmRvcndhcmRAYWxpZ2VudC5jb20uYXU+XG4gKlxuICogc3JjL2pzL01WQy92aWV3cy9WaWV3TG9hZGVyLmpzXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdMb2FkZXIge1xuXG4gIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICB9XG5cbiAgc2hvdyhtZXNzYWdlKSB7XG4gICAgalF1ZXJ5KCcjbWlkZGxlJykuaHRtbCh0aGlzLmdldENvbnRlbnQgKG1lc3NhZ2UpKTtcbiAgICBqUXVlcnkoJyNsb2FkZXItZGl2JykuaGlkZSgpO1xuICAgIGpRdWVyeSgnI2xvYWRlci1kaXYnKS5mYWRlSW4odGhpcy5tYWluLm0uZGF0YS5jb25maWcuYW5pbWF0aW9uRHVyYXRpb24pO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBqUXVlcnkoJyNsb2FkZXItZGl2JykuZmFkZU91dCh0aGlzLm1haW4ubS5kYXRhLmNvbmZpZy5hbmltYXRpb25EdXJhdGlvbiwgdGhpcy5tYWluLnYudmlld3MucGFzc3dvcmQuc2hvdy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldENvbnRlbnQobWVzc2FnZSl7XG4gICAgbGV0IGh0bWwgPSBgXG4gICAgICA8ZGl2IGlkPVwibG9hZGVyLWRpdlwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBhbHQ9XCIke21lc3NhZ2V9XCJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc2tpbi9mcm9udGVuZC9iYXNlL2RlZmF1bHQvaW1hZ2VzL2FsaWdlbnQvY2FydGNoZWNraXRvdXQvYWpheC1sb2FkZXIuZ2lmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDske21lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBBbGlnZW50IENoZWNrSXRPdXRcbiAqXG4gKiBAY2F0ZWdvcnkgICBBbGlnZW50XG4gKiBAcGFja2FnZSAgICBhbGlnZW50LWNoZWNraXRvdXRcbiAqIEBjb3B5cmlnaHQgIENvcHlyaWdodCAoYykgMjAxNyBBbGlnZW50XG4gKiBAYXV0aG9yICAgICBDaHJpcyBEb3J3YXJkIDxjaHJpcy5kb3J3YXJkQGFsaWdlbnQuY29tLmF1PlxuICpcbiAqIHNyYy9qcy9NVkMvdmlld3MvVmlld1Bhc3N3b3JkLmpzXG4gKlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdQYXNzd29yZCB7XG5cbiAgY29uc3RydWN0b3IobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gIH1cblxuICBzaG93KCl7XG4gICAgalF1ZXJ5KCcjbWlkZGxlJykuaHRtbCh0aGlzLm1haW4udi52aWV3cy5wYXNzd29yZC5nZXRDb250ZW50ICgpKTtcbiAgICBqUXVlcnkoJyNwYXNzd29yZC1kaXYnKS5oaWRlKCk7XG4gICAgalF1ZXJ5KCcjcGFzc3dvcmQtZGl2JykuZmFkZUluKHRoaXMubWFpbi5tLmRhdGEuY29uZmlnLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICB0aGlzLm1haW4uYy5jb250cm9sbGVycy5wYXNzd29yZC5zZXRVSSgpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGpRdWVyeSgnI3Bhc3N3b3JkJykuZm9jdXMoKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgc2hvd0Vycm9yIChtZXNzYWdlKXtcbiAgICB0aGlzLm1haW4udi5zaGFrZUZpZWxkIChqUXVlcnkoJyNwYXNzd29yZCcpKTtcbiAgICBqUXVlcnkoJyNwYXNzd29yZC1tZXNzYWdlJykuaHRtbChgJHttZXNzYWdlfWApO1xuICB9XG5cbiAgaGlkZSgpe1xuICAgIGpRdWVyeSgnI3Bhc3N3b3JkLWRpdicpLmZhZGVPdXQodGhpcy5tYWluLm0uZGF0YS5jb25maWcuYW5pbWF0aW9uRHVyYXRpb24sIHRoaXMubWFpbi52LnZpZXdzLmRlbGl2ZXJ5cGF5bWVudC5zaG93LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0Q29udGVudCAoKXtcbiAgICBsZXQgY3VzdG9tZXJUeXBlID0gJ25vbmUnO1xuICAgIGNvbnN0IGN1c3RvbWVyT2JqID0gIHRoaXMubWFpbi5tLmRhdGEuY3VzdG9tZXI7XG4gICAgaWYgKCFjdXN0b21lck9iail7XG4gICAgICB0aGlzLm1haW4ubS51cGRhdGVPcmRlciAoJ2N1c3RvbWVyVHlwZScsICduZXcnKTtcbiAgICAgIGN1c3RvbWVyVHlwZSA9ICduZXcnO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5tYWluLm0udXBkYXRlT3JkZXIgKCdjdXN0b21lclR5cGUnLCAncmV0dXJuaW5nJyk7XG4gICAgICBjdXN0b21lclR5cGUgPSAncmV0dXJuaW5nJztcbiAgICB9XG4gICAgbGV0IGh0bWwgPSBgYDtcbiAgICBpZiAoY3VzdG9tZXJUeXBlID09PSAncmV0dXJuaW5nJyl7XG4gICAgICBodG1sICs9IGBcbiAgICAgICAgICA8ZGl2IGlkPVwicGFzc3dvcmQtZGl2XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJzY3JlZW4tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNjcmVlbi1oZWFkZXJcIj5XZWxjb21lIGJhY2shPC9zcGFuPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluc3RydWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8cD5QbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZCB0byBjb250aW51ZSB0byBkZWxpdmVyeSAmIHBheW1lbnQ8L3A+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgICB9IGVsc2UgaWYgKGN1c3RvbWVyVHlwZSA9PT0gJ25ldycpIHtcblxuICAgICAgaHRtbCArPSBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFzc3dvcmQtZGl2XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJzY3JlZW4tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNjcmVlbi1oZWFkZXJcIj5XZWxjb21lIEFib2FyZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5zdHJ1Y3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxwPlBsZWFzZSBjcmVhdGUgYSBwYXNzd29yZCB0byBjb250aW51ZSB0byBkZWxpdmVyeSAmIHBheW1lbnQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgIH1cblxuICAgIGh0bWwgKz0gYFxuICAgICAgICAgICAgPGRpdiBpZD1cInBhc3N3b3JkLW1lc3NhZ2VcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5QYXNzd29yZDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXRleHQtZmllbGRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7dGhpcy5tYWluLm0uZGF0YS5jb25maWcuZGVmYXVsdFBhc3N3b3JkfVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZC1jb250aW51ZVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNPTlRJTlVFXCIgLz5cbiAgICAgICAgICBgO1xuXG4gICAgaHRtbCArPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1jaGVja291dC1ndWVzdFwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJndWVzdC1jaGVja291dFwiXG4gICAgICAgICAgICAgID5DaGVja291dCBhcyBndWVzdDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGA7XG5cbiAgICBodG1sICs9IGA8L2Rpdj5gO1xuICAgIHJldHVybiBodG1sO1xuICB9XG59XG4iLCIvKipcbiAqIEFsaWdlbnQgQ2hlY2tJdE91dFxuICpcbiAqIEBjYXRlZ29yeSAgIEFsaWdlbnRcbiAqIEBwYWNrYWdlICAgIGFsaWdlbnQtY2hlY2tpdG91dFxuICogQGNvcHlyaWdodCAgQ29weXJpZ2h0IChjKSAyMDE3IEFsaWdlbnRcbiAqIEBhdXRob3IgICAgIENocmlzIERvcndhcmQgPGNocmlzLmRvcndhcmRAYWxpZ2VudC5jb20uYXU+XG4gKlxuICogc3JjL2pzL01WQy92aWV3cy9WaWV3UGxhY2VPcmRlci5qc1xuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3UGxhY2VPcmRlciB7XG5cbiAgY29uc3RydWN0b3IobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gIH1cblxuICBzaG93KCkge1xuICAgIGpRdWVyeSgnI21pZGRsZScpLmh0bWwoJycpO1xuICAgIGpRdWVyeSgnI29yZGVyLWRpdicpLmhpZGUoKTtcbiAgICBqUXVlcnkoJyNvcmRlci1kaXYnKS5mYWRlSW4odGhpcy5tYWluLm0uZGF0YS5jb25maWcuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgIGpRdWVyeSgnLmRlYnVnJykuc2hvdygpO1xuICB9XG5cblxufVxuIiwiLyoqXG4gKiBBbGlnZW50IENoZWNrSXRPdXRcbiAqXG4gKiBAY2F0ZWdvcnkgICBBbGlnZW50XG4gKiBAcGFja2FnZSAgICBhbGlnZW50LWNoZWNraXRvdXRcbiAqIEBjb3B5cmlnaHQgIENvcHlyaWdodCAoYykgMjAxNyBBbGlnZW50XG4gKiBAYXV0aG9yICAgICBDaHJpcyBEb3J3YXJkIDxjaHJpcy5kb3J3YXJkQGFsaWdlbnQuY29tLmF1PlxuICpcbiAqIHNyYy9qcy9NVkMvdmlld3MvVmlld1N1bW1hcnkuanNcbiAqIE9yZGVyIFN1bW1hcnlcbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1N1bW1hcnkge1xuXG4gIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICB9XG5cbiAgc2hvdygpe1xuICAgIGpRdWVyeSgnI2xlZnQnKS5odG1sKHRoaXMuZ2V0Q29udGVudCAoKSk7XG4gICAgalF1ZXJ5KCcjc3VtbWFyeS1kaXYnKS5oaWRlKCk7XG4gICAgalF1ZXJ5KCcjc3VtbWFyeS1kaXYnKS5mYWRlSW4odGhpcy5tYWluLm0uZGF0YS5jb25maWcuYW5pbWF0aW9uRHVyYXRpb24pO1xuICB9XG5cbiAgaGlkZSgpe1xuICAgIGpRdWVyeSgnI3N1bW1hcnktZGl2JykuZmFkZU91dCh0aGlzLm1haW4ubS5kYXRhLmNvbmZpZy5hbmltYXRpb25EdXJhdGlvbik7XG4gIH1cblxuICBnZXRDb250ZW50ICgpe1xuICAgIGNvbnN0IHN1bW1hcnlBcnIgPSB0aGlzLm1haW4ubS5kYXRhLm9yZGVyU3VtbWFyeTtcbiAgICBsZXQgaHRtbCA9IGBcbiAgICAgIDxkaXYgaWQ9XCJzdW1tYXJ5LWRpdlwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJzY3JlZW4tdGl0bGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2NyZWVuLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgT3JkZXIgU3VtbWFyeVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS10b3RhbFwiPiR7c3VtbWFyeUFyci5sZW5ndGh9IEl0ZW1zPC9kaXY+XG4gICAgICBgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPHN1bW1hcnlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkaXYgPSBgPGRpdiBpZD1cIlwiIGNsYXNzPVwic3VtbWFyeS1pdGVtXCI+YDtcbiAgICAgIGRpdiArPSBgPGRpdiBjbGFzcz1cInN1bW1hcnktaXRlbS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIiR7c3VtbWFyeUFycltpXS5pbWFnZX1cIlxuICAgICAgICAgICAgICAgIGFsdD1cIiR7c3VtbWFyeUFycltpXS5kZXNjfVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgIGRpdiArPSBgPGRpdiBjbGFzcz1cInN1bW1hcnktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS10aXRsZVwiPiR7c3VtbWFyeUFycltpXS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXByaWNlXCI+JCR7c3VtbWFyeUFycltpXS5wcmljZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXNpemVcIj5TaXplICR7c3VtbWFyeUFycltpXS5zaXplfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29sb3VyXCI+Q29sb3VyICR7c3VtbWFyeUFycltpXS5jb2xvdXJ9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICBkaXYgKz0gYDwvZGl2PmA7XG4gICAgICBodG1sICs9IGRpdjtcbiAgICB9XG4gICAgaHRtbCArPSBgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiL2NoZWNrb3V0L2NhcnQvXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cImJhY2tcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxhY2stbGluayBmb250LXNtYWxsXCJcbiAgICAgICAgICAgICAgICA+Jmx0OyBCYWNrIHRvIFNob3BwaW5nIEJhZzwvYT5gO1xuICAgIGh0bWwgKz0gYDwvZGl2PmA7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cbiIsIi8qKlxuICogQWxpZ2VudCBDaGVja0l0T3V0XG4gKlxuICogQGNhdGVnb3J5ICAgQWxpZ2VudFxuICogQHBhY2thZ2UgICAgYWxpZ2VudC1jaGVja2l0b3V0XG4gKiBAY29weXJpZ2h0ICBDb3B5cmlnaHQgKGMpIDIwMTcgQWxpZ2VudFxuICogQGF1dGhvciAgICAgQ2hyaXMgRG9yd2FyZCA8Y2hyaXMuZG9yd2FyZEBhbGlnZW50LmNvbS5hdT5cbiAqXG4gKiBzcmMvanMvbWFpbi5qc1xuICogTWFpbiBKYXZhU2NyaXB0IGVudHJ5XG4gKi9cblxuaW1wb3J0IE1vZGVsIGZyb20gJy4vTVZDL01vZGVsJztcbmltcG9ydCBWaWV3IGZyb20gJy4vTVZDL1ZpZXcnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9NVkMvQ29udHJvbGxlcic7XG5pbXBvcnQgcGFja2FnZUpTT04gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCBzaGFrZSBmcm9tICcuL3V0aWxzL2pxdWVyeS51aS5zaGFrZSc7XG4vLyBpbXBvcnQgVHdlZW5MaXRlIGZyb20gJy4vdXRpbHMvVHdlZW5MaXRlLm1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gSW5zdGFudGlhdGUgTVZDIENsYXNzZXMuIFNlZSBodHRwczovL3Rpbnl1cmwuY29tL3lhcWd5NzN3XG4gICAgdGhpcy5tID0gbmV3IE1vZGVsKHRoaXMpO1xuICAgIHRoaXMudiA9IG5ldyBWaWV3KHRoaXMpO1xuICAgIHRoaXMuYyA9IG5ldyBDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIGluc3RhbnRpYXRlZCBjbGFzc2VzIGFuZCBTZXQgRGVwZW5kZW50c1xuICAgIGNvbnN0IGRlcGVuZGVudHMgPSBbdGhpcy5tLCB0aGlzLnYsIHRoaXMuY107XG4gICAgdGhpcy5tLnNldERlcGVuZGVudHMoZGVwZW5kZW50cyk7XG4gICAgdGhpcy52LnNldERlcGVuZGVudHMoZGVwZW5kZW50cyk7XG4gICAgdGhpcy5jLnNldERlcGVuZGVudHMoZGVwZW5kZW50cyk7XG4gIH1cbn1cblxuLy8gUnVuIHRoZSBNYWluIGNsYXNzIGFzIHNvb24gYXMgd2UgY2FuLi4uXG5sZXQgbWFpbiA9IG5ldyBNYWluKCk7XG5cbi8vIC4uLiBidXQgd2FpdCB0aWxsIHRoZSBkb20gaGFzIGxvYWRlZCBiZWZvcmUgdHJ5aW5nIHRvIGRvIGFueXRoaW5nIHdpdGggaXRcbmpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAvLyBXaGF0IHZlcnNpb24gYXJlIHdlPyBDaGFuZ2UgdGhpcyB1cCBpbiAvcGFja2FnZS5qc29uXG4gIGNvbnN0IHZzID0gYCR7cGFja2FnZUpTT04ubmFtZX0gdnMgJHtwYWNrYWdlSlNPTi52ZXJzaW9ufVxcbmA7XG4gIGNvbnNvbGUubG9nICh2cyk7XG4gIGNvbnNvbGUubG9nIChDYXJ0Q2hlY2tJdE91dCk7XG5cbiAgLy8gU2hvdyB0aGUgaW5pdGlhbCBzY3JlZW5zIGFmdGVyIGEgbW9tZW50J3MgbG9hZGluZyBkZWxheSAodG8gc2ltdWxhdGUgYWpheCBsb2FkaW5nKVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgLy8gS2ljayBvZmYgdGhlIGFwcGxpY2F0aW9uIGJ5IHNob3dpbmcgdGhlIHN1bW1hcnkgYW5kIHRoZSBlbWFpbCBjYXB0dXJlIGZvcm1cbiAgICBtYWluLnYudmlld3Muc3VtbWFyeS5zaG93KCk7XG4gICAgbWFpbi52LnZpZXdzLmVtYWlsLnNob3coKTtcbiAgfSwgbWFpbi5tLmRhdGEuY29uZmlnLmxvYWRpbmdEZWxheSk7XG5cblxuICAvLyBTaG93IHRoZSBkZWJ1Z2dlciBpZiB0aGUgY29uZmlnIGZsYWcgaXMgc2V0XG4gIGlmICghbWFpbi5tLmRhdGEuY29uZmlnLmRlYnVnZ2VyKXtcbiAgICBqUXVlcnkoJy5kZWJ1ZycpLmhpZGUoKTtcbiAgfWVsc2V7XG4gICAgbWFpbi5tLmRlYnVnZ2VyKCk7XG4gIH1cblxuXG5cbn0pO1xuIiwiLyoqXG4gKiBBbGlnZW50IENoZWNrSXRPdXRcbiAqXG4gKiBAY2F0ZWdvcnkgICBBbGlnZW50XG4gKiBAcGFja2FnZSAgICBhbGlnZW50LWNoZWNraXRvdXRcbiAqIEBjb3B5cmlnaHQgIENvcHlyaWdodCAoYykgMjAxNyBBbGlnZW50XG4gKiBAYXV0aG9yICAgICBDaHJpcyBEb3J3YXJkIDxjaHJpcy5kb3J3YXJkQGFsaWdlbnQuY29tLmF1PlxuICpcbiAqIHNyYy9qcy9jb25maWcuanNcbiAqIENvbmZpZyBNb2RlbFxuICpcbiAqIHdpbGxpYW0uY2hhbWJlcnNAYWxpZ2VudC5jb20uYXUsIHBhc3N3b3JkXG4gKiBtaWNoYWVsQGFsaWdlbnQuY29tLmF1LCBwYXNzd29yZFxuICogY2hyaXMuZG9yd2FyZEBhbGlnZW50LmNvbS5hdSwgcGFzc3dvcmRcbiAqIHJhbmRvbUBleGFtcGxlLmNvbSwgcGFzc3dvcmRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiY29uZmlnXCI6IHtcbiAgICBcImRlYnVnZ2VyXCI6IGZhbHNlLFxuICAgIFwiZGVmYXVsdEVtYWlsXCI6IFwiXCIsXG4gICAgXCJkZWZhdWx0UGFzc3dvcmRcIjogXCJcIixcbiAgICBcImNzc1RyYW5zaXRpb25EdXJhdGlvblwiOiA3NTAsXG4gICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiA0MDAsXG4gICAgXCJsb2FkaW5nRGVsYXlcIjogNTAwLFxuICAgIFwiZW1haWxDaGVja0RlbGF5XCI6IDUwMCxcbiAgICBcImZyZWVTaGlwcGluZ01pblwiOiAxMDBcbiAgfVxufTtcbiIsIihmdW5jdGlvbigkKSB7XG5cdCQuZm4uc2hha2UgPSBmdW5jdGlvbihvKSB7XG5cdFx0aWYgKHR5cGVvZiBvID09PSAnZnVuY3Rpb24nKVxuXHRcdFx0byA9IHtjYWxsYmFjazogb307XG5cdFx0Ly8gU2V0IG9wdGlvbnNcblx0XHR2YXIgbyA9ICQuZXh0ZW5kKHtcblx0XHRcdGRpcmVjdGlvbjogXCJsZWZ0XCIsXG5cdFx0XHRkaXN0YW5jZTogNSxcblx0XHRcdHRpbWVzOiAzLFxuXHRcdFx0c3BlZWQ6IDEwMCxcblx0XHRcdGVhc2luZzogXCJzd2luZ1wiXG5cdFx0fSwgbyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBDcmVhdGUgZWxlbWVudFxuXHRcdFx0dmFyIGVsID0gJCh0aGlzKSwgcHJvcHMgPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBlbC5jc3MoXCJwb3NpdGlvblwiKSxcblx0XHRcdFx0dG9wOiBlbC5jc3MoXCJ0b3BcIiksXG5cdFx0XHRcdGJvdHRvbTogZWwuY3NzKFwiYm90dG9tXCIpLFxuXHRcdFx0XHRsZWZ0OiBlbC5jc3MoXCJsZWZ0XCIpLFxuXHRcdFx0XHRyaWdodDogZWwuY3NzKFwicmlnaHRcIilcblx0XHRcdH07XG5cblx0XHRcdGVsLmNzcyhcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XG5cblx0XHRcdC8vIEFkanVzdFxuXHRcdFx0dmFyIHJlZiA9IChvLmRpcmVjdGlvbiA9PSBcInVwXCIgfHwgby5kaXJlY3Rpb24gPT0gXCJkb3duXCIpID8gXCJ0b3BcIiA6IFwibGVmdFwiO1xuXHRcdFx0dmFyIG1vdGlvbiA9IChvLmRpcmVjdGlvbiA9PSBcInVwXCIgfHwgby5kaXJlY3Rpb24gPT0gXCJsZWZ0XCIpID8gXCJwb3NcIiA6IFwibmVnXCI7XG5cblx0XHRcdC8vIEFuaW1hdGlvblxuXHRcdFx0dmFyIGFuaW1hdGlvbiA9IHt9LCBhbmltYXRpb24xID0ge30sIGFuaW1hdGlvbjIgPSB7fTtcblx0XHRcdGFuaW1hdGlvbltyZWZdID0gKG1vdGlvbiA9PSBcInBvc1wiID8gXCItPVwiIDogXCIrPVwiKSAgKyBvLmRpc3RhbmNlO1xuXHRcdFx0YW5pbWF0aW9uMVtyZWZdID0gKG1vdGlvbiA9PSBcInBvc1wiID8gXCIrPVwiIDogXCItPVwiKSAgKyBvLmRpc3RhbmNlICogMjtcblx0XHRcdGFuaW1hdGlvbjJbcmVmXSA9IChtb3Rpb24gPT0gXCJwb3NcIiA/IFwiLT1cIiA6IFwiKz1cIikgICsgby5kaXN0YW5jZSAqIDI7XG5cblx0XHRcdC8vIEFuaW1hdGVcblx0XHRcdGVsLmFuaW1hdGUoYW5pbWF0aW9uLCBvLnNwZWVkLCBvLmVhc2luZyk7XG5cdFx0XHRmb3IgKHZhciBpID0gMTsgaSA8IG8udGltZXM7IGkrKykgeyAvLyBTaGFrZXNcblx0XHRcdFx0ZWwuYW5pbWF0ZShhbmltYXRpb24xLCBvLnNwZWVkLCBvLmVhc2luZykuYW5pbWF0ZShhbmltYXRpb24yLCBvLnNwZWVkLCBvLmVhc2luZyk7XG5cdFx0XHR9O1xuXHRcdFx0ZWwuYW5pbWF0ZShhbmltYXRpb24xLCBvLnNwZWVkLCBvLmVhc2luZykuXG5cdFx0XHRhbmltYXRlKGFuaW1hdGlvbiwgby5zcGVlZCAvIDIsIG8uZWFzaW5nLCBmdW5jdGlvbigpeyAvLyBMYXN0IHNoYWtlXG5cdFx0XHRcdGVsLmNzcyhwcm9wcyk7IC8vIFJlc3RvcmVcblx0XHRcdFx0aWYoby5jYWxsYmFjaykgby5jYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBDYWxsYmFja1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG59KShqUXVlcnkpO1xuIl19
