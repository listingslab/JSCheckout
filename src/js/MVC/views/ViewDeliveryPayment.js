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

export default class ViewDeliveryPayment {

  constructor(main) {
    this.main = main;
  }

  show(){
    this.main.m.calculateOrderTotal ();
    jQuery('#middle').html(this.main.v.views.deliverypayment.getDeliveryContent ());
    jQuery('#delivery-div').hide();
    jQuery('#delivery-div').fadeIn(this.main.m.data.config.animationDuration);
    jQuery('#right').html(this.main.v.views.deliverypayment.getPaymentContent ());
    jQuery('#payment-div').hide();
    jQuery('#payment-div').fadeIn(this.main.m.data.config.animationDuration);
    this.main.v.showTotals ();
    this.main.c.controllers.deliverypayment.setUI();
  }

  showBillingAddress(){
    jQuery('#billing-address-hidden').fadeIn(this.main.m.data.config.animationDuration);
    setTimeout(function(){
      jQuery('#billing-firstname').focus();
    }, 500);
  }

  hideBillingAddress(){
    jQuery('#billing-address-hidden').hide();
  }

  showAuthorityToLeave(){
    jQuery('#input-leave-info').fadeIn(this.main.m.data.config.animationDuration);
    setTimeout(function(){
      jQuery('#input-leave-info').focus();
    }, 500);
  }

  showManualBilling(){
    jQuery('#billing-manual-hidden').fadeIn(this.main.m.data.config.animationDuration);
    setTimeout(function(){
      jQuery('#billing-street-address').focus();
    }, 500);
  }

  hideManualBilling(){
    jQuery('#billing-manual-hidden').hide();
  }

  showManualDelivery(){
    jQuery('#delivery-manual-hidden').fadeIn(this.main.m.data.config.animationDuration);
  }

  hideAuthorityToLeave(){
    jQuery('#input-leave-info').fadeOut(this.main.m.data.config.animationDuration);
  }

  hide(){
    jQuery('#delivery-div').fadeOut(this.main.m.data.config.animationDuration);
    jQuery('#payment-div').fadeOut(this.main.m.data.config.animationDuration);
  }

  getDeliveryContent (){
    let html = `
          <div id="delivery-div">
            <h3 class="screen-title">
                <span class="screen-header">Delivery</span>
            </h3>
            <div class="instructions"></div>
  
            <div class="form-label" id="firstname-message" >First Name</div>
            <input
              id="firstname"
              class="delivery-input"
              type="text"
              value="${this.main.m.data.order.firstName || ''}"
            />
  
            <div class="form-label" id="lastname-message" >Last Name</div>
            <input
              id="lastname"
              class="delivery-input"
              type="text"
              value="${this.main.m.data.order.lastName || ''}"
            />
            
            <div class="form-label" id="delivery-address-message" >Delivery Address</div>
            <input
              id="delivery-address"
              class="delivery-input"
              type="text"
              value="${this.main.m.data.order.deliveryAddress || ''}"
              placeholder=""
            />
            
            <div class="delivery-address-not-found">
                Your address not there? <a href="#" id="address-not-found" class="black-link">Click here</a>
            </div>
            
            <div id="delivery-manual-hidden">
            
              <div class="form-label" id="input-delivery-street-address-message" >Street Address</div>
              <input
                id="delivery-street-address"
                class="delivery-input"
                type="text"
              />
              
              <div class="form-label" id="input-delivery-city-message" >City</div>
              <input
                id="delivery-city"
                class="delivery-input"
                type="text"
              />
              
              <div class="form-label" id="input-delivery-state-message" >State</div>
              <input
                id="delivery-state"
                class="delivery-input"
                type="text"
              />
              
              <div class="form-label" id="input-delivery-state-message" >Postcode</div>
              <input
                id="delivery-postcode"
                class="delivery-input"
                type="text"
              />
              
            </div>
            
            <div class="authority">
              <input
                title="Authority to leave" 
                type="checkbox" 
                class="checkbox" 
                id="authority-to-leave"
              />
              <label for="authority-to-leave">Authority to leave</label>
            </div>
            
            <div id="input-authority">
              <input
                id="input-leave-info"
                class="input-text-field"
                type="text"
                value=""
              />
            </div>
            
            <div class="form-label" id="businessname-message" >Business Name - <em>Optional</em></div>
            <input
              id="businessname"
              class="input-text-field"
              type="text"
              value="${this.main.m.data.order.businessName || ''}"
            />
            
            <div class="form-label" id="phone-message" >Phone Number</div>
            <input
              id="phonenumber"
              class="input-text-field"
              type="text"
              value="${this.main.m.data.order.phone || ''}"
            />
            
            <div class="billing-address">
              <input
                title="Bill to a different address" 
                type="checkbox" 
                class="checkbox" 
                id="bill-to-different"
              />
              <label for="bill-to-different">Bill to a different address</label>
            </div>
            
            <div id="billing-address-hidden">
            
              <div class="form-label" id="billing-firstname-message" >First Name</div>
                <input
                  id="billing-firstname"
                  class="delivery-input"
                  type="text"
                />
              
              <div class="form-label" id="billing-lastname-message" >Last Name</div>
                <input
                  id="billing-lastname"
                  class="delivery-input"
                  type="text"
                />
              
              <div class="form-label" id="billing-address-message" >Billing Address</div>
                <input
                  id="billing-address"
                  class="delivery-input"
                  type="text"
                  placeholder=""
                />
                
              <div class="delivery-address-not-found">
                Your address not there? <a href="#" id="billing-address-not-found" class="black-link">Click here</a>
              </div>
              
              <div id="billing-manual-hidden">
                <div class="form-label" id="billing-street-address-message" >Street Address</div>
                <input
                  id="billing-street-address"
                  class="billing-input"
                  type="text"
                />
                
                <div class="form-label" id="billing-city-message" >City</div>
                <input
                  id="billing-city"
                  class="delivery-input"
                  type="text"
                />
                
                <div class="form-label" id="billing-state-message" >State</div>
                <input
                  id="billing-state"
                  class="delivery-input"
                  type="text"
                />
                
                <div class="form-label" id="billing-state-message" >Postcode</div>
                <input
                  id="billing-postcode"
                  class="delivery-input"
                  type="text"
                />
              </div>
              
              
            
            </div>
  
          </div>
          `;
    return html;
  }

