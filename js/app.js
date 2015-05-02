var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
  $.scope.todos = [
    'Complete weekend challenge', 
    'Drink some booze', 
    'Party!'
  ];
});
