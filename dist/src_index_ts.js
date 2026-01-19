(globalThis["webpackChunk_openmrs_esm_primary_navigation_app"] = globalThis["webpackChunk_openmrs_esm_primary_navigation_app"] || []).push([["src_index_ts"],{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/change-language/change-language-link.scss"
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/change-language/change-language-link.scss ***!
  \*******************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: 4rem;\n  --workspace-header-height: 3rem;\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n/* These color variables will be removed in a future release */\n.-esm-primary-navigation__change-language-link__panelItemContainer___HYYBs a {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.-esm-primary-navigation__change-language-link__panelItemContainer___HYYBs div {\n  display: flex;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/components/change-language/change-language-link.scss"],"names":[],"mappings":"AAkCA,0EAAA;AAoBA;EACE,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,+BAAA;EACA,oGAAA;EACA,2GAAA;ACpDF;;ADgEA,8DAAA;ACtEE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAUJ;AAPE;EACE,aAAA;EACA,mBAAA;AASJ","sourcesContent":["@use '@carbon/layout';\n\n$ui-01: #f4f4f4;\n$ui-02: #ffffff;\n$ui-03: #e0e0e0;\n$ui-04: #8d8d8d;\n$ui-05: #161616;\n$text-02: #525252;\n$text-03: #a8a8a8;\n$ui-background: #ffffff;\n$color-gray-30: #c6c6c6;\n$color-gray-70: #525252;\n$color-gray-100: #161616;\n$color-blue-60-2: #0f62fe;\n$color-blue-10: #edf5ff;\n$color-yellow-50: #feecae;\n$carbon--red-50: #fa4d56;\n$inverse-link: #78a9ff;\n$support-02: #24a148;\n$inverse-support-03: #f1c21b;\n$warning-background: #fff8e1;\n$openmrs-background-grey: #f4f4f4;\n$danger: #da1e28;\n$interactive-01: #0f62fe;\n$field-01: #f4f4f4;\n$grey-2: #e0e0e0;\n$labeldropdown: #c6c6c6;\n\n$brand-primary-10: #d9fbfb;\n$brand-primary-20: #9ef0f0;\n$brand-primary-30: #3ddbd9;\n$brand-primary-40: #08bdba;\n$brand-primary-50: #009d9a;\n\n/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n\n$brand-primary-90: #022b30;\n$brand-primary-100: #081a1c;\n\n@mixin brand-01($property) {\n  #{$property}: #005d5d;\n  #{$property}: var(--brand-01);\n}\n\n@mixin brand-02($property) {\n  #{$property}: #004144;\n  #{$property}: var(--brand-02);\n}\n\n@mixin brand-03($property) {\n  #{$property}: #007d79;\n  #{$property}: var(--brand-03);\n}\n\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: #{layout.$spacing-10};\n  --workspace-header-height: #{layout.$spacing-09};\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n$breakpoint-phone-min: 0px;\n$breakpoint-phone-max: 600px;\n$breakpoint-tablet-min: 601px;\n$breakpoint-tablet-max: 1023px;\n$breakpoint-small-desktop-min: 1024px;\n$breakpoint-small-desktop-max: 1439px;\n$breakpoint-large-desktop-min: 1440px;\n$breakpoint-large-desktop-max: 99999999px;\n\n/* These color variables will be removed in a future release */\n$brand-teal-01: #007d79;\n$brand-01: #005d5d;\n$brand-02: #004144;\n","@use '@openmrs/esm-styleguide/src/vars' as *;\n\n.panelItemContainer {\n  a {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"panelItemContainer": "-esm-primary-navigation__change-language-link__panelItemContainer___HYYBs"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/logo/logo.scss"
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/logo/logo.scss ***!
  \****************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".-esm-primary-navigation__logo__logo___ohiCI {\n  display: flex;\n  align-items: center;\n  width: auto;\n  max-width: 300px;\n  height: 40px;\n  overflow: hidden;\n  position: relative;\n  object-fit: cover;\n  object-position: left;\n}", "",{"version":3,"sources":["webpack://./src/components/logo/logo.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,qBAAA;AACF","sourcesContent":[".logo {\n  display: flex;\n  align-items: center;\n  width: auto;\n  max-width: 300px;\n  height: 40px;\n  overflow: hidden;\n  position: relative;\n  object-fit: cover;\n  object-position: left;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"logo": "-esm-primary-navigation__logo__logo___ohiCI"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/app-menu-panel.scss"
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/app-menu-panel.scss ***!
  \******************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: 4rem;\n  --workspace-header-height: 3rem;\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n/* These color variables will be removed in a future release */\n.-esm-primary-navigation__app-menu-panel__productiveHeading01___tBqf1, .-esm-primary-navigation__app-menu-panel__menuLink___a9Ems a {\n  font-size: var(--cds-heading-compact-01-font-size, 0.875rem);\n  font-weight: var(--cds-heading-compact-01-font-weight, 600);\n  line-height: var(--cds-heading-compact-01-line-height, 1.28572);\n  letter-spacing: var(--cds-heading-compact-01-letter-spacing, 0.16px);\n}\n\n.-esm-primary-navigation__app-menu-panel__headerPanel___MYCrp {\n  height: max-content;\n}\n\n.-esm-primary-navigation__app-menu-panel__primaryNavContainer___NqUGq {\n  height: var(--omrs-topnav-height);\n}\n\n.-esm-primary-navigation__app-menu-panel__menuLink___a9Ems a {\n  display: flex;\n  padding: 1rem;\n  height: 3rem;\n  width: 100%;\n  text-decoration: none;\n  color: #ffffff;\n  background-color: transparent;\n}\n\n.-esm-primary-navigation__app-menu-panel__menuLink___a9Ems a:hover {\n  background-color: #005d5d;\n  background-color: var(--brand-01);\n}\n\n.-esm-primary-navigation__app-menu-panel__externalLinks___nAD1P {\n  border-top: 1px solid;\n  border-top-color: #007d79;\n  border-top-color: var(--brand-03);\n}\n\n.-esm-primary-navigation__app-menu-panel__launchIcon___wn5Qn {\n  margin-left: 0.5rem;\n}\n\n.-esm-primary-navigation__app-menu-panel__headerPanel___MYCrp {\n  width: fit-content;\n}", "",{"version":3,"sources":["webpack://./node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/components/navbar-header-panels/app-menu-panel.scss","webpack://./node_modules/@carbon/type/scss/_styles.scss","webpack://./node_modules/@carbon/layout/scss/generated/_spacing.scss"],"names":[],"mappings":"AAkCA,0EAAA;AAoBA;EACE,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,+BAAA;EACA,oGAAA;EACA,2GAAA;ACpDF;;ADgEA,8DAAA;ACrEA;EC81BI,4DAAA;EAAA,2DAAA;EAAA,+DAAA;EAAA,oEAAA;ADj1BJ;;AATA;EACE,mBAAA;AAYF;;AATA;EACE,iCAAA;AAYF;;AATA;EACE,aAAA;EACA,aEaW;EFZX,YEgCW;EF/BX,WAAA;EACA,qBAAA;EACA,cDnBM;ECoBN,6BAAA;AAYF;;AARA;EDaE,yBAAA;EACA,iCAAA;ACDF;;AATA;EACE,qBAAA;EDkBA,yBAAA;EACA,iCAAA;ACLF;;AAVA;EACE,mBEhBW;AF6Bb;;AAVA;EACE,kBAAA;AAaF","sourcesContent":["@use '@carbon/layout';\n\n$ui-01: #f4f4f4;\n$ui-02: #ffffff;\n$ui-03: #e0e0e0;\n$ui-04: #8d8d8d;\n$ui-05: #161616;\n$text-02: #525252;\n$text-03: #a8a8a8;\n$ui-background: #ffffff;\n$color-gray-30: #c6c6c6;\n$color-gray-70: #525252;\n$color-gray-100: #161616;\n$color-blue-60-2: #0f62fe;\n$color-blue-10: #edf5ff;\n$color-yellow-50: #feecae;\n$carbon--red-50: #fa4d56;\n$inverse-link: #78a9ff;\n$support-02: #24a148;\n$inverse-support-03: #f1c21b;\n$warning-background: #fff8e1;\n$openmrs-background-grey: #f4f4f4;\n$danger: #da1e28;\n$interactive-01: #0f62fe;\n$field-01: #f4f4f4;\n$grey-2: #e0e0e0;\n$labeldropdown: #c6c6c6;\n\n$brand-primary-10: #d9fbfb;\n$brand-primary-20: #9ef0f0;\n$brand-primary-30: #3ddbd9;\n$brand-primary-40: #08bdba;\n$brand-primary-50: #009d9a;\n\n/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n\n$brand-primary-90: #022b30;\n$brand-primary-100: #081a1c;\n\n@mixin brand-01($property) {\n  #{$property}: #005d5d;\n  #{$property}: var(--brand-01);\n}\n\n@mixin brand-02($property) {\n  #{$property}: #004144;\n  #{$property}: var(--brand-02);\n}\n\n@mixin brand-03($property) {\n  #{$property}: #007d79;\n  #{$property}: var(--brand-03);\n}\n\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: #{layout.$spacing-10};\n  --workspace-header-height: #{layout.$spacing-09};\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n$breakpoint-phone-min: 0px;\n$breakpoint-phone-max: 600px;\n$breakpoint-tablet-min: 601px;\n$breakpoint-tablet-max: 1023px;\n$breakpoint-small-desktop-min: 1024px;\n$breakpoint-small-desktop-max: 1439px;\n$breakpoint-large-desktop-min: 1440px;\n$breakpoint-large-desktop-max: 99999999px;\n\n/* These color variables will be removed in a future release */\n$brand-teal-01: #007d79;\n$brand-01: #005d5d;\n$brand-02: #004144;\n","@use '@carbon/layout';\n@use '@carbon/type';\n@use '@openmrs/esm-styleguide/src/vars' as *;\n\n.productiveHeading01 {\n  @include type.type-style('heading-compact-01');\n}\n\n.headerPanel {\n  height: max-content;\n}\n\n.primaryNavContainer {\n  height: var(--omrs-topnav-height);\n}\n\n.menuLink a {\n  display: flex;\n  padding: layout.$spacing-05;\n  height: layout.$spacing-09;\n  width: 100%;\n  text-decoration: none;\n  color: $ui-02;\n  background-color: transparent;\n  @extend .productiveHeading01;\n}\n\n.menuLink a:hover {\n  @include brand-01(background-color);\n}\n\n.externalLinks {\n  border-top: 1px solid;\n  @include brand-03(border-top-color);\n}\n\n.launchIcon {\n  margin-left: layout.$spacing-03;\n}\n\n.headerPanel {\n  width: fit-content;\n}\n","//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n// stylelint-disable number-max-precision\n\n@use 'sass:map';\n@use 'sass:math';\n@use '@carbon/grid/scss/config' as gridconfig;\n@use '@carbon/grid/scss/breakpoint' as grid;\n@use 'prefix' as *;\n@use 'font-family';\n@use 'scale';\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$caption-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$caption-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$label-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$label-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$legal-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$legal-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$helper-text-01: (\n  font-size: scale.type-scale(1),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$helper-text-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-short-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-compact-01: $body-short-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-long-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.42857,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-01: $body-long-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-short-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.375,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-compact-02: $body-short-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-long-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.5,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-02: $body-long-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$code-01: (\n  font-family: font-family.font-family('mono'),\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$code-02: (\n  font-family: font-family.font-family('mono'),\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.42857,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.42857,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-compact-01: $productive-heading-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.5,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.375,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-compact-02: $productive-heading-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-03: (\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.4,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-03: $productive-heading-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-04: (\n  font-size: scale.type-scale(7),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-04: $productive-heading-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-05: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.25,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-05: $productive-heading-05 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-06: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  // Extra digit needed for precision in Chrome\n  line-height: 1.199,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-06: $productive-heading-06 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-07: (\n  font-size: scale.type-scale(12),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-07: $productive-heading-07 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-01: $heading-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-02: $heading-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-03: (\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.4,\n  letter-spacing: 0,\n  breakpoints: (\n    xlg: (\n      font-size: scale.type-scale(5),\n      line-height: 1.4,\n    ),\n    max: (\n      font-size: scale.type-scale(6),\n      line-height: 1.334,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-03: $expressive-heading-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-04: (\n  font-size: scale.type-scale(7),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0,\n  breakpoints: (\n    xlg: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n      font-weight: font-family.font-weight('regular'),\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      font-weight: font-family.font-weight('regular'),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-04: $expressive-heading-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-05: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      font-weight: font-family.font-weight('light'),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-05: $expressive-heading-05 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-06: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-06: $expressive-heading-06 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-paragraph-01: (\n  font-size: scale.type-scale(6),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.334,\n  letter-spacing: 0,\n  breakpoints: (\n    lg: (\n      font-size: scale.type-scale(7),\n      line-height: 1.28572,\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n    ),\n  ),\n);\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-paragraph-01: $expressive-paragraph-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$quotation-01: (\n  font-family: font-family.font-family('serif'),\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.3,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(5),\n    ),\n    lg: (\n      font-size: scale.type-scale(6),\n      line-height: 1.334,\n    ),\n    xlg: (\n      font-size: scale.type-scale(7),\n      line-height: 1.28572,\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-quotation-01: $quotation-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$quotation-02: (\n  font-family: font-family.font-family('serif'),\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-quotation-02: $quotation-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-01: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(10),\n    ),\n    lg: (\n      font-size: scale.type-scale(12),\n    ),\n    xlg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-01: $display-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-02: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(10),\n    ),\n    lg: (\n      font-size: scale.type-scale(12),\n    ),\n    xlg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.16,\n    ),\n    max: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-02: $display-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-03: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(12),\n      line-height: 1.18,\n    ),\n    lg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.16,\n      letter-spacing: -0.64px,\n    ),\n    xlg: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n      letter-spacing: -0.64px,\n    ),\n    max: (\n      font-size: scale.type-scale(16),\n      line-height: 1.11,\n      letter-spacing: -0.96px,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-03: $display-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-04: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(14),\n      line-height: 1.15,\n    ),\n    lg: (\n      font-size: scale.type-scale(17),\n      line-height: 1.11,\n      letter-spacing: -0.64px,\n    ),\n    xlg: (\n      font-size: scale.type-scale(20),\n      line-height: 1.07,\n      letter-spacing: -0.64px,\n    ),\n    max: (\n      font-size: scale.type-scale(23),\n      line-height: 1.05,\n      letter-spacing: -0.96px,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-04: $display-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$tokens: (\n  caption-01: $caption-01,\n  caption-02: $caption-02,\n  label-01: $label-01,\n  label-02: $label-02,\n  helper-text-01: $helper-text-01,\n  helper-text-02: $helper-text-02,\n  body-short-01: $body-short-01,\n  body-short-02: $body-short-02,\n  body-long-01: $body-long-01,\n  body-long-02: $body-long-02,\n  code-01: $code-01,\n  code-02: $code-02,\n  heading-01: $heading-01,\n  heading-02: $heading-02,\n  productive-heading-01: $productive-heading-01,\n  productive-heading-02: $productive-heading-02,\n  productive-heading-03: $productive-heading-03,\n  productive-heading-04: $productive-heading-04,\n  productive-heading-05: $productive-heading-05,\n  productive-heading-06: $productive-heading-06,\n  productive-heading-07: $productive-heading-07,\n  expressive-paragraph-01: $expressive-paragraph-01,\n  expressive-heading-01: $expressive-heading-01,\n  expressive-heading-02: $expressive-heading-02,\n  expressive-heading-03: $expressive-heading-03,\n  expressive-heading-04: $expressive-heading-04,\n  expressive-heading-05: $expressive-heading-05,\n  expressive-heading-06: $expressive-heading-06,\n  quotation-01: $quotation-01,\n  quotation-02: $quotation-02,\n  display-01: $display-01,\n  display-02: $display-02,\n  display-03: $display-03,\n  display-04: $display-04,\n  // V11 Tokens\n  legal-01: $legal-01,\n  legal-02: $legal-02,\n  body-compact-01: $body-compact-01,\n  body-compact-02: $body-compact-02,\n  heading-compact-01: $heading-compact-01,\n  heading-compact-02: $heading-compact-02,\n  body-01: $body-01,\n  body-02: $body-02,\n  heading-03: $heading-03,\n  heading-04: $heading-04,\n  heading-05: $heading-05,\n  heading-06: $heading-06,\n  heading-07: $heading-07,\n  fluid-heading-03: $fluid-heading-03,\n  fluid-heading-04: $fluid-heading-04,\n  fluid-heading-05: $fluid-heading-05,\n  fluid-heading-06: $fluid-heading-06,\n  fluid-paragraph-01: $fluid-paragraph-01,\n  fluid-quotation-01: $fluid-quotation-01,\n  fluid-quotation-02: $fluid-quotation-02,\n  fluid-display-01: $fluid-display-01,\n  fluid-display-02: $fluid-display-02,\n  fluid-display-03: $fluid-display-03,\n  fluid-display-04: $fluid-display-04,\n) !default;\n\n/// @param {Map} $map\n/// @access public\n/// @group @carbon/type\n@mixin properties($map) {\n  @each $name, $value in $map {\n    #{$name}: $value;\n  }\n}\n\n/// @param {Number} $value - Number with units\n/// @return {Number} Without units\n/// @access public\n/// @group @carbon/type\n@function strip-unit($value) {\n  @return math.div($value, $value * 0 + 1);\n}\n\n/// This helper includes fluid type styles for the given token value. Fluid type\n/// means that the `font-size` is computed using `calc()` in order to be\n/// determined by the screen size instead of a breakpoint. As a result, fluid\n/// styles should be used with caution in fixed width contexts.\n///\n/// In addition, we make use of %-based line-heights so that the line-height of\n/// each type style is computed correctly due to the dynamic nature of the\n/// `font-size`.\n///\n/// Most of the logic for this work comes from CSS Tricks:\n/// https://css-tricks.com/snippets/css/fluid-typography/\n///\n/// @param {Map} $type-styles - The value of a given type token\n/// @param {Map} $breakpoints [$grid-breakpoints] - Custom breakpoints to use\n/// @access public\n/// @group @carbon/type\n@mixin fluid-type($type-styles, $breakpoints: gridconfig.$grid-breakpoints) {\n  // Include the initial styles for the given token by default without any\n  // media query guard. This includes `font-size` as a fallback in the case\n  // that a browser does not support `calc()`\n  @include properties(map.remove($type-styles, breakpoints));\n  // We also need to include the `sm` styles by default since they don't\n  // appear in the fluid styles for tokens\n  @include fluid-type-size($type-styles, sm, $breakpoints);\n\n  // Finally, we need to go through all the breakpoints defined in the type\n  // token and apply the properties and fluid type size for that given\n  // breakpoint\n  @each $name, $values in map.get($type-styles, breakpoints) {\n    @include grid.breakpoint($name) {\n      @include properties($values);\n      @include fluid-type-size($type-styles, $name, $breakpoints);\n    }\n  }\n}\n\n/// Computes the fluid `font-size` for a given type style and breakpoint\n/// @param {Map} $type-styles - The styles for a given token\n/// @param {String} $name - The name of the breakpoint to which we apply the fluid\n/// @param {Map} $breakpoints [$grid-breakpoints] - The breakpoints for the grid system\n/// @access public\n/// @group @carbon/type\n@mixin fluid-type-size(\n  $type-styles,\n  $name,\n  $breakpoints: gridconfig.$grid-breakpoints\n) {\n  // Get the information about the breakpoint we're currently working in. Useful\n  // for getting initial width information\n  $breakpoint: map.get($breakpoints, $name);\n\n  // Our fluid styles are captured under the 'breakpoints' property in our type\n  // styles map. These define what values to treat as `max-` variables below\n  $fluid-sizes: map.get($type-styles, breakpoints);\n  $fluid-breakpoint: ();\n  // Special case for `sm` because the styles for small are on the type style\n  // directly\n  @if $name == sm {\n    $fluid-breakpoint: map.remove($type-styles, breakpoints);\n  } @else {\n    $fluid-breakpoint: map.get($fluid-sizes, $name);\n  }\n\n  // Initialize our font-sizes to the default size for the type style\n  $max-font-size: map.get($type-styles, font-size);\n  $min-font-size: map.get($type-styles, font-size);\n  @if map.has-key($fluid-breakpoint, font-size) {\n    $min-font-size: map.get($fluid-breakpoint, font-size);\n  }\n\n  // Initialize our min and max width to the width of the current breakpoint\n  $max-vw: map.get($breakpoint, width);\n  $min-vw: map.get($breakpoint, width);\n\n  // We can use `breakpoint-next` to see if there is another breakpoint we can\n  // use to update `max-font-size` and `max-vw` with larger values\n  $next-breakpoint-available: grid.breakpoint-next($name, $breakpoints);\n  $next-fluid-breakpoint-name: null;\n\n  // We need to figure out what the next available fluid breakpoint is for our\n  // given $type-styles. In this loop we try and iterate through breakpoints\n  // until we either manually set $next-breakpoint-available to null or\n  // `breakpoint-next` returns null.\n  @while $next-breakpoint-available {\n    @if map.has-key($fluid-sizes, $next-breakpoint-available) {\n      $next-fluid-breakpoint-name: $next-breakpoint-available;\n      $next-breakpoint-available: null;\n    } @else {\n      $next-breakpoint-available: grid.breakpoint-next(\n        $next-breakpoint-available,\n        $breakpoints\n      );\n    }\n  }\n\n  // If we have found the next available fluid breakpoint name, then we know\n  // that we have values that we can use to set max-font-size and max-vw as both\n  // values derive from the next breakpoint\n  @if $next-fluid-breakpoint-name {\n    $next-fluid-breakpoint: map.get($breakpoints, $next-fluid-breakpoint-name);\n    $max-font-size: map.get(\n      map.get($fluid-sizes, $next-fluid-breakpoint-name),\n      font-size\n    );\n    $max-vw: map.get($next-fluid-breakpoint, width);\n\n    // prettier-ignore\n    font-size: calc(#{$min-font-size} +\n      #{strip-unit($max-font-size - $min-font-size)} *\n      ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)})\n    );\n  } @else {\n    // Otherwise, just default to setting the font size found from the type\n    // style or the given fluid breakpoint in the type style\n    font-size: $min-font-size;\n  }\n}\n\n// TODO move following variable and `custom-property` mixin into shared file for\n// both `@carbon/type` and `@carbon/themes`\n\n/// @access private\n/// @group @carbon/type\n@mixin custom-properties($name, $value) {\n  @each $property, $value in $value {\n    #{$property}: var(\n      --#{$custom-property-prefix}-#{$name}-#{$property},\n      #{$value}\n    );\n  }\n}\n\n/// Helper mixin to include the styles for a given token in any selector in your\n/// project. Also includes an optional fluid option that will enable fluid\n/// styles for the token if they are defined. Fluid styles will cause the\n/// token's font-size to be computed based on the viewport size. As a result, use\n/// with caution in fixed contexts.\n/// @param {String} $name - The name of the token to get the styles for\n/// @param {Boolean} $fluid [false] - Specify whether to include fluid styles for the\n/// @param {Map} $breakpoints [$grid-breakpoints] - Provide a custom breakpoint map to use\n/// @access public\n/// @group @carbon/type\n@mixin type-style(\n  $name,\n  $fluid: false,\n  $breakpoints: gridconfig.$grid-breakpoints\n) {\n  @if not map.has-key($tokens, $name) {\n    @error 'Unable to find a token with the name: `#{$name}`';\n  }\n\n  $token: map.get($tokens, $name);\n\n  // If $fluid is set to true and the token has breakpoints defined for fluid\n  // styles, delegate to the fluid-type helper for the given token\n  @if $fluid == true and map.has-key($token, 'breakpoints') {\n    @include fluid-type($token, $breakpoints);\n  } @else {\n    @include custom-properties($name, $token);\n  }\n}\n","// Code generated by @carbon/layout. DO NOT EDIT.\n//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-01: 0.125rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-02: 0.25rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-03: 0.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-04: 0.75rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-05: 1rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-06: 1.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-07: 2rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-08: 2.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-09: 3rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-10: 4rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-11: 5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-12: 6rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-13: 10rem !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/layout\n$spacing: (\n  spacing-01: $spacing-01,\n  spacing-02: $spacing-02,\n  spacing-03: $spacing-03,\n  spacing-04: $spacing-04,\n  spacing-05: $spacing-05,\n  spacing-06: $spacing-06,\n  spacing-07: $spacing-07,\n  spacing-08: $spacing-08,\n  spacing-09: $spacing-09,\n  spacing-10: $spacing-10,\n  spacing-11: $spacing-11,\n  spacing-12: $spacing-12,\n  spacing-13: $spacing-13,\n);\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"productiveHeading01": "-esm-primary-navigation__app-menu-panel__productiveHeading01___tBqf1",
	"menuLink": "-esm-primary-navigation__app-menu-panel__menuLink___a9Ems",
	"headerPanel": "-esm-primary-navigation__app-menu-panel__headerPanel___MYCrp",
	"primaryNavContainer": "-esm-primary-navigation__app-menu-panel__primaryNavContainer___NqUGq",
	"externalLinks": "-esm-primary-navigation__app-menu-panel__externalLinks___nAD1P",
	"launchIcon": "-esm-primary-navigation__app-menu-panel__launchIcon___wn5Qn"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/notifications-menu.panel.scss"
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/notifications-menu.panel.scss ***!
  \****************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: 4rem;\n  --workspace-header-height: 3rem;\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n/* These color variables will be removed in a future release */\n.-esm-primary-navigation__notifications-menu-panel__heading___lE9oV {\n  font-size: var(--cds-heading-03-font-size, 1.25rem);\n  font-weight: var(--cds-heading-03-font-weight, 400);\n  line-height: var(--cds-heading-03-line-height, 1.4);\n  letter-spacing: var(--cds-heading-03-letter-spacing, 0);\n  color: #ffffff;\n  margin: 1rem;\n}", "",{"version":3,"sources":["webpack://./node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/components/navbar-header-panels/notifications-menu.panel.scss","webpack://./node_modules/@carbon/type/scss/_styles.scss","webpack://./node_modules/@carbon/layout/scss/generated/_spacing.scss"],"names":[],"mappings":"AAkCA,0EAAA;AAoBA;EACE,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,+BAAA;EACA,oGAAA;EACA,2GAAA;ACpDF;;ADgEA,8DAAA;ACrEA;EC81BI,mDAAA;EAAA,mDAAA;EAAA,mDAAA;EAAA,uDAAA;ED51BF,cDGc;ECFd,YEwBW;AFZb","sourcesContent":["@use '@carbon/layout';\n\n$ui-01: #f4f4f4;\n$ui-02: #ffffff;\n$ui-03: #e0e0e0;\n$ui-04: #8d8d8d;\n$ui-05: #161616;\n$text-02: #525252;\n$text-03: #a8a8a8;\n$ui-background: #ffffff;\n$color-gray-30: #c6c6c6;\n$color-gray-70: #525252;\n$color-gray-100: #161616;\n$color-blue-60-2: #0f62fe;\n$color-blue-10: #edf5ff;\n$color-yellow-50: #feecae;\n$carbon--red-50: #fa4d56;\n$inverse-link: #78a9ff;\n$support-02: #24a148;\n$inverse-support-03: #f1c21b;\n$warning-background: #fff8e1;\n$openmrs-background-grey: #f4f4f4;\n$danger: #da1e28;\n$interactive-01: #0f62fe;\n$field-01: #f4f4f4;\n$grey-2: #e0e0e0;\n$labeldropdown: #c6c6c6;\n\n$brand-primary-10: #d9fbfb;\n$brand-primary-20: #9ef0f0;\n$brand-primary-30: #3ddbd9;\n$brand-primary-40: #08bdba;\n$brand-primary-50: #009d9a;\n\n/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n\n$brand-primary-90: #022b30;\n$brand-primary-100: #081a1c;\n\n@mixin brand-01($property) {\n  #{$property}: #005d5d;\n  #{$property}: var(--brand-01);\n}\n\n@mixin brand-02($property) {\n  #{$property}: #004144;\n  #{$property}: var(--brand-02);\n}\n\n@mixin brand-03($property) {\n  #{$property}: #007d79;\n  #{$property}: var(--brand-03);\n}\n\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: #{layout.$spacing-10};\n  --workspace-header-height: #{layout.$spacing-09};\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n$breakpoint-phone-min: 0px;\n$breakpoint-phone-max: 600px;\n$breakpoint-tablet-min: 601px;\n$breakpoint-tablet-max: 1023px;\n$breakpoint-small-desktop-min: 1024px;\n$breakpoint-small-desktop-max: 1439px;\n$breakpoint-large-desktop-min: 1440px;\n$breakpoint-large-desktop-max: 99999999px;\n\n/* These color variables will be removed in a future release */\n$brand-teal-01: #007d79;\n$brand-01: #005d5d;\n$brand-02: #004144;\n","@use '@carbon/layout';\n@use '@carbon/type';\n@use '@openmrs/esm-styleguide/src/vars' as *;\n\n.heading {\n  @include type.type-style('heading-03');\n  color: $ui-background;\n  margin: layout.$spacing-05;\n}\n","//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n// stylelint-disable number-max-precision\n\n@use 'sass:map';\n@use 'sass:math';\n@use '@carbon/grid/scss/config' as gridconfig;\n@use '@carbon/grid/scss/breakpoint' as grid;\n@use 'prefix' as *;\n@use 'font-family';\n@use 'scale';\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$caption-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$caption-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$label-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$label-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$legal-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$legal-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$helper-text-01: (\n  font-size: scale.type-scale(1),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$helper-text-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-short-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-compact-01: $body-short-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-long-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.42857,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-01: $body-long-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-short-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.375,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-compact-02: $body-short-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-long-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.5,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-02: $body-long-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$code-01: (\n  font-family: font-family.font-family('mono'),\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$code-02: (\n  font-family: font-family.font-family('mono'),\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.42857,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.42857,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-compact-01: $productive-heading-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.5,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.375,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-compact-02: $productive-heading-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-03: (\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.4,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-03: $productive-heading-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-04: (\n  font-size: scale.type-scale(7),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-04: $productive-heading-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-05: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.25,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-05: $productive-heading-05 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-06: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  // Extra digit needed for precision in Chrome\n  line-height: 1.199,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-06: $productive-heading-06 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-07: (\n  font-size: scale.type-scale(12),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-07: $productive-heading-07 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-01: $heading-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-02: $heading-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-03: (\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.4,\n  letter-spacing: 0,\n  breakpoints: (\n    xlg: (\n      font-size: scale.type-scale(5),\n      line-height: 1.4,\n    ),\n    max: (\n      font-size: scale.type-scale(6),\n      line-height: 1.334,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-03: $expressive-heading-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-04: (\n  font-size: scale.type-scale(7),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0,\n  breakpoints: (\n    xlg: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n      font-weight: font-family.font-weight('regular'),\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      font-weight: font-family.font-weight('regular'),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-04: $expressive-heading-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-05: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      font-weight: font-family.font-weight('light'),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-05: $expressive-heading-05 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-06: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-06: $expressive-heading-06 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-paragraph-01: (\n  font-size: scale.type-scale(6),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.334,\n  letter-spacing: 0,\n  breakpoints: (\n    lg: (\n      font-size: scale.type-scale(7),\n      line-height: 1.28572,\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n    ),\n  ),\n);\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-paragraph-01: $expressive-paragraph-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$quotation-01: (\n  font-family: font-family.font-family('serif'),\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.3,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(5),\n    ),\n    lg: (\n      font-size: scale.type-scale(6),\n      line-height: 1.334,\n    ),\n    xlg: (\n      font-size: scale.type-scale(7),\n      line-height: 1.28572,\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-quotation-01: $quotation-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$quotation-02: (\n  font-family: font-family.font-family('serif'),\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-quotation-02: $quotation-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-01: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(10),\n    ),\n    lg: (\n      font-size: scale.type-scale(12),\n    ),\n    xlg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-01: $display-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-02: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(10),\n    ),\n    lg: (\n      font-size: scale.type-scale(12),\n    ),\n    xlg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.16,\n    ),\n    max: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-02: $display-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-03: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(12),\n      line-height: 1.18,\n    ),\n    lg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.16,\n      letter-spacing: -0.64px,\n    ),\n    xlg: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n      letter-spacing: -0.64px,\n    ),\n    max: (\n      font-size: scale.type-scale(16),\n      line-height: 1.11,\n      letter-spacing: -0.96px,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-03: $display-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-04: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(14),\n      line-height: 1.15,\n    ),\n    lg: (\n      font-size: scale.type-scale(17),\n      line-height: 1.11,\n      letter-spacing: -0.64px,\n    ),\n    xlg: (\n      font-size: scale.type-scale(20),\n      line-height: 1.07,\n      letter-spacing: -0.64px,\n    ),\n    max: (\n      font-size: scale.type-scale(23),\n      line-height: 1.05,\n      letter-spacing: -0.96px,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-04: $display-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$tokens: (\n  caption-01: $caption-01,\n  caption-02: $caption-02,\n  label-01: $label-01,\n  label-02: $label-02,\n  helper-text-01: $helper-text-01,\n  helper-text-02: $helper-text-02,\n  body-short-01: $body-short-01,\n  body-short-02: $body-short-02,\n  body-long-01: $body-long-01,\n  body-long-02: $body-long-02,\n  code-01: $code-01,\n  code-02: $code-02,\n  heading-01: $heading-01,\n  heading-02: $heading-02,\n  productive-heading-01: $productive-heading-01,\n  productive-heading-02: $productive-heading-02,\n  productive-heading-03: $productive-heading-03,\n  productive-heading-04: $productive-heading-04,\n  productive-heading-05: $productive-heading-05,\n  productive-heading-06: $productive-heading-06,\n  productive-heading-07: $productive-heading-07,\n  expressive-paragraph-01: $expressive-paragraph-01,\n  expressive-heading-01: $expressive-heading-01,\n  expressive-heading-02: $expressive-heading-02,\n  expressive-heading-03: $expressive-heading-03,\n  expressive-heading-04: $expressive-heading-04,\n  expressive-heading-05: $expressive-heading-05,\n  expressive-heading-06: $expressive-heading-06,\n  quotation-01: $quotation-01,\n  quotation-02: $quotation-02,\n  display-01: $display-01,\n  display-02: $display-02,\n  display-03: $display-03,\n  display-04: $display-04,\n  // V11 Tokens\n  legal-01: $legal-01,\n  legal-02: $legal-02,\n  body-compact-01: $body-compact-01,\n  body-compact-02: $body-compact-02,\n  heading-compact-01: $heading-compact-01,\n  heading-compact-02: $heading-compact-02,\n  body-01: $body-01,\n  body-02: $body-02,\n  heading-03: $heading-03,\n  heading-04: $heading-04,\n  heading-05: $heading-05,\n  heading-06: $heading-06,\n  heading-07: $heading-07,\n  fluid-heading-03: $fluid-heading-03,\n  fluid-heading-04: $fluid-heading-04,\n  fluid-heading-05: $fluid-heading-05,\n  fluid-heading-06: $fluid-heading-06,\n  fluid-paragraph-01: $fluid-paragraph-01,\n  fluid-quotation-01: $fluid-quotation-01,\n  fluid-quotation-02: $fluid-quotation-02,\n  fluid-display-01: $fluid-display-01,\n  fluid-display-02: $fluid-display-02,\n  fluid-display-03: $fluid-display-03,\n  fluid-display-04: $fluid-display-04,\n) !default;\n\n/// @param {Map} $map\n/// @access public\n/// @group @carbon/type\n@mixin properties($map) {\n  @each $name, $value in $map {\n    #{$name}: $value;\n  }\n}\n\n/// @param {Number} $value - Number with units\n/// @return {Number} Without units\n/// @access public\n/// @group @carbon/type\n@function strip-unit($value) {\n  @return math.div($value, $value * 0 + 1);\n}\n\n/// This helper includes fluid type styles for the given token value. Fluid type\n/// means that the `font-size` is computed using `calc()` in order to be\n/// determined by the screen size instead of a breakpoint. As a result, fluid\n/// styles should be used with caution in fixed width contexts.\n///\n/// In addition, we make use of %-based line-heights so that the line-height of\n/// each type style is computed correctly due to the dynamic nature of the\n/// `font-size`.\n///\n/// Most of the logic for this work comes from CSS Tricks:\n/// https://css-tricks.com/snippets/css/fluid-typography/\n///\n/// @param {Map} $type-styles - The value of a given type token\n/// @param {Map} $breakpoints [$grid-breakpoints] - Custom breakpoints to use\n/// @access public\n/// @group @carbon/type\n@mixin fluid-type($type-styles, $breakpoints: gridconfig.$grid-breakpoints) {\n  // Include the initial styles for the given token by default without any\n  // media query guard. This includes `font-size` as a fallback in the case\n  // that a browser does not support `calc()`\n  @include properties(map.remove($type-styles, breakpoints));\n  // We also need to include the `sm` styles by default since they don't\n  // appear in the fluid styles for tokens\n  @include fluid-type-size($type-styles, sm, $breakpoints);\n\n  // Finally, we need to go through all the breakpoints defined in the type\n  // token and apply the properties and fluid type size for that given\n  // breakpoint\n  @each $name, $values in map.get($type-styles, breakpoints) {\n    @include grid.breakpoint($name) {\n      @include properties($values);\n      @include fluid-type-size($type-styles, $name, $breakpoints);\n    }\n  }\n}\n\n/// Computes the fluid `font-size` for a given type style and breakpoint\n/// @param {Map} $type-styles - The styles for a given token\n/// @param {String} $name - The name of the breakpoint to which we apply the fluid\n/// @param {Map} $breakpoints [$grid-breakpoints] - The breakpoints for the grid system\n/// @access public\n/// @group @carbon/type\n@mixin fluid-type-size(\n  $type-styles,\n  $name,\n  $breakpoints: gridconfig.$grid-breakpoints\n) {\n  // Get the information about the breakpoint we're currently working in. Useful\n  // for getting initial width information\n  $breakpoint: map.get($breakpoints, $name);\n\n  // Our fluid styles are captured under the 'breakpoints' property in our type\n  // styles map. These define what values to treat as `max-` variables below\n  $fluid-sizes: map.get($type-styles, breakpoints);\n  $fluid-breakpoint: ();\n  // Special case for `sm` because the styles for small are on the type style\n  // directly\n  @if $name == sm {\n    $fluid-breakpoint: map.remove($type-styles, breakpoints);\n  } @else {\n    $fluid-breakpoint: map.get($fluid-sizes, $name);\n  }\n\n  // Initialize our font-sizes to the default size for the type style\n  $max-font-size: map.get($type-styles, font-size);\n  $min-font-size: map.get($type-styles, font-size);\n  @if map.has-key($fluid-breakpoint, font-size) {\n    $min-font-size: map.get($fluid-breakpoint, font-size);\n  }\n\n  // Initialize our min and max width to the width of the current breakpoint\n  $max-vw: map.get($breakpoint, width);\n  $min-vw: map.get($breakpoint, width);\n\n  // We can use `breakpoint-next` to see if there is another breakpoint we can\n  // use to update `max-font-size` and `max-vw` with larger values\n  $next-breakpoint-available: grid.breakpoint-next($name, $breakpoints);\n  $next-fluid-breakpoint-name: null;\n\n  // We need to figure out what the next available fluid breakpoint is for our\n  // given $type-styles. In this loop we try and iterate through breakpoints\n  // until we either manually set $next-breakpoint-available to null or\n  // `breakpoint-next` returns null.\n  @while $next-breakpoint-available {\n    @if map.has-key($fluid-sizes, $next-breakpoint-available) {\n      $next-fluid-breakpoint-name: $next-breakpoint-available;\n      $next-breakpoint-available: null;\n    } @else {\n      $next-breakpoint-available: grid.breakpoint-next(\n        $next-breakpoint-available,\n        $breakpoints\n      );\n    }\n  }\n\n  // If we have found the next available fluid breakpoint name, then we know\n  // that we have values that we can use to set max-font-size and max-vw as both\n  // values derive from the next breakpoint\n  @if $next-fluid-breakpoint-name {\n    $next-fluid-breakpoint: map.get($breakpoints, $next-fluid-breakpoint-name);\n    $max-font-size: map.get(\n      map.get($fluid-sizes, $next-fluid-breakpoint-name),\n      font-size\n    );\n    $max-vw: map.get($next-fluid-breakpoint, width);\n\n    // prettier-ignore\n    font-size: calc(#{$min-font-size} +\n      #{strip-unit($max-font-size - $min-font-size)} *\n      ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)})\n    );\n  } @else {\n    // Otherwise, just default to setting the font size found from the type\n    // style or the given fluid breakpoint in the type style\n    font-size: $min-font-size;\n  }\n}\n\n// TODO move following variable and `custom-property` mixin into shared file for\n// both `@carbon/type` and `@carbon/themes`\n\n/// @access private\n/// @group @carbon/type\n@mixin custom-properties($name, $value) {\n  @each $property, $value in $value {\n    #{$property}: var(\n      --#{$custom-property-prefix}-#{$name}-#{$property},\n      #{$value}\n    );\n  }\n}\n\n/// Helper mixin to include the styles for a given token in any selector in your\n/// project. Also includes an optional fluid option that will enable fluid\n/// styles for the token if they are defined. Fluid styles will cause the\n/// token's font-size to be computed based on the viewport size. As a result, use\n/// with caution in fixed contexts.\n/// @param {String} $name - The name of the token to get the styles for\n/// @param {Boolean} $fluid [false] - Specify whether to include fluid styles for the\n/// @param {Map} $breakpoints [$grid-breakpoints] - Provide a custom breakpoint map to use\n/// @access public\n/// @group @carbon/type\n@mixin type-style(\n  $name,\n  $fluid: false,\n  $breakpoints: gridconfig.$grid-breakpoints\n) {\n  @if not map.has-key($tokens, $name) {\n    @error 'Unable to find a token with the name: `#{$name}`';\n  }\n\n  $token: map.get($tokens, $name);\n\n  // If $fluid is set to true and the token has breakpoints defined for fluid\n  // styles, delegate to the fluid-type helper for the given token\n  @if $fluid == true and map.has-key($token, 'breakpoints') {\n    @include fluid-type($token, $breakpoints);\n  } @else {\n    @include custom-properties($name, $token);\n  }\n}\n","// Code generated by @carbon/layout. DO NOT EDIT.\n//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-01: 0.125rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-02: 0.25rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-03: 0.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-04: 0.75rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-05: 1rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-06: 1.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-07: 2rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-08: 2.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-09: 3rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-10: 4rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-11: 5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-12: 6rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-13: 10rem !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/layout\n$spacing: (\n  spacing-01: $spacing-01,\n  spacing-02: $spacing-02,\n  spacing-03: $spacing-03,\n  spacing-04: $spacing-04,\n  spacing-05: $spacing-05,\n  spacing-06: $spacing-06,\n  spacing-07: $spacing-07,\n  spacing-08: $spacing-08,\n  spacing-09: $spacing-09,\n  spacing-10: $spacing-10,\n  spacing-11: $spacing-11,\n  spacing-12: $spacing-12,\n  spacing-13: $spacing-13,\n);\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"heading": "-esm-primary-navigation__notifications-menu-panel__heading___lE9oV"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/user-menu-panel.scss"
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/user-menu-panel.scss ***!
  \*******************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: 4rem;\n  --workspace-header-height: 3rem;\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n/* These color variables will be removed in a future release */\n.-esm-primary-navigation__user-menu-panel__bodyLong01___oLvR5, .-esm-primary-navigation__user-menu-panel__userPanelSwitcher___7VTNH .cds--switcher__item-link {\n  font-size: var(--cds-body-01-font-size, 0.875rem);\n  font-weight: var(--cds-body-01-font-weight, 400);\n  line-height: var(--cds-body-01-line-height, 1.42857);\n  letter-spacing: var(--cds-body-01-letter-spacing, 0.16px);\n}\n\n.-esm-primary-navigation__user-menu-panel__headerPanel___2HerO {\n  height: max-content;\n}\n\n.-esm-primary-navigation__user-menu-panel__primaryNavContainer___uYItf {\n  height: var(--omrs-topnav-height);\n}\n\n.-esm-primary-navigation__user-menu-panel__headerPanel___2HerO {\n  transition: none;\n}\n\n.-esm-primary-navigation__user-menu-panel__fullWidth___-RAMU {\n  width: 100%;\n}\n\n.-esm-primary-navigation__user-menu-panel__userPanelSwitcher___7VTNH {\n  padding-top: 1rem;\n  align-items: start;\n}\n\n.-esm-primary-navigation__user-menu-panel__userPanelSwitcher___7VTNH .cds--switcher__item {\n  height: 3rem;\n}\n\n.-esm-primary-navigation__user-menu-panel__userPanelSwitcher___7VTNH .cds--switcher__item:first-child {\n  margin-top: 0;\n}\n\n.-esm-primary-navigation__user-menu-panel__userPanelSwitcher___7VTNH .cds--switcher__item-link {\n  display: flex;\n  align-items: center;\n  color: #f4f4f4;\n  padding: 0;\n  height: 3rem;\n}\n\n.-esm-primary-navigation__user-menu-panel__userPanelSwitcher___7VTNH .cds--switcher__item-link:hover:not(.-esm-primary-navigation__user-menu-panel__cds--switcher__item-link--selected___E2WII) {\n  color: #f4f4f4;\n  background-color: #004144;\n  background-color: var(--brand-02);\n}\n\n.-esm-primary-navigation__user-menu-panel__userPanelSwitcher___7VTNH .cds--switcher__item svg {\n  margin: 0 0.75rem;\n  fill: #f4f4f4;\n  flex-shrink: 0;\n}\n\n.-esm-primary-navigation__user-menu-panel__userPanelSwitcher___7VTNH .cds--switcher__item button {\n  color: #78a9ff;\n}\n\n.-esm-primary-navigation__user-menu-panel__userPanelSwitcher___7VTNH .cds--switcher__item button:hover {\n  background-color: #007d79;\n  background-color: var(--brand-03);\n  color: #78a9ff;\n}", "",{"version":3,"sources":["webpack://./node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/components/navbar-header-panels/user-menu-panel.scss","webpack://./node_modules/@carbon/type/scss/_styles.scss","webpack://./node_modules/@carbon/layout/scss/generated/_spacing.scss"],"names":[],"mappings":"AAkCA,0EAAA;AAoBA;EACE,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,+BAAA;EACA,oGAAA;EACA,2GAAA;ACpDF;;ADgEA,8DAAA;ACrEA;EC81BI,iDAAA;EAAA,gDAAA;EAAA,oDAAA;EAAA,yDAAA;ADj1BJ;;AATA;EACE,mBAAA;AAYF;;AATA;EACE,iCAAA;AAYF;;AATA;EACE,gBAAA;AAYF;;AATA;EACE,WAAA;AAYF;;AATA;EACE,iBEMW;EFLX,kBAAA;AAYF;;AATA;EACE,YEqBW;AFTb;;AATA;EACE,aAAA;AAYF;;AATA;EACE,aAAA;EACA,mBAAA;EACA,cDhBS;ECiBT,UAAA;EACA,YESW;AFGb;;AARA;EACE,cDvBS;EAqBT,yBAAA;EACA,iCAAA;ACcF;;AATA;EACE,iBAAA;EACA,aD7BS;EC8BT,cAAA;AAYF;;AATA;EACE,cDzCa;ACqDf;;AATA;EDXE,yBAAA;EACA,iCAAA;ECYA,cD9Ca;AC2Df","sourcesContent":["@use '@carbon/layout';\n\n$ui-01: #f4f4f4;\n$ui-02: #ffffff;\n$ui-03: #e0e0e0;\n$ui-04: #8d8d8d;\n$ui-05: #161616;\n$text-02: #525252;\n$text-03: #a8a8a8;\n$ui-background: #ffffff;\n$color-gray-30: #c6c6c6;\n$color-gray-70: #525252;\n$color-gray-100: #161616;\n$color-blue-60-2: #0f62fe;\n$color-blue-10: #edf5ff;\n$color-yellow-50: #feecae;\n$carbon--red-50: #fa4d56;\n$inverse-link: #78a9ff;\n$support-02: #24a148;\n$inverse-support-03: #f1c21b;\n$warning-background: #fff8e1;\n$openmrs-background-grey: #f4f4f4;\n$danger: #da1e28;\n$interactive-01: #0f62fe;\n$field-01: #f4f4f4;\n$grey-2: #e0e0e0;\n$labeldropdown: #c6c6c6;\n\n$brand-primary-10: #d9fbfb;\n$brand-primary-20: #9ef0f0;\n$brand-primary-30: #3ddbd9;\n$brand-primary-40: #08bdba;\n$brand-primary-50: #009d9a;\n\n/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n\n$brand-primary-90: #022b30;\n$brand-primary-100: #081a1c;\n\n@mixin brand-01($property) {\n  #{$property}: #005d5d;\n  #{$property}: var(--brand-01);\n}\n\n@mixin brand-02($property) {\n  #{$property}: #004144;\n  #{$property}: var(--brand-02);\n}\n\n@mixin brand-03($property) {\n  #{$property}: #007d79;\n  #{$property}: var(--brand-03);\n}\n\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: #{layout.$spacing-10};\n  --workspace-header-height: #{layout.$spacing-09};\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n$breakpoint-phone-min: 0px;\n$breakpoint-phone-max: 600px;\n$breakpoint-tablet-min: 601px;\n$breakpoint-tablet-max: 1023px;\n$breakpoint-small-desktop-min: 1024px;\n$breakpoint-small-desktop-max: 1439px;\n$breakpoint-large-desktop-min: 1440px;\n$breakpoint-large-desktop-max: 99999999px;\n\n/* These color variables will be removed in a future release */\n$brand-teal-01: #007d79;\n$brand-01: #005d5d;\n$brand-02: #004144;\n","@use '@carbon/layout';\n@use '@carbon/type';\n@use '@openmrs/esm-styleguide/src/vars' as *;\n\n.bodyLong01 {\n  @include type.type-style('body-01');\n}\n\n.headerPanel {\n  height: max-content;\n}\n\n.primaryNavContainer {\n  height: var(--omrs-topnav-height);\n}\n\n.headerPanel {\n  transition: none;\n}\n\n.fullWidth {\n  width: 100%;\n}\n\n.userPanelSwitcher {\n  padding-top: layout.$spacing-05;\n  align-items: start;\n}\n\n.userPanelSwitcher :global(.cds--switcher__item) {\n  height: layout.$spacing-09;\n}\n\n.userPanelSwitcher :global(.cds--switcher__item:first-child) {\n  margin-top: 0;\n}\n\n.userPanelSwitcher :global(.cds--switcher__item-link) {\n  display: flex;\n  align-items: center;\n  color: $field-01;\n  padding: 0;\n  height: layout.$spacing-09;\n  @extend .bodyLong01;\n}\n\n.userPanelSwitcher :global(.cds--switcher__item-link):hover:not(.cds--switcher__item-link--selected) {\n  color: $field-01;\n  @include brand-02(background-color);\n}\n\n.userPanelSwitcher :global(.cds--switcher__item) svg {\n  margin: 0 layout.$spacing-04;\n  fill: $field-01;\n  flex-shrink: 0;\n}\n\n.userPanelSwitcher :global(.cds--switcher__item) button {\n  color: $inverse-link;\n}\n\n.userPanelSwitcher :global(.cds--switcher__item) button:hover {\n  @include brand-03(background-color);\n  color: $inverse-link;\n}\n","//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n// stylelint-disable number-max-precision\n\n@use 'sass:map';\n@use 'sass:math';\n@use '@carbon/grid/scss/config' as gridconfig;\n@use '@carbon/grid/scss/breakpoint' as grid;\n@use 'prefix' as *;\n@use 'font-family';\n@use 'scale';\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$caption-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$caption-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$label-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$label-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$legal-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$legal-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$helper-text-01: (\n  font-size: scale.type-scale(1),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$helper-text-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-short-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-compact-01: $body-short-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-long-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.42857,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-01: $body-long-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-short-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.375,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-compact-02: $body-short-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-long-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.5,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-02: $body-long-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$code-01: (\n  font-family: font-family.font-family('mono'),\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$code-02: (\n  font-family: font-family.font-family('mono'),\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.42857,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.42857,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-compact-01: $productive-heading-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.5,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.375,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-compact-02: $productive-heading-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-03: (\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.4,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-03: $productive-heading-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-04: (\n  font-size: scale.type-scale(7),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-04: $productive-heading-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-05: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.25,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-05: $productive-heading-05 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-06: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  // Extra digit needed for precision in Chrome\n  line-height: 1.199,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-06: $productive-heading-06 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-07: (\n  font-size: scale.type-scale(12),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-07: $productive-heading-07 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-01: $heading-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-02: $heading-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-03: (\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.4,\n  letter-spacing: 0,\n  breakpoints: (\n    xlg: (\n      font-size: scale.type-scale(5),\n      line-height: 1.4,\n    ),\n    max: (\n      font-size: scale.type-scale(6),\n      line-height: 1.334,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-03: $expressive-heading-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-04: (\n  font-size: scale.type-scale(7),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0,\n  breakpoints: (\n    xlg: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n      font-weight: font-family.font-weight('regular'),\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      font-weight: font-family.font-weight('regular'),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-04: $expressive-heading-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-05: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      font-weight: font-family.font-weight('light'),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-05: $expressive-heading-05 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-06: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-06: $expressive-heading-06 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-paragraph-01: (\n  font-size: scale.type-scale(6),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.334,\n  letter-spacing: 0,\n  breakpoints: (\n    lg: (\n      font-size: scale.type-scale(7),\n      line-height: 1.28572,\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n    ),\n  ),\n);\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-paragraph-01: $expressive-paragraph-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$quotation-01: (\n  font-family: font-family.font-family('serif'),\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.3,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(5),\n    ),\n    lg: (\n      font-size: scale.type-scale(6),\n      line-height: 1.334,\n    ),\n    xlg: (\n      font-size: scale.type-scale(7),\n      line-height: 1.28572,\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-quotation-01: $quotation-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$quotation-02: (\n  font-family: font-family.font-family('serif'),\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-quotation-02: $quotation-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-01: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(10),\n    ),\n    lg: (\n      font-size: scale.type-scale(12),\n    ),\n    xlg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-01: $display-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-02: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(10),\n    ),\n    lg: (\n      font-size: scale.type-scale(12),\n    ),\n    xlg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.16,\n    ),\n    max: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-02: $display-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-03: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(12),\n      line-height: 1.18,\n    ),\n    lg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.16,\n      letter-spacing: -0.64px,\n    ),\n    xlg: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n      letter-spacing: -0.64px,\n    ),\n    max: (\n      font-size: scale.type-scale(16),\n      line-height: 1.11,\n      letter-spacing: -0.96px,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-03: $display-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-04: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(14),\n      line-height: 1.15,\n    ),\n    lg: (\n      font-size: scale.type-scale(17),\n      line-height: 1.11,\n      letter-spacing: -0.64px,\n    ),\n    xlg: (\n      font-size: scale.type-scale(20),\n      line-height: 1.07,\n      letter-spacing: -0.64px,\n    ),\n    max: (\n      font-size: scale.type-scale(23),\n      line-height: 1.05,\n      letter-spacing: -0.96px,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-04: $display-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$tokens: (\n  caption-01: $caption-01,\n  caption-02: $caption-02,\n  label-01: $label-01,\n  label-02: $label-02,\n  helper-text-01: $helper-text-01,\n  helper-text-02: $helper-text-02,\n  body-short-01: $body-short-01,\n  body-short-02: $body-short-02,\n  body-long-01: $body-long-01,\n  body-long-02: $body-long-02,\n  code-01: $code-01,\n  code-02: $code-02,\n  heading-01: $heading-01,\n  heading-02: $heading-02,\n  productive-heading-01: $productive-heading-01,\n  productive-heading-02: $productive-heading-02,\n  productive-heading-03: $productive-heading-03,\n  productive-heading-04: $productive-heading-04,\n  productive-heading-05: $productive-heading-05,\n  productive-heading-06: $productive-heading-06,\n  productive-heading-07: $productive-heading-07,\n  expressive-paragraph-01: $expressive-paragraph-01,\n  expressive-heading-01: $expressive-heading-01,\n  expressive-heading-02: $expressive-heading-02,\n  expressive-heading-03: $expressive-heading-03,\n  expressive-heading-04: $expressive-heading-04,\n  expressive-heading-05: $expressive-heading-05,\n  expressive-heading-06: $expressive-heading-06,\n  quotation-01: $quotation-01,\n  quotation-02: $quotation-02,\n  display-01: $display-01,\n  display-02: $display-02,\n  display-03: $display-03,\n  display-04: $display-04,\n  // V11 Tokens\n  legal-01: $legal-01,\n  legal-02: $legal-02,\n  body-compact-01: $body-compact-01,\n  body-compact-02: $body-compact-02,\n  heading-compact-01: $heading-compact-01,\n  heading-compact-02: $heading-compact-02,\n  body-01: $body-01,\n  body-02: $body-02,\n  heading-03: $heading-03,\n  heading-04: $heading-04,\n  heading-05: $heading-05,\n  heading-06: $heading-06,\n  heading-07: $heading-07,\n  fluid-heading-03: $fluid-heading-03,\n  fluid-heading-04: $fluid-heading-04,\n  fluid-heading-05: $fluid-heading-05,\n  fluid-heading-06: $fluid-heading-06,\n  fluid-paragraph-01: $fluid-paragraph-01,\n  fluid-quotation-01: $fluid-quotation-01,\n  fluid-quotation-02: $fluid-quotation-02,\n  fluid-display-01: $fluid-display-01,\n  fluid-display-02: $fluid-display-02,\n  fluid-display-03: $fluid-display-03,\n  fluid-display-04: $fluid-display-04,\n) !default;\n\n/// @param {Map} $map\n/// @access public\n/// @group @carbon/type\n@mixin properties($map) {\n  @each $name, $value in $map {\n    #{$name}: $value;\n  }\n}\n\n/// @param {Number} $value - Number with units\n/// @return {Number} Without units\n/// @access public\n/// @group @carbon/type\n@function strip-unit($value) {\n  @return math.div($value, $value * 0 + 1);\n}\n\n/// This helper includes fluid type styles for the given token value. Fluid type\n/// means that the `font-size` is computed using `calc()` in order to be\n/// determined by the screen size instead of a breakpoint. As a result, fluid\n/// styles should be used with caution in fixed width contexts.\n///\n/// In addition, we make use of %-based line-heights so that the line-height of\n/// each type style is computed correctly due to the dynamic nature of the\n/// `font-size`.\n///\n/// Most of the logic for this work comes from CSS Tricks:\n/// https://css-tricks.com/snippets/css/fluid-typography/\n///\n/// @param {Map} $type-styles - The value of a given type token\n/// @param {Map} $breakpoints [$grid-breakpoints] - Custom breakpoints to use\n/// @access public\n/// @group @carbon/type\n@mixin fluid-type($type-styles, $breakpoints: gridconfig.$grid-breakpoints) {\n  // Include the initial styles for the given token by default without any\n  // media query guard. This includes `font-size` as a fallback in the case\n  // that a browser does not support `calc()`\n  @include properties(map.remove($type-styles, breakpoints));\n  // We also need to include the `sm` styles by default since they don't\n  // appear in the fluid styles for tokens\n  @include fluid-type-size($type-styles, sm, $breakpoints);\n\n  // Finally, we need to go through all the breakpoints defined in the type\n  // token and apply the properties and fluid type size for that given\n  // breakpoint\n  @each $name, $values in map.get($type-styles, breakpoints) {\n    @include grid.breakpoint($name) {\n      @include properties($values);\n      @include fluid-type-size($type-styles, $name, $breakpoints);\n    }\n  }\n}\n\n/// Computes the fluid `font-size` for a given type style and breakpoint\n/// @param {Map} $type-styles - The styles for a given token\n/// @param {String} $name - The name of the breakpoint to which we apply the fluid\n/// @param {Map} $breakpoints [$grid-breakpoints] - The breakpoints for the grid system\n/// @access public\n/// @group @carbon/type\n@mixin fluid-type-size(\n  $type-styles,\n  $name,\n  $breakpoints: gridconfig.$grid-breakpoints\n) {\n  // Get the information about the breakpoint we're currently working in. Useful\n  // for getting initial width information\n  $breakpoint: map.get($breakpoints, $name);\n\n  // Our fluid styles are captured under the 'breakpoints' property in our type\n  // styles map. These define what values to treat as `max-` variables below\n  $fluid-sizes: map.get($type-styles, breakpoints);\n  $fluid-breakpoint: ();\n  // Special case for `sm` because the styles for small are on the type style\n  // directly\n  @if $name == sm {\n    $fluid-breakpoint: map.remove($type-styles, breakpoints);\n  } @else {\n    $fluid-breakpoint: map.get($fluid-sizes, $name);\n  }\n\n  // Initialize our font-sizes to the default size for the type style\n  $max-font-size: map.get($type-styles, font-size);\n  $min-font-size: map.get($type-styles, font-size);\n  @if map.has-key($fluid-breakpoint, font-size) {\n    $min-font-size: map.get($fluid-breakpoint, font-size);\n  }\n\n  // Initialize our min and max width to the width of the current breakpoint\n  $max-vw: map.get($breakpoint, width);\n  $min-vw: map.get($breakpoint, width);\n\n  // We can use `breakpoint-next` to see if there is another breakpoint we can\n  // use to update `max-font-size` and `max-vw` with larger values\n  $next-breakpoint-available: grid.breakpoint-next($name, $breakpoints);\n  $next-fluid-breakpoint-name: null;\n\n  // We need to figure out what the next available fluid breakpoint is for our\n  // given $type-styles. In this loop we try and iterate through breakpoints\n  // until we either manually set $next-breakpoint-available to null or\n  // `breakpoint-next` returns null.\n  @while $next-breakpoint-available {\n    @if map.has-key($fluid-sizes, $next-breakpoint-available) {\n      $next-fluid-breakpoint-name: $next-breakpoint-available;\n      $next-breakpoint-available: null;\n    } @else {\n      $next-breakpoint-available: grid.breakpoint-next(\n        $next-breakpoint-available,\n        $breakpoints\n      );\n    }\n  }\n\n  // If we have found the next available fluid breakpoint name, then we know\n  // that we have values that we can use to set max-font-size and max-vw as both\n  // values derive from the next breakpoint\n  @if $next-fluid-breakpoint-name {\n    $next-fluid-breakpoint: map.get($breakpoints, $next-fluid-breakpoint-name);\n    $max-font-size: map.get(\n      map.get($fluid-sizes, $next-fluid-breakpoint-name),\n      font-size\n    );\n    $max-vw: map.get($next-fluid-breakpoint, width);\n\n    // prettier-ignore\n    font-size: calc(#{$min-font-size} +\n      #{strip-unit($max-font-size - $min-font-size)} *\n      ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)})\n    );\n  } @else {\n    // Otherwise, just default to setting the font size found from the type\n    // style or the given fluid breakpoint in the type style\n    font-size: $min-font-size;\n  }\n}\n\n// TODO move following variable and `custom-property` mixin into shared file for\n// both `@carbon/type` and `@carbon/themes`\n\n/// @access private\n/// @group @carbon/type\n@mixin custom-properties($name, $value) {\n  @each $property, $value in $value {\n    #{$property}: var(\n      --#{$custom-property-prefix}-#{$name}-#{$property},\n      #{$value}\n    );\n  }\n}\n\n/// Helper mixin to include the styles for a given token in any selector in your\n/// project. Also includes an optional fluid option that will enable fluid\n/// styles for the token if they are defined. Fluid styles will cause the\n/// token's font-size to be computed based on the viewport size. As a result, use\n/// with caution in fixed contexts.\n/// @param {String} $name - The name of the token to get the styles for\n/// @param {Boolean} $fluid [false] - Specify whether to include fluid styles for the\n/// @param {Map} $breakpoints [$grid-breakpoints] - Provide a custom breakpoint map to use\n/// @access public\n/// @group @carbon/type\n@mixin type-style(\n  $name,\n  $fluid: false,\n  $breakpoints: gridconfig.$grid-breakpoints\n) {\n  @if not map.has-key($tokens, $name) {\n    @error 'Unable to find a token with the name: `#{$name}`';\n  }\n\n  $token: map.get($tokens, $name);\n\n  // If $fluid is set to true and the token has breakpoints defined for fluid\n  // styles, delegate to the fluid-type helper for the given token\n  @if $fluid == true and map.has-key($token, 'breakpoints') {\n    @include fluid-type($token, $breakpoints);\n  } @else {\n    @include custom-properties($name, $token);\n  }\n}\n","// Code generated by @carbon/layout. DO NOT EDIT.\n//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-01: 0.125rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-02: 0.25rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-03: 0.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-04: 0.75rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-05: 1rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-06: 1.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-07: 2rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-08: 2.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-09: 3rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-10: 4rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-11: 5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-12: 6rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-13: 10rem !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/layout\n$spacing: (\n  spacing-01: $spacing-01,\n  spacing-02: $spacing-02,\n  spacing-03: $spacing-03,\n  spacing-04: $spacing-04,\n  spacing-05: $spacing-05,\n  spacing-06: $spacing-06,\n  spacing-07: $spacing-07,\n  spacing-08: $spacing-08,\n  spacing-09: $spacing-09,\n  spacing-10: $spacing-10,\n  spacing-11: $spacing-11,\n  spacing-12: $spacing-12,\n  spacing-13: $spacing-13,\n);\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"bodyLong01": "-esm-primary-navigation__user-menu-panel__bodyLong01___oLvR5",
	"userPanelSwitcher": "-esm-primary-navigation__user-menu-panel__userPanelSwitcher___7VTNH",
	"headerPanel": "-esm-primary-navigation__user-menu-panel__headerPanel___2HerO",
	"primaryNavContainer": "-esm-primary-navigation__user-menu-panel__primaryNavContainer___uYItf",
	"fullWidth": "-esm-primary-navigation__user-menu-panel__fullWidth___-RAMU",
	"cds--switcher__item-link--selected": "-esm-primary-navigation__user-menu-panel__cds--switcher__item-link--selected___E2WII"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar/navbar.scss"
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar/navbar.scss ***!
  \********************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: 4rem;\n  --workspace-header-height: 3rem;\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n/* These color variables will be removed in a future release */\n.-esm-primary-navigation__navbar__topNavActionsSlot___uRmEM {\n  display: flex;\n  align-items: center;\n}\n.-esm-primary-navigation__navbar__topNavActionsSlot___uRmEM > a {\n  color: white;\n  text-decoration: none;\n  margin: 0 0.75rem;\n}\n\n.-esm-primary-navigation__navbar__headerGlobalBarButton___a1LgV {\n  background-color: #004144;\n  background-color: var(--brand-02);\n}\n\n.-esm-primary-navigation__navbar__topNavHeader___HyHf4 {\n  top: var(--omrs-offline-banner-height);\n}\n\n.-esm-primary-navigation__navbar__activePanel___QUwvm {\n  background-color: #005d5d;\n  background-color: var(--brand-01);\n}\n\n.-esm-primary-navigation__navbar__headerMenuButton___k6m5W {\n  height: 3rem;\n  width: 3rem;\n  padding: 0.75rem;\n  margin-inline-end: 0.25rem;\n}\n\n.-esm-primary-navigation__navbar__spacedLogo___P2WIw {\n  margin-inline-start: 1rem;\n}\n\n.-esm-primary-navigation__navbar__divider___RxITe {\n  width: 1px;\n  height: 1.5rem;\n  background-color: rgba(244, 244, 244, 0.4);\n  margin-inline-start: 0.75rem;\n}\n\n.-esm-primary-navigation__navbar__topNavInfoSlot___pTLmf {\n  gap: 0.5rem;\n}\n\n.-esm-primary-navigation__navbar__panelWrapper___5oxxU {\n  display: contents;\n}", "",{"version":3,"sources":["webpack://./node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/components/navbar/navbar.scss","webpack://./node_modules/@carbon/layout/scss/generated/_spacing.scss"],"names":[],"mappings":"AAkCA,0EAAA;AAoBA;EACE,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,+BAAA;EACA,oGAAA;EACA,2GAAA;ACpDF;;ADgEA,8DAAA;ACtEA;EACE,aAAA;EACA,mBAAA;AAUF;AARE;EACE,YAAA;EACA,qBAAA;EACA,iBAAA;AAUJ;;AANA;ED+BE,yBAAA;EACA,iCAAA;ACrBF;;AAPA;EACE,sCAAA;AAUF;;AAPA;EDkBE,yBAAA;EACA,iCAAA;ACPF;;AARA;EACE,YCwBW;EDvBX,WCuBW;EDtBX,gBCHW;EDIX,0BCdW;ADyBb;;AARA;EACE,yBCHW;ADcb;;AARA;EACE,UAAA;EACA,cCHW;EDIX,0CAAA;EACA,4BCfW;AD0Bb;;AARA;EACE,WCxBW;ADmCb;;AARA;EACE,iBAAA;AAWF","sourcesContent":["@use '@carbon/layout';\n\n$ui-01: #f4f4f4;\n$ui-02: #ffffff;\n$ui-03: #e0e0e0;\n$ui-04: #8d8d8d;\n$ui-05: #161616;\n$text-02: #525252;\n$text-03: #a8a8a8;\n$ui-background: #ffffff;\n$color-gray-30: #c6c6c6;\n$color-gray-70: #525252;\n$color-gray-100: #161616;\n$color-blue-60-2: #0f62fe;\n$color-blue-10: #edf5ff;\n$color-yellow-50: #feecae;\n$carbon--red-50: #fa4d56;\n$inverse-link: #78a9ff;\n$support-02: #24a148;\n$inverse-support-03: #f1c21b;\n$warning-background: #fff8e1;\n$openmrs-background-grey: #f4f4f4;\n$danger: #da1e28;\n$interactive-01: #0f62fe;\n$field-01: #f4f4f4;\n$grey-2: #e0e0e0;\n$labeldropdown: #c6c6c6;\n\n$brand-primary-10: #d9fbfb;\n$brand-primary-20: #9ef0f0;\n$brand-primary-30: #3ddbd9;\n$brand-primary-40: #08bdba;\n$brand-primary-50: #009d9a;\n\n/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n\n$brand-primary-90: #022b30;\n$brand-primary-100: #081a1c;\n\n@mixin brand-01($property) {\n  #{$property}: #005d5d;\n  #{$property}: var(--brand-01);\n}\n\n@mixin brand-02($property) {\n  #{$property}: #004144;\n  #{$property}: var(--brand-02);\n}\n\n@mixin brand-03($property) {\n  #{$property}: #007d79;\n  #{$property}: var(--brand-03);\n}\n\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: #{layout.$spacing-10};\n  --workspace-header-height: #{layout.$spacing-09};\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n$breakpoint-phone-min: 0px;\n$breakpoint-phone-max: 600px;\n$breakpoint-tablet-min: 601px;\n$breakpoint-tablet-max: 1023px;\n$breakpoint-small-desktop-min: 1024px;\n$breakpoint-small-desktop-max: 1439px;\n$breakpoint-large-desktop-min: 1440px;\n$breakpoint-large-desktop-max: 99999999px;\n\n/* These color variables will be removed in a future release */\n$brand-teal-01: #007d79;\n$brand-01: #005d5d;\n$brand-02: #004144;\n","@use '@carbon/layout';\n@use '@openmrs/esm-styleguide/src/vars' as *;\n\n.topNavActionsSlot {\n  display: flex;\n  align-items: center;\n\n  > a {\n    color: white;\n    text-decoration: none;\n    margin: 0 layout.$spacing-04;\n  }\n}\n\n.headerGlobalBarButton {\n  @include brand-02(background-color);\n}\n\n.topNavHeader {\n  top: var(--omrs-offline-banner-height);\n}\n\n.activePanel {\n  @include brand-01(background-color);\n}\n\n.headerMenuButton {\n  height: layout.$spacing-09;\n  width: layout.$spacing-09;\n  padding: layout.$spacing-04;\n  margin-inline-end: layout.$spacing-02;\n}\n\n.spacedLogo {\n  margin-inline-start: layout.$spacing-05;\n}\n\n.divider {\n  width: 1px;\n  height: layout.$spacing-06;\n  background-color: rgba(244, 244, 244, 0.4);\n  margin-inline-start: layout.$spacing-04;\n}\n\n.topNavInfoSlot {\n  gap: layout.$spacing-03;\n}\n\n.panelWrapper {\n  display: contents;\n}\n","// Code generated by @carbon/layout. DO NOT EDIT.\n//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-01: 0.125rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-02: 0.25rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-03: 0.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-04: 0.75rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-05: 1rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-06: 1.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-07: 2rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-08: 2.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-09: 3rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-10: 4rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-11: 5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-12: 6rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-13: 10rem !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/layout\n$spacing: (\n  spacing-01: $spacing-01,\n  spacing-02: $spacing-02,\n  spacing-03: $spacing-03,\n  spacing-04: $spacing-04,\n  spacing-05: $spacing-05,\n  spacing-06: $spacing-06,\n  spacing-07: $spacing-07,\n  spacing-08: $spacing-08,\n  spacing-09: $spacing-09,\n  spacing-10: $spacing-10,\n  spacing-11: $spacing-11,\n  spacing-12: $spacing-12,\n  spacing-13: $spacing-13,\n);\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"topNavActionsSlot": "-esm-primary-navigation__navbar__topNavActionsSlot___uRmEM",
	"headerGlobalBarButton": "-esm-primary-navigation__navbar__headerGlobalBarButton___a1LgV",
	"topNavHeader": "-esm-primary-navigation__navbar__topNavHeader___HyHf4",
	"activePanel": "-esm-primary-navigation__navbar__activePanel___QUwvm",
	"headerMenuButton": "-esm-primary-navigation__navbar__headerMenuButton___k6m5W",
	"spacedLogo": "-esm-primary-navigation__navbar__spacedLogo___P2WIw",
	"divider": "-esm-primary-navigation__navbar__divider___RxITe",
	"topNavInfoSlot": "-esm-primary-navigation__navbar__topNavInfoSlot___pTLmf",
	"panelWrapper": "-esm-primary-navigation__navbar__panelWrapper___5oxxU"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/root.scss"
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/root.scss ***!
  \************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: 4rem;\n  --workspace-header-height: 3rem;\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n/* These color variables will be removed in a future release */\n.-esm-primary-navigation__root__primaryNavContainer___TLM40 {\n  height: var(--omrs-topnav-height);\n}", "",{"version":3,"sources":["webpack://./node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/root.scss"],"names":[],"mappings":"AAkCA,0EAAA;AAoBA;EACE,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,+BAAA;EACA,oGAAA;EACA,2GAAA;ACpDF;;ADgEA,8DAAA;ACvEA;EACE,iCAAA;AAWF","sourcesContent":["@use '@carbon/layout';\n\n$ui-01: #f4f4f4;\n$ui-02: #ffffff;\n$ui-03: #e0e0e0;\n$ui-04: #8d8d8d;\n$ui-05: #161616;\n$text-02: #525252;\n$text-03: #a8a8a8;\n$ui-background: #ffffff;\n$color-gray-30: #c6c6c6;\n$color-gray-70: #525252;\n$color-gray-100: #161616;\n$color-blue-60-2: #0f62fe;\n$color-blue-10: #edf5ff;\n$color-yellow-50: #feecae;\n$carbon--red-50: #fa4d56;\n$inverse-link: #78a9ff;\n$support-02: #24a148;\n$inverse-support-03: #f1c21b;\n$warning-background: #fff8e1;\n$openmrs-background-grey: #f4f4f4;\n$danger: #da1e28;\n$interactive-01: #0f62fe;\n$field-01: #f4f4f4;\n$grey-2: #e0e0e0;\n$labeldropdown: #c6c6c6;\n\n$brand-primary-10: #d9fbfb;\n$brand-primary-20: #9ef0f0;\n$brand-primary-30: #3ddbd9;\n$brand-primary-40: #08bdba;\n$brand-primary-50: #009d9a;\n\n/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n\n$brand-primary-90: #022b30;\n$brand-primary-100: #081a1c;\n\n@mixin brand-01($property) {\n  #{$property}: #005d5d;\n  #{$property}: var(--brand-01);\n}\n\n@mixin brand-02($property) {\n  #{$property}: #004144;\n  #{$property}: var(--brand-02);\n}\n\n@mixin brand-03($property) {\n  #{$property}: #007d79;\n  #{$property}: var(--brand-03);\n}\n\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: #{layout.$spacing-10};\n  --workspace-header-height: #{layout.$spacing-09};\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n$breakpoint-phone-min: 0px;\n$breakpoint-phone-max: 600px;\n$breakpoint-tablet-min: 601px;\n$breakpoint-tablet-max: 1023px;\n$breakpoint-small-desktop-min: 1024px;\n$breakpoint-small-desktop-max: 1439px;\n$breakpoint-large-desktop-min: 1440px;\n$breakpoint-large-desktop-max: 99999999px;\n\n/* These color variables will be removed in a future release */\n$brand-teal-01: #007d79;\n$brand-01: #005d5d;\n$brand-02: #004144;\n","@use '@openmrs/esm-styleguide/src/vars' as *;\n\n.primaryNavContainer {\n  height: var(--omrs-topnav-height);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"primaryNavContainer": "-esm-primary-navigation__root__primaryNavContainer___TLM40"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
(module) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/lodash-es/_Symbol.js"
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ },

/***/ "./node_modules/lodash-es/_arrayMap.js"
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_arrayMap.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayMap);


/***/ },

/***/ "./node_modules/lodash-es/_asciiToArray.js"
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_asciiToArray.js ***!
  \*************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (asciiToArray);


/***/ },

/***/ "./node_modules/lodash-es/_baseGetTag.js"
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);


/***/ },

/***/ "./node_modules/lodash-es/_baseSlice.js"
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseSlice.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSlice);


/***/ },

/***/ "./node_modules/lodash-es/_baseToString.js"
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseToString.js ***!
  \*************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, baseToString) + '';
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseToString);


/***/ },

/***/ "./node_modules/lodash-es/_castSlice.js"
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_castSlice.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSlice.js */ "./node_modules/lodash-es/_baseSlice.js");


