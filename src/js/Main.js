/**
 * Aligent CheckItOut
 *
 * @category   Aligent
 * @package    aligent-checkitout
 * @copyright  Copyright (c) 2017 Aligent
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 *
 * src/js/main.js
 * Main JavaScript entry
 */

import Model from './MVC/Model';
import View from './MVC/View';
import Controller from './MVC/Controller';
import packageJSON from '../../package.json';
import shake from './utils/jquery.ui.shake';
// import TweenLite from './utils/TweenLite.min';

export default class Main {

  constructor() {

    // Instantiate MVC Classes. See https://tinyurl.com/yaqgy73w
    this.m = new Model(this);
    this.v = new View(this);
    this.c = new Controller(this);

    // Create an array of instantiated classes and Set Dependents
    const dependents = [this.m, this.v, this.c];
    this.m.setDependents(dependents);
    this.v.setDependents(dependents);
    this.c.setDependents(dependents);
  }
}

// Run the Main class as soon as we can...
let main = new Main();

// ... but wait till the dom has loaded before trying to do anything with it
jQuery( document ).ready(function() {

  // What version are we? Change this up in /package.json
  const vs = `${packageJSON.name} vs ${packageJSON.version}\n`;
  console.log (vs);
  console.log (CartCheckItOut);

  // Show the initial screens after a moment's loading delay (to simulate ajax loading)
  setTimeout(function(){
    // Kick off the application by showing the summary and the email capture form
    main.v.views.summary.show();
    main.v.views.email.show();
  }, main.m.data.config.loadingDelay);


  // Show the debugger if the config flag is set
  if (!main.m.data.config.debugger){
    jQuery('.debug').hide();
  }else{
    main.m.debugger();
  }



});
