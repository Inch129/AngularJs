export default function () {
    return {
        restrict: 'AE',
        scope: {
            color: "@"
        },
        link: function ($scope, $element, attrs) {
            $element.attr('style', `background-color: ${attrs.setColor}`);
        },
    }
}