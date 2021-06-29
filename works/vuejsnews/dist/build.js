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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(128)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(119)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(127)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(125)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(104),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__(129)
} else {
  module.exports = require('./vue.common.dev.js')
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(15);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* routes */],
  base: 'https://ivanshavliuga.github.io/works/vuejsnews/'
});

const eventBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();
/* harmony export (immutable) */ __webpack_exports__["eventBus"] = eventBus;


const vm = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  router,
  render: h => h(__WEBPACK_IMPORTED_MODULE_2__App_vue___default.a)
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(118)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(112)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(88),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(92),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(116)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(110)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(86),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Infouser_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Infouser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Infouser_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Messages_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Messages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Messages_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Profile_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Profile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Profile_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_News_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_News_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_News_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Cards_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Cards_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Cards_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Groups_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Groups_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Groups_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GroupsAll_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GroupsAll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_GroupsAll_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Users_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Users_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Users_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Home_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__App_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__App_vue__);












const routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_8__components_Home_vue___default.a }, {
    path: '/profile',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Profile_vue___default.a,
    children: [{
        path: '/Infouser',
        component: __WEBPACK_IMPORTED_MODULE_0__components_Infouser_vue___default.a,
        name: 'Infouser'
    }, {
        path: 'Messages',
        component: __WEBPACK_IMPORTED_MODULE_1__components_Messages_vue___default.a,
        name: 'Messages'
    }, {
        path: 'Groups',
        component: __WEBPACK_IMPORTED_MODULE_5__components_Groups_vue___default.a,
        name: 'Groups'
    }, {
        path: 'Posts',
        component: __WEBPACK_IMPORTED_MODULE_3__components_News_vue___default.a,
        name: 'Posts' /*,
                      {
                         path: 'Friends',
                         component: Messages,
                         name: 'Friends'
                      }*/
    }]
}, { path: '/groupsall', component: __WEBPACK_IMPORTED_MODULE_6__components_GroupsAll_vue___default.a }, { path: '/cards', component: __WEBPACK_IMPORTED_MODULE_4__components_Cards_vue___default.a }, { path: '/users', component: __WEBPACK_IMPORTED_MODULE_7__components_Users_vue___default.a }];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);



