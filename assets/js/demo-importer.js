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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./react/src/components/App.js":
/*!*************************************!*\
  !*** ./react/src/components/App.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Installation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Installation */ "./react/src/components/Installation.js");
/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preloader */ "./react/src/components/Preloader.js");
/* harmony import */ var _RadioField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RadioField */ "./react/src/components/RadioField.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __ = wp.i18n.__;
var useState = wp.element.useState;
var RadioControl = wp.components.RadioControl;



var importFiles = tutormate.import_files;
var allCategories = ["all"].concat(_toConsumableArray(new Set(importFiles.map(function (item) {
  return item.categories;
}).flat())));

function App() {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      fetching = _useState4[0],
      setFetching = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      percentage = _useState6[0],
      setPercentage = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      importCompleted = _useState8[0],
      setImportCompleted = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedDemo = _useState10[0],
      setSelectedDemo = _useState10[1];

  var _useState11 = useState([]),
      _useState12 = _slicedToArray(_useState11, 2),
      builderList = _useState12[0],
      setBuilderList = _useState12[1];

  var _useState13 = useState([]),
      _useState14 = _slicedToArray(_useState13, 2),
      clickedItem = _useState14[0],
      setClickedItem = _useState14[1];

  var _useState15 = useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      modalState = _useState16[0],
      setModalState = _useState16[1];

  var _useState17 = useState('gutenberg'),
      _useState18 = _slicedToArray(_useState17, 2),
      builder = _useState18[0],
      setBuilder = _useState18[1];

  var _useState19 = useState(0),
      _useState20 = _slicedToArray(_useState19, 2),
      selectedIndex = _useState20[0],
      setSelectedIndex = _useState20[1];

  var _useState21 = useState(importFiles),
      _useState22 = _slicedToArray(_useState21, 2),
      listItems = _useState22[0],
      setListItems = _useState22[1];

  var _useState23 = useState(''),
      _useState24 = _slicedToArray(_useState23, 2),
      demoNotice = _useState24[0],
      setDemoNotice = _useState24[1];

  var _useState25 = useState(allCategories),
      _useState26 = _slicedToArray(_useState25, 2),
      categories = _useState26[0],
      setCategories = _useState26[1];

  var _useState27 = useState(''),
      _useState28 = _slicedToArray(_useState27, 2),
      pluginName = _useState28[0],
      setPluginName = _useState28[1];

  var _useState29 = useState(0),
      _useState30 = _slicedToArray(_useState29, 2),
      pluginProgress = _useState30[0],
      setPluginProgress = _useState30[1];

  var _useState31 = useState([]),
      _useState32 = _slicedToArray(_useState31, 2),
      plugins = _useState32[0],
      setPlugins = _useState32[1];

  var resData;
  var builderOptions = builderList.length > 0 && builderList.map(function (item) {
    return {
      label: item.toUpperCase(),
      value: item
    };
  });

  var toggleModalState = function toggleModalState() {
    setModalState(!modalState);
  };

  var filterItems = function filterItems(category) {
    if ('all' === category) {
      setListItems(importFiles);
      return;
    }

    var newItems = importFiles.filter(function (item) {
      return item.categories.includes(category);
    });
    setListItems(newItems);
  };

  var searchResult = function searchResult(e) {
    var inputValue = e.target.value.trim().toLowerCase();
    var newItems = importFiles.filter(function (item) {
      return item.import_file_name.toLowerCase().includes(inputValue);
    });
    setListItems(newItems);
  };

  var getClickedItem = function getClickedItem(builders, index, notice) {
    setSelectedIndex(index);
    setBuilderList(builders);
    setDemoNotice(notice);
  };

  var selectedBuilder = function selectedBuilder(builder) {
    setBuilder(builder);
  };

  var pluginInstall = function pluginInstall(selected, builder) {
    setSelectedDemo(selected);
    setModalState(!modalState);
    setFetching(true);
    setProgress(tutormate.plugin_progress);
    setPercentage(10);
    var data = new FormData();
    data.append('action', 'tutormate_install_plugins');
    data.append('security', tutormate.ajax_nonce);
    data.append('selected', selected);
    data.append('builder', builder);
    data.append('installing', true);
    doAjax(data);
  };

  var doAjax = function doAjax(data) {
    var request = new XMLHttpRequest();
    request.open("POST", tutormate.ajax_url);

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);

        if ('undefined' !== response.status && 'pluginInstalling' === response.status) {
          setProgress("Installing ".concat(response.plugin_name));
          setPercentage(20);
          setPluginName(response.plugin_name);
          setPluginProgress(30);
          setPlugins(response.plugins);
          var pluginData = new FormData();
          pluginData.append('action', 'tutormate_install_plugins');
          pluginData.append('security', tutormate.ajax_nonce);
          pluginData.append('selected', selectedDemo);
          pluginData.append('activating', false);
          doAjax(pluginData);
        } else if ('undefined' !== response.status && 'pluginActivating' === response.status) {
          setProgress("Activating ".concat(response.plugin_name));
          setPercentage(40);

          var _pluginData = new FormData();

          _pluginData.append('action', 'tutormate_install_plugins');

          _pluginData.append('security', tutormate.ajax_nonce);

          _pluginData.append('selected', selectedDemo);

          _pluginData.append('activating', true);

          _pluginData.append('activated', true);

          doAjax(_pluginData);
          setPluginName(response.plugin_name);
          setPluginProgress(60);
        } else if ('undefined' !== response.status && 'pluginSuccess' === response.status) {
          setProgress(tutormate.content_progress);
          setPercentage(60);
          setPluginProgress(100);
          var contentData = new FormData();
          contentData.append('action', 'tutormate_import_demo_data');
          contentData.append('security', tutormate.ajax_nonce);
          contentData.append('selected', selectedDemo);
          doAjax(contentData);
        } else if ('undefined' !== response.status && 'newAJAX' === response.status) {
          setProgress(tutormate.content_progress);
          setPercentage(60);

          var _contentData = new FormData();

          _contentData.append('action', 'tutormate_import_demo_data');

          _contentData.append('security', tutormate.ajax_nonce);

          _contentData.append('selected', selectedDemo);

          doAjax(_contentData);
        } else if ('undefined' !== response.status && 'customizerAJAX' === response.status) {
          setProgress(tutormate.customizer_progress);
          setPercentage(80);
          var customizerData = new FormData();
          customizerData.append('action', 'tutormate_import_customizer_data');
          customizerData.append('security', tutormate.ajax_nonce);
          customizerData.append('wp_customize', 'on');
          doAjax(customizerData);
        } else if ('undefined' !== response.status && 'afterAllImportAJAX' === response.status) {
          var afterImportData = new FormData();
          afterImportData.append('action', 'tutormate_after_import_data');
          afterImportData.append('security', tutormate.ajax_nonce);
          doAjax(afterImportData);
          setProgress(tutormate.all_done_progress);
          setPercentage(100);
          setTimeout(function () {
            setFetching(false);
          }, 1000);
          setTimeout(function () {
            setImportCompleted(true);
          }, 2000);
        }
      } else {
        console.log('In Progress.');
      }
    };

    request.send(data);
  }; // Component - After Import


  var AfterImport = function AfterImport() {
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-wrapper active"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-head"
    }, /*#__PURE__*/React.createElement("h3", null, __('All Done!', 'tutormate')), /*#__PURE__*/React.createElement("button", {
      className: "close-btn",
      onClick: function onClick() {
        return setImportCompleted(false);
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement("p", null, __('Demo import has been completed successfully!', 'tutormate')), /*#__PURE__*/React.createElement("p", null, __('Visit', 'tutormate'), " ", /*#__PURE__*/React.createElement("a", {
      href: tutormate.site_url,
      target: "__blank"
    }, __('Site', 'tutormate')), " ", __('or go to', 'tutormate'), " ", /*#__PURE__*/React.createElement("a", {
      href: tutormate.admin_url,
      target: "__blank"
    }, __('Dashboard', 'tutormate')))), /*#__PURE__*/React.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn outline-btn",
      onClick: function onClick() {
        return setImportCompleted(false);
      }
    }, "Close"))));
  }; // Component - PopupModal


  var PopupModal = function PopupModal(_ref) {
    var selectedIndex = _ref.selectedIndex;
    var elementorPlugins = builderplugins.elementor_plugins;
    var gutenbergPlugins = builderplugins.gutenberg_plugins;
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-wrapper ".concat(!modalState ? "" : "active")
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-head"
    }, /*#__PURE__*/React.createElement("h3", null, __('Select Builder', 'tutormate')), /*#__PURE__*/React.createElement("button", {
      className: "close-btn",
      onClick: function onClick() {
        return toggleModalState();
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement(_RadioField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      selected: builder,
      options: builderOptions,
      selectedBuilder: selectedBuilder
    }), /*#__PURE__*/React.createElement("div", {
      className: "pluginstatus"
    }, /*#__PURE__*/React.createElement("p", null, __('The following plugins will be installed and activated for this demo if not already available:', 'tutormate')), 'elementor' === builder && elementorPlugins && elementorPlugins.map(function (item, index) {
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(item.state),
        key: index
      }, /*#__PURE__*/React.createElement("strong", null, item.title), " ", /*#__PURE__*/React.createElement("span", null, item.state));
    }), 'gutenberg' === builder && gutenbergPlugins && gutenbergPlugins.map(function (item, index) {
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(item.state),
        key: index
      }, /*#__PURE__*/React.createElement("strong", null, item.title), " ", /*#__PURE__*/React.createElement("span", null, item.state));
    }))), demoNotice && /*#__PURE__*/React.createElement("div", {
      className: "notices"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, __('Important: ', 'tutormate')), /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: demoNotice
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      onClick: function onClick() {
        return toggleModalState();
      }
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: function onClick() {
        return pluginInstall(selectedIndex, builder);
      }
    }, __('Import Now', 'tutormate')))));
  }; // Component - ListItems


  var ListItems = function ListItems(_ref2) {
    var listItems = _ref2.listItems;
    return /*#__PURE__*/React.createElement("ul", {
      className: "list-container"
    }, listItems.length > 0 ? listItems.map(function (item, index) {
      var import_file_name = item.import_file_name,
          builders = item.builders,
          import_preview_image_url = item.import_preview_image_url,
          notice = item.notice,
          preview_url = item.preview_url;
      return /*#__PURE__*/React.createElement("li", {
        className: "single-item",
        key: index
      }, /*#__PURE__*/React.createElement("div", {
        className: "header"
      }, /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, import_file_name), /*#__PURE__*/React.createElement("div", {
        className: "icons"
      }, builders.map(function (builder, index) {
        return builder === 'gutenberg' ? /*#__PURE__*/React.createElement("img", {
          key: index,
          src: "".concat(tutormate.tutormate_url, "/assets/images/qubely.png"),
          alt: "icon"
        }) : /*#__PURE__*/React.createElement("img", {
          key: index,
          src: "".concat(tutormate.tutormate_url, "/assets/images/").concat(builder, ".png"),
          alt: "icon"
        });
      }))), /*#__PURE__*/React.createElement("figure", {
        className: "thumbnail"
      }, /*#__PURE__*/React.createElement("img", {
        src: import_preview_image_url,
        alt: import_file_name
      }), /*#__PURE__*/React.createElement("div", {
        className: "overlay"
      }, /*#__PURE__*/React.createElement("h4", null, __('Available for', 'tutormate')), /*#__PURE__*/React.createElement("div", null, builders.map(function (builder, index) {
        return /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "btn overlay-btn",
          key: index
        }, builder);
      })))), /*#__PURE__*/React.createElement("div", {
        className: "actions"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
        className: "preview-url btn btn-light",
        href: preview_url,
        target: "__blank"
      }, __('Preview', 'tutormate')), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-primary primary-btn",
        onClick: function onClick() {
          return toggleModalState();
        }
      }, /*#__PURE__*/React.createElement("span", {
        onClick: function onClick() {
          return getClickedItem(builders, index, notice);
        }
      }, __('Import', 'tutormate'))))));
    }) : /*#__PURE__*/React.createElement("li", {
      className: "no-list-found"
    }, __('Nothing Found', 'tutormate')));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "demo-importer-ui"
  }, /*#__PURE__*/React.createElement(PopupModal, {
    clickedItem: clickedItem,
    selectedIndex: selectedIndex
  }), fetching && /*#__PURE__*/React.createElement(_Installation__WEBPACK_IMPORTED_MODULE_0__["default"], {
    status: progress,
    percentage: percentage,
    plugins: plugins,
    pluginName: pluginName,
    pluginProgress: pluginProgress
  }), importCompleted && /*#__PURE__*/React.createElement(AfterImport, null), /*#__PURE__*/React.createElement("div", {
    className: "demo-importer-wrapper"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "header-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-version"
  }, /*#__PURE__*/React.createElement("img", {
    src: "".concat(tutormate.tutormate_url, "assets/images/tutor-starter-logo.png"),
    alt: "tutor starter logo"
  }), /*#__PURE__*/React.createElement("span", null, "\xA0 v", tutormate.theme_version)), /*#__PURE__*/React.createElement("p", null, __('Tutor LMS comes with a revolutionary drag & drop system to create resourceful courses. It’s feature-rich, yet easy to use. Our design is centered around enhancing your experience', 'tutormate'))), /*#__PURE__*/React.createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-filter"
  }, categories.map(function (category, index) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "filter-btn",
      key: index,
      onClick: function onClick() {
        return filterItems(category);
      }
    }, /*#__PURE__*/React.createElement("span", null, category));
  })), /*#__PURE__*/React.createElement("div", {
    className: "search-filter"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    name: "search-demos",
    placeholder: "Search for starter packs\u2026",
    onChange: searchResult
  }), /*#__PURE__*/React.createElement("img", {
    src: "".concat(tutormate.tutormate_url, "assets/images/search-icon.png"),
    style: {
      width: '14px',
      height: '14px'
    },
    alt: "icon"
  })))), /*#__PURE__*/React.createElement(ListItems, {
    listItems: listItems
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./react/src/components/Installation.js":
/*!**********************************************!*\
  !*** ./react/src/components/Installation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar */ "./react/src/components/ProgressBar.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = wp.element.useState;


var Installation = function Installation(_ref) {
  var status = _ref.status,
      percentage = _ref.percentage,
      plugins = _ref.plugins,
      pluginName = _ref.pluginName,
      pluginProgress = _ref.pluginProgress;

  var _useState = useState(pluginProgress),
      _useState2 = _slicedToArray(_useState, 2),
      circleProgress = _useState2[0],
      setCircleProgress = _useState2[1];

  console.log({
    plugins: plugins,
    pluginName: pluginName,
    pluginProgress: pluginProgress
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "installation-screen modal-wrapper active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement("span", null, "Hold on a moment"), " Your site is installing...")), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "installation-status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-status",
    style: {
      width: "".concat(percentage, "%"),
      opacity: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "percentage"
  }, percentage, "%")), /*#__PURE__*/React.createElement("div", {
    className: "plugin-status"
  }, plugins.map(function (plugin) {
    return /*#__PURE__*/React.createElement("div", {
      className: "plugin-item"
    }, pluginProgress < 100 ? /*#__PURE__*/React.createElement("svg", {
      id: "svg-circle"
    }, /*#__PURE__*/React.createElement("circle", {
      className: "bg",
      cx: "7",
      cy: "7",
      r: "7"
    }), /*#__PURE__*/React.createElement("circle", {
      style: {
        strokeDashoffset: "calc(var(--dashArr) - (var(--dashArr) * ".concat(pluginProgress, ") / 100)")
      },
      className: "fg",
      cx: "7",
      cy: "7",
      r: "7"
    })) : /*#__PURE__*/React.createElement("svg", {
      id: "svg-circle"
    }, /*#__PURE__*/React.createElement("circle", {
      className: "circle-full",
      cx: "7",
      cy: "7",
      r: "7",
      fill: "#5FAC23"
    }), /*#__PURE__*/React.createElement("path", {
      className: "check-mark",
      d: "M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, plugin.title ? plugin.title : "Loading ..."));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Installation);

/***/ }),

/***/ "./react/src/components/Preloader.js":
/*!*******************************************!*\
  !*** ./react/src/components/Preloader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar */ "./react/src/components/ProgressBar.js");


var Preloader = function Preloader(_ref) {
  var status = _ref.status,
      percentage = _ref.percentage;
  return /*#__PURE__*/React.createElement("div", {
    className: "svg-preloader"
  }, /*#__PURE__*/React.createElement("div", {
    className: "status-texts"
  }, status), /*#__PURE__*/React.createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    percentage: percentage
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Preloader);

/***/ }),

/***/ "./react/src/components/ProgressBar.js":
/*!*********************************************!*\
  !*** ./react/src/components/ProgressBar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ProgressBar = function ProgressBar(_ref) {
  var percentage = _ref.percentage;
  return /*#__PURE__*/React.createElement("div", {
    className: "progress-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-status",
    style: {
      width: "".concat(percentage, "%"),
      opacity: 1
    }
  })), 100 === percentage ? /*#__PURE__*/React.createElement("span", {
    className: "status-text"
  }, "Completed") : /*#__PURE__*/React.createElement("span", {
    className: "status-text"
  }, percentage, "%"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./react/src/components/RadioField.js":
/*!********************************************!*\
  !*** ./react/src/components/RadioField.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RadioField = function RadioField(_ref) {
  var selected = _ref.selected,
      options = _ref.options,
      selectedBuilder = _ref.selectedBuilder;

  var updateRadioValue = function updateRadioValue(event) {
    var radioInput = event.target.value;
    selectedBuilder(radioInput);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "radio-field-wrapper"
  }, options && options.map(function (option, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "radio-field-item"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "builder",
      id: option.value,
      value: option.value,
      checked: option.value === selected ? true : false,
      onChange: function onChange(event) {
        return updateRadioValue(event);
      }
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: option.value
    }, option.value === 'gutenberg' ? /*#__PURE__*/React.createElement("img", {
      src: "".concat(tutormate.tutormate_url, "/assets/images/qubely.png"),
      alt: "icon"
    }) : /*#__PURE__*/React.createElement("img", {
      src: "".concat(tutormate.tutormate_url, "/assets/images/").concat(option.value, ".png"),
      alt: "icon"
    }), /*#__PURE__*/React.createElement("span", null, option.value)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioField);

/***/ }),

/***/ "./react/src/demo-importer.js":
/*!************************************!*\
  !*** ./react/src/demo-importer.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.js */ "./react/src/components/App.js");
var render = wp.element.render;

render( /*#__PURE__*/React.createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_0__["default"], null), document.getElementById('demo-importer-id'));

/***/ }),

/***/ "./react/src/sass/app.scss":
/*!*********************************!*\
  !*** ./react/src/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./react/src/demo-importer.js ./react/src/sass/app.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/wp-tutormate/wp-content/plugins/tutormate/react/src/demo-importer.js */"./react/src/demo-importer.js");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/wp-tutormate/wp-content/plugins/tutormate/react/src/sass/app.scss */"./react/src/sass/app.scss");


/***/ })

/******/ });