  getPaymentContent (){
    const html = `
      <div id="payment-div">
      
        <h3 class="screen-title">
          <span class="screen-header">Payment</span>
        </h3>
        
        <div class="instructions">
          How would you like to pay?
        </div>
        
        <div class="payment-options">
          <div class="card">
              <img
                  class="payment-option"
                  id="card"
                  alt="Pay with credit card"
                  src="http://listingslab.com/wp-content/uploads/2017/06/card.png"
              />
          </div>
          <div class="paypal">
              <img
                  class="payment-option"
                  height="57"
                  id="paypal"
                  alt="Pay with PayPal"
                  src="http://listingslab.com/wp-content/uploads/2017/06/paypal.png"
              />
          </div>
          <div class="afterpay">
              <img
                  class="payment-option"
                  height="57"
                  id="afterpay"
                  alt="Pay with Afterpay"
                  src="http://listingslab.com/wp-content/uploads/2017/06/afterpay.png"
              />
          </div>
        </div>
        
        <div class="payment-info" id="card-div">
          <div id="cardnumber-message" class="form-label">Card Number</div>
          <input
              title="Card Number"
              id="cardnumber"
              class="input-text-field"
              type="text"
          />
          <div class="expiry-cvc">
              <div class="expiry">
                  <div id="expiry-message" class="form-label">Expiry Date (MM/YY)</div>
                  <input
                      title="Expiry Date"
                      id="expiry"
                      class="input-text-field"
                      type="text"
                  />
              </div>
              <div class="cvc">
                  <div id="cvc-message" class="form-label">CVC</div>
                  <input
                      title="CVC"
                      id="cvc"
                      class="input-text-field"
                      type="text"
                  />
              </div>
          </div>
        </div>
        
        <div class="payment-info" id="paypal-div">
            <p>You will be redirected to PayPal complete your order.</p>
        </div>
        
        <div class="payment-info" id="afterpay-div">
          <p><strong>4 equal payments of $${Math.round((this.main.m.data.order.grandtotal/4) * 100) / 100}</strong></p>
          <p>Pay for your purchase over four equal fortnightly installments with no interest.
              Afterpay makes it simple to pay when it suits you best. Available to customers in
              Australia with a debit or credit card.</p>
          <p>When you click '<strong>PLACE YOUR ORDER</strong>' you will be redirected to Afterpay
              to complete your order.</p>
          <p><a
                class="afterpay-link"
                href="https://www.afterpay.com.au"
                target="_blank"
          >Find out more</a></p>
        </div>
        
        <div class="payment-separator" />
        
        <div id="promo-message" class="form-label">Promo Code</div>
        <div class="promo">
          <div class="input-promo">
              <input
                  title="Promo Code"
                  id="promocode"
                  class="input-text-field uppercase-field"
                  type="text"
              />
          </div>
          <div class="submit-promo">
              <input
                  id="apply-promo"
                  type="button"
                  value="Apply"
              />
          </div>
        </div>
        
        <div id="gift-message" class="form-label">Gift Card</div>
        
        <div class="gift">
          <div class="input-gift">
            <input
              title="Gift Card"
              id="giftcard"
              class="input-text-field"
              type="text"
            />
          </div>
          <div class="submit-gift">
            <input
              id="redeem-giftcard"
              type="button"
              value="Redeem"
            />
          </div>
        </div>
        
        <div class="newsletter">
          <input
            type="checkbox"
            class="checkbox"
            id="newsletter-signup"
            title="Sign up to newsletter"
            checked="checked"
          />
          <label for="newsletter-signup">Sign up to Summer Lovers Club to be in the know!</label>
        </div>
        
        <div class="free-shipping" id="shipping-message">
          You are <span id="dollars-short" class="bold">$xx</span> away from <span class="bold">FREE SHIPPING</span>
        </div>
        
        <div class="totals">
          <div class="subtotal">
            <div class="total-col">subtotal</div>
            <div class="total-col flex-right" id="subtotal">$</div>
          </div>
          <div class="promocodes">
            <div class="total-col">promo codes</div>
            <div class="total-col flex-right" id="promocodes"></div>
          </div>
          <div class="giftcards">
            <div class="total-col">gift cards</div>
            <div class="total-col flex-right" id="giftcards"></div>
          </div>
          <div class="discounts">
            <div class="total-col">discounts</div>
            <div class="total-col flex-right" id="discounts">$</div>
          </div>
          <div class="shipping">
            <div class="total-col">shipping</div>
            <div class="total-col flex-right" id="shipping">$</div>
          </div>
          <div class="grandtotal">
            <div class="total-col">Grand Total</div>
            <div class="total-col flex-right" id="grandtotal">$</div>
          </div>
        </div>
        
        <input
          id="place-order"
          class="btn-place-order"
          type="button"
          value="PLACE YOUR ORDER"
        />
        
      </div>
    `;
    return html;
  }

}