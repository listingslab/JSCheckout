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

export default class Model {

  constructor(main) {
    this.main = main;
    this.shortName = 'm';

    // The Model Class is our run-time data store.
    // We could use Redux if we were feeling flash.
    // In this case we'll keep our data in an object called 'data'
    // here in the Model class which can be accessed from anywhere
    this.data = {};

    // Import data models from the ./models directory
    this.importModels ();

    // Set up a customer object ready to be populated during runtime
    this.setOrder ();
  }

  setDependents(dependents) {
    // Set Dependent MVC Classes
    // See https://tinyurl.com/yaqgy73w
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }

  importModels (){
    // Example data models for Ajax integration
    // config
    const config = require('../config');
    this.data.config = config.default.config;
    // orderSummary
    const orderSummary = require('./models/orderSummary');
    this.data.orderSummary = orderSummary.default.orderSummary;
    // customers
    const customers = require('./models/customers');
    this.data.customers = customers.default.customers;
    // promocodes
    const promocodes = require('./models/promocodes');
    this.data.promocodes = promocodes.default.promocodes;
    // giftcards
    const giftcards = require('./models/giftcards');
    this.data.giftcards = giftcards.default.giftcards;
  }

  debugger (){
    jQuery('#debugger').val(JSON.stringify(this.data.order, null, "\t"));
  }

  setOrder (){
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
    this.debugger ();
  }

  updateOrder (key, value){
    this.data.order[key] = value;
    this.debugger ();
  }

  redeemGift (code) {
    // Check the supplied code against the model and update totals if it's good
    for (let i=0; i<this.data.giftcards.length; i++) {
      if (this.data.giftcards[i].code === code){
        this.data.order.giftcards.push(this.data.giftcards[i]);
        jQuery('#giftcard').val('');
        this.calculateOrderTotal ();
        this.main.v.showTotals ();
        this.debugger ();
        return;
      }
    }
    this.main.v.shakeField(jQuery('#giftcard'));
    return;
  }

  applyPromo (code) {
    // Check the supplied code against the model and update totals if it's good
    for (let i=0; i<this.data.promocodes.length; i++) {
      if (this.data.promocodes[i].code === code){
        this.data.order.promocodes.push(this.data.promocodes[i]);
        jQuery('#promocode').val('');
        this.calculateOrderTotal ();
        this.main.v.showTotals ();
        this.debugger ();
        return;
      }
    }
    this.main.v.shakeField(jQuery('#promocode'));
    return;
  }

  getCustomerByEmail (){
    this.main.m.data.order.email = jQuery('#email-address').val();
    this.main.v.views.loader.show('Checking email...');
    // wait a short time to simulate an ajax load
    // Checks for customer existence ../models/customers.json.
    // Returns a customer object if found, false if not
    setTimeout(function() {
      this.main.m.data.customer = false;
      let allCustomers = this.main.m.data.customers;
      for (let i=0; i<allCustomers.length; i++){
        if ( this.main.m.data.order.email === allCustomers[i].email){
          this.main.m.data.customer = allCustomers[i];
        }
      }
      this.main.v.views.loader.hide();
    }.bind(this), this.main.m.data.config.emailCheckDelay);
  }

  addExistingCustomer() {
    this.updateOrder('firstName', this.main.m.data.customer.firstName);
    this.updateOrder('lastName', this.main.m.data.customer.lastName);
    this.updateOrder('deliveryAddress', this.main.m.data.customer.deliveryAddress);
    this.updateOrder('phonenumber', this.main.m.data.customer.phonenumber);
  }

  calculateOrderTotal (){
    // Quick & dirty math to calculate totals.
    // Probably won't be needed when app is using ajax
    let subtotal = 0;
    let discounts = 0;
    let shipping = 0;
    let grandtotal = 0;
    for (let i=0; i<this.data.orderSummary.length; i++){
      subtotal += Number(this.data.orderSummary[i].price);
    }
    if (subtotal <= this.data.config.freeShippingMin){
      shipping = 10;
    }

    for (let i=0; i<this.data.order.promocodes.length; i++){
      if (this.data.order.promocodes[i].type === 'percent'){
        discounts = Math.round (((subtotal/100)*this.data.order.promocodes[i].amount)*100)/100;
      }
    }

    for (let i=0; i<this.data.order.giftcards.length; i++){
      discounts = this.data.order.giftcards[i].amount;
    }

    grandtotal = Math.round (((subtotal - discounts) + shipping)*100)/100;
    this.m.updateOrder ('subtotal', subtotal);
    this.m.updateOrder ('discounts', discounts);
    this.m.updateOrder ('shipping', shipping);
    this.m.updateOrder ('grandtotal', grandtotal);
  }

  removeOrderItem (sku) {
    // Pop an order item out of the orderSummary array by sku
    for(var i = this.data.summary.length - 1; i >= 0; i--) {
      if(this.data.summary[i].sku === sku) {
        this.data.summary.splice(i, 1);
      }
    }
  }

  setPaymentMethod(option) {
    switch(option) {
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
    this.m.updateOrder ('paymentMethod', option);
  }

}
