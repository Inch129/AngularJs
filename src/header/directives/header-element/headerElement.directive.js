export function headerElementDirective() {
    return {
        template: `
        <ul>
            <li ng-repeat="link in links">
                <a href="#">{{link.name}}</a>
            </li>
        </ul>
        `,
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