/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/Controller.js
 * Handles anything to do with user interaction
 *
 */

import ControllerEmail from './controllers/ControllerEmail';
import ControllerPassword from './controllers/ControllerPassword';
import ControllerDeliveryPayment from './controllers/ControllerDeliveryPayment';

export default class Controller {

  constructor(main) {
    this.main = main;
    this.shortName = 'c';
    this.controllers = {};
    this.controllers.email = new ControllerEmail (main);
    this.controllers.password = new ControllerPassword (main);
    this.controllers.deliverypayment = new ControllerDeliveryPayment (main);
  }

  setDependents(dependents) {
    // Set Dependent MVC Classes
    // See https://tinyurl.com/yaqgy73w
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }

}
