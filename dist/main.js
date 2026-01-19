/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@carbon/icon-helpers/es/index.js"
/*!*******************************************************!*\
  !*** ./node_modules/@carbon/icon-helpers/es/index.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAttributes: () => (/* binding */ defaultAttributes),
/* harmony export */   formatAttributes: () => (/* binding */ formatAttributes),
/* harmony export */   getAttributes: () => (/* binding */ getAttributes),
/* harmony export */   toSVG: () => (/* binding */ toSVG),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var _excluded = ["width", "height", "viewBox"],
  _excluded2 = ["tabindex"];
/**
 * Copyright IBM Corp. 2018, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  // Reference:
  // https://github.com/IBM/carbon-components-react/issues/1392
  // https://github.com/PolymerElements/iron-iconset-svg/pull/47
  // `focusable` is a string attribute which is why we do not use a boolean here
  focusable: 'false',
  preserveAspectRatio: 'xMidYMid meet'
};

/**
 * Get supplementary HTML attributes for a given <svg> element based on existing
 * attributes.
 */
function getAttributes() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    width = _ref.width,
    height = _ref.height,
    _ref$viewBox = _ref.viewBox,
    viewBox = _ref$viewBox === void 0 ? "0 0 ".concat(width, " ").concat(height) : _ref$viewBox,
    attributes = _objectWithoutProperties(_ref, _excluded);
  var tabindex = attributes.tabindex,
    rest = _objectWithoutProperties(attributes, _excluded2);
  var iconAttributes = _objectSpread2(_objectSpread2(_objectSpread2({}, defaultAttributes), rest), {}, {
    width: width,
    height: height,
    viewBox: viewBox
  });

  // TODO: attributes.title assumes that the consumer will implement <title> and
  // correctly set `aria-labelledby`.
  if (iconAttributes['aria-label'] || iconAttributes['aria-labelledby'] || iconAttributes.title) {
    iconAttributes.role = 'img';

    // Reference:
    // https://allyjs.io/tutorials/focusing-in-svg.html
    if (tabindex !== undefined && tabindex !== null) {
      iconAttributes.focusable = 'true';
      iconAttributes.tabindex = tabindex;
    }
  } else {
    iconAttributes['aria-hidden'] = true;
  }
  return iconAttributes;
}

/**
 * Copyright IBM Corp. 2018, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Convert an icon descriptor to a String
 */
function toString(descriptor) {
  var _descriptor$elem = descriptor.elem,
    elem = _descriptor$elem === void 0 ? 'svg' : _descriptor$elem,
    _descriptor$attrs = descriptor.attrs,
    attrs = _descriptor$attrs === void 0 ? {} : _descriptor$attrs,
    _descriptor$content = descriptor.content,
    content = _descriptor$content === void 0 ? [] : _descriptor$content;
  var children = content.map(toString).join('');
  if (elem !== 'svg') {
    return "<".concat(elem, " ").concat(formatAttributes(attrs), ">").concat(children, "</").concat(elem, ">");
  }
  return "<".concat(elem, " ").concat(formatAttributes(getAttributes(attrs)), ">").concat(children, "</").concat(elem, ">");
}
function formatAttributes(attrs) {
  return Object.keys(attrs).reduce(function (acc, key, index) {
    var attribute = "".concat(key, "=\"").concat(attrs[key], "\"");
    if (index === 0) {
      return attribute;
    }
    return acc + ' ' + attribute;
  }, '');
}

/**
 * Copyright IBM Corp. 2018, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Convert an icon descriptor to a DOM node.
 */
function toSVG(descriptor) {
  var _descriptor$elem = descriptor.elem,
    elem = _descriptor$elem === void 0 ? 'svg' : _descriptor$elem,
    _descriptor$attrs = descriptor.attrs,
    attrs = _descriptor$attrs === void 0 ? {} : _descriptor$attrs,
    _descriptor$content = descriptor.content,
    content = _descriptor$content === void 0 ? [] : _descriptor$content;
  var node = document.createElementNS('http://www.w3.org/2000/svg', elem);
  var attributes = elem !== 'svg' ? attrs : getAttributes(attrs);
  Object.keys(attributes).forEach(function (key) {
    node.setAttribute(key, attrs[key]);
  });
  for (var i = 0; i < content.length; i++) {
    node.appendChild(toSVG(content[i]));
  }
  return node;
}




/***/ },

/***/ "./node_modules/@carbon/icons-react/es/Icon.js"
/*!*****************************************************!*\
  !*** ./node_modules/@carbon/icons-react/es/Icon.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/icon-helpers */ "./node_modules/@carbon/icon-helpers/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */




/**
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(function Icon({
  className,
  children,
  tabIndex,
  xmlns = 'http://www.w3.org/2000/svg',
  preserveAspectRatio = 'xMidYMid meet',
  ...rest
}, ref) {
  const {
    tabindex,
    ...attrs
  } = (0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__.getAttributes)({
    ...rest,
    tabindex: tabIndex
  });
  const props = attrs;
  if (className) {
    props.className = className;
  }
  if (tabindex !== undefined && tabindex !== null) {
    if (typeof tabindex === 'number') {
      props.tabIndex = tabindex;
    } else {
      props.tabIndex = Number(tabIndex);
    }
  }
  if (ref) {
    props.ref = ref;
  }
  if (xmlns) {
    props.xmlns = xmlns;
  }
  if (preserveAspectRatio) {
    props.preserveAspectRatio = preserveAspectRatio;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement('svg', props, children);
});
Icon.displayName = 'Icon';
Icon.propTypes = {
  'aria-hidden': prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['true', 'false'])]),
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  'aria-labelledby': (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  preserveAspectRatio: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  viewBox: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  xmlns: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};




/***/ },

/***/ "./node_modules/@carbon/icons-react/es/generated/bucket-10.js"
/*!********************************************************************!*\
  !*** ./node_modules/@carbon/icons-react/es/generated/bucket-10.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageReference: () => (/* binding */ ImageReference),
/* harmony export */   ImageSearch: () => (/* binding */ ImageSearch),
/* harmony export */   ImageSearchAlt: () => (/* binding */ ImageSearchAlt),
/* harmony export */   ImageService: () => (/* binding */ ImageService),
/* harmony export */   ImageStoreLocal: () => (/* binding */ ImageStoreLocal),
/* harmony export */   ImportExport: () => (/* binding */ ImportExport),
/* harmony export */   Important: () => (/* binding */ Important),
/* harmony export */   ImproveRelevance: () => (/* binding */ ImproveRelevance),
/* harmony export */   InProgress: () => (/* binding */ InProgress),
/* harmony export */   InProgressError: () => (/* binding */ InProgressError),
/* harmony export */   InProgressWarning: () => (/* binding */ InProgressWarning),
/* harmony export */   IncidentReporter: () => (/* binding */ IncidentReporter),
/* harmony export */   Incomplete: () => (/* binding */ Incomplete),
/* harmony export */   IncompleteCancel: () => (/* binding */ IncompleteCancel),
/* harmony export */   IncompleteError: () => (/* binding */ IncompleteError),
/* harmony export */   IncompleteWarning: () => (/* binding */ IncompleteWarning),
/* harmony export */   IncreaseLevel: () => (/* binding */ IncreaseLevel),
/* harmony export */   Industry: () => (/* binding */ Industry),
/* harmony export */   InfinitySymbol: () => (/* binding */ InfinitySymbol),
/* harmony export */   Information: () => (/* binding */ Information),
/* harmony export */   InformationDisabled: () => (/* binding */ InformationDisabled),
/* harmony export */   InformationFilled: () => (/* binding */ InformationFilled),
/* harmony export */   InformationSquare: () => (/* binding */ InformationSquare),
/* harmony export */   InformationSquareFilled: () => (/* binding */ InformationSquareFilled),
/* harmony export */   InfrastructureClassic: () => (/* binding */ InfrastructureClassic),
/* harmony export */   Insert: () => (/* binding */ Insert),
/* harmony export */   InsertPage: () => (/* binding */ InsertPage),
/* harmony export */   InsertSyntax: () => (/* binding */ InsertSyntax),
/* harmony export */   Inspection: () => (/* binding */ Inspection),
/* harmony export */   InstanceBx: () => (/* binding */ InstanceBx),
/* harmony export */   InstanceClassic: () => (/* binding */ InstanceClassic),
/* harmony export */   InstanceCx: () => (/* binding */ InstanceCx),
/* harmony export */   InstanceMx: () => (/* binding */ InstanceMx),
/* harmony export */   InstanceVirtual: () => (/* binding */ InstanceVirtual),
/* harmony export */   Integration: () => (/* binding */ Integration),
/* harmony export */   IntentRequestActive: () => (/* binding */ IntentRequestActive),
/* harmony export */   IntentRequestCreate: () => (/* binding */ IntentRequestCreate),
/* harmony export */   IntentRequestHeal: () => (/* binding */ IntentRequestHeal),
/* harmony export */   IntentRequestInactive: () => (/* binding */ IntentRequestInactive),
/* harmony export */   IntentRequestScaleIn: () => (/* binding */ IntentRequestScaleIn),
/* harmony export */   IntentRequestScaleOut: () => (/* binding */ IntentRequestScaleOut),
/* harmony export */   IntentRequestUninstall: () => (/* binding */ IntentRequestUninstall),
/* harmony export */   IntentRequestUpgrade: () => (/* binding */ IntentRequestUpgrade),
/* harmony export */   Interactions: () => (/* binding */ Interactions),
/* harmony export */   InterfaceDefinition: () => (/* binding */ InterfaceDefinition),
/* harmony export */   InterfaceDefinitionAlt: () => (/* binding */ InterfaceDefinitionAlt),
/* harmony export */   InterfaceUsage: () => (/* binding */ InterfaceUsage),
/* harmony export */   InterfaceUsageAlt: () => (/* binding */ InterfaceUsageAlt),
/* harmony export */   InterfaceUsage_1: () => (/* binding */ InterfaceUsage_1),
/* harmony export */   Intersect: () => (/* binding */ Intersect),
/* harmony export */   IntrusionPrevention: () => (/* binding */ IntrusionPrevention),
/* harmony export */   InventoryManagement: () => (/* binding */ InventoryManagement),
/* harmony export */   IotConnect: () => (/* binding */ IotConnect),
/* harmony export */   IotPlatform: () => (/* binding */ IotPlatform),
/* harmony export */   Ip: () => (/* binding */ Ip),
/* harmony export */   Iso: () => (/* binding */ Iso),
/* harmony export */   IsoFilled: () => (/* binding */ IsoFilled),
/* harmony export */   IsoOutline: () => (/* binding */ IsoOutline),
/* harmony export */   ItemDefinition: () => (/* binding */ ItemDefinition),
/* harmony export */   ItemUsage: () => (/* binding */ ItemUsage),
/* harmony export */   Java: () => (/* binding */ Java),
/* harmony export */   Jcl: () => (/* binding */ Jcl),
/* harmony export */   JobDaemon: () => (/* binding */ JobDaemon),
/* harmony export */   JobRun: () => (/* binding */ JobRun),
/* harmony export */   JoinFull: () => (/* binding */ JoinFull),
/* harmony export */   JoinInner: () => (/* binding */ JoinInner),
/* harmony export */   JoinInnerAlt: () => (/* binding */ JoinInnerAlt),
/* harmony export */   JoinLeft: () => (/* binding */ JoinLeft),
/* harmony export */   JoinLeftOuter: () => (/* binding */ JoinLeftOuter),
/* harmony export */   JoinNode: () => (/* binding */ JoinNode),
/* harmony export */   JoinOuter: () => (/* binding */ JoinOuter),
/* harmony export */   JoinRight: () => (/* binding */ JoinRight),
/* harmony export */   JoinRightOuter: () => (/* binding */ JoinRightOuter),
/* harmony export */   Jpg: () => (/* binding */ Jpg),
/* harmony export */   JsError: () => (/* binding */ JsError),
/* harmony export */   Json: () => (/* binding */ Json),
/* harmony export */   JsonReference: () => (/* binding */ JsonReference),
/* harmony export */   JumpLink: () => (/* binding */ JumpLink),
/* harmony export */   KeepDry: () => (/* binding */ KeepDry),
/* harmony export */   Key: () => (/* binding */ Key),
/* harmony export */   Keyboard: () => (/* binding */ Keyboard),
/* harmony export */   KeyboardOff: () => (/* binding */ KeyboardOff),
/* harmony export */   KioskDevice: () => (/* binding */ KioskDevice),
/* harmony export */   Kubelet: () => (/* binding */ Kubelet),
/* harmony export */   Kubernetes: () => (/* binding */ Kubernetes),
/* harmony export */   KubernetesControlPlaneNode: () => (/* binding */ KubernetesControlPlaneNode),
/* harmony export */   KubernetesIpAddress: () => (/* binding */ KubernetesIpAddress),
/* harmony export */   KubernetesOperator: () => (/* binding */ KubernetesOperator),
/* harmony export */   KubernetesPod: () => (/* binding */ KubernetesPod),
/* harmony export */   KubernetesWorkerNode: () => (/* binding */ KubernetesWorkerNode),
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   Language: () => (/* binding */ Language),
/* harmony export */   Laptop: () => (/* binding */ Laptop),
/* harmony export */   Lasso: () => (/* binding */ Lasso),
/* harmony export */   LassoPolygon: () => (/* binding */ LassoPolygon),
/* harmony export */   Launch: () => (/* binding */ Launch),
/* harmony export */   Layers: () => (/* binding */ Layers),
/* harmony export */   LayersExternal: () => (/* binding */ LayersExternal),
/* harmony export */   Legend: () => (/* binding */ Legend),
/* harmony export */   LetterAa: () => (/* binding */ LetterAa),
/* harmony export */   LetterBb: () => (/* binding */ LetterBb),
/* harmony export */   LetterCc: () => (/* binding */ LetterCc),
/* harmony export */   LetterDd: () => (/* binding */ LetterDd),
/* harmony export */   LetterEe: () => (/* binding */ LetterEe),
/* harmony export */   LetterFf: () => (/* binding */ LetterFf),
/* harmony export */   LetterGg: () => (/* binding */ LetterGg),
/* harmony export */   LetterHh: () => (/* binding */ LetterHh),
/* harmony export */   LetterIi: () => (/* binding */ LetterIi),
/* harmony export */   LetterJj: () => (/* binding */ LetterJj),
/* harmony export */   LetterKk: () => (/* binding */ LetterKk),
/* harmony export */   LetterLl: () => (/* binding */ LetterLl),
/* harmony export */   LetterMm: () => (/* binding */ LetterMm),
/* harmony export */   LetterNn: () => (/* binding */ LetterNn),
/* harmony export */   LetterOo: () => (/* binding */ LetterOo),
/* harmony export */   LetterPp: () => (/* binding */ LetterPp),
/* harmony export */   LetterQq: () => (/* binding */ LetterQq),
/* harmony export */   LetterRr: () => (/* binding */ LetterRr),
/* harmony export */   LetterSs: () => (/* binding */ LetterSs),
/* harmony export */   WatsonHealthImageAvailabilityLocal: () => (/* binding */ WatsonHealthImageAvailabilityLocal),
/* harmony export */   WatsonHealthImageAvailabilityRetrieving: () => (/* binding */ WatsonHealthImageAvailabilityRetrieving),
/* harmony export */   WatsonHealthImageAvailabilityUnavailable: () => (/* binding */ WatsonHealthImageAvailabilityUnavailable),
/* harmony export */   WatsonHealthInteractiveSegmentationCursor: () => (/* binding */ WatsonHealthInteractiveSegmentationCursor),
/* harmony export */   WatsonHealthLaunchStudy_1: () => (/* binding */ WatsonHealthLaunchStudy_1),
/* harmony export */   WatsonHealthLaunchStudy_2: () => (/* binding */ WatsonHealthLaunchStudy_2),
/* harmony export */   WatsonHealthLaunchStudy_3: () => (/* binding */ WatsonHealthLaunchStudy_3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon.js */ "./node_modules/@carbon/icons-react/es/Icon.js");
/* harmony import */ var _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iconPropTypes-C5chbmyn.js */ "./node_modules/@carbon/icons-react/es/iconPropTypes-C5chbmyn.js");
/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */






