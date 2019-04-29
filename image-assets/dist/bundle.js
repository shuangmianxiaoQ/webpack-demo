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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/avatar.jpg":
/*!*******************************!*\
  !*** ./src/assets/avatar.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/avatar.jpg\";\n\n//# sourceURL=webpack:///./src/assets/avatar.jpg?");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDQ2LjcgODc1LjciPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zODcgMGwzODcgMjE4Ljl2NDM3LjlMMzg3IDg3NS43IDAgNjU2LjhWMjE4LjlMMzg3IDB6Ii8+PHBhdGggZmlsbD0iIzhFRDZGQiIgZD0iTTcwNC45IDY0MS43TDM5OS44IDgxNC4zVjY3OS45bDE5MC4xLTEwNC42IDExNSA2Ni40em0yMC45LTE4LjlWMjYxLjlsLTExMS42IDY0LjV2MjMybDExMS42IDY0LjR6TTY3LjkgNjQxLjdMMzczIDgxNC4zVjY3OS45TDE4Mi44IDU3NS4zIDY3LjkgNjQxLjd6TTQ3IDYyMi44VjI2MS45bDExMS42IDY0LjV2MjMyTDQ3IDYyMi44em0xMy4xLTM4NC4zTDM3MyA2MS41djEyOS45TDE3Mi41IDMwMS43bC0xLjYuOS0xMTAuOC02NC4xem02NTIuNiAwbC0zMTIuOS0xNzd2MTI5LjlsMjAwLjUgMTEwLjIgMS42LjkgMTEwLjgtNjR6Ii8+PHBhdGggZmlsbD0iIzFDNzhDMCIgZD0iTTM3MyA2NDkuM0wxODUuNCA1NDYuMVYzNDEuOEwzNzMgNDUwLjF2MTk5LjJ6bTI2LjggMGwxODcuNi0xMDMuMVYzNDEuOEwzOTkuOCA0NTAuMXYxOTkuMnpNMTk4LjEgMzE4LjJsMTg4LjMtMTAzLjUgMTg4LjMgMTAzLjUtMTg4LjMgMTA4LjctMTg4LjMtMTA4Ljd6Ii8+PHBhdGggZmlsbD0iI0Y1RkFGQSIgZD0iTTExNjQuMyA1NzYuM2g4Mi41bDg0LjEtMjgwLjJoLTgwLjRsLTQ5LjggMTk4LjgtNTMuMS0xOTguOEgxMDc4bC01My42IDE5OC44LTQ5LjMtMTk4LjhoLTgwLjRsODMuNiAyODAuMmg4Mi41bDUyLTE3OS41IDUxLjUgMTc5LjV6TTEzMzUuMiA0MzdjMCA4NC4xIDU3LjMgMTQ2LjMgMTQ3LjQgMTQ2LjMgNjkuNyAwIDEwNy4yLTQxLjggMTE3LjktNjEuNmwtNDguOC0zN2MtOCAxMS44LTMwIDM0LjMtNjguMSAzNC4zLTQxLjMgMC03MS4zLTI2LjgtNzIuOS02NC4zSDE2MDhjLjUtNS40LjUtMTAuNy41LTE2LjEgMC05MS42LTQ5LjMtMTQ5LjUtMTM2LjEtMTQ5LjUtNzkuOSAwLTEzNy4yIDYzLjItMTM3LjIgMTQ3Ljl6bTc3LjctMzAuNmMzLjItMzIuMSAyNS43LTU2LjggNjAuNi01Ni44IDMzLjggMCA1OC40IDIyLjUgNjAgNTYuOGgtMTIwLjZ6bTIyMy41IDE2OS45aDY5Ljd2LTI4LjljNy41IDkuMSAzNS40IDM1LjkgODMuMSAzNS45IDgwLjQgMCAxMzcuMi02MC41IDEzNy4yLTE0Ni44IDAtODYuOC01Mi41LTE0Ny4zLTEzMi45LTE0Ny4zLTQ4LjIgMC03Ni4xIDI2LjgtODMuMSAzNi40VjE4OC45aC03My45djM4Ny40aC0uMXptNzEuOC0xMzkuM2MwLTUyLjUgMzEuMS04Mi41IDcxLjgtODIuNSA0Mi45IDAgNzEuOCAzMy44IDcxLjggODIuNSAwIDQ5LjgtMzAgODAuOS03MS44IDgwLjktNDUgMC03MS44LTM2LjUtNzEuOC04MC45em0yNDcgMjM5LjVoNzMuOVY1NDcuM2M3IDkuMSAzNC44IDM1LjkgODMuMSAzNS45IDgwLjQgMCAxMzIuOS02MC41IDEzMi45LTE0Ny4zIDAtODUuNy01Ni44LTE0Ni44LTEzNy4yLTE0Ni44LTQ3LjcgMC03NS42IDI2LjgtODMuMSAzNi40VjI5NmgtNjkuN3YzODAuNWguMXptNzEuOC0yNDEuMWMwLTQ0LjUgMjYuOC04MC45IDcxLjgtODAuOSA0MS44IDAgNzEuOCAzMS4xIDcxLjggODAuOSAwIDQ4LjgtMjguOSA4Mi41LTcxLjggODIuNS00MC43IDAtNzEuOC0zMC03MS44LTgyLjV6bTIzMS41IDU0LjFjMCA1OC45IDQ4LjIgOTMuOCAxMDUgOTMuOCAzMi4yIDAgNTMuNi05LjYgNjguMS0yNS4ybDQuOCAxOC4yaDY1LjRWMzk4LjljMC02Mi43LTI2LjgtMTA5LjgtMTE2LjgtMTA5LjgtNDIuOSAwLTg1LjIgMTYuMS0xMTAuNCAzMy4ybDI3LjkgNTAuNGExNjUuMiAxNjUuMiAwIDAgMSA3NC41LTE5LjhjMzIuNyAwIDUwLjkgMTYuNiA1MC45IDQxLjN2MTguMmMtMTAuMi03LTMyLjItMTUuNS02MC42LTE1LjUtNjUuNC0uMS0xMDguOCAzNy40LTEwOC44IDkyLjZ6bTczLjktMi4yYzAtMjMgMTkuOC0zOS4xIDQ4LjItMzkuMXM0OC44IDE0LjUgNDguOCAzOS4xYzAgMjMuNi0yMC40IDM4LjYtNDguMiAzOC42cy00OC44LTE1LjUtNDguOC0zOC42em0zNDguOSAzMC42Yy00Ni42IDAtNzkuOC0zMy44LTc5LjgtODEuNCAwLTQ1IDI5LjUtODIgNzcuMi04MmE5NS4yIDk1LjIgMCAwIDEgNjUuNCAyNi44bDIwLjktNjIuMmExNDIuNiAxNDIuNiAwIDAgMC04OC40LTMwYy04NS4yIDAtMTQ5IDYyLjctMTQ5IDE0Ny45czYyLjIgMTQ2LjMgMTQ5LjUgMTQ2LjNhMTQxIDE0MSAwIDAgMCA4Ny4zLTMwbC0xOS44LTYwLjVjLTEyLjQgMTAuMS0zNC45IDI1LjEtNjMuMyAyNS4xem0xMTAuOSA1OC40aDczLjlWNDMxLjZsOTMuOCAxNDQuN2g4Ni44TDI5NDAuNiA0MjNsOTguNi0xMjdoLTgzLjFsLTkwIDExNy45di0yMjVoLTczLjl2Mzg3LjR6Ii8+PC9zdmc+\"\n\n//# sourceURL=webpack:///./src/assets/logo.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/avatar.jpg */ \"./src/assets/avatar.jpg\");\n/* harmony import */ var _assets_avatar_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_avatar_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst root = document.getElementById('root');\r\n\r\nconst img1 = new Image();\r\nconst img2 = new Image();\r\n\r\nimg1.src = _assets_avatar_jpg__WEBPACK_IMPORTED_MODULE_0___default.a;\r\nimg2.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a;\r\n\r\nroot.append(img1, img2);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });