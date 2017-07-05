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

export default class ControllerPassword {

  constructor(main) {
    this.main = main;
  }

  setUI (){
    jQuery(window).unbind('keypress');
    jQuery('#password-continue').click((event)=>{
      this.checkValidity();
    });
    jQuery(window).keypress((event)=>{
      if (event.keyCode === 13) {
        this.checkValidity();
      }
    });
  }

  checkValidity (){
    const validity = this.validatePassword (jQuery('#password').val());
    if (!validity.valid){
      this.main.v.views.password.showError(validity.message);
    } else {
      this.main.v.views.password.hide();
    }
  }

  validatePassword (password) {
    if (this.main.m.data.order.customerType === 'new'){
      if (password !== '' && password.length > 5){
        return {
          valid: true
        };
      }else{
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
      }else{
        return {
          valid: false,
          message: 'Incorrect password.'
        };
      }
    }
    return false;
  }

}
