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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./react/src/components/App.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./react/src/components/App.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --primary: #0071a1;\n    --default: #464646;\n    --lightgray: #cccccc;\n}\n\nbody {\n    background: #F4F7FC;\n    color: #000;\n    position: relative;\n}\n\nbutton {\n    cursor: pointer;\n    outline: none;\n}\n\n.header-top {\n\tmax-width: 498px;\n\tmargin: 0 auto;\n\ttext-align: center;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.57;\n    color: rgba(0, 0, 0, 0.6);\n    margin-bottom: 63px;\n}\n.header-top h2{\n    color: #0A083B;\n    margin-bottom: 10px;\n}\n\n.demo-importer-ui {\n    width: 100%;\n    padding: 30px;\n    position: relative;\n}\n\n.demo-importer-ui .btn {\n    text-decoration: none;\n    display: inline-block;\n    text-transform: capitalize;\n    outline: none;\n    border: 1px solid var(--lightgray);\n    color: #464646;\n    padding: 6px 13px;\n    border-radius: 4px;\n    transition: 0.2s linear;\n}\n\n.demo-importer-ui .btn.primary-btn {\n    background: var(--primary);\n    border: 1px solid var(--primary);\n    color: #fff;\n}\n\n.demo-importer-ui .btn.primary-btn:hover,\n.demo-importer-ui .btn.primary-btn:focus {\n    opacity: 0.85;\n}\n\n.demo-importer-ui .btn.outline-btn {\n    background: transparent;\n    border: 1px solid var(--primary);\n    color: var(--primary);\n}\n\n.demo-importer-wrapper header {\n\tposition: relative;\n\tz-index: 2;\n}\n\n.demo-importer-wrapper img {\n    width: 100%;\n    height: auto;\n    object-fit: cover;\n}\n\n.demo-importer-wrapper header h2 {\n    font-size: 25px;\n    margin-bottom: 20px;\n    text-align: center;\n}\n\n.nav-container {\n    background: #fff;\n    margin-bottom: 30px;\n    border-radius: 3px;\n    padding: 13px 20px;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr;\n}\n\n.nav-container .nav-filter {\n    display: flex;\n    flex-wrap: wrap;\n    list-style: none;\n    margin-bottom: 10px;\n}\n\n@media (min-width: 768px) {\n    .nav-container {\n        grid-template-columns: 4fr 1fr;\n    }\n    .nav-container .nav-filter {\n        margin-bottom: 0;\n    }\n\n    .nav-container .nav-filter .filter-btn:not(:first-child) {\n        margin-left: 15px;\n    }\n    .no-list-found {\n        grid-column: 2/3;\n    }\n}\n\n.nav-container .nav-filter .filter-btn {\n    text-decoration: none;\n    color: inherit;\n    cursor: pointer;\n    background: transparent;\n    outline: none;\n    border: none;\n    font-size: 1em;\n    text-transform: capitalize;\n    position: relative;\n    padding: 0px 10px;\n}\n\n.nav-container .nav-filter .filter-btn:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 3px;\n    bottom: calc(0% - 19px);\n    left: 0;\n    background: #303030;\n    opacity: 0;\n    transition: 0.2s linear;\n    transform: scaleX(0);\n}\n\n.nav-container .nav-filter .filter-btn:hover:after,\n.nav-container .nav-filter .filter-btn:focus:after {\n    opacity: 1;\n    transform: scaleX(1);\n}\n\n@media (max-width: 767px) {\n    .nav-container .nav-filter .filter-btn:after {\n        display: none;\n    }\n\n    .nav-container .nav-filter,\n    .nav-container .nav-filter .filter-btn {\n        display: block;\n    }\n    .nav-container .nav-filter .filter-btn {\n        margin-left: 0;\n        padding: 0;\n    }\n    .nav-container .nav-filter .filter-btn:not(:last-child) {\n        margin-bottom: 8px;\n    }\n}\n\n.search-filter {\n    z-index: 1;\n}\n\n.search-filter input[type=\"search\"] {\n    width: 100%;\n    height: auto;\n    padding: 5px;\n    border: 1px solid var(--lightgray);\n    border-radius: 3px;\n    outline: none;\n    transition: 0.2s linear;\n}\n.search-filter input[type=\"search\"]:hover,\n.search-filter input[type=\"search\"]:focus {\n    border-color: var(--primary);\n}\n\n.search-filter input[type=\"search\"]:focus {\n    box-shadow: 0 0 0 1px rgb(0 113 161 / 60%);\n}\n\ninput[type=\"search\" i]::-webkit-search-cancel-button {\n    cursor: pointer;\n}\n\n.list-container {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: grid;\n    grid-column-gap: 30px;\n    grid-row-gap: 30px;\n    animation: fade 0.6s linear;\n}\n\n@media (min-width: 768px) {\n    .list-container {\n        grid-template-columns: repeat(3, 1fr);\n    }\n}\n\n@keyframes fade {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.single-item .thumbnail {\n    border-radius: 3px 3px 0 0;\n    position: relative;\n    overflow: hidden;\n}\n\n.single-item .thumbnail .overlay {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: rgb(0 0 0 / 55%);\n    opacity: 0;\n    transition: opacity 0.3s linear;\n}\n\n.single-item:hover .overlay {\n    opacity: 1;\n}\n\n.single-item .thumbnail .overlay h4 {\n    font-size: 1.5em;\n    font-weight: 600;\n    color: #fff;\n    margin-bottom: 20px;\n}\n\n.single-item .thumbnail .overlay-btn {\n    color: #fff;\n    background: rgb(0 0 0 / 53%);\n    border: 1px solid rgb(255 255 255 / 25%);\n    cursor: text;\n}\n\n.single-item .thumbnail .overlay-btn:not(:last-child) {\n    margin-right: 10px;\n}\n\n.single-item .thumbnail .overlay h4 {\n    font-size: 1.5em;\n    font-weight: 600;\n    color: #fff;\n    margin-bottom: 15px;\n}\n\n.single-item .thumbnail img {\n    width: 100%;\n    height: 350px;\n}\n\n.single-item .actions {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 13px 15px 15px 15px;\n    background: #ffff;\n    border-radius: 0 0 3px 3px;\n    position: relative;\n    margin-top: -3px;\n}\n\n.single-item .actions .import-btn {\n    background: #0071a1;\n    border: 1px solid #0071a1;\n    color: #fff;\n}\n\n.single-item .actions .preview-url {\n    text-decoration: none;\n    margin-right: 5px;\n    padding: 5px 15px;\n    background: #ffffff;\n    border: 1px solid #0071a1;\n    border-radius: 3px;\n    color: #0071a1;\n}\n\n.single-item .actions .import-btn:hover,\n.single-item .thumbnail .overlay-btn:hover {\n    opacity: 0.8;\n}\n\n.no-list-found {\n    padding: 13px 15px 15px 15px;\n    background: #ffff;\n    border-radius: 3px;\n}\n\n/* Modal popup */\n.modal-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: rgb(0 0 0 / 80%);\n    padding: 30px;\n\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n\n    z-index: 0;\n    opacity: 0;\n}\n\n.modal-wrapper.active {\n    z-index: 10;\n    opacity: 1;\n}\n\n.modal-content {\n    background: #fff;\n    max-width: 450px;\n    border-radius: 5px;\n\n    animation: fade 0.4s linear;\n}\n\n.modal-wrapper.active .modal-content {\n    opacity: 1;\n    transform: translateY(0px);\n}\n\n/* Modal Content  */\n.modal-content > [class^=\"modal-\"] {\n    padding: 15px;\n}\n\n.modal-head {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.modal-head h3 {\n    margin: 0.2rem 1rem;\n}\n\n.modal-content .close-btn {\n    background: transparent;\n    border: none;\n    font-size: 2em;\n    line-height: 0.6;\n    font-family: sans-serif;\n    font-weight: 300;\n    transform: rotate(45deg);\n}\n\n.modal-content .modal-body {\n    border-top: 1px solid #dadada;\n    border-bottom: 1px solid #dadada;\n    padding: 30px;\n    text-align: center;\n}\n\n.modal-content .modal-body .components-radio-control{\n    text-align: left;\n}\n\n.modal-content .modal-body .components-radio-control__input[type=\"radio\"]:checked::before {\n    width: 2px;\n    height: 2px;\n    margin: 3px;\n}\n\n.modal-content .modal-body .components-base-control__label {\n    font-size: 18px;\n}\n\n.modal-content .modal-body p {\n    line-height: 1.5;\n    margin-bottom: 5px;\n    text-align: left;\n}\n\n.modal-content .modal-body strong {\n    display: block;\n    text-transform: capitalize;\n    text-align: left;\n}\n\n.modal-content .modal-body strong:not(:last-child):after {\n    content: \", \";\n}\n\n.modal-content .notices {\n    padding: 10px 25px;\n    margin-left: 5px;\n    border-bottom: 1px solid #cccccc;\n}\n\n.modal-footer {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.modal-footer .btn {\n    padding: 5px 10px;\n}\n.modal-footer .btn:not(:last-child) {\n    margin-right: 10px;\n}\n\n/* ProgressBar */\n.progress-wrapper {\n    max-width: 350px;\n    width: 100%;\n    margin-top: 15px;\n    text-align: center;\n    font-size: 14px;\n}\n\n.progress {\n    background-color: transparent;\n    border-radius: 20px;\n    margin-bottom: 15px;\n    height: 10px;\n    position: relative;\n    overflow: hidden;\n    box-shadow: inset 0px 0px 2px 1px rgb(0 0 0 / 5%);\n}\n\n.progress-status {\n    --color-white: #ffffff;\n    background: var(--color-white);\n    border-radius: 20px;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    height: 100%;\n    width: 0;\n    transition: 0.2s linear;\n}\n\nspan.status-text {\n    color: #ffffff;\n    margin-top: 15px;\n}\n\n/* Preloader */\n.svg-preloader {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgb(0 0 0 / 0.7);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    z-index: 9;\n}\n\n.svg-preloader svg path {\n    fill: transparent;\n    stroke-width: 0.1px;\n    --stroke: 30;\n    stroke: #fff;\n    stroke-dasharray: var(--stroke);\n    stroke-dashoffset: var(--stroke);\n}\n.svg-preloader svg path {\n    animation: preLoading 1.5s linear infinite;\n}\n.svg-preloader .status-texts {\n    color: #ffffff;\n    margin-top: 10px;\n    font-size: 18px;\n}\n\n@keyframes preLoading {\n    0% {\n        stroke-dashoffset: 80;\n        fill: #fff;\n    }\n    40% {\n        stroke-dashoffset: 40;\n        fill: transparent;\n    }\n    80% {\n        stroke-dashoffset: 0;\n        fill: transparent;\n    }\n    100% {\n        stroke-dashoffset: 0;\n        fill: #fff;\n    }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./react/src/components/App.css":
/*!**************************************!*\
  !*** ./react/src/components/App.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./react/src/components/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./react/src/components/App.js":
/*!*************************************!*\
  !*** ./react/src/components/App.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./react/src/components/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloader */ "./react/src/components/preloader.js");
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
    doAjax(data);
  };

  var doAjax = function doAjax(data) {
    var request = new XMLHttpRequest();
    request.open("POST", tutormate.ajax_url);

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);

        if ('undefined' !== response.status && 'pluginSuccess' === response.status) {
          setProgress(tutormate.content_progress);
          setPercentage(60);
          var contentData = new FormData();
          contentData.append('action', 'tutormate_import_demo_data');
          contentData.append('security', tutormate.ajax_nonce);
          contentData.append('selected', selectedDemo);
          doAjax(contentData);
        } else if ('undefined' !== response.status && 'customizerAJAX' === response.status) {
          setProgress(tutormate.customizer_progress);
          setPercentage(90);
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
      className: "btn outline-btn",
      onClick: function onClick() {
        return toggleModalState();
      }
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn primary-btn",
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
      }, /*#__PURE__*/React.createElement("figure", {
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
      }, /*#__PURE__*/React.createElement("h4", null, import_file_name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
        className: "preview-url",
        href: preview_url,
        target: "__blank"
      }, __('Preview', 'tutormate')), /*#__PURE__*/React.createElement("button", {
        className: "btn primary-btn",
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
  }), fetching && /*#__PURE__*/React.createElement(_preloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    status: progress,
    percentage: percentage
  }), importCompleted && /*#__PURE__*/React.createElement(AfterImport, null), /*#__PURE__*/React.createElement("div", {
    className: "demo-importer-wrapper"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "header-top"
  }, /*#__PURE__*/React.createElement("h2", null, __('Welcome to Tutor Starter Demo Importer', 'tutormate')), /*#__PURE__*/React.createElement("p", null, __('Tutor LMS comes with a revolutionary drag & drop system to create resourceful courses. It’s feature-rich, yet easy to use. Our design is centered around enhancing your experience', 'tutormate'))), /*#__PURE__*/React.createElement("div", {
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

/***/ 0:
/*!******************************************!*\
  !*** multi ./react/src/demo-importer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Web/Projects/Local Sites/tutorstarter/app/public/wp-content/plugins/tutormate/react/src/demo-importer.js */"./react/src/demo-importer.js");


/***/ })

/******/ });