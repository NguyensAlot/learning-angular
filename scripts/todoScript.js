// variable containing angular module
var todoListApp = angular.module("MyTodoList", []);

todoListApp.controller("todoControl", function($scope) {
    // create a list
    $scope.todoList = [];
    $scope.taskNumber = 0;
    
    // function for adding to list
    $scope.todoAdd = function() {
        // double quotes aren't required
        if ($scope.todoTask != "")
        {
            $scope.todoList.push({"todoNum": ++$scope.taskNumber, "todoText": $scope.todoTask, done: false});
            $scope.todoTask = "";
        }
    }
    
    // function for removing selected tasks
    $scope.todoRemove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(task) {
            if (!task.done) $scope.todoList.push(task);
        })
    }
    
    // function to empty list
    $scope.clearAll = function() {
        $scope.todoList = [];
        $scope.taskNumber = 0;
    }
})