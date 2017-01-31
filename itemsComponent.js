(function() {
  'use strict'

  angular.module('MenuResturantApp')
    .component('items', {
      templateUrl: 'templates/items.template.html',
      bindings: {
        items: '<'
      }
    })
})()