/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : (0,_baseSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, start, end);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castSlice);


/***/ },

/***/ "./node_modules/lodash-es/_createCaseFirst.js"
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_createCaseFirst.js ***!
  \****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castSlice.js */ "./node_modules/lodash-es/_castSlice.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasUnicode.js */ "./node_modules/lodash-es/_hasUnicode.js");
/* harmony import */ var _stringToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToArray.js */ "./node_modules/lodash-es/_stringToArray.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");





/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = (0,_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string);

    var strSymbols = (0,_hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string)
      ? (0,_stringToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? (0,_castSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCaseFirst);


/***/ },

/***/ "./node_modules/lodash-es/_freeGlobal.js"
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof globalThis == 'object' && globalThis && globalThis.Object === Object && globalThis;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ },

/***/ "./node_modules/lodash-es/_getRawTag.js"
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);


/***/ },

/***/ "./node_modules/lodash-es/_hasUnicode.js"
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hasUnicode.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasUnicode);


/***/ },

/***/ "./node_modules/lodash-es/_objectToString.js"
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);


/***/ },

/***/ "./node_modules/lodash-es/_root.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ },

/***/ "./node_modules/lodash-es/_stringToArray.js"
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_stringToArray.js ***!
  \**************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _asciiToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_asciiToArray.js */ "./node_modules/lodash-es/_asciiToArray.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasUnicode.js */ "./node_modules/lodash-es/_hasUnicode.js");
