angular.module("currencyApp").directive("histoElem",function(){
	return {
		restrict:"A",
		templateUrl:"ex5-currency/templates/v_histo.html"
	}
});

angular.module("currencyApp").directive('focusMe', function() {
	  return {
		    scope: { trigger: '@focusMe' },
		    link: function(scope, element) {
		      scope.$watch('trigger', function(value) {
		        if(value=="true") {
		            element[0].focus();
		            scope.trigger = false;
		        }
		      });
		    }
		  };
		});