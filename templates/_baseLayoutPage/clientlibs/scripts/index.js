/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./es6/_constants.es.js":
/*!******************************!*\
  !*** ./es6/_constants.es.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__ActiveClass": function() { return /* binding */ __ActiveClass; },
/* harmony export */   "__HeaderBreakpoint": function() { return /* binding */ __HeaderBreakpoint; },
/* harmony export */   "__LandscapeCSSClass": function() { return /* binding */ __LandscapeCSSClass; },
/* harmony export */   "__PortraitCSSClass": function() { return /* binding */ __PortraitCSSClass; },
/* harmony export */   "__DefaultCarouselOptions": function() { return /* binding */ __DefaultCarouselOptions; },
/* harmony export */   "__GetElementDimensions": function() { return /* binding */ __GetElementDimensions; },
/* harmony export */   "__StringTrim": function() { return /* binding */ __StringTrim; },
/* harmony export */   "__ArrayCall": function() { return /* binding */ __ArrayCall; },
/* harmony export */   "__HasClass": function() { return /* binding */ __HasClass; },
/* harmony export */   "__AddClass": function() { return /* binding */ __AddClass; },
/* harmony export */   "__RemoveClass": function() { return /* binding */ __RemoveClass; },
/* harmony export */   "__SlideUp": function() { return /* binding */ __SlideUp; },
/* harmony export */   "__SlideDown": function() { return /* binding */ __SlideDown; },
/* harmony export */   "__SlideToggle": function() { return /* binding */ __SlideToggle; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8__);