__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */].Store({
   state: {
      users: [{
         id: 0,
         rang: "Admin",
         link: "https://test.ru/id",
         login: "iv2",
         gender: "men",
         age: 31,
         avatar: 'https://ivanshavliuga.github.io/works/vuejsnews/images/iv2.jpg',
         password: "12345",
         friends: [0, 1, 2],
         name: "Ivan Shavliuga (Ivanov)",
         spec: "Junior Frotend Developer",
         skills: ["HTML", "CSS", "JavaScript (ES6)", "JQuery", "Vue.js (vue companetes)", "Design", "Animation"],
         city: "Novopolotsk, Belarus",
         contacts: [{
            messenger: "phone",
            contact: "+375 (111) 111-11-11"
         }, {
            messenger: "email",
            contact: "iva.drakon.nov@gmail.com"
         }, {
            messenger: "telegram",
            contact: "https://t.me/vuejscodesru"
         }] //contacts
      }, {
         id: 1,
         link: "https://test.ru/id",
         login: "max",
         rang: "Moderator",
         gender: "men",
         avatar: 'https://ivanshavliuga.github.io/works/vuejsnews/images/team1.jpg',
         age: 29,
         password: "12345",
         friends: [0, 1, 2],
         name: "Max Smirnov",
         spec: "Junior Frotend Developer",
         skills: ["HTML", "CSS", "JavaScript (ES6)", "JQuery", "Angular.js", "TypeScript", "Animation"],
         city: "Minsk, Belarus",
         contacts: [{
            messenger: "phone",
            contact: "+375 (222) 222-22-2"
         }, {
            messenger: "email",
            contact: "smirnov.nov@gmail.com"
         }, {
            messenger: "telegram",
            contact: "https://t.me/vuejscodesru"
         }] //contacts
      }, {
         id: 2,
         link: "https://test.ru/id",
         login: "alex",
         password: "12345",
         rang: "User",
         age: 27,
         friends: [0, 1, 2],
         gender: "men",
         avatar: 'https://ivanshavliuga.github.io/works/vuejsnews/images/team2.jpg',
         name: "Alex Frolov",
         spec: "Junior Backend Developer",
         skills: ["node.js", "php", "mongoDB", "MySQL", "Python", "Ruby", "Ruby on rails"],
         city: "Rostov, Russia",
         contacts: [{
            messenger: "phone",
            contact: "+7 (222) 222-22-2"
         }, {
            messenger: "email",
            contact: "alex@gmail.com"
         }, {
            messenger: "telegram",
            contact: "https://t.me/vuejscodesru"
         }] //contacts
      }, {
         id: 3,
         link: "https://test.ru/id",
         login: "vlad",
         gender: "men",
         rang: "User",
         age: 24,
         friends: [3, 4, 5, 6],
         password: "12345",
         avatar: 'https://ivanshavliuga.github.io/works/vuejsnews/images/team4.jpg',
         name: "Vald Frolov",
         spec: "Junior Data science Developer",
         skills: ["python", "Data ", "mongoDB", "MySQL", "Python", "Ruby", "Ruby on rails"],
         city: "Rostov, Russia",
         contacts: [{
            messenger: "phone",
            contact: "+7 (222) 222-22-2"
         }, {
            messenger: "email",
            contact: "alex@gmail.com"
         }, {
            messenger: "telegram",
            contact: "https://t.me/vuejscodesru"
         }] //contacts
      }, {
         id: 4,
         link: "https://test.ru/id",
         login: "oleg",
         gender: "men",
         password: "12345",
         friends: [3, 4, 5, 6],
         rang: "User",
         age: 30,
         avatar: 'https://ivanshavliuga.github.io/works/vuejsnews/images/1.jpg',
         name: "Oleg Frolov",
         spec: "Junior Data science Developer",
         skills: ["python", "Data science", "Machine learning", "MySQL", "Python", "Ruby", "Ruby on rails"],
         city: "Rostov, Russia",
         contacts: [{
            messenger: "phone",
            contact: "+7 (222) 222-22-2"
         }, {
            messenger: "email",
            contact: "alex@gmail.com"
         }, {
            messenger: "telegram",
            contact: "https://t.me/vuejscodesru"
         }] //contacts
      }, {
         id: 5,
         link: "https://test.ru/id",
         login: "ann",
         rang: "User",
         age: 31,
         gender: "women",
         friends: [3, 4, 5, 6],
         password: "12345",
         name: "Ann Lenina",
         avatar: 'https://ivanshavliuga.github.io/works/vuejsnews/images/team3.jpg',
         spec: "Junior Systems Developer",
         skills: ["C", "C++", "C#", "Linux"],
         city: "Rostov, Russia",
         contacts: [{
            messenger: "phone",
            contact: "+7 (222) 222-22-2"
         }, {
            messenger: "email",
            contact: "ann@gmail.com"
         }, {
            messenger: "telegram",
            contact: "https://t.me/vuejscodesru"
         }] //contacts
      }, {
         id: 6,
         link: "https://test.ru/id",
         login: "angel",
         rang: "User",
         age: 27,
         friends: [3, 4, 5, 6],
         gender: "women",
         password: "12345",
         name: "Angel Lenina",
         avatar: 'https://ivanshavliuga.github.io/works/vuejsnews/images/me.jpg',
         spec: "Junior Systems Developer",
         skills: ["C", "C++", "C#", "Linux"],
         city: "Rostov, Russia",
         contacts: [{
            messenger: "phone",
            contact: "+7 (222) 222-22-2"
         }, {
            messenger: "email",
            contact: "angel.s@gmail.com"
         }, {
            messenger: "telegram",
            contact: "https://t.me/vuejscodesru"
         }] //contacts
      }], //user  
      messages: [{
         type: "system",
         id: 0,
         title: "success registration",
         to: 0,
         from: -1,
         groupId: -1,
         body: "You have successfully registered for the website vuejsnews.com. Terms of use and licensing agreement here. Please fill out your profile and Sub be to the news columns of your choice.",
         read: false,
         show: false
      }, {
         type: "user-add",
         id: 1,
         from: 6,
         to: 0,
         groupId: -1,
         title: "User Angel application add to friends",
         body: "Please add my contact as a friend",
         read: false,
         show: false
      }, {
         type: "group-add",
         id: 2,
         from: 1,
         to: 0,
         groupId: 3,
         title: "The user sent an invitation to join the group",
         body: "Please subscribe to my group",
         read: false,
         show: false
      }], //messages
      cards: [{
         category: "Work",
         header: "Development of a news portal",
         date: "25.02.2020",
         userId: 0,
         id: 0,
         body: "The site must be developed using  technology Vue.js. The news portal must be set up using bootstrap."
      }, {
         category: "Work",
         header: "Development of a news portal",
         date: "25.02.2020",
         userId: 0,
         id: 1,
         body: "The site must be developed using  technology Vue.js. The news portal must be set up using bootstrap."

      }],
      posts: [{
         id: 0,
         userId: 0,
         groupId: 0,
         date: "12.08.2019",
         time: "9:00",
         title: 'I am learn vue.js',
         desc: 'Vue.js is modern framework. This modern framework comes from China and is already gaining popularity. It is easy to learn and suitable for beginners.',
         like: [1, 2, 3],
         repost: [1, 2, 3],
         comments: [],
         views: [1, 2, 3],
         cat: ["Study", "Vue.js", "Frontend"],
         type: "post",
         likeclick: false
      }, {
         id: 1,
         userId: 1,
         groupId: 1,
         date: "13.08.2019",
         time: "10:00",
         title: 'I am learn angular',
         desc: 'Angular is popular framework. This framework is used by large banks and online stores. At one time it was actively promoted by google. Angular-developers receive consistently high salaries',
         like: [1, 2, 3],
         comments: [],
         repost: [1, 2, 3],
         views: [1, 2, 3],
         cat: ["Study", "Angular", "Frontend", "TypeScript"],
         type: "post",
         likeclick: false
      }, {
         id: 2,
         userId: 0,
         groupId: 2,
         date: "13.08.2019",
         time: "11:00",
         title: 'I learn JavaScript',
         desc: 'Modern JavaScript framework of the operation of the Internet. JavaScript works on both the server and the client. Modern JavaScript development requires knowledge of frameworks (JavaScript libraries).',
         like: [1, 2, 3],
         repost: [1, 2, 3],
         views: [1, 2, 3],
         comments: [],
         cat: ["Study", "JavaScript", "Frontend"],
         type: "post",
         likeclick: false
      }, {
         id: 3,
         userId: 0,
         groupId: -1,
         date: "13.02.2020",
         time: "11:00",
         title: 'I installed LINUX ROSA',
         desc: 'My dream has finally come true. When I was at University, I wanted to install Linux Mandriva. But then it was not possible, the iron was weak and unsuitable. But now I have a Russian Mandriva (for Linux Rosa)',
         like: [1, 6],
         repost: [1, 6],
         comments: [1],
         views: [1, 2, 3, 6],
         cat: ["Work", "Linux"],
         type: "post",
         likeclick: false
      }, {
         id: 4,
         userId: 1,
         groupId: 3,
         date: "13.02.2020",
         time: "11:00",
         title: 'First typescript app',
         desc: 'Developed the first full-fledged typescript application. The project has already passed preliminary testing and will be published in a week',
         like: [0, 1, 2, 3],
         comments: [],
         repost: [0, 2],
         views: [0, 1, 2, 3, 6],
         cat: ["Work", "Angular", "TypeScript"],
         type: "post",
         likeclick: false
      }, {
         like: [1, 2, 3, 4, 5, 6],
         id: 5,
         userId: 0,
         groupId: 0,
         comments: [2],
         date: "29.02.2020",
         time: "11:00",
         title: 'First vue.js app',
         desc: 'Developed the first full-fledged vue.js application. The project has already passed preliminary testing and will be published in a week',
         repost: [1, 2],
         views: [0, 1, 2, 3, 4, 5, 6],
         cat: ["Work", "Vue.js", "SPA"],
         type: "post",
         likeclick: false

      }, {
         id: 6,
         userId: 4,
         groupId: 6,
         date: "29.02.2020",
         time: "11:00",
         title: 'First python code',
         desc: "I started studying Python and have already written my first neural network that determines who is depicted in the photo.",
         repost: [3, 5],
         like: [3, 5],
         comments: [],
         views: [0, 1, 2, 3, 4, 5, 6],
         cat: ["Work", "Python"],
         type: "post",
         likeclick: false
      }, {
         id: 7,
         userId: 2,
         groupId: 4,
         date: "29.02.2020",
         time: "11:00",
         title: 'First node.js',
         desc: "I started learning node.js and wrote his first multi-user chat.",
         repost: [0, 1],
         like: [1, 5],
         views: [0, 1, 2],
         comments: [0],
         cat: ["Work", "Node.js", "Study"],
         type: "post",
         likeclick: false
      }],
      comments: [{
         id: 0,
         userId: 0,
         postId: 7,
         text: "It`s cool. Good work"
      }, {
         id: 1,
         userId: 6,
         postId: 3,
         text: "It`s cool."

      }, {
         id: 2,
         userId: 1,
         postId: 5,
         text: "Good work. Liked it"
      }],
      alert: {
         header: "Test",
         body: "On debug mode. Testing repost and like",
         status: "Test processing"
      },
      groups: [{
         name: "Vue.js",
         desc: "Courses, code, simples, webinars",
         category: "study",
         id: 0,
         idAdmin: 0,
         idNews: [0, 5],
         followers: [0, 1]
      }, {
         name: "Angular.js",
         desc: "Courses, code, simples, webinars",
         category: "study",
         id: 1,
         idAdmin: 1,
         idNews: [1],
         followers: [0]
      }, {
         name: "JavaScript",
         desc: "Courses, code, simples, webinars",
         category: "study",
         id: 2,
         idAdmin: 0,
         idNews: [2],
         followers: [0, 1, 2, 3, 4, 5, 6]
      }, {
         name: "TypeScript",
         desc: "Courses, code, simples, webinars",
         category: "study",
         id: 3,
         idAdmin: 1,
         idNews: [4],
         followers: [1, 3]
      }, {
         name: "Node.js",
         desc: "Courses, code, simples, webinars",
         category: "study",
         id: 4,
         idAdmin: 2,
         idNews: [7],
         followers: [0, 1, 2]
      }, {
         name: "Ruby on rails",
         desc: "Courses, code, simples, webinars",
         category: "study",
         id: 5,
         idAdmin: 2,
         idNews: [],
         followers: [2, 3]
      }, {
         name: "Python",
         desc: "Courses, code, simples, webinars",
         category: "study",
         id: 6,
         idAdmin: 3,
         idNews: [6],
         followers: [2, 3]
      }, {
         name: "C/C++/C#",
         desc: "Courses, code, simples, webinars",
         category: "study",
         id: 7,
         idAdmin: 5,
         idNews: [],
         followers: [3, 4]
      }, {
         name: "Linux",
         desc: "Courses, code, simples, webinars",
         category: "study",
         id: 8,
         idAdmin: 6,
         idNews: [3],
         followers: [0, 4]
      }],
      userloginid: 0
   },
   getters: {
      users: state => {
         return state.users;
      },
      loginid: state => {
         return state.userloginid;
      },
      messages: state => {
         return state.messages.filter(m => {
            return m.to == state.userloginid || m.from == state.userloginid;
         });
      },
      cards: state => {
         return state.cards;
      },
      personalcards: state => {
         return state.cards.filter(c => {
            return c.userId === state.userloginid;
         });
      },
      personalposts: state => {
         return state.posts.filter(g => {
            return g.groupId === -1 && g.userId === state.userloginid;
         });
      },
      postsUser: state => {
         let pu = []; //state.posts.filter((p)=>{return p.userId==state.userloginid});
         for (let i = 0; i < state.posts.length; i++) {
            let gi = state.posts[i].groupId;
            if (gi === -1) {
               let frid = state.users[state.userloginid].friends.filter(f => {
                  return f === state.userloginid;
               });

               if (frid[0] !== undefined || state.posts[i].userId === state.userloginid) pu.push(state.posts[i]);
               continue;
            }
            let pf = false;
            let fl = state.groups[gi].followers.filter(rp => {
               return rp === state.userloginid;
            });
            let ru = state.posts[i].repost.filter(rp => {
               return rp === state.userloginid;
            });
            if (ru[0] !== undefined) {
               pf = true;
               pu.push(state.posts[i]);
            } else if (state.groups[gi].idAdmin !== state.userloginid && fl[0] == state.userloginid && pf === false) {
               pu.push(state.posts[i]);
            } else if (state.posts[i].userId === state.userloginid && pf === false) {
               pu.push(state.posts[i]);
            }
            pf = false;
         }
         return pu;
      },
      postsAll: state => {
         return state.posts;
      },
      alert: state => {
         return state.alert;
      },
      groups: state => {
         return state.groups;
      },
      groupsAdmin: state => {
         return state.groups.filter(g => {
            return g.idAdmin == state.userloginid;
         });
      },
      user: state => {
         return state.users[state.userloginid];
      },
      friends: state => {
         let fr = state.users[state.userloginid].friends.filter(u => {
            return u !== state.userloginid;
         });
         let usr = [];
         for (let i = 0; i < fr.length; i++) usr.push(state.users[fr[i]]);
         return usr;
      },
      groupsUser: state => {
         let grp = [];
         let addcheck = false;
         for (let i = 0; i < state.groups.length; i++) {
            let fl = state.groups[i].followers.filter(v => {
               return v === state.userloginid;
            });
            if (state.groups[i].idAdmin === state.userloginid) {
               grp.push(state.groups[i]);
               addcheck = true;
            }
            if (fl[0] !== undefined && addcheck != true) {
               grp.push(state.groups[i]);
               addcheck = true;
            }

            addcheck = false;
         }
         return grp;
      },
      repostsUser: state => {
         let rps = [];
         let id = state.userloginid;
         for (let i = 0; i < state.posts.length; i++) {
            let r = state.posts[i].repost.filter(rid => {
               return rid === id;
            });
            if (r[0] !== undefined) rps.push(state.posts[i]);
         }
         return rps;
      },
      likesUser: state => {
         let rps = [];
         let id = state.userloginid;
         for (let i = 0; i < state.posts.length; i++) {
            let r = state.posts[i].likes.filter(rid => {
               return rid === id;
            });
            if (r[0] !== undefined) rps.push(state.posts[i]);
         }
         return rps;
      },
      comments: state => {
         return state.comments;
      }
   },
   actions: {
      likepost({ commit }, post) {
         commit("LIKEPOST", post);
      },
      repost({ commit }, post) {
         commit("REPOST", post);
      },
      addfriend({ commit }, user) {
         commit("ADDFRIEND", user);
      },
      groupfollow({ commit }, group) {
         commit("GROUPFOLLOW", group);
      },
      addpost({ commit }, post) {
         commit("ADDPOST", post);
      },
      editpost({ commit }, post) {
         commit("EDITPOST", post);
      },
      addgroup({ commit }, group) {
         commit("ADDGROUP", group);
      },
      editcard({ commit }, card) {
         commit("EDITCARD", card);
      },
      addmessage({ commit }, msg) {
         commit("ADDMESSAGE", msg);
      },
      addcomment({ commit }, com) {
         commit("ADDCOMMENT", com);
      },
      signin({ commit }, user) {
         commit("SIGNIN", user);
      },
      signup({ commit }, user) {
         commit("SIGNUP", user);
      }

   },
   mutations: {
      "LIKEPOST"(state, post) {
         let lu = post.like.filter(idl => {
            return idl === state.userloginid;
         });
         if (lu[0] !== undefined) post.like = post.like.filter(idl => {
            return idl !== state.userloginid;
         });else post.like.push(state.userloginid);
         state.posts[post.id] = post;
      },
      "REPOST"(state, post) {
         let lu = post.repost.filter(idl => {
            return idl === state.userloginid;
         });
         if (lu[0] !== undefined) post.repost = post.repost.filter(idl => {
            return idl !== state.userloginid;
         });else post.repost.push(state.userloginid);
         state.posts[post.id] = post;
      },
      "ADDFRIEND"(state, user) {
         let uid = state.users.filter(u => {
            return u === state.userloginid;
         });
         if (uid[0] === undefined) {
            state.users[state.userloginid].friends.push(user.id);
            state.users[user.id].friends.push(state.userloginid);
         }
      },
      "GROUPFOLLOW"(state, group) {
         let uid = state.groups.filter(gf => {
            return gf === state.userloginid;
         });
         if (uid[0] === undefined) state.groups[group.id].followers.push(state.userloginid);
      },
      "ADDPOST"(state, post) {
         post.id = state.posts.length;
         let d = new Date();
         post.date = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
         post.time = d.getHours() + ":" + d.getMinutes();
         if (post.groupId >= 0) state.groups[post.groupId].idNews.push(post.id);
         state.posts.push(post);
      },
      "EDITPOST"(state, post) {
         let d = new Date();
         post.date = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
         post.time = d.getHours() + ":" + d.getMinutes();
         state.posts[post.id] = post;
      },
      "EDITGROUP"(state, group) {
         state.groups[group.id] = group;
      },
      "ADDGROUP"(state, group) {
         group.id = state.groups.length;
         state.groups.push(group);
      },
      "EDITCARD"(state, card) {
         state.cards[card.id] = card;
      },
      "ADDMESSAGE"(state, msg) {
         msg.id = state.messages.length;
         state.messages.push(msg);
      },
      "ADDCOMMENT"(state, com) {
         let idcom = state.comments.length;
         let comment = com;
         comment.id = idcom;
         state.posts[com.postId].comments.push(idcom);
         state.comments.push(comment);
      },
      "SIGNIN"(state, user) {
         console.log('user.id: ', user.id);
         state.userloginid = user.id;
      },
      "SIGNUP"(state, user) {
         console.log("state (user): " + user.id);
         user.friends.push(user.id);
         state.users.push(user);
         state.userloginid = user.id;
         let d = new Date();
         let strdate = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
         let strtime = d.getHours() + ":" + d.getMinutes();
         let msg = {
            type: "system",
            id: state.messages.length,
            title: "success registration, " + user.login,
            to: user.id,
            from: -1,
            groupId: -1,
            body: "userloginid: <i>" + state.userloginid + "</i> user.id: <i>" + user.id + "</i> user.login: <i>" + user.login + "</i><br>User <i>" + user.name + "</i> success registration <i>" + strdate + " " + strtime + "</i>",
            read: false,
            show: false
         };
         state.messages.push(msg);
      }

   }
}));

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * vue-router v2.8.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (false) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (false) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (false) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (false) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.8.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Signin_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Signin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Signin_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Footer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Signup_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Signup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Signup_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            title: "iv2news",
            userlogin: false,
            registration: false,
            users: []
        };
    },
    components: {
        appHeader: __WEBPACK_IMPORTED_MODULE_0__components_Header_vue___default.a,
        appSignin: __WEBPACK_IMPORTED_MODULE_1__components_Signin_vue___default.a,
        appSignup: __WEBPACK_IMPORTED_MODULE_3__components_Signup_vue___default.a,
        appFooter: __WEBPACK_IMPORTED_MODULE_2__components_Footer_vue___default.a
    },
    created() {
        this.users = this.$store.getters.users;
    },
    methods: {
        signinfun(rd) {
            if (!rd.error) {
                this.$store.dispatch("signin", rd.user);
                this.userlogin = true;
            }
        },
        signupfun(rd) {
            if (!rd.error) {
                console.log("rd.user " + rd.user);
                this.$store.dispatch("signup", rd.user);
                this.userlogin = true;
            }
        }
    }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Alert_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            group: {
                title: "",
                name: "Linux",
                desc: "Courses, code, simples, webinars",
                category: "study",
                id: 0,
                idAdmin: 0,
                idNews: [],
                followers: [0]
            },
            alert: {
                header: "Add group",
                body: "This group added",
                status: "Success"
            },
            catnew: ""
        };
    },
    methods: {
        sendgroup() {
            this.$store.dispatch("addgroup", this.group);
            this.$emit("add");
        }
    },
    components: {
        appAlert: __WEBPACK_IMPORTED_MODULE_0__Alert_vue___default.a
    }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            msg: {
                title: "title",
                body: "body",
                id: 0,
                to: 1,
                from: 0,
                groupId: -1,
                type: "user",
                read: false,
                show: false
            }
        };
    },
    props: {
        friends: {
            type: Array,
            required: true
        },
        userloginid: {
            type: Number,
            required: true
        }
    },
    methods: {
        sendmsg() {
            let msgsend = { title: this.msg.title,
                body: this.msg.body,
                id: 0,
                to: this.msg.to,
                from: this.userloginid,
                groupId: -1,
                type: "user",
                read: false,
                show: false };
            this.$store.dispatch("addmessage", msgsend);
            this.$emit("addmessage");
        }
    }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            post: {
                title: "",
                userId: -1,
                date: "1.1.21",
                time: "0:0:0",
                desc: "",
                cat: [],
                like: [],
                repost: [],
                views: [],
                comments: [],
                groupId: 0,
                likeclick: false,
                type: "post"
            },
            catnew: ""
        };
    },
    props: {
        admingroups: {
            type: Array,
            required: true
        },
        loginid: {
            type: Number,
            required: true
        }
    },
    methods: {
        addcat() {
            if (this.catnew.length) this.post.cat.push(this.catnew);
        },
        sendpost() {
            this.post.userId = this.loginid;
            this.$store.dispatch("addpost", this.post);
            this.addflag = true;
            this.$emit("add");
        },
        delcat(id) {
            this.post.cat.splice(id, 1);
        }
    }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        alert: {
            type: Object,
            required: true
        }
    },
    methods: {
        closebtn() {
            this.$emit("close");
        }
    }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    methods: {
        clickcard(id) {
            console.log("CARD: " + id);
            this.$emit("cardclick", id);
        }
    }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Card_vue__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        cards: {
            type: Array,
            required: true
        }
    },
    components: {
        appCard: __WEBPACK_IMPORTED_MODULE_0__Card_vue___default.a
    },
    methods: {
        clickcard(k) {
            console.log("CARDS: " + k);
            this.$emit("cardclick", k);
        }
    }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cards_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cards_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Cards_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        personalcards: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            card: {
                id: 0,
                header: "",
                category: "",
                date: "",
                body: ""
            },
            index: 0,
            cardcheck: false
        };
    },
    methods: {
        cardclick(index) {
            console.log("CARDUSER: " + index);
            this.index = index;
            this.cardcheck = true;
            this.card = this.personalcards[this.index];
        },
        sendcard() {
            this.card.id = this.index;
            this.$store.dispatch("editcard", this.card);
            this.$emit("edit");
            this.index = -1;
            this.cardcheck = false;
        }
    },
    components: {
        appCards: __WEBPACK_IMPORTED_MODULE_0__Cards_vue___default.a
    }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            /* post: {
                 title:"",
                 userId:0,
                 date:"1.1.21",
                 time:"0:0:0",
                 desc:"",
                 cat:[],
                 like:[],
                 repost:[],
                 views:[],
                 groupId:0,
                 likeclick:false,
                 type:"post"
             },*/
            catnew: ""
        };
    },
    props: {
        admingroups: {
            type: Array,
            required: true
        },
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        addcat() {
            if (this.catnew.length) this.post.cat.push(this.catnew);
        },
        sendpost() {
            this.$store.dispatch("editpost", this.post);
            this.addflag = true;
            this.$emit("edit");
        },
        delcat(id) {
            this.post.cat.splice(id, 1);
        }
    }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Post_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Post_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Post_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        posts: {
            type: Array,
            required: true
        },
        users: {
            type: Array,
            required: true
        },
        loginid: {
            type: Number,
            required: true
        },
        admingroups: {
            type: Array,
            required: true
        },
        groups: {
            type: Array,
            required: true
        },
        comments: {
            type: Array,
            required: true
        }
    },
    components: {
        appPost: __WEBPACK_IMPORTED_MODULE_0__Post_vue___default.a
    }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
   props: {
      friends: {
         type: Array,
         required: true
      }
   }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    groups: {
      type: Array,
      required: true
    },
    users: {
      type: Array,
      required: true
    },
    loginid: {
      type: Number,
      required: true
    }
  },
  methods: {
    filterFollowers(g) {
      let fl = [];
      if (g.followers.length <= 4) fl = g.followers;else {
        for (let i = 0; i < 4; i++) {

          fl.push(g.followers[i]);
        }
      }
      return fl;
    }
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            groups: [],
            users: [],
            loginid: 0
        };
    },
    methods: {
        groupread(g) {
            let fl = g.followers.filter(gf => {
                return gf === this.loginid;
            });
            return fl[0] !== undefined;
        },
        groupfollow(g) {
            this.$store.dispatch("groupfollow", g);
        },
        filterFollowers(g) {
            let fl = [];
            if (g.followers.length <= 4) fl = g.followers;else {
                for (let i = 0; i < 4; i++) {

                    fl.push(g.followers[i]);
                }
            }
            return fl;
        }
    },
    created() {
        this.groups = this.$store.getters.groups;
        this.users = this.$store.getters.users;
        this.loginid = this.$store.getters.loginid;
    }

});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navigation_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        appNavigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue___default.a
    },
    data() {
        return {
            user: {}
        };
    },
    created() {
        this.user = this.$store.getters.user;
    }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__News_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__News_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__News_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cards_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cards_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Cards_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Alert_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Alert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Alert_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main__ = __webpack_require__(9);
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            user: {},
            posts: [],
            cards: [],
            alert: {},
            alertflag: true,
            users: [],
            groups: [],
            admingroups: [],
            comments: [],
            loginid: 0,
            index: 0
        };
    },
    components: {
        appNews: __WEBPACK_IMPORTED_MODULE_0__News_vue___default.a,
        appCards: __WEBPACK_IMPORTED_MODULE_1__Cards_vue___default.a,
        appAlert: __WEBPACK_IMPORTED_MODULE_2__Alert_vue___default.a
    },
    methods: {
        closealert() {
            this.alertflag = false;
        }
    },
    created() {
        this.posts = this.$store.getters.postsAll;
        this.cards = this.$store.getters.cards;
        this.users = this.$store.getters.users;
        this.alert = this.$store.getters.alert;
        this.admingroups = this.$store.getters.groupsAdmin;
        this.groups = this.$store.getters.groups;
        this.comments = this.$store.getters.comments;
        this.loginid = this.$store.getters.loginid;
    }
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            editage: 0,
            editgender: "men",
            editname: "",
            editspec: "",
            editcity: "",
            showeditage: false,
            showeditgender: false,
            showeditname: false,
            showeditspec: false,
            showeditcity: false,
            mess: "",
            cont: "",
            skill: ""

        }; //return
    }, //data
    methods: {
        addcont() {
            this.user.contacts.push({
                messenger: this.mess,
                contact: this.cont
            });
        },
        addskill() {
            this.user.skills.push(this.skill);
        },
        delskill(ind) {
            this.user.skills.splice(ind, 1);
        },
        readmess(id) {
            this.messages[id].read = !this.messages[id].read;
        },
        showmess(id) {
            this.messages[id].show = !this.messages[id].show;
        },
        checkname() {
            this.user.name = this.editname;
            this.showeditname = false;
        },
        checkage() {
            this.user.age = this.editage;
            this.showeditage = false;
        },
        showflagage() {
            this.showeditage = !this.showeditage;
        },
        showflagname() {
            this.showeditname = !this.showeditname;
        },
        checkspec() {
            this.user.spec = this.editspec;
            this.showeditspec = false;
        },
        checkgender() {
            this.user.gender = this.editgender;
            this.showeditgender = false;
        },
        showflaggender() {
            this.showeditgender = !this.showeditgender;
        },
        showflagspec() {
            this.showeditspec = !this.showeditspec;
        },
        checkcity() {
            this.user.city = this.editcity;
            this.showeditcity = false;
        },
        showflagcity() {
            this.showeditcity = !this.showeditcity;
        }
    }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Addmessage_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Addmessage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Addmessage_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    messages: {
      type: Array,
      required: true
    },
    users: {
      type: Array,
      required: true
    },
    friends: {
      type: Array,
      required: true
    },
    userloginid: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      addfriendflag: false,
      addgroupflag: false
    };
  },
  methods: {
    readmess(id) {
      this.messages[id].read = !this.messages[id].read;
    },
    showmess(id) {
      this.messages[id].show = !this.messages[id].show;
    },
    addfriend(id) {
      this.$emit("addfriend", id);
      this.addfriendflag = true;
    },
    addgroup(id) {
      this.$emit("addgroup", id);
      this.addgroupflag = true;
    },
    addmsg() {
      this.$emit("addmessage");
    }
  },
  components: {
    appAddmessage: __WEBPACK_IMPORTED_MODULE_0__Addmessage_vue___default.a
  }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Post_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Post_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Post_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
   props: {
      posts: {
         type: Array,
         required: true
      },
      users: {
         type: Array,
         required: true
      },
      loginid: {
         type: Number,
         required: true
      },
      admingroups: {
         type: Array,
         required: true
      },
      groups: {
         type: Array,
         required: true
      },
      comments: {
         type: Array,
         required: true
      }
   },
   components: {
      appPost: __WEBPACK_IMPORTED_MODULE_0__Post_vue___default.a
   }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Editpost_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Editpost_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Editpost_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        post: {
            type: Object,
            required: true
        },
        users: {
            type: Array,
            required: true
        },
        loginid: {
            type: Number,
            required: true
        },
        admingroups: {
            type: Array,
            required: true
        },
        groups: {
            type: Array,
            required: true
        },
        comments: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            predisplay: false,
            editpost: false,
            comment: ''
        };
    },
    methods: {
        like(post) {
            this.$store.dispatch("likepost", post);
        },
        repost(post) {
            this.$store.dispatch("repost", post);
        },
        editpostfun() {
            this.$store.dispatch("editpost", this.post);
            this.editpost = false;
        },
        addcomment() {
            let dcm = {
                text: this.comment,
                postId: this.post.id,
                userId: this.loginid
            };
            this.$store.dispatch("addcomment", dcm);
        },
        checkgroup() {

            if (this.post.groupId === -1) return "Personal post";else if (this.post.groupId >= this.groups.length) return "Undefined error";else if (this.post.groupId >= 0) return this.groups[this.post.groupId].name;
        }
    },
    components: {
        appEditpost: __WEBPACK_IMPORTED_MODULE_0__Editpost_vue___default.a
    },
    updated() {
        console.log("post.id " + this.post.id);
        console.log("post.groupId " + this.post.groupId);
    }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Alert_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Infouser_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Infouser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Infouser_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Messages_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Messages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Messages_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__News_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__News_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__News_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Groups_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Groups_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Groups_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Friends_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Friends_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Friends_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Feeduser_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Feeduser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Feeduser_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Addpost_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Addpost_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Addpost_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Addgroup_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Addgroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Addgroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Editpost_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Editpost_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Editpost_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Cardsuser_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Cardsuser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Cardsuser_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ __webpack_exports__["default"] = ({
   data() {
      return {
         user: {},
         users: {},
         messages: [],
         posts: [],
         reposts: [],
         friends: [],
         groups: [],
         groupsall: [],
         personalposts: [],
         personalcards: [],
         admingroups: [],
         comments: [],
         activelink: 2,
         loginid: 0,
         addflag: false,
         alert: {}
      };
   },
   methods: {
      closealert() {
         this.addflag = false;
      },
      addpost() {
         this.addflag = true;
         this.posts = this.$store.getters.postsUser;
         this.groups = this.$store.getters.groupsUser;
         this.groupsall = this.$store.getters.groups;
         this.personalposts = this.$store.getters.personalposts;
         this.alert.header = "Add post";
         this.alert.body = "This post added";
         this.alert.status = "Success update";
      },
      addgroup() {
         this.addflag = true;
         this.groups = this.$store.getters.groupsUser;
         this.alert.header = "Add group";
         this.alert.body = "This group added";
         this.alert.status = "Success added";
      },
      editpost() {
         this.addflag = true;
         this.posts = this.$store.getters.postsUser;
         this.groups = this.$store.getters.groupsUser;
         this.alert.header = "Edit post";
         this.alert.body = "This post changed";
         this.alert.status = "Success update";
      },
      editcard() {
         this.personalcards = this.$store.getters.personalcards;
         this.alert.header = "Edit card";
         this.alert.body = "This card changed";
         this.alert.status = "Success update";
         this.addflag = true;
      },
      addfriend(id) {
         this.$store.dispatch("addfriend", this.users[id]);
         this.friends = this.$store.getters.friends;
         this.alert.header = "Add friend";
         this.alert.body = "This user add to friend";
         this.alert.status = "Success added";
         this.addflag = true;
      },
      follow(id) {
         this.alert.header = "Subscribe group";
         this.alert.body = "This group subscribe";
         this.alert.status = "Success subscribe";
         this.addflag = true;
         this.$store.dispatch("groupfollow", this.groupsall[id]);
         this.groups = this.$store.getters.groupsUser;
      },
      addmsg() {
         this.alert.header = "Message send";
         this.alert.body = "You sent message user";
         this.alert.status = "Success send";
         this.addflag = true;
         this.messages = this.$store.getters.messages;
      }
   },
   components: {
      appInfouser: __WEBPACK_IMPORTED_MODULE_1__Infouser_vue___default.a,
      appMessages: __WEBPACK_IMPORTED_MODULE_2__Messages_vue___default.a,
      appNews: __WEBPACK_IMPORTED_MODULE_3__News_vue___default.a,
      appGroups: __WEBPACK_IMPORTED_MODULE_4__Groups_vue___default.a,
      appFriends: __WEBPACK_IMPORTED_MODULE_5__Friends_vue___default.a,
      appFeeduser: __WEBPACK_IMPORTED_MODULE_6__Feeduser_vue___default.a,
      appAddpost: __WEBPACK_IMPORTED_MODULE_7__Addpost_vue___default.a,
      appAlert: __WEBPACK_IMPORTED_MODULE_0__Alert_vue___default.a,
      appAddgroup: __WEBPACK_IMPORTED_MODULE_8__Addgroup_vue___default.a,
      appEditpost: __WEBPACK_IMPORTED_MODULE_9__Editpost_vue___default.a,
      appCardsuser: __WEBPACK_IMPORTED_MODULE_10__Cardsuser_vue___default.a
   },
   created() {
      this.loginid = this.$store.getters.loginid;
      this.user = this.$store.getters.user;
      this.users = this.$store.getters.users;
      this.messages = this.$store.getters.messages;
      this.posts = this.$store.getters.postsUser;
      this.reposts = this.$store.getters.repostsUser;
      this.groups = this.$store.getters.groupsUser;
      this.friends = this.$store.getters.friends;
      this.admingroups = this.$store.getters.groupsAdmin;
      this.personalposts = this.$store.getters.personalposts;
      this.personalcards = this.$store.getters.personalcards;
      this.comments = this.$store.getters.comments;
      this.groupsall = this.$store.getters.groups;
   }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            login: '',
            password: '',
            phone: '',
            regdata: {
                status: '',
                error: false,
                user: {}
            }
        };
    },
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    methods: {
        signinfun() {
            if (this.login === '') {
                this.regdata.status = 'Empty login';
                this.regdata.error = true;
                this.regdata.user = {};
            } else {
                console.log("Users: " + this.users);
                let usr = this.users.filter(u => {
                    return u.login === this.login;
                });
                console.log("usr " + usr[0]);
                if (usr[0] !== undefined) {
                    if (usr[0].password === this.password) {
                        this.regdata.user = usr[0];
                        this.regdata.status = "Success sign in";
                        this.regdata.error = false;
                        console.log("OK");
                    } else {
                        this.regdata.user = {};
                        this.regdata.status = "Password invalid";
                        this.regdata.error = true;
                    } //else   
                } //if        
            } //else
            console.log("status: " + this.regdata.status);
            this.$emit("signin", this.regdata);
        }
    }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            login: '',
            password: '',
            retrypassword: '',
            city: '',
            editgender: 'men',
            name: '',
            age: 18,
            specialization: '',
            email: '',
            regdata: {
                status: '',
                error: false,
                user: {}
            }
        };
    },
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    methods: {
        signupfun() {
            if (this.login === '') {
                this.regdata.status = 'Empty login';
                this.regdata.error = true;
                this.regdata.user = {};
            } else {
                console.log("Users: " + this.users);
                if (this.password === this.retrypassword) {
                    this.regdata.user = {
                        skills: [],
                        login: this.login,
                        friends: [],
                        contacts: [{
                            messenger: "email",
                            contact: this.email
                        }],
                        rang: 'user',
                        spec: this.specialization,
                        name: this.name,
                        age: this.age,
                        avatar: 'src/assets/images/avatar.png',
                        gender: this.editgender,
                        password: this.password,
                        city: this.city,
                        link: "test.com/newuser",
                        id: this.users.length
                    };
                    this.regdata.status = "Success sign up";
                    this.regdata.error = false;

                    console.log("OK sign up");
                } else {
                    this.regdata.user = {};
                    this.regdata.status = "Password invalid";
                    this.regdata.error = true;
                } //else   
            } //else
            console.log("status: " + this.regdata.status);
            this.$emit("signup", this.regdata);
        }
    }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            users: [],
            loginid: 0
        };
    },
    methods: {
        friendscheck(u) {
            let f = u.friends.filter(fr => {
                return fr === this.loginid;
            });
            return f[0] !== undefined;
        },
        addfriend(u) {
            this.$store.dispatch("addfriend", u);
        }
    },
    created() {
        this.users = this.$store.getters.users;
        this.loginid = this.$store.getters.loginid;
    }
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".promo{background:#fff}.promo h3{font-size:16px;font-weight:700;font-style:italic;color:#93f;line-height:17px}.promo h3:hover{text-decoration:underline!important}.promo__date{font-size:12px}.promo p{font-size:14px;line-height:15px;text-align:justify;word-spacing:1px}.promo__cat{margin-bottom:7px!important}.promo__image img{width:200px;height:250px;border:1px solid #fff}", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".addpost{max-width:25rem!important}.addpost span{cursor:pointer}.addpost form{margin-bottom:-15px!important}", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".navbar{background:#c5c!important;color:cyan!important}.navbar .nav-item{outline:none!important}.navbar .nav-item .nav-link.disabled{color:#0aa!important;text-decoration:line-through!important}.navbar .nav-item .nav-link{outline:none!important;color:cyan!important;text-decoration:underline!important}.navbar .nav-item .nav-link:active{color:#0bb!important}.navbar form button.btn.btn-outline-success{width:75px!important;height:40px!important}", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".card{max-width:17rem!important;height:600px!important;margin:5px!important}.card .avatar-comment{width:20px;height:20px;border-radius:50%;margin-right:4px}.card-title{padding:5px;line-height:10px}.card-header{font-weight:700!important;color:#93f!important}.card-footer span{padding-right:6px;cursor:default}.card-footer span i{padding-right:4px}.card-footer span:hover{color:red}.card-footer .debug{cursor:pointer;color:red;font-weight:700}.card-footer .comments{background:#ccc;line-height:14px;font-size:10px;border:1px solid #555;padding:5px;margin:5px;cursor:default}.card-footer .comments b{font-size:13px;line-height:14px;color:#a5a}.card-footer .comments .pre-header{color:red;font-size:14px;text-align:center;text-decoration:underline}.card-body span{padding-left:4px}.card-body span i{padding-right:7px}.card-body span:hover{color:red}.card-body .user-data{font-size:14px;cursor:pointer}@media screen and (min-width:1300px){.card{max-width:21rem!important}}@media screen and (min-width:1200px) and (max-width:1300px){.card{max-width:20rem!important}}@media screen and (min-width:774px) and (max-width:1190px){.card{max-width:17rem!important}}@media screen and (min-width:696px) and (max-width:769px){.card{max-width:23rem!important}}@media screen and (min-width:230px) and (max-width:694px){.card{max-width:28rem!important}}@media screen and (max-width:298px){.card{max-width:14rem!important}}", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".profile{background:#eee;padding:10px}.profile .nav{border:1px solid #0dd;background:#dee}.profile .nav-link{margin-right:-20px;outline:none}.profile .nav a.nav-link.active{font-weight:700!important;text-transform:uppercase!important}.profile .btn-adds{width:28px;height:28px;padding-top:2px!important;padding-left:8px!important}.profile .btn-adds i{font-size:12px;line-height:8px}.profile th{text-align:left;font-size:18px;color:#34a;background-color:#ffd}.profile tr:nth-child(odd){background-color:#eff}.profile tr:nth-child(2n){background-color:#fff}.profile td:first-child{width:20%;font-weight:700;text-align:left}.profile td{cursor:pointer}.profile .skill{color:blue;padding-right:5px}.profile .del{color:red;padding-right:5px;cursor:pointer}.profile .unread{font-weight:700}.profile .read{font-weight:400}.profile .check{margin-right:15px}.profile .avatar{width:80;height:80;border-radius:50%}", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "b{font-size:20px}ul{display:flex;margin:0;padding:0}ul li{list-style:none;margin:0}ul li img{width:25px;height:25px;border-radius:50%;margin-right:5px}", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".bd-placeholder-img{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.signelem{color:#fff}.signparagraph{color:#e0e}.btn-sign{margin-top:25px}.form-signin{margin-top:60px!important}@media (min-width:768px){.bd-placeholder-img-lg{font-size:3.5rem}}.form-signin{width:300px!important;margin:auto}@media (max-width:300px){.form-signin{width:200px!important}}", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".gblock{min-height:300px;max-height:350px}.gblock span{cursor:pointer}.gblock .admin-group{color:red;font-weight:700}.gblock .readyou{color:#d5d;font-weight:700}.gblock ul{display:flex;margin:0;padding:0}.gblock ul li{list-style:none;margin:0}.gblock ul li img{width:25px;height:25px;border-radius:50%;margin-right:5px}@media screen and (min-width:1300px){.card{max-width:21rem!important}}@media screen and (min-width:1200px) and (max-width:1300px){.card{max-width:20rem!important}}@media screen and (min-width:774px) and (max-width:1190px){.card{max-width:17rem!important}}@media screen and (min-width:696px) and (max-width:769px){.card{max-width:23rem!important}}@media screen and (min-width:230px) and (max-width:694px){.card{max-width:28rem!important}}@media screen and (max-width:298px){.card{max-width:14rem!important}}", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".footer{background:#444;height:40px;width:100%;color:#fff;text-align:center;padding-top:5px}@media screen and (max-width:380px){.footer{height:60px!important;font-size:12px}}", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".msg__title{background:#fdf!important}.msg__body{background:#fff!important}.msg__body i{color:#06d}", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".block{min-height:80px}.block span{color:#07b}.block .login-user{font-size:14px}.block .friend{color:red;font-weight:700}.block p{margin:5px}.block .avatar{width:80!important;height:80!important;border-radius:50%}@media screen and (min-width:1300px){.card{max-width:21rem!important;min-width:21rem!important}}@media screen and (min-width:1200px) and (max-width:1300px){.card{max-width:20rem!important;min-width:20rem!important}}@media screen and (min-width:774px) and (max-width:1190px){.card{max-width:17rem!important;min-width:17rem!important}}@media screen and (min-width:696px) and (max-width:769px){.card{max-width:23rem!important;min-width:23rem!important}}@media screen and (min-width:230px) and (max-width:694px){.card{max-width:28rem!important}}@media screen and (max-width:298px){.card{max-width:14rem!important}}", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".addpost{max-width:25rem!important}.addpost span{cursor:pointer}.addpost form{margin-bottom:-15px!important}", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "button{margin-right:25px}", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".header{background:#909;color:#fff;padding:20px 10px}.header__logo{display:inline-block}.header__logo__title{color:#ff0;letter-spacing:-2px;font-size:40px;transform:scaleY(1.8);border-bottom:1px dashed #fff;padding-bottom:2px}.header__logo__title span:nth-child(2n){color:#00f;font-weight:700}.header__logo p{margin-top:20px;word-spacing:13px;text-align:center;transform:scaleY(1.8)}.header__profile{display:inline-block;float:right;margin-top:30px;width:300px}.header__profile__avatar{width:60px;height:60px;display:inline-block;margin:0;padding:0}.header__profile__avatar img{width:50px;height:50px;border-radius:50px;border:2px solid #bad}.header__profile__info{display:inline-block;vertical-align:bottom}.header__profile__info p{line-height:10px;font-size:14px}.header__profile__info p:nth-child(2){color:#0ff}.header__profile__info p:nth-child(3){color:#fad}@media screen and (max-width:544px){.header__profile{display:none}}@media screen and (max-width:760px){.header__profile{margin-top:0;width:240px}}", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "section div.msgadd{min-width:35rem!important;height:320px!important}", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".bd-placeholder-img{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.signelem{color:#fff}.signparagraph{color:#e0e}.btn-sign{margin-top:25px}.form-signin{margin-top:60px!important}@media (min-width:768px){.bd-placeholder-img-lg{font-size:3.5rem}}.form-signin{width:300px!important;margin:auto}@media (max-width:300px){.form-signin{width:200px!important}}", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".addpost .card-footer{margin-top:35px!important}.addpost .card-footer button{margin-top:15px!important}", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "body,div.container{background:#808!important}.userlogin,body,html{margin:0;padding:0;height:100%}.userlogin{text-align:center}.content{padding:15px;background:#eee}.signlink{color:#fff;cursor:pointer}", ""]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".avatar{width:80!important;height:80!important;border-radius:50%}", ""]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".content{padding:10px!important;background:#eee}", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "robot2.jpg?e045fa81415091b3316ed85d61f615c9";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(63)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(64);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(123)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(121)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(100),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(108)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(107)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(82),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(115)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(91),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(126)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(114)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(90),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(120)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(109)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(84),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(111)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(87),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(122)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(113)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(89),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(117)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(95),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative promo"
  }, [_c('div', {
    staticClass: "col p-4 d-flex flex-column position-static  promo__block"
  }, [_c('strong', {
    staticClass: "d-inline-block mb-2 text-primary promo__cat"
  }, [_vm._v(_vm._s(_vm.card.category))]), _vm._v(" "), _c('h3', {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.card.header))]), _vm._v(" "), _c('div', {
    staticClass: "mb-1 text-muted promo__date"
  }, [_vm._v(_vm._s(_vm.card.date))]), _vm._v(" "), _c('p', {
    staticClass: "card-text mb-auto"
  }, [_vm._v(_vm._s(_vm.card.body))]), _vm._v(" "), _c('a', {
    staticClass: "stretched-link",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        return _vm.clickcard(_vm.card.id)
      }
    }
  }, [_vm._v("Edit card")])]), _vm._v(" "), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-auto d-none d-lg-block  promo__image"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(62)
    }
  })])
}]}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h3', [_vm._v("Add new post")]), _vm._v(" "), _c('div', {
    staticClass: "card mb-2 addpost"
  }, [_c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.post.title),
      expression: "post.title"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "title"
    },
    domProps: {
      "value": (_vm.post.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.post, "title", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "input-group mb-3"
  }, [_vm._m(0), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.post.groupId),
      expression: "post.groupId"
    }],
    staticClass: "custom-select",
    attrs: {
      "id": "groups",
      "placeholder": "groups"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.post, "groupId", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "-1"
    },
    on: {
      "click": function($event) {
        _vm.post.groupId = -1
      }
    }
  }, [_vm._v("Personal post")]), _vm._v(" "), _vm._l((_vm.admingroups), function(gid, k) {
    return _c('option', {
      key: k,
      domProps: {
        "value": gid.id
      }
    }, [_vm._v(_vm._s(gid.name))])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "card-text"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.post.desc),
      expression: "post.desc"
    }],
    staticClass: "form-control",
    attrs: {
      "cols": "50",
      "rows": "7"
    },
    domProps: {
      "value": (_vm.post.desc)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.post, "desc", $event.target.value)
      }
    }
  }, [_vm._v("text")])])]), _vm._v(" "), _c('div', {
    staticClass: "input-group mb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.catnew),
      expression: "catnew"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "category"
    },
    domProps: {
      "value": (_vm.catnew)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.catnew = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-append"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.addcat
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('i', {
    staticClass: "fa fa-tags"
  }), _vm._v(" "), _vm._l((_vm.post.cat), function(c, kc) {
    return _c('span', {
      key: kc,
      on: {
        "click": function($event) {
          return _vm.delcat(kc)
        }
      }
    }, [_vm._v(_vm._s(c + " "))])
  }), _c('hr'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success my-2 my-sm-0",
    on: {
      "click": _vm.sendpost
    }
  }, [_vm._v("Send post")])], 2)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-prepend"
  }, [_c('label', {
    staticClass: "input-group-text",
    attrs: {
      "for": "groups"
    }
  }, [_vm._v("Groups")])])
}]}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar navbar-expand-lg navbar-light bg-light"
  }, [_c('a', {
    staticClass: "navbar-brand",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("IT club")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "navbarSupportedContent"
    }
  }, [_c('ul', {
    staticClass: "navbar-nav mr-auto"
  }, [_c('li', {
    staticClass: "nav-item active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/profile"
    }
  }, [_vm._v("Profile")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/groupsall"
    }
  }, [_vm._v("Groups")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/users"
    }
  }, [_vm._v("Users")])], 1)])]), _vm._v(" "), _c('input', {
    staticClass: "form-control mr-sm-2",
    attrs: {
      "type": "search",
      "placeholder": "Search",
      "aria-label": "Search"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success my-2 my-sm-0",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Search")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "navbar-toggler",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }
  }, [_c('span', {
    staticClass: "navbar-toggler-icon"
  })])
}]}

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.alertflag) ? _c('app-alert', {
    attrs: {
      "alert": _vm.alert
    },
    on: {
      "close": _vm.closealert
    }
  }) : _vm._e(), _vm._v(" "), _c('app-cards', {
    attrs: {
      "cards": _vm.cards,
      "index": _vm.index
    }
  }), _vm._v(" "), _c('app-news', {
    attrs: {
      "posts": _vm.posts,
      "users": _vm.users,
      "loginid": _vm.loginid,
      "admingroups": _vm.admingroups,
      "groups": _vm.groups,
      "comments": _vm.comments
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [(!_vm.editpost) ? _c('article', {
    staticClass: "card mb-2"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v(_vm._s(_vm.post.title))]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('h6', {
    staticClass: "card-title"
  }, [_c('span', {
    staticClass: "text-primary user-data",
    attrs: {
      "title": "author"
    }
  }, [_c('img', {
    staticClass: "avatar-comment",
    attrs: {
      "src": _vm.users[_vm.post.userId].avatar
    }
  }), _vm._v(" @" + _vm._s(_vm.users[_vm.post.userId].login) + " " + _vm._s(_vm.post.date) + " " + _vm._s(_vm.post.time))]), _vm._v(" "), (_vm.post.userId === _vm.loginid) ? _c('span', {
    staticClass: "text-success user-data",
    attrs: {
      "title": "Edit your post"
    },
    on: {
      "click": function($event) {
        _vm.editpost = true
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-pencil",
    attrs: {
      "title": "edit"
    }
  })]) : _c('span', {
    staticClass: "text-success user-data",
    attrs: {
      "title": "You repost"
    }
  }, [_c('i', {
    staticClass: "fa fa-retweet"
  })])]), _vm._v(" "), _c('p', {
    staticClass: "card-text"
  }, [_vm._v(_vm._s(_vm.post.desc))])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer text-primary"
  }, [_c('p', [_c('span', {
    attrs: {
      "title": "likes"
    }
  }, [_c('i', {
    staticClass: "fa fa-thumbs-up",
    on: {
      "click": function($event) {
        return _vm.like(_vm.post)
      }
    }
  }), _vm._v(_vm._s(_vm.post.like.length))]), _vm._v(" "), _c('span', {
    attrs: {
      "title": "reposts"
    }
  }, [_c('i', {
    staticClass: "fa fa-retweet",
    on: {
      "click": function($event) {
        return _vm.repost(_vm.post)
      }
    }
  }), _vm._v(_vm._s(_vm.post.repost.length))]), _vm._v(" "), _c('span', {
    attrs: {
      "title": "views"
    }
  }, [_c('i', {
    staticClass: "fa fa-eye"
  }), _vm._v(_vm._s(_vm.post.views.length))]), _vm._v(" "), _c('span', {
    attrs: {
      "title": "comments"
    }
  }, [_c('i', {
    staticClass: "fa fa-comments"
  }), _vm._v(_vm._s(_vm.post.comments.length))]), _c('br'), _vm._v(" "), _c('span', {
    attrs: {
      "title": "group"
    }
  }, [_c('i', {
    staticClass: "fa fa-users"
  }), _vm._v("  \n  " + _vm._s(_vm.checkgroup()) + " ")])]), _vm._v(" "), (_vm.post.comments.length) ? _c('p') : _vm._e(), _vm._l((_vm.post.comments), function(c, k) {
    return _c('p', {
      staticClass: "comments"
    }, [_c('img', {
      staticClass: "avatar-comment",
      attrs: {
        "src": _vm.users[_vm.comments[c].userId].avatar
      }
    }), _vm._v(" "), _c('b', [_vm._v("@" + _vm._s(_vm.users[_vm.comments[c].userId].login) + ":")]), _c('br'), _vm._v("\n  " + _vm._s(_vm.comments[c].text))])
  }), _c('p'), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.comment),
      expression: "comment"
    }],
    staticClass: "form-control",
    attrs: {
      "placeholder": "Your comment"
    },
    domProps: {
      "value": (_vm.comment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.comment = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.addcomment
    }
  }, [_vm._v("Comment")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('i', {
    staticClass: "fa fa-tags"
  }), _vm._v(" "), _vm._l((_vm.post.cat), function(c, kc) {
    return _c('span', {
      key: kc
    }, [_vm._v(_vm._s(c + " "))])
  }), _c('br')], 2)]) : _c('app-editpost', {
    attrs: {
      "post": _vm.post,
      "admingroups": _vm.admingroups
    },
    on: {
      "edit": _vm.editpostfun
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "profile"
  }, [_c('nav', {
    staticClass: "nav"
  }, [_c('a', {
    class: ['nav-link', (_vm.activelink == 0) ? 'active' : ''],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.activelink = 0
      }
    }
  }, [_vm._v(" \n     Profile")]), _vm._v(" "), _c('a', {
    class: ['nav-link', (_vm.activelink == 1) ? 'active' : ''],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.activelink = 1
      }
    }
  }, [_vm._v("\n     Messages "), _c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v(_vm._s(_vm.messages.length))])]), _vm._v(" "), _c('a', {
    class: ['nav-link', (_vm.activelink == 2) ? 'active' : ''],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.activelink = 2
      }
    }
  }, [_vm._v("\n     Posts "), _c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v(_vm._s(_vm.posts.length))])]), _vm._v(" "), _c('a', {
    class: ['nav-link', (_vm.activelink == 3) ? 'active' : ''],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.activelink = 3
      }
    }
  }, [_vm._v("\n     Groups "), _c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v(_vm._s(_vm.groups.length))])]), _vm._v(" "), _c('a', {
    class: ['nav-link', (_vm.activelink == 4) ? 'active' : ''],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.activelink = 4
      }
    }
  }, [_vm._v("\n     Friends "), _c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v(_vm._s(_vm.friends.length))])]), _vm._v(" "), _c('a', {
    class: ['nav-link', (_vm.activelink == 5) ? 'active' : ''],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.activelink = 5
      }
    }
  }, [_vm._v("\n     Personal posts "), _c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v(_vm._s(_vm.personalposts.length))])]), _vm._v(" "), _c('a', {
    class: ['nav-link', (_vm.activelink == 6) ? 'active' : ''],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.activelink = 6
      }
    }
  }, [_vm._v("\n     Add post")]), _vm._v(" "), _c('a', {
    class: ['nav-link', (_vm.activelink == 7) ? 'active' : ''],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.activelink = 7
      }
    }
  }, [_vm._v("\n     Add group")]), _vm._v(" "), _c('a', {
    class: ['nav-link', (_vm.activelink == 8) ? 'active' : ''],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.activelink = 8
      }
    }
  }, [_vm._v("\n     You cards "), _c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v(_vm._s(_vm.personalcards.length))])])]), _vm._v(" "), (_vm.addflag) ? _c('app-alert', {
    attrs: {
      "alert": _vm.alert
    },
    on: {
      "close": _vm.closealert
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activelink == 0) ? _c('app-infouser', {
    attrs: {
      "user": _vm.user
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activelink == 1) ? _c('app-messages', {
    attrs: {
      "messages": _vm.messages,
      "users": _vm.users,
      "friends": _vm.friends,
      "userloginid": _vm.loginid
    },
    on: {
      "addfriend": _vm.addfriend,
      "addgroup": _vm.follow,
      "addmessage": _vm.addmsg
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activelink == 2) ? _c('app-news', {
    attrs: {
      "posts": _vm.posts,
      "users": _vm.users,
      "loginid": _vm.loginid,
      "admingroups": _vm.admingroups,
      "groups": _vm.groupsall,
      "comments": _vm.comments
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activelink == 3) ? _c('app-groups', {
    attrs: {
      "groups": _vm.groups,
      "users": _vm.users,
      "loginid": _vm.loginid
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activelink == 4) ? _c('app-friends', {
    attrs: {
      "friends": _vm.friends
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activelink == 5) ? _c('app-feeduser', {
    attrs: {
      "posts": _vm.personalposts,
      "loginid": _vm.loginid,
      "users": _vm.users,
      "admingroups": _vm.admingroups,
      "groups": _vm.groupsall,
      "comments": _vm.comments
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activelink == 6) ? _c('app-addpost', {
    attrs: {
      "loginid": _vm.loginid,
      "admingroups": _vm.admingroups
    },
    on: {
      "add": _vm.addpost
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activelink == 7) ? _c('app-addgroup', {
    on: {
      "add": _vm.addgroup
    }
  }) : _vm._e(), _vm._v(" "), (_vm.activelink == 8) ? _c('app-cardsuser', {
    attrs: {
      "personalcards": _vm.personalcards
    },
    on: {
      "edit": _vm.editcard
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h3', [_vm._v("Groups")]), _vm._v(" "), _c('p', [_c('table', {
    staticClass: "table"
  }, _vm._l((_vm.groups), function(g, k) {
    return _c('tr', {
      key: k
    }, [_c('td', [_c('b', [_vm._v(_vm._s(g.name))]), _vm._v(" "), _c('br'), _vm._v(_vm._s(g.category)), _c('br'), _vm._v("Followers: "), _c('span', {
      staticClass: "badge badge-success"
    }, [_vm._v(_vm._s(g.followers.length))]), _c('br'), _vm._v(" "), _c('ul', _vm._l((_vm.filterFollowers(g)), function(f, k) {
      return _c('li', {
        key: k
      }, [_c('img', {
        attrs: {
          "src": _vm.users[f].avatar,
          "title": (f === _vm.loginid) ? 'You' : (_vm.users[f].name)
        }
      })])
    }), 0), _vm._v("\n         Posts: "), _c('span', {
      staticClass: "badge badge-success"
    }, [_vm._v(_vm._s(g.idNews.length))]), _vm._v(" "), (g.idAdmin === _vm.loginid) ? _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("Admin")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(g.desc))])])
  }), 0)])])
},staticRenderFns: []}

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "form-signin"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputLogin"
    }
  }, [_vm._v("Login")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.login),
      expression: "login"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "login",
      "id": "inputLogin",
      "placeholder": "Login",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.login)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.login = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputPassword"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputPassword",
      "placeholder": "Password",
      "required": ""
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputRetryPassword"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.retrypassword),
      expression: "retrypassword"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputRetryPassword",
      "placeholder": "Retry Password",
      "required": ""
    },
    domProps: {
      "value": (_vm.retrypassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.retrypassword = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputEmail",
      "placeholder": "Email",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputName"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputName",
      "placeholder": "Name",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputAge"
    }
  }, [_vm._v("Age")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.age),
      expression: "age"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "id": "inputAge",
      "placeholder": "Age",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.age)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.age = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputAge"
    }
  }, [_vm._v("Gender")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editgender),
      expression: "editgender"
    }],
    attrs: {
      "type": "radio",
      "name": "gender",
      "value": "men"
    },
    domProps: {
      "checked": _vm._q(_vm.editgender, "men")
    },
    on: {
      "change": function($event) {
        _vm.editgender = "men"
      }
    }
  }), _vm._v("Men\n     "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editgender),
      expression: "editgender"
    }],
    attrs: {
      "type": "radio",
      "name": "gender",
      "value": "women"
    },
    domProps: {
      "checked": _vm._q(_vm.editgender, "women")
    },
    on: {
      "change": function($event) {
        _vm.editgender = "women"
      }
    }
  }), _vm._v("Women\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputCity"
    }
  }, [_vm._v("City")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.city),
      expression: "city"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputCity",
      "placeholder": "City",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.city)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.city = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputSpecialization"
    }
  }, [_vm._v("Specialization")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.specialization),
      expression: "specialization"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputSpecialization",
      "placeholder": "Specialization",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.specialization)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.specialization = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-primary btn-block btn-sign",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.signupfun.apply(null, arguments)
      }
    }
  }, [_vm._v("Sign up")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header__logo text-center"
  }, [_c('h1', {
    staticClass: "header__logo__title"
  }, [_c('span', [_vm._v("N")]), _c('span', [_vm._v("e")]), _c('span', [_vm._v("w")]), _c('span', [_vm._v("s")]), _vm._v(" "), _c('span', [_vm._v("p")]), _c('span', [_vm._v("o")]), _c('span', [_vm._v("r")]), _c('span', [_vm._v("t")]), _c('span', [_vm._v("a")]), _c('span', [_vm._v("l")])]), _vm._v(" "), _c('p', {
    staticClass: "signparagraph"
  }, [_vm._v("\n      Vue.js news portal\n  ")])])
}]}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l((_vm.groups), function(g, k) {
    return _c('div', {
      key: k,
      staticClass: "card mb-2 gblock"
    }, [_c('div', {
      staticClass: "card-header"
    }, [_vm._v(_vm._s(g.name))]), _vm._v(" "), _c('div', {
      staticClass: "card-body"
    }, [_c('p', {
      staticClass: "card-text"
    }, [_vm._v(_vm._s(g.desc))])]), _vm._v(" "), _c('div', {
      staticClass: "card-footer"
    }, [_c('span', {
      staticClass: "text-primary"
    }, [(g.category.length) ? _c('span', [_c('i', {
      staticClass: "fa fa-tags"
    }), _vm._v(_vm._s(g.category))]) : _vm._e(), _c('br'), _vm._v(" "), _c('ul', [_c('li', [(g.followers.length) ? _c('span', [_c('i', {
      staticClass: "fa fa-user"
    }), _vm._v(" " + _vm._s(g.followers.length))]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.filterFollowers(g)), function(f, k) {
      return _c('li', {
        key: k
      }, [_c('img', {
        attrs: {
          "src": _vm.users[f].avatar,
          "title": (f === _vm.loginid) ? 'You' : (_vm.users[f].name)
        }
      })])
    })], 2), _vm._v(" "), _c('span', {
      staticClass: "admin-group"
    }, [_vm._v(_vm._s((g.idAdmin === _vm.loginid) ? 'You' : ('@' + _vm.users[g.idAdmin].login)))]), _vm._v(" "), (_vm.groupread(g)) ? _c('span', {
      staticClass: "readyou"
    }, [_vm._v("You read")]) : _c('span', {
      staticClass: "readyou",
      on: {
        "click": function($event) {
          return _vm.groupfollow(g)
        }
      }
    }, [_vm._v("Follow")])])])])
  }), 0)])
},staticRenderFns: []}

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_c('p', [_vm._v("© Ivan Shavliuga (Ivanov) Belarus, Novopolotsk")])])
}]}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h3', [_vm._v("Profile")]), _vm._v(" "), _c('p', [_c('table', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "rowspan": "2"
    }
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.user.avatar,
      "width": "80",
      "height": "80"
    }
  })]), _c('td', [_vm._v(_vm._s(_vm.user.login))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticStyle: {
      "background": "#fff",
      "border-top": "none"
    }
  }, [_vm._v(_vm._s(_vm.user.rang))])]), _vm._v(" "), (!_vm.showeditage) ? _c('tr', {
    on: {
      "click": function($event) {
        return _vm.showflagage()
      }
    }
  }, [_c('td', [_vm._v("Age")]), _c('td', [_vm._v(_vm._s(_vm.user.age))])]) : _c('tr', [_c('td', [_vm._v("Age")]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editage),
      expression: "editage"
    }],
    attrs: {
      "type": "number",
      "placeholder": "age"
    },
    domProps: {
      "value": (_vm.editage)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editage = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        return _vm.checkage()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  })])])]), _vm._v(" "), (!_vm.showeditgender) ? _c('tr', {
    on: {
      "click": function($event) {
        return _vm.showflaggender()
      }
    }
  }, [_c('td', [_vm._v("Gender")]), _c('td', [_vm._v(_vm._s(_vm.user.gender))])]) : _c('tr', [_c('td', [_vm._v("Gender")]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editgender),
      expression: "editgender"
    }],
    attrs: {
      "type": "radio",
      "name": "gender",
      "value": "men"
    },
    domProps: {
      "checked": _vm._q(_vm.editgender, "men")
    },
    on: {
      "change": function($event) {
        _vm.editgender = "men"
      }
    }
  }), _vm._v("Men\n                                   "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editgender),
      expression: "editgender"
    }],
    attrs: {
      "type": "radio",
      "name": "gender",
      "value": "women"
    },
    domProps: {
      "checked": _vm._q(_vm.editgender, "women")
    },
    on: {
      "change": function($event) {
        _vm.editgender = "women"
      }
    }
  }), _vm._v("Women\n      "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        return _vm.checkgender()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  })])])]), _vm._v(" "), (!_vm.showeditname) ? _c('tr', {
    on: {
      "click": function($event) {
        return _vm.showflagname()
      }
    }
  }, [_c('td', [_vm._v("Name")]), _c('td', [_vm._v(_vm._s(_vm.user.name))])]) : _c('tr', [_c('td', [_vm._v("Name")]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editname),
      expression: "editname"
    }],
    attrs: {
      "type": "text",
      "placeholder": "name"
    },
    domProps: {
      "value": (_vm.editname)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editname = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        return _vm.checkname()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  })])])]), _vm._v(" "), (!_vm.showeditspec) ? _c('tr', {
    on: {
      "click": function($event) {
        return _vm.showflagspec()
      }
    }
  }, [_c('td', [_vm._v("Specialization")]), _c('td', [_vm._v(_vm._s(_vm.user.spec))])]) : _c('tr', [_c('td', [_vm._v("Specialization")]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editspec),
      expression: "editspec"
    }],
    attrs: {
      "type": "text",
      "placeholder": "specialization"
    },
    domProps: {
      "value": (_vm.editspec)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editspec = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        return _vm.checkspec()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  })])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Skills")]), _c('td', [_vm._l((_vm.user.skills), function(s, ks) {
    return _c('span', {
      key: ks
    }, [_c('span', {
      staticClass: "skill"
    }, [_vm._v(_vm._s(s))]), _c('span', {
      staticClass: "del",
      on: {
        "click": function($event) {
          return _vm.delskill(ks)
        }
      }
    }, [_vm._v("x")])])
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.skill),
      expression: "skill"
    }],
    attrs: {
      "type": "text",
      "placeholder": "skill"
    },
    domProps: {
      "value": (_vm.skill)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.skill = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-adds",
    on: {
      "click": function($event) {
        return _vm.addskill()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })])], 2)]), _vm._v(" "), (!_vm.showeditcity) ? _c('tr', {
    on: {
      "click": function($event) {
        return _vm.showflagcity()
      }
    }
  }, [_c('td', [_vm._v("City")]), _c('td', [_vm._v(_vm._s(_vm.user.city))])]) : _c('tr', [_c('td', [_vm._v("City")]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editcity),
      expression: "editcity"
    }],
    attrs: {
      "type": "text",
      "placeholder": "city"
    },
    domProps: {
      "value": (_vm.editcity)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editcity = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-adds",
    on: {
      "click": function($event) {
        return _vm.checkcity()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check"
  })])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Link profile")]), _c('td', [_vm._v(_vm._s(_vm.user.link))])]), _vm._v(" "), _vm._l((_vm.user.contacts), function(c, kc) {
    return _c('tr', {
      key: kc
    }, [_c('td', [_vm._v("\n     " + _vm._s(c.messenger) + "\n     ")]), _c('td', [_vm._v(_vm._s(c.contact))])])
  }), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mess),
      expression: "mess"
    }],
    attrs: {
      "type": "text",
      "placeholder": "messenger"
    },
    domProps: {
      "value": (_vm.mess)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mess = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cont),
      expression: "cont"
    }],
    attrs: {
      "type": "text",
      "placeholder": "contact"
    },
    domProps: {
      "value": (_vm.cont)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cont = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-adds",
    on: {
      "click": function($event) {
        return _vm.addcont()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })])])])], 2)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v("Information of user")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v("Contacts")])])
}]}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h3', [_vm._v("Messages")]), _vm._v(" "), _c('p', [_c('table', {
    staticClass: "table"
  }, _vm._l((_vm.messages), function(m, km) {
    return _c('tbody', {
      key: km,
      class: m.read ? 'read' : 'unread'
    }, [_c('tr', {
      staticClass: "msg__title"
    }, [_c('td', [_c('input', {
      staticClass: "check",
      attrs: {
        "type": "checkbox"
      },
      on: {
        "click": function($event) {
          return _vm.readmess(km)
        }
      }
    }), _vm._v(" "), _c('span', {
      style: (m.to ? 'color:red' : 'color:purple'),
      on: {
        "click": function($event) {
          return _vm.showmess(km)
        }
      }
    }, [_vm._v(_vm._s(m.to == _vm.userloginid ? 'inbox' : 'outbox'))]), _vm._v(" "), _c('span', {
      on: {
        "click": function($event) {
          return _vm.showmess(km)
        }
      }
    }, [_vm._v(" " + _vm._s(m.type === "system" ? "system" : _vm.users[m.from].login))])]), _vm._v(" "), _c('td', {
      on: {
        "click": function($event) {
          return _vm.showmess(km)
        }
      }
    }, [_vm._v(_vm._s(m.title))])]), _vm._v(" "), _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (m.show),
        expression: "m.show"
      }],
      staticClass: "msg__body"
    }, [_c('td', {
      staticClass: "msg__body",
      style: ((m.read) ? 'font-weight:normal' : 'font-weight:bold'),
      attrs: {
        "colspan": "3"
      }
    }, [_c('div', {
      domProps: {
        "innerHTML": _vm._s(m.body)
      }
    })])]), _vm._v(" "), (m.show && m.type === 'user-add' && !_vm.addfriendflag && m.to == _vm.userloginid) ? _c('tr', {
      staticClass: "msg__body"
    }, [_c('td', {
      attrs: {
        "colspan": "3"
      }
    }, [_c('button', {
      staticClass: "btn btn-success",
      on: {
        "click": function($event) {
          return _vm.addfriend(m.from)
        }
      }
    }, [_vm._v("Add friend")])])]) : _vm._e(), _vm._v(" "), (m.show && m.type === 'group-add' && !_vm.addgroupflag && m.to == _vm.userloginid) ? _c('tr', {
      staticClass: "msg__body"
    }, [_c('td', {
      attrs: {
        "colspan": "3"
      }
    }, [_c('button', {
      staticClass: "btn btn-success",
      on: {
        "click": function($event) {
          return _vm.addgroup(m.groupId)
        }
      }
    }, [_vm._v("Follow")])])]) : _vm._e()])
  }), 0)]), _vm._v(" "), _c('app-addmessage', {
    attrs: {
      "friends": _vm.friends,
      "userloginid": _vm.userloginid
    },
    on: {
      "addmessage": _vm.addmsg
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l((_vm.posts), function(n, k) {
    return _c('app-post', {
      key: k,
      attrs: {
        "post": n,
        "users": _vm.users,
        "loginid": _vm.loginid,
        "admingroups": _vm.admingroups,
        "comments": _vm.comments,
        "groups": _vm.groups
      }
    })
  }), 1)])
},staticRenderFns: []}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main', [_c('section', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l((_vm.users), function(u, k) {
    return _c('article', {
      key: k,
      staticClass: "card mb-2 block"
    }, [_c('div', {
      staticClass: "card-header"
    }, [_vm._v(_vm._s(u.name))]), _vm._v(" "), _c('div', {
      staticClass: "card-body"
    }, [_c('h6', {
      staticClass: "card-title"
    }, [_vm._v(_vm._s(u.rang))]), _vm._v(" "), _c('div', {
      staticClass: "card-text"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": u.avatar,
        "width": "80",
        "height": "80"
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(u.gender) + ", " + _vm._s(u.age))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(u.spec))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(u.city))]), _vm._v(" "), _c('p', _vm._l((u.skills), function(s, k) {
      return _c('span', {
        key: k
      }, [_vm._v(_vm._s(s) + " ")])
    }), 0), _vm._v(" "), _c('p', [_vm._v("Friends: " + _vm._s((u.friends.length > 1) ? (u.friends.length - 1) : 'not friends'))])])]), _vm._v(" "), _c('div', {
      staticClass: "card-footer"
    }, [_c('span', {
      staticClass: "text-primary login-user"
    }, [_vm._v("@" + _vm._s(u.login))]), _vm._v(" "), (_vm.friendscheck(u)) ? _c('span', {
      staticClass: "friend"
    }, [_vm._v(_vm._s((u.id === _vm.loginid) ? ('You') : ('Friend')))]) : _c('span', {
      staticClass: "friend",
      on: {
        "click": function($event) {
          return _vm.addfriend(u)
        }
      }
    }, [_vm._v("Add friend")])])])
  }), 0)])])
},staticRenderFns: []}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "card mb-2 addpost"
  }, [_c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.post.title),
      expression: "post.title"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "title"
    },
    domProps: {
      "value": (_vm.post.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.post, "title", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "input-group mb-3"
  }, [_vm._m(0), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.post.groupId),
      expression: "post.groupId"
    }],
    staticClass: "custom-select",
    attrs: {
      "id": "groups",
      "placeholder": "groups"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.post, "groupId", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "-1"
    },
    on: {
      "click": function($event) {
        _vm.post.groupId = -1
      }
    }
  }, [_vm._v("Personal post")]), _vm._v(" "), _vm._l((_vm.admingroups), function(gid, k) {
    return _c('option', {
      key: k,
      domProps: {
        "value": gid.id
      }
    }, [_vm._v(_vm._s(gid.name))])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "card-text"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.post.desc),
      expression: "post.desc"
    }],
    staticClass: "form-control",
    attrs: {
      "cols": "50",
      "rows": "7"
    },
    domProps: {
      "value": (_vm.post.desc)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.post, "desc", $event.target.value)
      }
    }
  }, [_vm._v("text")])]), _vm._v(" "), _c('div', {
    staticClass: "input-group mb-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.catnew),
      expression: "catnew"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "category"
    },
    domProps: {
      "value": (_vm.catnew)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.catnew = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-append"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.addcat
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('i', {
    staticClass: "fa fa-tags"
  }), _vm._v(" "), _vm._l((_vm.post.cat), function(c, kc) {
    return _c('span', {
      key: kc,
      on: {
        "click": function($event) {
          return _vm.delcat(kc)
        }
      }
    }, [_vm._v(_vm._s(c + " "))])
  }), _c('hr'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success my-2 my-sm-0",
    on: {
      "click": _vm.sendpost
    }
  }, [_vm._v("Send post")])], 2)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-prepend"
  }, [_c('label', {
    staticClass: "input-group-text",
    attrs: {
      "for": "groups"
    }
  }, [_vm._v("Groups")])])
}]}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "alert alert-success",
    attrs: {
      "role": "alert"
    }
  }, [_c('h4', {
    staticClass: "alert-heading"
  }, [_vm._v(_vm._s(_vm.alert.header))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.alert.body))]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
    staticClass: "mb-0"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.closebtn
    }
  }, [_vm._v("Close")]), _vm._v(" " + _vm._s(_vm.alert.status))])])
},staticRenderFns: []}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h3', [_vm._v("Cards")]), _vm._v(" "), (_vm.cardcheck) ? _c('div', {
    staticClass: "card mb-2 addpost"
  }, [_c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.card.header),
      expression: "card.header"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "header"
    },
    domProps: {
      "value": (_vm.card.header)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "header", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('p', {
    staticClass: "card-text"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.card.body),
      expression: "card.body"
    }],
    staticClass: "form-control",
    attrs: {
      "cols": "50",
      "rows": "7"
    },
    domProps: {
      "value": (_vm.card.body)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "body", $event.target.value)
      }
    }
  }, [_vm._v("text")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.card.category),
      expression: "card.category"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "category"
    },
    domProps: {
      "value": (_vm.card.category)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.card, "category", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-outline-success my-2 my-sm-0",
    on: {
      "click": _vm.sendcard
    }
  }, [_vm._v("Send card")])])])])]) : _vm._e(), _vm._v(" "), _c('app-cards', {
    attrs: {
      "cards": _vm.personalcards
    },
    on: {
      "cardclick": _vm.cardclick
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "header__profile"
  }, [_c('div', {
    staticClass: "header__profile__avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar,
      "alt": "profile avatar"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "header__profile__info"
  }, [_c('p', [_vm._v(_vm._s(_vm.user.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.user.rang) + " @" + _vm._s(_vm.user.login))])])]), _vm._v(" "), _c('app-navigation')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header__logo"
  }, [_c('h1', {
    staticClass: "header__logo__title"
  }, [_c('span', [_vm._v("N")]), _c('span', [_vm._v("e")]), _c('span', [_vm._v("w")]), _c('span', [_vm._v("s")]), _vm._v(" "), _c('span', [_vm._v("p")]), _c('span', [_vm._v("o")]), _c('span', [_vm._v("r")]), _c('span', [_vm._v("t")]), _c('span', [_vm._v("a")]), _c('span', [_vm._v("l")])]), _vm._v(" "), _c('p', [_vm._v("The latest news")])])
}]}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h3', [_vm._v("Add new message")]), _vm._v(" "), _c('div', {
    staticClass: "card mb-2 msgadd"
  }, [_c('form', [_c('div', {
    staticClass: "card-header"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.msg.title),
      expression: "msg.title"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "title"
    },
    domProps: {
      "value": (_vm.msg.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.msg, "title", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "card-body msg-body"
  }, [_c('p', {
    staticClass: "card-text"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.msg.body),
      expression: "msg.body"
    }],
    staticClass: "form-control",
    attrs: {
      "cols": "50",
      "rows": "7"
    },
    domProps: {
      "value": (_vm.msg.body)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.msg, "body", $event.target.value)
      }
    }
  }, [_vm._v("text")])]), _c('div', {
    staticClass: "input-group mb-3"
  }, [_vm._m(0), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.msg.to),
      expression: "msg.to"
    }],
    staticClass: "custom-select",
    attrs: {
      "id": "groups",
      "placeholder": "users"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.msg, "to", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }
    }
  }, _vm._l((_vm.friends), function(fid, k) {
    return _c('option', {
      key: k,
      attrs: {
        "default": _vm.msg.to === fid.id
      },
      domProps: {
        "value": fid.id
      }
    }, [_vm._v(_vm._s(fid.name))])
  }), 0)]), _vm._v(" "), _c('p')]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-outline-success my-2 my-sm-0",
    on: {
      "click": _vm.sendmsg
    }
  }, [_vm._v("Send message")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-prepend"
  }, [_c('label', {
    staticClass: "input-group-text",
    attrs: {
      "for": "groups"
    }
  }, [_vm._v("Users")])])
}]}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "form-signin"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputLogin"
    }
  }, [_vm._v("Login")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.login),
      expression: "login"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "login",
      "id": "inputLogin",
      "placeholder": "Login",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.login)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.login = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-label-group signelem"
  }, [_c('label', {
    attrs: {
      "for": "inputPassword"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputPassword",
      "placeholder": "Password",
      "required": ""
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-primary btn-block btn-sign",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.signinfun.apply(null, arguments)
      }
    }
  }, [_vm._v("Sign in")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header__logo text-center"
  }, [_c('h1', {
    staticClass: "header__logo__title"
  }, [_c('span', [_vm._v("N")]), _c('span', [_vm._v("e")]), _c('span', [_vm._v("w")]), _c('span', [_vm._v("s")]), _vm._v(" "), _c('span', [_vm._v("p")]), _c('span', [_vm._v("o")]), _c('span', [_vm._v("r")]), _c('span', [_vm._v("t")]), _c('span', [_vm._v("a")]), _c('span', [_vm._v("l")])]), _vm._v(" "), _c('p', {
    staticClass: "signparagraph"
  }, [_vm._v("\n      Vue.js news portal\n  ")])])
}]}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h3', [_vm._v("Add new group")]), _vm._v(" "), _c('div', {
    staticClass: "card mb-2 addpost"
  }, [_c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.group.name),
      expression: "group.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.group.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.group, "name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('p', {
    staticClass: "card-text"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.group.desc),
      expression: "group.desc"
    }],
    staticClass: "form-control",
    attrs: {
      "cols": "50",
      "rows": "7"
    },
    domProps: {
      "value": (_vm.group.desc)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.group, "desc", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.group.category),
      expression: "group.category"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.group.category)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.group, "category", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success my-2 my-sm-0 sendbutton",
    on: {
      "click": _vm.sendgroup
    }
  }, [_vm._v("Send post")])])])])])])
},staticRenderFns: []}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row mb-2"
  }, _vm._l((_vm.cards), function(c, k) {
    return _c('app-card', {
      key: k,
      attrs: {
        "card": c
      },
      on: {
        "cardclick": function($event) {
          return _vm.clickcard(k)
        }
      }
    })
  }), 1)
},staticRenderFns: []}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(_vm.userlogin) ? _c('div', [_c('app-header'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('router-view')], 1), _vm._v(" "), _c('app-footer')], 1) : _c('div', {
    staticClass: "userlogin"
  }, [(!_vm.registration) ? _c('app-signin', {
    attrs: {
      "users": _vm.users
    },
    on: {
      "signin": _vm.signinfun
    }
  }) : _c('app-signup', {
    attrs: {
      "users": _vm.users
    },
    on: {
      "signup": _vm.signupfun
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "signlink",
    attrs: {
      "title": (!_vm.registration) ? 'Sign up' : 'sign in'
    },
    on: {
      "click": function($event) {
        _vm.registration = !_vm.registration
      }
    }
  }, [_vm._v(_vm._s((!_vm.registration) ? 'Sign up' : 'sign in'))])], 1)])
},staticRenderFns: []}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l((_vm.posts), function(n, k) {
    return _c('app-post', {
      key: k,
      attrs: {
        "post": n,
        "users": _vm.users,
        "loginid": _vm.loginid,
        "admingroups": _vm.admingroups,
        "groups": _vm.groups,
        "comments": _vm.comments
      }
    })
  }), 1)])
},staticRenderFns: []}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h3', [_vm._v("Friends")]), _vm._v(" "), _c('p', [_c('table', {
    staticClass: "table"
  }, _vm._l((_vm.friends), function(f, k) {
    return _c('tbody', {
      key: k
    }, [_c('tr', [_c('th', {
      attrs: {
        "colspan": "2"
      }
    }, [_vm._v(_vm._s(f.name))])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "2"
      }
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": f.avatar,
        "width": "80",
        "height": "80"
      }
    })]), _c('td', [_vm._v(_vm._s(f.login))])]), _vm._v(" "), _c('tr', [_c('td', {
      staticStyle: {
        "background": "#fff",
        "border-top": "none"
      }
    }, [_vm._v(_vm._s(f.rang))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Age")]), _c('td', [_vm._v(_vm._s(f.age))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Gender")]), _c('td', [_vm._v(_vm._s(f.gender))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Specialization")]), _c('td', [_vm._v(_vm._s(f.spec))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Skills")]), _c('td', _vm._l((f.skills), function(s, ks) {
      return _c('span', {
        key: ks
      }, [_c('span', {
        staticClass: "skill"
      }, [_vm._v(_vm._s(s + ", "))])])
    }), 0)]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("City")]), _c('td', [_vm._v(_vm._s(f.city))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Link profile")]), _c('td', [_vm._v(_vm._s(f.link))])]), _vm._v(" "), _vm._l((f.contacts), function(c, kc) {
      return _c('tr', {
        key: kc
      }, [_c('td', [_vm._v("\n " + _vm._s(c.messenger) + "\n ")]), _c('td', [_vm._v(_vm._s(c.contact))])])
    })], 2)
  }), 0)])])
},staticRenderFns: []}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2256c8ae", content, true);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("9b2bb492", content, true);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("613991ee", content, true);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("20ea4efc", content, true);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("e7e5d66e", content, true);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4f82caac", content, true);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("127e125f", content, true);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5e5b0518", content, true);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4c140282", content, true);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("e4f17bb0", content, true);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("164748a9", content, true);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5aad168a", content, true);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("31e20b09", content, true);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("363e638b", content, true);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("ac667b58", content, true);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("36e2a1db", content, true);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("23571598", content, true);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1e48cf81", content, true);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4bbb4dec", content, true);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4a88147a", content, true);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("242a1725", content, true);

