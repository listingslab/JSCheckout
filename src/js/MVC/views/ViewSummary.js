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

export default class ViewSummary {

  constructor(main) {
    this.main = main;
  }

  show(){
    jQuery('#left').html(this.getContent ());
    jQuery('#summary-div').hide();
    jQuery('#summary-div').fadeIn(this.main.m.data.config.animationDuration);
  }

  hide(){
    jQuery('#summary-div').fadeOut(this.main.m.data.config.animationDuration);
  }

  getContent (){
    const summaryArr = this.main.m.data.orderSummary;
    let html = `
      <div id="summary-div">
        <h3 class="screen-title">
            <span class="screen-header">
               Order Summary
            </span>
        </h3>
        <div class="summary-total">${summaryArr.length} Items</div>
      `;
    for (let i = 0; i<summaryArr.length; i++) {
      let div = `<div id="" class="summary-item">`;
      div += `<div class="summary-item-image">
                  <img
                src="${summaryArr[i].image}"
                alt="${summaryArr[i].desc}"
                />
              </div>`;
      div += `<div class="summary-item-info">
                  <div class="item-title">${summaryArr[i].title}</div>
                  <div class="item-price">$${summaryArr[i].price}</div>
                  <div class="item-size">Size ${summaryArr[i].size}</div>
                  <div class="item-colour">Colour ${summaryArr[i].colour}</div>
              </div>`;
      div += `</div>`;
      html += div;
    }
    html += `<a
                href="/checkout/cart/"
                title="back"
                class="black-link font-small"
                >&lt; Back to Shopping Bag</a>`;
    html += `</div>`;
    return html;
  }
}