var _path, _path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9, _path0, _path1, _path10, _circle, _path11, _path12, _path13, _circle2, _path14, _path15, _path16, _path17, _path18, _path19, _path20, _path21, _path22, _path23, _path24, _path25, _path26, _path27, _path28, _circle3, _path29, _path30, _path31, _path32, _path33, _path34, _path35, _path36, _path37, _path38, _path39, _path40, _path41, _path42, _path43, _path44, _path45, _path46, _path47, _path48, _path49, _path50, _path51, _path52, _path53, _path54, _path55, _path56, _path57, _path58, _path59, _path60, _path61, _path62, _path63, _path64, _path65, _path66, _path67, _path68, _path69, _path70, _path71, _path72, _path73, _path74, _path75, _path76, _path77, _path78, _path79, _path80, _path81, _path82, _path83, _path84, _path85, _path86, _path87, _path88, _path89, _path90, _path91, _circle4, _path92, _path93, _path94, _path95, _path96, _path97, _path98, _circle5, _path99, _circle6, _path100, _path101, _path102, _path103, _path104, _path105, _path106, _path107, _path108, _path109, _circle7, _path110, _path111, _path112, _path113, _path114, _path115, _circle8, _path116, _path117, _path118, _path119, _path120, _path121, _path122, _path123, _path124, _path125, _path126, _path127, _path128, _path129, _circle9, _circle0, _circle1, _path130, _path131, _path132, _path133, _path134, _path135, _path136, _path137, _path138, _path139, _path140, _path141, _path142, _path143, _path144, _path145, _path146, _path147, _path148, _path149, _path150, _path151, _path152, _path153, _path154, _path155, _path156, _path157, _path158, _path159, _circle10, _path160, _path161, _path162, _path163, _path164, _path165, _path166, _path167, _path168, _path169, _path170, _path171, _path172, _path173, _path174, _path175, _path176, _path177, _path178, _path179, _path180, _path181, _path182, _path183, _path184, _path185, _path186, _path187, _path188, _path189, _path190, _path191, _path192, _path193, _path194, _path195, _path196, _path197, _path198, _path199, _path200, _path201, _path202, _path203, _path204, _path205, _path206, _path207, _path208, _path209, _path210, _path211, _path212, _path213, _path214, _path215, _path216, _path217, _path218, _path219, _path220, _path221, _path222, _path223, _path224, _path225, _path226, _path227, _path228, _path229, _path230, _path231, _path232, _path233, _path234, _path235, _path236, _path237, _path238, _path239, _path240, _path241, _path242, _path243, _path244, _path245, _path246, _path247, _path248, _path249, _path250, _path251, _path252, _path253, _path254, _path255, _path256, _path257, _path258, _path259, _path260, _path261, _path262, _path263, _path264, _path265, _circle11, _circle12, _path266, _path267, _path268, _path269, _path270, _path271, _path272, _path273, _path274, _path275, _path276, _path277, _path278, _path279, _path280, _path281, _path282, _path283, _path284, _path285, _path286, _path287, _path288, _path289, _circle13, _path290, _path291, _path292, _circle14, _path293, _path294, _path295, _circle15, _path296, _path297, _path298, _path299, _path300, _path301, _path302, _path303, _path304, _path305, _path306, _path307, _rect, _path308, _path309, _path310, _path311, _path312, _path313, _path314, _path315, _path316, _path317, _path318, _path319, _path320, _path321, _path322, _path323, _path324, _path325, _path326, _path327, _path328, _path329, _path330, _path331, _path332, _path333, _path334, _path335, _path336, _path337, _path338, _path339, _path340, _path341, _path342, _path343, _path344, _path345, _path346, _path347, _path348, _path349;
const didWarnAboutDeprecation = {};
const ImageReference = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function ImageReference({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4 20 4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19,14a3,3,0,1,0-3-3A3,3,0,0,0,19,14Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,19,10Z"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,4H6A2,2,0,0,0,4,6V16H6V6H26V21.17l-3.59-3.59a2,2,0,0,0-2.82,0L18,19.17,11.8308,13l-1.4151,1.4155L14,18l2.59,2.59a2,2,0,0,0,2.82,0L21,19l5,5v2H16v2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4Z"
  })), children);
});
if (true) {
  ImageReference.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const ImageSearch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function ImageSearch({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M24,14a5.99,5.99,0,0,0-4.885,9.4712L14,28.5859,15.4141,30l5.1147-5.1147A5.9971,5.9971,0,1,0,24,14Zm0,10a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,24,24Z"
  })), _path5 || (_path5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17,12a3,3,0,1,0-3-3A3.0033,3.0033,0,0,0,17,12Zm0-4a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,17,8Z"
  })), _path6 || (_path6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12,24H4V17.9966L9,13l5.5859,5.5859L16,17.168l-5.5859-5.5855a2,2,0,0,0-2.8282,0L4,15.168V4H24v6h2V4a2.0023,2.0023,0,0,0-2-2H4A2.002,2.002,0,0,0,2,4V24a2.0023,2.0023,0,0,0,2,2h8Z"
  })), children);
});
if (true) {
  ImageSearch.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const ImageSearchAlt = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function ImageSearchAlt({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path7 || (_path7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10,16a5.9908,5.9908,0,0,0,9.4712,4.8853L24.5859,26,26,24.5859l-5.115-5.1147A5.997,5.997,0,1,0,10,16Zm2,0a4,4,0,1,1,4,4A4.0045,4.0045,0,0,1,12,16Z"
  })), _path8 || (_path8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M29,7H22.54L20.83,4.45A.9946.9946,0,0,0,20,4H12a.9946.9946,0,0,0-.83.45L9.46,7H3A1.0031,1.0031,0,0,0,2,8V25a1.0031,1.0031,0,0,0,1,1h9V24H4V9h6a.9946.9946,0,0,0,.83-.45L12.54,6h6.92l1.71,2.55A.9946.9946,0,0,0,22,9h6V21h2V8A1.0031,1.0031,0,0,0,29,7Z"
  })), children);
});
if (true) {
  ImageSearchAlt.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const WatsonHealthImageAvailabilityLocal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function WatsonHealthImageAvailabilityLocal({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path9 || (_path9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,18c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S18.8,18,16,18z"
  })), _path0 || (_path0 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,30l-8.4-9.9c0-0.1-0.3-0.5-0.3-0.5C5.8,17.7,5,15.4,5,13C5,6.9,9.9,2,16,2s11,4.9,11,11c0,2.4-0.8,4.7-2.2,6.6l0,0 c0,0-0.3,0.4-0.3,0.4L16,30z M8.8,18.4c0,0,0.2,0.3,0.3,0.4l6.9,8.1l6.9-8.1c0-0.1,0.3-0.4,0.3-0.4C24.4,16.8,25,15,25,13 c0-5-4-9-9-9s-9,4-9,9C7,15,7.6,16.8,8.8,18.4L8.8,18.4z"
  })), children);
});
if (true) {
  WatsonHealthImageAvailabilityLocal.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const WatsonHealthImageAvailabilityRetrieving = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function WatsonHealthImageAvailabilityRetrieving({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path1 || (_path1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10 13 11.4 11.6 15 15.2 15 2 17 2 17 15.2 20.6 11.6 22 13 16 19z"
  })), _path10 || (_path10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20,2.8V5c3,1.5,5,4.5,5,8c0,2-0.6,3.8-1.8,5.4c0,0-0.2,0.3-0.3,0.4L16,26.9l-6.9-8.1c-0.1-0.1-0.3-0.4-0.3-0.4 C7.6,16.8,7,15,7,13c0-3.5,2-6.6,5-8V2.8C7.9,4.4,5,8.3,5,13c0,2.4,0.8,4.7,2.2,6.6c0,0,0.3,0.4,0.3,0.5L16,30l8.4-10 c0-0.1,0.3-0.4,0.3-0.4l0,0c1.4-1.9,2.2-4.2,2.2-6.6C27,8.3,24.1,4.4,20,2.8z"
  })), children);
});
if (true) {
  WatsonHealthImageAvailabilityRetrieving.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const WatsonHealthImageAvailabilityUnavailable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function WatsonHealthImageAvailabilityUnavailable({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "16",
    cy: "20.5",
    r: "1.5"
  })), _path11 || (_path11 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17,17h-2v-4h2c1.1,0,2-0.9,2-2s-0.9-2-2-2h-2c-1.1,0-2,0.9-2,2v0.5h-2V11c0-2.2,1.8-4,4-4h2c2.2,0,4,1.8,4,4s-1.8,4-4,4V17 z"
  })), _path12 || (_path12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,30l-8.4-9.9c0-0.1-0.3-0.5-0.3-0.5C5.8,17.7,5,15.4,5,13C5,6.9,9.9,2,16,2s11,4.9,11,11c0,2.4-0.8,4.7-2.2,6.6l0,0 c0,0-0.3,0.4-0.3,0.4L16,30z M8.8,18.4c0,0,0.2,0.3,0.3,0.4l6.9,8.1l6.9-8.1c0-0.1,0.3-0.4,0.3-0.4C24.4,16.8,25,15,25,13 c0-5-4-9-9-9s-9,4-9,9C7,15,7.6,16.8,8.8,18.4L8.8,18.4z"
  })), children);
});
if (true) {
  WatsonHealthImageAvailabilityUnavailable.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const ImageService = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function ImageService({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path13 || (_path13 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,20H26v2h2v6H4V22H6V20H4a2.0024,2.0024,0,0,0-2,2v6a2.0024,2.0024,0,0,0,2,2H28a2.0024,2.0024,0,0,0,2-2V22A2.0024,2.0024,0,0,0,28,20Z"
  })), _circle2 || (_circle2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "7",
    cy: "25",
    r: "1"
  })), _path14 || (_path14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13 4H15V12H13z"
  })), _path15 || (_path15 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9 4H11V12H9z"
  })), _path16 || (_path16 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21,12H19a2.0021,2.0021,0,0,1-2-2V6a2.0021,2.0021,0,0,1,2-2h2a2.0021,2.0021,0,0,1,2,2v4A2.0021,2.0021,0,0,1,21,12ZM19,6v4h2V6Z"
  })), _path17 || (_path17 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21 14H23V22H21z"
  })), _path18 || (_path18 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9 14H11V22H9z"
  })), _path19 || (_path19 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17,22H15a2.0021,2.0021,0,0,1-2-2V16a2.0021,2.0021,0,0,1,2-2h2a2.0021,2.0021,0,0,1,2,2v4A2.0021,2.0021,0,0,1,17,22Zm-2-6v4h2V16Z"
  })), children);
});
if (true) {
  ImageService.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const ImageStoreLocal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function ImageStoreLocal({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path20 || (_path20 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m25,2v7h7V2h-7Zm5,5h-3v-3h3v3Z"
  })), _path21 || (_path21 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m23,6h-7v12h12v-7h-5v-5Zm-2,10h-3v-3h3v3Zm5-3v3h-3v-3h3Zm-8-2v-3h3v3h-3Z"
  })), _path22 || (_path22 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m26,20v2H6v-14h8v-2H6c-1.104.0011-1.999.8959-2,2v14c.0012,1.104.896,1.9987,2,2h20c1.104-.0015,1.9985-.8961,2-2v-2h-2Z"
  })), _path23 || (_path23 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "M2 26H30V28H2z"
  })), children);
});
if (true) {
  ImageStoreLocal.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const ImportExport = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function ImportExport({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path24 || (_path24 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,24v4H4V24H2v4l.0076-.0049A1.9977,1.9977,0,0,0,4,30H28a2,2,0,0,0,2-2h0V24Z"
  })), _path25 || (_path25 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M27.6 14.6 24 18.2 24 4 22 4 22 18.2 18.4 14.6 17 16 23 22 29 16 27.6 14.6z"
  })), _path26 || (_path26 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9 4 3 10 4.4 11.4 8 7.8 8 22 10 22 10 7.8 13.6 11.4 15 10 9 4z"
  })), children);
});
if (true) {
  ImportExport.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Important = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Important({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path27 || (_path27 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17,19h-2v-11h2v11ZM16,21c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5h0Z"
  })), children);
});
if (true) {
  Important.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const ImproveRelevance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function ImproveRelevance({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path28 || (_path28 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22 26.59 19.41 24 18 25.41 22 29.41 30 21.41 28.59 20 22 26.59z"
  })), _circle3 || (_circle3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "16",
    cy: "16",
    r: "2"
  })), _path29 || (_path29 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,22a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,16,22Zm0-10a4,4,0,1,0,4,4A4.0045,4.0045,0,0,0,16,12Z"
  })), _path30 || (_path30 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,16A12,12,0,1,0,16,28V26A10,10,0,1,1,26,16Z"
  })), children);
});
if (true) {
  ImproveRelevance.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InProgress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InProgress({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path31 || (_path31 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2Zm0,26A12,12,0,0,1,16,4V16l8.4812,8.4814A11.9625,11.9625,0,0,1,16,28Z"
  })), children);
});
if (true) {
  InProgress.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InProgressError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InProgressError({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path32 || (_path32 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30,24a6,6,0,1,0-6,6A6.0066,6.0066,0,0,0,30,24Zm-2,0a3.9521,3.9521,0,0,1-.5669,2.019L21.981,20.5669A3.9529,3.9529,0,0,1,24,20,4.0045,4.0045,0,0,1,28,24Zm-8,0a3.9521,3.9521,0,0,1,.5669-2.019l5.4521,5.4521A3.9529,3.9529,0,0,1,24,28,4.0045,4.0045,0,0,1,20,24Z"
  })), _path33 || (_path33 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14,2a12,12,0,1,0,2,23.8193v-2.021A10,10,0,1,1,14,4V14l4.343,4.3433A7.9751,7.9751,0,0,1,24,16h1.8193A11.93,11.93,0,0,0,14,2Z"
  })), children);
});
if (true) {
  InProgressError.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InProgressWarning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InProgressWarning({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path34 || (_path34 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M27.38,28H20.6178L24,21.2358ZM24,18a1,1,0,0,0-.8947.5527l-5,10A1.0005,1.0005,0,0,0,19,30H29a1,1,0,0,0,.9214-1.3892L24.8946,18.5527A1,1,0,0,0,24,18Z"
  })), _path35 || (_path35 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18.746,22.7993A9.999,9.999,0,1,1,14,4V14l6.0971,6.0972,1.22-2.44A2.9849,2.9849,0,0,1,24,16h1.8193A11.993,11.993,0,1,0,14,26a11.9337,11.9337,0,0,0,3.3939-.4966Z"
  })), children);
});
if (true) {
  InProgressWarning.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IncidentReporter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IncidentReporter({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path36 || (_path36 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10,13h12v2h-12v-2ZM10,20h8v-2h-8v2ZM10,25h5v-2h-5v2ZM7,7h3v3h12v-3h3v6h2v-6c0-1.1045-.8955-2-2-2h-3v-1c0-1.1045-.8955-2-2-2h-8c-1.1045,0-2,.8955-2,2v1h-3c-1.1045,0-2,.8955-2,2v21c0,1.1045.8955,2,2,2h5v-2h-5V7ZM12,4h8v4h-8v-4ZM29.9108,28.9355l-6.2831-11.5649c-.2739-.4941-.9829-.4941-1.2568,0l-6.2831,11.5649c-.2607.48.0862,1.0645.6316,1.0645h12.5599c.5453,0,.8923-.5845.6315-1.0645ZM22.2493,21h1.5v4h-1.5v-4ZM22.9993,28c-.5522,0-.9993-.4478-.9993-1s.4478-1,1-1,1,.4478,1,1-.4485,1-1.0007,1Z"
  })), children);
});
if (true) {
  IncidentReporter.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Incomplete = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Incomplete({
  children,
  size = 16,
  ...rest
}, ref) {
  if (size === "glyph" || size === "glyph" || size === "glyphpx") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      width: size,
      height: size,
      ref: ref,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      ...rest
    }, _path37 || (_path37 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2ZM8,4a4.0045,4.0045,0,0,1,4,4H4A4.0045,4.0045,0,0,1,8,4Z"
    })), children);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path38 || (_path38 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23.7642,6.8593l1.2851-1.5315A13.976,13.976,0,0,0,20.8672,2.887l-.6836,1.8776A11.9729,11.9729,0,0,1,23.7642,6.8593Z"
  })), _path39 || (_path39 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M27.81,14l1.9677-.4128A13.8888,13.8888,0,0,0,28.14,9.0457L26.4087,10A12.52,12.52,0,0,1,27.81,14Z"
  })), _path40 || (_path40 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20.1836,27.2354l.6836,1.8776a13.976,13.976,0,0,0,4.1821-2.4408l-1.2851-1.5315A11.9729,11.9729,0,0,1,20.1836,27.2354Z"
  })), _path41 || (_path41 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26.4087,22,28.14,23a14.14,14.14,0,0,0,1.6382-4.5872L27.81,18.0659A12.1519,12.1519,0,0,1,26.4087,22Z"
  })), _path42 || (_path42 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,30V2a14,14,0,0,0,0,28Z"
  })), children);
});
if (true) {
  Incomplete.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IncompleteCancel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IncompleteCancel({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path43 || (_path43 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30 21.41 28.59 20 25 23.59 21.41 20 20 21.41 23.59 25 20 28.59 21.41 30 25 26.41 28.59 30 30 28.59 26.41 25 30 21.41z"
  })), _path44 || (_path44 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14,26A12,12,0,0,1,14,2Z"
  })), _path45 || (_path45 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17.8257,4.7642a10.0288,10.0288,0,0,1,3.2422,2.1679l1.4133-1.4135a12.0359,12.0359,0,0,0-3.89-2.6016Z"
  })), _path46 || (_path46 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,14a11.93,11.93,0,0,0-.9167-4.5908l-1.8472.7651A9.9428,9.9428,0,0,1,24,14Z"
  })), children);
});
if (true) {
  IncompleteCancel.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IncompleteError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IncompleteError({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path47 || (_path47 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14,26A12,12,0,0,1,14,2Z"
  })), _path48 || (_path48 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17.8257,4.7642a10.0288,10.0288,0,0,1,3.2422,2.1679l1.4133-1.4135a12.0359,12.0359,0,0,0-3.89-2.6016Z"
  })), _path49 || (_path49 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,14a11.93,11.93,0,0,0-.9167-4.5908l-1.8472.7651A9.9428,9.9428,0,0,1,24,14Z"
  })), _path50 || (_path50 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30,24a6,6,0,1,0-6,6A6.0066,6.0066,0,0,0,30,24Zm-2,0a3.9521,3.9521,0,0,1-.5669,2.019L21.981,20.5669A3.9529,3.9529,0,0,1,24,20,4.0045,4.0045,0,0,1,28,24Zm-8,0a3.9521,3.9521,0,0,1,.5669-2.019l5.4521,5.4521A3.9529,3.9529,0,0,1,24,28,4.0045,4.0045,0,0,1,20,24Z"
  })), children);
});
if (true) {
  IncompleteError.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IncompleteWarning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IncompleteWarning({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path51 || (_path51 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14,26A12,12,0,0,1,14,2Z"
  })), _path52 || (_path52 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17.8257,4.7642a10.0288,10.0288,0,0,1,3.2422,2.1679l1.4133-1.4135a12.0359,12.0359,0,0,0-3.89-2.6016Z"
  })), _path53 || (_path53 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,14a11.93,11.93,0,0,0-.9167-4.5908l-1.8472.7651A9.9428,9.9428,0,0,1,24,14Z"
  })), _path54 || (_path54 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M27.38,28H20.6178L24,21.2358ZM24,18a1,1,0,0,0-.8947.5527l-5,10A1.0005,1.0005,0,0,0,19,30H29a1,1,0,0,0,.9214-1.3892L24.8946,18.5527A1,1,0,0,0,24,18Z"
  })), children);
});
if (true) {
  IncompleteWarning.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IncreaseLevel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IncreaseLevel({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path55 || (_path55 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23 4 18 7.75 18 14.25 15 12 10 15.75 10 22.25 7 20 2 23.75 2 30 4 30 4 24.75 7 22.5 10 24.75 10 30 12 30 12 16.75 15 14.5 18 16.75 18 30 20 30 20 8.75 23 6.5 26 8.75 26 30 28 30 28 7.75 23 4z"
  })), children);
});
if (true) {
  IncreaseLevel.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Industry = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Industry({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path56 || (_path56 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M29.53,6.15a1,1,0,0,0-1,0L20,10.38V7a1,1,0,0,0-1.45-.89L10,10.38V3A1,1,0,0,0,9,2H3A1,1,0,0,0,2,3V28H30V7A1,1,0,0,0,29.53,6.15ZM22,26H18V19h4Zm6,0H24V18a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v8H4V4H8v9.62l10-5v5l10-5Z"
  })), children);
});
if (true) {
  Industry.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InfinitySymbol = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InfinitySymbol({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path57 || (_path57 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m23,23c-5.6558,0-7.8577-6.4109-7.9487-6.6837-.0173-.0514-1.8435-5.3163-6.0513-5.3163-2.7571,0-5,2.243-5,5s2.2429,5,5,5c1.5876,0,3.0134-.7322,4.2373-2.1764l1.5259,1.2932c-1.5989,1.8862-3.5916,2.8832-5.7632,2.8832-3.8599,0-7-3.1401-7-7s3.1401-7,7-7c5.6558,0,7.8577,6.4109,7.9487,6.6837.0173.0514,1.8435,5.3163,6.0513,5.3163,2.7571,0,5-2.243,5-5s-2.2429-5-5-5c-1.5876,0-3.0134.7322-4.2373,2.1764l-1.5259-1.2932c1.5989-1.8862,3.5916-2.8832,5.7632-2.8832,3.8599,0,7,3.1401,7,7s-3.1401,7-7,7Z"
  })), children);
});
if (true) {
  InfinitySymbol.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Information = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Information({
  children,
  size = 16,
  ...rest
}, ref) {
  if (size === 16 || size === "16" || size === "16px") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      width: size,
      height: size,
      ref: ref,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      ...rest
    }, _path58 || (_path58 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M8.5 11 8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11z"
    })), _path59 || (_path59 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M8,3.5c-0.4,0-0.8,0.3-0.8,0.8S7.6,5,8,5c0.4,0,0.8-0.3,0.8-0.8S8.4,3.5,8,3.5z"
    })), _path60 || (_path60 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"
    })), children);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path61 || (_path61 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17 22 17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22z"
  })), _path62 || (_path62 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,8a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,8Z"
  })), _path63 || (_path63 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"
  })), children);
});
if (true) {
  Information.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InformationDisabled = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InformationDisabled({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path64 || (_path64 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30,3.4141,28.5859,2,2,28.5859,3.4141,30l3.4433-3.4434A13.9614,13.9614,0,0,0,26.5565,6.8574ZM28,16A11.9734,11.9734,0,0,1,8.2678,25.146L15,18.4141V22H13v2h7V22H17V16.4141l8.146-8.146A11.8967,11.8967,0,0,1,28,16Z"
  })), _path65 || (_path65 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,8a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,8Z"
  })), _path66 || (_path66 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M5.67,22.0854A11.9829,11.9829,0,0,1,22.0856,5.67L23.54,4.2163A13.985,13.985,0,0,0,4.2162,23.54Z"
  })), children);
});
if (true) {
  InformationDisabled.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InformationFilled = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InformationFilled({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path67 || (_path67 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z",
    "data-icon-path": "inner-path"
  })), _path68 || (_path68 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"
  })), children);
});
if (true) {
  InformationFilled.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InformationSquare = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InformationSquare({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path69 || (_path69 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17 22 17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22z"
  })), _path70 || (_path70 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,8a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,8Z"
  })), _path71 || (_path71 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,28H6a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,6,4H26a2.0023,2.0023,0,0,1,2,2V26A2.0023,2.0023,0,0,1,26,28ZM6,6V26H26V6Z"
  })), children);
});
if (true) {
  InformationSquare.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InformationSquareFilled = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InformationSquareFilled({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path72 || (_path72 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z",
    "data-icon-path": "inner-path"
  })), _path73 || (_path73 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"
  })), children);
});
if (true) {
  InformationSquareFilled.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InfrastructureClassic = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InfrastructureClassic({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path74 || (_path74 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 26H30V28H18z"
  })), _path75 || (_path75 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 21H30V23H18z"
  })), _path76 || (_path76 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 16H30V18H18z"
  })), _path77 || (_path77 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14,25H9.5A7.4964,7.4964,0,0,1,8.1782,10.124,10,10,0,0,1,28,12H26a7.999,7.999,0,0,0-15.9507-.87l-.09.8335L9.123,12.02A5.4962,5.4962,0,0,0,9.5,23H14Z"
  })), children);
});
if (true) {
  InfrastructureClassic.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Insert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Insert({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path78 || (_path78 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2,9h9V2H2ZM4,4H9V7H4Z"
  })), _path79 || (_path79 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2,19h9V12H2Zm2-5H9v3H4Z"
  })), _path80 || (_path80 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2,29h9V22H2Zm2-5H9v3H4Z"
  })), _path81 || (_path81 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M27,9H18l3.41-3.59L20,4l-6,6,6,6,1.41-1.41L18,11h9a1,1,0,0,1,1,1V24a1,1,0,0,1-1,1H15v2H27a3,3,0,0,0,3-3V12A3,3,0,0,0,27,9Z"
  })), children);
});
if (true) {
  Insert.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InsertPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InsertPage({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path82 || (_path82 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,30H24V20H12V30H10V20a2.0021,2.0021,0,0,1,2-2H24a2.0021,2.0021,0,0,1,2,2Z"
  })), _path83 || (_path83 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M5.17 16 2 19.17 3.411 20.589 8 16 3.42 11.42 2 12.83 5.17 16z"
  })), _path84 || (_path84 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M24,14H12a2.0021,2.0021,0,0,1-2-2V2h2V12H24V2h2V12A2.0021,2.0021,0,0,1,24,14Z"
  })), children);
});
if (true) {
  InsertPage.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InsertSyntax = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InsertSyntax({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path85 || (_path85 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20.17 16 17.59 18.58 19 20 23 16 19 12 17.58 13.41 20.17 16z"
  })), _path86 || (_path86 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11.83 16 14.41 13.42 13 12 9 16 13 20 14.42 18.59 11.83 16z"
  })), _path87 || (_path87 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M27,22.142V9.858A3.9916,3.9916,0,1,0,22.142,5H9.858A3.9916,3.9916,0,1,0,5,9.858V22.142A3.9916,3.9916,0,1,0,9.858,27H22.142A3.9916,3.9916,0,1,0,27,22.142ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM4,6A2,2,0,1,1,6,8,2.002,2.002,0,0,1,4,6ZM6,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,28Zm16.142-3H9.858A3.9937,3.9937,0,0,0,7,22.142V9.858A3.9947,3.9947,0,0,0,9.858,7H22.142A3.9937,3.9937,0,0,0,25,9.858V22.142A3.9931,3.9931,0,0,0,22.142,25ZM26,28a2,2,0,1,1,2-2A2.0027,2.0027,0,0,1,26,28Z"
  })), children);
});
if (true) {
  InsertSyntax.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Inspection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Inspection({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path88 || (_path88 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15 17.18 12.41 14.59 11 16 15 20 22 13 20.59 11.59 15 17.18z"
  })), _path89 || (_path89 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30,15H27.9492A12.0071,12.0071,0,0,0,17,4.0508V2H15V4.0508A12.0071,12.0071,0,0,0,4.0508,15H2v2H4.0508A12.0071,12.0071,0,0,0,15,27.9492V30h2V27.9492A12.0071,12.0071,0,0,0,27.9492,17H30ZM17,25.9492V23H15v2.9492A10.0166,10.0166,0,0,1,6.0508,17H9V15H6.0508A10.0166,10.0166,0,0,1,15,6.0508V9h2V6.0508A10.0166,10.0166,0,0,1,25.9492,15H23v2h2.949A10.0165,10.0165,0,0,1,17,25.9492Z"
  })), children);
});
if (true) {
  Inspection.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InstanceBx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InstanceBx({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path90 || (_path90 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12,5A3.0033,3.0033,0,0,0,9,2H4V15H9a3.0033,3.0033,0,0,0,3-3V10.5a2.977,2.977,0,0,0-.78-2,2.9768,2.9768,0,0,0,.78-2ZM6,4H9a1.0013,1.0013,0,0,1,1,1V6.5513A.9587.9587,0,0,1,9,7.5H6Zm4,8a1.0009,1.0009,0,0,1-1,1H6V9.5H9a1.0009,1.0009,0,0,1,1,1Z"
  })), _path91 || (_path91 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22 5 20 5 18 8.897 16 5 14 5 16.905 10 14 15 16 15 18 11.201 20 15 22 15 19.098 10 22 5z"
  })), _circle4 || (_circle4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "9",
    cy: "27",
    r: "1"
  })), _path92 || (_path92 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2 18H6V20H2z"
  })), _path93 || (_path93 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 18H12V20H8z"
  })), _path94 || (_path94 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14 18H18V20H14z"
  })), _path95 || (_path95 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20 18H24V20H20z"
  })), _path96 || (_path96 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26 18H30V20H26z"
  })), _path97 || (_path97 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,31H6a2.0021,2.0021,0,0,1-2-2V25a2.0021,2.0021,0,0,1,2-2H26a2.0021,2.0021,0,0,1,2,2v4A2.0021,2.0021,0,0,1,26,31ZM6,25v4H26V25Z"
  })), children);
});
if (true) {
  InstanceBx.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InstanceClassic = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InstanceClassic({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path98 || (_path98 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23.5,21H23V19h.5a4.4975,4.4975,0,0,0,.3564-8.981l-.8154-.0639-.0986-.812a6.9938,6.9938,0,0,0-13.8838,0l-.0991.812-.8155.0639A4.4975,4.4975,0,0,0,8.5,19H9v2H8.5A6.4973,6.4973,0,0,1,7.2,8.1362a8.9943,8.9943,0,0,1,17.6006,0A6.4974,6.4974,0,0,1,23.5,21Z"
  })), _circle5 || (_circle5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "9",
    cy: "27",
    r: "1"
  })), _path99 || (_path99 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,23H17V15.83l2.59,2.58L21,17l-5-5-5,5,1.41,1.41L15,15.83V23H6a2.0023,2.0023,0,0,0-2,2v4a2.0023,2.0023,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V25A2.0023,2.0023,0,0,0,26,23Zm0,6H6V25H26Z"
  })), children);
});
if (true) {
  InstanceClassic.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InstanceCx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InstanceCx({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _circle6 || (_circle6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "9",
    cy: "27",
    r: "1"
  })), _path100 || (_path100 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22 5 20 5 18 8.897 16 5 14 5 16.905 10 14 15 16 15 18 11.201 20 15 22 15 19.098 10 22 5z"
  })), _path101 || (_path101 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12,15H6a2.0023,2.0023,0,0,1-2-2V4A2.002,2.002,0,0,1,6,2h6V4H6v9h6Z"
  })), _path102 || (_path102 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2 18H6V20H2z"
  })), _path103 || (_path103 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 18H12V20H8z"
  })), _path104 || (_path104 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14 18H18V20H14z"
  })), _path105 || (_path105 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20 18H24V20H20z"
  })), _path106 || (_path106 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26 18H30V20H26z"
  })), _path107 || (_path107 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,31H6a2.0021,2.0021,0,0,1-2-2V25a2.0021,2.0021,0,0,1,2-2H26a2.0021,2.0021,0,0,1,2,2v4A2.0021,2.0021,0,0,1,26,31ZM6,25v4H26V25Z"
  })), children);
});
if (true) {
  InstanceCx.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InstanceMx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InstanceMx({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path108 || (_path108 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22 5 20 5 18 8.897 16 5 14 5 16.905 10 14 15 16 15 18 11.201 20 15 22 15 19.098 10 22 5z"
  })), _path109 || (_path109 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10 2 8.485 6.374 8 8 7.535 6.374 6 2 4 2 4 15 6 15 6 7.374 5.841 5.378 6.421 7.374 8 12 9.579 7.374 10.159 5.374 10 7.374 10 15 12 15 12 2 10 2z"
  })), _circle7 || (_circle7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "9",
    cy: "27",
    r: "1"
  })), _path110 || (_path110 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2 18H6V20H2z"
  })), _path111 || (_path111 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 18H12V20H8z"
  })), _path112 || (_path112 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14 18H18V20H14z"
  })), _path113 || (_path113 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20 18H24V20H20z"
  })), _path114 || (_path114 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26 18H30V20H26z"
  })), _path115 || (_path115 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,31H6a2.0021,2.0021,0,0,1-2-2V25a2.0021,2.0021,0,0,1,2-2H26a2.0021,2.0021,0,0,1,2,2v4A2.0021,2.0021,0,0,1,26,31ZM6,25v4H26V25Z"
  })), children);
});
if (true) {
  InstanceMx.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InstanceVirtual = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InstanceVirtual({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _circle8 || (_circle8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "7",
    cy: "23",
    r: "1"
  })), _path116 || (_path116 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2 6H6V8H2z"
  })), _path117 || (_path117 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 6H12V8H8z"
  })), _path118 || (_path118 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14 6H18V8H14z"
  })), _path119 || (_path119 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20 6H24V8H20z"
  })), _path120 || (_path120 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26 6H30V8H26z"
  })), _path121 || (_path121 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,28H4a2.0021,2.0021,0,0,1-2-2V20a2.0021,2.0021,0,0,1,2-2H28a2.0021,2.0021,0,0,1,2,2v6A2.0021,2.0021,0,0,1,28,28ZM4,20v6H28V20Z"
  })), _path122 || (_path122 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2 12H30V14H2z"
  })), children);
});
if (true) {
  InstanceVirtual.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Integration = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Integration({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path123 || (_path123 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M29.88,15.52l-6-11A1,1,0,0,0,23,4H9a1,1,0,0,0-.88.52l-6,11a1,1,0,0,0,0,1l6,11A1,1,0,0,0,9,28H23a1,1,0,0,0,.88-.52l6-11A1,1,0,0,0,29.88,15.52ZM22.93,7l4.39,8h-9.5ZM16,14.14,10.82,6H21.18ZM9.07,7l5.11,8H4.68ZM4.68,17h9.5L9.07,25ZM16,17.86,21.18,26H10.82ZM22.93,25l-5.11-8h9.5Z"
  })), children);
});
if (true) {
  Integration.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IntentRequestActive = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IntentRequestActive({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path124 || (_path124 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23 27.2 20.4 24.6 19 26 23 30 31 22 29.6 20.6z"
  })), _path125 || (_path125 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15.4,30L5,23.8c-0.6-0.4-1-1-1-1.7V9.9c0-0.7,0.4-1.4,1-1.7l10-5.9C15.3,2.1,15.6,2,16,2c0.4,0,0.7,0.1,1,0.3l10,5.9 c0.6,0.4,1,1,1,1.7V16h-2V9.9L16,4L6,9.9v12.2l10.5,6.2L15.4,30z"
  })), children);
});
if (true) {
  IntentRequestActive.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IntentRequestCreate = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IntentRequestCreate({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path126 || (_path126 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30 24 26 24 26 20 24 20 24 24 20 24 20 26 24 26 24 30 26 30 26 26 30 26z"
  })), _path127 || (_path127 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15.4,30L5,23.8c-0.6-0.4-1-1-1-1.7V9.9c0-0.7,0.4-1.4,1-1.7l10-5.9C15.3,2.1,15.6,2,16,2c0.4,0,0.7,0.1,1,0.3l10,5.9 c0.6,0.4,1,1,1,1.7V16h-2V9.9L16,4L6,9.9v12.2l10.5,6.2L15.4,30z"
  })), children);
});
if (true) {
  IntentRequestCreate.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IntentRequestHeal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IntentRequestHeal({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path128 || (_path128 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M27,20c-0.8,0-1.5,0.3-2.1,0.9l-0.4,0.5l-0.4-0.5C23.5,20.3,22.7,20,22,20s-1.5,0.3-2.1,0.9c-1.2,1.2-1.2,3.1,0,4.3l4.6,4.8 l4.6-4.8c1.2-1.2,1.2-3.1,0-4.3C28.6,20.3,27.8,20,27,20L27,20z"
  })), _path129 || (_path129 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16.6,28.6L4,16L16,4l12.6,12.6l1.4-1.4L17.5,2.6c-0.8-0.8-2.1-0.8-2.9,0L2.6,14.5c-0.8,0.8-0.8,2.1,0,2.9L15.1,30 L16.6,28.6z"
  })), children);
});
if (true) {
  IntentRequestHeal.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IntentRequestInactive = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IntentRequestInactive({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _circle9 || (_circle9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "18.5",
    cy: "22.5",
    r: "1.5"
  })), _circle0 || (_circle0 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "23.5",
    cy: "22.5",
    r: "1.5"
  })), _circle1 || (_circle1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "28.5",
    cy: "22.5",
    r: "1.5"
  })), _path130 || (_path130 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15.4,30L5,23.8c-0.6-0.4-1-1-1-1.7V9.9c0-0.7,0.4-1.4,1-1.7l10-5.9C15.3,2.1,15.6,2,16,2c0.4,0,0.7,0.1,1,0.3l10,5.9 c0.6,0.4,1,1,1,1.7V16h-2V9.9L16,4L6,9.9v12.2l10.5,6.2L15.4,30z"
  })), children);
});
if (true) {
  IntentRequestInactive.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IntentRequestScaleIn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IntentRequestScaleIn({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path131 || (_path131 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28.6 30 30 28.6 22.4 21 29 21 29 19 19 19 19 29 21 29 21 22.4z"
  })), _path132 || (_path132 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2 28.6 3.4 30 11 22.4 11 29 13 29 13 19 3 19 3 21 9.6 21z"
  })), _path133 || (_path133 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17 2 15 2 15 12.2 10.4 7.6 9 9 16 16 23 9 21.6 7.6 17 12.2z"
  })), children);
});
if (true) {
  IntentRequestScaleIn.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IntentRequestScaleOut = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IntentRequestScaleOut({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path134 || (_path134 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19 20.4 20.4 19 28 26.6 28 20 30 20 30 30 20 30 20 28 26.6 28z"
  })), _path135 || (_path135 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13 20.4 11.6 19 4 26.6 4 20 2 20 2 30 12 30 12 28 5.4 28z"
  })), _path136 || (_path136 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17 16 15 16 15 5.8 10.4 10.4 9 9 16 2 23 9 21.6 10.4 17 5.8z"
  })), children);
});
if (true) {
  IntentRequestScaleOut.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IntentRequestUninstall = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IntentRequestUninstall({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path137 || (_path137 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30 21.4 28.6 20 25 23.6 21.4 20 20 21.4 23.6 25 20 28.6 21.4 30 25 26.4 28.6 30 30 28.6 26.4 25z"
  })), _path138 || (_path138 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15.4,30L5,23.8c-0.6-0.4-1-1-1-1.7V9.9c0-0.7,0.4-1.4,1-1.7l10-5.9C15.3,2.1,15.6,2,16,2c0.4,0,0.7,0.1,1,0.3l10,5.9 c0.6,0.4,1,1,1,1.7V16h-2V9.9L16,4L6,9.9v12.2l10.5,6.2L15.4,30z"
  })), children);
});
if (true) {
  IntentRequestUninstall.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IntentRequestUpgrade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IntentRequestUpgrade({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path139 || (_path139 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28 23 26.6 24.4 24 21.8 24 30 22 30 22 21.8 19.4 24.4 18 23 23 18z"
  })), _path140 || (_path140 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15.4,30L5,23.8c-0.6-0.4-1-1-1-1.7V9.9c0-0.7,0.4-1.4,1-1.7l10-5.9C15.3,2.1,15.6,2,16,2c0.4,0,0.7,0.1,1,0.3l10,5.9 c0.6,0.4,1,1,1,1.7V16h-2V9.9L16,4L6,9.9v12.2l10.5,6.2L15.4,30z"
  })), children);
});
if (true) {
  IntentRequestUpgrade.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Interactions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Interactions({
  children,
  size = 16,
  ...rest
}, ref) {
  if (size === 16 || size === "16" || size === "16px") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      width: size,
      height: size,
      ref: ref,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      ...rest
    }, _path141 || (_path141 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      fillRule: "evenodd",
      d: "M11,7 L11,9 L13,9 C13.5522847,9 14,9.44771525 14,10 L14,10 L14,13 C14,13.5522847 13.5522847,14 13,14 L13,14 L10,14 L10,7 L11,7 Z M5,9 C5.55228475,9 6,9.44771525 6,10 L6,10 L6,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,13 L2,12 C2,11.4477153 2.44771525,11 3,11 L3,11 L5,11 L5,10 L2.5,10 L2.5,9 Z M13,10 L11,10 L11,13 L13,13 L13,10 Z M5,12 L3,12 L3,13 L5,13 L5,12 Z M7.912,2 L7.834,3.911 L9.628,3.248 L9.914,4.119 L8.068,4.626 L9.251,6.134 L8.523,6.667 L7.457,5.068 L6.391,6.667 L5.663,6.134 L6.846,4.626 L5,4.119 L5.286,3.248 L7.08,3.911 L7.002,2 L7.912,2 Z"
    })), children);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path142 || (_path142 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,18H22V14H20V28h6a2.0027,2.0027,0,0,0,2-2V20A2.0023,2.0023,0,0,0,26,18Zm-4,8V20h4v6Z"
  })), _path143 || (_path143 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20 6.076 19.256 4.219 16 5.522 16 2 14 2 14 5.523 10.744 4.22 10 6.077 13.417 7.444 10.9 10.8 12.5 12 15 8.667 17.5 12 19.1 10.8 16.583 7.443 20 6.076z"
  })), _path144 || (_path144 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10,18H5v2h5v2H6a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h6V20A2.0023,2.0023,0,0,0,10,18Zm0,8H6V24h4Z"
  })), children);
});
if (true) {
  Interactions.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const WatsonHealthInteractiveSegmentationCursor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function WatsonHealthInteractiveSegmentationCursor({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path145 || (_path145 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M29.4139,24,15.9989,10.5663a2.0473,2.0473,0,0,0-2.8281,0l-2.586,2.586a2.0023,2.0023,0,0,0,0,2.8283L23.9989,29.4145a2.0021,2.0021,0,0,0,2.8281,0l2.5869-2.5865a1.9993,1.9993,0,0,0,0-2.8283Zm-17.415-9.4335,2.5859-2.5859,3.5,3.5L15.498,18.0676l-3.5-3.5ZM25.413,28l-8.5009-8.5188,2.5867-2.587L28,25.4143Z"
  })), _path146 || (_path146 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M7.586 18.586H10.414V21.413999999999998H7.586z",
    transform: "rotate(-45 9 20)"
  })), _path147 || (_path147 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18.586 7.586H21.413999999999998V10.414H18.586z",
    transform: "rotate(-45 20 9)"
  })), _path148 || (_path148 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M7.586 7.586H10.414V10.414H7.586z",
    transform: "rotate(-45 9 9)"
  })), _path149 || (_path149 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11 2 2 2 2 11 4 11 4 4 11 4 11 2z"
  })), children);
});
if (true) {
  WatsonHealthInteractiveSegmentationCursor.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InterfaceDefinition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InterfaceDefinition({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path150 || (_path150 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,19h-7c-1.1028,0-2,.8975-2,2v2h-2v-14c0-1.1025-.8972-2-2-2h-2v-3c0-1.1025-.8972-2-2-2h-7c-1.1028,0-2,.8975-2,2v7c0,1.1025.8972,2,2,2h7c1.1028,0,2-.8975,2-2v-2h2v14c0,1.1025.8972,2,2,2h2v3c0,1.1025.8972,2,2,2h7c1.1028,0,2-.8975,2-2v-7c0-1.1025-.8972-2-2-2ZM11,11h-7v-7h7v7ZM28,28h-7v-7h7v7Z"
  })), children);
});
if (true) {
  InterfaceDefinition.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InterfaceDefinitionAlt = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InterfaceDefinitionAlt({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path151 || (_path151 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,30H4c-1.1,0-2-.9-2-2V4c0-1.1.9-2,2-2h24c1.1,0,2,.9,2,2v24c0,1.1-.9,2-2,2ZM4,28h24V4H4v24ZM9,22v-1.8232h1.582v-8.3545h-1.582v-1.8223h5.4512v1.8223h-1.5991v8.3545h1.5991v1.8232h-5.4512ZM16.3301,22v-9h2.2012v1.5195h.0859c.3613-.9629,1.1182-1.7021,2.5107-1.7021,1.8403,0,2.8721,1.2725,2.8721,3.5078v5.6748h-2.2012v-5.4512c0-1.2725-.4302-1.9258-1.479-1.9258-.9116,0-1.7886.4814-1.7886,1.4443v5.9326h-2.2012Z"
  })), children);
});
if (true) {
  InterfaceDefinitionAlt.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InterfaceUsage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InterfaceUsage({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path152 || (_path152 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m18.3242,11.7334v1.29h-1.3242v1.7368h1.3242v7.2397h2.2012v-7.2397h1.8398v-1.7368h-1.8398v-1.9951h1.8398v-1.7539h-1.5649c-1.6167,0-2.4761.877-2.4761,2.459Z"
  })), _path153 || (_path153 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "M10 11.8193 11.582 11.8193 11.582 20.1772 10 20.1772 10 22 15.4516 22 15.4516 20.1772 13.8525 20.1772 13.8525 11.8193 15.4516 11.8193 15.4516 9.9966 10 9.9966 10 11.8193z"
  })), _path154 || (_path154 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m21,30h-10c-4.9626,0-9-4.0374-9-9v-10C2,6.0374,6.0374,2,11,2h10c4.9626,0,9,4.0374,9,9v10c0,4.9626-4.0374,9-9,9ZM11,4c-3.8599,0-7,3.1401-7,7v10c0,3.8599,3.1401,7,7,7h10c3.8599,0,7-3.1401,7-7v-10c0-3.8599-3.1401-7-7-7h-10Z"
  })), children);
});
if (true) {
  InterfaceUsage.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InterfaceUsage_1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InterfaceUsage_1({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path155 || (_path155 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21.0259,30h-10c-5,0-9-4-9-9v-10C2.0259,6,6.0259,2,11.0259,2h10c5,0,9,4,9,9v10c0,5-4,9-9,9ZM11.0259,4c-3.9,0-7,3.1-7,7v10c0,3.9,3.1,7,7,7h10c3.9,0,7-3.1,7-7v-10c0-3.9-3.1-7-7-7h-10ZM9,22.0029v-1.8232h1.582v-8.3574h-1.582v-1.8223h5.4512v1.8223h-1.5991v8.3574h1.5991v1.8232h-5.4512ZM16.3301,22.0029v-9.0029h2.2012v1.5225h.0859c.3613-.9629,1.1182-1.7021,2.5107-1.7021,1.8403,0,2.8721,1.2725,2.8721,3.5078v5.6748h-2.2012v-5.4512c0-1.2725-.4302-1.9258-1.479-1.9258-.9116,0-1.7886.4814-1.7886,1.4443v5.9326h-2.2012Z"
  })), children);
});
if (true) {
  InterfaceUsage_1.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InterfaceUsageAlt = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InterfaceUsageAlt({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path156 || (_path156 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,19h-3c-2.2056,0-4,1.7944-4,4h-2v-14c0-1.1025-.8972-2-2-2h-2v-1c0-2.2056-1.7944-4-4-4h-3c-2.2056,0-4,1.7944-4,4v3c0,2.2056,1.7944,4,4,4h3c2.2056,0,4-1.7944,4-4h2v14c0,1.1025.8972,2,2,2h2v1c0,2.2056,1.7944,4,4,4h3c2.2056,0,4-1.7944,4-4v-3c0-2.2056-1.7944-4-4-4ZM11,9c0,1.1025-.8972,2-2,2h-3c-1.1028,0-2-.8975-2-2v-3c0-1.1025.8972-2,2-2h3c1.1028,0,2,.8975,2,2v3ZM28,26c0,1.1025-.8972,2-2,2h-3c-1.1028,0-2-.8975-2-2v-3c0-1.1025.8972-2,2-2h3c1.1028,0,2,.8975,2,2v3Z"
  })), children);
});
if (true) {
  InterfaceUsageAlt.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Intersect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Intersect({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path157 || (_path157 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22,24H18V22h4V18h2v4A2.0021,2.0021,0,0,1,22,24Z"
  })), _path158 || (_path158 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10,14H8V10a2.0022,2.0022,0,0,1,2-2h4v2H10Z"
  })), _path159 || (_path159 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,8H24V4a2.0023,2.0023,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,4V22a2.0023,2.0023,0,0,0,2,2H8v4a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V10A2.0023,2.0023,0,0,0,28,8Zm0,20H10V24h4V22H10V18H8v4H4V4H22V8H18v2h4v4h2V10h4Z"
  })), children);
});
if (true) {
  Intersect.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IntrusionPrevention = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IntrusionPrevention({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _circle10 || (_circle10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "22",
    cy: "23.887",
    r: "2"
  })), _path160 || (_path160 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M29.7769,23.4785A8.64,8.64,0,0,0,22,18a8.64,8.64,0,0,0-7.7769,5.4785L14,24l.2231.5215A8.64,8.64,0,0,0,22,30a8.64,8.64,0,0,0,7.7769-5.4785L30,24ZM22,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,28Z"
  })), _path161 || (_path161 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M25,10H4A2.0021,2.0021,0,0,1,2,8V4A2.0021,2.0021,0,0,1,4,2H25a2.0021,2.0021,0,0,1,2,2V8A2.0021,2.0021,0,0,1,25,10ZM4,4V8H25V4Z"
  })), _path162 || (_path162 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12,28H4V24h8V22H4a2.0023,2.0023,0,0,0-2,2v4a2.0023,2.0023,0,0,0,2,2h8Z"
  })), _path163 || (_path163 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,12H7a2.0023,2.0023,0,0,0-2,2v4a2.0023,2.0023,0,0,0,2,2h5V18H7V14H28l.0007,2H30V14A2.0023,2.0023,0,0,0,28,12Z"
  })), children);
});
if (true) {
  IntrusionPrevention.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const InventoryManagement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function InventoryManagement({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path164 || (_path164 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19 24H23V28H19z"
  })), _path165 || (_path165 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26 24H30V28H26z"
  })), _path166 || (_path166 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19 17H23V21H19z"
  })), _path167 || (_path167 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26 17H30V21H26z"
  })), _path168 || (_path168 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17,24H4V10H28v5h2V10a2.0023,2.0023,0,0,0-2-2H22V4a2.0023,2.0023,0,0,0-2-2H12a2.002,2.002,0,0,0-2,2V8H4a2.002,2.002,0,0,0-2,2V24a2.0023,2.0023,0,0,0,2,2H17ZM12,4h8V8H12Z"
  })), children);
});
if (true) {
  InventoryManagement.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IotConnect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IotConnect({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path169 || (_path169 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30,19H26V15H24v9H8V8l9-.0009V6H13V2H11V6H8A2.002,2.002,0,0,0,6,8v3H2v2H6v6H2v2H6v3a2.0023,2.0023,0,0,0,2,2h3v4h2V26h6v4h2V26h3a2.0027,2.0027,0,0,0,2-2V21h4Z"
  })), _path170 || (_path170 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,2a4.0042,4.0042,0,0,0-4,4,3.9556,3.9556,0,0,0,.5668,2.0192L19.5859,11H11V21H21V12.4141l2.9808-2.9808A3.9553,3.9553,0,0,0,26,10a4,4,0,0,0,0-8ZM19,19H13V13h6ZM26,8a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,26,8Z"
  })), children);
});
if (true) {
  IotConnect.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IotPlatform = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IotPlatform({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path171 || (_path171 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30,19H26V15H24v9H8V8l9-.0009V6H13V2H11V6H8A2.002,2.002,0,0,0,6,8v3H2v2H6v6H2v2H6v3a2.0023,2.0023,0,0,0,2,2h3v4h2V26h6v4h2V26h3a2.0027,2.0027,0,0,0,2-2V21h4Z"
  })), _path172 || (_path172 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21,21H11V11H21Zm-8-2h6V13H13Z"
  })), _path173 || (_path173 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M31,13H29A10.0117,10.0117,0,0,0,19,3V1A12.0131,12.0131,0,0,1,31,13Z"
  })), _path174 || (_path174 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,13H24a5.0059,5.0059,0,0,0-5-5V6A7.0085,7.0085,0,0,1,26,13Z"
  })), children);
});
if (true) {
  IotPlatform.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Ip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Ip({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path175 || (_path175 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m19,23h-2v-14h6c1.103,0,2,.897,2,2v5c0,1.103-.897,2-2,2h-4v5Zm0-7h4v-5.0015h-4v5.0015Z"
  })), _path176 || (_path176 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "M7 11 10 11 10 21 7 21 7 23 15 23 15 21 12 21 12 11 15 11 15 9 7 9 7 11z"
  })), children);
});
if (true) {
  Ip.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Iso = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Iso({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path177 || (_path177 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,23H24a2,2,0,0,1-2-2V11a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V21A2,2,0,0,1,28,23ZM24,11V21h4V11Z"
  })), _path178 || (_path178 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18,23H12V21h6V17H14a2,2,0,0,1-2-2V11a2,2,0,0,1,2-2h6v2H14v4h4a2,2,0,0,1,2,2v4A2,2,0,0,1,18,23Z"
  })), _path179 || (_path179 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2 11 5 11 5 21 2 21 2 23 10 23 10 21 7 21 7 11 10 11 10 9 2 9 2 11z"
  })), children);
});
if (true) {
  Iso.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IsoFilled = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IsoFilled({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path180 || (_path180 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21 13H24V19H21z"
  })), _path181 || (_path181 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM8,21H6V11H8Zm9-8H12v2h3a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2H10V19h5V17H12a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h5Zm9,6a2,2,0,0,1-2,2H21a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
  })), children);
});
if (true) {
  IsoFilled.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const IsoOutline = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function IsoOutline({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path182 || (_path182 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M24,21H21a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2v6A2,2,0,0,1,24,21Zm-3-8v6h3V13Z"
  })), _path183 || (_path183 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15,21H10V19h5V17H12a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h5v2H12v2h3a2,2,0,0,1,2,2v2A2,2,0,0,1,15,21Z"
  })), _path184 || (_path184 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 11H8V21H6z"
  })), _path185 || (_path185 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,24V8H28V24Z"
  })), children);
});
if (true) {
  IsoOutline.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const ItemDefinition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function ItemDefinition({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path186 || (_path186 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,2H4c-1.1,0-2,.9-2,2v24c0,1.1.9,2,2,2h24c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2ZM28,28H4V4h24v24ZM10,22v-1.8232h1.582v-8.3574h-1.582v-1.8223h5.4512v1.8223h-1.5991v8.3574h1.5991v1.8232h-5.4512ZM18.0906,19.7129v-4.9487h-1.3242v-1.7539h.688c.6538,0,.8599-.3096.8599-.9287v-1.5171h1.9775v2.4458h1.8403v1.7539h-1.8403v5.4819h1.7026v1.7539h-1.582c-1.5132,0-2.3218-.8252-2.3218-2.2871Z"
  })), children);
});
if (true) {
  ItemDefinition.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const ItemUsage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function ItemUsage({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path187 || (_path187 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21,30h-10c-5,0-9-4-9-9v-10C2,6,6,2,11,2h10c5,0,9,4,9,9v10c0,5-4,9-9,9ZM11,4c-3.9,0-7,3.1-7,7v10c0,3.9,3.1,7,7,7h10c3.9,0,7-3.1,7-7v-10c0-3.9-3.1-7-7-7h-10ZM10,22v-1.8232h1.582v-8.3574h-1.582v-1.8223h5.4512v1.8223h-1.5991v8.3574h1.5991v1.8232h-5.4512ZM18.0906,19.7129v-4.9487h-1.3242v-1.7539h.688c.6538,0,.8599-.3096.8599-.9287v-1.5171h1.9775v2.4458h1.8403v1.7539h-1.8403v5.4819h1.7026v1.7539h-1.582c-1.5132,0-2.3218-.8252-2.3218-2.2871Z"
  })), children);
});
if (true) {
  ItemUsage.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Java = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Java({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path188 || (_path188 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.3335,21h-2.667c-.9189,0-1.6665-.7476-1.6665-1.6665v-2.3335h2v2h2v-8h2v8.3335c0,.9189-.7476,1.6665-1.6665,1.6665ZM16,13v8h-2v-4h-2v4h-2v-8c0-1.1001.8999-2,2-2h2c1.1001,0,2,.8999,2,2ZM14,13h-2v2h2v-2ZM30,13v8h-2v-4h-2v4h-2v-8c0-1.1001.8999-2,2-2h2c1.1001,0,2,.8999,2,2ZM28,13h-2v2h2v-2ZM21,11h2l-2,10h-2l-2-10h2l1,7,1-7Z"
  })), children);
});
if (true) {
  Java.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Jcl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Jcl({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path189 || (_path189 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30,21v2h-8v-14h2v12h6ZM10,21v-12h-2v12h-4v-2h-2v2c0,1.1025.897,2,2,2h4c1.103,0,2-.8975,2-2ZM20,21h-6v-10h6v-2h-6c-1.103,0-2,.897-2,2v10c0,1.1025.897,2,2,2h6v-2Z"
  })), children);
});
if (true) {
  Jcl.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JobDaemon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JobDaemon({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path190 || (_path190 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12,17h8c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2h-8c-1.1,0-2,.9-2,2v11c0,1.1.9,2,2,2ZM12,4h8v11h-8V4ZM8,19h5v2h-5c-1.1,0-2-.9-2-2v-11h2v11ZM4,23h5v2h-5c-1.1,0-2-.9-2-2v-11h2v11ZM27,20c-1.6,0-3.1,1.4-4,2.4-.9-1-2.4-2.4-4-2.4-2.6,0-4,2-4,4s1.4,4,4,4,3.1-1.4,4-2.4c.9,1,2.4,2.4,4,2.4,2.6,0,4-2,4-4s-1.4-4-4-4ZM19,26c-1.5,0-2-1.1-2-2s.5-2,2-2,2,1.1,2.8,2c-.7.9-1.9,2-2.8,2ZM27,26c-.9,0-2-1.1-2.8-2,.7-.9,1.9-2,2.8-2,1.5,0,2,1.1,2,2s-.5,2-2,2Z"
  })), children);
});
if (true) {
  JobDaemon.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JobRun = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JobRun({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path191 || (_path191 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12,17h8c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2h-8c-1.1,0-2,.9-2,2v11c0,1.1.9,2,2,2ZM12,4h8v11h-8V4ZM8,19h6v2h-6c-1.1,0-2-.9-2-2v-11h2v11ZM4,23h6v2h-6c-1.1,0-2-.9-2-2v-11h2v11ZM30,24l-6,6-1.4-1.4,3.6-3.6h-9.2v-2h9.2l-3.6-3.6,1.4-1.4,6,6Z"
  })), children);
});
if (true) {
  JobRun.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JoinFull = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JoinFull({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path192 || (_path192 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M16,9.0752a7.9941,7.9941,0,0,1,0,13.85,7.9941,7.9941,0,0,1,0-13.85m0-2.2373a9.9953,9.9953,0,0,0,0,18.3242A9.9953,9.9953,0,0,0,16,6.8379Z",
    "data-icon-path": "inner-path"
  })), _path193 || (_path193 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10,16a9.9976,9.9976,0,0,1,6-9.1621,10,10,0,1,0,0,18.3242A9.9976,9.9976,0,0,1,10,16Z"
  })), _path194 || (_path194 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,9.0752a7.9941,7.9941,0,0,0,0,13.85,7.9941,7.9941,0,0,0,0-13.85Z"
  })), _path195 || (_path195 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20,6a9.9539,9.9539,0,0,0-4,.8379,9.9953,9.9953,0,0,1,0,18.3242A9.9988,9.9988,0,1,0,20,6Z"
  })), children);
});
if (true) {
  JoinFull.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JoinInner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JoinInner({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path196 || (_path196 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20,6a9.9355,9.9355,0,0,0-4,.8418A9.999,9.999,0,1,0,16,25.16,9.998,9.998,0,1,0,20,6ZM12,24A8,8,0,1,1,13.7573,8.2017a9.9734,9.9734,0,0,0,0,15.5986A7.9919,7.9919,0,0,1,12,24Zm8,0a7.9919,7.9919,0,0,1-1.7573-.2,9.9734,9.9734,0,0,0,0-15.5986A7.9972,7.9972,0,1,1,20,24Z"
  })), children);
});
if (true) {
  JoinInner.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JoinInnerAlt = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JoinInnerAlt({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path197 || (_path197 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.3,12.6l-1.3,1.5c-1.1-1-2-2.2-2.7-3.5l1.8-.9c.6,1.1,1.3,2.1,2.2,2.9h0ZM6.4,7.7c-.3-.9-.4-1.9-.4-2.8v-.9s-2,0-2,0v.9c0,1.1.2,2.3.5,3.4l1.9-.6h0ZM14.2,15c-1.2-.2-2.4-.7-3.4-1.3l-1,1.7c.3.2.7.4,1.1.6-.4.2-.7.4-1.1.6l1,1.7c1.1-.7,2.2-1.1,3.4-1.3v-1.9h0ZM5.3,21.4l1.8.9c.6-1.1,1.3-2.1,2.2-2.9l-1.3-1.5c-1.1,1-2,2.2-2.7,3.5h0ZM4,27.1v.9h2v-.9c0-1,.1-1.9.4-2.8l-1.9-.6c-.3,1.1-.5,2.2-.5,3.4h0ZM23,11l-1.4,1.4,2.6,2.6h-8.2s0,2,0,2h8.2s-2.6,2.6-2.6,2.6l1.4,1.4,5-5s-5-5-5-5Z"
  })), children);
});
if (true) {
  JoinInnerAlt.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JoinLeft = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JoinLeft({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path198 || (_path198 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20,6a9.9272,9.9272,0,0,0-3.9968.8394,9.9758,9.9758,0,0,1,2.2451,1.36,8,8,0,1,1,0,15.6016,9.9758,9.9758,0,0,1-2.2451,1.36A9.9976,9.9976,0,1,0,20,6Z"
  })), _path199 || (_path199 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12,16a8.01,8.01,0,0,0,6.2483,7.8008,9.9858,9.9858,0,0,0,0-15.6016A8.01,8.01,0,0,0,12,16Z"
  })), _path200 || (_path200 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M12,16a8.01,8.01,0,0,1,6.2483-7.8008,9.9758,9.9758,0,0,0-2.2451-1.36,9.9909,9.9909,0,0,0,0,18.3212,9.9758,9.9758,0,0,0,2.2451-1.36A8.01,8.01,0,0,1,12,16Z",
    "data-icon-path": "inner-path"
  })), _path201 || (_path201 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10,16a10.0105,10.0105,0,0,1,6.0032-9.1606,10,10,0,1,0,0,18.3212A10.0105,10.0105,0,0,1,10,16Z"
  })), children);
});
if (true) {
  JoinLeft.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JoinLeftOuter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JoinLeftOuter({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path202 || (_path202 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,16l-5,5-1.4-1.4,2.6-2.6h-10.2c-1.2.2-2.3.7-3.4,1.3l-1-1.7c.4-.3.8-.5,1.3-.7-4.1-1.8-6.9-5.6-6.9-10.1v-1.8s2,0,2,0v1.8c0,5.1,4.5,9.2,10,9.2h8.2l-2.6-2.6,1.4-1.4,5,5h0s0,0,0,0ZM4,27v1h2v-1c0-1,0-1.9.3-2.9l-1.9-.6c-.3,1.1-.5,2.3-.5,3.4h0ZM5.3,21.5l1.7.9c.6-1.1,1.3-2.1,2.2-3l-1.3-1.5c-1.1,1-2,2.2-2.6,3.6Z"
  })), children);
});
if (true) {
  JoinLeftOuter.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JoinOuter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JoinOuter({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path203 || (_path203 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20,6a9.9539,9.9539,0,0,0-4,.8379,9.9953,9.9953,0,0,1,0,18.3242A9.9988,9.9988,0,1,0,20,6Z"
  })), _path204 || (_path204 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10,16a9.9976,9.9976,0,0,1,6-9.1621,10,10,0,1,0,0,18.3242A9.9976,9.9976,0,0,1,10,16Z"
  })), children);
});
if (true) {
  JoinOuter.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JoinRight = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JoinRight({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path205 || (_path205 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20,6a9.95,9.95,0,0,0-4.0032.8394,9.9909,9.9909,0,0,1,0,18.3212A9.9988,9.9988,0,1,0,20,6Z"
  })), _path206 || (_path206 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M20,16a8.01,8.01,0,0,0-6.2483-7.8008,9.9758,9.9758,0,0,1,2.2451-1.36,9.9909,9.9909,0,0,1,0,18.3212,9.9758,9.9758,0,0,1-2.2451-1.36A8.01,8.01,0,0,0,20,16Z",
    "data-icon-path": "inner-path"
  })), _path207 || (_path207 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10,16a9.9759,9.9759,0,0,0,3.7517,7.8008,7.9937,7.9937,0,0,0,0-15.6016A9.9759,9.9759,0,0,0,10,16Z"
  })), _path208 || (_path208 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12,24A8,8,0,1,1,13.7517,8.1992a9.9758,9.9758,0,0,1,2.2451-1.36,10,10,0,1,0,0,18.3212,9.9758,9.9758,0,0,1-2.2451-1.36A7.9727,7.9727,0,0,1,12,24Z"
  })), children);
});
if (true) {
  JoinRight.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JoinRightOuter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JoinRightOuter({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path209 || (_path209 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28.01,16l-5,5-1.41-1.41,2.59-2.59h-6.09s-2.07,0-2.07,0c-5.52,0-10.02,4.11-10.02,9.17v1.83h-2v-1.83c0-4.45,2.82-8.29,6.89-10.09-.43-.21-.85-.43-1.26-.69l1.02-1.74c1.04.66,2.16,1.11,3.35,1.34h2s0,0,0,0h8.17l-2.59-2.59,1.41-1.41,5,5h0ZM6.36,7.81c-.26-.92-.39-1.88-.39-2.85v-.96h-1.95v.96c0,1.16.16,2.32.47,3.43l1.87-.57ZM7.9,14.04l1.31-1.51c-.9-.85-1.64-1.85-2.19-2.97l-1.74.92c.66,1.35,1.54,2.54,2.62,3.56Z"
  })), children);
});
if (true) {
  JoinRightOuter.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JoinNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JoinNode({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path210 || (_path210 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "M2 9H6V11H2z"
  })), _path211 || (_path211 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "M2 21H6V23H2z"
  })), _path212 || (_path212 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "M25 11 23.5859 12.4141 26.1719 15 18 15 18 4 12 4 12 9 8 9 8 11 12 11 12 21 8 21 8 23 12 23 12 28 18 28 18 17 26.1719 17 23.5859 19.5859 25 21 30 16 25 11z"
  })), children);
});
if (true) {
  JoinNode.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Jpg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Jpg({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path213 || (_path213 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30,23H24a2,2,0,0,1-2-2V11a2,2,0,0,1,2-2h6v2H24V21h4V17H26V15h4Z"
  })), _path214 || (_path214 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14,23H12V9h6a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H14Zm0-7h4V11H14Z"
  })), _path215 || (_path215 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8,23H4a2,2,0,0,1-2-2V19H4v2H8V9h2V21A2,2,0,0,1,8,23Z"
  })), children);
});
if (true) {
  Jpg.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JsError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JsError({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path216 || (_path216 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m20.3335,30h-2.667c-.9189,0-1.6665-.7476-1.6665-1.6665v-2.3335h2v2h2v-8h2v8.3335c0,.9189-.7476,1.6665-1.6665,1.6665Z"
  })), _path217 || (_path217 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m28.3335,30h-4.3335v-2h4v-2h-2c-1.103,0-2-.897-2-2v-2.3335c0-.9189.7476-1.6665,1.6665-1.6665h4.3335v2h-4v2h2c1.103,0,2,.897,2,2v2.3335c0,.9189-.7476,1.6665-1.6665,1.6665Z"
  })), _path218 || (_path218 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m16,18c-.8284,0-1.5.6716-1.5,1.5s.6716,1.5,1.5,1.5,1.5-.6716,1.5-1.5-.6716-1.5-1.5-1.5h0Z"
  })), _path219 || (_path219 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15 7H17V16H15z"
  })), _path220 || (_path220 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m14,26h-4.5c-.3538,0-.6809-.1868-.8608-.4912L2.1392,14.5088c-.0928-.1569-.1392-.3329-.1392-.5088s.0464-.3519.1392-.5088L8.6392,2.4912c.1799-.3044.5071-.4912.8608-.4912h13c.3538,0,.6809.1868.8608.4912l6.5,11c.0928.1569.1392.3328.1392.5088s-.0464.3519-.1392.5088l-2,3.3845-1.7217-1.0173,1.6992-2.876-5.9089-10h-11.8589l-5.9089,10,5.9089,10h3.9294v2Z"
  })), children);
});
if (true) {
  JsError.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Json = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Json({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path221 || (_path221 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M31 11 31 21 29 21 27 15 27 21 25 21 25 11 27 11 29 17 29 11 31 11z"
  })), _path222 || (_path222 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21.3335,21h-2.667A1.6684,1.6684,0,0,1,17,19.3335v-6.667A1.6684,1.6684,0,0,1,18.6665,11h2.667A1.6684,1.6684,0,0,1,23,12.6665v6.667A1.6684,1.6684,0,0,1,21.3335,21ZM19,19h2V13H19Z"
  })), _path223 || (_path223 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13.3335,21H9V19h4V17H11a2.002,2.002,0,0,1-2-2V12.6665A1.6684,1.6684,0,0,1,10.6665,11H15v2H11v2h2a2.002,2.002,0,0,1,2,2v2.3335A1.6684,1.6684,0,0,1,13.3335,21Z"
  })), _path224 || (_path224 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M5.3335,21H2.6665A1.6684,1.6684,0,0,1,1,19.3335V17H3v2H5V11H7v8.3335A1.6684,1.6684,0,0,1,5.3335,21Z"
  })), children);
});
if (true) {
  Json.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JsonReference = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JsonReference({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path225 || (_path225 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4 20 4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20z"
  })), _path226 || (_path226 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M29 12 27 6 25 6 25 16 27 16 27 10 29 16 31 16 31 6 29 6 29 12z"
  })), _path227 || (_path227 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21.3335,6h-2.667A1.6683,1.6683,0,0,0,17,7.6665v6.667A1.6684,1.6684,0,0,0,18.6665,16h2.667A1.6683,1.6683,0,0,0,23,14.3335V7.6665A1.6683,1.6683,0,0,0,21.3335,6ZM21,14H19V8h2Z"
  })), _path228 || (_path228 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9,7.6665V10a2.002,2.002,0,0,0,2,2h2v2H9v2h4.3335A1.6683,1.6683,0,0,0,15,14.3335V12a2.002,2.002,0,0,0-2-2H11V8h4V6H10.6665A1.6683,1.6683,0,0,0,9,7.6665Z"
  })), _path229 || (_path229 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M5,14H3V12H1v2.3335A1.6684,1.6684,0,0,0,2.6665,16h2.667A1.6683,1.6683,0,0,0,7,14.3335V6H5Z"
  })), children);
});
if (true) {
  JsonReference.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const JumpLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function JumpLink({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path230 || (_path230 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13.4141,17.5859,18,22.1719V8H8V6H18a2.0024,2.0024,0,0,1,2,2V22.1719l4.5859-4.586L26,19l-7,7-7-7Z"
  })), children);
});
if (true) {
  JumpLink.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const KeepDry = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function KeepDry({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path231 || (_path231 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M25,10a3.8978,3.8978,0,0,1-4-3.777,3.9017,3.9017,0,0,1,.6533-2.0639L24.17.4141a1.0381,1.0381,0,0,1,1.6592,0L28.3154,4.11A3.9693,3.9693,0,0,1,29,6.223,3.8978,3.8978,0,0,1,25,10Zm0-7.2368L23.3438,5.2257A1.89,1.89,0,0,0,23,6.223a2.014,2.014,0,0,0,4,0,1.98,1.98,0,0,0-.375-1.0466Z"
  })), _path232 || (_path232 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M29.9854,15.83a13.9726,13.9726,0,0,0-1.8147-4.8323L26.4329,12.001a12.092,12.092,0,0,1,1.07,2.2124A5.4079,5.4079,0,0,0,26,14a6.5439,6.5439,0,0,0-3.939,1.333,14.5177,14.5177,0,0,0-3.0456-8.9341A13.8858,13.8858,0,0,0,17,4.4014V2H15V4.0464A14.3808,14.3808,0,0,0,2.0146,15.83,1,1,0,0,0,3.51,16.86,4.8551,4.8551,0,0,1,6,16a4.8653,4.8653,0,0,1,4.1406,2.5107,1.0393,1.0393,0,0,0,1.7188,0A5.02,5.02,0,0,1,15,16.1255V25.5a2.5,2.5,0,0,1-5,0V25H8v.5a4.5,4.5,0,0,0,9,0V16.1255a5.02,5.02,0,0,1,3.1406,2.3852.9994.9994,0,0,0,1.7188,0A4.8653,4.8653,0,0,1,26,16a4.8551,4.8551,0,0,1,2.49.86,1,1,0,0,0,1.4957-1.03ZM9.939,15.333A6.5439,6.5439,0,0,0,6,14a5.4079,5.4079,0,0,0-1.5034.2134,12.4413,12.4413,0,0,1,8.488-7.8145A14.5157,14.5157,0,0,0,9.939,15.333ZM16,14a6.5526,6.5526,0,0,0-4.0564,1.4307c.0378-2.22.6089-6.49,4.0564-9.1763,3.4307,2.6768,4.009,6.9487,4.0522,9.1728A6.552,6.552,0,0,0,16,14Z"
  })), children);
});
if (true) {
  KeepDry.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Key = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Key({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path233 || (_path233 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "M30 9 28.0001 9 26 16 24.0001 9 22 9 25 17.9996 25 23 27 23 27 18 27.0001 18 30 9z"
  })), _path234 || (_path234 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "M21 11 21 9 13 9 13 23 21 23 21 21 15 21 15 17 20 17 20 15 15 15 15 11 21 11z"
  })), _path235 || (_path235 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "M11 9 8.8941 9 5 15.5527 5 9 3 9 3 23 5 23 5 18.7062 5.9277 17.2208 8.8941 23 11 23 7.1093 15.4308 11 9z"
  })), children);
});
if (true) {
  Key.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Keyboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Keyboard({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path236 || (_path236 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,26H4a2,2,0,0,1-2-2V10A2,2,0,0,1,4,8H28a2,2,0,0,1,2,2V24A2,2,0,0,1,28,26ZM4,10V24H28V10Z"
  })), _path237 || (_path237 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10 20H21V22H10z"
  })), _path238 || (_path238 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 12H8V14H6z"
  })), _path239 || (_path239 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10 12H12V14H10z"
  })), _path240 || (_path240 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14 12H16V14H14z"
  })), _path241 || (_path241 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 12H20V14H18z"
  })), _path242 || (_path242 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 20H8V22H6z"
  })), _path243 || (_path243 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 16H8V18H6z"
  })), _path244 || (_path244 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10 16H12V18H10z"
  })), _path245 || (_path245 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14 16H16V18H14z"
  })), _path246 || (_path246 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22 12H26V14H22z"
  })), _path247 || (_path247 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22 16H26V18H22z"
  })), _path248 || (_path248 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 16H20V18H18z"
  })), _path249 || (_path249 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23 20H26V22H23z"
  })), children);
});
if (true) {
  Keyboard.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const KeyboardOff = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function KeyboardOff({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path250 || (_path250 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 12H8V14H6z"
  })), _path251 || (_path251 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 12H20V14H18z"
  })), _path252 || (_path252 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 20H8V22H6z"
  })), _path253 || (_path253 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 16H8V18H6z"
  })), _path254 || (_path254 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10 16H12V18H10z"
  })), _path255 || (_path255 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22 12H26V14H22z"
  })), _path256 || (_path256 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22 16H26V18H22z"
  })), _path257 || (_path257 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.2,10H28v13h2V10c0-1.1-0.9-2-2-2H12.2L14.2,10z"
  })), _path258 || (_path258 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M30,28.6L3.4,2L2,3.4L6.6,8H4c-1.1,0-2,0.9-2,2v14c0,1.1,0.9,2,2,2h20.6l4,4L30,28.6z M4,24V10h4.6l2,2H10v2h2.6l2,2H14v2 h2.6l2,2H10v2h10.6l2,2H4z"
  })), children);
});
if (true) {
  KeyboardOff.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const KioskDevice = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function KioskDevice({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path259 || (_path259 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,19c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2H6c-1.1,0-2,.9-2,2v13c0,1.1.9,2,2,2h7v9H4v2h24v-2h-9v-9h7ZM17,28h-2v-9h2v9ZM6,17V4h20v13H6ZM16,13c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Z"
  })), children);
});
if (true) {
  KioskDevice.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Kubelet = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Kubelet({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path260 || (_path260 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m20.0444,27.2942l-3.0825-10.018-1.0132,3.04c-.1361.4084-.5183.6838-.9487.6838h-6s0-2,0-2h5.2793s1.772-5.3162,1.772-5.3162c.1307-.4123.5162-.6902.9487-.6838.4374.0046.8225.2891.9555.7058l3.0088,9.7783,1.0742-3.7589c.1227-.4293.5151-.7252.9615-.7252h5s0,2,0,2h-4.2456s-1.7933,6.2747-1.7933,6.2747c-.1216.4256-.5085.7207-.9511.7253h-.01c-.4389,0-.8265-.2863-.9556-.7058Z"
  })), _path261 || (_path261 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m16,28H6c-1.1028,0-2-.8972-2-2V6c0-1.1028.8972-2,2-2h20c1.1028,0,2,.8972,2,2v9h-2V6H6v20h10v2Z"
  })), children);
});
if (true) {
  Kubelet.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Kubernetes = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Kubernetes({
  children,
  size = 16,
  ...rest
}, ref) {
  if (true) {
    if (!didWarnAboutDeprecation["Kubernetes"]) {
      didWarnAboutDeprecation["Kubernetes"] = true;
      console.warn("The current kubernetes icon has been replaced by logo--kubernetes. As a result, the Kubernetes component will be removed in the next major version of @carbon/icons-react.");
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path262 || (_path262 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M29.2227,17.9639,25.9194,17.21a9.7843,9.7843,0,0,0-1.5249-6.6245l2.54-2.0254L25.6875,6.9961,23.1482,9.0205A9.97,9.97,0,0,0,17,6.0508V3H15V6.0508a9.97,9.97,0,0,0-6.1482,2.97L6.3125,6.9961,5.0654,8.56l2.54,2.0254A9.7843,9.7843,0,0,0,6.0806,17.21l-3.3033.7544.4454,1.9492L6.52,19.1606a10.0359,10.0359,0,0,0,4.2688,5.358l-1.33,2.7631,1.8018.8677L12.59,25.3882a9.8113,9.8113,0,0,0,6.8208,0L20.74,28.1494l1.8018-.8682-1.33-2.7626a10.0359,10.0359,0,0,0,4.2688-5.358l3.2973.7525ZM24,16c0,.2573-.0148.5112-.0386.7627l-5-1.1416a2.9664,2.9664,0,0,0-.1376-.5942L22.82,11.84A7.9392,7.9392,0,0,1,24,16Zm-9,0a1,1,0,1,1,1,1A1.0009,1.0009,0,0,1,15,16Zm6.5758-5.7256L17.58,13.4609a3.0028,3.0028,0,0,0-.58-.2768V8.0693A7.9762,7.9762,0,0,1,21.5758,10.2744ZM15,8.0693v5.1148a3.0028,3.0028,0,0,0-.58.2768l-3.9956-3.1865A7.9762,7.9762,0,0,1,15,8.0693ZM8,16a7.9392,7.9392,0,0,1,1.18-4.16l3.9962,3.1866a2.9664,2.9664,0,0,0-.1376.5942l-5,1.1416C8.0148,16.5112,8,16.2573,8,16Zm.4835,2.7124,4.9752-1.1362a3.0132,3.0132,0,0,0,.4146.5366L11.6594,22.71A8.031,8.031,0,0,1,8.4835,18.7124ZM16,24a7.9679,7.9679,0,0,1-2.54-.42l2.2206-4.6123A2.9988,2.9988,0,0,0,16,19a2.9988,2.9988,0,0,0,.319-.0322L18.54,23.58A7.9546,7.9546,0,0,1,16,24Zm4.3406-1.29-2.2139-4.5976a3.0132,3.0132,0,0,0,.4146-.5366l4.9752,1.1362A8.031,8.031,0,0,1,20.3406,22.71Z"
  })), children);
});
if (true) {
  Kubernetes.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const KubernetesControlPlaneNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function KubernetesControlPlaneNode({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path263 || (_path263 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22.951 20h-2.1843c-.4141-1.1611-1.5137-2-2.8157-2s-2.4016.8389-2.8157 2H8.951v2h6.1843c.4141 1.1611 1.5137 2 2.8157 2s2.4016-.8389 2.8157-2h2.1843v-2Zm-5 2c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1Zm5-10h-6.1843c-.4141-1.1611-1.5137-2-2.8157-2s-2.4016.8389-2.8157 2H8.951v2h2.1843c.4141 1.1611 1.5137 2 2.8157 2s2.4016-.8389 2.8157-2h6.1843v-2Zm-9 2c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1Z"
  })), _path264 || (_path264 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m29.8993 18.9897-2.593-11.1865a2 2 0 0 0-1.124-1.3711l-9.407-4.2544C16.5133 2.059 16.2321 2 15.9511 2s-.5623.0591-.8242.1777L5.7197 6.4321a2 2 0 0 0-1.124 1.3711l-2.593 11.1865a2.0008 2.0008 0 0 0 .3899 1.7056l6.886 8.5586A2.0001 2.0001 0 0 0 10.8367 30h10.2286a2.0001 2.0001 0 0 0 1.5581-.7461l6.886-8.5586a2.0008 2.0008 0 0 0 .3899-1.7056ZM21.0653 28H10.837l-6.886-8.5586 2.593-11.187L15.951 4l9.407 4.2549 2.593 11.1865L21.0652 28Z"
  })), _path265 || (_path265 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M0 0h32v32H0z"
  })), children);
});
if (true) {
  KubernetesControlPlaneNode.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const KubernetesIpAddress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function KubernetesIpAddress({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _circle11 || (_circle11 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "16",
    cy: "9",
    r: "2"
  })), _circle12 || (_circle12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "16",
    cy: "16",
    r: "2"
  })), _path266 || (_path266 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m18.8157,26c-.302-.8472-.9685-1.5137-1.8157-1.8159v-2.1841h3c.2969,0,.5781-.1318.7683-.3599l5-6c.1982-.2378.2751-.5547.2078-.8569l-2-9c-.0696-.3145-.2864-.5757-.5823-.7021l-7-3c-.1257-.0542-.2598-.0811-.3938-.0811s-.2681.0269-.3938.0811l-7.0015,3c-.2959.1265-.5127.3877-.5825.7021l-1.9985,9c-.0671.3027.0098.6191.208.8569l5,6c.1902.228.4714.3599.7683.3599h3v2.1846c-.8472.3018-1.5137.9683-1.8157,1.8154H4v2h9.1843c.4141,1.1611,1.5137,2,2.8157,2s2.4016-.8389,2.8157-2h9.1843v-2h-9.1843Zm-10.7329-11.2627l1.7808-8.02,6.1365-2.6294,6.135,2.6294,1.7822,8.02-4.3855,5.2627h-7.0635l-4.3855-5.2627Zm7.9172,13.2627c-.5515,0-1-.4487-1-1s.4485-1,1-1,1,.4487,1,1-.4485,1-1,1Z"
  })), children);
});
if (true) {
  KubernetesIpAddress.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const KubernetesOperator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function KubernetesOperator({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path267 || (_path267 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m19,21h-6c-1.1028,0-2-.8972-2-2v-6c0-1.1028.8972-2,2-2h6c1.1028,0,2,.8972,2,2v6c0,1.1028-.8972,2-2,2Zm-6-8v6h6v-6h-6Z"
  })), _path268 || (_path268 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m30,16c0-7.7197-6.2803-14-14-14S2,8.2803,2,16s6.2803,14,14,14c2.7773,0,5.417-.7959,7.7012-2.3081.3948.1914.8315.3081,1.2988.3081,1.6543,0,3-1.3457,3-3,0-.4673-.1167-.9043-.3079-1.2988,1.5122-2.2842,2.3079-4.9238,2.3079-7.7012Zm-26,0c0-6.6167,5.3833-12,12-12s12,5.3833,12,12c0,2.248-.6152,4.3877-1.7744,6.2681-.375-.1689-.7881-.2681-1.2256-.2681-1.6543,0-3,1.3457-3,3,0,.4375.0991.8506.2681,1.2256-1.8801,1.1592-4.0198,1.7744-6.2681,1.7744-6.6167,0-12-5.3833-12-12Zm21,10c-.5515,0-1-.4487-1-1s.4485-1,1-1,1,.4487,1,1-.4485,1-1,1Z"
  })), children);
});
if (true) {
  KubernetesOperator.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const KubernetesPod = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function KubernetesPod({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path269 || (_path269 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m22.5046,11.6368l-5.9883-3.5c-.1594-.0933-.3381-.1387-.5164-.1367-.1699.002-.3394.0474-.4915.1357l-6.0117,3.5c-.3076.1792-.4968.5083-.4968.8643v7c0,.356.1892.6851.4968.8643l6.0117,3.5c.1555.0903.3176.1357.4915.1357.1743,0,.3604-.0454.5164-.1367l5.9883-3.5c.3069-.1792.4954-.5078.4954-.8633v-7c0-.3555-.1885-.6841-.4954-.8633Zm-6.4939-1.479l4.0076,2.3423-4.0076,2.3423-4.0232-2.3423,4.0232-2.3423Zm-5.0107,4.0815l4,2.3291v4.6855l-4-2.3291v-4.6855Zm6,7.0249v-4.6836l4-2.3379v4.6836l-4,2.3379Z"
  })), _path270 || (_path270 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m16,31c-.1741,0-.3481-.0454-.5039-.1362l-12-7c-.3071-.1792-.4961-.5081-.4961-.8638v-14c0-.3557.189-.6846.4961-.8638L15.4961,1.1362c.1558-.0908.3298-.1362.5039-.1362s.3481.0454.5039.1362l11,6.4166-1.0078,1.7275-10.4961-6.1227-11,6.4166v12.8513l11,6.4166,11-6.4166v-7.4257h2v8c0,.3557-.189.6846-.4961.8638l-12,7c-.1558.0908-.3298.1362-.5039.1362Z"
  })), children);
});
if (true) {
  KubernetesPod.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const KubernetesWorkerNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function KubernetesWorkerNode({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path271 || (_path271 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23 18v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5-1.4-1.4-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V10h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5-1.4 1.4 1.5 1.5c-.3.5-.6 1.1-.7 1.8H9v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5 1.4 1.4 1.5-1.5c.5.3 1.1.6 1.8.7V24h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5 1.4-1.4-1.5-1.5c.3-.5.6-1.1.7-1.8H23Zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3Z"
  })), _path272 || (_path272 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m29.9483 18.9897-2.593-11.1865a2 2 0 0 0-1.124-1.3711l-9.407-4.2544C16.5623 2.059 16.2811 2 16.0001 2s-.5623.0591-.8242.1777L5.7687 6.4321a2 2 0 0 0-1.124 1.3711l-2.593 11.1865a2.0008 2.0008 0 0 0 .3899 1.7056l6.886 8.5586A2.0001 2.0001 0 0 0 10.8857 30h10.2286a2.0001 2.0001 0 0 0 1.5581-.7461l6.886-8.5586a2.0008 2.0008 0 0 0 .3899-1.7056ZM21.1143 28H10.886L4 19.4414l2.593-11.187L16 4l9.407 4.2549L28 19.4414 21.1142 28Z"
  })), _path273 || (_path273 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M0 0h32v32H0z"
  })), children);
});
if (true) {
  KubernetesWorkerNode.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Label({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path274 || (_path274 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23,13H18v2h5v2H19a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h6V15A2.0023,2.0023,0,0,0,23,13Zm0,8H19V19h4Z"
  })), _path275 || (_path275 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13,9H9a2.002,2.002,0,0,0-2,2V23H9V18h4v5h2V11A2.002,2.002,0,0,0,13,9ZM9,16V11h4v5Z"
  })), _path276 || (_path276 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28,28H4a2.0021,2.0021,0,0,1-2-2V6A2.0021,2.0021,0,0,1,4,4H28a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,28,28ZM4,6V26H28V6Z"
  })), children);
});
if (true) {
  Label.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Language = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Language({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path277 || (_path277 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 19H24V21H18z"
  })), _path278 || (_path278 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 15H30V17H18z"
  })), _path279 || (_path279 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 11H30V13H18z"
  })), _path280 || (_path280 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14,21V19H9V17H7v2H2v2h8.2148a8.5914,8.5914,0,0,1-2.2159,3.9771A9.2731,9.2731,0,0,1,6.5521,23H4.3334a10.8553,10.8553,0,0,0,2.1451,3.2966A14.6584,14.6584,0,0,1,3,28.127L3.7021,30a16.42,16.42,0,0,0,4.2907-2.3362A16.4883,16.4883,0,0,0,12.2979,30L13,28.127A14.664,14.664,0,0,1,9.5228,26.3,10.3132,10.3132,0,0,0,12.2516,21Z"
  })), _path281 || (_path281 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11.1666,13H13.333L8.75,2H6.5832L2,13H4.1664L5,11h5.3335ZM5.8331,9,7.6665,4.6,9.5,9Z"
  })), children);
});
if (true) {
  Language.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Laptop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Laptop({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path282 || (_path282 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,24H6a2.0023,2.0023,0,0,1-2-2V8A2.002,2.002,0,0,1,6,6H26a2.0023,2.0023,0,0,1,2,2V22A2.0027,2.0027,0,0,1,26,24ZM6,8V22H26V8Z",
    transform: "translate(0 .005)"
  })), _path283 || (_path283 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2 26.005H30V28.005H2z"
  })), children);
});
if (true) {
  Laptop.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Lasso = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Lasso({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path284 || (_path284 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20,2H12A9.9842,9.9842,0,0,0,7.0349,20.6553C7.0249,20.7705,7,20.8818,7,21a3.9929,3.9929,0,0,0,2.9106,3.83A4.0049,4.0049,0,0,1,6,28H4v2H6a6.0044,6.0044,0,0,0,5.928-5.12,3.9966,3.9966,0,0,0,2.93-2.88H20A10,10,0,0,0,20,2ZM11,23a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,11,23Zm9-3H14.8579a3.9841,3.9841,0,0,0-7.15-1.2637A7.99,7.99,0,0,1,12,4h8a8,8,0,0,1,0,16Z"
  })), children);
});
if (true) {
  Lasso.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LassoPolygon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LassoPolygon({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path285 || (_path285 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M29.6245,2.2193a1.0005,1.0005,0,0,0-1.0972-.1006L17.9353,7.8,3.366,2.0694a1,1,0,0,0-1.28,1.3369l6.4353,14.479A3.965,3.965,0,0,0,9.9106,24.83,4.0049,4.0049,0,0,1,6,28H4v2H6a6.0044,6.0044,0,0,0,5.928-5.12,4.0021,4.0021,0,0,0,2.93-2.88H23.24a2,2,0,0,0,1.9273-1.4649L29.9634,3.2676A1,1,0,0,0,29.6245,2.2193ZM11,23a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,11,23Zm12.24-3H14.8579a3.897,3.897,0,0,0-4.5117-2.9336L4.905,4.8238,18.0647,10,27.41,4.9878Z"
  })), children);
});
if (true) {
  LassoPolygon.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Launch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Launch({
  children,
  size = 16,
  ...rest
}, ref) {
  if (size === 16 || size === "16" || size === "16px") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      width: size,
      height: size,
      ref: ref,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      ...rest
    }, _path286 || (_path286 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z"
    })), _path287 || (_path287 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M10 1 10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z"
    })), children);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path288 || (_path288 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"
  })), _path289 || (_path289 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20 2 20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"
  })), children);
});
if (true) {
  Launch.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const WatsonHealthLaunchStudy_1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function WatsonHealthLaunchStudy_1({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _circle13 || (_circle13 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "23",
    cy: "25",
    r: "1"
  })), _path290 || (_path290 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,22v6H6V22H26m0-2H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V22a2,2,0,0,0-2-2Z"
  })), _path291 || (_path291 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20.59 10.59 17 14.17 17 2 15 2 15 14.17 11.41 10.59 10 12 16 18 22 12 20.59 10.59z"
  })), _path292 || (_path292 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 24H20V26H8z"
  })), children);
});
if (true) {
  WatsonHealthLaunchStudy_1.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const WatsonHealthLaunchStudy_2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function WatsonHealthLaunchStudy_2({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _circle14 || (_circle14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "23",
    cy: "7",
    r: "1"
  })), _path293 || (_path293 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,4v6H6V4H26m0-2H6A2,2,0,0,0,4,4v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2Z"
  })), _path294 || (_path294 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20.59 21.41 17 17.83 17 30 15 30 15 17.83 11.41 21.41 10 20 16 14 22 20 20.59 21.41z"
  })), _path295 || (_path295 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 6H20V8H8z"
  })), children);
});
if (true) {
  WatsonHealthLaunchStudy_2.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const WatsonHealthLaunchStudy_3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function WatsonHealthLaunchStudy_3({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _circle15 || (_circle15 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "23",
    cy: "25",
    r: "1"
  })), _path296 || (_path296 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26,22v6H6V22H26m0-2H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V22a2,2,0,0,0-2-2Z"
  })), _path297 || (_path297 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20.59 4.59 17 8.17 17 0 15 0 15 8.17 11.41 4.59 10 6 16 12 22 6 20.59 4.59z"
  })), _path298 || (_path298 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20.59 10.59 16 15.16 11.41 10.59 10 12 16 18 22 12 20.59 10.59z"
  })), _path299 || (_path299 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 24H20V26H8z"
  })), children);
});
if (true) {
  WatsonHealthLaunchStudy_3.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Layers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Layers({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path300 || (_path300 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,24a.9967.9967,0,0,1-.4741-.12l-13-7L3.4741,15.12,16,21.8643,28.5259,15.12l.9482,1.7607-13,7A.9967.9967,0,0,1,16,24Z"
  })), _path301 || (_path301 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,30a.9967.9967,0,0,1-.4741-.12l-13-7L3.4741,21.12,16,27.8643,28.5259,21.12l.9482,1.7607-13,7A.9967.9967,0,0,1,16,30Z"
  })), _path302 || (_path302 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,18a.9967.9967,0,0,1-.4741-.12l-13-7a1,1,0,0,1,0-1.7607l13-7a.9982.9982,0,0,1,.9482,0l13,7a1,1,0,0,1,0,1.7607l-13,7A.9967.9967,0,0,1,16,18ZM5.1094,10,16,15.8643,26.8906,10,16,4.1358Z"
  })), children);
});
if (true) {
  Layers.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LayersExternal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LayersExternal({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path303 || (_path303 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m16,24c-.1631,0-.3262-.0398-.4741-.1196l-13-7,.9482-1.7607,12.5259,6.7446,12.5259-6.7446.9482,1.7607-13,7c-.1479.0798-.311.1196-.4741.1196Z"
  })), _path304 || (_path304 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m16,30c-.1631,0-.3262-.0398-.4741-.1196l-13-7,.9482-1.7607,12.5259,6.7446,12.5259-6.7446.9482,1.7607-13,7c-.1479.0798-.311.1196-.4741.1196Z"
  })), _path305 || (_path305 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m29.4741,9.1196L16,1.8643v2.2715l10.8906,5.8643-10.8906,5.8643v2.2715l13.4741-7.2554c.324-.1743.5259-.5122.5259-.8804s-.2019-.7061-.5259-.8804Z"
  })), _path306 || (_path306 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeWidth: "0",
    d: "m4.4141,9.4141l3.5859-3.586v8.1719s2,0,2,0V5.8281s3.5859,3.5859,3.5859,3.5859l1.4141-1.414L9,2,3,8l1.4141,1.4141Z"
  })), children);
});
if (true) {
  LayersExternal.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const Legend = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Legend({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path307 || (_path307 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16 22H30V24H16z"
  })), _rect || (_rect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    width: "6",
    height: "6",
    x: "4",
    y: "20",
    rx: "1"
  })), _path308 || (_path308 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16 8H30V10H16z"
  })), _path309 || (_path309 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.5,12h-5a.5.5,0,0,1-.4473-.7236l2.5-5.0224a.5206.5206,0,0,1,.8945,0l2.5,5.0225A.5.5,0,0,1,9.5,12Z"
  })), children);
});
if (true) {
  Legend.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterAa = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterAa({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path310 || (_path310 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23,13H18v2h5v2H19a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h6V15A2,2,0,0,0,23,13Zm0,8H19V19h4Z"
  })), _path311 || (_path311 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13,9H9a2,2,0,0,0-2,2V23H9V18h4v5h2V11A2,2,0,0,0,13,9ZM9,16V11h4v5Z"
  })), children);
});
if (true) {
  LetterAa.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterBb = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterBb({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path312 || (_path312 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23,13H19V9H17V23h6a2,2,0,0,0,2-2V15A2,2,0,0,0,23,13Zm-4,8V15h4v6Z"
  })), _path313 || (_path313 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15,12a3,3,0,0,0-3-3H7V23h5a3,3,0,0,0,3-3V18a3,3,0,0,0-.78-2A3,3,0,0,0,15,14ZM9,11h3a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H9Zm4,9a1,1,0,0,1-1,1H9V17h3a1,1,0,0,1,1,1Z"
  })), children);
});
if (true) {
  LetterBb.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterCc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterCc({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path314 || (_path314 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M24,23H19a2,2,0,0,1-2-2V15a2,2,0,0,1,2-2h5v2H19v6h5Z"
  })), _path315 || (_path315 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15,23H9a2,2,0,0,1-2-2V11A2,2,0,0,1,9,9h6v2H9V21h6Z"
  })), children);
});
if (true) {
  LetterCc.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterDd = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterDd({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path316 || (_path316 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23,9v4H19a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h6V9Zm-4,6h4v6H19Z"
  })), _path317 || (_path317 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11,23H7V9h4a4,4,0,0,1,4,4v6A4,4,0,0,1,11,23ZM9,21h2a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2H9Z"
  })), children);
});
if (true) {
  LetterDd.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterEe = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterEe({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path318 || (_path318 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M25,19V15a2.0023,2.0023,0,0,0-2-2H19a2.0023,2.0023,0,0,0-2,2v6a2.0077,2.0077,0,0,0,2,2h5V21H19V19Zm-6-4h4v2H19Z"
  })), _path319 || (_path319 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15 11 15 9 7 9 7 23 15 23 15 21 9 21 9 17 14 17 14 15 9 15 9 11 15 11z"
  })), children);
});
if (true) {
  LetterEe.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterFf = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterFf({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path320 || (_path320 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16 11 16 9 8 9 8 23 10 23 10 17 15 17 15 15 10 15 10 11 16 11z"
  })), _path321 || (_path321 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M24,11V9H21a2,2,0,0,0-2,2v2H17v2h2v8h2V15h3V13H21V11Z"
  })), children);
});
if (true) {
  LetterFf.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterGg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterGg({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path322 || (_path322 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19,13a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h4v2H18v2h5a2,2,0,0,0,2-2V13Zm4,8H19V15h4Z"
  })), _path323 || (_path323 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15,23H9a2,2,0,0,1-2-2V11A2,2,0,0,1,9,9h6v2H9V21h4V17H11V15h4Z"
  })), children);
});
if (true) {
  LetterGg.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterHh = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterHh({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path324 || (_path324 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13 9 13 15 9 15 9 9 7 9 7 23 9 23 9 17 13 17 13 23 15 23 15 9 13 9z"
  })), _path325 || (_path325 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23,13H19V9H17V23h2V15h4v8h2V15A2,2,0,0,0,23,13Z"
  })), children);
});
if (true) {
  LetterHh.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterIi = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterIi({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path326 || (_path326 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10 11 13 11 13 21 10 21 10 23 18 23 18 21 15 21 15 11 18 11 18 9 10 9 10 11z"
  })), _path327 || (_path327 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20 13H22V23H20z"
  })), _path328 || (_path328 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20 9H22V11H20z"
  })), children);
});
if (true) {
  LetterIi.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterJj = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterJj({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path329 || (_path329 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20 9H22V11H20z"
  })), _path330 || (_path330 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20,25H17v2h3a2,2,0,0,0,2-2V13H20Z"
  })), _path331 || (_path331 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14,23H10a2,2,0,0,1-2-2V19h2v2h4V9h2V21A2,2,0,0,1,14,23Z"
  })), children);
});
if (true) {
  LetterJj.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterKk = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterKk({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path332 || (_path332 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15 9 12.89 9 9 15.55 9 9 7 9 7 23 9 23 9 18.71 9.93 17.22 12.89 23 15 23 11.11 15.43 15 9z"
  })), _path333 || (_path333 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22.78 23 25 23 21.22 17 25 13 22.76 13 19 17.17 19 9 17 9 17 23 19 23 19 19.25 19.96 18.21 22.78 23z"
  })), children);
});
if (true) {
  LetterKk.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterLl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterLl({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path334 || (_path334 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11 21 11 9 9 9 9 23 17 23 17 21 11 21z"
  })), _path335 || (_path335 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23,23H21a2,2,0,0,1-2-2V9h2V21h2Z"
  })), children);
});
if (true) {
  LetterLl.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterMm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterMm({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path336 || (_path336 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M24,13H16V23h2V15h2v8h2V15h2v8h2V15A2,2,0,0,0,24,13Z"
  })), _path337 || (_path337 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 9 10.48 14 10 15.98 9.54 14 8 9 6 9 6 23 8 23 8 15 7.84 13 8.42 15 10 19.63 11.58 15 12.16 13 12 15 12 23 14 23 14 9 12 9z"
  })), children);
});
if (true) {
  LetterMm.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterNn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterNn({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path338 || (_path338 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M25,23H23V15H19v8H17V13h6a2,2,0,0,1,2,2Z"
  })), _path339 || (_path339 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13 19 9.32 9 7 9 7 23 9 23 9 13 12.68 23 15 23 15 9 13 9 13 19z"
  })), children);
});
if (true) {
  LetterNn.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterOo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterOo({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path340 || (_path340 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23,23H19a2,2,0,0,1-2-2V15a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v6A2,2,0,0,1,23,23Zm-4-8v6h4V15Z"
  })), _path341 || (_path341 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13,23H9a2,2,0,0,1-2-2V11A2,2,0,0,1,9,9h4a2,2,0,0,1,2,2V21A2,2,0,0,1,13,23ZM9,11V21h4V11Z"
  })), children);
});
if (true) {
  LetterOo.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterPp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterPp({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path342 || (_path342 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23,13H17V27h2V23h4a2,2,0,0,0,2-2V15A2,2,0,0,0,23,13Zm-4,8V15h4v6Z"
  })), _path343 || (_path343 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9,23H7V9h6a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H9Zm0-7h4V11H9Z"
  })), children);
});
if (true) {
  LetterPp.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterQq = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterQq({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path344 || (_path344 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19,13a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h4v4h2V13Zm4,8H19V15h4Z"
  })), _path345 || (_path345 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13,9H9a2,2,0,0,0-2,2V21a2,2,0,0,0,2,2h1v2a2,2,0,0,0,2,2h2V25H12V23h1a2,2,0,0,0,2-2V11A2,2,0,0,0,13,9ZM9,21V11h4V21Z"
  })), children);
});
if (true) {
  LetterQq.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterRr = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterRr({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path346 || (_path346 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16,15V11a2,2,0,0,0-2-2H8V23h2V17h1.48l2.34,6H16l-2.33-6H14A2,2,0,0,0,16,15Zm-6-4h4v4H10Z"
  })), _path347 || (_path347 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M24 13 18 13 18 23 20 23 20 15 24 15 24 13z"
  })), children);
});
if (true) {
  LetterRr.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}
