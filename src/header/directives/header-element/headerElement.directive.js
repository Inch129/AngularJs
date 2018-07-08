import data from '../../../assets/data';
export function headerElementDirective() {
    return {
        template: `
       <nav-element list="data"></nav-element>
        `,
        restrict: 'E',
        link: function ($scope, $element, $attr) {

        }
    }
}