/* harmony import */ var _unicodeToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_unicodeToArray.js */ "./node_modules/lodash-es/_unicodeToArray.js");




/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return (0,_hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string)
    ? (0,_unicodeToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string)
    : (0,_asciiToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringToArray);


/***/ },

/***/ "./node_modules/lodash-es/_unicodeToArray.js"
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_unicodeToArray.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unicodeToArray);


/***/ },

/***/ "./node_modules/lodash-es/capitalize.js"
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/capitalize.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");
/* harmony import */ var _upperFirst_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upperFirst.js */ "./node_modules/lodash-es/upperFirst.js");



/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return (0,_upperFirst_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_toString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string).toLowerCase());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (capitalize);


/***/ },

/***/ "./node_modules/lodash-es/isArray.js"
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);


/***/ },

/***/ "./node_modules/lodash-es/isObjectLike.js"
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ },

/***/ "./node_modules/lodash-es/isSymbol.js"
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ },

/***/ "./node_modules/lodash-es/toString.js"
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toString.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0,_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);


/***/ },

/***/ "./node_modules/lodash-es/upperFirst.js"
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/upperFirst.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createCaseFirst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createCaseFirst.js */ "./node_modules/lodash-es/_createCaseFirst.js");


/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = (0,_createCaseFirst_js__WEBPACK_IMPORTED_MODULE_0__["default"])('toUpperCase');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upperFirst);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/components/change-language/change-language-link.extension.tsx"
/*!***************************************************************************!*\
  !*** ./src/components/change-language/change-language-link.extension.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/capitalize.js");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _change_language_link_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-language-link.scss */ "./src/components/change-language/change-language-link.scss");