const LetterSs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LetterSs({
  children,
  size = 16,
  ...rest
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...rest
  }, _path348 || (_path348 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22,23H17V21h5V19H19a2,2,0,0,1-2-2V15a2,2,0,0,1,2-2h5v2H19v2h3a2,2,0,0,1,2,2v2A2,2,0,0,1,22,23Z"
  })), _path349 || (_path349 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13,23H7V21h6V17H9a2,2,0,0,1-2-2V11A2,2,0,0,1,9,9h6v2H9v4h4a2,2,0,0,1,2,2v4A2,2,0,0,1,13,23Z"
  })), children);
});
if (true) {
  LetterSs.propTypes = _iconPropTypes_C5chbmyn_js__WEBPACK_IMPORTED_MODULE_2__.i;
}




/***/ },

/***/ "./node_modules/@carbon/icons-react/es/iconPropTypes-C5chbmyn.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@carbon/icons-react/es/iconPropTypes-C5chbmyn.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ iconPropTypes)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */


const iconPropTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)])
};




/***/ },

/***/ "./node_modules/ansi-html-community/index.js"
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
(module) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ },

/***/ "./node_modules/classnames/index.js"
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ },

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

/***/ "./node_modules/events/events.js"
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


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

/***/ "./node_modules/object-assign/index.js"
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ },

