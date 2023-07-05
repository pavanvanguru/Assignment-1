angular.module('myApp', [])
  .controller('myController', function ($scope, $http) {
    $scope.items = [];
	$http.get('http://localhost:8080/api/items')
      .then(function (response) {
        $scope.items = response.data;
      });
    $scope.addItem = function () {
      if ($scope.newItem) {
		$http.post('http://localhost:8080/api/items', { name: $scope.newItem }) // Update the POST request URL
          .then(function (response) {
            $scope.items.push(response.data);
            $scope.newItem = '';
          });
      }
    };
    $scope.deleteItem = function (item) {
      $http.delete('/api/items/' + item.id)
        .then(function (response) {
          var index = $scope.items.indexOf(item);
          if (index > -1) {
            $scope.items.splice(index, 1);
          }
        });
    };
  });

