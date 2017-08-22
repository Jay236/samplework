  
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
                templateUrl: "views/home.html"
            })
        .when("/home", {
                templateUrl: "views/home.html"
            })
            .when("/about", {
                templateUrl: "views/about.html"
            })
            .when("/extras", {
                templateUrl: "views/extras.html",
                controller: "myCtrl"
            })
            .when("/experience", {
                url:"/experience",
                templateUrl: "views/experience.html"
            })
            .when("/contact", {
                templateUrl: "views/contact.html"    
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