/***/ "./node_modules/prop-types/checkPropTypes.js"
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ },

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js"
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ },

/***/ "./node_modules/prop-types/index.js"
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else // removed by dead control flow
{}


/***/ },

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ },

/***/ "./node_modules/prop-types/lib/has.js"
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ },

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ },

/***/ "./node_modules/prop-types/node_modules/react-is/index.js"
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


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

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js"
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebSocketClient)
/* harmony export */ });
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/** @typedef {import("../index").EXPECTED_ANY} EXPECTED_ANY */

/**
 * @implements {CommunicationClient}
 */
var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url url to connect
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);
    this.client = new WebSocket(url);
    this.client.onerror = function (error) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
    };
  }

  /**
   * @param {(...args: EXPECTED_ANY[]) => void} fn function
   */
  return _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(fn) {
      this.client.onopen = fn;
    }

    /**
     * @param {(...args: EXPECTED_ANY[]) => void} fn function
     */
  }, {
    key: "onClose",
    value: function onClose(fn) {
      this.client.onclose = fn;
    }

    // call f with the message string as the first argument
    /**
     * @param {(...args: EXPECTED_ANY[]) => void} fn function
     */
  }, {
    key: "onMessage",
    value: function onMessage(fn) {
      this.client.onmessage = function (err) {
        fn(err.data);
      };
    }
  }]);
}();


