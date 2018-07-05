import {helloDirective} from "./directives/hello/hello.directive";

export default angular.module("header", [])
    .directive('hello', helloDirective);