/** The user menu item that shows the current language and has a button to change the language */ function ChangeLanguageLink() {
    var _ref;
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)().t;
    var session = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    var launchChangeLanguageModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {
        var dispose = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_4__.showModal)('change-language-modal', {
            closeModal: function() {
                return dispose();
            },
            size: 'sm'
        });
    }, []);
    var languageName = (session === null || session === void 0 ? void 0 : session.locale) ? new Intl.DisplayNames([
        session.locale
    ], {
        type: 'language'
    }) : new Intl.DisplayNames([
        'en'
    ], {
        type: 'language'
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.SwitcherItem, {
        className: _change_language_link_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panelItemContainer,
        "aria-label": t('changeLanguage', 'Change language')
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_4__.TranslateIcon, {
        size: 20
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(languageName.of((_ref = session === null || session === void 0 ? void 0 : session.locale) !== null && _ref !== void 0 ? _ref : 'en')))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        kind: "ghost",
        onClick: launchChangeLanguageModal
    }, t('change', 'Change')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeLanguageLink);


/***/ },

/***/ "./src/components/change-language/change-language-link.scss"
/*!******************************************************************!*\
  !*** ./src/components/change-language/change-language-link.scss ***!
  \******************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./change-language-link.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/change-language/change-language-link.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./change-language-link.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/change-language/change-language-link.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./change-language-link.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/change-language/change-language-link.scss");
 return (function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_link_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/dashboard/dashboard.component.tsx"
/*!**********************************************************!*\
  !*** ./src/components/dashboard/dashboard.component.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dashboardConfigSchema: () => (/* binding */ dashboardConfigSchema),
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @openmrs/esm-framework/src/internal */ "webpack/sharing/consume/default/@openmrs/esm-framework/src/internal/@openmrs/esm-framework/src/internal");
/* harmony import */ var _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__);