function cov_2r4nz6gagn() {
  var path = "C:\\MAMP\\htdocs\\aem-compatible-2\\es6\\_constants.es.js";
  var hash = "84563a936b97467adf150d4af434f68cdc95eb46";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\MAMP\\htdocs\\aem-compatible-2\\es6\\_constants.es.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 29
        },
        end: {
          line: 1,
          column: 37
        }
      },
      "1": {
        start: {
          line: 2,
          column: 34
        },
        end: {
          line: 2,
          column: 39
        }
      },
      "2": {
        start: {
          line: 3,
          column: 35
        },
        end: {
          line: 3,
          column: 49
        }
      },
      "3": {
        start: {
          line: 4,
          column: 34
        },
        end: {
          line: 4,
          column: 47
        }
      },
      "4": {
        start: {
          line: 5,
          column: 40
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "5": {
        start: {
          line: 26,
          column: 38
        },
        end: {
          line: 61,
          column: 1
        }
      },
      "6": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 60,
          column: 3
        }
      },
      "7": {
        start: {
          line: 28,
          column: 28
        },
        end: {
          line: 31,
          column: 7
        }
      },
      "8": {
        start: {
          line: 32,
          column: 12
        },
        end: {
          line: 32,
          column: 38
        }
      },
      "9": {
        start: {
          line: 34,
          column: 19
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "10": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 47
        }
      },
      "11": {
        start: {
          line: 38,
          column: 20
        },
        end: {
          line: 40,
          column: 5
        }
      },
      "12": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 39,
          column: 77
        }
      },
      "13": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 34
        }
      },
      "14": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 45,
          column: 5
        }
      },
      "15": {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 44,
          column: 41
        }
      },
      "16": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 25
        }
      },
      "17": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 52,
          column: 6
        }
      },
      "18": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 59,
          column: 6
        }
      },
      "19": {
        start: {
          line: 62,
          column: 28
        },
        end: {
          line: 64,
          column: 1
        }
      },
      "20": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 63,
          column: 39
        }
      },
      "21": {
        start: {
          line: 65,
          column: 27
        },
        end: {
          line: 67,
          column: 1
        }
      },
      "22": {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 66,
          column: 41
        }
      },
      "23": {
        start: {
          line: 68,
          column: 26
        },
        end: {
          line: 74,
          column: 1
        }
      },
      "24": {
        start: {
          line: 69,
          column: 2
        },
        end: {
          line: 72,
          column: 3
        }
      },
      "25": {
        start: {
          line: 70,
          column: 17
        },
        end: {
          line: 70,
          column: 45
        }
      },
      "26": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
          column: 51
        }
      },
      "27": {
        start: {
          line: 73,
          column: 2
        },
        end: {
          line: 73,
          column: 15
        }
      },
      "28": {
        start: {
          line: 75,
          column: 26
        },
        end: {
          line: 87,
          column: 1
        }
      },
      "29": {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 86,
          column: 3
        }
      },
      "30": {
        start: {
          line: 77,
          column: 17
        },
        end: {
          line: 77,
          column: 31
        }
      },
      "31": {
        start: {
          line: 78,
          column: 23
        },
        end: {
          line: 78,
          column: 36
        }
      },
      "32": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 84,
          column: 5
        }
      },
      "33": {
        start: {
          line: 79,
          column: 17
        },
        end: {
          line: 79,
          column: 18
        }
      },
      "34": {
        start: {
          line: 80,
          column: 20
        },
        end: {
          line: 80,
          column: 29
        }
      },
      "35": {
        start: {
          line: 81,
          column: 6
        },
        end: {
          line: 83,
          column: 7
        }
      },
      "36": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 82,
          column: 43
        }
      },
      "37": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 56
        }
      },
      "38": {
        start: {
          line: 88,
          column: 29
        },
        end: {
          line: 102,
          column: 1
        }
      },
      "39": {
        start: {
          line: 89,
          column: 2
        },
        end: {
          line: 101,
          column: 3
        }
      },
      "40": {
        start: {
          line: 90,
          column: 17
        },
        end: {
          line: 90,
          column: 31
        }
      },
      "41": {
        start: {
          line: 91,
          column: 19
        },
        end: {
          line: 91,
          column: 47
        }
      },
      "42": {
        start: {
          line: 92,
          column: 25
        },
        end: {
          line: 92,
          column: 40
        }
      },
      "43": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 99,
          column: 5
        }
      },
      "44": {
        start: {
          line: 93,
          column: 17
        },
        end: {
          line: 93,
          column: 18
        }
      },
      "45": {
        start: {
          line: 94,
          column: 20
        },
        end: {
          line: 94,
          column: 31
        }
      },
      "46": {
        start: {
          line: 95,
          column: 6
        },
        end: {
          line: 98,
          column: 7
        }
      },
      "47": {
        start: {
          line: 96,
          column: 8
        },
        end: {
          line: 96,
          column: 30
        }
      },
      "48": {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 97,
          column: 12
        }
      },
      "49": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 57
        }
      },
      "50": {
        start: {
          line: 103,
          column: 25
        },
        end: {
          line: 128,
          column: 1
        }
      },
      "51": {
        start: {
          line: 104,
          column: 2
        },
        end: {
          line: 127,
          column: 3
        }
      },
      "52": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 64
        }
      },
      "53": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 54
        }
      },
      "54": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 42
        }
      },
      "55": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 53
        }
      },
      "56": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 109,
          column: 24
        }
      },
      "57": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 37
        }
      },
      "58": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 28
        }
      },
      "59": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 112,
          column: 32
        }
      },
      "60": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 113,
          column: 35
        }
      },
      "61": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 31
        }
      },
      "62": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 115,
          column: 34
        }
      },
      "63": {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 126,
          column: 17
        }
      },
      "64": {
        start: {
          line: 117,
          column: 6
        },
        end: {
          line: 117,
          column: 36
        }
      },
      "65": {
        start: {
          line: 118,
          column: 6
        },
        end: {
          line: 118,
          column: 44
        }
      },
      "66": {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 119,
          column: 49
        }
      },
      "67": {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 120,
          column: 52
        }
      },
      "68": {
        start: {
          line: 121,
          column: 6
        },
        end: {
          line: 121,
          column: 48
        }
      },
      "69": {
        start: {
          line: 122,
          column: 6
        },
        end: {
          line: 122,
          column: 51
        }
      },
      "70": {
        start: {
          line: 123,
          column: 6
        },
        end: {
          line: 123,
          column: 46
        }
      },
      "71": {
        start: {
          line: 124,
          column: 6
        },
        end: {
          line: 124,
          column: 57
        }
      },
      "72": {
        start: {
          line: 125,
          column: 6
        },
        end: {
          line: 125,
          column: 57
        }
      },
      "73": {
        start: {
          line: 130,
          column: 27
        },
        end: {
          line: 166,
          column: 1
        }
      },
      "74": {
        start: {
          line: 131,
          column: 2
        },
        end: {
          line: 165,
          column: 5
        }
      },
      "75": {
        start: {
          line: 132,
          column: 18
        },
        end: {
          line: 132,
          column: 57
        }
      },
      "76": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 164,
          column: 5
        }
      },
      "77": {
        start: {
          line: 134,
          column: 6
        },
        end: {
          line: 134,
          column: 45
        }
      },
      "78": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 135,
          column: 56
        }
      },
      "79": {
        start: {
          line: 137,
          column: 6
        },
        end: {
          line: 139,
          column: 7
        }
      },
      "80": {
        start: {
          line: 138,
          column: 8
        },
        end: {
          line: 138,
          column: 26
        }
      },
      "81": {
        start: {
          line: 141,
          column: 6
        },
        end: {
          line: 141,
          column: 37
        }
      },
      "82": {
        start: {
          line: 142,
          column: 19
        },
        end: {
          line: 142,
          column: 38
        }
      },
      "83": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 143,
          column: 39
        }
      },
      "84": {
        start: {
          line: 144,
          column: 6
        },
        end: {
          line: 144,
          column: 30
        }
      },
      "85": {
        start: {
          line: 145,
          column: 6
        },
        end: {
          line: 145,
          column: 34
        }
      },
      "86": {
        start: {
          line: 146,
          column: 6
        },
        end: {
          line: 146,
          column: 37
        }
      },
      "87": {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 147,
          column: 33
        }
      },
      "88": {
        start: {
          line: 148,
          column: 6
        },
        end: {
          line: 148,
          column: 36
        }
      },
      "89": {
        start: {
          line: 149,
          column: 6
        },
        end: {
          line: 149,
          column: 26
        }
      },
      "90": {
        start: {
          line: 150,
          column: 6
        },
        end: {
          line: 150,
          column: 44
        }
      },
      "91": {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 151,
          column: 66
        }
      },
      "92": {
        start: {
          line: 152,
          column: 6
        },
        end: {
          line: 152,
          column: 56
        }
      },
      "93": {
        start: {
          line: 153,
          column: 6
        },
        end: {
          line: 153,
          column: 42
        }
      },
      "94": {
        start: {
          line: 154,
          column: 6
        },
        end: {
          line: 154,
          column: 49
        }
      },
      "95": {
        start: {
          line: 155,
          column: 6
        },
        end: {
          line: 155,
          column: 52
        }
      },
      "96": {
        start: {
          line: 156,
          column: 6
        },
        end: {
          line: 156,
          column: 48
        }
      },
      "97": {
        start: {
          line: 157,
          column: 6
        },
        end: {
          line: 157,
          column: 51
        }
      },
      "98": {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 163,
          column: 19
        }
      },
      "99": {
        start: {
          line: 159,
          column: 8
        },
        end: {
          line: 159,
          column: 46
        }
      },
      "100": {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 160,
          column: 48
        }
      },
      "101": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 161,
          column: 59
        }
      },
      "102": {
        start: {
          line: 162,
          column: 8
        },
        end: {
          line: 162,
          column: 59
        }
      },
      "103": {
        start: {
          line: 168,
          column: 29
        },
        end: {
          line: 176,
          column: 1
        }
      },
      "104": {
        start: {
          line: 169,
          column: 2
        },
        end: {
          line: 175,
          column: 3
        }
      },
      "105": {
        start: {
          line: 170,
          column: 4
        },
        end: {
          line: 174,
          column: 5
        }
      },
      "106": {
        start: {
          line: 171,
          column: 6
        },
        end: {
          line: 171,
          column: 43
        }
      },
      "107": {
        start: {
          line: 173,
          column: 6
        },
        end: {
          line: 173,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 26,
            column: 38
          },
          end: {
            line: 26,
            column: 39
          }
        },
        loc: {
          start: {
            line: 26,
            column: 54
          },
          end: {
            line: 61,
            column: 1
          }
        },
        line: 26
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 34,
            column: 19
          },
          end: {
            line: 34,
            column: 20
          }
        },
        loc: {
          start: {
            line: 34,
            column: 28
          },
          end: {
            line: 36,
            column: 5
          }
        },
        line: 34
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 38,
            column: 20
          },
          end: {
            line: 38,
            column: 21
          }
        },
        loc: {
          start: {
            line: 38,
            column: 30
          },
          end: {
            line: 40,
            column: 5
          }
        },
        line: 38
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 62,
            column: 28
          },
          end: {
            line: 62,
            column: 29
          }
        },
        loc: {
          start: {
            line: 62,
            column: 43
          },
          end: {
            line: 64,
            column: 1
          }
        },
        line: 62
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 65,
            column: 27
          },
          end: {
            line: 65,
            column: 28
          }
        },
        loc: {
          start: {
            line: 65,
            column: 42
          },
          end: {
            line: 67,
            column: 1
          }
        },
        line: 65
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 68,
            column: 26
          },
          end: {
            line: 68,
            column: 27
          }
        },
        loc: {
          start: {
            line: 68,
            column: 50
          },
          end: {
            line: 74,
            column: 1
          }
        },
        line: 68
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 75,
            column: 26
          },
          end: {
            line: 75,
            column: 27
          }
        },
        loc: {
          start: {
            line: 75,
            column: 50
          },
          end: {
            line: 87,
            column: 1
          }
        },
        line: 75
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 88,
            column: 29
          },
          end: {
            line: 88,
            column: 30
          }
        },
        loc: {
          start: {
            line: 88,
            column: 53
          },
          end: {
            line: 102,
            column: 1
          }
        },
        line: 88
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 103,
            column: 25
          },
          end: {
            line: 103,
            column: 26
          }
        },
        loc: {
          start: {
            line: 103,
            column: 51
          },
          end: {
            line: 128,
            column: 1
          }
        },
        line: 103
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 116,
            column: 23
          },
          end: {
            line: 116,
            column: 24
          }
        },
        loc: {
          start: {
            line: 116,
            column: 29
          },
          end: {
            line: 126,
            column: 5
          }
        },
        line: 116
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 130,
            column: 27
          },
          end: {
            line: 130,
            column: 28
          }
        },
        loc: {
          start: {
            line: 130,
            column: 53
          },
          end: {
            line: 166,
            column: 1
          }
        },
        line: 130
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 158,
            column: 25
          },
          end: {
            line: 158,
            column: 26
          }
        },
        loc: {
          start: {
            line: 158,
            column: 31
          },
          end: {
            line: 163,
            column: 7
          }
        },
        line: 158
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 168,
            column: 29
          },
          end: {
            line: 168,
            column: 30
          }
        },
        loc: {
          start: {
            line: 168,
            column: 57
          },
          end: {
            line: 176,
            column: 1
          }
        },
        line: 168
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 32,
            column: 12
          },
          end: {
            line: 32,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 12
          },
          end: {
            line: 32,
            column: 16
          }
        }, {
          start: {
            line: 32,
            column: 20
          },
          end: {
            line: 32,
            column: 38
          }
        }],
        line: 32
      },
      "1": {
        loc: {
          start: {
            line: 35,
            column: 13
          },
          end: {
            line: 35,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 35,
            column: 13
          },
          end: {
            line: 35,
            column: 24
          }
        }, {
          start: {
            line: 35,
            column: 28
          },
          end: {
            line: 35,
            column: 46
          }
        }],
        line: 35
      },
      "2": {
        loc: {
          start: {
            line: 39,
            column: 13
          },
          end: {
            line: 39,
            column: 76
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 39,
            column: 30
          },
          end: {
            line: 39,
            column: 34
          }
        }, {
          start: {
            line: 39,
            column: 37
          },
          end: {
            line: 39,
            column: 76
          }
        }],
        line: 39
      },
      "3": {
        loc: {
          start: {
            line: 39,
            column: 37
          },
          end: {
            line: 39,
            column: 76
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 39,
            column: 37
          },
          end: {
            line: 39,
            column: 56
          }
        }, {
          start: {
            line: 39,
            column: 60
          },
          end: {
            line: 39,
            column: 76
          }
        }],
        line: 39
      },
      "4": {
        loc: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        }, {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        }],
        line: 43
      },
      "5": {
        loc: {
          start: {
            line: 50,
            column: 13
          },
          end: {
            line: 50,
            column: 38
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 50,
            column: 25
          },
          end: {
            line: 50,
            column: 34
          }
        }, {
          start: {
            line: 50,
            column: 37
          },
          end: {
            line: 50,
            column: 38
          }
        }],
        line: 50
      },
      "6": {
        loc: {
          start: {
            line: 51,
            column: 14
          },
          end: {
            line: 51,
            column: 41
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 51,
            column: 27
          },
          end: {
            line: 51,
            column: 37
          }
        }, {
          start: {
            line: 51,
            column: 40
          },
          end: {
            line: 51,
            column: 41
          }
        }],
        line: 51
      },
      "7": {
        loc: {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 72,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 72,
            column: 3
          }
        }, {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 72,
            column: 3
          }
        }],
        line: 69
      },
      "8": {
        loc: {
          start: {
            line: 71,
            column: 11
          },
          end: {
            line: 71,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 71,
            column: 38
          },
          end: {
            line: 71,
            column: 42
          }
        }, {
          start: {
            line: 71,
            column: 45
          },
          end: {
            line: 71,
            column: 50
          }
        }],
        line: 71
      },
      "9": {
        loc: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        }, {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        }],
        line: 76
      },
      "10": {
        loc: {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 83,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 83,
            column: 7
          }
        }, {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 83,
            column: 7
          }
        }],
        line: 81
      },
      "11": {
        loc: {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 101,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 101,
            column: 3
          }
        }, {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 101,
            column: 3
          }
        }],
        line: 89
      },
      "12": {
        loc: {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 98,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 98,
            column: 7
          }
        }, {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 98,
            column: 7
          }
        }],
        line: 95
      },
      "13": {
        loc: {
          start: {
            line: 103,
            column: 34
          },
          end: {
            line: 103,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 103,
            column: 43
          },
          end: {
            line: 103,
            column: 46
          }
        }],
        line: 103
      },
      "14": {
        loc: {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 127,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 127,
            column: 3
          }
        }, {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 127,
            column: 3
          }
        }],
        line: 104
      },
      "15": {
        loc: {
          start: {
            line: 130,
            column: 36
          },
          end: {
            line: 130,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 130,
            column: 45
          },
          end: {
            line: 130,
            column: 48
          }
        }],
        line: 130
      },
      "16": {
        loc: {
          start: {
            line: 131,
            column: 2
          },
          end: {
            line: 165,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 131,
            column: 2
          },
          end: {
            line: 165,
            column: 5
          }
        }, {
          start: {
            line: 131,
            column: 2
          },
          end: {
            line: 165,
            column: 5
          }
        }],
        line: 131
      },
      "17": {
        loc: {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        }, {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        }],
        line: 133
      },
      "18": {
        loc: {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 139,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 139,
            column: 7
          }
        }, {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 139,
            column: 7
          }
        }],
        line: 137
      },
      "19": {
        loc: {
          start: {
            line: 168,
            column: 38
          },
          end: {
            line: 168,
            column: 52
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 168,
            column: 49
          },
          end: {
            line: 168,
            column: 52
          }
        }],
        line: 168
      },
      "20": {
        loc: {
          start: {
            line: 169,
            column: 2
          },
          end: {
            line: 175,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 169,
            column: 2
          },
          end: {
            line: 175,
            column: 3
          }
        }, {
          start: {
            line: 169,
            column: 2
          },
          end: {
            line: 175,
            column: 3
          }
        }],
        line: 169
      },
      "21": {
        loc: {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 174,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 174,
            column: 5
          }
        }, {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 174,
            column: 5
          }
        }],
        line: 170
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0],
      "14": [0, 0],
      "15": [0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0],
      "20": [0, 0],
      "21": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "84563a936b97467adf150d4af434f68cdc95eb46"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2r4nz6gagn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2r4nz6gagn();
