/**
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

import ViewDeliveryPayment from './views/ViewDeliveryPayment';
import ViewEmail from './views/ViewEmail';
import ViewLoader from './views/ViewLoader';
import ViewPassword from './views/ViewPassword';
import ViewPlaceOrder from './views/ViewPlaceOrder';
import ViewSummary from './views/ViewSummary';

export default class View {

  constructor(main) {
    this.main = main;
    this.shortName = 'v';
    this.views = {};
    this.views.summary = new ViewSummary (main);
    this.views.email = new ViewEmail (main);
    this.views.password = new ViewPassword (main);
    this.views.deliverypayment = new ViewDeliveryPayment (main);
    this.views.loader = new ViewLoader (main);
    this.views.placeorder = new ViewPlaceOrder (main);
  }

  setDependents(dependents) {
    // Set Dependent MVC Classes
    // See https://tinyurl.com/yaqgy73w
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }

  shakeField(field) {
    jQuery(field).removeClass('input-error-fade');
    jQuery(field).addClass('input-error');
    setTimeout(function(){
      jQuery(field).addClass('input-error-fade');
    }, this.main.m.data.config.cssTransitionDuration );
    jQuery(field).shake();
  }

  showTotals (){
    jQuery('#subtotal').html(`$${this.m.data.order.subtotal}`);
    if (this.m.data.order.discounts === 0){
      jQuery('.discounts').hide();
    }else{
      jQuery('#discounts').html(`-$${this.m.data.order.discounts}`);
      jQuery('.discounts').fadeIn(this.main.m.data.config.animationDuration);
    }

    if (this.m.data.order.promocodes.length === 0){
      jQuery('.promocodes').hide();
    }else{
      let codes = '';
      for (let i=0; i<this.m.data.order.promocodes.length; i++) {
        codes += `<strong>${this.m.data.order.promocodes[i].code}</strong>`;
        if (i<this.m.data.order.promocodes.length){
          codes += '<br />';
        }
      }
      jQuery('#promocodes').html(codes);
      jQuery('.promocodes').fadeIn(this.main.m.data.config.animationDuration);
    }

    if (this.m.data.order.giftcards.length === 0){
      jQuery('.giftcards').hide();
    }else{
      let codes = '';
      for (let i=0; i<this.m.data.order.giftcards.length; i++) {
        codes += `<strong>${this.m.data.order.giftcards[i].code}</strong>`;
        if (i<this.m.data.order.giftcards.length){
          codes += '<br />';
        }
      }
      jQuery('#giftcards').html(codes);
      jQuery('.giftcards').fadeIn(this.main.m.data.config.animationDuration);
    }

    if (this.m.data.order.shipping === 0){
      jQuery('#shipping-message').html(`Enjoy <span class="bold">FREE EXPRESS SHIPPING</span> on us!`);
      jQuery('#shipping').html(`FREE`);
    } else {
      let shortfall = Math.round((this.m.data.config.freeShippingMin - this.m.data.order.subtotal) * 100) / 100;
      jQuery('#shipping-message').html(`You are AUD <span class="bold">$${shortfall}</span> away from FREE SHIPPING`);
      jQuery('#shipping').html(`$${this.m.data.order.shipping}`);
    }
    jQuery('#grandtotal').html(`$${this.m.data.order.grandtotal}`);
  }

}
