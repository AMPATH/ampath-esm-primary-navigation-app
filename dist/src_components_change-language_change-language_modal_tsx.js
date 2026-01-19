"use strict";
(globalThis["webpackChunk_openmrs_esm_primary_navigation_app"] = globalThis["webpackChunk_openmrs_esm_primary_navigation_app"] || []).push([["src_components_change-language_change-language_modal_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/change-language/change-language.scss"
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/change-language/change-language.scss ***!
  \**************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
___CSS_LOADER_EXPORT___.push([module.id, "/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: 4rem;\n  --workspace-header-height: 3rem;\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n/* These color variables will be removed in a future release */\n.-esm-primary-navigation__change-language__primaryNavContainer___FWRZu {\n  height: var(--omrs-topnav-height);\n}\n\n.-esm-primary-navigation__change-language__languageOptionsContainer___JOY8D {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 1rem;\n  max-height: 28rem;\n}\n\n.-esm-primary-navigation__change-language__languageRadioButton___TH0l6 {\n  display: flex;\n  height: 3rem;\n  align-items: center;\n  font-size: var(--cds-body-compact-01-font-size, 0.875rem);\n  font-weight: var(--cds-body-compact-01-font-weight, 400);\n  line-height: var(--cds-body-compact-01-line-height, 1.28572);\n  letter-spacing: var(--cds-body-compact-01-letter-spacing, 0.16px);\n}\n\n.-esm-primary-navigation__change-language__updateDefaultLocaleContainer___0lHQZ {\n  padding-top: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1.5rem;\n}\n\n.-esm-primary-navigation__change-language__updateDefaultLocaleExplainer___SCjNi {\n  font-size: var(--cds-body-compact-01-font-size, 0.875rem);\n  font-weight: var(--cds-body-compact-01-font-weight, 400);\n  line-height: var(--cds-body-compact-01-line-height, 1.28572);\n  letter-spacing: var(--cds-body-compact-01-letter-spacing, 0.16px);\n  color: #525252;\n}\n\n.-esm-primary-navigation__change-language__submitButton___a1yfJ .cds--inline-loading {\n  min-height: 1rem !important;\n}\n.-esm-primary-navigation__change-language__submitButton___a1yfJ .cds--inline-loading__text {\n  font-size: unset !important;\n}", "",{"version":3,"sources":["webpack://./node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/components/change-language/change-language.scss","webpack://./node_modules/@carbon/layout/scss/generated/_spacing.scss","webpack://./node_modules/@carbon/type/scss/_styles.scss"],"names":[],"mappings":"AAkCA,0EAAA;AAoBA;EACE,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,+BAAA;EACA,oGAAA;EACA,2GAAA;ACpDF;;ADgEA,8DAAA;ACrEA;EACE,iCAAA;AASF;;AANA;EACE,aAAA;EACA,sBAAA;EACA,oBCoBW;EDnBX,iBAAA;AASF;;AANA;EACE,aAAA;EACA,YCkCW;EDjCX,mBAAA;EEg1BE,yDAAA;EAAA,wDAAA;EAAA,4DAAA;EAAA,iEAAA;AFn0BJ;;AATA;EACE,mBCFW;EDGX,kBCOW;EDNX,mBCMW;EDLX,sBCUW;ADEb;;AATA;EEq0BI,yDAAA;EAAA,wDAAA;EAAA,4DAAA;EAAA,iEAAA;EFn0BF,cDxBQ;ACuCV;;AAXE;EACE,2BAAA;AAcJ;AAXE;EACE,2BAAA;AAaJ","sourcesContent":["@use '@carbon/layout';\n\n$ui-01: #f4f4f4;\n$ui-02: #ffffff;\n$ui-03: #e0e0e0;\n$ui-04: #8d8d8d;\n$ui-05: #161616;\n$text-02: #525252;\n$text-03: #a8a8a8;\n$ui-background: #ffffff;\n$color-gray-30: #c6c6c6;\n$color-gray-70: #525252;\n$color-gray-100: #161616;\n$color-blue-60-2: #0f62fe;\n$color-blue-10: #edf5ff;\n$color-yellow-50: #feecae;\n$carbon--red-50: #fa4d56;\n$inverse-link: #78a9ff;\n$support-02: #24a148;\n$inverse-support-03: #f1c21b;\n$warning-background: #fff8e1;\n$openmrs-background-grey: #f4f4f4;\n$danger: #da1e28;\n$interactive-01: #0f62fe;\n$field-01: #f4f4f4;\n$grey-2: #e0e0e0;\n$labeldropdown: #c6c6c6;\n\n$brand-primary-10: #d9fbfb;\n$brand-primary-20: #9ef0f0;\n$brand-primary-30: #3ddbd9;\n$brand-primary-40: #08bdba;\n$brand-primary-50: #009d9a;\n\n/* 60,70 and 80 are already declared as brand-01, 02 and 03 respectively */\n\n$brand-primary-90: #022b30;\n$brand-primary-100: #081a1c;\n\n@mixin brand-01($property) {\n  #{$property}: #005d5d;\n  #{$property}: var(--brand-01);\n}\n\n@mixin brand-02($property) {\n  #{$property}: #004144;\n  #{$property}: var(--brand-02);\n}\n\n@mixin brand-03($property) {\n  #{$property}: #007d79;\n  #{$property}: var(--brand-03);\n}\n\n:root {\n  --brand-01: #005d5d;\n  --brand-02: #004144;\n  --brand-03: #007d79;\n  --bottom-nav-height: #{layout.$spacing-10};\n  --workspace-header-height: #{layout.$spacing-09};\n  --tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--bottom-nav-height));\n  --desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height));\n}\n\n$breakpoint-phone-min: 0px;\n$breakpoint-phone-max: 600px;\n$breakpoint-tablet-min: 601px;\n$breakpoint-tablet-max: 1023px;\n$breakpoint-small-desktop-min: 1024px;\n$breakpoint-small-desktop-max: 1439px;\n$breakpoint-large-desktop-min: 1440px;\n$breakpoint-large-desktop-max: 99999999px;\n\n/* These color variables will be removed in a future release */\n$brand-teal-01: #007d79;\n$brand-01: #005d5d;\n$brand-02: #004144;\n","@use '@carbon/layout';\n@use '@carbon/type';\n@use '@openmrs/esm-styleguide/src/vars' as *;\n\n.primaryNavContainer {\n  height: var(--omrs-topnav-height);\n}\n\n.languageOptionsContainer {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: layout.$spacing-05;\n  max-height: 28rem;\n}\n\n.languageRadioButton {\n  display: flex;\n  height: layout.$spacing-09;\n  align-items: center;\n  @include type.type-style('body-compact-01');\n}\n\n.updateDefaultLocaleContainer {\n  padding-top: layout.$spacing-03;\n  padding-left: layout.$spacing-05;\n  padding-right: layout.$spacing-05;\n  padding-bottom: layout.$spacing-06;\n}\n\n.updateDefaultLocaleExplainer {\n  @include type.type-style('body-compact-01');\n  color: $text-02;\n}\n\n.submitButton {\n  :global(.cds--inline-loading) {\n    min-height: layout.$spacing-05 !important;\n  }\n\n  :global(.cds--inline-loading__text) {\n    font-size: unset !important;\n  }\n}\n","// Code generated by @carbon/layout. DO NOT EDIT.\n//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-01: 0.125rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-02: 0.25rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-03: 0.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-04: 0.75rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-05: 1rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-06: 1.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-07: 2rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-08: 2.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-09: 3rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-10: 4rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-11: 5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-12: 6rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-13: 10rem !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/layout\n$spacing: (\n  spacing-01: $spacing-01,\n  spacing-02: $spacing-02,\n  spacing-03: $spacing-03,\n  spacing-04: $spacing-04,\n  spacing-05: $spacing-05,\n  spacing-06: $spacing-06,\n  spacing-07: $spacing-07,\n  spacing-08: $spacing-08,\n  spacing-09: $spacing-09,\n  spacing-10: $spacing-10,\n  spacing-11: $spacing-11,\n  spacing-12: $spacing-12,\n  spacing-13: $spacing-13,\n);\n","//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n// stylelint-disable number-max-precision\n\n@use 'sass:map';\n@use 'sass:math';\n@use '@carbon/grid/scss/config' as gridconfig;\n@use '@carbon/grid/scss/breakpoint' as grid;\n@use 'prefix' as *;\n@use 'font-family';\n@use 'scale';\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$caption-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$caption-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$label-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$label-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$legal-01: (\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$legal-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$helper-text-01: (\n  font-size: scale.type-scale(1),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @deprecated\n/// @group @carbon/type\n$helper-text-02: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-short-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-compact-01: $body-short-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-long-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.42857,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-01: $body-long-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-short-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.375,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-compact-02: $body-short-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-long-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.5,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$body-02: $body-long-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$code-01: (\n  font-family: font-family.font-family('mono'),\n  font-size: scale.type-scale(1),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.33333,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$code-02: (\n  font-family: font-family.font-family('mono'),\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.42857,\n  letter-spacing: 0.32px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.42857,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-01: (\n  font-size: scale.type-scale(2),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.28572,\n  letter-spacing: 0.16px,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-compact-01: $productive-heading-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.5,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-02: (\n  font-size: scale.type-scale(3),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.375,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-compact-02: $productive-heading-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-03: (\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.4,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-03: $productive-heading-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-04: (\n  font-size: scale.type-scale(7),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-04: $productive-heading-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-05: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.25,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-05: $productive-heading-05 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-06: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  // Extra digit needed for precision in Chrome\n  line-height: 1.199,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-06: $productive-heading-06 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$productive-heading-07: (\n  font-size: scale.type-scale(12),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$heading-07: $productive-heading-07 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-01: $heading-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-02: $heading-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-03: (\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.4,\n  letter-spacing: 0,\n  breakpoints: (\n    xlg: (\n      font-size: scale.type-scale(5),\n      line-height: 1.4,\n    ),\n    max: (\n      font-size: scale.type-scale(6),\n      line-height: 1.334,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-03: $expressive-heading-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-04: (\n  font-size: scale.type-scale(7),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.28572,\n  letter-spacing: 0,\n  breakpoints: (\n    xlg: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n      font-weight: font-family.font-weight('regular'),\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      font-weight: font-family.font-weight('regular'),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-04: $expressive-heading-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-05: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      font-weight: font-family.font-weight('light'),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-05: $expressive-heading-05 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-heading-06: (\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-heading-06: $expressive-heading-06 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$expressive-paragraph-01: (\n  font-size: scale.type-scale(6),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.334,\n  letter-spacing: 0,\n  breakpoints: (\n    lg: (\n      font-size: scale.type-scale(7),\n      line-height: 1.28572,\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n    ),\n  ),\n);\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-paragraph-01: $expressive-paragraph-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$quotation-01: (\n  font-family: font-family.font-family('serif'),\n  font-size: scale.type-scale(5),\n  font-weight: font-family.font-weight('regular'),\n  line-height: 1.3,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(5),\n    ),\n    lg: (\n      font-size: scale.type-scale(6),\n      line-height: 1.334,\n    ),\n    xlg: (\n      font-size: scale.type-scale(7),\n      line-height: 1.28572,\n    ),\n    max: (\n      font-size: scale.type-scale(8),\n      line-height: 1.25,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-quotation-01: $quotation-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$quotation-02: (\n  font-family: font-family.font-family('serif'),\n  font-size: scale.type-scale(8),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.25,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(9),\n      line-height: 1.22,\n    ),\n    lg: (\n      font-size: scale.type-scale(10),\n      line-height: 1.19,\n    ),\n    xlg: (\n      font-size: scale.type-scale(11),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(13),\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-quotation-02: $quotation-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-01: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(10),\n    ),\n    lg: (\n      font-size: scale.type-scale(12),\n    ),\n    xlg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.17,\n    ),\n    max: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-01: $display-01 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-02: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('semibold'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(10),\n    ),\n    lg: (\n      font-size: scale.type-scale(12),\n    ),\n    xlg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.16,\n    ),\n    max: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-02: $display-02 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-03: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(12),\n      line-height: 1.18,\n    ),\n    lg: (\n      font-size: scale.type-scale(13),\n      line-height: 1.16,\n      letter-spacing: -0.64px,\n    ),\n    xlg: (\n      font-size: scale.type-scale(15),\n      line-height: 1.13,\n      letter-spacing: -0.64px,\n    ),\n    max: (\n      font-size: scale.type-scale(16),\n      line-height: 1.11,\n      letter-spacing: -0.96px,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-03: $display-03 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$display-04: (\n  font-size: scale.type-scale(10),\n  font-weight: font-family.font-weight('light'),\n  line-height: 1.19,\n  letter-spacing: 0,\n  breakpoints: (\n    md: (\n      font-size: scale.type-scale(14),\n      line-height: 1.15,\n    ),\n    lg: (\n      font-size: scale.type-scale(17),\n      line-height: 1.11,\n      letter-spacing: -0.64px,\n    ),\n    xlg: (\n      font-size: scale.type-scale(20),\n      line-height: 1.07,\n      letter-spacing: -0.64px,\n    ),\n    max: (\n      font-size: scale.type-scale(23),\n      line-height: 1.05,\n      letter-spacing: -0.96px,\n    ),\n  ),\n) !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$fluid-display-04: $display-04 !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/type\n$tokens: (\n  caption-01: $caption-01,\n  caption-02: $caption-02,\n  label-01: $label-01,\n  label-02: $label-02,\n  helper-text-01: $helper-text-01,\n  helper-text-02: $helper-text-02,\n  body-short-01: $body-short-01,\n  body-short-02: $body-short-02,\n  body-long-01: $body-long-01,\n  body-long-02: $body-long-02,\n  code-01: $code-01,\n  code-02: $code-02,\n  heading-01: $heading-01,\n  heading-02: $heading-02,\n  productive-heading-01: $productive-heading-01,\n  productive-heading-02: $productive-heading-02,\n  productive-heading-03: $productive-heading-03,\n  productive-heading-04: $productive-heading-04,\n  productive-heading-05: $productive-heading-05,\n  productive-heading-06: $productive-heading-06,\n  productive-heading-07: $productive-heading-07,\n  expressive-paragraph-01: $expressive-paragraph-01,\n  expressive-heading-01: $expressive-heading-01,\n  expressive-heading-02: $expressive-heading-02,\n  expressive-heading-03: $expressive-heading-03,\n  expressive-heading-04: $expressive-heading-04,\n  expressive-heading-05: $expressive-heading-05,\n  expressive-heading-06: $expressive-heading-06,\n  quotation-01: $quotation-01,\n  quotation-02: $quotation-02,\n  display-01: $display-01,\n  display-02: $display-02,\n  display-03: $display-03,\n  display-04: $display-04,\n  // V11 Tokens\n  legal-01: $legal-01,\n  legal-02: $legal-02,\n  body-compact-01: $body-compact-01,\n  body-compact-02: $body-compact-02,\n  heading-compact-01: $heading-compact-01,\n  heading-compact-02: $heading-compact-02,\n  body-01: $body-01,\n  body-02: $body-02,\n  heading-03: $heading-03,\n  heading-04: $heading-04,\n  heading-05: $heading-05,\n  heading-06: $heading-06,\n  heading-07: $heading-07,\n  fluid-heading-03: $fluid-heading-03,\n  fluid-heading-04: $fluid-heading-04,\n  fluid-heading-05: $fluid-heading-05,\n  fluid-heading-06: $fluid-heading-06,\n  fluid-paragraph-01: $fluid-paragraph-01,\n  fluid-quotation-01: $fluid-quotation-01,\n  fluid-quotation-02: $fluid-quotation-02,\n  fluid-display-01: $fluid-display-01,\n  fluid-display-02: $fluid-display-02,\n  fluid-display-03: $fluid-display-03,\n  fluid-display-04: $fluid-display-04,\n) !default;\n\n/// @param {Map} $map\n/// @access public\n/// @group @carbon/type\n@mixin properties($map) {\n  @each $name, $value in $map {\n    #{$name}: $value;\n  }\n}\n\n/// @param {Number} $value - Number with units\n/// @return {Number} Without units\n/// @access public\n/// @group @carbon/type\n@function strip-unit($value) {\n  @return math.div($value, $value * 0 + 1);\n}\n\n/// This helper includes fluid type styles for the given token value. Fluid type\n/// means that the `font-size` is computed using `calc()` in order to be\n/// determined by the screen size instead of a breakpoint. As a result, fluid\n/// styles should be used with caution in fixed width contexts.\n///\n/// In addition, we make use of %-based line-heights so that the line-height of\n/// each type style is computed correctly due to the dynamic nature of the\n/// `font-size`.\n///\n/// Most of the logic for this work comes from CSS Tricks:\n/// https://css-tricks.com/snippets/css/fluid-typography/\n///\n/// @param {Map} $type-styles - The value of a given type token\n/// @param {Map} $breakpoints [$grid-breakpoints] - Custom breakpoints to use\n/// @access public\n/// @group @carbon/type\n@mixin fluid-type($type-styles, $breakpoints: gridconfig.$grid-breakpoints) {\n  // Include the initial styles for the given token by default without any\n  // media query guard. This includes `font-size` as a fallback in the case\n  // that a browser does not support `calc()`\n  @include properties(map.remove($type-styles, breakpoints));\n  // We also need to include the `sm` styles by default since they don't\n  // appear in the fluid styles for tokens\n  @include fluid-type-size($type-styles, sm, $breakpoints);\n\n  // Finally, we need to go through all the breakpoints defined in the type\n  // token and apply the properties and fluid type size for that given\n  // breakpoint\n  @each $name, $values in map.get($type-styles, breakpoints) {\n    @include grid.breakpoint($name) {\n      @include properties($values);\n      @include fluid-type-size($type-styles, $name, $breakpoints);\n    }\n  }\n}\n\n/// Computes the fluid `font-size` for a given type style and breakpoint\n/// @param {Map} $type-styles - The styles for a given token\n/// @param {String} $name - The name of the breakpoint to which we apply the fluid\n/// @param {Map} $breakpoints [$grid-breakpoints] - The breakpoints for the grid system\n/// @access public\n/// @group @carbon/type\n@mixin fluid-type-size(\n  $type-styles,\n  $name,\n  $breakpoints: gridconfig.$grid-breakpoints\n) {\n  // Get the information about the breakpoint we're currently working in. Useful\n  // for getting initial width information\n  $breakpoint: map.get($breakpoints, $name);\n\n  // Our fluid styles are captured under the 'breakpoints' property in our type\n  // styles map. These define what values to treat as `max-` variables below\n  $fluid-sizes: map.get($type-styles, breakpoints);\n  $fluid-breakpoint: ();\n  // Special case for `sm` because the styles for small are on the type style\n  // directly\n  @if $name == sm {\n    $fluid-breakpoint: map.remove($type-styles, breakpoints);\n  } @else {\n    $fluid-breakpoint: map.get($fluid-sizes, $name);\n  }\n\n  // Initialize our font-sizes to the default size for the type style\n  $max-font-size: map.get($type-styles, font-size);\n  $min-font-size: map.get($type-styles, font-size);\n  @if map.has-key($fluid-breakpoint, font-size) {\n    $min-font-size: map.get($fluid-breakpoint, font-size);\n  }\n\n  // Initialize our min and max width to the width of the current breakpoint\n  $max-vw: map.get($breakpoint, width);\n  $min-vw: map.get($breakpoint, width);\n\n  // We can use `breakpoint-next` to see if there is another breakpoint we can\n  // use to update `max-font-size` and `max-vw` with larger values\n  $next-breakpoint-available: grid.breakpoint-next($name, $breakpoints);\n  $next-fluid-breakpoint-name: null;\n\n  // We need to figure out what the next available fluid breakpoint is for our\n  // given $type-styles. In this loop we try and iterate through breakpoints\n  // until we either manually set $next-breakpoint-available to null or\n  // `breakpoint-next` returns null.\n  @while $next-breakpoint-available {\n    @if map.has-key($fluid-sizes, $next-breakpoint-available) {\n      $next-fluid-breakpoint-name: $next-breakpoint-available;\n      $next-breakpoint-available: null;\n    } @else {\n      $next-breakpoint-available: grid.breakpoint-next(\n        $next-breakpoint-available,\n        $breakpoints\n      );\n    }\n  }\n\n  // If we have found the next available fluid breakpoint name, then we know\n  // that we have values that we can use to set max-font-size and max-vw as both\n  // values derive from the next breakpoint\n  @if $next-fluid-breakpoint-name {\n    $next-fluid-breakpoint: map.get($breakpoints, $next-fluid-breakpoint-name);\n    $max-font-size: map.get(\n      map.get($fluid-sizes, $next-fluid-breakpoint-name),\n      font-size\n    );\n    $max-vw: map.get($next-fluid-breakpoint, width);\n\n    // prettier-ignore\n    font-size: calc(#{$min-font-size} +\n      #{strip-unit($max-font-size - $min-font-size)} *\n      ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)})\n    );\n  } @else {\n    // Otherwise, just default to setting the font size found from the type\n    // style or the given fluid breakpoint in the type style\n    font-size: $min-font-size;\n  }\n}\n\n// TODO move following variable and `custom-property` mixin into shared file for\n// both `@carbon/type` and `@carbon/themes`\n\n/// @access private\n/// @group @carbon/type\n@mixin custom-properties($name, $value) {\n  @each $property, $value in $value {\n    #{$property}: var(\n      --#{$custom-property-prefix}-#{$name}-#{$property},\n      #{$value}\n    );\n  }\n}\n\n/// Helper mixin to include the styles for a given token in any selector in your\n/// project. Also includes an optional fluid option that will enable fluid\n/// styles for the token if they are defined. Fluid styles will cause the\n/// token's font-size to be computed based on the viewport size. As a result, use\n/// with caution in fixed contexts.\n/// @param {String} $name - The name of the token to get the styles for\n/// @param {Boolean} $fluid [false] - Specify whether to include fluid styles for the\n/// @param {Map} $breakpoints [$grid-breakpoints] - Provide a custom breakpoint map to use\n/// @access public\n/// @group @carbon/type\n@mixin type-style(\n  $name,\n  $fluid: false,\n  $breakpoints: gridconfig.$grid-breakpoints\n) {\n  @if not map.has-key($tokens, $name) {\n    @error 'Unable to find a token with the name: `#{$name}`';\n  }\n\n  $token: map.get($tokens, $name);\n\n  // If $fluid is set to true and the token has breakpoints defined for fluid\n  // styles, delegate to the fluid-type helper for the given token\n  @if $fluid == true and map.has-key($token, 'breakpoints') {\n    @include fluid-type($token, $breakpoints);\n  } @else {\n    @include custom-properties($name, $token);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"primaryNavContainer": "-esm-primary-navigation__change-language__primaryNavContainer___FWRZu",
	"languageOptionsContainer": "-esm-primary-navigation__change-language__languageOptionsContainer___JOY8D",
	"languageRadioButton": "-esm-primary-navigation__change-language__languageRadioButton___TH0l6",
	"updateDefaultLocaleContainer": "-esm-primary-navigation__change-language__updateDefaultLocaleContainer___0lHQZ",
	"updateDefaultLocaleExplainer": "-esm-primary-navigation__change-language__updateDefaultLocaleExplainer___SCjNi",
	"submitButton": "-esm-primary-navigation__change-language__submitButton___a1yfJ"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./src/components/change-language/change-language.modal.tsx"
/*!******************************************************************!*\
  !*** ./src/components/change-language/change-language.modal.tsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeLanguageModal)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/capitalize.js");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _change_language_resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-language.resource */ "./src/components/change-language/change-language.resource.ts");
/* harmony import */ var _change_language_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-language.scss */ "./src/components/change-language/change-language.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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








function ChangeLanguageModal(param) {
    var close = param.close;
    var _ref;
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)().t;
    var session = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    var user = session === null || session === void 0 ? void 0 : session.user;
    var allowedLocales = (_ref = session === null || session === void 0 ? void 0 : session.allowedLocales) !== null && _ref !== void 0 ? _ref : [];
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(session === null || session === void 0 ? void 0 : session.locale), 2), selectedLocale = _useState[0], setSelectedLocale = _useState[1];
    var _useState1 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), shouldChangeDefaultLocale = _useState1[0], setShouldChangeDefaultLocale = _useState1[1];
    var _useState2 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isChangingLanguage = _useState2[0], setIsChangingLanguage = _useState2[1];
    var ac = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_5__.useAbortController)();
    var handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {
        setIsChangingLanguage(true);
        if (selectedLocale && selectedLocale !== (session === null || session === void 0 ? void 0 : session.locale)) {
            var formattedLocale = selectedLocale.replace(/-/gi, '_');
            if (shouldChangeDefaultLocale) {
                var _user_userProperties;
                (0,_change_language_resource__WEBPACK_IMPORTED_MODULE_6__.updateUserProperties)(user.uuid, _object_spread_props(_object_spread({}, (_user_userProperties = user.userProperties) !== null && _user_userProperties !== void 0 ? _user_userProperties : {}), {
                    defaultLocale: formattedLocale
                }), ac);
            } else {
                (0,_change_language_resource__WEBPACK_IMPORTED_MODULE_6__.updateSessionLocale)(formattedLocale, ac);
            }
        }
    }, [
        user.userProperties,
        user.uuid,
        selectedLocale,
        shouldChangeDefaultLocale
    ]);
    var languageNames = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        return Object.fromEntries(allowedLocales.map(function(locale) {
            return [
                locale,
                new Intl.DisplayNames([
                    locale
                ], {
                    type: 'language'
                }).of(locale)
            ];
        }));
    }, [
        allowedLocales
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_4__.ModalHeader, {
        closeModal: close,
        title: t('changeLanguage', 'Change language')
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_4__.ModalBody, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: _change_language_scss__WEBPACK_IMPORTED_MODULE_7__["default"].languageOptionsContainer
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
        valueSelected: selectedLocale,
        orientation: "vertical",
        name: "Language options",
        onChange: function(locale) {
            return setSelectedLocale(locale.toString());
        }
    }, allowedLocales.map(function(locale, i) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_4__.RadioButton, {
            className: _change_language_scss__WEBPACK_IMPORTED_MODULE_7__["default"].languageRadioButton,
            key: "locale-option-".concat(locale, "-").concat(i),
            id: "locale-option-".concat(locale, "-").concat(i),
            name: locale,
            labelText: (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(languageNames[locale]),
            value: locale
        });
    })))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cds--layer-two', _change_language_scss__WEBPACK_IMPORTED_MODULE_7__["default"].updateDefaultLocaleContainer),
        role: "region"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
        id: "change-default-locale",
        labelText: t('changeDefaultLocale', 'Save as my default language'),
        checked: shouldChangeDefaultLocale,
        onChange: function(_, param) {
            var checked = param.checked;
            return setShouldChangeDefaultLocale(checked);
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_change_language_scss__WEBPACK_IMPORTED_MODULE_7__["default"].updateDefaultLocaleExplainer)
    }, t('changeDefaultLocaleExplanation', 'Leave this unchecked to change language for this session only'))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_4__.ModalFooter, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
        kind: "secondary",
        onClick: close
    }, t('cancel', 'Cancel')), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: _change_language_scss__WEBPACK_IMPORTED_MODULE_7__["default"].submitButton,
        disabled: isChangingLanguage || selectedLocale === (session === null || session === void 0 ? void 0 : session.locale),
        type: "submit",
        onClick: handleSubmit
    }, isChangingLanguage ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_4__.InlineLoading, {
        description: t('changingLanguage', 'Changing language') + '...'
    }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, t('change', 'Change')))));
}