var __ActiveClass = (cov_2r4nz6gagn().s[0]++, 'active');
var __HeaderBreakpoint = (cov_2r4nz6gagn().s[1]++, '768');
var __LandscapeCSSClass = (cov_2r4nz6gagn().s[2]++, 'is-landscape');
var __PortraitCSSClass = (cov_2r4nz6gagn().s[3]++, 'is-portrait');
var __DefaultCarouselOptions = (cov_2r4nz6gagn().s[4]++, {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next>button',
    prevEl: '.swiper-button-prev>button'
  },
  responsive4: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  }
});
cov_2r4nz6gagn().s[5]++;
var __GetElementDimensions = function __GetElementDimensions(elem) {
  cov_2r4nz6gagn().f[0]++;
  cov_2r4nz6gagn().s[6]++;

  try {
    var docElem,
        win,
        box = (cov_2r4nz6gagn().s[7]++, {
      top: 0,
      left: 0
    }),
        doc = (cov_2r4nz6gagn().s[8]++, (cov_2r4nz6gagn().b[0][0]++, elem) && (cov_2r4nz6gagn().b[0][1]++, elem.ownerDocument));
    cov_2r4nz6gagn().s[9]++;

    var isWindow = function isWindow(obj) {
      cov_2r4nz6gagn().f[1]++;
      cov_2r4nz6gagn().s[10]++;
      return (cov_2r4nz6gagn().b[1][0]++, obj != null) && (cov_2r4nz6gagn().b[1][1]++, obj === obj.window);
    };

    cov_2r4nz6gagn().s[11]++;

    var getWindow = function getWindow(elem) {
      cov_2r4nz6gagn().f[2]++;
      cov_2r4nz6gagn().s[12]++;
      return isWindow(elem) ? (cov_2r4nz6gagn().b[2][0]++, elem) : (cov_2r4nz6gagn().b[2][1]++, (cov_2r4nz6gagn().b[3][0]++, elem.nodeType === 9) && (cov_2r4nz6gagn().b[3][1]++, elem.defaultView));
    };

    cov_2r4nz6gagn().s[13]++;
    docElem = doc.documentElement;
    cov_2r4nz6gagn().s[14]++;

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default()(elem.getBoundingClientRect) !== ( true ? "undefined" : 0)) {
      cov_2r4nz6gagn().b[4][0]++;
      cov_2r4nz6gagn().s[15]++;
      box = elem.getBoundingClientRect();
    } else {
      cov_2r4nz6gagn().b[4][1]++;
    }

    cov_2r4nz6gagn().s[16]++;
    win = getWindow(doc);
    cov_2r4nz6gagn().s[17]++;
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft,
      width: box.width ? (cov_2r4nz6gagn().b[5][0]++, box.width) : (cov_2r4nz6gagn().b[5][1]++, 0),
      height: box.height ? (cov_2r4nz6gagn().b[6][0]++, box.height) : (cov_2r4nz6gagn().b[6][1]++, 0)
    };
  } catch (e) {
    cov_2r4nz6gagn().s[18]++;
    return {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }
};
cov_2r4nz6gagn().s[19]++;
var __StringTrim = function __StringTrim(str) {
  cov_2r4nz6gagn().f[3]++;
  cov_2r4nz6gagn().s[20]++;
  return str.replace(/^\s+|\s+$/g, '');
};
cov_2r4nz6gagn().s[21]++;
var __ArrayCall = function __ArrayCall(arr) {
  cov_2r4nz6gagn().f[4]++;
  cov_2r4nz6gagn().s[22]++;
  return Array.prototype.slice.call(arr);
};
cov_2r4nz6gagn().s[23]++;
var __HasClass = function __HasClass(element, cls) {
  cov_2r4nz6gagn().f[5]++;
  cov_2r4nz6gagn().s[24]++;

  if (element) {
    cov_2r4nz6gagn().b[7][0]++;
    var clsarr = (cov_2r4nz6gagn().s[25]++, element.className.split(' '));
    cov_2r4nz6gagn().s[26]++;
    return clsarr.indexOf(cls) > -1 ? (cov_2r4nz6gagn().b[8][0]++, true) : (cov_2r4nz6gagn().b[8][1]++, false);
  } else {
    cov_2r4nz6gagn().b[7][1]++;
  }

  cov_2r4nz6gagn().s[27]++;
  return false;
};
cov_2r4nz6gagn().s[28]++;
var __AddClass = function __AddClass(element, cls) {
  cov_2r4nz6gagn().f[6]++;
  cov_2r4nz6gagn().s[29]++;

  if (element) {
    cov_2r4nz6gagn().b[9][0]++;
    var clsarr = (cov_2r4nz6gagn().s[30]++, cls.split(' '));
    var clsarrLength = (cov_2r4nz6gagn().s[31]++, clsarr.length);
    cov_2r4nz6gagn().s[32]++;

    for (var i = (cov_2r4nz6gagn().s[33]++, 0); i < clsarrLength; i++) {
      var thiscls = (cov_2r4nz6gagn().s[34]++, clsarr[i]);
      cov_2r4nz6gagn().s[35]++;

      if (!__HasClass(element, thiscls)) {
        cov_2r4nz6gagn().b[10][0]++;
        cov_2r4nz6gagn().s[36]++;
        element.className += ' ' + thiscls;
      } else {
        cov_2r4nz6gagn().b[10][1]++;
      }
    }

    cov_2r4nz6gagn().s[37]++;
    element.className = __StringTrim(element.className);
  } else {
    cov_2r4nz6gagn().b[9][1]++;
  }
};
cov_2r4nz6gagn().s[38]++;
var __RemoveClass = function __RemoveClass(element, cls) {
  cov_2r4nz6gagn().f[7]++;
  cov_2r4nz6gagn().s[39]++;

  if (element) {
    cov_2r4nz6gagn().b[11][0]++;
    var clsarr = (cov_2r4nz6gagn().s[40]++, cls.split(' '));
    var curclass = (cov_2r4nz6gagn().s[41]++, element.className.split(' '));
    var curclassLength = (cov_2r4nz6gagn().s[42]++, curclass.length);
    cov_2r4nz6gagn().s[43]++;

    for (var i = (cov_2r4nz6gagn().s[44]++, 0); i < curclassLength; i++) {
      var thiscls = (cov_2r4nz6gagn().s[45]++, curclass[i]);
      cov_2r4nz6gagn().s[46]++;

      if (clsarr.indexOf(thiscls) > -1) {
        cov_2r4nz6gagn().b[12][0]++;
        cov_2r4nz6gagn().s[47]++;
        curclass.splice(i, 1);
        cov_2r4nz6gagn().s[48]++;
        i--;
      } else {
        cov_2r4nz6gagn().b[12][1]++;
      }
    }

    cov_2r4nz6gagn().s[49]++;
    element.className = __StringTrim(curclass.join(' '));
  } else {
    cov_2r4nz6gagn().b[11][1]++;
  }
};
cov_2r4nz6gagn().s[50]++;
var __SlideUp = function __SlideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2r4nz6gagn().b[13][0]++, 250);
  cov_2r4nz6gagn().f[8]++;
  cov_2r4nz6gagn().s[51]++;

  if (target) {
    cov_2r4nz6gagn().b[14][0]++;
    cov_2r4nz6gagn().s[52]++;
    target.style.transitionProperty = 'height, margin, padding';
    cov_2r4nz6gagn().s[53]++;
    target.style.transitionDuration = duration + 'ms';
    cov_2r4nz6gagn().s[54]++;
    target.style.boxSizing = 'border-box';
    cov_2r4nz6gagn().s[55]++;
    target.style.height = target.offsetHeight + 'px';
    cov_2r4nz6gagn().s[56]++;
    target.offsetHeight;
    cov_2r4nz6gagn().s[57]++;
    target.style.overflow = 'hidden';
    cov_2r4nz6gagn().s[58]++;
    target.style.height = 0;
    cov_2r4nz6gagn().s[59]++;
    target.style.paddingTop = 0;
    cov_2r4nz6gagn().s[60]++;
    target.style.paddingBottom = 0;
    cov_2r4nz6gagn().s[61]++;
    target.style.marginTop = 0;
    cov_2r4nz6gagn().s[62]++;
    target.style.marginBottom = 0;
    cov_2r4nz6gagn().s[63]++;
    window.setTimeout(function () {
      cov_2r4nz6gagn().f[9]++;
      cov_2r4nz6gagn().s[64]++;
      target.style.display = 'none';
      cov_2r4nz6gagn().s[65]++;
      target.style.removeProperty('height');
      cov_2r4nz6gagn().s[66]++;
      target.style.removeProperty('padding-top');
      cov_2r4nz6gagn().s[67]++;
      target.style.removeProperty('padding-bottom');
      cov_2r4nz6gagn().s[68]++;
      target.style.removeProperty('margin-top');
      cov_2r4nz6gagn().s[69]++;
      target.style.removeProperty('margin-bottom');
      cov_2r4nz6gagn().s[70]++;
      target.style.removeProperty('overflow');
      cov_2r4nz6gagn().s[71]++;
      target.style.removeProperty('transition-duration');
      cov_2r4nz6gagn().s[72]++;
      target.style.removeProperty('transition-property');
    }, duration);
  } else {
    cov_2r4nz6gagn().b[14][1]++;
  }
};
cov_2r4nz6gagn().s[73]++;
var __SlideDown = function __SlideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2r4nz6gagn().b[15][0]++, 250);
  cov_2r4nz6gagn().f[10]++;
  cov_2r4nz6gagn().s[74]++;

  if (target) {
    cov_2r4nz6gagn().b[16][0]++;
    var display = (cov_2r4nz6gagn().s[75]++, window.getComputedStyle(target).display);
    cov_2r4nz6gagn().s[76]++;

    if (display === 'none') {
      cov_2r4nz6gagn().b[17][0]++;
      cov_2r4nz6gagn().s[77]++;
      target.style.removeProperty('display');
      cov_2r4nz6gagn().s[78]++;
      display = window.getComputedStyle(target).display;
      cov_2r4nz6gagn().s[79]++;

      if (display === 'none') {
        cov_2r4nz6gagn().b[18][0]++;
        cov_2r4nz6gagn().s[80]++;
        display = 'block';
      } else {
        cov_2r4nz6gagn().b[18][1]++;
      }

      cov_2r4nz6gagn().s[81]++;
      target.style.display = display;
      var height = (cov_2r4nz6gagn().s[82]++, target.offsetHeight);
      cov_2r4nz6gagn().s[83]++;
      target.style.overflow = 'hidden';
      cov_2r4nz6gagn().s[84]++;
      target.style.height = 0;
      cov_2r4nz6gagn().s[85]++;
      target.style.paddingTop = 0;
      cov_2r4nz6gagn().s[86]++;
      target.style.paddingBottom = 0;
      cov_2r4nz6gagn().s[87]++;
      target.style.marginTop = 0;
      cov_2r4nz6gagn().s[88]++;
      target.style.marginBottom = 0;
      cov_2r4nz6gagn().s[89]++;
      target.offsetHeight;
      cov_2r4nz6gagn().s[90]++;
      target.style.boxSizing = 'border-box';
      cov_2r4nz6gagn().s[91]++;
      target.style.transitionProperty = "height, margin, padding";
      cov_2r4nz6gagn().s[92]++;
      target.style.transitionDuration = duration + 'ms';
      cov_2r4nz6gagn().s[93]++;
      target.style.height = height + 'px';
      cov_2r4nz6gagn().s[94]++;
      target.style.removeProperty('padding-top');
      cov_2r4nz6gagn().s[95]++;
      target.style.removeProperty('padding-bottom');
      cov_2r4nz6gagn().s[96]++;
      target.style.removeProperty('margin-top');
      cov_2r4nz6gagn().s[97]++;
      target.style.removeProperty('margin-bottom');
      cov_2r4nz6gagn().s[98]++;
      window.setTimeout(function () {
        cov_2r4nz6gagn().f[11]++;
        cov_2r4nz6gagn().s[99]++;
        target.style.removeProperty('height');
        cov_2r4nz6gagn().s[100]++;
        target.style.removeProperty('overflow');
        cov_2r4nz6gagn().s[101]++;
        target.style.removeProperty('transition-duration');
        cov_2r4nz6gagn().s[102]++;
        target.style.removeProperty('transition-property');
      }, duration);
    } else {
      cov_2r4nz6gagn().b[17][1]++;
    }
  } else {
    cov_2r4nz6gagn().b[16][1]++;
  }
};
cov_2r4nz6gagn().s[103]++;
var __SlideToggle = function __SlideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2r4nz6gagn().b[19][0]++, 250);
  cov_2r4nz6gagn().f[12]++;
  cov_2r4nz6gagn().s[104]++;

  if (target) {
    cov_2r4nz6gagn().b[20][0]++;
    cov_2r4nz6gagn().s[105]++;

    if (window.getComputedStyle(target).display === 'none') {
      cov_2r4nz6gagn().b[21][0]++;
      cov_2r4nz6gagn().s[106]++;
      return __SlideDown(target, duration);
    } else {
      cov_2r4nz6gagn().b[21][1]++;
      cov_2r4nz6gagn().s[107]++;
      return __SlideUp(target, duration);
    }
  } else {
    cov_2r4nz6gagn().b[20][1]++;
  }
}; // let speedAnimation = 400;
// let targetId = document.getElementById("target");
// let slideBtnClick = (id, sl) => document.getElementById(id).addEventListener('click', () => sl(targetId, speedAnimation));
// slideBtnClick('triggerUp', slideUp);
// slideBtnClick('triggerDown', slideDown);
// slideBtnClick('triggerToggle', slideToggle);

