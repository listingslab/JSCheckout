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

export default class ControllerDeliveryPayment {

  constructor(main) {
    this.main = main;
  }

  setUI (){
    jQuery(window).unbind('keypress');

    // Setup the google places auto fill address sccreen
    // https://developers.google.com/maps/documentation/javascript/places-autocomplete
    this.deliveryField = new google.maps.places.Autocomplete(
      (document.getElementById('delivery-address')),{
        types: ['geocode'],
        main: this.main,
        callback:this.fillInDelivery,
      });
    this.geolocate(this.deliveryField);
    this.deliveryField.addListener('place_changed', function (){
      jQuery('#delivery-address').val('');
      this.callback(this.getPlace());
    });

    jQuery('#delivery-manual-hidden').hide();
    jQuery('#address-not-found').click(()=>{
      this.main.v.views.deliverypayment.showManualDelivery();
      return false;
    });

    // Set default authorityToLeave signup to no
    if (this.main.m.data.order.authorityToLeave === ''){
      this.main.m.updateOrder ('authorityToLeave', 'no');
      jQuery('#input-leave-info').hide();
    }
    jQuery('#authority-to-leave').click(function(event) {
      if (jQuery('#authority-to-leave').is(':checked')){
        this.main.m.updateOrder ('authorityToLeave', 'yes');
        this.main.v.views.deliverypayment.showAuthorityToLeave();
      }else{
        this.main.m.updateOrder ('authorityToLeave', 'no');
        this.main.v.views.deliverypayment.hideAuthorityToLeave();
      }
    }.bind(this));

    jQuery('#firstname').focusout(()=>{
      this.main.m.updateOrder ('firstName', jQuery('#firstname').val());
    });

    jQuery('#delivery-address').focusout(()=>{
      this.main.m.updateOrder ('deliveryAddress', jQuery('#delivery-address').val());
    });

    jQuery('#billing-firstname').focusout(()=>{
      this.main.m.updateOrder ('billingFirstName', jQuery('#billing-firstname').val());
    });

    jQuery('#billing-lastname').focusout(()=>{
      this.main.m.updateOrder ('billingLastName', jQuery('#billing-lastname').val());
    });

    jQuery('#lastname').focusout(()=>{
      this.main.m.updateOrder ('lastName', jQuery('#lastname').val());
    });

    jQuery('#input-leave-info').focusout(()=>{
      this.main.m.updateOrder ('authorityToLeaveInfo', jQuery('#input-leave-info').val());
    });

    jQuery('#businessname').focusout(()=>{
      this.main.m.updateOrder ('businessname', jQuery('#businessname').val());
    });

    jQuery('#phonenumber').focusout(()=>{
      this.main.m.updateOrder ('phonenumber', jQuery('#phonenumber').val());
    });

    // Set default bill to different address as no
    // Setup the google places auto fill address sccreen
    // https://developers.google.com/maps/documentation/javascript/places-autocomplete
    this.billingField = new google.maps.places.Autocomplete(
      (document.getElementById('billing-address')),{
        types: ['geocode'],
        main: this.main,
        callback:this.fillInBilling
      });
    this.geolocate(this.billingField);
    this.billingField.addListener('place_changed', function (){
      jQuery('#billing-address').val('');
      this.callback(this.getPlace());
    });

    if (this.main.m.data.order.billToDifferentAddress === ''){
      this.main.m.updateOrder ('billToDifferentAddress', 'no');
      this.main.v.views.deliverypayment.hideBillingAddress();
      this.main.v.views.deliverypayment.hideManualBilling();
    }
    jQuery('#bill-to-different').click(function(event) {
      if (jQuery('#bill-to-different').is(':checked')){
        this.main.m.updateOrder ('billToDifferentAddress', 'yes');
        this.main.v.views.deliverypayment.showBillingAddress();
      }else{
        this.main.m.updateOrder ('billToDifferentAddress', 'no');
        this.main.v.views.deliverypayment.hideBillingAddress();
      }
    }.bind(this));

    jQuery('#billing-address-not-found').click(()=>{
      this.main.v.views.deliverypayment.showManualBilling();
      return false;
    });

    // Set default payment method to paypal
    if (this.main.m.data.order.paymentMethod === ''){
      this.main.m.setPaymentMethod('paypal');
    }

    jQuery('.payment-option').click(function(event) {
      this.main.m.setPaymentMethod(event.target.id);
    }.bind(this));

    jQuery('.payment-option').hover(
      function(event) {
        if (event.target.id !== this.main.m.data.order.paymentMethod){
          event.target.src = `http://listingslab.com/wp-content/uploads/2017/06/${event.target.id}_over.png`;
        }
      }.bind(this),

      function(event) {
        if (event.target.id !== this.main.m.data.order.paymentMethod) {
          event.target.src = `http://listingslab.com/wp-content/uploads/2017/06/${event.target.id}.png`;
        }
      }.bind(this)
    );

    jQuery('#apply-promo').click((event)=>{
      this.main.m.applyPromo(jQuery('#promocode').val().toUpperCase());
    });

    jQuery('#redeem-giftcard').click((event)=>{
      this.main.m.redeemGift(jQuery('#giftcard').val());
    });

    // Set default newsletter signup as yes
    if (this.main.m.data.order.newsletter === ''){
      this.main.m.updateOrder ('newsletter', 'yes');
    }
    jQuery('#newsletter-signup').click(function(event) {
      if (jQuery('#newsletter-signup').is(':checked')){
        this.main.m.updateOrder ('newsletter', 'yes');
      }else{
        this.main.m.updateOrder ('newsletter', 'no');
      }
    }.bind(this));

    //   if (event.keyCode === 13) {
    //     this.validateOrder();
    //   }
    // });
  }

