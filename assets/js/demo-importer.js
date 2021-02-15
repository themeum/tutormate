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
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preloader */ "./react/src/components/preloader.js");
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
        } else if ('undefined' !== response.status && 'pluginSuccess' === response.status) {
          setProgress(tutormate.content_progress);
          setPercentage(60);
          var contentData = new FormData();
          contentData.append('action', 'tutormate_import_demo_data');
          contentData.append('security', tutormate.ajax_nonce);
          contentData.append('selected', selectedDemo);
          doAjax(contentData);
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
        console.log('Something went wrong. Please try again.');
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
    }, /*#__PURE__*/React.createElement("h3", null, __('Demo Details', 'tutormate')), /*#__PURE__*/React.createElement("button", {
      className: "close-btn",
      onClick: function onClick() {
        return toggleModalState();
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement(RadioControl, {
      label: __('Select Builder', 'tutormate'),
      selected: builder,
      options: builderOptions,
      onChange: function onChange(value) {
        return selectedBuilder(value);
      }
    }), /*#__PURE__*/React.createElement("p", null, __('The following plugins will be installed and activated for this demo if not already available:', 'tutormate')), 'elementor' === builder && elementorPlugins && elementorPlugins.map(function (item, index) {
      return /*#__PURE__*/React.createElement("strong", {
        key: index
      }, item.title, " - ", item.state);
    }), 'gutenberg' === builder && gutenbergPlugins && gutenbergPlugins.map(function (item, index) {
      return /*#__PURE__*/React.createElement("strong", {
        key: index
      }, item.title, " - ", item.state);
    })), demoNotice && /*#__PURE__*/React.createElement("div", {
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
    console.log(listItems);
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
          src: "".concat(tutormate.tutormate_url, "/assets/images/qubely.png"),
          alt: "icon"
        }) : /*#__PURE__*/React.createElement("img", {
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
  }), fetching && /*#__PURE__*/React.createElement(_preloader__WEBPACK_IMPORTED_MODULE_0__["default"], {
    status: progress,
    percentage: percentage
  }), importCompleted && /*#__PURE__*/React.createElement(AfterImport, null), /*#__PURE__*/React.createElement("div", {
    className: "demo-importer-wrapper"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "header-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-version"
  }, /*#__PURE__*/React.createElement("img", {
    src: "".concat(tutormate.tutormate_url, "assets/images/tutor-starter-logo.png"),
    alt: "tutor starter logo"
  }), /*#__PURE__*/React.createElement("span", null, "\xA0 v", '1.0.0')), /*#__PURE__*/React.createElement("p", null, __('Tutor LMS comes with a revolutionary drag & drop system to create resourceful courses. It’s feature-rich, yet easy to use. Our design is centered around enhancing your experience', 'tutormate'))), /*#__PURE__*/React.createElement("div", {
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

/***/ "./react/src/components/preloader.js":
/*!*******************************************!*\
  !*** ./react/src/components/preloader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progressBar */ "./react/src/components/progressBar.js");


var Preloader = function Preloader(_ref) {
  var status = _ref.status,
      percentage = _ref.percentage;
  return /*#__PURE__*/React.createElement("div", {
    className: "svg-preloader"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "150",
    height: "150",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.0235 12.0699C9.47376 7.00699 5.59072 4.78896 0.163818 5.31936C0.163818 3.70406 0.163818 2.13697 0.163818 0.377015C8.04686 3.14955 15.9065 3.14955 23.8363 0.304688C23.8363 2.01643 23.8363 3.58351 23.8363 5.29525C21.3334 5.00595 18.9942 5.34347 16.8188 6.57303C14.6434 7.80259 13.1229 9.65899 12.0235 12.0699Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.2419 15.5432C11.3104 15.9115 11.5646 16.2515 11.9378 16.2844C12.4683 16.3312 12.7358 16.0446 12.8421 15.2042C13.4971 9.97255 17.848 6.38031 22.8304 6.81427C23.6258 6.8866 23.9766 7.10358 23.9766 8.01972C24 10.8164 23.9532 13.5648 22.7135 16.1445C20.3041 21.2074 15.2281 24.0281 10.1521 23.1361C4.93571 22.244 0.748576 17.6874 0.140389 12.1665C3.81768e-05 10.8164 0.0936054 9.44216 3.81838e-05 8.06794C-0.0467454 7.1518 0.350915 6.91071 1.14624 6.83838C5.94156 6.40442 10.269 9.8279 11.0878 14.7461C11.1405 15.0181 11.1933 15.2823 11.2419 15.5432ZM20.0234 12.1424C20.0702 11.1298 19.3217 10.2619 18.3626 10.1895C17.3802 10.1172 16.538 10.8646 16.4445 11.8772C16.3509 12.9621 17.1228 13.8541 18.1521 13.8782C19.1345 13.9264 19.9533 13.1549 20.0234 12.1424ZM5.80121 13.9023C6.78366 13.9023 7.57898 13.0826 7.60238 12.07C7.62577 11.0092 6.76027 10.1654 5.73103 10.2136C4.74858 10.2619 4.00004 11.0816 4.02343 12.1183C4.02343 13.1308 4.79536 13.9264 5.80121 13.9023Z"
  })), /*#__PURE__*/React.createElement("div", {
    className: "status-texts"
  }, status), /*#__PURE__*/React.createElement(_progressBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    percentage: percentage
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Preloader);

/***/ }),

/***/ "./react/src/components/progressBar.js":
/*!*********************************************!*\
  !*** ./react/src/components/progressBar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ProgressBar = function ProgressBar(_ref) {
  var percentage = _ref.percentage;
  return /*#__PURE__*/React.createElement("div", {
    className: "progress-wrapper",
    style: {
      marginBottom: "20px"
    }
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

__webpack_require__(/*! /Users/zaman/Local Sites/tutorstarter/app/public/wp-content/plugins/tutormate/react/src/demo-importer.js */"./react/src/demo-importer.js");
module.exports = __webpack_require__(/*! /Users/zaman/Local Sites/tutorstarter/app/public/wp-content/plugins/tutormate/react/src/sass/app.scss */"./react/src/sass/app.scss");


/***/ })

/******/ });