/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var e=Object.freeze({});function t(e){return null==e}function n(e){return null!=e}function r(e){return!0===e}function i(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}var a=Object.prototype.toString;function s(e){return"[object Object]"===a.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return n(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function l(e){return null==e?"":Array.isArray(e)||s(e)&&e.toString===a?JSON.stringify(e,null,2):String(e)}function f(e){var t=parseFloat(e);return isNaN(t)?e:t}function p(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var d=p("slot,component",!0),v=p("key,ref,slot,slot-scope,is");function h(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function y(e,t){return m.call(e,t)}function g(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var _=/-(\w)/g,b=g(function(e){return e.replace(_,function(e,t){return t?t.toUpperCase():""})}),$=g(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),w=/\B([A-Z])/g,C=g(function(e){return e.replace(w,"-$1").toLowerCase()});var x=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function k(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function A(e,t){for(var n in t)e[n]=t[n];return e}function O(e){for(var t={},n=0;n<e.length;n++)e[n]&&A(t,e[n]);return t}function S(e,t,n){}var T=function(e,t,n){return!1},N=function(e){return e};function E(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return E(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return E(e[n],t[n])})}catch(e){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(E(e[n],t))return n;return-1}function D(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var L="data-server-rendered",I=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:S,parsePlatformTagName:N,mustUseProp:T,async:!0,_lifecycleHooks:M},P=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function R(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+P.source+".$_\\d]");var B,U="__proto__"in{},V="undefined"!=typeof window,z="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=z&&WXEnvironment.platform.toLowerCase(),J=V&&window.navigator.userAgent.toLowerCase(),q=J&&/msie|trident/.test(J),W=J&&J.indexOf("msie 9.0")>0,Z=J&&J.indexOf("edge/")>0,G=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),X=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/)),Y={}.watch,Q=!1;if(V)try{var ee={};Object.defineProperty(ee,"passive",{get:function(){Q=!0}}),window.addEventListener("test-passive",null,ee)}catch(e){}var te=function(){return void 0===B&&(B=!V&&!z&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),B},ne=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"==typeof e&&/native code/.test(e.toString())}var ie,oe="undefined"!=typeof Symbol&&re(Symbol)&&"undefined"!=typeof Reflect&&re(Reflect.ownKeys);ie="undefined"!=typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ae=S,se=0,ce=function(){this.id=se++,this.subs=[]};ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){h(this.subs,e)},ce.prototype.depend=function(){ce.target&&ce.target.addDep(this)},ce.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},ce.target=null;var ue=[];function le(e){ue.push(e),ce.target=e}function fe(){ue.pop(),ce.target=ue[ue.length-1]}var pe=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,de);var ve=function(e){void 0===e&&(e="");var t=new pe;return t.text=e,t.isComment=!0,t};function he(e){return new pe(void 0,void 0,void 0,String(e))}function me(e){var t=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ye=Array.prototype,ge=Object.create(ye);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ye[e];R(ge,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var _e=Object.getOwnPropertyNames(ge),be=!0;function $e(e){be=e}var we=function(e){var t;this.value=e,this.dep=new ce,this.vmCount=0,R(e,"__ob__",this),Array.isArray(e)?(U?(t=ge,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];R(e,o,t[o])}}(e,ge,_e),this.observeArray(e)):this.walk(e)};function Ce(e,t){var n;if(o(e)&&!(e instanceof pe))return y(e,"__ob__")&&e.__ob__ instanceof we?n=e.__ob__:be&&!te()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new we(e)),t&&n&&n.vmCount++,n}function xe(e,t,n,r,i){var o=new ce,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Ce(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return ce.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!=t&&r!=r||s&&!c||(c?c.call(e,t):n=t,u=!i&&Ce(t),o.notify())}})}}function ke(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(xe(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Ae(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||y(e,t)&&(delete e[t],n&&n.dep.notify())}}we.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)xe(e,t[n])},we.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ce(e[t])};var Oe=F.optionMergeStrategies;function Se(e,t){if(!t)return e;for(var n,r,i,o=oe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)"__ob__"!==(n=o[a])&&(r=e[n],i=t[n],y(e,n)?r!==i&&s(r)&&s(i)&&Se(r,i):ke(e,n,i));return e}function Te(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?Se(r,i):i}:t?e?function(){return Se("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Ne(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Ee(e,t,n,r){var i=Object.create(e||null);return t?A(i,t):i}Oe.data=function(e,t,n){return n?Te(e,t,n):t&&"function"!=typeof t?e:Te(e,t)},M.forEach(function(e){Oe[e]=Ne}),I.forEach(function(e){Oe[e+"s"]=Ee}),Oe.watch=function(e,t,n,r){if(e===Y&&(e=void 0),t===Y&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in A(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Oe.props=Oe.methods=Oe.inject=Oe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return A(i,e),t&&A(i,t),i},Oe.provide=Te;var je=function(e,t){return void 0===t?e:t};function De(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[b(i)]={type:null});else if(s(n))for(var a in n)i=n[a],o[b(a)]=s(i)?i:{type:i};e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(s(n))for(var o in n){var a=n[o];r[o]=s(a)?A({from:o},a):{from:a}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=De(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=De(e,t.mixins[r],n);var o,a={};for(o in e)c(o);for(o in t)y(e,o)||c(o);function c(r){var i=Oe[r]||je;a[r]=i(e[r],t[r],n,r)}return a}function Le(e,t,n,r){if("string"==typeof n){var i=e[t];if(y(i,n))return i[n];var o=b(n);if(y(i,o))return i[o];var a=$(o);return y(i,a)?i[a]:i[n]||i[o]||i[a]}}function Ie(e,t,n,r){var i=t[e],o=!y(n,e),a=n[e],s=Re(Boolean,i.type);if(s>-1)if(o&&!y(i,"default"))a=!1;else if(""===a||a===C(e)){var c=Re(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!y(t,"default"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Fe(t.type)?r.call(e):r}(r,i,e);var u=be;$e(!0),Ce(a),$e(u)}return a}var Me=/^\s*function (\w+)/;function Fe(e){var t=e&&e.toString().match(Me);return t?t[1]:""}function Pe(e,t){return Fe(e)===Fe(t)}function Re(e,t){if(!Array.isArray(t))return Pe(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Pe(t[n],e))return n;return-1}function He(e,t,n){le();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Ue(e,r,"errorCaptured hook")}}Ue(e,t,n)}finally{fe()}}function Be(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&u(o)&&!o._handled&&(o.catch(function(e){return He(e,r,i+" (Promise/async)")}),o._handled=!0)}catch(e){He(e,r,i)}return o}function Ue(e,t,n){if(F.errorHandler)try{return F.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Ve(t,null,"config.errorHandler")}Ve(e,t,n)}function Ve(e,t,n){if(!V&&!z||"undefined"==typeof console)throw e;console.error(e)}var ze,Ke=!1,Je=[],qe=!1;function We(){qe=!1;var e=Je.slice(0);Je.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&re(Promise)){var Ze=Promise.resolve();ze=function(){Ze.then(We),G&&setTimeout(S)},Ke=!0}else if(q||"undefined"==typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ze="undefined"!=typeof setImmediate&&re(setImmediate)?function(){setImmediate(We)}:function(){setTimeout(We,0)};else{var Ge=1,Xe=new MutationObserver(We),Ye=document.createTextNode(String(Ge));Xe.observe(Ye,{characterData:!0}),ze=function(){Ge=(Ge+1)%2,Ye.data=String(Ge)},Ke=!0}function Qe(e,t){var n;if(Je.push(function(){if(e)try{e.call(t)}catch(e){He(e,t,"nextTick")}else n&&n(t)}),qe||(qe=!0,ze()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var et=new ie;function tt(e){!function e(t,n){var r,i;var a=Array.isArray(t);if(!a&&!o(t)||Object.isFrozen(t)||t instanceof pe)return;if(t.__ob__){var s=t.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(a)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,et),et.clear()}var nt=g(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function rt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return Be(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Be(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function it(e,n,i,o,a,s){var c,u,l,f;for(c in e)u=e[c],l=n[c],f=nt(c),t(u)||(t(l)?(t(u.fns)&&(u=e[c]=rt(u,s)),r(f.once)&&(u=e[c]=a(f.name,u,f.capture)),i(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,e[c]=l));for(c in n)t(e[c])&&o((f=nt(c)).name,n[c],f.capture)}function ot(e,i,o){var a;e instanceof pe&&(e=e.data.hook||(e.data.hook={}));var s=e[i];function c(){o.apply(this,arguments),h(a.fns,c)}t(s)?a=rt([c]):n(s.fns)&&r(s.merged)?(a=s).fns.push(c):a=rt([s,c]),a.merged=!0,e[i]=a}function at(e,t,r,i,o){if(n(t)){if(y(t,r))return e[r]=t[r],o||delete t[r],!0;if(y(t,i))return e[r]=t[i],o||delete t[i],!0}return!1}function st(e){return i(e)?[he(e)]:Array.isArray(e)?function e(o,a){var s=[];var c,u,l,f;for(c=0;c<o.length;c++)t(u=o[c])||"boolean"==typeof u||(l=s.length-1,f=s[l],Array.isArray(u)?u.length>0&&(ct((u=e(u,(a||"")+"_"+c))[0])&&ct(f)&&(s[l]=he(f.text+u[0].text),u.shift()),s.push.apply(s,u)):i(u)?ct(f)?s[l]=he(f.text+u):""!==u&&s.push(he(u)):ct(u)&&ct(f)?s[l]=he(f.text+u.text):(r(o._isVList)&&n(u.tag)&&t(u.key)&&n(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(e):void 0}function ct(e){return n(e)&&n(e.text)&&!1===e.isComment}function ut(e,t){if(e){for(var n=Object.create(null),r=oe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var a=e[o].from,s=t;s;){if(s._provided&&y(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}}return n}}function lt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(ft)&&delete n[u];return n}function ft(e){return e.isComment&&!e.asyncFactory||" "===e.text}function pt(e){return e.isComment&&e.asyncFactory}function dt(t,n,r){var i,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==e&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=vt(n,c,t[c]))}else i={};for(var u in n)u in i||(i[u]=ht(n,u));return t&&Object.isExtensible(t)&&(t._normalized=i),R(i,"$stable",a),R(i,"$key",s),R(i,"$hasNormal",o),i}function vt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({}),t=(e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:st(e))&&e[0];return e&&(!t||1===e.length&&t.isComment&&!pt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function ht(e,t){return function(){return e[t]}}function mt(e,t){var r,i,a,s,c;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=t(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=t(i+1,i);else if(o(e))if(oe&&e[Symbol.iterator]){r=[];for(var u=e[Symbol.iterator](),l=u.next();!l.done;)r.push(t(l.value,r.length)),l=u.next()}else for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=t(e[c],c,i);return n(r)||(r=[]),r._isVList=!0,r}function yt(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=A(A({},r),n)),i=o(n)||("function"==typeof t?t():t)):i=this.$slots[e]||("function"==typeof t?t():t);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function gt(e){return Le(this.$options,"filters",e)||N}function _t(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function bt(e,t,n,r,i){var o=F.keyCodes[t]||n;return i&&r&&!F.keyCodes[t]?_t(i,r):o?_t(o,e):r?C(r)!==t:void 0===e}function $t(e,t,n,r,i){if(n)if(o(n)){var a;Array.isArray(n)&&(n=O(n));var s=function(o){if("class"===o||"style"===o||v(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||F.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=b(o),u=C(o);c in a||u in a||(a[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))};for(var c in n)s(c)}else;return e}function wt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(xt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r)}function Ct(e,t,n){return xt(e,"__once__"+t+(n?"_"+n:""),!0),e}function xt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&kt(e[r],t+"_"+r,n);else kt(e,t,n)}function kt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function At(e,t){if(t)if(s(t)){var n=e.on=e.on?A({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Ot(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Ot(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function St(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Tt(e,t){return"string"==typeof e?t+e:e}function Nt(e){e._o=Ct,e._n=f,e._s=l,e._l=mt,e._t=yt,e._q=E,e._i=j,e._m=wt,e._f=gt,e._k=bt,e._b=$t,e._v=he,e._e=ve,e._u=Ot,e._g=At,e._d=St,e._p=Tt}function Et(t,n,i,o,a){var s,c=this,u=a.options;y(o,"_uid")?(s=Object.create(o))._original=o:(s=o,o=o._original);var l=r(u._compiled),f=!l;this.data=t,this.props=n,this.children=i,this.parent=o,this.listeners=t.on||e,this.injections=ut(u.inject,o),this.slots=function(){return c.$slots||dt(t.scopedSlots,c.$slots=lt(i,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return dt(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=dt(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var i=Ht(s,e,t,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return Ht(s,e,t,n,r,f)}}function jt(e,t,n,r,i){var o=me(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function Dt(e,t){for(var n in t)e[b(n)]=t[n]}Nt(Et.prototype);var Lt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;Lt.prepatch(r,r)}else{(e.componentInstance=function(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;n(i)&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns);return new e.componentOptions.Ctor(r)}(e,Zt)).$mount(t?e.elm:void 0,t)}},prepatch:function(t,n){var r=n.componentOptions;!function(t,n,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==e&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key||!a&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=o,t.$attrs=i.data.attrs||e,t.$listeners=r||e,n&&t.$options.props){$e(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],v=t.$options.props;l[d]=Ie(d,v,n,t)}$e(!0),t.$options.propsData=n}r=r||e;var h=t.$options._parentListeners;t.$options._parentListeners=r,Wt(t,r,h),u&&(t.$slots=lt(o,i.context),t.$forceUpdate())}(n.componentInstance=t.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Qt(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,tn.push(t)):Yt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,Xt(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);Qt(t,"deactivated")}}(t,!0):t.$destroy())}},It=Object.keys(Lt);function Mt(i,a,s,c,l){if(!t(i)){var f=s.$options._base;if(o(i)&&(i=f.extend(i)),"function"==typeof i){var p;if(t(i.cid)&&void 0===(i=function(e,i){if(r(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=Ut;a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a);if(r(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var s=e.owners=[a],c=!0,l=null,f=null;a.$on("hook:destroyed",function(){return h(s,a)});var p=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0,null!==l&&(clearTimeout(l),l=null),null!==f&&(clearTimeout(f),f=null))},d=D(function(t){e.resolved=Vt(t,i),c?s.length=0:p(!0)}),v=D(function(t){n(e.errorComp)&&(e.error=!0,p(!0))}),m=e(d,v);return o(m)&&(u(m)?t(e.resolved)&&m.then(d,v):u(m.component)&&(m.component.then(d,v),n(m.error)&&(e.errorComp=Vt(m.error,i)),n(m.loading)&&(e.loadingComp=Vt(m.loading,i),0===m.delay?e.loading=!0:l=setTimeout(function(){l=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,p(!1))},m.delay||200)),n(m.timeout)&&(f=setTimeout(function(){f=null,t(e.resolved)&&v(null)},m.timeout)))),c=!1,e.loading?e.loadingComp:e.resolved}}(p=i,f)))return function(e,t,n,r,i){var o=ve();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(p,a,s,c,l);a=a||{},wn(i),n(a.model)&&function(e,t){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var o=t.on||(t.on={}),a=o[i],s=t.model.callback;n(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}(i.options,a);var d=function(e,r,i){var o=r.options.props;if(!t(o)){var a={},s=e.attrs,c=e.props;if(n(s)||n(c))for(var u in o){var l=C(u);at(a,c,u,l,!0)||at(a,s,u,l,!1)}return a}}(a,i);if(r(i.options.functional))return function(t,r,i,o,a){var s=t.options,c={},u=s.props;if(n(u))for(var l in u)c[l]=Ie(l,u,r||e);else n(i.attrs)&&Dt(c,i.attrs),n(i.props)&&Dt(c,i.props);var f=new Et(i,c,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof pe)return jt(p,i,f.parent,s);if(Array.isArray(p)){for(var d=st(p)||[],v=new Array(d.length),h=0;h<d.length;h++)v[h]=jt(d[h],i,f.parent,s);return v}}(i,d,a,s,c);var v=a.on;if(a.on=a.nativeOn,r(i.options.abstract)){var m=a.slot;a={},m&&(a.slot=m)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<It.length;n++){var r=It[n],i=t[r],o=Lt[r];i===o||i&&i._merged||(t[r]=i?Ft(o,i):o)}}(a);var y=i.options.name||l;return new pe("vue-component-"+i.cid+(y?"-"+y:""),a,void 0,void 0,void 0,s,{Ctor:i,propsData:d,listeners:v,tag:l,children:c},p)}}}function Ft(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}var Pt=1,Rt=2;function Ht(e,a,s,c,u,l){return(Array.isArray(s)||i(s))&&(u=c,c=s,s=void 0),r(l)&&(u=Rt),function(e,i,a,s,c){if(n(a)&&n(a.__ob__))return ve();n(a)&&n(a.is)&&(i=a.is);if(!i)return ve();Array.isArray(s)&&"function"==typeof s[0]&&((a=a||{}).scopedSlots={default:s[0]},s.length=0);c===Rt?s=st(s):c===Pt&&(s=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(s));var u,l;if("string"==typeof i){var f;l=e.$vnode&&e.$vnode.ns||F.getTagNamespace(i),u=F.isReservedTag(i)?new pe(F.parsePlatformTagName(i),a,s,void 0,void 0,e):a&&a.pre||!n(f=Le(e.$options,"components",i))?new pe(i,a,s,void 0,void 0,e):Mt(f,a,e,s,i)}else u=Mt(i,a,e,s);return Array.isArray(u)?u:n(u)?(n(l)&&function e(i,o,a){i.ns=o;"foreignObject"===i.tag&&(o=void 0,a=!0);if(n(i.children))for(var s=0,c=i.children.length;s<c;s++){var u=i.children[s];n(u.tag)&&(t(u.ns)||r(a)&&"svg"!==u.tag)&&e(u,o,a)}}(u,l),n(a)&&function(e){o(e.style)&&tt(e.style);o(e.class)&&tt(e.class)}(a),u):ve()}(e,a,s,c,u)}var Bt,Ut=null;function Vt(e,t){return(e.__esModule||oe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function zt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var r=e[t];if(n(r)&&(n(r.componentOptions)||pt(r)))return r}}function Kt(e,t){Bt.$on(e,t)}function Jt(e,t){Bt.$off(e,t)}function qt(e,t){var n=Bt;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function Wt(e,t,n){Bt=e,it(t,n||{},Kt,Jt,qt,e),Bt=void 0}var Zt=null;function Gt(e){var t=Zt;return Zt=e,function(){Zt=t}}function Xt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Yt(e,t){if(t){if(e._directInactive=!1,Xt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Yt(e.$children[n]);Qt(e,"activated")}}function Qt(e,t){le();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Be(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),fe()}var en=[],tn=[],nn={},rn=!1,on=!1,an=0;var sn=0,cn=Date.now;if(V&&!q){var un=window.performance;un&&"function"==typeof un.now&&cn()>document.createEvent("Event").timeStamp&&(cn=function(){return un.now()})}function ln(){var e,t;for(sn=cn(),on=!0,en.sort(function(e,t){return e.id-t.id}),an=0;an<en.length;an++)(e=en[an]).before&&e.before(),t=e.id,nn[t]=null,e.run();var n=tn.slice(),r=en.slice();an=en.length=tn.length=0,nn={},rn=on=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Yt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Qt(r,"updated")}}(r),ne&&F.devtools&&ne.emit("flush")}var fn=0,pn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++fn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ie,this.newDepIds=new ie,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!H.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=S)),this.value=this.lazy?void 0:this.get()};pn.prototype.get=function(){var e;le(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;He(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&tt(e),fe(),this.cleanupDeps()}return e},pn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},pn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},pn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==nn[t]){if(nn[t]=!0,on){for(var n=en.length-1;n>an&&en[n].id>e.id;)n--;en.splice(n+1,0,e)}else en.push(e);rn||(rn=!0,Qe(ln))}}(this)},pn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';Be(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},pn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},pn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},pn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var dn={enumerable:!0,configurable:!0,get:S,set:S};function vn(e,t,n){dn.get=function(){return this[t][n]},dn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,dn)}function hn(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&$e(!1);var o=function(o){i.push(o);var a=Ie(o,t,n,e);xe(r,o,a),o in e||vn(e,"_props",o)};for(var a in t)o(a);$e(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?S:x(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;s(t=e._data="function"==typeof t?function(e,t){le();try{return e.call(t,t)}catch(e){return He(e,t,"data()"),{}}finally{fe()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];r&&y(r,o)||(a=void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&vn(e,"_data",o))}var a;Ce(t,!0)}(e):Ce(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=te();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new pn(e,a||S,S,mn)),i in e||yn(e,i,o)}}(e,t.computed),t.watch&&t.watch!==Y&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)bn(e,n,r[i]);else bn(e,n,r)}}(e,t.watch)}var mn={lazy:!0};function yn(e,t,n){var r=!te();"function"==typeof n?(dn.get=r?gn(t):_n(n),dn.set=S):(dn.get=n.get?r&&!1!==n.cache?gn(t):_n(n.get):S,dn.set=n.set||S),Object.defineProperty(e,t,dn)}function gn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ce.target&&t.depend(),t.value}}function _n(e){return function(){return e.call(this,this)}}function bn(e,t,n,r){return s(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var $n=0;function wn(e){var t=e.options;if(e.super){var n=wn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&A(e.extendOptions,r),(t=e.options=De(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function Cn(e){this._init(e)}function xn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=De(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)vn(e.prototype,"_props",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)yn(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,I.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=A({},a.options),i[r]=a,a}}function kn(e){return e&&(e.Ctor.options.name||e.tag)}function An(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:(n=e,"[object RegExp]"===a.call(n)&&e.test(t));var n}function On(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=a.name;s&&!t(s)&&Sn(n,o,r,i)}}}function Sn(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,h(n,t)}!function(t){t.prototype._init=function(t){var n=this;n._uid=$n++,n._isVue=!0,t&&t._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(n,t):n.$options=De(wn(n.constructor),t||{},n),n._renderProxy=n,n._self=n,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(n),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Wt(e,t)}(n),function(t){t._vnode=null,t._staticTrees=null;var n=t.$options,r=t.$vnode=n._parentVnode,i=r&&r.context;t.$slots=lt(n._renderChildren,i),t.$scopedSlots=e,t._c=function(e,n,r,i){return Ht(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Ht(t,e,n,r,i,!0)};var o=r&&r.data;xe(t,"$attrs",o&&o.attrs||e,null,!0),xe(t,"$listeners",n._parentListeners||e,null,!0)}(n),Qt(n,"beforeCreate"),function(e){var t=ut(e.$options.inject,e);t&&($e(!1),Object.keys(t).forEach(function(n){xe(e,n,t[n])}),$e(!0))}(n),hn(n),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(n),Qt(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}(Cn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=ke,e.prototype.$delete=Ae,e.prototype.$watch=function(e,t,n){if(s(t))return bn(this,e,t,n);(n=n||{}).user=!0;var r=new pn(this,e,t,n);if(n.immediate){var i='callback for immediate watcher "'+r.expression+'"';le(),Be(t,this,[r.value],this,i),fe()}return function(){r.teardown()}}}(Cn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var s=a.length;s--;)if((o=a[s])===t||o.fn===t){a.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this._events[e];if(t){t=t.length>1?k(t):t;for(var n=k(arguments,1),r='event handler for "'+e+'"',i=0,o=t.length;i<o;i++)Be(t[i],this,n,this,r)}return this}}(Cn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Gt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Qt(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||h(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Qt(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(Cn),function(e){Nt(e.prototype),e.prototype.$nextTick=function(e){return Qe(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=dt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Ut=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){He(n,t,"render"),e=t._vnode}finally{Ut=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=ve()),e.parent=i,e}}(Cn);var Tn=[String,RegExp,Array],Nn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Tn,exclude:Tn,max:[String,Number]},methods:{cacheVNode:function(){var e=this.cache,t=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var i=n.tag,o=n.componentInstance,a=n.componentOptions;e[r]={name:kn(a),tag:i,componentInstance:o},t.push(r),this.max&&t.length>parseInt(this.max)&&Sn(e,t[0],t,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Sn(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(t){On(e,function(e){return An(t,e)})}),this.$watch("exclude",function(t){On(e,function(e){return!An(t,e)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=zt(e),n=t&&t.componentOptions;if(n){var r=kn(n),i=this.include,o=this.exclude;if(i&&(!r||!An(i,r))||o&&r&&An(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,h(s,c),s.push(c)):(this.vnodeToCache=t,this.keyToCache=c),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return F}};Object.defineProperty(e,"config",t),e.util={warn:ae,extend:A,mergeOptions:De,defineReactive:xe},e.set=ke,e.delete=Ae,e.nextTick=Qe,e.observable=function(e){return Ce(e),e},e.options=Object.create(null),I.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,A(e.options.components,Nn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=De(this.options,e),this}}(e),xn(e),function(e){I.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&s(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}(e)}(Cn),Object.defineProperty(Cn.prototype,"$isServer",{get:te}),Object.defineProperty(Cn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Cn,"FunctionalRenderContext",{value:Et}),Cn.version="2.6.14";var En=p("style,class"),jn=p("input,textarea,option,select,progress"),Dn=function(e,t,n){return"value"===n&&jn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Ln=p("contenteditable,draggable,spellcheck"),In=p("events,caret,typing,plaintext-only"),Mn=function(e,t){return Bn(t)||"false"===t?"false":"contenteditable"===e&&In(t)?t:"true"},Fn=p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Pn="http://www.w3.org/1999/xlink",Rn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Hn=function(e){return Rn(e)?e.slice(6,e.length):""},Bn=function(e){return null==e||!1===e};function Un(e){for(var t=e.data,r=e,i=e;n(i.componentInstance);)(i=i.componentInstance._vnode)&&i.data&&(t=Vn(i.data,t));for(;n(r=r.parent);)r&&r.data&&(t=Vn(t,r.data));return function(e,t){if(n(e)||n(t))return zn(e,Kn(t));return""}(t.staticClass,t.class)}function Vn(e,t){return{staticClass:zn(e.staticClass,t.staticClass),class:n(e.class)?[e.class,t.class]:t.class}}function zn(e,t){return e?t?e+" "+t:e:t||""}function Kn(e){return Array.isArray(e)?function(e){for(var t,r="",i=0,o=e.length;i<o;i++)n(t=Kn(e[i]))&&""!==t&&(r&&(r+=" "),r+=t);return r}(e):o(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Jn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},qn=p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Wn=p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Zn=function(e){return qn(e)||Wn(e)};function Gn(e){return Wn(e)?"svg":"math"===e?"math":void 0}var Xn=Object.create(null);var Yn=p("text,number,password,search,email,tel,url");function Qn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var er=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(Jn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),tr={create:function(e,t){nr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(nr(e,!0),nr(t))},destroy:function(e){nr(e,!0)}};function nr(e,t){var r=e.data.ref;if(n(r)){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[r])?h(a[r],o):a[r]===o&&(a[r]=void 0):e.data.refInFor?Array.isArray(a[r])?a[r].indexOf(o)<0&&a[r].push(o):a[r]=[o]:a[r]=o}}var rr=new pe("",{},[]),ir=["create","activate","update","remove","destroy"];function or(e,i){return e.key===i.key&&e.asyncFactory===i.asyncFactory&&(e.tag===i.tag&&e.isComment===i.isComment&&n(e.data)===n(i.data)&&function(e,t){if("input"!==e.tag)return!0;var r,i=n(r=e.data)&&n(r=r.attrs)&&r.type,o=n(r=t.data)&&n(r=r.attrs)&&r.type;return i===o||Yn(i)&&Yn(o)}(e,i)||r(e.isAsyncPlaceholder)&&t(i.asyncFactory.error))}function ar(e,t,r){var i,o,a={};for(i=t;i<=r;++i)n(o=e[i].key)&&(a[o]=i);return a}var sr={create:cr,update:cr,destroy:function(e){cr(e,rr)}};function cr(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===rr,a=t===rr,s=lr(e.data.directives,e.context),c=lr(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,pr(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(pr(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)pr(u[n],"inserted",t,e)};o?ot(t,"insert",f):f()}l.length&&ot(t,"postpatch",function(){for(var n=0;n<l.length;n++)pr(l[n],"componentUpdated",t,e)});if(!o)for(n in s)c[n]||pr(s[n],"unbind",e,e,a)}(e,t)}var ur=Object.create(null);function lr(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=ur),i[fr(r)]=r,r.def=Le(t.$options,"directives",r.name);return i}function fr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function pr(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){He(r,n.context,"directive "+e.name+" "+t+" hook")}}var dr=[tr,sr];function vr(e,r){var i=r.componentOptions;if(!(n(i)&&!1===i.Ctor.options.inheritAttrs||t(e.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=e.data.attrs||{},u=r.data.attrs||{};for(o in n(u.__ob__)&&(u=r.data.attrs=A({},u)),u)a=u[o],c[o]!==a&&hr(s,o,a,r.data.pre);for(o in(q||Z)&&u.value!==c.value&&hr(s,"value",u.value),c)t(u[o])&&(Rn(o)?s.removeAttributeNS(Pn,Hn(o)):Ln(o)||s.removeAttribute(o))}}function hr(e,t,n,r){r||e.tagName.indexOf("-")>-1?mr(e,t,n):Fn(t)?Bn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Ln(t)?e.setAttribute(t,Mn(t,n)):Rn(t)?Bn(n)?e.removeAttributeNS(Pn,Hn(t)):e.setAttributeNS(Pn,t,n):mr(e,t,n)}function mr(e,t,n){if(Bn(n))e.removeAttribute(t);else{if(q&&!W&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var yr={create:vr,update:vr};function gr(e,r){var i=r.elm,o=r.data,a=e.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Un(r),c=i._transitionClasses;n(c)&&(s=zn(s,Kn(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}var _r,br,$r,wr,Cr,xr,kr={create:gr,update:gr},Ar=/[\w).+\-_$\]]/;function Or(e){var t,n,r,i,o,a=!1,s=!1,c=!1,u=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(u)47===t&&92!==n&&(u=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var v=r-1,h=void 0;v>=0&&" "===(h=e.charAt(v));v--);h&&Ar.test(h)||(u=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Sr(i,o[r]);return i}function Sr(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function Tr(e,t){console.error("[Vue compiler]: "+e)}function Nr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Er(e,t,n,r,i){(e.props||(e.props=[])).push(Hr({name:t,value:n,dynamic:i},r)),e.plain=!1}function jr(e,t,n,r,i){(i?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Hr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Dr(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(Hr({name:t,value:n},r))}function Lr(e,t,n,r,i,o,a,s){(e.directives||(e.directives=[])).push(Hr({name:t,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:a},s)),e.plain=!1}function Ir(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function Mr(t,n,r,i,o,a,s,c){var u;(i=i||e).right?c?n="("+n+")==='click'?'contextmenu':("+n+")":"click"===n&&(n="contextmenu",delete i.right):i.middle&&(c?n="("+n+")==='click'?'mouseup':("+n+")":"click"===n&&(n="mouseup")),i.capture&&(delete i.capture,n=Ir("!",n,c)),i.once&&(delete i.once,n=Ir("~",n,c)),i.passive&&(delete i.passive,n=Ir("&",n,c)),i.native?(delete i.native,u=t.nativeEvents||(t.nativeEvents={})):u=t.events||(t.events={});var l=Hr({value:r.trim(),dynamic:c},s);i!==e&&(l.modifiers=i);var f=u[n];Array.isArray(f)?o?f.unshift(l):f.push(l):u[n]=f?o?[l,f]:[f,l]:l,t.plain=!1}function Fr(e,t,n){var r=Pr(e,":"+t)||Pr(e,"v-bind:"+t);if(null!=r)return Or(r);if(!1!==n){var i=Pr(e,t);if(null!=i)return JSON.stringify(i)}}function Pr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Rr(e,t){for(var n=e.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(t.test(o.name))return n.splice(r,1),o}}function Hr(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Br(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=Ur(t,o);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+a+"}"}}function Ur(e,t){var n=function(e){if(e=e.trim(),_r=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<_r-1)return(wr=e.lastIndexOf("."))>-1?{exp:e.slice(0,wr),key:'"'+e.slice(wr+1)+'"'}:{exp:e,key:null};br=e,wr=Cr=xr=0;for(;!zr();)Kr($r=Vr())?qr($r):91===$r&&Jr($r);return{exp:e.slice(0,Cr),key:e.slice(Cr+1,xr)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Vr(){return br.charCodeAt(++wr)}function zr(){return wr>=_r}function Kr(e){return 34===e||39===e}function Jr(e){var t=1;for(Cr=wr;!zr();)if(Kr(e=Vr()))qr(e);else if(91===e&&t++,93===e&&t--,0===t){xr=wr;break}}function qr(e){for(var t=e;!zr()&&(e=Vr())!==t;);}var Wr,Zr="__r",Gr="__c";function Xr(e,t,n){var r=Wr;return function i(){null!==t.apply(null,arguments)&&ei(e,i,n,r)}}var Yr=Ke&&!(X&&Number(X[1])<=53);function Qr(e,t,n,r){if(Yr){var i=sn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}Wr.addEventListener(e,t,Q?{capture:n,passive:r}:n)}function ei(e,t,n,r){(r||Wr).removeEventListener(e,t._wrapper||t,n)}function ti(e,r){if(!t(e.data.on)||!t(r.data.on)){var i=r.data.on||{},o=e.data.on||{};Wr=r.elm,function(e){if(n(e[Zr])){var t=q?"change":"input";e[t]=[].concat(e[Zr],e[t]||[]),delete e[Zr]}n(e[Gr])&&(e.change=[].concat(e[Gr],e.change||[]),delete e[Gr])}(i),it(i,o,Qr,ei,Xr,r.context),Wr=void 0}}var ni,ri={create:ti,update:ti};function ii(e,r){if(!t(e.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=e.data.domProps||{},c=r.data.domProps||{};for(i in n(c.__ob__)&&(c=r.data.domProps=A({},c)),s)i in c||(a[i]="");for(i in c){if(o=c[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i&&"PROGRESS"!==a.tagName){a._value=o;var u=t(o)?"":String(o);oi(a,u)&&(a.value=u)}else if("innerHTML"===i&&Wn(a.tagName)&&t(a.innerHTML)){(ni=ni||document.createElement("div")).innerHTML="<svg>"+o+"</svg>";for(var l=ni.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}else if(o!==s[i])try{a[i]=o}catch(e){}}}}function oi(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var r=e.value,i=e._vModifiers;if(n(i)){if(i.number)return f(r)!==f(t);if(i.trim)return r.trim()!==t.trim()}return r!==t}(e,t))}var ai={create:ii,update:ii},si=g(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function ci(e){var t=ui(e.style);return e.staticStyle?A(e.staticStyle,t):t}function ui(e){return Array.isArray(e)?O(e):"string"==typeof e?si(e):e}var li,fi=/^--/,pi=/\s*!important$/,di=function(e,t,n){if(fi.test(t))e.style.setProperty(t,n);else if(pi.test(n))e.style.setProperty(C(t),n.replace(pi,""),"important");else{var r=hi(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},vi=["Webkit","Moz","ms"],hi=g(function(e){if(li=li||document.createElement("div").style,"filter"!==(e=b(e))&&e in li)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<vi.length;n++){var r=vi[n]+t;if(r in li)return r}});function mi(e,r){var i=r.data,o=e.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=ui(r.data.style)||{};r.data.normalizedStyle=n(p.__ob__)?A({},p):p;var d=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=ci(i.data))&&A(r,n);(n=ci(e.data))&&A(r,n);for(var o=e;o=o.parent;)o.data&&(n=ci(o.data))&&A(r,n);return r}(r,!0);for(s in f)t(d[s])&&di(c,s,"");for(s in d)(a=d[s])!==f[s]&&di(c,s,null==a?"":a)}}var yi={create:mi,update:mi},gi=/\s+/;function _i(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(gi).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function bi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(gi).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function $i(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&A(t,wi(e.name||"v")),A(t,e),t}return"string"==typeof e?wi(e):void 0}}var wi=g(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Ci=V&&!W,xi="transition",ki="animation",Ai="transition",Oi="transitionend",Si="animation",Ti="animationend";Ci&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ai="WebkitTransition",Oi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Si="WebkitAnimation",Ti="webkitAnimationEnd"));var Ni=V?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ei(e){Ni(function(){Ni(e)})}function ji(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),_i(e,t))}function Di(e,t){e._transitionClasses&&h(e._transitionClasses,t),bi(e,t)}function Li(e,t,n){var r=Mi(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===xi?Oi:Ti,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}var Ii=/\b(transform|all)(,|$)/;function Mi(e,t){var n,r=window.getComputedStyle(e),i=(r[Ai+"Delay"]||"").split(", "),o=(r[Ai+"Duration"]||"").split(", "),a=Fi(i,o),s=(r[Si+"Delay"]||"").split(", "),c=(r[Si+"Duration"]||"").split(", "),u=Fi(s,c),l=0,f=0;return t===xi?a>0&&(n=xi,l=a,f=o.length):t===ki?u>0&&(n=ki,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?xi:ki:null)?n===xi?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===xi&&Ii.test(r[Ai+"Property"])}}function Fi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Pi(t)+Pi(e[n])}))}function Pi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ri(e,r){var i=e.elm;n(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=$i(e.data.transition);if(!t(a)&&!n(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,l=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,C=a.appearCancelled,x=a.duration,k=Zt,A=Zt.$vnode;A&&A.parent;)k=A.context,A=A.parent;var O=!k._isMounted||!e.isRootInsert;if(!O||$||""===$){var S=O&&d?d:u,T=O&&h?h:p,N=O&&v?v:l,E=O&&b||m,j=O&&"function"==typeof $?$:y,L=O&&w||g,I=O&&C||_,M=f(o(x)?x.enter:x),F=!1!==s&&!W,P=Ui(j),R=i._enterCb=D(function(){F&&(Di(i,N),Di(i,T)),R.cancelled?(F&&Di(i,S),I&&I(i)):L&&L(i),i._enterCb=null});e.data.show||ot(e,"insert",function(){var t=i.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(i,R)}),E&&E(i),F&&(ji(i,S),ji(i,T),Ei(function(){Di(i,S),R.cancelled||(ji(i,N),P||(Bi(M)?setTimeout(R,M):Li(i,c,R)))})),e.data.show&&(r&&r(),j&&j(i,R)),F||P||R()}}}function Hi(e,r){var i=e.elm;n(i._enterCb)&&(i._enterCb.cancelled=!0,i._enterCb());var a=$i(e.data.transition);if(t(a)||1!==i.nodeType)return r();if(!n(i._leaveCb)){var s=a.css,c=a.type,u=a.leaveClass,l=a.leaveToClass,p=a.leaveActiveClass,d=a.beforeLeave,v=a.leave,h=a.afterLeave,m=a.leaveCancelled,y=a.delayLeave,g=a.duration,_=!1!==s&&!W,b=Ui(v),$=f(o(g)?g.leave:g),w=i._leaveCb=D(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(Di(i,l),Di(i,p)),w.cancelled?(_&&Di(i,u),m&&m(i)):(r(),h&&h(i)),i._leaveCb=null});y?y(C):C()}function C(){w.cancelled||(!e.data.show&&i.parentNode&&((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),d&&d(i),_&&(ji(i,u),ji(i,p),Ei(function(){Di(i,u),w.cancelled||(ji(i,l),b||(Bi($)?setTimeout(w,$):Li(i,c,w)))})),v&&v(i,w),_||b||w())}}function Bi(e){return"number"==typeof e&&!isNaN(e)}function Ui(e){if(t(e))return!1;var r=e.fns;return n(r)?Ui(Array.isArray(r)?r[0]:r):(e._length||e.length)>1}function Vi(e,t){!0!==t.data.show&&Ri(t)}var zi=function(e){var o,a,s={},c=e.modules,u=e.nodeOps;for(o=0;o<ir.length;++o)for(s[ir[o]]=[],a=0;a<c.length;++a)n(c[a][ir[o]])&&s[ir[o]].push(c[a][ir[o]]);function l(e){var t=u.parentNode(e);n(t)&&u.removeChild(t,e)}function f(e,t,i,o,a,c,l){if(n(e.elm)&&n(c)&&(e=c[l]=me(e)),e.isRootInsert=!a,!function(e,t,i,o){var a=e.data;if(n(a)){var c=n(e.componentInstance)&&a.keepAlive;if(n(a=a.hook)&&n(a=a.init)&&a(e,!1),n(e.componentInstance))return d(e,t),v(i,e.elm,o),r(c)&&function(e,t,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,n(o=a.data)&&n(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](rr,a);t.push(a);break}v(r,e.elm,i)}(e,t,i,o),!0}}(e,t,i,o)){var f=e.data,p=e.children,m=e.tag;n(m)?(e.elm=e.ns?u.createElementNS(e.ns,m):u.createElement(m,e),g(e),h(e,p,t),n(f)&&y(e,t),v(i,e.elm,o)):r(e.isComment)?(e.elm=u.createComment(e.text),v(i,e.elm,o)):(e.elm=u.createTextNode(e.text),v(i,e.elm,o))}}function d(e,t){n(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,m(e)?(y(e,t),g(e)):(nr(e),t.push(e))}function v(e,t,r){n(e)&&(n(r)?u.parentNode(r)===e&&u.insertBefore(e,t,r):u.appendChild(e,t))}function h(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r);else i(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function m(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return n(e.tag)}function y(e,t){for(var r=0;r<s.create.length;++r)s.create[r](rr,e);n(o=e.data.hook)&&(n(o.create)&&o.create(rr,e),n(o.insert)&&t.push(e))}function g(e){var t;if(n(t=e.fnScopeId))u.setStyleScope(e.elm,t);else for(var r=e;r;)n(t=r.context)&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),r=r.parent;n(t=Zt)&&t!==e.context&&t!==e.fnContext&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function _(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function b(e){var t,r,i=e.data;if(n(i))for(n(t=i.hook)&&n(t=t.destroy)&&t(e),t=0;t<s.destroy.length;++t)s.destroy[t](e);if(n(t=e.children))for(r=0;r<e.children.length;++r)b(e.children[r])}function $(e,t,r){for(;t<=r;++t){var i=e[t];n(i)&&(n(i.tag)?(w(i),b(i)):l(i.elm))}}function w(e,t){if(n(t)||n(e.data)){var r,i=s.remove.length+1;for(n(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),n(r=e.componentInstance)&&n(r=r._vnode)&&n(r.data)&&w(r,t),r=0;r<s.remove.length;++r)s.remove[r](e,t);n(r=e.data.hook)&&n(r=r.remove)?r(e,t):t()}else l(e.elm)}function C(e,t,r,i){for(var o=r;o<i;o++){var a=t[o];if(n(a)&&or(e,a))return o}}function x(e,i,o,a,c,l){if(e!==i){n(i.elm)&&n(a)&&(i=a[c]=me(i));var p=i.elm=e.elm;if(r(e.isAsyncPlaceholder))n(i.asyncFactory.resolved)?O(e.elm,i,o):i.isAsyncPlaceholder=!0;else if(r(i.isStatic)&&r(e.isStatic)&&i.key===e.key&&(r(i.isCloned)||r(i.isOnce)))i.componentInstance=e.componentInstance;else{var d,v=i.data;n(v)&&n(d=v.hook)&&n(d=d.prepatch)&&d(e,i);var h=e.children,y=i.children;if(n(v)&&m(i)){for(d=0;d<s.update.length;++d)s.update[d](e,i);n(d=v.hook)&&n(d=d.update)&&d(e,i)}t(i.text)?n(h)&&n(y)?h!==y&&function(e,r,i,o,a){for(var s,c,l,p=0,d=0,v=r.length-1,h=r[0],m=r[v],y=i.length-1,g=i[0],b=i[y],w=!a;p<=v&&d<=y;)t(h)?h=r[++p]:t(m)?m=r[--v]:or(h,g)?(x(h,g,o,i,d),h=r[++p],g=i[++d]):or(m,b)?(x(m,b,o,i,y),m=r[--v],b=i[--y]):or(h,b)?(x(h,b,o,i,y),w&&u.insertBefore(e,h.elm,u.nextSibling(m.elm)),h=r[++p],b=i[--y]):or(m,g)?(x(m,g,o,i,d),w&&u.insertBefore(e,m.elm,h.elm),m=r[--v],g=i[++d]):(t(s)&&(s=ar(r,p,v)),t(c=n(g.key)?s[g.key]:C(g,r,p,v))?f(g,o,e,h.elm,!1,i,d):or(l=r[c],g)?(x(l,g,o,i,d),r[c]=void 0,w&&u.insertBefore(e,l.elm,h.elm)):f(g,o,e,h.elm,!1,i,d),g=i[++d]);p>v?_(e,t(i[y+1])?null:i[y+1].elm,i,d,y,o):d>y&&$(r,p,v)}(p,h,y,o,l):n(y)?(n(e.text)&&u.setTextContent(p,""),_(p,null,y,0,y.length-1,o)):n(h)?$(h,0,h.length-1):n(e.text)&&u.setTextContent(p,""):e.text!==i.text&&u.setTextContent(p,i.text),n(v)&&n(d=v.hook)&&n(d=d.postpatch)&&d(e,i)}}}function k(e,t,i){if(r(i)&&n(e.parent))e.parent.data.pendingInsert=t;else for(var o=0;o<t.length;++o)t[o].data.hook.insert(t[o])}var A=p("attrs,class,staticClass,staticStyle,key");function O(e,t,i,o){var a,s=t.tag,c=t.data,u=t.children;if(o=o||c&&c.pre,t.elm=e,r(t.isComment)&&n(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(n(c)&&(n(a=c.hook)&&n(a=a.init)&&a(t,!0),n(a=t.componentInstance)))return d(t,i),!0;if(n(s)){if(n(u))if(e.hasChildNodes())if(n(a=c)&&n(a=a.domProps)&&n(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var l=!0,f=e.firstChild,p=0;p<u.length;p++){if(!f||!O(f,u[p],i,o)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(t,u,i);if(n(c)){var v=!1;for(var m in c)if(!A(m)){v=!0,y(t,i);break}!v&&c.class&&tt(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,i,o,a){if(!t(i)){var c,l=!1,p=[];if(t(e))l=!0,f(i,p);else{var d=n(e.nodeType);if(!d&&or(e,i))x(e,i,p,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(L)&&(e.removeAttribute(L),o=!0),r(o)&&O(e,i,p))return k(i,p,!0),e;c=e,e=new pe(u.tagName(c).toLowerCase(),{},[],void 0,c)}var v=e.elm,h=u.parentNode(v);if(f(i,p,v._leaveCb?null:h,u.nextSibling(v)),n(i.parent))for(var y=i.parent,g=m(i);y;){for(var _=0;_<s.destroy.length;++_)s.destroy[_](y);if(y.elm=i.elm,g){for(var w=0;w<s.create.length;++w)s.create[w](rr,y);var C=y.data.hook.insert;if(C.merged)for(var A=1;A<C.fns.length;A++)C.fns[A]()}else nr(y);y=y.parent}n(h)?$([e],0,0):n(e.tag)&&b(e)}}return k(i,p,l),i.elm}n(e)&&b(e)}}({nodeOps:er,modules:[yr,kr,ri,ai,yi,V?{create:Vi,activate:Vi,remove:function(e,t){!0!==e.data.show?Hi(e,t):t()}}:{}].concat(dr)});W&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Yi(e,"input")});var Ki={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ot(n,"postpatch",function(){Ki.componentUpdated(e,t,n)}):Ji(e,t,n.context),e._vOptions=[].map.call(e.options,Zi)):("textarea"===n.tag||Yn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Gi),e.addEventListener("compositionend",Xi),e.addEventListener("change",Xi),W&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ji(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Zi);if(i.some(function(e,t){return!E(e,r[t])}))(e.multiple?t.value.some(function(e){return Wi(e,i)}):t.value!==t.oldValue&&Wi(t.value,i))&&Yi(e,"change")}}};function Ji(e,t,n){qi(e,t,n),(q||Z)&&setTimeout(function(){qi(e,t,n)},0)}function qi(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=j(r,Zi(a))>-1,a.selected!==o&&(a.selected=o);else if(E(Zi(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Wi(e,t){return t.every(function(t){return!E(t,e)})}function Zi(e){return"_value"in e?e._value:e.value}function Gi(e){e.target.composing=!0}function Xi(e){e.target.composing&&(e.target.composing=!1,Yi(e.target,"input"))}function Yi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Qi(e){return!e.componentInstance||e.data&&e.data.transition?e:Qi(e.componentInstance._vnode)}var eo={model:Ki,show:{bind:function(e,t,n){var r=t.value,i=(n=Qi(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ri(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Qi(n)).data&&n.data.transition?(n.data.show=!0,r?Ri(n,function(){e.style.display=e.__vOriginalDisplay}):Hi(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},to={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function no(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?no(zt(t.children)):e}function ro(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[b(o)]=i[o];return t}function io(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var oo=function(e){return e.tag||pt(e)},ao=function(e){return"show"===e.name},so={name:"transition",props:to,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(oo)).length){var r=this.mode,o=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return o;var a=no(o);if(!a)return o;if(this._leaving)return io(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=ro(this),u=this._vnode,l=no(u);if(a.data.directives&&a.data.directives.some(ao)&&(a.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(a,l)&&!pt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=A({},c);if("out-in"===r)return this._leaving=!0,ot(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),io(e,o);if("in-out"===r){if(pt(a))return u;var p,d=function(){p()};ot(c,"afterEnter",d),ot(c,"enterCancelled",d),ot(f,"delayLeave",function(e){p=e})}}return o}}},co=A({tag:String,moveClass:String},to);function uo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function lo(e){e.data.newPos=e.elm.getBoundingClientRect()}function fo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete co.mode;var po={Transition:so,TransitionGroup:{props:co,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Gt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=ro(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(uo),e.forEach(lo),e.forEach(fo),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;ji(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Oi,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Oi,e),n._moveCb=null,Di(n,t))})}}))},methods:{hasMove:function(e,t){if(!Ci)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){bi(n,e)}),_i(n,t),n.style.display="none",this.$el.appendChild(n);var r=Mi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Cn.config.mustUseProp=Dn,Cn.config.isReservedTag=Zn,Cn.config.isReservedAttr=En,Cn.config.getTagNamespace=Gn,Cn.config.isUnknownElement=function(e){if(!V)return!0;if(Zn(e))return!1;if(e=e.toLowerCase(),null!=Xn[e])return Xn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Xn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Xn[e]=/HTMLUnknownElement/.test(t.toString())},A(Cn.options.directives,eo),A(Cn.options.components,po),Cn.prototype.__patch__=V?zi:S,Cn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ve),Qt(e,"beforeMount"),r=function(){e._update(e._render(),n)},new pn(e,r,S,{before:function(){e._isMounted&&!e._isDestroyed&&Qt(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Qt(e,"mounted")),e}(this,e=e&&V?Qn(e):void 0,t)},V&&setTimeout(function(){F.devtools&&ne&&ne.emit("init",Cn)},0);var vo=/\{\{((?:.|\r?\n)+?)\}\}/g,ho=/[-.*+?^${}()|[\]\/\\]/g,mo=g(function(e){var t=e[0].replace(ho,"\\$&"),n=e[1].replace(ho,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});var yo={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Pr(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Fr(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var go,_o={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Pr(e,"style");n&&(e.staticStyle=JSON.stringify(si(n)));var r=Fr(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},bo=function(e){return(go=go||document.createElement("div")).innerHTML=e,go.textContent},$o=p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),wo=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Co=p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),xo=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,ko=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Ao="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+P.source+"]*",Oo="((?:"+Ao+"\\:)?"+Ao+")",So=new RegExp("^<"+Oo),To=/^\s*(\/?)>/,No=new RegExp("^<\\/"+Oo+"[^>]*>"),Eo=/^<!DOCTYPE [^>]+>/i,jo=/^<!\--/,Do=/^<!\[/,Lo=p("script,style,textarea",!0),Io={},Mo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Fo=/&(?:lt|gt|quot|amp|#39);/g,Po=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Ro=p("pre,textarea",!0),Ho=function(e,t){return e&&Ro(e)&&"\n"===t[0]};function Bo(e,t){var n=t?Po:Fo;return e.replace(n,function(e){return Mo[e]})}var Uo,Vo,zo,Ko,Jo,qo,Wo,Zo,Go=/^@|^v-on:/,Xo=/^v-|^@|^:|^#/,Yo=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Qo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,ea=/^\(|\)$/g,ta=/^\[.*\]$/,na=/:(.*)$/,ra=/^:|^\.|^v-bind:/,ia=/\.[^.\]]+(?=[^\]]*$)/g,oa=/^v-slot(:|$)|^#/,aa=/[\r\n]/,sa=/[ \f\t\r\n]+/g,ca=g(bo),ua="_empty_";function la(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:ya(t),rawAttrsMap:{},parent:n,children:[]}}function fa(e,t){Uo=t.warn||Tr,qo=t.isPreTag||T,Wo=t.mustUseProp||T,Zo=t.getTagNamespace||T;t.isReservedTag;zo=Nr(t.modules,"transformNode"),Ko=Nr(t.modules,"preTransformNode"),Jo=Nr(t.modules,"postTransformNode"),Vo=t.delimiters;var n,r,i=[],o=!1!==t.preserveWhitespace,a=t.whitespace,s=!1,c=!1;function u(e){if(l(e),s||e.processed||(e=pa(e,t)),i.length||e===n||n.if&&(e.elseif||e.else)&&va(n,{exp:e.elseif,block:e}),r&&!e.forbidden)if(e.elseif||e.else)a=e,(u=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(r.children))&&u.if&&va(u,{exp:a.elseif,block:a});else{if(e.slotScope){var o=e.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[o]=e}r.children.push(e),e.parent=r}var a,u;e.children=e.children.filter(function(e){return!e.slotScope}),l(e),e.pre&&(s=!1),qo(e.tag)&&(c=!1);for(var f=0;f<Jo.length;f++)Jo[f](e,t)}function l(e){if(!c)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}return function(e,t){for(var n,r,i=[],o=t.expectHTML,a=t.isUnaryTag||T,s=t.canBeLeftOpenTag||T,c=0;e;){if(n=e,r&&Lo(r)){var u=0,l=r.toLowerCase(),f=Io[l]||(Io[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=e.replace(f,function(e,n,r){return u=r.length,Lo(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ho(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});c+=e.length-p.length,e=p,A(l,c-u,c)}else{var d=e.indexOf("<");if(0===d){if(jo.test(e)){var v=e.indexOf("--\x3e");if(v>=0){t.shouldKeepComment&&t.comment(e.substring(4,v),c,c+v+3),C(v+3);continue}}if(Do.test(e)){var h=e.indexOf("]>");if(h>=0){C(h+2);continue}}var m=e.match(Eo);if(m){C(m[0].length);continue}var y=e.match(No);if(y){var g=c;C(y[0].length),A(y[1],g,c);continue}var _=x();if(_){k(_),Ho(_.tagName,e)&&C(1);continue}}var b=void 0,$=void 0,w=void 0;if(d>=0){for($=e.slice(d);!(No.test($)||So.test($)||jo.test($)||Do.test($)||(w=$.indexOf("<",1))<0);)d+=w,$=e.slice(d);b=e.substring(0,d)}d<0&&(b=e),b&&C(b.length),t.chars&&b&&t.chars(b,c-b.length,c)}if(e===n){t.chars&&t.chars(e);break}}function C(t){c+=t,e=e.substring(t)}function x(){var t=e.match(So);if(t){var n,r,i={tagName:t[1],attrs:[],start:c};for(C(t[0].length);!(n=e.match(To))&&(r=e.match(ko)||e.match(xo));)r.start=c,C(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],C(n[0].length),i.end=c,i}}function k(e){var n=e.tagName,c=e.unarySlash;o&&("p"===r&&Co(n)&&A(r),s(n)&&r===n&&A(n));for(var u=a(n)||!!c,l=e.attrs.length,f=new Array(l),p=0;p<l;p++){var d=e.attrs[p],v=d[3]||d[4]||d[5]||"",h="a"===n&&"href"===d[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[p]={name:d[1],value:Bo(v,h)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f,start:e.start,end:e.end}),r=n),t.start&&t.start(n,f,u,e.start,e.end)}function A(e,n,o){var a,s;if(null==n&&(n=c),null==o&&(o=c),e)for(s=e.toLowerCase(),a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var u=i.length-1;u>=a;u--)t.end&&t.end(i[u].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,o):"p"===s&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}A()}(e,{warn:Uo,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,o,a,l,f){var p=r&&r.ns||Zo(e);q&&"svg"===p&&(o=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];ga.test(r.name)||(r.name=r.name.replace(_a,""),t.push(r))}return t}(o));var d,v=la(e,o,r);p&&(v.ns=p),"style"!==(d=v).tag&&("script"!==d.tag||d.attrsMap.type&&"text/javascript"!==d.attrsMap.type)||te()||(v.forbidden=!0);for(var h=0;h<Ko.length;h++)v=Ko[h](v,t)||v;s||(!function(e){null!=Pr(e,"v-pre")&&(e.pre=!0)}(v),v.pre&&(s=!0)),qo(v.tag)&&(c=!0),s?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),i=0;i<n;i++)r[i]={name:t[i].name,value:JSON.stringify(t[i].value)},null!=t[i].start&&(r[i].start=t[i].start,r[i].end=t[i].end);else e.pre||(e.plain=!0)}(v):v.processed||(da(v),function(e){var t=Pr(e,"v-if");if(t)e.if=t,va(e,{exp:t,block:e});else{null!=Pr(e,"v-else")&&(e.else=!0);var n=Pr(e,"v-else-if");n&&(e.elseif=n)}}(v),function(e){null!=Pr(e,"v-once")&&(e.once=!0)}(v)),n||(n=v),a?u(v):(r=v,i.push(v))},end:function(e,t,n){var o=i[i.length-1];i.length-=1,r=i[i.length-1],u(o)},chars:function(e,t,n){if(r&&(!q||"textarea"!==r.tag||r.attrsMap.placeholder!==e)){var i,u,l,f=r.children;if(e=c||e.trim()?"script"===(i=r).tag||"style"===i.tag?e:ca(e):f.length?a?"condense"===a&&aa.test(e)?"":" ":o?" ":"":"")c||"condense"!==a||(e=e.replace(sa," ")),!s&&" "!==e&&(u=function(e,t){var n=t?mo(t):vo;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){(i=r.index)>c&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var u=Or(r[1].trim());a.push("_s("+u+")"),s.push({"@binding":u}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e,Vo))?l={type:2,expression:u.expression,tokens:u.tokens,text:e}:" "===e&&f.length&&" "===f[f.length-1].text||(l={type:3,text:e}),l&&f.push(l)}},comment:function(e,t,n){if(r){var i={type:3,text:e,isComment:!0};r.children.push(i)}}}),n}function pa(e,t){var n,r;(r=Fr(n=e,"key"))&&(n.key=r),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,function(e){var t=Fr(e,"ref");t&&(e.ref=t,e.refInFor=function(e){var t=e;for(;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(e))}(e),function(e){var t;"template"===e.tag?(t=Pr(e,"scope"),e.slotScope=t||Pr(e,"slot-scope")):(t=Pr(e,"slot-scope"))&&(e.slotScope=t);var n=Fr(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||jr(e,"slot",n,function(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}(e,"slot")));if("template"===e.tag){var r=Rr(e,oa);if(r){var i=ha(r),o=i.name,a=i.dynamic;e.slotTarget=o,e.slotTargetDynamic=a,e.slotScope=r.value||ua}}else{var s=Rr(e,oa);if(s){var c=e.scopedSlots||(e.scopedSlots={}),u=ha(s),l=u.name,f=u.dynamic,p=c[l]=la("template",[],e);p.slotTarget=l,p.slotTargetDynamic=f,p.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=p,!0}),p.slotScope=s.value||ua,e.children=[],e.plain=!1}}}(e),function(e){"slot"===e.tag&&(e.slotName=Fr(e,"name"))}(e),function(e){var t;(t=Fr(e,"is"))&&(e.component=t);null!=Pr(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var i=0;i<zo.length;i++)e=zo[i](e,t)||e;return function(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Xo.test(r))if(e.hasBindings=!0,(a=ma(r.replace(Xo,"")))&&(r=r.replace(ia,"")),ra.test(r))r=r.replace(ra,""),o=Or(o),(c=ta.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!c&&"innerHtml"===(r=b(r))&&(r="innerHTML"),a.camel&&!c&&(r=b(r)),a.sync&&(s=Ur(o,"$event"),c?Mr(e,'"update:"+('+r+")",s,null,!1,0,u[t],!0):(Mr(e,"update:"+b(r),s,null,!1,0,u[t]),C(r)!==b(r)&&Mr(e,"update:"+C(r),s,null,!1,0,u[t])))),a&&a.prop||!e.component&&Wo(e.tag,e.attrsMap.type,r)?Er(e,r,o,u[t],c):jr(e,r,o,u[t],c);else if(Go.test(r))r=r.replace(Go,""),(c=ta.test(r))&&(r=r.slice(1,-1)),Mr(e,r,o,a,!1,0,u[t],c);else{var l=(r=r.replace(Xo,"")).match(na),f=l&&l[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),ta.test(f)&&(f=f.slice(1,-1),c=!0)),Lr(e,r,i,o,f,c,a,u[t])}else jr(e,r,JSON.stringify(o),u[t]),!e.component&&"muted"===r&&Wo(e.tag,e.attrsMap.type,r)&&Er(e,r,"true",u[t])}(e),e}function da(e){var t;if(t=Pr(e,"v-for")){var n=function(e){var t=e.match(Yo);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(ea,""),i=r.match(Qo);i?(n.alias=r.replace(Qo,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&A(e,n)}}function va(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function ha(e){var t=e.name.replace(oa,"");return t||"#"!==e.name[0]&&(t="default"),ta.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function ma(e){var t=e.match(ia);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function ya(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}var ga=/^xmlns:NS\d+/,_a=/^NS\d+:/;function ba(e){return la(e.tag,e.attrsList.slice(),e.parent)}var $a=[yo,_o,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Fr(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Pr(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Pr(e,"v-else",!0),s=Pr(e,"v-else-if",!0),c=ba(e);da(c),Dr(c,"type","checkbox"),pa(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+o,va(c,{exp:c.if,block:c});var u=ba(e);Pr(u,"v-for",!0),Dr(u,"type","radio"),pa(u,t),va(c,{exp:"("+n+")==='radio'"+o,block:u});var l=ba(e);return Pr(l,"v-for",!0),Dr(l,":type",n),pa(l,t),va(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var wa,Ca,xa={expectHTML:!0,modules:$a,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return Br(e,r,i),!1;if("select"===o)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+Ur(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Mr(e,"change",r,null,!0)}(e,r,i);else if("input"===o&&"checkbox"===a)!function(e,t,n){var r=n&&n.number,i=Fr(e,"value")||"null",o=Fr(e,"true-value")||"true",a=Fr(e,"false-value")||"false";Er(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),Mr(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Ur(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Ur(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Ur(t,"$$c")+"}",null,!0)}(e,r,i);else if("input"===o&&"radio"===a)!function(e,t,n){var r=n&&n.number,i=Fr(e,"value")||"null";Er(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),Mr(e,"change",Ur(t,i),null,!0)}(e,r,i);else if("input"===o||"textarea"===o)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?Zr:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Ur(t,l);c&&(f="if($event.target.composing)return;"+f),Er(e,"value","("+t+")"),Mr(e,u,f,null,!0),(s||a)&&Mr(e,"blur","$forceUpdate()")}(e,r,i);else if(!F.isReservedTag(o))return Br(e,r,i),!1;return!0},text:function(e,t){t.value&&Er(e,"textContent","_s("+t.value+")",t)},html:function(e,t){t.value&&Er(e,"innerHTML","_s("+t.value+")",t)}},isPreTag:function(e){return"pre"===e},isUnaryTag:$o,mustUseProp:Dn,canBeLeftOpenTag:wo,isReservedTag:Zn,getTagNamespace:Gn,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}($a)},ka=g(function(e){return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))});function Aa(e,t){e&&(wa=ka(t.staticKeys||""),Ca=t.isReservedTag||T,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||d(e.tag)||!Ca(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(wa)))}(t);if(1===t.type){if(!Ca(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var Oa=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Sa=/\([^)]*?\);*$/,Ta=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Na={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Ea={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},ja=function(e){return"if("+e+")return null;"},Da={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ja("$event.target !== $event.currentTarget"),ctrl:ja("!$event.ctrlKey"),shift:ja("!$event.shiftKey"),alt:ja("!$event.altKey"),meta:ja("!$event.metaKey"),left:ja("'button' in $event && $event.button !== 0"),middle:ja("'button' in $event && $event.button !== 1"),right:ja("'button' in $event && $event.button !== 2")};function La(e,t){var n=t?"nativeOn:":"on:",r="",i="";for(var o in e){var a=Ia(e[o]);e[o]&&e[o].dynamic?i+=o+","+a+",":r+='"'+o+'":'+a+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function Ia(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return Ia(e)}).join(",")+"]";var t=Ta.test(e.value),n=Oa.test(e.value),r=Ta.test(e.value.replace(Sa,""));if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(Da[s])o+=Da[s],Na[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=ja(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=function(e){return"if(!$event.type.indexOf('key')&&"+e.map(Ma).join("&&")+")return null;"}(a)),o&&(i+=o),"function($event){"+i+(t?"return "+e.value+".apply(null, arguments)":n?"return ("+e.value+").apply(null, arguments)":r?"return "+e.value:e.value)+"}"}return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}function Ma(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Na[e],r=Ea[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var Fa={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:S},Pa=function(e){this.options=e,this.warn=e.warn||Tr,this.transforms=Nr(e.modules,"transformCode"),this.dataGenFns=Nr(e.modules,"genData"),this.directives=A(A({},Fa),e.directives);var t=e.isReservedTag||T;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Ra(e,t){var n=new Pa(t);return{render:"with(this){return "+(e?"script"===e.tag?"null":Ha(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Ha(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Ba(e,t);if(e.once&&!e.onceProcessed)return Ua(e,t);if(e.for&&!e.forProcessed)return za(e,t);if(e.if&&!e.ifProcessed)return Va(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=Wa(e,t),i="_t("+n+(r?",function(){return "+r+"}":""),o=e.attrs||e.dynamicAttrs?Xa((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){return{name:b(e.name),value:e.value,dynamic:e.dynamic}})):null,a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:Wa(t,n,!0);return"_c("+e+","+Ka(t,n)+(r?","+r:"")+")"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=Ka(e,t));var i=e.inlineTemplate?null:Wa(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return Wa(e,t)||"void 0"}function Ba(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+Ha(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Ua(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Va(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Ha(e,t)+","+t.onceId+++","+n+")":Ha(e,t)}return Ba(e,t)}function Va(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?Ua(e,n):Ha(e,n)}}(e.ifConditions.slice(),t,n,r)}function za(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Ha)(e,t)+"})"}function Ka(e,t){var n="{",r=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?",arg:"+(o.isDynamicArg?o.arg:'"'+o.arg+'"'):"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:"+Xa(e.attrs)+","),e.props&&(n+="domProps:"+Xa(e.props)+","),e.events&&(n+=La(e.events,!1)+","),e.nativeEvents&&(n+=La(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=function(e,t,n){var r=e.for||Object.keys(t).some(function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for||Ja(n)}),i=!!e.if;if(!r)for(var o=e.parent;o;){if(o.slotScope&&o.slotScope!==ua||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}var a=Object.keys(t).map(function(e){return qa(t[e],n)}).join(",");return"scopedSlots:_u(["+a+"]"+(r?",null,true":"")+(!r&&i?",null,false,"+function(e){var t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t>>>0}(a):"")+")"}(e,e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=function(e,t){var n=e.children[0];if(n&&1===n.type){var r=Ra(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+Xa(e.dynamicAttrs)+")"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function Ja(e){return 1===e.type&&("slot"===e.tag||e.children.some(Ja))}function qa(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return Va(e,t,qa,"null");if(e.for&&!e.forProcessed)return za(e,t,qa);var r=e.slotScope===ua?"":String(e.slotScope),i="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(Wa(e,t)||"undefined")+":undefined":Wa(e,t)||"undefined":Ha(e,t))+"}",o=r?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+i+o+"}"}function Wa(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var s=n?t.maybeComponent(a)?",1":",0":"";return""+(r||Ha)(a,t)+s}var c=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Za(i)||i.ifConditions&&i.ifConditions.some(function(e){return Za(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,u=i||Ga;return"["+o.map(function(e){return u(e,t)}).join(",")+"]"+(c?","+c:"")}}function Za(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function Ga(e,t){return 1===e.type?Ha(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:Ya(JSON.stringify(n.text)))+")";var n,r}function Xa(e){for(var t="",n="",r=0;r<e.length;r++){var i=e[r],o=Ya(i.value);i.dynamic?n+=i.name+","+o+",":t+='"'+i.name+'":'+o+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function Ya(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b");function Qa(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),S}}function es(e){var t=Object.create(null);return function(n,r,i){(r=A({},r)).warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=Qa(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return Qa(e,c)}),t[o]=s}}var ts,ns,rs=(ts=function(e,t){var n=fa(e.trim(),t);!1!==t.optimize&&Aa(n,t);var r=Ra(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=A(Object.create(e.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=function(e,t,n){(n?o:i).push(e)};var s=ts(t.trim(),r);return s.errors=i,s.tips=o,s}return{compile:t,compileToFunctions:es(t)}})(xa),is=(rs.compile,rs.compileToFunctions);function os(e){return(ns=ns||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',ns.innerHTML.indexOf("&#10;")>0}var as=!!V&&os(!1),ss=!!V&&os(!0),cs=g(function(e){var t=Qn(e);return t&&t.innerHTML}),us=Cn.prototype.$mount;Cn.prototype.$mount=function(e,t){if((e=e&&Qn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=cs(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){var i=is(r,{outputSourceRange:!1,shouldDecodeNewlines:as,shouldDecodeNewlinesForHref:ss,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return us.call(this,e,t)},Cn.compile=is,module.exports=Cn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(65).setImmediate))

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* unused harmony export mapGetters */
/* unused harmony export mapActions */
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v2.5.0
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (false) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (false) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (false) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (false) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (false) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (false) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    false
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (false) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (false) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (false) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (false) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (false) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (false) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (false) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (false) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (false) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.5.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map