/***/ },

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8081&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true"
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8081&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true ***!
  \***********************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=8081&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSocketURL: () => (/* binding */ createSocketURL),
/* harmony export */   getCurrentScriptSource: () => (/* binding */ getCurrentScriptSource),
/* harmony export */   parseURL: () => (/* binding */ parseURL)
/* harmony export */ });
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js");
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js");
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress.js */ "./node_modules/webpack-dev-server/client/progress.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* global __resourceQuery, __webpack_hash__ */
// @ts-expect-error

// @ts-expect-error







// eslint-disable-next-line jsdoc/no-restricted-syntax
/** @typedef {any} EXPECTED_ANY */

/**
 * @typedef {object} RawOverlayOptions
 * @property {string=} warnings warnings
 * @property {string=} errors errors
 * @property {string=} runtimeErrors runtime errors
 * @property {string=} trustedTypesPolicyName trusted types policy name
 */

/**
 * @typedef {object} OverlayOptions
 * @property {(boolean | ((error: Error) => boolean))=} warnings warnings
 * @property {(boolean | ((error: Error) => boolean))=} errors errors
 * @property {(boolean | ((error: Error) => boolean))=} runtimeErrors runtime errors
 * @property {string=} trustedTypesPolicyName trusted types policy name
 */

/** @typedef {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} LogLevel */

