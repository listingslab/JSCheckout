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

export default class ViewPassword {

  constructor(main) {
    this.main = main;
  }

  show(){
    jQuery('#middle').html(this.main.v.views.password.getContent ());
    jQuery('#password-div').hide();
    jQuery('#password-div').fadeIn(this.main.m.data.config.animationDuration);
    this.main.c.controllers.password.setUI();
    setTimeout(function(){
      jQuery('#password').focus();
    }, 500);
  }

  showError (message){
    this.main.v.shakeField (jQuery('#password'));
    jQuery('#password-message').html(`${message}`);
  }

  hide(){
    jQuery('#password-div').fadeOut(this.main.m.data.config.animationDuration, this.main.v.views.deliverypayment.show.bind(this));
  }

  getContent (){
    let customerType = 'none';
    const customerObj =  this.main.m.data.customer;
    if (!customerObj){
      this.main.m.updateOrder ('customerType', 'new');
      customerType = 'new';
    }else{
      this.main.m.updateOrder ('customerType', 'returning');
      customerType = 'returning';
    }
    let html = ``;
    if (customerType === 'returning'){
      html += `
          <div id="password-div">
            <h3 class="screen-title">
                <span class="screen-header">Welcome back!</span>
            </h3>
              <div class="instructions">
              <p>Please enter your password to continue to delivery & payment</p>
          </div>`;
    } else if (customerType === 'new') {

      html += `
            <div id="password-div">
            <h3 class="screen-title">
                <span class="screen-header">Welcome Aboard</span>
            </h3>
            <div class="instructions">
              <p>Please create a password to continue to delivery & payment</p>
            </div>`;
    }

    html += `
            <div id="password-message" class="form-label">Password</div>
            <input
              id="password"
              class="input-text-field"
              type="password"
              value="${this.main.m.data.config.defaultPassword}"
            />
            
            <input id="password-continue" type="button" value="CONTINUE" />
          `;

    html += `
            <div class="link-checkout-guest">
              <a
                  href="#"
                  id="guest-checkout"
              >Checkout as guest</a>
            </div>
          `;

    html += `</div>`;
    return html;
  }
}
