export function headerElementDirective() {
    return {
        template: `
        <div ng-controller="headerElementController">
            <nav-element list="links"></nav-element>
        </div>
        `,
        restrict: 'E',
        link: function ($scope, $element, $attr) {
            $scope.links = [
                {name: 'vk.com', website: 'https://vk.com/'},
                {name: 'facebook.com', website: 'https://facebook.com'},
                {name: 'linkedin.com', website: 'https://linkedin.com'},
                {name: 'instagram.com', website: 'https://instagram.com'}
            ];
        }
    }
}