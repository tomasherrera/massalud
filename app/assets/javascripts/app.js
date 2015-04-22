(function() {
  var app = angular.module('massalud', ["ngResource", 'ngRoute', 'ng-rails-csrf', 'templates']);

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
    $scope.tab = 1;
    $scope.selected_product = null;

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
