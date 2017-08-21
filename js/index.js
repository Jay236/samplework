  
$(document).ready(function () {
        $("#side").mouseenter(function () {
            $("#mySidenav").css("width", "200px")
        });
        
    });


    $(document).ready(function () {
        $("#mySidenav").mouseleave(function () {
            $("#mySidenav").css("width", "0")
        });
    });



    var app = angular.module("myApp", ["ngRoute"]);
         
       app.config(function($routeProvider) {
        $routeProvider
            
            .when("/", {
                templateUrl: "home.html"
            })
        .when("/home", {
                templateUrl: "home.html"
            })
            .when("/about", {
                templateUrl: "about.html"
            })
            .when("/extras", {
                templateUrl: "extras.html",
                controller: "myCtrl"
            })
            .when("/experience", {
                url:"/experience",
                templateUrl: "experience.html"
            })
            .when("/contact", {
                templateUrl: "contact.html"    
            });

    });

app.controller('myCtrl', function($scope) {
    
  
 $(document).ready(function () {	
	$(".skillbar").skillBars({
		from: 0,
		speed: 3000, 
		interval: 100,
		decimals: 0,
	});
	
});
});
