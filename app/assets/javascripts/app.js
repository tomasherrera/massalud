(function() {
  var app = angular.module('massalud', ["ngResource", 'ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
        .when('/panel', {
            templateUrl: '/panel.html'
        })
        .when('/', {
            templateUrl: '/index.html'
        })
        ;
  });

  app.controller("HomeController", function($scope, $resource, $routeParams, $location) {
    var AllProducts = $resource("/products/index.json", {}, {});
    $scope.tab = 2;
    $scope.selected_product = null;
    $scope.selected_brand = "";
    $scope.selected_presentation = "";
    $scope.presentation_selected = false;
    $scope.amount_value = 1;
    $scope.amount = 1;
    $scope.total = 0;
    $scope.ordeable = true;

    $scope.getAllProducts = function(){
      AllProducts.get().$promise.then(
        function( value ){
          $scope.products = value.products;
        },
        function( error ){/*Do something with error*/}
      );
    };


    $scope.activeWindow = function(){
      if ($location.path() === "/"){
        $scope.dashboard_style = "active";
        $scope.profile_style = "";
      }else if ($location.path() === "/panel"){
        $scope.getAllProducts();
        $scope.profile_style = "active";
        $scope.dashboard_style = "";
      };
    };

    $scope.selectedBrandAndPresentation = function(brand, presentation){
      $scope.selected_brand = brand;
      $scope.selected_presentation = presentation;
      $scope.presentation_selected = true;
    };

    $scope.order_items = [
      {}
    ];

    $scope.addProductToOrder = function(selected_product, amount_chosen, selected_brand, selected_presentation){
      var order_item = {
        serial: selected_product.serial,
        title: selected_product.title,
        amount: amount_chosen,
        brand: selected_brand,
        presentation: selected_presentation,
        price: selected_product.title.length * 1000 * amount_chosen
      };
      $scope.order_items.push(order_item);
      $scope.total = parseInt($scope.total) + parseInt(order_item.price);

    }

    $scope.changeView = function(view){
      $location.path(view);
    };

    $scope.selectTab = function(tab){
      $scope.tab = tab;
    };

    $scope.isSelectedTab = function(tab){
      return $scope.tab === tab;
    };

    $scope.selectProduct = function(product){
      $scope.selected_product = product;
    };

    $scope.isProductSelected = function(product){
      return $scope.selected_product === product;
    };

    $scope.activeWindow();
  });

})();