/***/ }),

/***/ "./es6/_footer-scripts.es.js":
/*!***********************************!*\
  !*** ./es6/_footer-scripts.es.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GlobalScripts; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_constants.es */ "./es6/_constants.es.js");







function cov_2py1h2o9s4() {
  var path = "C:\\MAMP\\htdocs\\aem-compatible-2\\es6\\_footer-scripts.es.js";
  var hash = "7c2df9289aaa6bf4bfe5219697f787895234298b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\MAMP\\htdocs\\aem-compatible-2\\es6\\_footer-scripts.es.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 32,
          column: 10
        }
      },
      "1": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 23,
          column: 7
        }
      },
      "2": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 22,
          column: 11
        }
      },
      "3": {
        start: {
          line: 13,
          column: 10
        },
        end: {
          line: 13,
          column: 63
        }
      },
      "4": {
        start: {
          line: 14,
          column: 10
        },
        end: {
          line: 17,
          column: 11
        }
      },
      "5": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 52
        }
      },
      "6": {
        start: {
          line: 16,
          column: 12
        },
        end: {
          line: 16,
          column: 56
        }
      },
      "7": {
        start: {
          line: 18,
          column: 10
        },
        end: {
          line: 21,
          column: 11
        }
      },
      "8": {
        start: {
          line: 19,
          column: 12
        },
        end: {
          line: 19,
          column: 55
        }
      },
      "9": {
        start: {
          line: 20,
          column: 12
        },
        end: {
          line: 20,
          column: 53
        }
      },
      "10": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 27,
          column: 7
        }
      },
      "11": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 49
        }
      },
      "12": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 53
        }
      },
      "13": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 31,
          column: 7
        }
      },
      "14": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 52
        }
      },
      "15": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 50
        }
      },
      "16": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 46
        }
      },
      "17": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 93
        }
      },
      "18": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 35
        }
      },
      "19": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 75
        }
      },
      "20": {
        start: {
          line: 42,
          column: 0
        },
        end: {
          line: 45,
          column: 3
        }
      },
      "21": {
        start: {
          line: 43,
          column: 24
        },
        end: {
          line: 43,
          column: 43
        }
      },
      "22": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        loc: {
          start: {
            line: 8,
            column: 16
          },
          end: {
            line: 8,
            column: 18
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 28
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 10,
            column: 15
          },
          end: {
            line: 10,
            column: 16
          }
        },
        loc: {
          start: {
            line: 10,
            column: 21
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 10
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 12,
            column: 27
          },
          end: {
            line: 12,
            column: 28
          }
        },
        loc: {
          start: {
            line: 12,
            column: 38
          },
          end: {
            line: 22,
            column: 9
          }
        },
        line: 12
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 11
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 34
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 42,
            column: 47
          },
          end: {
            line: 42,
            column: 48
          }
        },
        loc: {
          start: {
            line: 42,
            column: 59
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 42
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 23,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 23,
            column: 7
          }
        }, {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 23,
            column: 7
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 11,
            column: 11
          },
          end: {
            line: 11,
            column: 27
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 11,
            column: 11
          },
          end: {
            line: 11,
            column: 21
          }
        }, {
          start: {
            line: 11,
            column: 25
          },
          end: {
            line: 11,
            column: 27
          }
        }],
        line: 11
      },
      "2": {
        loc: {
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 17,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 17,
            column: 11
          }
        }, {
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 17,
            column: 11
          }
        }],
        line: 14
      },
      "3": {
        loc: {
          start: {
            line: 18,
            column: 10
          },
          end: {
            line: 21,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 10
          },
          end: {
            line: 21,
            column: 11
          }
        }, {
          start: {
            line: 18,
            column: 10
          },
          end: {
            line: 21,
            column: 11
          }
        }],
        line: 18
      },
      "4": {
        loc: {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 27,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 27,
            column: 7
          }
        }, {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 27,
            column: 7
          }
        }],
        line: 24
      },
      "5": {
        loc: {
          start: {
            line: 24,
            column: 10
          },
          end: {
            line: 24,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 24,
            column: 10
          },
          end: {
            line: 24,
            column: 18
          }
        }, {
          start: {
            line: 24,
            column: 22
          },
          end: {
            line: 24,
            column: 60
          }
        }],
        line: 24
      },
      "6": {
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        }, {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        }],
        line: 28
      },
      "7": {
        loc: {
          start: {
            line: 28,
            column: 10
          },
          end: {
            line: 28,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 10
          },
          end: {
            line: 28,
            column: 18
          }
        }, {
          start: {
            line: 28,
            column: 22
          },
          end: {
            line: 28,
            column: 61
          }
        }],
        line: 28
      },
      "8": {
        loc: {
          start: {
            line: 36,
            column: 44
          },
          end: {
            line: 36,
            column: 91
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 36,
            column: 44
          },
          end: {
            line: 36,
            column: 85
          }
        }, {
          start: {
            line: 36,
            column: 89
          },
          end: {
            line: 36,
            column: 91
          }
        }],
        line: 36
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7c2df9289aaa6bf4bfe5219697f787895234298b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2py1h2o9s4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2py1h2o9s4();

