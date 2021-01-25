/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./performance/src/performance.js":
/*!****************************************!*\
  !*** ./performance/src/performance.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _performance_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./performance/index */ "./performance/src/performance/index.js");
var render = wp.element.render;

render( /*#__PURE__*/React.createElement(_performance_index__WEBPACK_IMPORTED_MODULE_0__["default"], null), document.getElementById('tutormate-performance-container'));

/***/ }),

/***/ "./performance/src/performance/index.js":
/*!**********************************************!*\
  !*** ./performance/src/performance/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    PanelRow = _wp$components.PanelRow,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    Spinner = _wp$components.Spinner;

var PerformanceSettings = /*#__PURE__*/function (_Component) {
  _inherits(PerformanceSettings, _Component);

  var _super = _createSuper(PerformanceSettings);

  function PerformanceSettings() {
    var _this;

    _classCallCheck(this, PerformanceSettings);

    _this = _super.apply(this, arguments);
    _this.changeOptions = _this.changeOptions.bind(_assertThisInitialized(_this));
    _this.state = {
      isApiLoaded: false,
      isApiSaving: false,
      opt_defer_js: true,
      opt_defer_css: false,
      opt_disable_rsd: true,
      opt_disable_emoji: true,
      opt_disable_xmlrpc: true,
      opt_disable_embed: false,
      opt_disable_feeds: false,
      opt_slow_heartbeat: true,
      opt_limit_revisions: true,
      opt_jquery_to_footer: true,
      opt_limit_comments_js: true,
      opt_disable_comments: false,
      opt_disable_shortlinks: true,
      opt_disable_wp_version: true,
      opt_disable_wlwmanifest: true,
      opt_block_external_http: false,
      opt_remove_comments_style: true,
      opt_disable_jquery_migrate: true,
      opt_disable_version_numbers: true
    };
    return _this;
  }

  _createClass(PerformanceSettings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      wp.api.loadPromise.then(function () {
        _this2.settings = new wp.api.models.Settings();

        if (false === _this2.state.isApiLoaded) {
          _this2.settings.fetch().then(function (response) {
            _this2.setState({
              opt_block_external_http: Boolean(response.opt_block_external_http),
              opt_defer_css: Boolean(response.opt_defer_css),
              opt_defer_js: Boolean(response.opt_defer_js),
              opt_disable_comments: Boolean(response.opt_disable_comments),
              opt_disable_embed: Boolean(response.opt_disable_embed),
              opt_disable_emoji: Boolean(response.opt_disable_emoji),
              opt_disable_feeds: Boolean(response.opt_disable_feeds),
              opt_disable_jquery_migrate: Boolean(response.opt_disable_jquery_migrate),
              opt_disable_rsd: Boolean(response.opt_disable_rsd),
              opt_disable_shortlinks: Boolean(response.opt_disable_shortlinks),
              opt_disable_version_numbers: Boolean(response.opt_disable_version_numbers),
              opt_disable_wlwmanifest: Boolean(response.opt_disable_wlwmanifest),
              opt_disable_wp_version: Boolean(response.opt_disable_wp_version),
              opt_disable_xmlrpc: Boolean(response.opt_disable_xmlrpc),
              opt_jquery_to_footer: Boolean(response.opt_jquery_to_footer),
              opt_limit_comments_js: Boolean(response.opt_limit_comments_js),
              opt_limit_revisions: Boolean(response.opt_limit_revisions),
              opt_remove_comments_style: Boolean(response.opt_remove_comments_style),
              opt_slow_heartbeat: Boolean(response.opt_slow_heartbeat),
              isApiLoaded: true
            });
          });
        }
      });
    }
  }, {
    key: "changeOptions",
    value: function changeOptions(option, value) {
      var _this3 = this;

      this.setState({
        isApiSaving: true
      });
      var model = new wp.api.models.Settings(_defineProperty({}, option, value));
      model.save().then(function (response) {
        var _this3$setState;

        _this3.setState((_this3$setState = {}, _defineProperty(_this3$setState, option, response[option]), _defineProperty(_this3$setState, "isApiSaving", false), _this3$setState));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (!this.state.isApiLoaded) {
        return /*#__PURE__*/React.createElement(Spinner, null);
      }

      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "performance-header"
      }, /*#__PURE__*/React.createElement("div", {
        className: "performance-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "performance-heading"
      }, /*#__PURE__*/React.createElement("h1", null, __('Performance Optimizations', 'performance'))))), /*#__PURE__*/React.createElement("div", {
        className: "performance-settings"
      }, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(BaseControl, {
        label: __('Please note that, the default settings are optimal for majority of the websites. Some settings may break your website\'s layout. Tweak the settings with caution!', 'performance')
      }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Block Externl HTTP Request?', 'performance'),
        checked: this.state.opt_block_external_http,
        onChange: function onChange() {
          return _this4.changeOptions('opt_block_external_http', !_this4.state.opt_block_external_http);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Defer CSS?', 'performance'),
        checked: this.state.opt_defer_css,
        onChange: function onChange() {
          return _this4.changeOptions('opt_defer_css', !_this4.state.opt_defer_css);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Defer JS?', 'performance'),
        checked: this.state.opt_defer_js,
        onChange: function onChange() {
          return _this4.changeOptions('opt_defer_js', !_this4.state.opt_defer_js);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable Comments?', 'performance'),
        checked: this.state.opt_disable_comments,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_comments', !_this4.state.opt_disable_comments);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable Embed?', 'performance'),
        checked: this.state.opt_disable_embed,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_embed', !_this4.state.opt_disable_embed);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable Emoji?', 'performance'),
        checked: this.state.opt_disable_emoji,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_emoji', !_this4.state.opt_disable_emoji);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable Feeds?', 'performance'),
        checked: this.state.opt_disable_feeds,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_feeds', !_this4.state.opt_disable_feeds);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable jQuery Migrate?', 'performance'),
        checked: this.state.opt_disable_jquery_migrate,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_jquery_migrate', !_this4.state.opt_disable_jquery_migrate);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable RSD Links?', 'performance'),
        checked: this.state.opt_disable_rsd,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_rsd', !_this4.state.opt_disable_rsd);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable Shortlinks?', 'performance'),
        checked: this.state.opt_disable_shortlinks,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_shortlinks', !_this4.state.opt_disable_shortlinks);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable Version Numbers?', 'performance'),
        checked: this.state.opt_disable_version_numbers,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_version_numbers', !_this4.state.opt_disable_version_numbers);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable WLW Manifest?', 'performance'),
        checked: this.state.opt_disable_wlwmanifest,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_wlwmanifest', !_this4.state.opt_disable_wlwmanifest);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable WP Version?', 'performance'),
        checked: this.state.opt_disable_wp_version,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_wp_version', !_this4.state.opt_disable_wp_version);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Disable XMLRPC?', 'performance'),
        checked: this.state.opt_disable_xmlrpc,
        onChange: function onChange() {
          return _this4.changeOptions('opt_disable_xmlrpc', !_this4.state.opt_disable_xmlrpc);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Place jQuery to Footer?', 'performance'),
        checked: this.state.opt_jquery_to_footer,
        onChange: function onChange() {
          return _this4.changeOptions('opt_jquery_to_footer', !_this4.state.opt_jquery_to_footer);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Limit Comments JS?', 'performance'),
        checked: this.state.opt_limit_comments_js,
        onChange: function onChange() {
          return _this4.changeOptions('opt_limit_comments_js', !_this4.state.opt_limit_comments_js);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Limit Revisions to 5?', 'performance'),
        checked: this.state.opt_limit_revisions,
        onChange: function onChange() {
          return _this4.changeOptions('opt_limit_revisions', !_this4.state.opt_limit_revisions);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Remove Comments Style?', 'performance'),
        checked: this.state.opt_remove_comments_style,
        onChange: function onChange() {
          return _this4.changeOptions('opt_remove_comments_style', !_this4.state.opt_remove_comments_style);
        }
      })), /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Slowdown Heartbeat API?', 'performance'),
        checked: this.state.opt_slow_heartbeat,
        onChange: function onChange() {
          return _this4.changeOptions('opt_slow_heartbeat', !_this4.state.opt_slow_heartbeat);
        }
      }))))));
    }
  }]);

  return PerformanceSettings;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (PerformanceSettings);

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./performance/src/performance.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Web/Projects/Local Sites/tutorstarter/app/public/wp-content/plugins/tutormate/performance/src/performance.js */"./performance/src/performance.js");


/***/ })

/******/ });