var dashboardConfigSchema = {
    title: {
        _description: 'The display string for this dashboard',
        _default: 'My Dashboard',
        _type: _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__.Type.String
    },
    path: {
        _description: 'The URL fragment this link points to',
        _default: '',
        _type: _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__.Type.String
    },
    icon: {
        _description: 'The icons for the navigation menu',
        _default: '',
        _type: _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__.Type.String
    },
    moduleName: {
        _description: 'The module which the extension should be loaded into',
        _default: '',
        _type: _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__.Type.String
    }
};
function Dashboard(param) {
    var basePath = param.basePath, moduleName = param.moduleName;
    var _ref;
    var _componentContext_extension, _componentContext_extension1, _componentContext_extension2;
    var componentContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__.ComponentContext);
    var module = (_ref = moduleName !== null && moduleName !== void 0 ? moduleName : (_componentContext_extension = componentContext.extension) === null || _componentContext_extension === void 0 ? void 0 : _componentContext_extension.extensionSlotModuleName) !== null && _ref !== void 0 ? _ref : componentContext.moduleName;
    var Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        return (0,_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__.openmrsComponentDecorator)({
            moduleName: module,
            featureName: 'dashboard'
        })(function() {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DashboardInternal, {
                basePath: basePath
            });
        });
    }, [
        basePath,
        module
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
        _extensionContext: {
            extensionId: (_componentContext_extension1 = componentContext.extension) === null || _componentContext_extension1 === void 0 ? void 0 : _componentContext_extension1.extensionId,
            extensionSlotName: (_componentContext_extension2 = componentContext.extension) === null || _componentContext_extension2 === void 0 ? void 0 : _componentContext_extension2.extensionSlotName,
            extensionSlotModuleName: module
        }
    }));
}
// t('noPathInDashboardExtension', 'Cannot render the dashboard extension without the property "path" being set in the configuration schema')
function DashboardInternal(param) {
    var basePath = param.basePath;
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('@openmrs/esm-primary-navigation-app').t;
    var config = (0,_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__.useConfig)();
    if (!config.path) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.InlineNotification, {
            kind: "error",
            subtitle: t('noPathInDashboardExtension', 'Cannot render the dashboard extension without the property "path" being set in the configuration schema'),
            title: (0,_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__.getCoreTranslation)('error')
        });
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_4__.DashboardExtension, {
        path: config.path,
        title: config.title,
        basePath: basePath,
        icon: config.icon
    });
}


