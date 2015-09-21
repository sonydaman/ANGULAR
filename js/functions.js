jquery(function () {
  jquery('[data-toggle="popover"]').popover()
})


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});


app.controller('personCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});



app.controller('customersCtrl', function($scope, $http) {
	
	var req = {
 method: 'GET',
 url: "http://rawgit.com/sonydaman/ANGULAR/master/data/text.json",
 headers: {
   'Content-Type': undefined
 },
 data: { test: 'test' }
}
	
	
	
    $http(req)//.get
	//$http.get("data/text.json")
	.success(function(response,d) {
		console.log(d);
		
		$scope.names = response.records;})
	.error(function(r,d){
		console.log(r);
	})	;
});



app.controller('formCtrl', function($scope) {
    $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});

app.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
});


app.controller('userCtrl', function($scope) {
$scope.fName = '';
$scope.lName = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.users = [
{id:1, fName:'Hege',lName:"Pege" },
{id:2, fName:'Kim',lName:"Pim" },
{id:3, fName:'Sal',lName:"Smith" },
{id:4, fName:'Jack',lName:"Jones" },
{id:5, fName:'John',lName:"Doe" },
{id:6, fName:'Peter',lName:"Pan" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 
$scope.editUser = function(id) {
if (id == 'new') {
  $scope.edit = true;
  $scope.incomplete = true;
  $scope.fName = '';
  $scope.lName = '';
  } else {
  $scope.edit = false;
  $scope.fName = $scope.users[id-1].fName;
  $scope.lName = $scope.users[id-1].lName; 
  }
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('fName',function() {$scope.test();});
$scope.$watch('lName',function() {$scope.test();});

$scope.test = function() {
if ($scope.passw1 !== $scope.passw2) {
  $scope.error = true;
  } else {
  $scope.error = false;
  }
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.fName.length ||
  !$scope.lName.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
    $scope.incomplete = true;
  }
};
})