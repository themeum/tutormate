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
exports.push([module.i, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n:root {\n\t--primary: #0071a1;\n\t--default: #464646;\n\t--lightgray: #cccccc;\n}\n\nbody {\n\tbackground: #f1f1f1;\n\tcolor: #000;\n\tposition: relative;\n}\n\nbutton {\n\tcursor: pointer;\n\toutline: none;\n}\n.demo-importer-ui {\n\twidth: 100%;\n\tpadding: 30px;\n\tposition: relative;\n}\n\n.demo-importer-ui .btn {\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\ttext-transform: capitalize;\n\toutline: none;\n\tborder: 1px solid var(--lightgray);\n\tcolor: #464646;\n\tpadding: 6px 13px;\n\tborder-radius: 4px;\n\ttransition: 0.2s linear;\n}\n\n.demo-importer-ui .btn.primary-btn {\n\tbackground: var(--primary);\n\tborder: 1px solid var(--primary);\n\tcolor: #fff;\n}\n\n.demo-importer-ui .btn.primary-btn:hover,\n.demo-importer-ui .btn.primary-btn:focus {\n\topacity: 0.85;\n}\n\n.demo-importer-ui .btn.outline-btn {\n\tbackground: transparent;\n\tborder: 1px solid var(--primary);\n\tcolor: var(--primary);\n}\n\n.demo-importer-wrapper img {\n\twidth: 100%;\n\theight: auto;\n\tobject-fit: cover;\n}\n\n.demo-importer-wrapper header h3 {\n\tmargin-bottom: 20px;\n}\n\n.nav-container {\n\tbackground: #fff;\n\tmargin-bottom: 30px;\n\tborder-radius: 3px;\n\tpadding: 13px 20px;\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-template-columns: 1fr;\n}\n\n.nav-container .nav-filter {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tlist-style: none;\n\tmargin-bottom: 10px;\n}\n\n@media (min-width: 768px) {\n\t.nav-container {\n\t\tgrid-template-columns: 4fr 1fr;\n\t}\n\t.nav-container .nav-filter {\n\t\tmargin-bottom: 0;\n\t}\n\n\t.nav-container .nav-filter .filter-btn:not(:first-child) {\n\t\tmargin-left: 15px;\n\t}\n\t.no-list-found {\n\t\tgrid-column: 2/3;\n\t}\n}\n\n.nav-container .nav-filter .filter-btn {\n\ttext-decoration: none;\n\tcolor: inherit;\n\tcursor: pointer;\n\tbackground: transparent;\n\toutline: none;\n\tborder: none;\n\tfont-size: 1em;\n\ttext-transform: capitalize;\n\tposition: relative;\n\tpadding: 0px 10px;\n}\n\n.nav-container .nav-filter .filter-btn:after {\n\tcontent: \"\";\n\tposition: absolute;\n\twidth: 100%;\n\theight: 3px;\n\tbottom: calc(0% - 19px);\n\tleft: 0;\n\tbackground: #303030;\n\topacity: 0;\n\ttransition: 0.2s linear;\n\ttransform: scaleX(0);\n}\n\n.nav-container .nav-filter .filter-btn:hover:after,\n.nav-container .nav-filter .filter-btn:focus:after {\n\topacity: 1;\n\ttransform: scaleX(1);\n}\n\n@media (max-width: 767px) {\n\t.nav-container .nav-filter .filter-btn:after {\n\t\tdisplay: none;\n\t}\n\n\t.nav-container .nav-filter,\n\t.nav-container .nav-filter .filter-btn {\n\t\tdisplay: block;\n\t}\n\t.nav-container .nav-filter .filter-btn {\n\t\tmargin-left: 0;\n\t\tpadding: 0;\n\t}\n\t.nav-container .nav-filter .filter-btn:not(:last-child) {\n\t\tmargin-bottom: 8px;\n\t}\n}\n\n.search-filter input[type=\"search\"] {\n\twidth: 100%;\n\theight: 30px;\n\tpadding: 5px;\n\tborder: 1px solid var(--lightgray);\n\tborder-radius: 3px;\n\toutline: none;\n\ttransition: 0.2s linear;\n}\n.search-filter input[type=\"search\"]:hover,\n.search-filter input[type=\"search\"]:focus {\n\tborder-color: var(--primary);\n}\n\n.search-filter input[type=\"search\"]:focus {\n\tbox-shadow: 0 0 0 1px rgb(0 113 161 / 60%);\n}\n\ninput[type=\"search\" i]::-webkit-search-cancel-button {\n\tcursor: pointer;\n}\n\n.list-container {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tdisplay: grid;\n\tgrid-column-gap: 30px;\n\tgrid-row-gap: 30px;\n\tanimation: fade 0.6s linear;\n}\n\n@media (min-width: 768px) {\n\t.list-container {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n}\n\n@keyframes fade {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n.single-item .thumbnail {\n\tborder-radius: 3px 3px 0 0;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.single-item .thumbnail .overlay {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground: rgb(0 0 0 / 55%);\n\topacity: 0;\n\ttransition: opacity 0.3s linear;\n}\n\n.single-item:hover .overlay {\n\topacity: 1;\n}\n\n.single-item .thumbnail .overlay h4 {\n\tfont-size: 1.5em;\n\tfont-weight: 600;\n\tcolor: #fff;\n\tmargin-bottom: 20px;\n}\n\n.single-item .thumbnail .overlay-btn {\n\tcolor: #fff;\n\tbackground: rgb(0 0 0 / 53%);\n\tborder: 1px solid rgb(255 255 255 / 25%);\n}\n\n.single-item .thumbnail .overlay-btn:not(:last-child) {\n\tmargin-right: 10px;\n}\n\n.single-item .thumbnail .overlay h4 {\n\tfont-size: 1.5em;\n\tfont-weight: 600;\n\tcolor: #fff;\n\tmargin-bottom: 15px;\n}\n\n.single-item .thumbnail img{\n\twidth: 100%;\n\theight: auto;\n}\n\n.single-item .actions {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 13px 15px 15px 15px;\n\tbackground: #ffff;\n\tborder-radius: 0 0 3px 3px;\n\tposition: relative;\n\tmargin-top: -3px;\n}\n\n.single-item .actions .import-btn {\n\tbackground: #0071a1;\n\tborder: 1px solid #0071a1;\n\tcolor: #fff;\n}\n\n.single-item .actions .import-btn:hover,\n.single-item .thumbnail .overlay-btn:hover {\n\topacity: 0.8;\n}\n\n.no-list-found {\n\tpadding: 13px 15px 15px 15px;\n\tbackground: #ffff;\n\tborder-radius: 3px;\n}\n\n/* Modal popup */\n.modal-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground: rgb(0 0 0 / 80%);\n\tpadding: 30px;\n\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\n\tz-index: 0;\n\topacity: 0;\n}\n\n.modal-wrapper.active {\n\tz-index: 10;\n\topacity: 1;\n}\n\n.modal-content {\n\tbackground: #fff;\n\tmax-width: 450px;\n\tborder-radius: 5px;\n\n\tanimation: fade 0.4s linear;\n}\n\n.modal-wrapper.active .modal-content {\n\topacity: 1;\n\ttransform: translateY(0px);\n}\n\n/* Modal Content  */\n.modal-content > [class^=\"modal-\"] {\n\tpadding: 15px;\n}\n\n.modal-head {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.modal-content .close-btn {\n\tbackground: transparent;\n\tborder: none;\n\tfont-size: 2em;\n\tline-height: 0.6;\n\tfont-family: sans-serif;\n\tfont-weight: 300;\n\ttransform: rotate(45deg);\n}\n\n.modal-content .modal-body {\n\tborder-top: 1px solid #dadada;\n\tborder-bottom: 1px solid #dadada;\n\tpadding: 30px;\n\ttext-align: center;\n}\n\n.modal-content .modal-body p {\n\tline-height: 1.5;\n\tmargin-bottom: 5px;\n}\n\n.modal-content .modal-body strong {\n\tdisplay: block;\n\ttext-transform: capitalize;\n}\n\n.modal-content .modal-body strong:not(:last-child):after {\n\tcontent: \", \";\n}\n\n.modal-footer {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n}\n\n.modal-footer .btn {\n\tpadding: 5px 10px;\n}\n.modal-footer .btn:not(:last-child) {\n\tmargin-right: 10px;\n}\n\n/* ProgressBar */\n.progress-wrapper {\n\tmax-width: 350px;\n\ttext-align: center;\n\tfont-size: 14px;\n}\n\n.progress {\n\tbackground-color: #d8d8d8;\n\tborder-radius: 20px;\n\tmargin-bottom: 5px;\n\theight: 10px;\n\tposition: relative;\n\toverflow: hidden;\n\tbox-shadow: inset 0px 0px 2px 1px rgb(0 0 0 / 5%);\n}\n\n.progress-status {\n\t--color-1: #03a9f4;\n\t--color-2: #da00ff;\n\t--color-3: #e91e63;\n\tbackground: linear-gradient(to right, var(--color-1), var(--color-2), var(--color-3));\n\tborder-radius: 20px;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 0;\n}", ""]);

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
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressBar */ "./react/src/components/progressBar.js");
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dummyData */ "./react/src/components/dummyData.js");
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

var useState = wp.element.useState;



var importFiles = tutormate.import_files;
var allCategories = ["all"].concat(_toConsumableArray(new Set(_dummyData__WEBPACK_IMPORTED_MODULE_2__["dummyData"].map(function (item) {
  return item.category;
}).flat())));

function App() {
  var _useState = useState(_dummyData__WEBPACK_IMPORTED_MODULE_2__["dummyData"]),
      _useState2 = _slicedToArray(_useState, 2),
      listItems = _useState2[0],
      setListItems = _useState2[1];

  var _useState3 = useState(allCategories),
      _useState4 = _slicedToArray(_useState3, 2),
      categories = _useState4[0],
      setCategories = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      modalState = _useState6[0],
      setModalState = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      clickedItem = _useState8[0],
      setClickedItem = _useState8[1];

  var toggleModalState = function toggleModalState() {
    setModalState(!modalState);
  };

  var getClickedItem = function getClickedItem(plugins) {
    setClickedItem(plugins);
  };

  var filterItems = function filterItems(category) {
    if (category === "all") {
      setListItems(_dummyData__WEBPACK_IMPORTED_MODULE_2__["dummyData"]);
      return;
    }

    var newItems = _dummyData__WEBPACK_IMPORTED_MODULE_2__["dummyData"].filter(function (item) {
      return item.category.includes(category);
    });
    setListItems(newItems);
  };

  var searchResult = function searchResult(e) {
    var inputValue = e.target.value.trim().toLowerCase();
    var newItems = _dummyData__WEBPACK_IMPORTED_MODULE_2__["dummyData"].filter(function (item) {
      return item.title.toLowerCase().includes(inputValue);
    });
    setListItems(newItems);
  }; // Component - PopupModal


  var PopupModal = function PopupModal(_ref) {
    var clickedItem = _ref.clickedItem;
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-wrapper ".concat(!modalState ? "" : "active")
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-head"
    }, /*#__PURE__*/React.createElement("h3", null, "Required Plugins"), /*#__PURE__*/React.createElement("button", {
      className: "close-btn",
      onClick: function onClick() {
        return toggleModalState();
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement("p", null, "The follow plugins will be installed and activated for this demo if not already available."), clickedItem && clickedItem.map(function (item, index) {
      return /*#__PURE__*/React.createElement("strong", {
        key: index
      }, item);
    })), /*#__PURE__*/React.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn outline-btn",
      onClick: function onClick() {
        return toggleModalState();
      }
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn primary-btn"
    }, "Import"))));
  }; // Component - ListItems


  var ListItems = function ListItems(_ref2) {
    var listItems = _ref2.listItems;
    return /*#__PURE__*/React.createElement("ul", {
      className: "list-container"
    }, listItems.length > 0 ? listItems.map(function (item, index) {
      var title = item.title,
          available = item.available,
          imgUrl = item.imgUrl,
          id = item.id,
          plugins = item.plugins;
      return /*#__PURE__*/React.createElement("li", {
        className: "single-item",
        key: index
      }, /*#__PURE__*/React.createElement("figure", {
        className: "thumbnail"
      }, /*#__PURE__*/React.createElement("img", {
        src: imgUrl,
        alt: title
      }), /*#__PURE__*/React.createElement("div", {
        className: "overlay"
      }, /*#__PURE__*/React.createElement("h4", null, "Available for"), /*#__PURE__*/React.createElement("div", null, available.map(function (btn) {
        return /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "btn overlay-btn",
          key: Math.random(),
          onClick: function onClick() {
            return toggleModalState();
          }
        }, /*#__PURE__*/React.createElement("span", {
          onClick: function onClick() {
            return getClickedItem(plugins);
          }
        }, btn));
      })))), /*#__PURE__*/React.createElement("div", {
        className: "actions"
      }, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        className: "btn primary-btn",
        onClick: function onClick() {
          return toggleModalState();
        }
      }, /*#__PURE__*/React.createElement("span", {
        onClick: function onClick() {
          return getClickedItem(plugins);
        }
      }, "Import")))));
    }) : /*#__PURE__*/React.createElement("li", {
      className: "no-list-found"
    }, "Nothing Found"));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "demo-importer-ui"
  }, /*#__PURE__*/React.createElement(_progressBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(PopupModal, {
    clickedItem: clickedItem
  }), /*#__PURE__*/React.createElement("div", {
    className: "tutor-demo-importer"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to One Click Demo Importer "), /*#__PURE__*/React.createElement("div", {
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
    placeholder: "Search demos",
    onChange: searchResult
  })))), /*#__PURE__*/React.createElement(ListItems, {
    listItems: listItems
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./react/src/components/dummyData.js":
/*!*******************************************!*\
  !*** ./react/src/components/dummyData.js ***!
  \*******************************************/
/*! exports provided: dummyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyData", function() { return dummyData; });
var dummyData = [{
  id: "demo1",
  title: "Demo 1",
  category: ["business"],
  available: ["gutenberg", "elementor"],
  imgUrl: "http://placehold.it/350x250",
  plugins: ["qubely", "elementor"]
}, {
  id: "demo2",
  title: "Demo 2",
  category: ["business", "blog"],
  available: ["gutenberg"],
  imgUrl: "http://placehold.it/350x250",
  plugins: ["qubely"]
}, {
  id: "demo3",
  title: "Demo 3",
  category: ["agency"],
  available: ["gutenberg", "elementor"],
  imgUrl: "http://placehold.it/350x250",
  plugins: ["qubely", "elementor"]
}, {
  id: "demo4",
  title: "Demo 4",
  category: ["portfolio"],
  available: ["gutenberg"],
  imgUrl: "http://placehold.it/350x250",
  plugins: ["qubely"]
}, {
  id: "demo5",
  title: "Demo 5",
  category: ["blog"],
  available: ["gutenberg", "elementor"],
  imgUrl: "http://placehold.it/350x250",
  plugins: ["qubely", "elementor"]
}, {
  id: "demo6",
  title: "Demo 5",
  category: ["agency", "portfolio"],
  available: ["elementor"],
  imgUrl: "http://placehold.it/350x250",
  plugins: ["elementor"]
}, {
  id: "demo7",
  title: "Demo 7",
  category: ["agency", "education"],
  available: ["elementor"],
  imgUrl: "http://placehold.it/350x250",
  plugins: ["elementor"]
}];

/***/ }),

/***/ "./react/src/components/progressBar.js":
/*!*********************************************!*\
  !*** ./react/src/components/progressBar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;

var ProgressBar = function ProgressBar() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  useEffect(function () {
    var interval = setInterval(function () {
      setValue(function (oldValue) {
        var newValue = oldValue + 1;

        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 10);
  }, []);
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
      width: "".concat(value, "%"),
      opacity: 1
    }
  })), value === 100 ? /*#__PURE__*/React.createElement("span", null, "Completed") : /*#__PURE__*/React.createElement("span", null, value, "%"));
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