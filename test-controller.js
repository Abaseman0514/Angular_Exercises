"use strict"; {
 angular.module('app')
  .controller('TestController', function(){
    const $ctrl = this;
    // ^^^^THIS is saying the $ctrl is that variable ^^^^
    $ctrl.myName = 'Ariana';
  });
}
// ^^GETTING it so not CREATING it so no array^^
// ^^^controllers are named with the name of it and controller --- as above with capitalization^^^
// myName is a property