var app = angular.module('adminApp', ['ui.router', 'ngStorage', 'ngSanitize', 'angularGrid']).config(function($stateProvider, $urlRouterProvider) {

    

    });

    app.controller('flickCtrl', ['$http', '$sce', '$scope', '$timeout', function($http, $sce, $scope, $timeout){
      
        $scope.photos = [];
        $scope.search = '';
      
        $scope.searchPhotos = function(searchTxt){
          $http({
            method : "GET",
            url : "http://localhost:3000/photos",
            params: {searchTxt: searchTxt}
        }).then(function(response) {
         
          $timeout(function(){ 
            // Any code in here will automatically have an $scope.apply() run afterwards 
            for(var i = 0; i <= response.data.length; i++){
            $scope.photos.push(response.data[i]);
           
            };
          });
          
          console.log($scope.photos);
        });
        };
        //get photos to load by default
        var getPhotos = function(){
        $http({
          method : "GET",
          url : "http://localhost:3000/photos",
          params: {searchTxt: 'flowers'}
      }).then(function(response) {
        $scope.photos = response.data;
        console.log($scope.photos);
      });
      };
      getPhotos();
      }]);