(function() {
  'use strict'

  angular.module('MenuResturantApp')
    .controller('ItemsController', ItemsController)


  ItemsController.$inject = ['MenuDataService', 'items']

  function ItemsController(MenuDataService, items) {
    var itmcontroller = this;
    itmcontroller.items = items;
  }

})()
