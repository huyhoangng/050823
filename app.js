var app= angular.module("myApp",[]);
app.controller("myCtrl", function($scope){
    console.log("My controller.....");

    $scope.users= [
        {name: "Hoang", email: "huyhoang123@gmail.com",fullnam:"Nguyen Huy Hoang"},
        {name: "HoangHuy", email: "huyhoang@gmail.com",fullnam:"Hoang Beo"},
        {name: "CodeLean", email: "codelean@gmail.com",fullnam:"CodeLean.vn"}
    ];
    $scope.addUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added successfully";
    };
    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
    };
    $scope.editUser = function(){
        $scope.message = "User Edited successfully";
    };
    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser));
        $scope.message = "User Deleted successfully";
    };
    $scope.clearMessage = function(){
        $scope.message= "";
    };
});