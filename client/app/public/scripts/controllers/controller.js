app.controller('photoCtrl', ['$http', '$sce', '$scope', function($http, $sce, $scope){


  $scope.trustSrc = function(src){
    return $sce.trustAsResourceUrl(src);
  }
  $scope.photos = [];
  var getPhotos = function(){
  $http({
    method : "GET",
    url : "http://localhost:3000/photos"
}).then(function(response) {
  $scope.content = response.data;
  $scope.statuscode = response.status;
  $scope.statustext = response.statusText; 
  console.log($scope.content);
});
};
getPhotos();
}]);