/**
 * @typedef {object} Options
 * @property {boolean} hot true when hot enabled, otherwise false
 * @property {boolean} liveReload true when live reload enabled, otherwise false
 * @property {boolean} progress true when need to show progress, otherwise false
 * @property {boolean | OverlayOptions} overlay overlay options
 * @property {LogLevel=} logging logging level
 * @property {number=} reconnect count of allowed reconnection
 */

/**
 * @typedef {object} Status
 * @property {boolean} isUnloading true when unloaded, otherwise false
 * @property {string} currentHash current hash
 * @property {string=} previousHash previous hash
 */

/**
 * @param {boolean | RawOverlayOptions | OverlayOptions} overlayOptions overlay options
 */
var decodeOverlayOptions = function decodeOverlayOptions(overlayOptions) {
  if (_typeof(overlayOptions) === "object") {
    var requiredOptions = ["warnings", "errors", "runtimeErrors"];
    for (var i = 0; i < requiredOptions.length; i++) {
      var property = /** @type {keyof Omit<RawOverlayOptions, "trustedTypesPolicyName">} */
      requiredOptions[i];
      if (typeof overlayOptions[property] === "string") {
        var overlayFilterFunctionString = decodeURIComponent(overlayOptions[property]);

        /** @type {OverlayOptions} */
        overlayOptions[property] = /** @type {(error: Error) => boolean} */
        // eslint-disable-next-line no-new-func
        new Function("message", "var callback = ".concat(overlayFilterFunctionString, "\n        return callback(message)"));
      }
    }
  }
};

/**
 * @type {Status}
 */
var status = {
  isUnloading: false,
  currentHash: __webpack_require__.h()
};

/**
 * @returns {string} current script source
 */
var getCurrentScriptSource = function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return /** @type {string} */document.currentScript.getAttribute("src");
  }

  // Fallback to getting all scripts running in the document.
  var scriptElements = document.scripts || [];
  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
    return element.getAttribute("src");
  });
  if (scriptElementsWithSrc.length > 0) {
    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute("src");
  }

  // Fail as there was no script to use.
  throw new Error("[webpack-dev-server] Failed to get current script source.");
};

/** @typedef {{ hot?: string, ["live-reload"]?: string, progress?: string, reconnect?: string, logging?: LogLevel, overlay?: string, fromCurrentScript?: boolean }} AdditionalParsedURL */
/** @typedef {Partial<URL> & AdditionalParsedURL} ParsedURL */

/**
 * @param {string} resourceQuery resource query
 * @returns {ParsedURL} parsed URL
 */
var parseURL = function parseURL(resourceQuery) {
  /** @type {ParsedURL} */
  var result = {};
  if (typeof resourceQuery === "string" && resourceQuery !== "") {
    var searchParams = resourceQuery.slice(1).split("&");
    for (var i = 0; i < searchParams.length; i++) {
      var pair = searchParams[i].split("=");

      /** @type {EXPECTED_ANY} */
      result[pair[0]] = decodeURIComponent(pair[1]);
    }
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptSource = getCurrentScriptSource();
    var scriptSourceURL;
    try {
      // The placeholder `baseURL` with `window.location.href`,
      // is to allow parsing of path-relative or protocol-relative URLs,
      // and will have no effect if `scriptSource` is a fully valid URL.
      scriptSourceURL = new URL(scriptSource, self.location.href);
    } catch (_err) {
      // URL parsing failed, do nothing.
      // We will still proceed to see if we can recover using `resourceQuery`
    }
    if (scriptSourceURL) {
      result = scriptSourceURL;
      result.fromCurrentScript = true;
    }
  }
  return result;
};
var parsedResourceQuery = parseURL(__resourceQuery);

/** @typedef {{ ["Hot Module Replacement"]: boolean, ["Live Reloading"]: boolean, Progress: boolean, Overlay: boolean }} Features */

/** @type {Features} */
var enabledFeatures = {
  "Hot Module Replacement": false,
  "Live Reloading": false,
  Progress: false,
  Overlay: false
};

/** @type {Options} */
var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  enabledFeatures["Hot Module Replacement"] = true;
}
if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  enabledFeatures["Live Reloading"] = true;
}
if (parsedResourceQuery.progress === "true") {
  options.progress = true;
  enabledFeatures.Progress = true;
}
if (parsedResourceQuery.overlay) {
  try {
    options.overlay = JSON.parse(parsedResourceQuery.overlay);
  } catch (err) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Error parsing overlay options from resource query:", err);
  }

  // Fill in default "true" params for partially-specified objects.
  if (_typeof(options.overlay) === "object") {
    options.overlay = _objectSpread({
      errors: true,
      warnings: true,
      runtimeErrors: true
    }, options.overlay);
    decodeOverlayOptions(options.overlay);
  }
  enabledFeatures.Overlay = options.overlay !== false;
}
if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}
if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}

/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level level
 */
var setAllLogLevel = function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_1___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
};
if (options.logging) {
  setAllLogLevel(options.logging);
}

/**
 * @param {Features} features features
 */
var logEnabledFeatures = function logEnabledFeatures(features) {
  var listEnabledFeatures = Object.keys(features);
  if (!features || listEnabledFeatures.length === 0) {
    return;
  }
  var logString = "Server started:";

  // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
  for (var i = 0; i < listEnabledFeatures.length; i++) {
    var key = /** @type {keyof Features} */listEnabledFeatures[i];
    logString += " ".concat(key, " ").concat(features[key] ? "enabled" : "disabled", ",");
  }
  // replace last comma with a period
  logString = logString.slice(0, -1).concat(".");
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(logString);
};
logEnabledFeatures(enabledFeatures);
self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var overlay = typeof window !== "undefined" ? (0,_overlay_js__WEBPACK_IMPORTED_MODULE_2__.createOverlay)(_typeof(options.overlay) === "object" ? {
  trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,
  catchRuntimeError: options.overlay.runtimeErrors
} : {
  trustedTypesPolicyName: false,
  catchRuntimeError: options.overlay
}) : {
  send: function send() {}
};

/**
 * @param {Options} options options
 * @param {Status} currentStatus current status
 */
var reloadApp = function reloadApp(_ref, currentStatus) {
  var hot = _ref.hot,
    liveReload = _ref.liveReload;
  if (currentStatus.isUnloading) {
    return;
  }
  var currentHash = currentStatus.currentHash,
    previousHash = currentStatus.previousHash;
  var isInitial = currentHash.indexOf(/** @type {string} */previousHash) >= 0;
  if (isInitial) {
    return;
  }

  /**
   * @param {Window} rootWindow root window
   * @param {number} intervalId interval id
   */
  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Reloading...");
    rootWindow.location.reload();
  }
  var search = self.location.search.toLowerCase();
  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;
  if (hot && allowToHot) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App hot update...");
    if (typeof EventTarget !== "undefined" && (webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default()) instanceof EventTarget) {
      var event = new CustomEvent("webpackHotUpdate", {
        detail: {
          currentHash: currentStatus.currentHash
        },
        bubbles: true,
        cancelable: false
      });
      webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().dispatchEvent(event);
    } else {
      webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit("webpackHotUpdate", currentStatus.currentHash);
    }
    if (typeof self !== "undefined" && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(currentStatus.currentHash), "*");
    }
  }
  // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload && allowToLiveReload) {
    /** @type {Window} */
    var rootWindow = self;

    // use parent window for reload (in case we're in an iframe with no valid src)
    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== "about:") {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;
        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }
};
var ansiRegex = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"), "g");

/**
 * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.
 * Adapted from code originally released by Sindre Sorhus
 * Licensed the MIT License
 * @param {string} string string
 * @returns {string} string without ansi
 */
var stripAnsi = function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a `string`, got `".concat(_typeof(string), "`"));
  }
  return string.replace(ansiRegex, "");
};
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }
    options.hot = true;
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }
    options.liveReload = true;
  },
  invalid: function invalid() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Recompiling...");

    // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Invalid");
  },
  /**
   * @param {string} hash hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,
  /**
   * @param {boolean} value overlay value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }
    options.overlay = value;
    decodeOverlayOptions(options.overlay);
  },
  /**
   * @param {number} value reconnect value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }
    options.reconnect = value;
  },
  /**
   * @param {boolean} value progress value
   */
  progress: function progress(value) {
    options.progress = value;
  },
  /**
   * @param {{ pluginName?: string, percent: string, msg: string }} data date with progress
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }
    if ((0,_progress_js__WEBPACK_IMPORTED_MODULE_3__.isProgressSupported)() && typeof options.progress === "string") {
      var progress = document.querySelector("wds-progress");
      if (!progress) {
        (0,_progress_js__WEBPACK_IMPORTED_MODULE_3__.defineProgressElement)();
        progress = document.createElement("wds-progress");
        document.body.appendChild(progress);
      }
      progress.setAttribute("progress", data.percent);
      progress.setAttribute("type", options.progress);
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Progress", data);
  },
  "still-ok": function stillOk() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Nothing changed.");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("StillOk");
  },
  ok: function ok() {
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Ok");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    reloadApp(options, status);
  },
  /**
   * @param {string} file changed file
   */
  "static-changed": function staticChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },
  /**
   * @param {Error[]} warnings warnings
   * @param {{ preventReloading: boolean }=} params extra params
   */
  warnings: function warnings(_warnings, params) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn("Warnings while compiling.");
    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_2__.formatProblem)("warning", error),
        header = _formatProblem.header,
        body = _formatProblem.body;
      return "".concat(header, "\n").concat(stripAnsi(body));
    });
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Warnings", printableWarnings);
    for (var i = 0; i < printableWarnings.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);
    }
    var overlayWarningsSetting = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;
    if (overlayWarningsSetting) {
      var warningsToDisplay = typeof overlayWarningsSetting === "function" ? _warnings.filter(overlayWarningsSetting) : _warnings;
      if (warningsToDisplay.length) {
        overlay.send({
          type: "BUILD_ERROR",
          level: "warning",
          messages: _warnings
        });
      }
    }
    if (params && params.preventReloading) {
      return;
    }
    reloadApp(options, status);
  },
  /**
   * @param {Error[]} errors errors
   */
  errors: function errors(_errors) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Errors while compiling. Reload prevented.");
    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_2__.formatProblem)("error", error),
        header = _formatProblem2.header,
        body = _formatProblem2.body;
      return "".concat(header, "\n").concat(stripAnsi(body));
    });
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Errors", printableErrors);
    for (var i = 0; i < printableErrors.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);
    }
    var overlayErrorsSettings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;
    if (overlayErrorsSettings) {
      var errorsToDisplay = typeof overlayErrorsSettings === "function" ? _errors.filter(overlayErrorsSettings) : _errors;
      if (errorsToDisplay.length) {
        overlay.send({
          type: "BUILD_ERROR",
          level: "error",
          messages: _errors
        });
      }
    }
  },
  /**
   * @param {Error} error error
   */
  error: function error(_error) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
  },
  close: function close() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Disconnected!");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Close");
  }
};

/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL object URL
 * @returns {string} formatted url
 */
var formatURL = function formatURL(objURL) {
  var protocol = objURL.protocol || "";
  if (protocol && protocol.slice(-1) !== ":") {
    protocol += ":";
  }
  var auth = objURL.auth || "";
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }
  var host = "";
  if (objURL.hostname) {
    host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));
    if (objURL.port) {
      host += ":".concat(objURL.port);
    }
  }
  var pathname = objURL.pathname || "";
  if (objURL.slashes) {
    host = "//".concat(host || "");
    if (pathname && pathname.charAt(0) !== "/") {
      pathname = "/".concat(pathname);
    }
  } else if (!host) {
    host = "";
  }
  var search = objURL.search || "";
  if (search && search.charAt(0) !== "?") {
    search = "?".concat(search);
  }
  var hash = objURL.hash || "";
  if (hash && hash.charAt(0) !== "#") {
    hash = "#".concat(hash);
  }
  pathname = pathname.replace(/[?#]/g,
  /**
   * @param {string} match matched string
   * @returns {string} encoded URI component
   */
  function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
};

/**
 * @param {ParsedURL} parsedURL parsed URL
 * @returns {string} socket URL
 */
var createSocketURL = function createSocketURL(parsedURL) {
  var hostname = parsedURL.hostname;

  // Node.js module parses it as `::`
  // `new URL(urlString, [baseURLString])` parses it as '[::]'
  var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]";

  // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384
  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
    hostname = self.location.hostname;
  }
  var socketURLProtocol = parsedURL.protocol || self.location.protocol;

  // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.
  if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
    socketURLProtocol = self.location.protocol;
  }
  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
  var socketURLAuth = "";

  // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
  // Parse authentication credentials in case we need them
  if (parsedURL.username) {
    socketURLAuth = parsedURL.username;

    // Since HTTP basic authentication does not allow empty username,
    // we only include password if the username is not empty.
    if (parsedURL.password) {
      // Result: <username>:<password>
      socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
    }
  }

  // In case the host is a raw IPv6 address, it can be enclosed in
  // the brackets as the brackets are needed in the final URL string.
  // Need to remove those as url.format blindly adds its own set of brackets
  // if the host string contains colons. That would lead to non-working
  // double brackets (e.g. [[::]]) host
  //
  // All of these web socket url params are optionally passed in through resourceQuery,
  // so we need to fall back to the default if they are not provided
  var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
  var socketURLPort = parsedURL.port;
  if (!socketURLPort || socketURLPort === "0") {
    socketURLPort = self.location.port;
  }

  // If path is provided it'll be passed in via the resourceQuery as a
  // query param so it has to be parsed out of the querystring in order for the
  // client to open the socket to the correct location.
  var socketURLPathname = "/ws";
  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
    socketURLPathname = parsedURL.pathname;
  }
  return formatURL({
    protocol: socketURLProtocol,
    auth: socketURLAuth,
    hostname: socketURLHostname,
    port: socketURLPort,
    pathname: socketURLPathname,
    slashes: true
  });
};
var socketURL = createSocketURL(parsedResourceQuery);
(0,_socket_js__WEBPACK_IMPORTED_MODULE_4__["default"])(socketURL, onSocketMessage, options.reconnect);


/***/ },

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js"
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
(__unused_webpack_module, exports) {

/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client-src/modules/logger/tapable.js":
/*!**********************************************!*\
  !*** ./client-src/modules/logger/tapable.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_372__) {

__nested_webpack_require_372__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_372__.d(__nested_webpack_exports__, {
/* harmony export */   SyncBailHook: function() { return /* binding */ SyncBailHook; }
/* harmony export */ });
/**
 * @returns {SyncBailHook} mocked sync bail hook
 * @constructor
 */
function SyncBailHook() {
  return {
    call: function call() {}
  };
}

/**
 * Client stub for tapable SyncBailHook
 */


/***/ }),

/***/ "./node_modules/webpack/lib/logging/Logger.js":
/*!****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/Logger.js ***!
  \****************************************************/
/***/ (function(module) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && "symbol" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o.constructor === (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o !== (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && null != r[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var LogType = Object.freeze({
  error: (/** @type {"error"} */"error"),
  // message, c style arguments
  warn: (/** @type {"warn"} */"warn"),
  // message, c style arguments
  info: (/** @type {"info"} */"info"),
  // message, c style arguments
  log: (/** @type {"log"} */"log"),
  // message, c style arguments
  debug: (/** @type {"debug"} */"debug"),
  // message, c style arguments

  trace: (/** @type {"trace"} */"trace"),
  // no arguments

  group: (/** @type {"group"} */"group"),
  // [label]
  groupCollapsed: (/** @type {"groupCollapsed"} */"groupCollapsed"),
  // [label]
  groupEnd: (/** @type {"groupEnd"} */"groupEnd"),
  // [label]

  profile: (/** @type {"profile"} */"profile"),
  // [profileName]
  profileEnd: (/** @type {"profileEnd"} */"profileEnd"),
  // [profileName]

  time: (/** @type {"time"} */"time"),
  // name, time as [seconds, nanoseconds]

  clear: (/** @type {"clear"} */"clear"),
  // no arguments
  status: (/** @type {"status"} */"status") // message, arguments
});
module.exports.LogType = LogType;

/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger raw log method");
var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger times");
var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger aggregated times");

/** @typedef {EXPECTED_ANY[]} Args */
var WebpackLogger = /*#__PURE__*/function () {
  /**
   * @param {(type: LogTypeEnum, args?: Args) => void} log log function
   * @param {(name: string | (() => string)) => WebpackLogger} getChildLogger function to create child logger
   */
  function WebpackLogger(log, getChildLogger) {
    _classCallCheck(this, WebpackLogger);
    this[LOG_SYMBOL] = log;
    this.getChildLogger = getChildLogger;
  }

  /**
   * @param {Args} args args
   */
  return _createClass(WebpackLogger, [{
    key: "error",
    value: function error() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this[LOG_SYMBOL](LogType.error, args);
    }

    /**
     * @param {Args} args args
     */
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this[LOG_SYMBOL](LogType.warn, args);
    }

    /**
     * @param {Args} args args
     */
  }, {
    key: "info",
    value: function info() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this[LOG_SYMBOL](LogType.info, args);
    }

    /**
     * @param {Args} args args
     */
  }, {
    key: "log",
    value: function log() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this[LOG_SYMBOL](LogType.log, args);
    }

    /**
     * @param {Args} args args
     */
  }, {
    key: "debug",
    value: function debug() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this[LOG_SYMBOL](LogType.debug, args);
    }

    /**
     * @param {EXPECTED_ANY} assertion assertion
     * @param {Args} args args
     */
  }, {
    key: "assert",
    value: function assert(assertion) {
      if (!assertion) {
        for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          args[_key6 - 1] = arguments[_key6];
        }
        this[LOG_SYMBOL](LogType.error, args);
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      this[LOG_SYMBOL](LogType.trace, ["Trace"]);
    }
  }, {
    key: "clear",
    value: function clear() {
      this[LOG_SYMBOL](LogType.clear);
    }

    /**
     * @param {Args} args args
     */
  }, {
    key: "status",
    value: function status() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      this[LOG_SYMBOL](LogType.status, args);
    }

    /**
     * @param {Args} args args
     */
  }, {
    key: "group",
    value: function group() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      this[LOG_SYMBOL](LogType.group, args);
    }

    /**
     * @param {Args} args args
     */
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      this[LOG_SYMBOL](LogType.groupCollapsed, args);
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      this[LOG_SYMBOL](LogType.groupEnd);
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "profile",
    value: function profile(label) {
      this[LOG_SYMBOL](LogType.profile, [label]);
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "profileEnd",
    value: function profileEnd(label) {
      this[LOG_SYMBOL](LogType.profileEnd, [label]);
    }

    /**
     * @param {string} label label
     */
  }, {
    key: "time",
    value: function time(label) {
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
      this[TIMERS_SYMBOL].set(label, process.hrtime());
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeLog",
    value: function timeLog(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
      }
      var time = process.hrtime(prev);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeEnd",
    value: function timeEnd(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
      }
      var time = process.hrtime(prev);
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeAggregate",
    value: function timeAggregate(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
      }
      var time = process.hrtime(prev);
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_SYMBOL].delete(label);
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
      var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (current !== undefined) {
        if (time[1] + current[1] > 1e9) {
          time[0] += current[0] + 1;
          time[1] = time[1] - 1e9 + current[1];
        } else {
          time[0] += current[0];
          time[1] += current[1];
        }
      }
      this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeAggregateEnd",
    value: function timeAggregateEnd(label) {
      if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
      var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (time === undefined) return;
      this[TIMERS_AGGREGATES_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }]);
}();
module.exports.Logger = WebpackLogger;

/***/ }),

/***/ "./node_modules/webpack/lib/logging/createConsoleLogger.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_12749__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && r[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && null != r[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && "symbol" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o.constructor === (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o !== (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _require = __nested_webpack_require_12749__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
  LogType = _require.LogType;

/** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */
/** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */
/** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */
/** @typedef {import("./Logger").Args} Args */

/** @typedef {(item: string) => boolean} FilterFunction */
/** @typedef {(value: string, type: LogTypeEnum, args?: Args) => void} LoggingFunction */

/**
 * @typedef {object} LoggerConsole
 * @property {() => void} clear
 * @property {() => void} trace
 * @property {(...args: Args) => void} info
 * @property {(...args: Args) => void} log
 * @property {(...args: Args) => void} warn
 * @property {(...args: Args) => void} error
 * @property {(...args: Args) => void=} debug
 * @property {(...args: Args) => void=} group
 * @property {(...args: Args) => void=} groupCollapsed
 * @property {(...args: Args) => void=} groupEnd
 * @property {(...args: Args) => void=} status
 * @property {(...args: Args) => void=} profile
 * @property {(...args: Args) => void=} profileEnd
 * @property {(...args: Args) => void=} logTime
 */

/**
 * @typedef {object} LoggerOptions
 * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
 * @property {FilterTypes|boolean} debug filter for debug logging
 * @property {LoggerConsole} console the console to log to
 */

/**
 * @param {FilterItemTypes} item an input item
 * @returns {FilterFunction | undefined} filter function
 */
