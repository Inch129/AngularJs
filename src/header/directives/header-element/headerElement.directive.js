export function headerElementDirective() {
    return {
        template: `
       <nav-element list="links"></nav-element>
        `,
        restrict: 'E',
        link: function ($scope, $element, $attr) {
            $scope.links = [
                {name: 'vk.com', website: 'https://vk.com/'},
                {name: 'facebook.com', website: 'facebook.com'},
                {name: 'linkedin.com', website: 'linkedin.com'},
                {name: 'instagram.com', website: 'instagram.com'}
            ];
        }
    }
}