var bodyElem;
var bgElements;
var bgElementDimension;

var GlobalScripts = /*#__PURE__*/function () {
  function GlobalScripts() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, GlobalScripts);

    cov_2py1h2o9s4().f[0]++;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(GlobalScripts, [{
    key: "reportWindowOrientation",
    value: function reportWindowOrientation() {
      cov_2py1h2o9s4().f[1]++;
      cov_2py1h2o9s4().s[0]++;
      setTimeout(function () {
        cov_2py1h2o9s4().f[2]++;
        cov_2py1h2o9s4().s[1]++;

        if (((cov_2py1h2o9s4().b[1][0]++, bgElements) || (cov_2py1h2o9s4().b[1][1]++, [])).length > 0) {
          cov_2py1h2o9s4().b[0][0]++;
          cov_2py1h2o9s4().s[2]++;
          bgElements.forEach(function (element) {
            cov_2py1h2o9s4().f[3]++;
            cov_2py1h2o9s4().s[3]++;
            bgElementDimension = (0,_constants_es__WEBPACK_IMPORTED_MODULE_6__.__GetElementDimensions)(element);
            cov_2py1h2o9s4().s[4]++;

            if (bgElementDimension.height > bgElementDimension.width) {
              cov_2py1h2o9s4().b[2][0]++;
              cov_2py1h2o9s4().s[5]++;

              (0,_constants_es__WEBPACK_IMPORTED_MODULE_6__.__AddClass)(element, _constants_es__WEBPACK_IMPORTED_MODULE_6__.__PortraitCSSClass);

              cov_2py1h2o9s4().s[6]++;

              (0,_constants_es__WEBPACK_IMPORTED_MODULE_6__.__RemoveClass)(element, _constants_es__WEBPACK_IMPORTED_MODULE_6__.__LandscapeCSSClass);
            } else {
              cov_2py1h2o9s4().b[2][1]++;
            }

            cov_2py1h2o9s4().s[7]++;

            if (bgElementDimension.height <= bgElementDimension.width) {
              cov_2py1h2o9s4().b[3][0]++;
              cov_2py1h2o9s4().s[8]++;

              (0,_constants_es__WEBPACK_IMPORTED_MODULE_6__.__RemoveClass)(element, _constants_es__WEBPACK_IMPORTED_MODULE_6__.__PortraitCSSClass);

              cov_2py1h2o9s4().s[9]++;

              (0,_constants_es__WEBPACK_IMPORTED_MODULE_6__.__AddClass)(element, _constants_es__WEBPACK_IMPORTED_MODULE_6__.__LandscapeCSSClass);
            } else {
              cov_2py1h2o9s4().b[3][1]++;
            }
          });
        } else {
          cov_2py1h2o9s4().b[0][1]++;
        }

        cov_2py1h2o9s4().s[10]++;

        if ((cov_2py1h2o9s4().b[5][0]++, bodyElem) && (cov_2py1h2o9s4().b[5][1]++, window.innerHeight > window.innerWidth)) {
          cov_2py1h2o9s4().b[4][0]++;
          cov_2py1h2o9s4().s[11]++;

          (0,_constants_es__WEBPACK_IMPORTED_MODULE_6__.__AddClass)(bodyElem, _constants_es__WEBPACK_IMPORTED_MODULE_6__.__PortraitCSSClass);

          cov_2py1h2o9s4().s[12]++;

          (0,_constants_es__WEBPACK_IMPORTED_MODULE_6__.__RemoveClass)(bodyElem, _constants_es__WEBPACK_IMPORTED_MODULE_6__.__LandscapeCSSClass);
        } else {
          cov_2py1h2o9s4().b[4][1]++;
        }

        cov_2py1h2o9s4().s[13]++;

        if ((cov_2py1h2o9s4().b[7][0]++, bodyElem) && (cov_2py1h2o9s4().b[7][1]++, window.innerHeight <= window.innerWidth)) {
          cov_2py1h2o9s4().b[6][0]++;
          cov_2py1h2o9s4().s[14]++;

          (0,_constants_es__WEBPACK_IMPORTED_MODULE_6__.__RemoveClass)(bodyElem, _constants_es__WEBPACK_IMPORTED_MODULE_6__.__PortraitCSSClass);

          cov_2py1h2o9s4().s[15]++;

          (0,_constants_es__WEBPACK_IMPORTED_MODULE_6__.__AddClass)(bodyElem, _constants_es__WEBPACK_IMPORTED_MODULE_6__.__LandscapeCSSClass);
        } else {
          cov_2py1h2o9s4().b[6][1]++;
        }
      }, 0);
    }
  }, {
    key: "__init",
    value: function __init() {
      cov_2py1h2o9s4().f[4]++;
      cov_2py1h2o9s4().s[16]++;
      bodyElem = document.querySelector('body');
      cov_2py1h2o9s4().s[17]++;
      bgElements = Array.prototype.slice.call((cov_2py1h2o9s4().b[8][0]++, document.querySelectorAll('.bg-img-wrap')) || (cov_2py1h2o9s4().b[8][1]++, []));
      cov_2py1h2o9s4().s[18]++;
      this.reportWindowOrientation();
      cov_2py1h2o9s4().s[19]++;
      window.addEventListener('resize', this.reportWindowOrientation, false);
    }
  }]);

  return GlobalScripts;
}();


