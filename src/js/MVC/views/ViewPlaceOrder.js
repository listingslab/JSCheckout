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

export default class ViewPlaceOrder {

  constructor(main) {
    this.main = main;
  }

  show() {
    jQuery('#middle').html('');
    jQuery('#order-div').hide();
    jQuery('#order-div').fadeIn(this.main.m.data.config.animationDuration);
    jQuery('.debug').show();
  }


}