/***/ },

/***/ "./src/components/generic-link/generic-link.component.tsx"
/*!****************************************************************!*\
  !*** ./src/components/generic-link/generic-link.component.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenericLink),
/* harmony export */   genericLinkConfigSchema: () => (/* binding */ genericLinkConfigSchema)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__);


var genericLinkConfigSchema = {
    title: {
        _default: 'New Link',
        _type: _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.Type.String
    },
    target: {
        _default: '#',
        _type: _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.Type.String,
        _description: 'The URL to link to.',
        _validators: [
            _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.validators.isUrl
        ]
    }
};
function GenericLink() {
    var config = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useConfig)();
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.ConfigurableLink, {
        to: config.target
    }, config.title);
}


/***/ },

/***/ "./src/components/logo/logo.component.tsx"
/*!************************************************!*\
  !*** ./src/components/logo/logo.component.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.scss */ "./src/components/logo/logo.scss");



var Logo = function() {
    var logo = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useConfig)().logo;
    var handleImageError = function(e) {
        console.error('Failed to load logo image:', e);
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (logo === null || logo === void 0 ? void 0 : logo.src) ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        alt: logo.alt,
        className: _logo_scss__WEBPACK_IMPORTED_MODULE_2__["default"].logo,
        onError: handleImageError,
        src: (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.interpolateUrl)(logo.src)
    }) : (logo === null || logo === void 0 ? void 0 : logo.name) ? logo.name : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
        "aria-label": "OpenMRS Logo",
        role: "img",
        width: 110,
        height: 40
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
        href: "#omrs-logo-white"
    })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ },

