<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <title>AngularJS App</title>
  <script src="node_modules/angular/angular.js"></script>
  <script src="app.js"></script>
</head>
<body ng-controller="myController">
  <h1>Items</h1>
  <ul>
    <li ng-repeat="item in items">
      {{ item.name }}
      <button ng-click="deleteItem(item)">Delete</button>
    </li>
  </ul>
  <form ng-submit="addItem()">
    <input type="text" ng-model="newItem" placeholder="Enter a new item">
    <button type="submit">Add</button>
  </form>
</body>
</html>
