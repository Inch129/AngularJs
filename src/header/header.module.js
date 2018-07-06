import {headerElementDirective} from "./directives/header-element/headerElement.directive.js";
import headerElementController from "./directives/header-element/headerElement.controller.js";
export default angular.module("header", [])
	.controller('headerElementController', headerElementController)
    .directive('header-element', headerElementDirective);