  geolocate(autocomplete) {
    // Bias the autocomplete object to the user's geographical location,
    jQuery('#place-order').click((event)=>{
      this.validateOrder();
    });

    // jQuery(window).keypress((event) => {
    // as supplied by the browser's 'navigator.geolocation' object.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }

  fillInDelivery (place){
    let numComponents = place.address_components.length;
    const street0 = place.address_components[0].short_name || '';
    const street1 = place.address_components[1].short_name || '';
    const street2 = place.address_components[2].short_name || '';
    let streetAddress = `${street0} ${street1}`;
    if (numComponents === 8){
      streetAddress = `${street0} ${street1} ${street2}`;
    }
    jQuery('#delivery-street-address').val(streetAddress);
    const city = place.address_components[numComponents-5].short_name;
    jQuery('#delivery-city').val(city);
    const state = place.address_components[numComponents-3].short_name;
    jQuery('#delivery-state').val(state);
    const postcode = place.address_components[numComponents-1].short_name;
    jQuery('#delivery-postcode').val(postcode);
    const deliveryAddress = `${streetAddress}, ${city}, ${state}, ${postcode}`;
    jQuery('#delivery-address').val(deliveryAddress);
    this.main.m.updateOrder ('deliveryAddress', deliveryAddress);
  }

  fillInBilling (place){
    let numComponents = place.address_components.length;
    const street0 = place.address_components[0].short_name || '';
    const street1 = place.address_components[1].short_name || '';
    const street2 = place.address_components[2].short_name || '';
    let streetAddress = `${street0} ${street1}`;
    if (numComponents === 8){
      streetAddress = `${street0} ${street1} ${street2}`;
    }
    jQuery('#billing-street-address').val(streetAddress);
    const city = place.address_components[numComponents-5].short_name;
    jQuery('#billing-city').val(city);
    const state = place.address_components[numComponents-3].short_name;
    jQuery('#billing-state').val(state);
    const postcode = place.address_components[numComponents-1].short_name;
    jQuery('#billing-postcode').val(postcode);
    const billingAddress = `${streetAddress}, ${city}, ${state}, ${postcode}`;
    jQuery('#billing-address').val(billingAddress);
    this.main.m.updateOrder ('billingAddress', billingAddress);
    console.log('this.main.m.updateOrder');

  }

  addTick(field) {
    jQuery(field).removeClass ('input-error');
    jQuery(field).addClass ('input-ticked');

  }

  removeTick(field) {
    jQuery(field).removeClass ('input-ticked');
  }

  validateOrder() {
    let orderReady = true;
    let firstErrorField = false;

    // firstname field must not be blank
    if (jQuery('#firstname').val() === ''){
      this.main.v.shakeField(jQuery('#firstname'));
      this.removeTick(jQuery('#firstname'));
      orderReady = false;
      firstErrorField = jQuery('#firstname');
    } else {
      this.addTick(jQuery('#firstname'));
    }

    // lastname field must not be blank
    if (jQuery('#lastname').val() === ''){
      this.main.v.shakeField(jQuery('#lastname'));
      this.removeTick(jQuery('#lastname'));
      orderReady = false;
      if (!firstErrorField){
        firstErrorField = jQuery('#lastname');
      }
    } else {
      this.addTick(jQuery('#lastname'));
    }

    // delivery address field must not be blank
    if (jQuery('#delivery-address').val() === ''){
      this.main.v.shakeField(jQuery('#delivery-address'));
      this.removeTick(jQuery('#delivery-address'));
      orderReady = false;
      if (!firstErrorField) {
        firstErrorField = jQuery('#delivery-address');
      }
    } else {
      this.addTick(jQuery('#delivery-address'));
    }

    if (this.main.m.data.order.billToDifferentAddress === 'yes'){
      // billing firstname must not be blank
      if (jQuery('#billing-firstname').val() === ''){
        this.main.v.shakeField(jQuery('#billing-firstname'));
        this.removeTick(jQuery('#billing-firstname'));
        orderReady = false;
        firstErrorField = jQuery('#billing-firstname');
      } else {
        this.addTick(jQuery('#billing-firstname'));
      }

      // billing lastname must not be blank
      if (jQuery('#billing-lastname').val() === ''){
        this.main.v.shakeField(jQuery('#billing-lastname'));
        this.removeTick(jQuery('#billing-lastname'));
        orderReady = false;
        firstErrorField = jQuery('#billing-lastname');
      } else {
        this.addTick(jQuery('#billing-lastname'));
      }

      // billing address must not be blank
      if (jQuery('#billing-address').val() === ''){
        this.main.v.shakeField(jQuery('#billing-address'));
        this.removeTick(jQuery('#billing-address'));
        orderReady = false;
        firstErrorField = jQuery('#billing-address');
      } else {
        this.addTick(jQuery('#billing-address'));
      }

    }

    if (this.main.m.data.order.paymentMethod === 'card'){
      // card number must not be blank
      if (jQuery('#cardnumber').val() === ''){
        this.main.v.shakeField(jQuery('#cardnumber'));
        this.removeTick(jQuery('#cardnumber'));
        orderReady = false;
        firstErrorField = jQuery('#cardnumber');
      } else {
        this.addTick(jQuery('#cardnumber'));
      }

      // expiry must not be blank
      if (jQuery('#expiry').val() === ''){
        this.main.v.shakeField(jQuery('#expiry'));
        this.removeTick(jQuery('#expiry'));
        orderReady = false;
        firstErrorField = jQuery('#expiry');
      } else {
        this.addTick(jQuery('#expiry'));
      }

      // cvc must not be blank
      if (jQuery('#cvc').val() === ''){
        this.main.v.shakeField(jQuery('#cvc'));
        this.removeTick(jQuery('#cvc'));
        orderReady = false;
        firstErrorField = jQuery('#cvc');
      } else {
        this.addTick(jQuery('#cvc'));
      }
    }


    // Submit the order if it's ready this.addTick(jQuery('#delivery-address'));
    if (orderReady){
      this.submitOrder ();
    }else{
      setTimeout(function(){
        jQuery(firstErrorField).focus();
      }, 500);
    }

  }
  submitOrder (){
    this.main.v.views.summary.hide();
    this.main.v.views.deliverypayment.hide();
    this.main.v.views.placeorder.show();
  }

}
