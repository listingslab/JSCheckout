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

export default class ControllerEmail {

  constructor(main) {
    this.main = main;
  }

  setUI (){
    jQuery(window).unbind('keypress');
    jQuery('#email-continue').click((event)=>{
      this.main.c.controllers.email.checkValidity();
    });
    jQuery(window).keypress((event)=>{
      if (event.keyCode === 13) {
        this.main.c.controllers.email.checkValidity();
      }
    });
  }

  checkValidity (){
    const validity = this.validateEmail (jQuery('#email-address').val());
    if (!validity.valid){
      this.main.v.views.email.showError(validity.message);
    } else {
      this.main.v.views.email.hide();
    }
  }

  validateEmail (email){
    // Check for empty field
    if (email === ''){
      return {
        valid: false,
        message: 'Enter your email address'
      };
    } else {
      // Check for a valid email address (@ sign, tld etc)
      // returns true if valid, false if not. http://hexillion.com/samples/
      const reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
      if(!email.match(reEmail)) {
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

}
