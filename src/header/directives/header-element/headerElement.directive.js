export function headerElementDirective() {
    return {
        templateUrl: './header/directives/header-element/headerElement.template.html',
        restrict: 'E',
        link: function ($scope, $element, $attr) {
            $scope.links = [
                {name: 'vk.com'},
                {name: 'facebook.com'},
                {name: 'linkedin.com'},
                {name: 'instagram.com'}
            ];
            console.log($scope);
        }
    }
}