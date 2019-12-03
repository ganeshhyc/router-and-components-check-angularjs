app.controller("landingCtrl",function($scope,$http){
    $scope.city = {};
    $scope.country = '';
    $scope.countryList  = countries;
    $scope.checkW = function(city){
        if(city!==undefined)
        $http.get("http://api.openweathermap.org/data/2.5/find?q="+city+"&appid=f18817a8b4022410d79d5adbd5d89746").
        then(function successCallback(response){
            $scope.city[city] = response.data;
        },
        function errorCallback(response){
            // 
        })
    }
    $scope.setCountry = function(country){
        $scope.country = country;
        $scope.city = {};

    }
})