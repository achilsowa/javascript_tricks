function shareBtnFacebook($rootScope) {
    return {
        restrict:'AE',
        link: function($scope, $element, $attrs){

	    $element.bind('click', function () {
		FB.ui({
		    method: 'share',
		    href: $scope.url || location.href
		});
	    });
        },

        scope: {
            url: '='
        }
    };
}]);