/***/ },

/***/ "./src/components/change-language/change-language.resource.ts"
/*!********************************************************************!*\
  !*** ./src/components/change-language/change-language.resource.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateSessionLocale: () => (/* binding */ updateSessionLocale),
/* harmony export */   updateUserProperties: () => (/* binding */ updateUserProperties)
/* harmony export */ });
/* harmony import */ var _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmrs/esm-framework/src/internal */ "webpack/sharing/consume/default/@openmrs/esm-framework/src/internal/@openmrs/esm-framework/src/internal");
/* harmony import */ var _openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_0__);
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

function updateUserProperties(userUuid, userProperties, abortController) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_0__.openmrsFetch)("".concat(_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_0__.restBaseUrl, "/user/").concat(userUuid), {
                            method: 'POST',
                            body: {
                                userProperties: userProperties
                            },
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal
                        })
                    ];
                case 1:
                    _state.sent();
                    // Force the reload of the page to ensure all data coming from the backend is fetched in the newly set locale.
                    window.location.reload();
                    return [
                        2
                    ];
            }
        });
    })();
}
function updateSessionLocale(locale, abortController) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_0__.openmrsFetch)("".concat(_openmrs_esm_framework_src_internal__WEBPACK_IMPORTED_MODULE_0__.restBaseUrl, "/session"), {
                            method: 'POST',
                            body: {
                                locale: locale
                            },
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal
                        })
                    ];
                case 1:
                    _state.sent();
                    // Force the reload of the page to ensure all data coming from the backend is fetched in the newly set locale.
                    window.location.reload();
                    return [
                        2
                    ];
            }
        });
    })();
}


/***/ },

/***/ "./src/components/change-language/change-language.scss"
/*!*************************************************************!*\
  !*** ./src/components/change-language/change-language.scss ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./change-language.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/change-language/change-language.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./change-language.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/change-language/change-language.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./change-language.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/change-language/change-language.scss");
 return (function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_change_language_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }

}]);
//# sourceMappingURL=src_components_change-language_change-language_modal_tsx.js.map