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

export default class ViewEmail {

  constructor(main) {
    this.main = main;
  }

  show(){
    jQuery('#middle').html(this.main.v.views.email.getContent ());
    jQuery('#email-div').hide();
    jQuery('#email-div').fadeIn(this.main.m.data.config.animationDuration, this.main.c.controllers.email.setUI.bind(this));
    setTimeout(function(){
      jQuery('#email-address').focus();
    }, 500);
  }

  showError (message){
    this.main.v.shakeField(jQuery('#email-address'));
    jQuery('#email-message').html(`${message}`);
  }

  hide(){
    jQuery('#email-div').fadeOut(this.main.m.data.config.animationDuration, this.main.m.getCustomerByEmail.bind(this));
  }

  getContent (){
    let html = `
      <div id="email-div">
        <h3 class="screen-title">
            <span class="screen-header">First things first</span>
        </h3>
        <div class="instructions">
            <p>Please enter your email address to continue
            to delivery &amp; payment.</p>
        </div>
        <div id="email">
            <div class="form-label" id="email-message" >Email Address</div>
            <input
              id="email-address"
              class="input-text-field"
              type="text"
              value="${this.main.m.data.config.defaultEmail}"
            />
            <input
              id="email-continue"
              type="button"
              value="CONTINUE"
            />
        </div>
      </div>`;
    return html;
  }

}
