"use strict"; {
 angular.module('app')
   .controller('MainController', function(){
    const $ctrl = this;
    // $ctrl.me ={ name: 'Ariana', number: '231-548-8975'};
    // // $ctrl.myName = "Ariana";
    // $ctrl.band = [
    //  { name:"Jian", role: "Lead Singer" },
    //  { name:"Murray", role: "guitar" },
    //  { name: "Mike", role: "accordion" },
    //  { name: "Dave", role: "drummer" }
    // ];

    $ctrl.familyMembers = [
      { name: 'Sharon', relation: 'Mother', age: '69' },
      { name: 'Dave', relation: 'Father', age: '71' },
      { name: 'Sandra', relation: 'Aunt', age: '69' },
     ];
    
// $ctrl.names = ['Ariana', "Angie", 'Joe'];

// $ctrl.students = [
//   { name: 'Susie', present: false },
//   { name: 'Tom', present: true },
//   { name: 'Joanne', present: false },
//   { name: 'Tyrone', present: false },
// ]

//     $ctrl.changeName = function(name){
//       $ctrl.me.name = name;
//     }

//     $ctrl.addName = function(){
//       $ctrl.names.push($ctrl.newName);
//       $ctrl.newName = "";
//     }
    
//     $ctrl.togglePresent = function(student) {
//       student.present = !student.present;
//     }
   });
 }  
