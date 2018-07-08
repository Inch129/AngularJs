export function navElementDirective() {
    return {
        template: `
        <ul>
            <li ng-repeat="link in links">
                <a ng-href="{{link.website}}">{{link.name}}</a>
            </li>
        </ul>
        `,
        restrict: 'E',
        $scope: {
          list: '='
        },
        link: function ($scope, $element, $attr) {

        }
    }
}