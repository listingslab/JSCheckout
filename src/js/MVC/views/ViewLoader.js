/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/MVC/views/ViewLoader.js
 *
 */

export default class ViewLoader {

  constructor(main) {
    this.main = main;
  }

  show(message) {
    jQuery('#middle').html(this.getContent (message));
    jQuery('#loader-div').hide();
    jQuery('#loader-div').fadeIn(this.main.m.data.config.animationDuration);
  }

  hide() {
    jQuery('#loader-div').fadeOut(this.main.m.data.config.animationDuration, this.main.v.views.password.show.bind(this));
  }

  getContent(message){
    let html = `
      <div id="loader-div">

        <div class="loader">
            <img
                alt="${message}"
                src="/skin/frontend/base/default/images/aligent/cartcheckitout/ajax-loader.gif"
            />
            &nbsp;&nbsp;&nbsp;${message}
        </div>
      </div>`;
    return html;
  }
}
