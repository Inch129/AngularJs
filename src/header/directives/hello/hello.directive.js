import hello from './hello.controller';

export function helloDirective() {
    return {
        scope: {
          menu: []
        },
        template: `<div>{{hello}}</div>`,
        restrict: 'E',
        link: function ($scope, $element, $attr) {
            $scope.hello = 'Hello';
        }
    }
}