/***/ "./src/components/logo/logo.scss"
/*!***************************************!*\
  !*** ./src/components/logo/logo.scss ***!
  \***************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./logo.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/logo/logo.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./logo.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/logo/logo.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./logo.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/logo/logo.scss");
 return (function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/nav-group/nav-group.component.tsx"
/*!**********************************************************!*\
  !*** ./src/components/nav-group/nav-group.component.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavGroup: () => (/* binding */ NavGroup),
/* harmony export */   navGroupConfigSchema: () => (/* binding */ navGroupConfigSchema),
/* harmony export */   navGroupFeatureName: () => (/* binding */ navGroupFeatureName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openmrs/esm-framework/src/internal */ "webpack/sharing/consume/default/@openmrs/esm-framework/src/internal/@openmrs/esm-framework/src/internal");
/* harmony import */ var _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_3__);




var navGroupFeatureName = 'Nav Group';
var navGroupConfigSchema = {
    title: {
        _type: _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_3__.Type.String,
        _description: 'The title of the nav group.',
        _default: 'My Group'
    },
    slotName: {
        _type: _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_3__.Type.String,
        _description: 'The name of the slot to create, which links can be added to.',
        _default: ''
    },
    isExpanded: {
        _type: _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_3__.Type.Boolean,
        _description: 'The boolean to determine whether the nav group is expanded or not.',
        _default: false
    }
};
function NavGroup(param) {
    var basePath = param.basePath;
    var _componentContext_extension;
    var componentContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_3__.ComponentContext);
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)().t;
    var _useConfig = (0,_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_3__.useConfig)(), title = _useConfig.title, isExpanded = _useConfig.isExpanded, slotName = _useConfig.slotName;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.Accordion, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.AccordionItem, {
        open: isExpanded,
        title: t(title)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_3__.ExtensionSlot, {
        name: slotName !== null && slotName !== void 0 ? slotName : "nav-group-".concat(title),
        state: {
            basePath: basePath,
            moduleName: (_componentContext_extension = componentContext.extension) === null || _componentContext_extension === void 0 ? void 0 : _componentContext_extension.extensionSlotModuleName
        }
    })));
}


/***/ },

/***/ "./src/components/navbar-header-panels/app-menu-panel.component.tsx"
/*!**************************************************************************!*\
  !*** ./src/components/navbar-header-panels/app-menu-panel.component.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _carbon_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon/react/icons */ "./node_modules/@carbon/icons-react/es/generated/bucket-10.js");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-menu-panel.scss */ "./src/components/navbar-header-panels/app-menu-panel.scss");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}







var AppMenuPanel = function(param) {
    var expanded = param.expanded, hidePanel = param.hidePanel;
    var _config_externalRefLinks, _config_externalRefLinks1;
    var config = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__.useConfig)();
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)().t;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        window.addEventListener('popstate', hidePanel);
        return function() {
            return window.removeEventListener('popstate', hidePanel);
        };
    }, [
        hidePanel
    ]);
    return expanded && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
            display: 'inline'
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.HeaderPanel, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_define_property({}, _app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].headerPanel, expanded)),
        "aria-label": "App Menu Panel",
        expanded: expanded
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__.ExtensionSlot, {
        className: _app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].menuLink,
        name: "app-menu-slot"
    }), (config === null || config === void 0 ? void 0 : (_config_externalRefLinks = config.externalRefLinks) === null || _config_externalRefLinks === void 0 ? void 0 : _config_externalRefLinks.length) > 0 && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].menuLink, _app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].externalLinks)
    }, config === null || config === void 0 ? void 0 : (_config_externalRefLinks1 = config.externalRefLinks) === null || _config_externalRefLinks1 === void 0 ? void 0 : _config_externalRefLinks1.map(function(link) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: link === null || link === void 0 ? void 0 : link.redirect
        }, t(link === null || link === void 0 ? void 0 : link.title), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react_icons__WEBPACK_IMPORTED_MODULE_4__.Launch, {
            size: 16,
            className: _app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].launchIcon
        }));
    }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppMenuPanel);


/***/ },

/***/ "./src/components/navbar-header-panels/app-menu-panel.scss"
/*!*****************************************************************!*\
  !*** ./src/components/navbar-header-panels/app-menu-panel.scss ***!
  \*****************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./app-menu-panel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/app-menu-panel.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./app-menu-panel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/app-menu-panel.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./app-menu-panel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/app-menu-panel.scss");
 return (function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_app_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/navbar-header-panels/notifications-menu-panel.component.tsx"
/*!************************************************************************************!*\
  !*** ./src/components/navbar-header-panels/notifications-menu-panel.component.tsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications-menu.panel.scss */ "./src/components/navbar-header-panels/notifications-menu.panel.scss");





var NotificationsMenuPanel = function(param) {
    var expanded = param.expanded;
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)().t;
    var state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        return {
            expanded: expanded
        };
    }, [
        expanded
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.HeaderPanel, {
        "aria-label": "Notifications Panel",
        expanded: expanded
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
        className: _notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_4__["default"].heading
    }, t('notifications', 'Notifications')), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_3__.ExtensionSlot, {
        name: "notifications-nav-menu-slot",
        state: state
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationsMenuPanel);


/***/ },

/***/ "./src/components/navbar-header-panels/notifications-menu.panel.scss"
/*!***************************************************************************!*\
  !*** ./src/components/navbar-header-panels/notifications-menu.panel.scss ***!
  \***************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./notifications-menu.panel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/notifications-menu.panel.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./notifications-menu.panel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/notifications-menu.panel.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./notifications-menu.panel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/notifications-menu.panel.scss");
 return (function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_notifications_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/navbar-header-panels/side-menu-panel.component.tsx"
/*!***************************************************************************!*\
  !*** ./src/components/navbar-header-panels/side-menu-panel.component.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);



/**
 * This is the menu that pops up when clicking on the hamburger button
 * on the top nav. It's also responsible for rendering the left nav
 * in desktop mode (via a react portal).
 */ var SideMenuPanel = function(param) {
    var expanded = param.expanded, hidePanel = param.hidePanel;
    var menuRef = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useOnClickOutside)(hidePanel, expanded);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        window.addEventListener('popstate', hidePanel);
        return function() {
            return window.removeEventListener('popstate', hidePanel);
        };
    }, [
        hidePanel
    ]);
    var layout = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useLayoutType)();
    var mode = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useLeftNavStore)().mode;
    var leftNavContainer = window.document.getElementById('omrs-left-nav-container');
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (!(0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.isDesktop)(layout) || mode === 'collapsed') && expanded && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.LeftNavMenu, {
        ref: menuRef,
        isChildOfHeader: true
    }), (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.isDesktop)(layout) && mode === 'normal' && leftNavContainer && /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.LeftNavMenu, {
        ref: menuRef,
        isChildOfHeader: true
    }), leftNavContainer));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideMenuPanel);


/***/ },

/***/ "./src/components/navbar-header-panels/user-menu-panel.component.tsx"
/*!***************************************************************************!*\
  !*** ./src/components/navbar-header-panels/user-menu-panel.component.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-menu-panel.scss */ "./src/components/navbar-header-panels/user-menu-panel.scss");





/**
 * Extensions attaching to `user-panel-slot` or `user-panel-bottom-slot` should in
 * general be wrapped in the `SwitcherItem` Carbon component.
 */ var UserMenuPanel = function(param) {
    var expanded = param.expanded, hidePanel = param.hidePanel;
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)().t;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
            display: 'inline'
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.HeaderPanel, {
        className: _user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_4__["default"].headerPanel,
        expanded: expanded,
        "aria-label": t('userMenu', 'User menu')
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.Switcher, {
        className: _user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_4__["default"].userPanelSwitcher,
        "aria-label": t('userMenuOptions', 'User menu options')
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_3__.ExtensionSlot, {
        className: _user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fullWidth,
        name: "user-panel-slot"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.SwitcherDivider, {
        className: _user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_4__["default"].divider,
        "aria-hidden": "true"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_3__.ExtensionSlot, {
        className: _user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fullWidth,
        name: "user-panel-bottom-slot"
    }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMenuPanel);


/***/ },

/***/ "./src/components/navbar-header-panels/user-menu-panel.scss"
/*!******************************************************************!*\
  !*** ./src/components/navbar-header-panels/user-menu-panel.scss ***!
  \******************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./user-menu-panel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/user-menu-panel.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./user-menu-panel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/user-menu-panel.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./user-menu-panel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar-header-panels/user-menu-panel.scss");
 return (function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_user_menu_panel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/navbar/app-menu-button.component.tsx"
/*!*************************************************************!*\
  !*** ./src/components/navbar/app-menu-button.component.tsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _navbar_header_panels_app_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar-header-panels/app-menu-panel.component */ "./src/components/navbar-header-panels/app-menu-panel.component.tsx");
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.scss */ "./src/components/navbar/navbar.scss");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}







/**
 * This component displays the app menu button and the menu itself (when toggled on)
 */ var AppMenuButton = function(param) {
    var isActivePanel = param.isActivePanel, togglePanel = param.togglePanel, hidePanel = param.hidePanel;
    var appMenuItems = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useAssignedExtensions)('app-menu-slot');
    var showAppMenu = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function() {
        return appMenuItems.length > 0;
    }, [
        appMenuItems.length
    ]);
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;
    var appMenuRef = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useOnClickOutside)(hidePanel('appMenu'), isActivePanel('appMenu'));
    var _obj;
    return showAppMenu && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        ref: appMenuRef,
        className: _navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].panelWrapper
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_0__.HeaderGlobalAction, {
        "aria-label": t('AppMenuTooltip', 'App Menu'),
        "aria-labelledby": "App Menu",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_obj = {}, _define_property(_obj, _navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].headerGlobalBarButton, isActivePanel('appMenu')), _define_property(_obj, _navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].activePanel, !isActivePanel('appMenu')), _obj)),
        isActive: isActivePanel('appMenu'),
        onClick: function() {
            togglePanel('appMenu');
        },
        tooltipAlignment: "end"
    }, isActivePanel('appMenu') ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.CloseIcon, {
        size: 20
    }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.SwitcherIcon, {
        size: 20
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_navbar_header_panels_app_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
        expanded: isActivePanel('appMenu'),
        hidePanel: hidePanel('appMenu')
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppMenuButton);


/***/ },

/***/ "./src/components/navbar/navbar.component.tsx"
/*!****************************************************!*\
  !*** ./src/components/navbar/navbar.component.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logo/logo.component */ "./src/components/logo/logo.component.tsx");
/* harmony import */ var _navbar_header_panels_notifications_menu_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar-header-panels/notifications-menu-panel.component */ "./src/components/navbar-header-panels/notifications-menu-panel.component.tsx");
/* harmony import */ var _navbar_header_panels_side_menu_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar-header-panels/side-menu-panel.component */ "./src/components/navbar-header-panels/side-menu-panel.component.tsx");
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar.scss */ "./src/components/navbar/navbar.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}









var HeaderItems = function() {
    var config = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useConfig)();
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), activeHeaderPanel = _useState[0], setActiveHeaderPanel = _useState[1];
    var layout = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useLayoutType)();
    var _useLeftNavStore = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useLeftNavStore)(), slotName = _useLeftNavStore.slotName, mode = _useLeftNavStore.mode;
    var navMenuItems = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useAssignedExtensions)(slotName);
    var isActivePanel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(panelName) {
        return activeHeaderPanel === panelName;
    }, [
        activeHeaderPanel
    ]);
    var togglePanel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(panelName) {
        setActiveHeaderPanel(function(activeHeaderPanel) {
            return activeHeaderPanel === panelName ? null : panelName;
        });
    }, []);
    var hidePanel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function(panelName) {
        return function() {
            setActiveHeaderPanel(function(activeHeaderPanel) {
                return activeHeaderPanel === panelName ? null : activeHeaderPanel;
            });
        };
    }, []);
    var showHamburger = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {
        return (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__.isDesktop)(layout) || mode === 'collapsed') && mode !== 'hidden' && navMenuItems.length > 0;
    }, [
        navMenuItems.length,
        layout,
        mode
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_0__.Header, {
        "aria-label": "OpenMRS",
        className: _navbar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].topNavHeader
    }, showHamburger && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_0__.HeaderMenuButton, {
        "aria-label": "Open menu",
        isCollapsible: true,
        className: _navbar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].headerMenuButton,
        onClick: function() {
            togglePanel('sideMenu');
        },
        onMouseDown: function(e) {
            return e.stopPropagation();
        },
        onTouchStart: function(e) {
            return e.stopPropagation();
        },
        isActive: isActivePanel('sideMenu')
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.ConfigurableLink, {
        to: config.logo.link
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: showHamburger ? '' : _navbar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].spacedLogo
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["default"], null))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: _navbar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].divider
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.ExtensionSlot, {
        name: "top-nav-info-slot",
        className: _navbar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].topNavInfoSlot
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_0__.HeaderGlobalBar, {
        className: _navbar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].headerGlobalBar
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.ExtensionSlot, {
        name: "top-nav-actions-slot",
        state: {
            isActivePanel: isActivePanel,
            togglePanel: togglePanel,
            hidePanel: hidePanel
        },
        className: _navbar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].topNavActionsSlot
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.ExtensionSlot, {
        name: "notifications-menu-button-slot",
        state: {
            isActivePanel: isActivePanel,
            togglePanel: togglePanel
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.ExtensionSlot, {
        name: "top-nav-app-menu-slot",
        state: {
            isActivePanel: isActivePanel,
            togglePanel: togglePanel,
            hidePanel: hidePanel
        },
        className: _navbar_scss__WEBPACK_IMPORTED_MODULE_8__["default"].topNavActionsSlot
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_navbar_header_panels_side_menu_panel_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
        hidePanel: hidePanel('sideMenu'),
        expanded: isActivePanel('sideMenu')
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_navbar_header_panels_notifications_menu_panel_component__WEBPACK_IMPORTED_MODULE_6__["default"], {
        expanded: isActivePanel('notificationsMenu')
    }))));
};
var Navbar = function() {
    var _session_user;
    var session = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    var openmrsSpaBase = window['getOpenmrsSpaBase']();
    if (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.person) {
        return session.sessionLocation ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_0__.HeaderContainer, {
            render: HeaderItems
        }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, {
            to: "/login/location",
            state: {
                referrer: window.location.pathname.slice(window.location.pathname.indexOf(openmrsSpaBase) + openmrsSpaBase.length - 1)
            }
        });
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, {
        to: "/login",
        state: {
            referrer: window.location.pathname.slice(window.location.pathname.indexOf(openmrsSpaBase) + openmrsSpaBase.length - 1)
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ },

/***/ "./src/components/navbar/navbar.scss"
/*!*******************************************!*\
  !*** ./src/components/navbar/navbar.scss ***!
  \*******************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./navbar.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar/navbar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./navbar.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar/navbar.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./navbar.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/navbar/navbar.scss");
 return (function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/components/navbar/user-menu-button.component.tsx"
/*!**************************************************************!*\
  !*** ./src/components/navbar/user-menu-button.component.tsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _navbar_header_panels_user_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar-header-panels/user-menu-panel.component */ "./src/components/navbar-header-panels/user-menu-panel.component.tsx");
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.scss */ "./src/components/navbar/navbar.scss");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}