var filterToFunction = function filterToFunction(item) {
  if (typeof item === "string") {
    var regExp = new RegExp("[\\\\/]".concat(item.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
    return function (ident) {
      return regExp.test(ident);
    };
  }
  if (item && _typeof(item) === "object" && typeof item.test === "function") {
    return function (ident) {
      return item.test(ident);
    };
  }
  if (typeof item === "function") {
    return item;
  }
  if (typeof item === "boolean") {
    return function () {
      return item;
    };
  }
};

/**
 * @enum {number}
 */
var LogLevel = {
  none: 6,
  false: 6,
  error: 5,
  warn: 4,
  info: 3,
  log: 2,
  true: 2,
  verbose: 1
};

/**
 * @param {LoggerOptions} options options object
 * @returns {LoggingFunction} logging function
 */
module.exports = function (_ref) {
  var _ref$level = _ref.level,
    level = _ref$level === void 0 ? "info" : _ref$level,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug,
    console = _ref.console;
  var debugFilters = /** @type {FilterFunction[]} */

  typeof debug === "boolean" ? [function () {
    return debug;
  }] : /** @type {FilterItemTypes[]} */_toConsumableArray(Array.isArray(debug) ? debug : [debug]).map(filterToFunction);
  var loglevel = LogLevel["".concat(level)] || 0;

  /**
   * @param {string} name name of the logger
   * @param {LogTypeEnum} type type of the log entry
   * @param {Args=} args arguments of the log entry
   * @returns {void}
   */
  var logger = function logger(name, type, args) {
    var labeledArgs = function labeledArgs() {
      if (Array.isArray(args)) {
        if (args.length > 0 && typeof args[0] === "string") {
          return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
        }
        return ["[".concat(name, "]")].concat(_toConsumableArray(args));
      }
      return [];
    };
    var debug = debugFilters.some(function (f) {
      return f(name);
    });
    switch (type) {
      case LogType.debug:
        if (!debug) return;
        if (typeof console.debug === "function") {
          console.debug.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.log:
        if (!debug && loglevel > LogLevel.log) return;
        console.log.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.info:
        if (!debug && loglevel > LogLevel.info) return;
        console.info.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.warn:
        if (!debug && loglevel > LogLevel.warn) return;
        console.warn.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.error:
        if (!debug && loglevel > LogLevel.error) return;
        console.error.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.trace:
        if (!debug) return;
        console.trace();
        break;
      case LogType.groupCollapsed:
        if (!debug && loglevel > LogLevel.log) return;
        if (!debug && loglevel > LogLevel.verbose) {
          if (typeof console.groupCollapsed === "function") {
            console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
          } else {
            console.log.apply(console, _toConsumableArray(labeledArgs()));
          }
          break;
        }
      // falls through
      case LogType.group:
        if (!debug && loglevel > LogLevel.log) return;
        if (typeof console.group === "function") {
          console.group.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.groupEnd:
        if (!debug && loglevel > LogLevel.log) return;
        if (typeof console.groupEnd === "function") {
          console.groupEnd();
        }
        break;
      case LogType.time:
        {
          if (!debug && loglevel > LogLevel.log) return;
          var _args = _slicedToArray(/** @type {[string, number, number]} */
            args, 3),
            label = _args[0],
            start = _args[1],
            end = _args[2];
          var ms = start * 1000 + end / 1000000;
          var msg = "[".concat(name, "] ").concat(label, ": ").concat(ms, " ms");
          if (typeof console.logTime === "function") {
            console.logTime(msg);
          } else {
            console.log(msg);
          }
          break;
        }
      case LogType.profile:
        if (typeof console.profile === "function") {
          console.profile.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.profileEnd:
        if (typeof console.profileEnd === "function") {
          console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.clear:
        if (!debug && loglevel > LogLevel.log) return;
        if (typeof console.clear === "function") {
          console.clear();
        }
        break;
      case LogType.status:
        if (!debug && loglevel > LogLevel.info) return;
        if (typeof console.status === "function") {
          if (!args || args.length === 0) {
            console.status();
          } else {
            console.status.apply(console, _toConsumableArray(labeledArgs()));
          }
        } else if (args && args.length !== 0) {
          console.info.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      default:
        throw new Error("Unexpected LogType ".concat(type));
    }
  };
  return logger;
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/runtime.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_23673__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var _require = __nested_webpack_require_23673__(/*! tapable */ "./client-src/modules/logger/tapable.js"),
  SyncBailHook = _require.SyncBailHook;
var _require2 = __nested_webpack_require_23673__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
  Logger = _require2.Logger;
var createConsoleLogger = __nested_webpack_require_23673__(/*! ./createConsoleLogger */ "./node_modules/webpack/lib/logging/createConsoleLogger.js");

/** @type {createConsoleLogger.LoggerOptions} */
var currentDefaultLoggerOptions = {
  level: "info",
  debug: false,
  console: console
};
var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);

/**
 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
 * @returns {void}
 */
module.exports.configureDefaultLogger = function (options) {
  _extends(currentDefaultLoggerOptions, options);
  currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
};

/**
 * @param {string} name name of the logger
 * @returns {Logger} a logger
 */
module.exports.getLogger = function (name) {
  return new Logger(function (type, args) {
    if (module.exports.hooks.log.call(name, type, args) === undefined) {
      currentDefaultLogger(name, type, args);
    }
  }, function (childName) {
    return module.exports.getLogger("".concat(name, "/").concat(childName));
  });
};
module.exports.hooks = {
  log: new SyncBailHook(["origin", "type", "args"])
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_25750__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_25750__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_25750__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_25750__.o(definition, key) && !__nested_webpack_require_25750__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_25750__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_25750__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./client-src/modules/logger/index.js ***!
  \********************************************/
__nested_webpack_require_25750__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_25750__.d(__nested_webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default export from named module */ webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_25750__(/*! webpack/lib/logging/runtime.js */ "./node_modules/webpack/lib/logging/runtime.js");
// @ts-expect-error

}();
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __nested_webpack_exports__) __webpack_export_target__[__webpack_i__] = __nested_webpack_exports__[__webpack_i__];
if(__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;

/***/ },

/***/ "./node_modules/webpack-dev-server/client/overlay.js"
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOverlay: () => (/* binding */ createOverlay),
/* harmony export */   formatProblem: () => (/* binding */ formatProblem)
/* harmony export */ });
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).



/** @typedef {import("./index").EXPECTED_ANY} EXPECTED_ANY */

/**
 * @type {(input: string, position: number) => number | undefined}
 */
// @ts-expect-error
var getCodePoint = String.prototype.codePointAt ?
// @ts-expect-error
function (input, position) {
  return input.codePointAt(position);
} : function (input, position) {
  return (input.charCodeAt(position) - 0xd800) * 0x400 + input.charCodeAt(position + 1) - 0xdc00 + 0x10000;
};

/**
 * @param {string} macroText macro text
 * @param {RegExp} macroRegExp macro reg exp
 * @param {(input: string) => string} macroReplacer macro replacer
 * @returns {string} result
 */
var replaceUsingRegExp = function replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {
  macroRegExp.lastIndex = 0;
  var replaceMatch = macroRegExp.exec(macroText);
  var replaceResult;
  if (replaceMatch) {
    replaceResult = "";
    var replaceLastIndex = 0;
    do {
      if (replaceLastIndex !== replaceMatch.index) {
        replaceResult += macroText.slice(replaceLastIndex, replaceMatch.index);
      }
      var replaceInput = replaceMatch[0];
      replaceResult += macroReplacer(replaceInput);
      replaceLastIndex = replaceMatch.index + replaceInput.length;
    } while (replaceMatch = macroRegExp.exec(macroText));
    if (replaceLastIndex !== macroText.length) {
      replaceResult += macroText.slice(replaceLastIndex);
    }
  } else {
    replaceResult = macroText;
  }
  return replaceResult;
};
var references = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
  "&": "&amp;"
};

/**
 * @param {string} text text
 * @returns {string} encoded text
 */
function encode(text) {
  if (!text) {
    return "";
  }
  return replaceUsingRegExp(text, /[<>'"&]/g, function (input) {
    var result = references[(/** @type {keyof typeof references} */input)];
    if (!result) {
      var code = input.length > 1 ? getCodePoint(input, 0) : input.charCodeAt(0);
      result = "&#".concat(code, ";");
    }
    return result;
  });
}

/**
 * @typedef {object} Context
 * @property {'warning' | 'error'} level level
 * @property {(string  | Message)[]} messages messages
 * @property {'build' | 'runtime'} messageSource message source
 */

/** @typedef {{ type: string } & Record<string, EXPECTED_ANY>} Event */

/**
 * @typedef {object} Options
 * @property {{ [state: string]: { on: Record<string, { target: string; actions?: Array<string> }> } }} states states
 * @property {Context} context context
 * @property {string} initial initial
 */

/**
 * @typedef {object} Implementation
 * @property {{ [actionName: string]: (ctx: Context, event: Event) => Context | void }} actions actions
 */

/**
 * @typedef {{ send: (event: Event) => void }} StateMachine
 */

/**
 * A simplified `createMachine` from `@xstate/fsm` with the following differences:
 * - the returned machine is technically a "service". No `interpret(machine).start()` is needed.
 * - the state definition only support `on` and target must be declared with { target: 'nextState', actions: [] } explicitly.
 * - event passed to `send` must be an object with `type` property.
 * - actions implementation will be [assign action](https://xstate.js.org/docs/guides/context.html#assign-action) if you return any value.
 * Do not return anything if you just want to invoke side effect.
 *
 * The goal of this custom function is to avoid installing the entire `'xstate/fsm'` package, while enabling modeling using
 * state machine. You can copy the first parameter into the editor at https://stately.ai/viz to visualize the state machine.
 * @param {Options} options options
 * @param {Implementation} implementation implementation
 * @returns {StateMachine} state machine
 */
function createMachine(_ref, _ref2) {
  var states = _ref.states,
    context = _ref.context,
    initial = _ref.initial;
  var actions = _ref2.actions;
  var currentState = initial;
  var currentContext = context;
  return {
    send: function send(event) {
      var currentStateOn = states[currentState].on;
      var transitionConfig = currentStateOn && currentStateOn[event.type];
      if (transitionConfig) {
        currentState = transitionConfig.target;
        if (transitionConfig.actions) {
          transitionConfig.actions.forEach(function (actName) {
            var actionImpl = actions[actName];
            var nextContextValue = actionImpl && actionImpl(currentContext, event);
            if (nextContextValue) {
              currentContext = _objectSpread(_objectSpread({}, currentContext), nextContextValue);
            }
          });
        }
      }
    }
  };
}

/**
 * @typedef {object} ShowOverlayData
 * @property {'warning' | 'error'} level level
 * @property {(string  | Message)[]} messages messages
 * @property {'build' | 'runtime'} messageSource message source
 */

/**
 * @typedef {object} CreateOverlayMachineOptions
 * @property {(data: ShowOverlayData) => void} showOverlay show overlay
 * @property {() => void} hideOverlay hide overlay
 */

/**
 * @param {CreateOverlayMachineOptions} options options
 * @returns {StateMachine} state machine
 */
var createOverlayMachine = function createOverlayMachine(options) {
  var hideOverlay = options.hideOverlay,
    showOverlay = options.showOverlay;
  return createMachine({
    initial: "hidden",
    context: {
      level: "error",
      messages: [],
      messageSource: "build"
    },
    states: {
      hidden: {
        on: {
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      },
      displayBuildError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["appendMessages", "showOverlay"]
          }
        }
      },
      displayRuntimeError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["appendMessages", "showOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      }
    }
  }, {
    actions: {
      dismissMessages: function dismissMessages() {
        return {
          messages: [],
          level: "error",
          messageSource: "build"
        };
      },
      appendMessages: function appendMessages(context, event) {
        return {
          messages: context.messages.concat(event.messages),
          level: event.level || context.level,
          messageSource: event.type === "RUNTIME_ERROR" ? "runtime" : "build"
        };
      },
      setMessages: function setMessages(context, event) {
        return {
          messages: event.messages,
          level: event.level || context.level,
          messageSource: event.type === "RUNTIME_ERROR" ? "runtime" : "build"
        };
      },
      hideOverlay: hideOverlay,
      showOverlay: showOverlay
    }
  });
};

/**
 * @param {Error} error error
 * @returns {undefined | string[]} stack
 */
var parseErrorToStacks = function parseErrorToStacks(error) {
  if (!error || !(error instanceof Error)) {
    throw new Error("parseErrorToStacks expects Error object");
  }
  if (typeof error.stack === "string") {
    return error.stack.split("\n").filter(function (stack) {
      return stack !== "Error: ".concat(error.message);
    });
  }
};

/**
 * @callback ErrorCallback
 * @param {ErrorEvent} error
 * @returns {void}
 */

/**
 * @param {ErrorCallback} callback callback
 * @returns {() => void} cleanup
 */
var listenToRuntimeError = function listenToRuntimeError(callback) {
  window.addEventListener("error", callback);
  return function cleanup() {
    window.removeEventListener("error", callback);
  };
};

/**
 * @callback UnhandledRejectionCallback
 * @param {PromiseRejectionEvent} rejectionEvent
 * @returns {void}
 */

/**
 * @param {UnhandledRejectionCallback} callback callback
 * @returns {() => void} cleanup
 */
var listenToUnhandledRejection = function listenToUnhandledRejection(callback) {
  window.addEventListener("unhandledrejection", callback);
  return function cleanup() {
    window.removeEventListener("unhandledrejection", callback);
  };
};

// Styles are inspired by `react-error-overlay`

var msgStyles = {
  error: {
    backgroundColor: "rgba(206, 17, 38, 0.1)",
    color: "#fccfcf"
  },
  warning: {
    backgroundColor: "rgba(251, 245, 180, 0.1)",
    color: "#fbf5b4"
  }
};
var iframeStyle = {
  position: "fixed",
  top: "0px",
  left: "0px",
  right: "0px",
  bottom: "0px",
  width: "100vw",
  height: "100vh",
  border: "none",
  "z-index": 9999999999
};
var containerStyle = {
  position: "fixed",
  boxSizing: "border-box",
  left: "0px",
  top: "0px",
  right: "0px",
  bottom: "0px",
  width: "100vw",
  height: "100vh",
  fontSize: "large",
  padding: "2rem 2rem 4rem 2rem",
  lineHeight: "1.2",
  whiteSpace: "pre-wrap",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  color: "white"
};
var headerStyle = {
  color: "#e83b46",
  fontSize: "2em",
  whiteSpace: "pre-wrap",
  fontFamily: "sans-serif",
  margin: "0 2rem 2rem 0",
  flex: "0 0 auto",
  maxHeight: "50%",
  overflow: "auto"
};
var dismissButtonStyle = {
  color: "#ffffff",
  lineHeight: "1rem",
  fontSize: "1.5rem",
  padding: "1rem",
  cursor: "pointer",
  position: "absolute",
  right: "0px",
  top: "0px",
  backgroundColor: "transparent",
  border: "none"
};
var msgTypeStyle = {
  color: "#e83b46",
  fontSize: "1.2em",
  marginBottom: "1rem",
  fontFamily: "sans-serif"
};
var msgTextStyle = {
  lineHeight: "1.5",
  fontSize: "1rem",
  fontFamily: "Menlo, Consolas, monospace"
};

// ANSI HTML

var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);

/** @typedef {Error & { file?: string, moduleName?: string, moduleIdentifier?: string, loc?: string, message?: string; stack?: string | string[] }} Message */

/**
 * @param {string} type type
 * @param {string | Message} item item
 * @returns {{ header: string, body: string }} formatted problem
 */
var formatProblem = function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";
  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || "";
    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }
  if (typeof item !== "string" && Array.isArray(item.stack)) {
    item.stack.forEach(function (stack) {
      if (typeof stack === "string") {
        body += "\r\n".concat(stack);
      }
    });
  }
  return {
    header: header,
    body: body
  };
};

/**
 * @typedef {object} CreateOverlayOptions
 * @property {(false | string)=} trustedTypesPolicyName trusted types policy name
 * @property {(boolean | ((error: Error) => void))=} catchRuntimeError runtime error catcher
 */

/**
 * @param {CreateOverlayOptions} options options
 * @returns {StateMachine} overlay
 */
var createOverlay = function createOverlay(options) {
  /** @type {HTMLIFrameElement | null | undefined} */
  var iframeContainerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var containerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var headerElement;
  /** @type {Array<(element: HTMLDivElement) => void>} */
  var onLoadQueue = [];
  /** @type {Omit<TrustedTypePolicy, "createScript" | "createScriptURL"> | undefined} */
  var overlayTrustedTypesPolicy;

  /** @typedef {Extract<keyof CSSStyleDeclaration, "string">} CSSStyleDeclarationKeys */

  /**
   * @param {HTMLElement} element element
   * @param {Partial<CSSStyleDeclaration>} style style
   */
  function applyStyle(element, style) {
    Object.keys(style).forEach(function (prop) {
      element.style[(/** @type {CSSStyleDeclarationKeys} */prop)] = /** @type {string} */
      style[(/** @type {CSSStyleDeclarationKeys} */prop)];
    });
  }

  /**
   * @param {string | false | undefined} trustedTypesPolicyName trusted types police name
   */
  function createContainer(trustedTypesPolicyName) {
    // Enable Trusted Types if they are available in the current browser.
    if (window.trustedTypes) {
      overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || "webpack-dev-server#overlay", {
        createHTML: function createHTML(value) {
          return value;
        }
      });
    }
    iframeContainerElement = document.createElement("iframe");
    iframeContainerElement.id = "webpack-dev-server-client-overlay";
    iframeContainerElement.src = "about:blank";
    applyStyle(iframeContainerElement, iframeStyle);
    iframeContainerElement.onload = function () {
      var contentElement = /** @type {Document} */
      (/** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument).createElement("div");
      containerElement = /** @type {Document} */
      (/** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument).createElement("div");
      contentElement.id = "webpack-dev-server-client-overlay-div";
      applyStyle(contentElement, containerStyle);
      headerElement = document.createElement("div");
      headerElement.innerText = "Compiled with problems:";
      applyStyle(headerElement, headerStyle);
      var closeButtonElement = document.createElement("button");
      applyStyle(closeButtonElement, dismissButtonStyle);
      closeButtonElement.innerText = "×";
      closeButtonElement.ariaLabel = "Dismiss";
      closeButtonElement.addEventListener("click", function () {
        // eslint-disable-next-line no-use-before-define
        overlayService.send({
          type: "DISMISS"
        });
      });
      contentElement.appendChild(headerElement);
      contentElement.appendChild(closeButtonElement);
      contentElement.appendChild(containerElement);

      /** @type {Document} */
      (/** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument).body.appendChild(contentElement);
      onLoadQueue.forEach(function (onLoad) {
        onLoad(/** @type {HTMLDivElement} */contentElement);
      });
      onLoadQueue = [];

      /** @type {HTMLIFrameElement} */
      iframeContainerElement.onload = null;
    };
    document.body.appendChild(iframeContainerElement);
  }

  /**
   * @param {(element: HTMLDivElement) => void} callback callback
   * @param {string | false | undefined} trustedTypesPolicyName trusted types policy name
   */
  function ensureOverlayExists(callback, trustedTypesPolicyName) {
    if (containerElement) {
      // @ts-expect-error https://github.com/microsoft/TypeScript/issues/30024
      containerElement.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML("") : "";
      // Everything is ready, call the callback right away.
      callback(containerElement);
      return;
    }
    onLoadQueue.push(callback);
    if (iframeContainerElement) {
      return;
    }
    createContainer(trustedTypesPolicyName);
  }

  // Successful compilation.
  /**
   * @returns {void}
   */
  function hide() {
    if (!iframeContainerElement) {
      return;
    }

    // Clean up and reset internal state.
    document.body.removeChild(iframeContainerElement);
    iframeContainerElement = null;
    containerElement = null;
  }

  // Compilation with errors (e.g. syntax error or missing modules).
  /**
   * @param {string} type type
   * @param {(string | Message)[]} messages messages
   * @param {undefined | false | string} trustedTypesPolicyName trusted types policy name
   * @param {'build' | 'runtime'} messageSource message source
   */
  function show(type, messages, trustedTypesPolicyName, messageSource) {
    ensureOverlayExists(function () {
      /** @type {HTMLDivElement} */
      headerElement.innerText = messageSource === "runtime" ? "Uncaught runtime errors:" : "Compiled with problems:";
      messages.forEach(function (message) {
        var entryElement = document.createElement("div");
        var msgStyle = type === "warning" ? msgStyles.warning : msgStyles.error;
        applyStyle(entryElement, _objectSpread(_objectSpread({}, msgStyle), {}, {
          padding: "1rem 1rem 1.5rem 1rem"
        }));
        var typeElement = document.createElement("div");
        var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;
        typeElement.innerText = header;
        applyStyle(typeElement, msgTypeStyle);
        if (typeof message !== "string" && message.moduleIdentifier) {
          applyStyle(typeElement, {
            cursor: "pointer"
          });
          // element.dataset not supported in IE
          typeElement.setAttribute("data-can-open", "true");
          typeElement.addEventListener("click", function () {
            fetch("/webpack-dev-server/open-editor?fileName=".concat(message.moduleIdentifier));
          });
        }

        // Make it look similar to our terminal.
        var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()(encode(body));
        var messageTextNode = document.createElement("div");
        applyStyle(messageTextNode, msgTextStyle);

        // @ts-expect-error https://github.com/microsoft/TypeScript/issues/30024
        messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;
        entryElement.appendChild(typeElement);
        entryElement.appendChild(messageTextNode);

        /** @type {HTMLDivElement} */
        containerElement.appendChild(entryElement);
      });
    }, trustedTypesPolicyName);
  }

  /** @type {(event: KeyboardEvent) => void} */
  var handleEscapeKey;

  /**
   * @returns {void}
   */

  var hideOverlayWithEscCleanup = function hideOverlayWithEscCleanup() {
    window.removeEventListener("keydown", handleEscapeKey);
    hide();
  };
  var overlayService = createOverlayMachine({
    showOverlay: function showOverlay(_ref3) {
      var _ref3$level = _ref3.level,
        level = _ref3$level === void 0 ? "error" : _ref3$level,
        messages = _ref3.messages,
        messageSource = _ref3.messageSource;
      return show(level, messages, options.trustedTypesPolicyName, messageSource);
    },
    hideOverlay: hideOverlayWithEscCleanup
  });
  /**
   * ESC key press to dismiss the overlay.
   * @param {KeyboardEvent} event Keydown event
   */
  handleEscapeKey = function handleEscapeKey(event) {
    if (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27) {
      overlayService.send({
        type: "DISMISS"
      });
    }
  };
  window.addEventListener("keydown", handleEscapeKey);
  if (options.catchRuntimeError) {
    /**
     * @param {Error | undefined} error error
     * @param {string} fallbackMessage fallback message
     */
    var handleError = function handleError(error, fallbackMessage) {
      var errorObject = error instanceof Error ? error : new Error(error || fallbackMessage, {
        cause: error
      });
      var shouldDisplay = typeof options.catchRuntimeError === "function" ? options.catchRuntimeError(errorObject) : true;
      if (shouldDisplay) {
        overlayService.send({
          type: "RUNTIME_ERROR",
          messages: [{
            message: errorObject.message,
            stack: parseErrorToStacks(errorObject)
          }]
        });
      }
    };
    listenToRuntimeError(function (errorEvent) {
      // error property may be empty in older browser like IE
      var error = errorEvent.error,
        message = errorEvent.message;
      if (!error && !message) {
        return;
      }

      // if error stack indicates a React error boundary caught the error, do not show overlay.
      if (error && error.stack && error.stack.includes("invokeGuardedCallbackDev")) {
        return;
      }
      handleError(error, message);
    });
    listenToUnhandledRejection(function (promiseRejectionEvent) {
      var reason = promiseRejectionEvent.reason;
      handleError(reason, "Unknown promise rejection reason");
    });
  }
  return overlayService;
};


/***/ },

/***/ "./node_modules/webpack-dev-server/client/progress.js"
/*!************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/progress.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineProgressElement: () => (/* binding */ defineProgressElement),
/* harmony export */   isProgressSupported: () => (/* binding */ isProgressSupported)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/**
 * @returns {boolean} true when custom elements supported, otherwise false
 */
function isProgressSupported() {
  return "customElements" in self && Boolean(HTMLElement.prototype.attachShadow);
}

/**
 * @returns {void}
 */
