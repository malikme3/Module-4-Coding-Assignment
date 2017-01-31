(function() {
  'use strict'

  angular.module('data')
    .constant('MenuDataServiceEndpoint', "https://davids-restaurant.herokuapp.com/")
    .service('MenuDataService', MenuDataService)

  MenuDataService.$inject = ['$http', 'MenuDataServiceEndpoint']

  function MenuDataService($http,
    MenuDataServiceEndpoint) {
    var dataService = this;

    var categories = []
    var items = []

    dataService.getAllCategories = function() {
      var url = MenuDataServiceEndpoint + "/categories.json"
      dataService.categories = []

      return $http.get(url).then(function(result) {

        result.data.map((e) => {
          dataService.categories.push(e)
        })

        return dataService.categories
      })
    }

    dataService.getItemsForCategory = function(categoryShortName) {
      var url = MenuDataServiceEndpoint + "/menu_items.json?category=" + categoryShortName
      dataService.items = []

      return $http.get(url).then(function(result) {
        result.data.menu_items.map((e) => {
          dataService.items.push(e)
        })

        return dataService.items
      })
    }

  }

})()
