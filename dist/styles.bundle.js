webpackJsonp([2,4],{

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(707);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(985)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(708)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Merriweather|Abril+Fatface);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\np, .navbar-brand {\n\tfont-family: 'Merriweather', serif;\n}\np {\n    line-height: 1.75em;\n    margin-bottom: 2em;\n}\n.dayImage {\n\tmax-height: 400px;\n\tmax-width: 90%;\n\ttext-align: center;\n\tdisplay: block;\n\tmargin: 0 auto;\n\tmargin-bottom: 1em;\n}\n.dayCaption {\n\tmax-width: 80%;\n\tfont-size: 1.6em;\n\tcolor: #585858;\n\ttext-align: center;\n\tdisplay: block;\n\tmargin: 0 auto;\n}\n.navbar-right {\n\tmargin-right: 0px;\n}\n.imageNavigation {\n\tposition: relative;\n}\n.imageNavigation button {\n\twidth: 100px;\n\theight: 100px;\n\tborder-radius: 20px;\n\tbackground: #F8F8F8;\n\tfont-size: 2.4em;\n\tborder: 0;\n\ttop: 200px;\n\tposition: absolute;\n\tcolor: #ccc;\n}\n.imageNavigation button.btn-previous {\n\tleft: 0;\n\tborder-top-left-radius: 0;\n\tborder-bottom-left-radius: 0;\n}\n.imageNavigation button.btn-next {\n\tright: 0;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n}\n\n.l-grid {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.l-grid > li {\n  display: inline-block;\n  margin: 0 0 10px 10px;\n  \n  /* ie7 hack */ \n  *display: inline;\n  *zoom: 1;\n}\n.month-grid {\n\ttext-align: center;\n}\n.month-grid li {\n\twidth: 120px;\n\theight: 120px;\n\ttext-align: center;\n\tposition: relative;\n\tmargin: 0px 5px 15px;\n\tvertical-align: top;\n    border-top: 1px solid #dedede;\n    border-right: 1px solid #dedede;\n}\n.month-grid li.selected {\n\tbackground-color: rgba(92, 184, 92, 0.18);\n\tborder: 1px solid #5cb85c;\n    border-radius: 12px;\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.month-grid img {\n\tmax-height: 90%;  \n    max-width: 90%; \n    width: auto;\n    height: auto;\n    position: absolute;  \n    top: 0;  \n    bottom: 0;  \n    left: 0;  \n    right: 0;  \n    margin: auto;\n}\n.month-grid .label {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    font-size: .85em;\n    z-index: 100;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n}\n.month-selector {\n\ttext-align: center;\n}\n.month-selector li:hover {\n\tcursor: pointer;\n\tbackground-color: #efefef;\n}\n.navbar-brand:hover {\n\tcursor: pointer;\n}\n.twitter-image {\n\tborder: 0;\n\tbackground-color: #009FF4;\n}\n.twitter-image img {\n\tposition: relative;\n\ttop: -1px;\n}\n.feature-story img {\n\tmax-width: 200px;\n\tdisplay: block;\n\tmargin: 0px 0px 20px 0px;\n}\n.row.buffer_bottom {\n\tmargin-bottom: 20px;\n}\nh2 {\n\tfont-family: 'Abril Fatface', sans-serif;\n    font-size: 3em;\n    margin-top: 0px;\n}\nh3 {\n\tfont-family: 'Merriweather', sans-serif;\n\ttext-transform: uppercase;\n\tcolor: #666;\n\tfont-size: 1.2em;\n\tfont-weight: normal;\n}\nh3 + h2 {\n\tmargin-top: -10px;\n}\n.main-story img {\n\tmax-width: 200px;\n\tmax-height: 200px;\n}\n\ninput.disabled {\n  opacity: 0.65; \n  cursor: not-allowed !important;\n}\n#search {\n    position: relative;\n}\n#search input[type=\"search\"] {\n    color: #333;\n    font-size: 5em;\n    font-weight: 300;\n    text-align: center;\n    border: 0px;\n    outline: none;\n    border-bottom: 5px solid #dedede;\n    width: 100%;\n}\n#search .clear-search {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0.2em;\n\tfont-size: 6em;\n\tcolor: #DEDEDE;\n}\n#search .clear-search:hover {\n\tcursor: pointer;\n}\n#search input[type=\"search\"]::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #dedede;\n}\n#search input[type=\"search\"]::-moz-placeholder { /* Firefox 19+ */\n  color: #dedede;\n}\n#search input[type=\"search\"]:-ms-input-placeholder { /* IE 10+ */\n  color: #dedede;\n}\n#search input[type=\"search\"]:-moz-placeholder { /* Firefox 18- */\n  color: #dedede;\n}\n.copyright {\n\ttext-align: center;\n\tmargin-top: 20px;\n\tpadding-top: 20px;\n\tfont-size: .9em;\n\tmargin-bottom: 20px;\n\tborder-top: 1px solid #dedede;\n}\n\n@media only screen and (max-width: 991px) {\n    .feature-story img {\n    \tfloat: right;\n    }\n    .imageNavigation button {\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tborder-radius: 10px;\n\t\tbackground: #F8F8F8;\n\t\tfont-size: 2.4em;\n\t\tborder: 0;\n\t\ttop: 0px;\n\t\tposition: absolute;\n\t\tcolor: #ccc;\n\t\tbox-shadow: 0 0 20px #666;\n\t}\n\t.nav>li {\n\t    float: left;\n\t}\n\t.nav.navbar-right {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t}\n\t.nav.navbar-right>li {\n\t    float: right;\n\t}\n}\n\n@media only screen and (max-width: 550px) {\n\t.feature-story {\n\t\ttext-align: center;\n\t}\n    .feature-story img {\n    \tdisplay: block;\n    \tfloat: none;\n    \tmargin: 0 auto;\n    }\n    .navbar-brand {\n    \twidth: 100%;\n    \ttext-align: center;\n    }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 708:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
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


/***/ }),

/***/ 985:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(436);


/***/ })

},[989]);
//# sourceMappingURL=styles.bundle.map