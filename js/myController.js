// JavaScript Document
app.controller("myController", function($scope){
});

app.controller("myController2", function($scope){
	$scope.todo='';
	$scope.list = ['Learn Angular'];
	$scope.addToList = function(){
		$scope.list.push($scope.todo);
	}
});