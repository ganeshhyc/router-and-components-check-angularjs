app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'app/view/landing.html'
    })
    .otherwise({
        redirectTo : '/'
    })

})