cov_2py1h2o9s4().s[20]++;
document.addEventListener('DOMContentLoaded', function () {
  cov_2py1h2o9s4().f[5]++;
  var globalscripts = (cov_2py1h2o9s4().s[21]++, new GlobalScripts());
  cov_2py1h2o9s4().s[22]++;

  globalscripts.__init();
});

/***/ }),

/***/ "./templates/_baseLayoutPage/clientlibs/scripts/index.es.js":
/*!******************************************************************!*\
  !*** ./templates/_baseLayoutPage/clientlibs/scripts/index.es.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _es6_footer_scripts_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../es6/_footer-scripts.es */ "./es6/_footer-scripts.es.js");
function cov_idjnbgb89() {
  var path = "C:\\MAMP\\htdocs\\aem-compatible-2\\templates\\_baseLayoutPage\\clientlibs\\scripts\\index.es.js";
  var hash = "f3f3607bbfbee0a6bf482713ff23ae6c230d84ab";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\MAMP\\htdocs\\aem-compatible-2\\templates\\_baseLayoutPage\\clientlibs\\scripts\\index.es.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f3f3607bbfbee0a6bf482713ff23ae6c230d84ab"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_idjnbgb89 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_idjnbgb89();


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./templates/_baseLayoutPage/clientlibs/scripts/index.es.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=index.js.map