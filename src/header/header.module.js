import {headerElementDirective} from "./directives/header-element/headerElement.directive.js";
import headerElementController from "./directives/header-element/headerElement.controller.js";
import {navElementDirective} from "./directives/nav-element/navElement.directive.js";

export default angular.module("header", [])
	.controller('headerElementController', headerElementController)
    .directive('headerElement', headerElementDirective)
	.directive('navElement', navElementDirective)