function defineProgressElement() {
  var _WebpackDevServerProgress;
  if (customElements.get("wds-progress")) {
    return;
  }
  var _WebpackDevServerProgress_brand = /*#__PURE__*/new WeakSet();
  var WebpackDevServerProgress = /*#__PURE__*/function (_HTMLElement) {
    function WebpackDevServerProgress() {
      var _this;
      _classCallCheck(this, WebpackDevServerProgress);
      _this = _callSuper(this, WebpackDevServerProgress);
      _classPrivateMethodInitSpec(_this, _WebpackDevServerProgress_brand);
      _this.attachShadow({
        mode: "open"
      });
      _this.maxDashOffset = -219.99078369140625;
      _this.animationTimer = null;
      return _this;
    }
    _inherits(WebpackDevServerProgress, _HTMLElement);
    return _createClass(WebpackDevServerProgress, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);
      }
    }, {
      key: "attributeChangedCallback",
      value:
      /**
       * @param {string} name name
       * @param {string} oldValue old value
       * @param {string} newValue new value
       */
      function attributeChangedCallback(name, oldValue, newValue) {
        if (name === "progress") {
          _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, Number(newValue));
        } else if (name === "type") {
          _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);
        }
      }

      /**
       * @param {number} percent percent
       */
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["progress", "type"];
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
  _WebpackDevServerProgress = WebpackDevServerProgress;
  function _reset() {
    var _this$getAttribute;
    clearTimeout(this.animationTimer);
    this.animationTimer = null;
    var typeAttr = (_this$getAttribute = this.getAttribute("type")) === null || _this$getAttribute === void 0 ? void 0 : _this$getAttribute.toLowerCase();
    this.type = typeAttr === "circular" ? "circular" : "linear";
    var innerHTML = this.type === "circular" ? _circularTemplate.call(_WebpackDevServerProgress) : _linearTemplate.call(_WebpackDevServerProgress);
    /** @type {ShadowRoot} */
    this.shadowRoot.innerHTML = innerHTML;
    var progressValue = this.getAttribute("progress");
    this.initialProgress = progressValue ? Number(progressValue) : 0;
    _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, this.initialProgress);
  }
  function _circularTemplate() {
    return "\n        <style>\n        :host {\n            width: 200px;\n            height: 200px;\n            position: fixed;\n            right: 5%;\n            top: 5%;\n            pointer-events: none;\n            transition: opacity .25s ease-in-out;\n            z-index: 2147483645;\n        }\n\n        circle {\n            fill: #282d35;\n        }\n\n        path {\n            fill: rgba(0, 0, 0, 0);\n            stroke: rgb(186, 223, 172);\n            stroke-dasharray: 219.99078369140625;\n            stroke-dashoffset: -219.99078369140625;\n            stroke-width: 10;\n            transform: rotate(90deg) translate(0px, -80px);\n        }\n\n        text {\n            font-family: 'Open Sans', sans-serif;\n            font-size: 18px;\n            fill: #ffffff;\n            dominant-baseline: middle;\n            text-anchor: middle;\n        }\n\n        tspan#percent-super {\n            fill: #bdc3c7;\n            font-size: 0.45em;\n            baseline-shift: 10%;\n        }\n\n        @keyframes fade {\n            0% { opacity: 1; transform: scale(1); }\n            100% { opacity: 0; transform: scale(0); }\n        }\n\n        .disappear {\n            animation: fade 0.3s;\n            animation-fill-mode: forwards;\n            animation-delay: 0.5s;\n        }\n\n        .hidden {\n            display: none;\n        }\n        </style>\n        <svg id=\"progress\" class=\"hidden noselect\" viewBox=\"0 0 80 80\">\n        <circle cx=\"50%\" cy=\"50%\" r=\"35\"></circle>\n        <path d=\"M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0\"></path>\n        <text x=\"50%\" y=\"51%\">\n            <tspan id=\"percent-value\">0</tspan>\n            <tspan id=\"percent-super\">%</tspan>\n        </text>\n        </svg>\n      ";
  }
  function _linearTemplate() {
    return "\n        <style>\n        :host {\n            position: fixed;\n            top: 0;\n            left: 0;\n            pointer-events: none;\n            height: 4px;\n            width: 100vw;\n            z-index: 2147483645;\n        }\n\n        #bar {\n            width: 0%;\n            height: 4px;\n            background-color: rgb(186, 223, 172);\n        }\n\n        @keyframes fade {\n            0% { opacity: 1; }\n            100% { opacity: 0; }\n        }\n\n        .disappear {\n            animation: fade 0.3s;\n            animation-fill-mode: forwards;\n            animation-delay: 0.5s;\n        }\n\n        .hidden {\n            display: none;\n        }\n        </style>\n        <div id=\"progress\"></div>\n        ";
  }
  function _update(percent) {
    var shadowRoot = /** @type {ShadowRoot} */this.shadowRoot;
    var element = /** @type {HTMLElement} */
    shadowRoot.querySelector("#progress");
    if (this.type === "circular") {
      var path = /** @type {SVGPathElement} */
      shadowRoot.querySelector("path");
      var value = /** @type {HTMLElement} */
      shadowRoot.querySelector("#percent-value");
      var offset = (100 - percent) / 100 * this.maxDashOffset;
      path.style.strokeDashoffset = String(offset);
      value.textContent = String(percent);
    } else {
      element.style.width = "".concat(percent, "%");
    }
    if (percent >= 100) {
      _assertClassBrand(_WebpackDevServerProgress_brand, this, _hide).call(this);
    } else if (percent > 0) {
      _assertClassBrand(_WebpackDevServerProgress_brand, this, _show).call(this);
    }
  }
  function _show() {
    var shadowRoot = /** @type {ShadowRoot} */this.shadowRoot;
    var element = /** @type {HTMLElement} */
    shadowRoot.querySelector("#progress");
    element.classList.remove("hidden");
  }
  function _hide() {
    var _this2 = this;
    var shadowRoot = /** @type {ShadowRoot} */this.shadowRoot;
    var element = /** @type {HTMLElement} */
    shadowRoot.querySelector("#progress");
    if (this.type === "circular") {
      element.classList.add("disappear");
      element.addEventListener("animationend", function () {
        element.classList.add("hidden");
        _assertClassBrand(_WebpackDevServerProgress_brand, _this2, _update).call(_this2, 0);
      }, {
        once: true
      });
    } else if (this.type === "linear") {
      element.classList.add("disappear");
      this.animationTimer = setTimeout(function () {
        element.classList.remove("disappear");
        element.classList.add("hidden");
        element.style.width = "0%";
        _this2.animationTimer = null;
      }, 800);
    }
  }
  customElements.define("wds-progress", WebpackDevServerProgress);
}

/***/ },

/***/ "./node_modules/webpack-dev-server/client/socket.js"
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   client: () => (/* binding */ client),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* global __webpack_dev_server_client__ */




/** @typedef {import("./index.js").EXPECTED_ANY} EXPECTED_ANY */
/** @typedef {import("./clients/SockJSClient")} SockJSClient */

// this WebsocketClient is here as a default fallback, in case the client is not injected
/** @type {CommunicationClientConstructor} */
var Client = typeof __webpack_dev_server_client__ !== "undefined" ? typeof (/** @type {{ default: CommunicationClientConstructor }} */
__webpack_dev_server_client__.default) !== "undefined" ? /** @type {{ default: CommunicationClientConstructor }} */
__webpack_dev_server_client__.default : (/** @type {CommunicationClientConstructor} */
__webpack_dev_server_client__) : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
var retries = 0;
var maxRetries = 10;

// Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
/** @type {CommunicationClient | null} */
// eslint-disable-next-line import/no-mutable-exports
var client = null;

/** @type {ReturnType<typeof setTimeout> | undefined} */
var timeout;

/**
 * @param {string} url url
 * @param {{ [handler: string]: (data?: EXPECTED_ANY, params?: EXPECTED_ANY) => EXPECTED_ANY }} handlers handlers
 * @param {number=} reconnect count of reconnections
 */
function socket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;
    if (timeout) {
      clearTimeout(timeout);
    }
    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    }

    // Try to reconnect.
    client = null;

    // After 10 retries stop trying, to prevent logspam.
    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
      timeout = setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {EXPECTED_ANY} data data
   */
  function (data) {
    var message = JSON.parse(data);
    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);

/***/ },

/***/ "./node_modules/webpack-dev-server/client/utils/log.js"
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log),
/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js");
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);

var name = "webpack-dev-server";
// default level is set on the client side, so it does not need
// to be set by the CLI or API
var defaultLevel = "info";

// options new options, merge with old options
/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level level
 * @returns {void}
 */
function setLogLevel(level) {
  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
    level: level
  });
}
setLogLevel(defaultLevel);
var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);


/***/ },

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js"
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global WorkerGlobalScope */

/** @typedef {import("../index").EXPECTED_ANY} EXPECTED_ANY */

// Send messages to the outside, so plugins can consume it.
/**
 * @param {string} type type
 * @param {EXPECTED_ANY=} data data
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);

/***/ },

/***/ "./node_modules/webpack/hot/dev-server.js"
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
	/** @type {undefined|string} */
	var lastHash;
	var upToDate = function upToDate() {
		return /** @type {string} */ (lastHash).indexOf(__webpack_require__.h()) >= 0;
	};
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
	var check = function check() {
		module.hot
			.check(true)
			.then(function (updatedModules) {
				if (!updatedModules) {
					log(
						"warning",
						"[HMR] Cannot find update. " +
							(typeof window !== "undefined"
								? "Need to do a full reload!"
								: "Please reload manually!")
					);
					log(
						"warning",
						"[HMR] (Probably because of restarting the webpack-dev-server)"
					);
					if (typeof window !== "undefined") {
						window.location.reload();
					}
					return;
				}

				if (!upToDate()) {
					check();
				}

				__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);

				if (upToDate()) {
					log("info", "[HMR] App is up to date.");
				}
			})
			.catch(function (err) {
				var status = module.hot.status();
				if (["abort", "fail"].indexOf(status) >= 0) {
					log(
						"warning",
						"[HMR] Cannot apply update. " +
							(typeof window !== "undefined"
								? "Need to do a full reload!"
								: "Please reload manually!")
					);
					log("warning", "[HMR] " + log.formatError(err));
					if (typeof window !== "undefined") {
						window.location.reload();
					}
				} else {
					log("warning", "[HMR] Update failed: " + log.formatError(err));
				}
			});
	};
	/** @type {EventTarget | NodeJS.EventEmitter} */
	var hotEmitter = __webpack_require__(/*! ./emitter */ "./node_modules/webpack/hot/emitter.js");
	/**
	 * @param {CustomEvent<{ currentHash: string }>} event event or hash
	 */
	var handler = function (event) {
		lastHash = typeof event === "string" ? event : event.detail.currentHash;
		if (!upToDate() && module.hot.status() === "idle") {
			log("info", "[HMR] Checking for updates on the server...");
			check();
		}
	};

	if (typeof EventTarget !== "undefined" && hotEmitter instanceof EventTarget) {
		hotEmitter.addEventListener(
			"webpackHotUpdate",
			/** @type {EventListener} */
			(handler)
		);
	} else {
		hotEmitter.on("webpackHotUpdate", handler);
	}

	log("info", "[HMR] Waiting for update signal from WDS...");
} else // removed by dead control flow
{}


/***/ },

/***/ "./node_modules/webpack/hot/emitter.js"
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
module.exports = new EventEmitter();


/***/ },

/***/ "./node_modules/webpack/hot/log-apply-result.js"
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ },

/***/ "./node_modules/webpack/hot/log.js"
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
(module) {

/** @typedef {"info" | "warning" | "error"} LogLevel */

/** @type {LogLevel} */
var logLevel = "info";

function dummy() {}

/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */
function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */
function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */
module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/**
 * @param {Error} err error
 * @returns {string} formatted error
 */
module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	}
	return stack;
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

/**
 * @param {LogLevel} level log level
 */
module.exports.setLogLevel = function (level) {
	logLevel = level;
};


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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("8fbe53a85791cedf")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "@openmrs/esm-primary-navigation-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "@openmrs/esm-primary-navigation-app";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("@carbon/react", "1.99.0", () => (Promise.all([__webpack_require__.e("vendors-node_modules_carbon_icons-react_es_generated_bucket-12_js-node_modules_carbon_icons-r-7126a0"), __webpack_require__.e("vendors-node_modules_carbon_icons-react_es_generated_bucket-10_js"), __webpack_require__.e("vendors-node_modules_carbon_icons-react_es_Icon_js-node_modules_carbon_icons-react_es_iconPro-7d57e4"), __webpack_require__.e("vendors-node_modules_carbon_react_es_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@carbon/react/es/index.js */ "./node_modules/@carbon/react/es/index.js"))))));
/******/ 					register("@openmrs/esm-framework", "8.0.1-pre.3705", () => (Promise.all([__webpack_require__.e("vendors-node_modules_carbon_icons-react_es_generated_bucket-12_js-node_modules_carbon_icons-r-7126a0"), __webpack_require__.e("vendors-node_modules_use-sync-external-store_shim_index_js-node_modules_i18next_dist_esm_i18next_js"), __webpack_require__.e("vendors-node_modules_carbon_icons-react_es_Icon_js-node_modules_carbon_icons-react_es_iconPro-7d57e4"), __webpack_require__.e("vendors-node_modules_openmrs_esm-framework_src_internal_ts"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_react-dom_react-dom"), __webpack_require__.e("webpack_sharing_consume_default_rxjs_rxjs-webpack_sharing_consume_default_single-spa_single-spa"), __webpack_require__.e("node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssWithMappi-b4c6cd")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@openmrs/esm-framework/src/internal.ts */ "./node_modules/@openmrs/esm-framework/src/internal.ts"))))));
/******/ 					register("react-dom", "18.3.1", () => (Promise.all([__webpack_require__.e("vendors-node_modules_react-dom_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => (() => (__webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js"))))));
/******/ 					register("react-i18next", "16.5.3", () => (Promise.all([__webpack_require__.e("vendors-node_modules_use-sync-external-store_shim_index_js-node_modules_i18next_dist_esm_i18next_js"), __webpack_require__.e("vendors-node_modules_react-i18next_dist_es_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => (() => (__webpack_require__(/*! ./node_modules/react-i18next/dist/es/index.js */ "./node_modules/react-i18next/dist/es/index.js"))))));
/******/ 					register("react-router-dom", "6.30.3", () => (Promise.all([__webpack_require__.e("vendors-node_modules_react-router-dom_dist_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(() => (() => (__webpack_require__(/*! ./node_modules/react-router-dom/dist/index.js */ "./node_modules/react-router-dom/dist/index.js"))))));
/******/ 					register("react", "18.3.1", () => (__webpack_require__.e("vendors-node_modules_react_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js"))))));
/******/ 					register("rxjs", "6.6.7", () => (__webpack_require__.e("vendors-node_modules_rxjs__esm5_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/rxjs/_esm5/index.js */ "./node_modules/rxjs/_esm5/index.js"))))));
/******/ 					register("single-spa", "6.0.3", () => (__webpack_require__.e("vendors-node_modules_single-spa_lib_es2015_esm_single-spa_dev_js").then(() => (() => (__webpack_require__(/*! ./node_modules/single-spa/lib/es2015/esm/single-spa.dev.js */ "./node_modules/single-spa/lib/es2015/esm/single-spa.dev.js"))))));
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules,
/******/ 									update.css
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 		
/******/ 			var onAccepted = function () {
/******/ 				return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 					// handle errors in accept handlers and self accepted module load
/******/ 					if (error) {
/******/ 						return setStatus("fail").then(function () {
/******/ 							throw error;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					if (queuedInvalidatedModules) {
/******/ 						return internalApply(options).then(function (list) {
/******/ 							outdatedModules.forEach(function (moduleId) {
/******/ 								if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 							});
/******/ 							return list;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					return setStatus("idle").then(function () {
/******/ 						return outdatedModules;
/******/ 					});
/******/ 				});
/******/ 			};
/******/ 		
/******/ 			return Promise.all(
/******/ 				results
/******/ 					.filter(function (result) {
/******/ 						return result.apply;
/******/ 					})
/******/ 					.map(function (result) {
/******/ 						return result.apply(reportError);
/******/ 					})
/******/ 			)
/******/ 				.then(function (applyResults) {
/******/ 					applyResults.forEach(function (modules) {
/******/ 						if (modules) {
/******/ 							for (var i = 0; i < modules.length; i++) {
/******/ 								outdatedModules.push(modules[i]);
/******/ 							}
/******/ 						}
/******/ 					});
/******/ 				})
/******/ 				.then(onAccepted);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (globalThis.importScripts) scriptUrl = globalThis.location + "";
/******/ 		var document = globalThis.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var parseVersion = (str) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=p=>{return p.split(".").map(p=>{return+p==p?+p:p})},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = (a, b) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = (range) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = (range, version) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var exists = (scope, key) => {
/******/ 			return scope && __webpack_require__.o(scope, key);
/******/ 		}
/******/ 		var get = (entry) => {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var eagerOnly = (versions) => {
/******/ 			return Object.keys(versions).reduce((filtered, version) => {
/******/ 					if (versions[version].eager) {
/******/ 						filtered[version] = versions[version];
/******/ 					}
/******/ 					return filtered;
/******/ 			}, {});
/******/ 		};
/******/ 		var findLatestVersion = (scope, key, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key];
/******/ 		};
/******/ 		var findSatisfyingVersion = (scope, key, requiredVersion, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = (scope, key, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			return Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion, eager) => {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ")" + (eager ? " for eager consumption" : "") + " of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map((key) => {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var fail = (msg) => {
/******/ 			throw new Error(msg);
/******/ 		}
/******/ 		var failAsNotExist = (scopeName, key) => {
/******/ 			return fail("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 		}
/******/ 		var warn = /*#__PURE__*/ (msg) => {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var init = (fn) => (function(scopeName, key, eager, c, d) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then && !eager) {
/******/ 				return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], key, false, c, d));
/******/ 			}
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], key, eager, c, d);
/******/ 		});
/******/ 		
/******/ 		var useFallback = (scopeName, key, fallback) => {
/******/ 			return fallback ? fallback() : failAsNotExist(scopeName, key);
/******/ 		}
/******/ 		var load = /*#__PURE__*/ init((scopeName, scope, key, eager, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			return get(findLatestVersion(scope, key, eager));
/******/ 		});
/******/ 		var loadVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var satisfyingVersion = findSatisfyingVersion(scope, key, requiredVersion, eager);
/******/ 			if (satisfyingVersion) return get(satisfyingVersion);
/******/ 			warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion, eager))
/******/ 			return get(findLatestVersion(scope, key, eager));
/******/ 		});
/******/ 		var loadStrictVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var satisfyingVersion = findSatisfyingVersion(scope, key, requiredVersion, eager);
/******/ 			if (satisfyingVersion) return get(satisfyingVersion);
/******/ 			if (fallback) return fallback();
/******/ 			fail(getInvalidVersionMessage(scope, scopeName, key, requiredVersion, eager));
/******/ 		});
/******/ 		var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key, eager, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var loadSingletonVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			if (!satisfy(requiredVersion, version)) {
/******/ 				warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			}
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var loadStrictSingletonVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			if (!satisfy(requiredVersion, version)) {
/******/ 				fail(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			}
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework": () => (loadSingletonVersion("default", "@openmrs/esm-framework", false, [0], () => (Promise.all([__webpack_require__.e("vendors-node_modules_carbon_icons-react_es_generated_bucket-12_js-node_modules_carbon_icons-r-7126a0"), __webpack_require__.e("vendors-node_modules_use-sync-external-store_shim_index_js-node_modules_i18next_dist_esm_i18next_js"), __webpack_require__.e("vendors-node_modules_openmrs_esm-framework_src_internal_ts"), __webpack_require__.e("webpack_sharing_consume_default_rxjs_rxjs-webpack_sharing_consume_default_single-spa_single-spa")]).then(() => (() => (__webpack_require__(/*! @openmrs/esm-framework */ "./node_modules/@openmrs/esm-framework/src/internal.ts"))))))),
/******/ 			"webpack/sharing/consume/default/react/react": () => (loadSingletonVersion("default", "react", false, [1,18,3,1], () => (__webpack_require__.e("vendors-node_modules_react_index_js").then(() => (() => (__webpack_require__(/*! react */ "./node_modules/react/index.js"))))))),
/******/ 			"webpack/sharing/consume/default/react-router-dom/react-router-dom": () => (loadSingletonVersion("default", "react-router-dom", false, [1,6], () => (__webpack_require__.e("vendors-node_modules_react-router-dom_dist_index_js").then(() => (() => (__webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js"))))))),
/******/ 			"webpack/sharing/consume/default/@carbon/react/@carbon/react": () => (loadSingletonVersion("default", "@carbon/react", false, [1,1], () => (Promise.all([__webpack_require__.e("vendors-node_modules_carbon_icons-react_es_generated_bucket-12_js-node_modules_carbon_icons-r-7126a0"), __webpack_require__.e("vendors-node_modules_carbon_icons-react_es_generated_bucket-10_js"), __webpack_require__.e("vendors-node_modules_carbon_react_es_index_js")]).then(() => (() => (__webpack_require__(/*! @carbon/react */ "./node_modules/@carbon/react/es/index.js"))))))),
/******/ 			"webpack/sharing/consume/default/react-i18next/react-i18next": () => (loadSingletonVersion("default", "react-i18next", false, [1,16], () => (Promise.all([__webpack_require__.e("vendors-node_modules_use-sync-external-store_shim_index_js-node_modules_i18next_dist_esm_i18next_js"), __webpack_require__.e("vendors-node_modules_react-i18next_dist_es_index_js")]).then(() => (() => (__webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js"))))))),
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom": () => (loadSingletonVersion("default", "react-dom", false, [1,18,3,1], () => (__webpack_require__.e("vendors-node_modules_react-dom_index_js").then(() => (() => (__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"))))))),
/******/ 			"webpack/sharing/consume/default/@openmrs/esm-framework/src/internal/@openmrs/esm-framework/src/internal": () => (loadSingleton("default", "@openmrs/esm-framework/src/internal", false, () => (Promise.all([__webpack_require__.e("vendors-node_modules_carbon_icons-react_es_generated_bucket-12_js-node_modules_carbon_icons-r-7126a0"), __webpack_require__.e("vendors-node_modules_use-sync-external-store_shim_index_js-node_modules_i18next_dist_esm_i18next_js"), __webpack_require__.e("vendors-node_modules_openmrs_esm-framework_src_internal_ts"), __webpack_require__.e("webpack_sharing_consume_default_rxjs_rxjs-webpack_sharing_consume_default_single-spa_single-spa")]).then(() => (() => (__webpack_require__(/*! @openmrs/esm-framework/src/internal */ "./node_modules/@openmrs/esm-framework/src/internal.ts"))))))),
/******/ 			"webpack/sharing/consume/default/rxjs/rxjs": () => (loadSingletonVersion("default", "rxjs", false, [1,6], () => (__webpack_require__.e("vendors-node_modules_rxjs__esm5_index_js").then(() => (() => (__webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js"))))))),
/******/ 			"webpack/sharing/consume/default/single-spa/single-spa": () => (loadSingletonVersion("default", "single-spa", false, [1,6], () => (__webpack_require__.e("vendors-node_modules_single-spa_lib_es2015_esm_single-spa_dev_js").then(() => (() => (__webpack_require__(/*! single-spa */ "./node_modules/single-spa/lib/es2015/esm/single-spa.dev.js")))))))
/******/ 		};
/******/ 		var initialConsumes = ["webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework","webpack/sharing/consume/default/react/react","webpack/sharing/consume/default/react-router-dom/react-router-dom","webpack/sharing/consume/default/@carbon/react/@carbon/react","webpack/sharing/consume/default/react-i18next/react-i18next","webpack/sharing/consume/default/react-dom/react-dom","webpack/sharing/consume/default/@openmrs/esm-framework/src/internal/@openmrs/esm-framework/src/internal"];
/******/ 		initialConsumes.forEach((id) => {
/******/ 			__webpack_require__.m[id] = (module) => {
/******/ 				// Handle case when module is used sync
/******/ 				installedModules[id] = 0;
/******/ 				delete __webpack_require__.c[id];
/******/ 				var factory = moduleToHandlerMapping[id]();
/******/ 				if(typeof factory !== "function") throw new Error("Shared module is not available for eager consumption: " + id);
/******/ 				module.exports = factory();
/******/ 			}
/******/ 		});
/******/ 		var chunkMapping = {
/******/ 			"main": [
/******/ 				"webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework",
/******/ 				"webpack/sharing/consume/default/react/react",
/******/ 				"webpack/sharing/consume/default/react-router-dom/react-router-dom",
/******/ 				"webpack/sharing/consume/default/@carbon/react/@carbon/react",
/******/ 				"webpack/sharing/consume/default/react-i18next/react-i18next",
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom",
/******/ 				"webpack/sharing/consume/default/@openmrs/esm-framework/src/internal/@openmrs/esm-framework/src/internal"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_rxjs_rxjs-webpack_sharing_consume_default_single-spa_single-spa": [
/******/ 				"webpack/sharing/consume/default/rxjs/rxjs",
/******/ 				"webpack/sharing/consume/default/single-spa/single-spa"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_react_react": [
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_react-dom_react-dom": [
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 			],
/******/ 			"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssWithMappi-b4c6cd": [
/******/ 				"webpack/sharing/consume/default/react-i18next/react-i18next",
/******/ 				"webpack/sharing/consume/default/react-router-dom/react-router-dom",
/******/ 				"webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework",
/******/ 				"webpack/sharing/consume/default/@carbon/react/@carbon/react"
/******/ 			]
/******/ 		};
/******/ 		var startedInstallModules = {};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					if(!startedInstallModules[id]) {
/******/ 					var onFactory = (factory) => {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					startedInstallModules[id] = true;
/******/ 					var onError = (error) => {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^webpack_sharing_consume_default_r(eact(\-dom_react\-dom|_react)|xjs_rxjs\-webpack_sharing_consume_default_single\-spa_single\-spa)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		globalThis["webpackHotUpdate_openmrs_esm_primary_navigation_app"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					var acceptPromises = [];
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									var result;
/******/ 									try {
/******/ 										result = callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 									if (result && typeof result.then === "function") {
/******/ 										acceptPromises.push(result);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					var onAccepted = function () {
/******/ 						// Load self accepted modules
/******/ 						for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 							var item = outdatedSelfAcceptedModules[o];
/******/ 							var moduleId = item.module;
/******/ 							try {
/******/ 								item.require(moduleId);
/******/ 							} catch (err) {
/******/ 								if (typeof item.errorHandler === "function") {
/******/ 									try {
/******/ 										item.errorHandler(err, {
/******/ 											moduleId: moduleId,
/******/ 											module: __webpack_require__.c[moduleId]
/******/ 										});
/******/ 									} catch (err1) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "self-accept-error-handler-errored",
/******/ 												moduleId: moduleId,
/******/ 												error: err1,
/******/ 												originalError: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err1);
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								} else {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					};
/******/ 		
/******/ 					return Promise.all(acceptPromises)
/******/ 						.then(onAccepted)
/******/ 						.then(function () {
/******/ 							return outdatedModules;
/******/ 						});
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_openmrs_esm_primary_navigation_app"] = globalThis["webpackChunk_openmrs_esm_primary_navigation_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8081&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map