/**
 * This component displays the user menu button and the menu itself (when toggled on)
 */ var UserMenuButton = function(param) {
    var isActivePanel = param.isActivePanel, togglePanel = param.togglePanel, hidePanel = param.hidePanel;
    var userMenuItems = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useAssignedExtensions)('user-panel-slot');
    var showUserMenu = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function() {
        return userMenuItems.length > 0;
    }, [
        userMenuItems.length
    ]);
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;
    var userMenuRef = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.useOnClickOutside)(hidePanel('userMenu'), isActivePanel('userMenu'));
    var _obj;
    return showUserMenu && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        ref: userMenuRef,
        className: _navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].panelWrapper
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_0__.HeaderGlobalAction, {
        "aria-label": t('userMenuTooltip', 'My Account'),
        "aria-labelledby": "Users Avatar Icon",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_obj = {}, _define_property(_obj, _navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].headerGlobalBarButton, isActivePanel('userMenu')), _define_property(_obj, _navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].activePanel, !isActivePanel('userMenu')), _obj)),
        // @ts-ignore - `name` is not a valid prop for the HeaderGlobalAction component, but we need the name prop for user onboarding app to work correctly
        name: "User",
        isActive: isActivePanel('userMenu'),
        onClick: function() {
            togglePanel('userMenu');
        }
    }, isActivePanel('userMenu') ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.CloseIcon, {
        size: 20
    }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_1__.UserAvatarIcon, {
        size: 20
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_navbar_header_panels_user_menu_panel_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
        expanded: isActivePanel('userMenu'),
        hidePanel: hidePanel('userMenu')
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMenuButton);


/***/ },

/***/ "./src/components/user-panel-switcher-item/user-panel-switcher.component.tsx"
/*!***********************************************************************************!*\
  !*** ./src/components/user-panel-switcher-item/user-panel-switcher.component.tsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__);



var UserPanelSwitcher = function() {
    var _session_user_person, _session_user;
    var session = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_1__.SwitcherItem, {
        "aria-label": "User"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__.UserAvatarIcon, {
        size: 20
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : (_session_user_person = _session_user.person) === null || _session_user_person === void 0 ? void 0 : _session_user_person.display));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPanelSwitcher);


/***/ },

/***/ "./src/config-schema.ts"
/*!******************************!*\
  !*** ./src/config-schema.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configSchema: () => (/* binding */ configSchema)
/* harmony export */ });
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__);

var configSchema = {
    logo: {
        src: {
            _type: _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.Type.String,
            _default: '',
            _description: 'The path or URL to the logo image. If set to an empty string, the default OpenMRS SVG sprite will be used.',
            _validators: [
                _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.validators.isUrl
            ]
        },
        alt: {
            _type: _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.Type.String,
            _default: 'Logo',
            _description: 'The alternative text for the logo image, displayed when the image cannot be loaded or on hover.'
        },
        name: {
            _type: _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.Type.String,
            _default: '',
            _description: 'The organization name displayed when image is absent'
        },
        link: {
            _type: _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.Type.String,
            _default: '${openmrsSpaBase}/home',
            _description: 'The link to redirect to when the logo is clicked',
            _validators: [
                _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.validators.isUrl
            ]
        }
    },
    externalRefLinks: {
        _type: _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.Type.Array,
        _elements: {
            _type: _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.Type.Object,
            title: {
                _type: _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.Type.String,
                _description: 'Title of the link'
            },
            redirect: {
                _type: _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.Type.String,
                _description: 'Link to redirect to (must be an external link)',
                _validators: [
                    _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.validators.isUrl
                ]
            }
        },
        _default: [],
        _description: 'The external links to be showcased in the app menu'
    }
};


/***/ },

/***/ "./src/constants.ts"
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleName: () => (/* binding */ moduleName),
/* harmony export */   userPropertyChange: () => (/* binding */ userPropertyChange)
/* harmony export */ });
var userPropertyChange = 'user-property-change';
var moduleName = '@openmrs/esm-primary-navigation-app';


/***/ },

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appMenuButton: () => (/* binding */ appMenuButton),
/* harmony export */   changeLanguageLink: () => (/* binding */ changeLanguageLink),
/* harmony export */   changeLanguageModal: () => (/* binding */ changeLanguageModal),
/* harmony export */   dashboard: () => (/* binding */ dashboard),
/* harmony export */   importTranslation: () => (/* binding */ importTranslation),
/* harmony export */   linkComponent: () => (/* binding */ linkComponent),
/* harmony export */   navGroup: () => (/* binding */ navGroup),
/* harmony export */   redirect: () => (/* binding */ redirect),
/* harmony export */   root: () => (/* binding */ root),
/* harmony export */   startupApp: () => (/* binding */ startupApp),
/* harmony export */   userMenuButton: () => (/* binding */ userMenuButton),
/* harmony export */   userPanel: () => (/* binding */ userPanel)
/* harmony export */ });
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-schema */ "./src/config-schema.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.component */ "./src/root.component.tsx");
/* harmony import */ var _components_user_panel_switcher_item_user_panel_switcher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-panel-switcher-item/user-panel-switcher.component */ "./src/components/user-panel-switcher-item/user-panel-switcher.component.tsx");
/* harmony import */ var _components_change_language_change_language_link_extension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/change-language/change-language-link.extension */ "./src/components/change-language/change-language-link.extension.tsx");
/* harmony import */ var _components_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-group/nav-group.component */ "./src/components/nav-group/nav-group.component.tsx");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/components/dashboard/dashboard.component.tsx");
/* harmony import */ var _components_generic_link_generic_link_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/generic-link/generic-link.component */ "./src/components/generic-link/generic-link.component.tsx");
/* harmony import */ var _components_navbar_user_menu_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/user-menu-button.component */ "./src/components/navbar/user-menu-button.component.tsx");
/* harmony import */ var _components_navbar_app_menu_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/app-menu-button.component */ "./src/components/navbar/app-menu-button.component.tsx");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}











var importTranslation = __webpack_require__("./translations lazy .json$");
var options = {
    featureName: 'primary navigation',
    moduleName: _constants__WEBPACK_IMPORTED_MODULE_2__.moduleName
};
function startupApp() {
    (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.defineConfigSchema)(_constants__WEBPACK_IMPORTED_MODULE_2__.moduleName, _config_schema__WEBPACK_IMPORTED_MODULE_1__.configSchema);
    (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.defineExtensionConfigSchema)('link', _components_generic_link_generic_link_component__WEBPACK_IMPORTED_MODULE_8__.genericLinkConfigSchema);
    (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.defineExtensionConfigSchema)('nav-group', _components_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_6__.navGroupConfigSchema);
    (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.defineExtensionConfigSchema)('dashboard', _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.dashboardConfigSchema);
}
var root = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.getSyncLifecycle)(_root_component__WEBPACK_IMPORTED_MODULE_3__["default"], options);
var redirect = function() {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                {
                    bootstrap: function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.navigate)({
                                        to: '${openmrsSpaBase}/home'
                                    })
                                ];
                            });
                        })();
                    },
                    mount: function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    undefined
                                ];
                            });
                        })();
                    },
                    unmount: function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    undefined
                                ];
                            });
                        })();
                    }
                }
            ];
        });
    })();
};
var userMenuButton = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.getSyncLifecycle)(_components_navbar_user_menu_button_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
    featureName: 'user-menu-button',
    moduleName: _constants__WEBPACK_IMPORTED_MODULE_2__.moduleName
});
var userPanel = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.getSyncLifecycle)(_components_user_panel_switcher_item_user_panel_switcher_component__WEBPACK_IMPORTED_MODULE_4__["default"], options);
var changeLanguageLink = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.getSyncLifecycle)(_components_change_language_change_language_link_extension__WEBPACK_IMPORTED_MODULE_5__["default"], options);
var changeLanguageModal = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.getAsyncLifecycle)(function() {
    return __webpack_require__.e(/*! import() */ "src_components_change-language_change-language_modal_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./components/change-language/change-language.modal */ "./src/components/change-language/change-language.modal.tsx"));
}, options);
var appMenuButton = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.getSyncLifecycle)(_components_navbar_app_menu_button_component__WEBPACK_IMPORTED_MODULE_10__["default"], {
    featureName: 'app-menu-button',
    moduleName: _constants__WEBPACK_IMPORTED_MODULE_2__.moduleName
});
var linkComponent = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.getSyncLifecycle)(_components_generic_link_generic_link_component__WEBPACK_IMPORTED_MODULE_8__["default"], {
    featureName: 'Link',
    moduleName: _constants__WEBPACK_IMPORTED_MODULE_2__.moduleName
});
var navGroup = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.getSyncLifecycle)(_components_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_6__.NavGroup, options);
var dashboard = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.getAsyncLifecycle)(function() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/dashboard/dashboard.component */ "./src/components/dashboard/dashboard.component.tsx"));
}, options);


/***/ },

/***/ "./src/root.component.tsx"
/*!********************************!*\
  !*** ./src/root.component.tsx ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/components/navbar/navbar.component.tsx");
/* harmony import */ var _root_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.scss */ "./src/root.scss");




var Root = function() {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, {
        basename: window.getOpenmrsSpaBase()
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
        path: "login/*",
        element: null
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
        path: "logout/*",
        element: null
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
        path: "*",
        element: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: _root_scss__WEBPACK_IMPORTED_MODULE_3__["default"].primaryNavContainer
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["default"], null))
    })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Root);


/***/ },

/***/ "./src/root.scss"
/*!***********************!*\
  !*** ./src/root.scss ***!
  \***********************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./root.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/root.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./root.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/root.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./root.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/root.scss");
 return (function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_root_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/utils.ts"
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDesktop: () => (/* binding */ isDesktop)
/* harmony export */ });
var isDesktop = function(layout) {
    return layout === 'small-desktop' || layout === 'large-desktop';
};


/***/ },

/***/ "./translations lazy .json$"
/*!************************************************!*\
  !*** ./translations/ lazy nonrecursive .json$ ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./am.json": [
		"./translations/am.json",
		"translations_am_json"
	],
	"./ar.json": [
		"./translations/ar.json",
		"translations_ar_json"
	],
	"./ar_SY.json": [
		"./translations/ar_SY.json",
		"translations_ar_SY_json"
	],
	"./bn.json": [
		"./translations/bn.json",
		"translations_bn_json"
	],
	"./cs.json": [
		"./translations/cs.json",
		"translations_cs_json"
	],
	"./de.json": [
		"./translations/de.json",
		"translations_de_json"
	],
	"./en.json": [
		"./translations/en.json",
		"translations_en_json"
	],
	"./en_US.json": [
		"./translations/en_US.json",
		"translations_en_US_json"
	],
	"./es.json": [
		"./translations/es.json",
		"translations_es_json"
	],
	"./es_MX.json": [
		"./translations/es_MX.json",
		"translations_es_MX_json"
	],
	"./fr.json": [
		"./translations/fr.json",
		"translations_fr_json"
	],
	"./he.json": [
		"./translations/he.json",
		"translations_he_json"
	],
	"./hi.json": [
		"./translations/hi.json",
		"translations_hi_json"
	],
	"./hi_IN.json": [
		"./translations/hi_IN.json",
		"translations_hi_IN_json"
	],
	"./id.json": [
		"./translations/id.json",
		"translations_id_json"
	],
	"./it.json": [
		"./translations/it.json",
		"translations_it_json"
	],
	"./ka.json": [
		"./translations/ka.json",
		"translations_ka_json"
	],
	"./km.json": [
		"./translations/km.json",
		"translations_km_json"
	],
	"./ku.json": [
		"./translations/ku.json",
		"translations_ku_json"
	],
	"./ky.json": [
		"./translations/ky.json",
		"translations_ky_json"
	],
	"./lg.json": [
		"./translations/lg.json",
		"translations_lg_json"
	],
	"./ne.json": [
		"./translations/ne.json",
		"translations_ne_json"
	],
	"./pl.json": [
		"./translations/pl.json",
		"translations_pl_json"
	],
	"./pt.json": [
		"./translations/pt.json",
		"translations_pt_json"
	],
	"./pt_BR.json": [
		"./translations/pt_BR.json",
		"translations_pt_BR_json"
	],
	"./qu.json": [
		"./translations/qu.json",
		"translations_qu_json"
	],
	"./ro_RO.json": [
		"./translations/ro_RO.json",
		"translations_ro_RO_json"
	],
	"./ru_RU.json": [
		"./translations/ru_RU.json",
		"translations_ru_RU_json"
	],
	"./si.json": [
		"./translations/si.json",
		"translations_si_json"
	],
	"./sq.json": [
		"./translations/sq.json",
		"translations_sq_json"
	],
	"./sw.json": [
		"./translations/sw.json",
		"translations_sw_json"
	],
	"./sw_KE.json": [
		"./translations/sw_KE.json",
		"translations_sw_KE_json"
	],
	"./tr.json": [
		"./translations/tr.json",
		"translations_tr_json"
	],
	"./tr_TR.json": [
		"./translations/tr_TR.json",
		"translations_tr_TR_json"
	],
	"./uk.json": [
		"./translations/uk.json",
		"translations_uk_json"
	],
	"./uz.json": [
		"./translations/uz.json",
		"translations_uz_json"
	],
	"./uz@Latn.json": [
		"./translations/uz@Latn.json",
		"translations_uz_Latn_json"
	],
	"./uz_UZ.json": [
		"./translations/uz_UZ.json",
		"translations_uz_UZ_json"
	],
	"./vi.json": [
		"./translations/vi.json",
		"translations_vi_json"
	],
	"./zh.json": [
		"./translations/zh.json",
		"translations_zh_json"
	],
	"./zh_CN.json": [
		"./translations/zh_CN.json",
		"translations_zh_CN_json"
	],
	"./zh_TW.json": [
		"./translations/zh_TW.json",
		"translations_zh_TW_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./translations lazy .json$";
module.exports = webpackAsyncContext;

/***/ }

}]);
//# sourceMappingURL=src_index_ts.js.map