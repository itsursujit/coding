(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Articles.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Articles.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ArticleList */ "./resources/js/components/ArticleList.vue");
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
    ArticlesList: _components_ArticleList__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/About.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/About.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      open: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ArticleItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageItem */ "./resources/js/components/ImageItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ImageItem: _ImageItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ArticleList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArticleItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleItem */ "./resources/js/components/ArticleItem.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
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
  name: "ArticlesList",
  data: function data() {
    return {
      articles: []
    };
  },
  components: {
    ArticleItem: _ArticleItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('', {
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                },
                responseType: 'json',
                withCredentials: true
              });

            case 3:
              _ref = _context.sent;
              data = _ref.data;
              this.articles = data.articles;
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 8]]);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }()
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageSpinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageSpinner */ "./resources/js/components/ImageSpinner.vue");
//
//
//
//
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
  name: "ImageItem",
  components: {
    ImageSpinner: _ImageSpinner__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    source: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app[data-v-51c67a5b] {\n  font-family: \"Roboto\", sans-serif;\n}\n#app .news-api-link[data-v-51c67a5b] {\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  background: #fff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article-item[data-v-33348f8e] {\n  padding: 40px 10px;\n  border-bottom: 1px solid #000;\n}\n.article-item__content[data-v-33348f8e] {\n  display: flex;\n}\n.article-item__description[data-v-33348f8e] {\n  font-size: 14px;\n  width: 50%;\n}\n.article-item__image[data-v-33348f8e] {\n  width: 50%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image__wrapper[data-v-754c339a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n}\n.image__wrapper.loaded .image__item[data-v-754c339a] {\n  visibility: visible;\n  opacity: 1;\n  border: 0;\n}\n.image__wrapper.loaded .image__spinner[data-v-754c339a] {\n  display: none;\n  width: 100%;\n}\n.image__item[data-v-754c339a] {\n  width: 100%;\n  border-radius: 4px;\n  transition: all 0.4s ease-in-out;\n  opacity: 0;\n  visibility: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ripple[data-v-649acdae] {\n  display: inline-block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n}\n.ripple__circle[data-v-649acdae] {\n  position: absolute;\n  border: 4px solid #60d070;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: ripple-data-v-649acdae 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n          animation: ripple-data-v-649acdae 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.ripple__inner-circle[data-v-649acdae] {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n@-webkit-keyframes ripple-data-v-649acdae {\n0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n}\n100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n}\n}\n@keyframes ripple-data-v-649acdae {\n0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n}\n100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Articles.vue?vue&type=template&id=51c67a5b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Articles.vue?vue&type=template&id=51c67a5b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("ArticlesList"),
      _vm._v(" "),
      _c("link", {
        attrs: {
          href: "https://fonts.googleapis.com/css?family=Roboto:100,300",
          rel: "stylesheet"
        }
      }),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "news-api-link", attrs: { href: "NewsAPI.org" } },
        [_vm._v("powered by NewsAPI.org")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/About.vue?vue&type=template&id=fb05e49c&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/About.vue?vue&type=template&id=fb05e49c& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex items-center justify-center" }, [
    _c(
      "div",
      { staticClass: "relative" },
      [
        _vm.open
          ? _c("div", {
              staticClass: "fixed inset-0",
              on: {
                click: function($event) {
                  _vm.open = false
                },
                focusin: function($event) {
                  _vm.open = false
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "relative flex items-center focus:outline-none",
            on: {
              click: function($event) {
                _vm.open = !_vm.open
              }
            }
          },
          [
            _c("img", {
              staticClass: "rounded-full h-8 w-8",
              attrs: {
                src: "https://github.com/adamwathan.png",
                alt: "Adam Wathan's avatar"
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "ml-2 font-medium" }, [
              _vm._v("Adam Wathan")
            ]),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass: "ml-1 h-5 w-5 fill-current text-gray-700",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                  }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "transition",
          {
            attrs: {
              "enter-active-class":
                "transition-all transition-fastest ease-out-quad",
              "leave-active-class":
                "transition-all transition-faster ease-in-quad",
              "enter-class": "opacity-0 scale-70",
              "enter-to-class": "opacity-100 scale-100",
              "leave-class": "opacity-100 scale-100",
              "leave-to-class": "opacity-0 scale-70"
            }
          },
          [
            _vm.open
              ? _c(
                  "div",
                  {
                    staticClass:
                      "origin-top-right absolute right-0 mt-2 w-64 bg-white rounded-lg border shadow-md py-2"
                  },
                  [
                    _c("ul", [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass:
                              "block px-4 py-2 hover:bg-indigo-500 hover:text-white",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Profile")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass:
                              "block px-4 py-2 hover:bg-indigo-500 hover:text-white",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Account settings")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass:
                              "block px-4 py-2 hover:bg-indigo-500 hover:text-white",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Sign out")]
                        )
                      ])
                    ])
                  ]
                )
              : _vm._e()
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleItem.vue?vue&type=template&id=33348f8e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ArticleItem.vue?vue&type=template&id=33348f8e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("article", { staticClass: "article-item" }, [
    _c("header", [
      _c("h1", [_vm._v(_vm._s(_vm.article.title))]),
      _vm._v(" "),
      _vm.article.author
        ? _c("p", [
            _vm._v("\n            By "),
            _c("span", [_vm._v(_vm._s(_vm.article.author))])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "article-item__content" },
      [
        _c("p", { staticClass: "article-item__description" }, [
          _vm._v(
            "\n            " + _vm._s(_vm.article.description) + "\n        "
          )
        ]),
        _vm._v(" "),
        _vm.article.urlToImage
          ? _c("ImageItem", {
              staticClass: "article-item__image",
              attrs: { source: _vm.article.urlToImage }
            })
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c("footer", [
      _c("a", { attrs: { href: _vm.article.url } }, [_vm._v("Link")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleList.vue?vue&type=template&id=3d3a0799&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ArticleList.vue?vue&type=template&id=3d3a0799& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.articles, function(article) {
      return article.urlToImage
        ? _c("ArticleItem", { key: article.url, attrs: { article: article } })
        : _vm._e()
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "main",
      { staticClass: "flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col" },
      [
        _c("section", { staticClass: "p-4" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("form", { staticClass: "w-full max-w-lg" }, [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" }, [
                _c(
                  "label",
                  {
                    staticClass:
                      "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                    attrs: { for: "grid-state" }
                  },
                  [
                    _vm._v(
                      "\n                            State\n                        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "relative" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "fill-current h-4 w-4",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(5)
            ])
          ]),
          _vm._v(" "),
          _vm._m(6)
        ])
      ]
    ),
    _vm._v(" "),
    _c("p", [_vm._v("Home")]),
    _vm._v(" "),
    _vm._m(7)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "md:flex" }, [
      _c(
        "h2",
        {
          staticClass:
            "md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6"
        },
        [_vm._v("Create New Location")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
      _c("div", { staticClass: "w-full md:w-1/2 px-3 mb-6 md:mb-0" }, [
        _c(
          "label",
          {
            staticClass:
              "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
            attrs: { for: "grid-first-name" }
          },
          [
            _vm._v(
              "\n                            First Name\n                        "
            )
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass:
            "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
          attrs: { id: "grid-first-name", type: "text", placeholder: "Jane" }
        }),
        _vm._v(" "),
        _c("p", { staticClass: "text-red-500 text-xs italic" }, [
          _vm._v("Please fill out this field.")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-full md:w-1/2 px-3" }, [
        _c(
          "label",
          {
            staticClass:
              "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
            attrs: { for: "grid-last-name" }
          },
          [
            _vm._v(
              "\n                            Last Name\n                        "
            )
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass:
            "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
          attrs: { id: "grid-last-name", type: "text", placeholder: "Doe" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
      _c("div", { staticClass: "w-full px-3" }, [
        _c(
          "label",
          {
            staticClass:
              "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
            attrs: { for: "grid-password" }
          },
          [
            _vm._v(
              "\n                            Password\n                        "
            )
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass:
            "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
          attrs: {
            id: "grid-password",
            type: "password",
            placeholder: "******************"
          }
        }),
        _vm._v(" "),
        _c("p", { staticClass: "text-gray-600 text-xs italic" }, [
          _vm._v("Make it as long and as crazy as you'd like")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" }, [
      _c(
        "label",
        {
          staticClass:
            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
          attrs: { for: "grid-city" }
        },
        [_vm._v("\n                            City\n                        ")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
        attrs: { id: "grid-city", type: "text", placeholder: "Albuquerque" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "select",
      {
        staticClass:
          "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
        attrs: { id: "grid-state" }
      },
      [
        _c("option", [_vm._v("New Mexico")]),
        _vm._v(" "),
        _c("option", [_vm._v("Missouri")]),
        _vm._v(" "),
        _c("option", [_vm._v("Texas")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" }, [
      _c(
        "label",
        {
          staticClass:
            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
          attrs: { for: "grid-zip" }
        },
        [_vm._v("\n                            Zip\n                        ")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
        attrs: { id: "grid-zip", type: "text", placeholder: "90210" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("div", { staticClass: "md:flex mb-8" }, [
        _c("div", { staticClass: "md:w-1/3" }, [
          _c("legend", { staticClass: "uppercase tracking-wide text-sm" }, [
            _vm._v("Location")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-xs font-light text-red" }, [
            _vm._v("This entire section is required.")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex-1 mt-2 mb:mt-0 md:px-3" }, [
          _c("div", { staticClass: "mb-4" }, [
            _c(
              "label",
              {
                staticClass: "block uppercase tracking-wide text-xs font-bold"
              },
              [_vm._v("Name")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "w-full shadow-inner p-4 border-0",
              attrs: {
                type: "text",
                name: "name",
                placeholder: "Acme Mfg. Co."
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "md:flex mb-4" }, [
            _c("div", { staticClass: "md:flex-1 md:pr-3" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                },
                [_vm._v("Street Address")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "w-full shadow-inner p-4 border-0",
                attrs: {
                  type: "text",
                  name: "address_street",
                  placeholder: "555 Roadrunner Lane"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "md:flex-1 md:pl-3" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                },
                [_vm._v("Building/Suite No.")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "w-full shadow-inner p-4 border-0",
                attrs: {
                  type: "text",
                  name: "address_number",
                  placeholder: "#3"
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "text-xs mb-4 font-thin" }, [
                _vm._v("We lied, this isn't required.")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "md:flex mb-4" }, [
            _c("div", { staticClass: "md:flex-1 md:pr-3" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                },
                [_vm._v("Latitude")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "w-full shadow-inner p-4 border-0",
                attrs: { type: "text", name: "lat", placeholder: "30.0455542" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "md:flex-1 md:pl-3" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                },
                [_vm._v("Longitude")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "w-full shadow-inner p-4 border-0",
                attrs: { type: "text", name: "lon", placeholder: "-99.1405168" }
              })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "md:flex mb-8" }, [
        _c("div", { staticClass: "md:w-1/3" }, [
          _c("legend", { staticClass: "uppercase tracking-wide text-sm" }, [
            _vm._v("Contact")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex-1 mt-2 mb:mt-0 md:px-3" }, [
          _c("div", { staticClass: "mb-4" }, [
            _c(
              "label",
              {
                staticClass: "block uppercase tracking-wide text-xs font-bold"
              },
              [_vm._v("Phone")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "w-full shadow-inner p-4 border-0",
              attrs: {
                type: "tel",
                name: "phone",
                placeholder: "(555) 555-5555"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-4" }, [
            _c(
              "label",
              {
                staticClass:
                  "block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
              },
              [_vm._v("URL")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "w-full shadow-inner p-4 border-0",
              attrs: { type: "url", name: "url", placeholder: "acme.co" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-4" }, [
            _c(
              "label",
              {
                staticClass:
                  "block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
              },
              [_vm._v("Email")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "w-full shadow-inner p-4 border-0",
              attrs: {
                type: "email",
                name: "email",
                placeholder: "contact@acme.co"
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "md:flex" }, [
        _c("div", { staticClass: "md:w-1/3" }, [
          _c("legend", { staticClass: "uppercase tracking-wide text-sm" }, [
            _vm._v("Social")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex-1 mt-2 mb:mt-0 md:px-3" }, [
          _c("div", { staticClass: "md:flex mb-4" }, [
            _c("div", { staticClass: "md:flex-1 md:pr-3" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                },
                [_vm._v("Facebook")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "w-full flex" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "text-xs py-4 px-2 bg-grey-light text-grey-dark"
                  },
                  [_vm._v("facebook.com/")]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "flex-1 shadow-inner p-4 border-0",
                  attrs: {
                    type: "text",
                    name: "facebook",
                    placeholder: "acmeco"
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "md:flex-1 md:pl-3 mt-2 md:mt-0" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                },
                [_vm._v("Twitter")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "w-full flex" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "text-xs py-4 px-2 bg-grey-light text-grey-dark"
                  },
                  [_vm._v("twitter.com/")]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "flex-1 shadow-inner p-4 border-0",
                  attrs: {
                    type: "text",
                    name: "twitter",
                    placeholder: "acmeco"
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "md:flex mb-4" }, [
            _c("div", { staticClass: "md:flex-1 md:pr-3" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                },
                [_vm._v("Instagram")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "w-full flex" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "text-xs py-4 px-2 bg-grey-light text-grey-dark"
                  },
                  [_vm._v("instagram.com/")]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "flex-1 shadow-inner p-4 border-0",
                  attrs: {
                    type: "text",
                    name: "instagram",
                    placeholder: "acmeco"
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "md:flex-1 md:pl-3 mt-2 md:mt-0" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                },
                [_vm._v("Yelp")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "w-full flex" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "text-xs py-4 px-2 bg-grey-light text-grey-dark"
                  },
                  [_vm._v("yelp.com/")]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "flex-1 shadow-inner p-4 border-0",
                  attrs: { type: "text", name: "yelp", placeholder: "acmeco" }
                })
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "md:flex mb-6" }, [
        _c("div", { staticClass: "md:w-1/3" }, [
          _c("legend", { staticClass: "uppercase tracking-wide text-sm" }, [
            _vm._v("Description")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex-1 mt-2 mb:mt-0 md:px-3" }, [
          _c("textarea", {
            staticClass: "w-full shadow-inner p-4 border-0",
            attrs: { placeholder: "We build fine acmes.", rows: "6" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "md:flex mb-6" }, [
        _c("div", { staticClass: "md:w-1/3" }, [
          _c("legend", { staticClass: "uppercase tracking-wide text-sm" }, [
            _vm._v("Cover Image")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex-1 px-3 text-center" }, [
          _c(
            "div",
            {
              staticClass:
                "button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative"
            },
            [
              _c("input", {
                staticClass: "opacity-0 absolute pin-x pin-y",
                attrs: { type: "file", name: "cover_image" }
              }),
              _vm._v(
                "\n                            Add Cover Image\n                        "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark"
        },
        [
          _c(
            "div",
            { staticClass: "md:flex-1 px-3 text-center md:text-right" },
            [
              _c("input", {
                attrs: { type: "hidden", name: "sponsor", value: "0" }
              }),
              _vm._v(" "),
              _c("input", {
                staticClass:
                  "button text-cream-lighter bg-brick hover:bg-brick-dark",
                attrs: { type: "submit", value: "Create Location" }
              })
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl"
      },
      [
        _c("div", { staticClass: "flex-shrink-0" }, [
          _c("img", {
            staticClass: "h-12 w-12",
            attrs: { src: "/img/logo.svg", alt: "ChitChat Logo" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ml-6 pt-1" }, [
          _c("h4", { staticClass: "text-xl text-gray-900 leading-tight" }, [
            _vm._v("ChitChat")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-base text-gray-600 leading-normal" }, [
            _vm._v("You have a new message!")
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageItem.vue?vue&type=template&id=754c339a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageItem.vue?vue&type=template&id=754c339a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "figure",
    {
      directives: [{ name: "lazyload", rawName: "v-lazyload" }],
      staticClass: "image__wrapper"
    },
    [
      _c("ImageSpinner", { staticClass: "image__spinner" }),
      _vm._v(" "),
      _c("img", {
        staticClass: "image__item",
        attrs: { "data-url": _vm.source, alt: "random image" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageSpinner.vue?vue&type=template&id=649acdae&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImageSpinner.vue?vue&type=template&id=649acdae&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ripple" }, [
      _c("div", { staticClass: "ripple__circle" }),
      _vm._v(" "),
      _c("div", { staticClass: "ripple__circle ripple__inner-circle" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Articles.vue":
/*!***********************************!*\
  !*** ./resources/js/Articles.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Articles_vue_vue_type_template_id_51c67a5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Articles.vue?vue&type=template&id=51c67a5b&scoped=true& */ "./resources/js/Articles.vue?vue&type=template&id=51c67a5b&scoped=true&");
/* harmony import */ var _Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Articles.vue?vue&type=script&lang=js& */ "./resources/js/Articles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Articles_vue_vue_type_style_index_0_id_51c67a5b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true& */ "./resources/js/Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Articles_vue_vue_type_template_id_51c67a5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Articles_vue_vue_type_template_id_51c67a5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "51c67a5b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Articles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Articles.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./resources/js/Articles.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Articles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_51c67a5b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Articles.vue?vue&type=style&index=0&id=51c67a5b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_51c67a5b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_51c67a5b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_51c67a5b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_51c67a5b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_id_51c67a5b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Articles.vue?vue&type=template&id=51c67a5b&scoped=true&":
/*!******************************************************************************!*\
  !*** ./resources/js/Articles.vue?vue&type=template&id=51c67a5b&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_51c67a5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=template&id=51c67a5b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Articles.vue?vue&type=template&id=51c67a5b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_51c67a5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_51c67a5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _directives_LazyLoadDirectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/LazyLoadDirectives */ "./resources/js/directives/LazyLoadDirectives.js");





vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.productionTip = false;
axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = "http://coding.test/api/articles";
vue__WEBPACK_IMPORTED_MODULE_0___default.a.directive("lazyload", _directives_LazyLoadDirectives__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ./doc */ "./resources/js/doc.js");
/*

window.Vue = require('vue');
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
*/


var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  router: new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"](_routes__WEBPACK_IMPORTED_MODULE_2__["default"])
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {} //console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/About.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/About.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_fb05e49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=fb05e49c& */ "./resources/js/components/About.vue?vue&type=template&id=fb05e49c&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/components/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_fb05e49c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_fb05e49c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/About.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/About.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/About.vue?vue&type=template&id=fb05e49c&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/About.vue?vue&type=template&id=fb05e49c& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fb05e49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=fb05e49c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/About.vue?vue&type=template&id=fb05e49c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fb05e49c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fb05e49c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ArticleItem.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ArticleItem.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleItem_vue_vue_type_template_id_33348f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleItem.vue?vue&type=template&id=33348f8e&scoped=true& */ "./resources/js/components/ArticleItem.vue?vue&type=template&id=33348f8e&scoped=true&");
/* harmony import */ var _ArticleItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleItem.vue?vue&type=script&lang=js& */ "./resources/js/components/ArticleItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ArticleItem_vue_vue_type_style_index_0_id_33348f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true& */ "./resources/js/components/ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ArticleItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleItem_vue_vue_type_template_id_33348f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArticleItem_vue_vue_type_template_id_33348f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "33348f8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ArticleItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ArticleItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ArticleItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_id_33348f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleItem.vue?vue&type=style&index=0&id=33348f8e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_id_33348f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_id_33348f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_id_33348f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_id_33348f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_id_33348f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ArticleItem.vue?vue&type=template&id=33348f8e&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ArticleItem.vue?vue&type=template&id=33348f8e&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_template_id_33348f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleItem.vue?vue&type=template&id=33348f8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleItem.vue?vue&type=template&id=33348f8e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_template_id_33348f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_template_id_33348f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ArticleList.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ArticleList.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleList_vue_vue_type_template_id_3d3a0799___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleList.vue?vue&type=template&id=3d3a0799& */ "./resources/js/components/ArticleList.vue?vue&type=template&id=3d3a0799&");
/* harmony import */ var _ArticleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleList.vue?vue&type=script&lang=js& */ "./resources/js/components/ArticleList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ArticleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleList_vue_vue_type_template_id_3d3a0799___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArticleList_vue_vue_type_template_id_3d3a0799___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ArticleList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ArticleList.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ArticleList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ArticleList.vue?vue&type=template&id=3d3a0799&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ArticleList.vue?vue&type=template&id=3d3a0799& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleList_vue_vue_type_template_id_3d3a0799___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleList.vue?vue&type=template&id=3d3a0799& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ArticleList.vue?vue&type=template&id=3d3a0799&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleList_vue_vue_type_template_id_3d3a0799___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleList_vue_vue_type_template_id_3d3a0799___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ImageItem.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/ImageItem.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageItem_vue_vue_type_template_id_754c339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageItem.vue?vue&type=template&id=754c339a&scoped=true& */ "./resources/js/components/ImageItem.vue?vue&type=template&id=754c339a&scoped=true&");
/* harmony import */ var _ImageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageItem.vue?vue&type=script&lang=js& */ "./resources/js/components/ImageItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageItem_vue_vue_type_style_index_0_id_754c339a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss& */ "./resources/js/components/ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageItem_vue_vue_type_template_id_754c339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageItem_vue_vue_type_template_id_754c339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "754c339a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ImageItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ImageItem.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/ImageItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_754c339a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageItem.vue?vue&type=style&index=0&id=754c339a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_754c339a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_754c339a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_754c339a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_754c339a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_style_index_0_id_754c339a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ImageItem.vue?vue&type=template&id=754c339a&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ImageItem.vue?vue&type=template&id=754c339a&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_template_id_754c339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageItem.vue?vue&type=template&id=754c339a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageItem.vue?vue&type=template&id=754c339a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_template_id_754c339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageItem_vue_vue_type_template_id_754c339a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ImageSpinner.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ImageSpinner.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageSpinner_vue_vue_type_template_id_649acdae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageSpinner.vue?vue&type=template&id=649acdae&scoped=true& */ "./resources/js/components/ImageSpinner.vue?vue&type=template&id=649acdae&scoped=true&");
/* harmony import */ var _ImageSpinner_vue_vue_type_style_index_0_id_649acdae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true& */ "./resources/js/components/ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _ImageSpinner_vue_vue_type_template_id_649acdae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageSpinner_vue_vue_type_template_id_649acdae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "649acdae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ImageSpinner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSpinner_vue_vue_type_style_index_0_id_649acdae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageSpinner.vue?vue&type=style&index=0&id=649acdae&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSpinner_vue_vue_type_style_index_0_id_649acdae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSpinner_vue_vue_type_style_index_0_id_649acdae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSpinner_vue_vue_type_style_index_0_id_649acdae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSpinner_vue_vue_type_style_index_0_id_649acdae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSpinner_vue_vue_type_style_index_0_id_649acdae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ImageSpinner.vue?vue&type=template&id=649acdae&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ImageSpinner.vue?vue&type=template&id=649acdae&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSpinner_vue_vue_type_template_id_649acdae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSpinner.vue?vue&type=template&id=649acdae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImageSpinner.vue?vue&type=template&id=649acdae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSpinner_vue_vue_type_template_id_649acdae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSpinner_vue_vue_type_template_id_649acdae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/directives/LazyLoadDirectives.js":
/*!*******************************************************!*\
  !*** ./resources/js/directives/LazyLoadDirectives.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  inserted: function inserted(el) {
    function loadImage() {
      var imageElement = Array.from(el.children).find(function (el) {
        return el.nodeName === "IMG";
      });

      if (imageElement) {
        imageElement.addEventListener("load", function () {
          setTimeout(function () {
            return el.classList.add("loaded");
          }, 100);
        });
        imageElement.addEventListener("error", function () {
          return console.log("error");
        });
        imageElement.src = imageElement.dataset.url;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        } else {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      var options = {
        // circumstances under which the observer's callback is invoked
        root: null,
        // defaults to the browser viewport if not specified or if null
        threshold: "0" // the degree of intersection between the target element and its root (0 - 1)
        // threshold of 1.0 means that when 100% of the target is visible within
        //the element specified by the root option, the callback is invoked

      }; // Whether you're using the viewport or some other element as the root,the API works the same way,
      // executing a callback function you provide whenever the visibility of the target element changes
      // so that it crosses desired amounts of intersection with the root

      var observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el); // target element to watch
    }

    if (!window["IntersectionObserver"]) {
      loadImage();
    } else {
      createObserver();
    }
  }
});

/***/ }),

/***/ "./resources/js/doc.js":
/*!*****************************!*\
  !*** ./resources/js/doc.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ready(handler) {
  if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
}

var _clickEvents = ['click', 'touchstart'];
ready(function () {
  var burgers = document.querySelectorAll('.burger');
  [].forEach.call(burgers, function (burger) {
    _clickEvents.forEach(function (clickEvent) {
      burger.addEventListener(clickEvent, function (e) {
        e.preventDefault();
        var node = e.currentTarget;

        if (node) {
          node.classList.toggle('is-active'); // Get the target from the "data-target" attribute

          var target = node.dataset.target;

          if (target) {
            var targetNode = document.querySelector(node.dataset.target);

            if (targetNode) {
              targetNode.classList.toggle('is-active');
            }
          }
        }
      });
    });
  });
  var menus = document.querySelectorAll('.menu');
  [].forEach.call(menus, function (menu) {
    // Open menu which contains the current active item
    var activeMenus = menu.querySelectorAll('.menu-item:not(.has-dropdown).is-active');
    [].forEach.call(activeMenus, function (activeMenu) {
      activeMenu = activeMenu.closest('.menu-item.has-dropdown');

      if (activeMenu) {
        activeMenu.classList.add('is-active');
      }
    });
    var dropdownMenus = menu.querySelectorAll('.menu-item.has-dropdown > .menu-title');
    [].forEach.call(dropdownMenus, function (dropdownMenu) {
      dropdownMenu.addEventListener('click', function (e) {
        e.preventDefault();
        var currentMenu = e.currentTarget; // Toggle current menu

        currentMenu.closest('.menu-item.has-dropdown').classList.toggle('is-active'); // Close all other active menus

        var otherActiveMenus = menu.querySelectorAll('.menu-item.has-dropdown.is-active');
        [].forEach.call(otherActiveMenus, function (otherActiveMenu) {
          if (!currentMenu.isEqualNode(otherActiveMenu.querySelector('.menu-title'))) {
            otherActiveMenu.classList.remove('is-active');
          }
        });
      });
    });
  });
  var tabs = document.querySelectorAll('.tabs li a');
  [].forEach.call(tabs, function (tab) {
    if (window.location.hash) {
      var tabToShow = tab.closest('.tabs').querySelector('[href="' + window.location.hash + '"]');
      var tabContentToShow = document.querySelector(window.location.hash);

      if (tabToShow && tabContentToShow) {
        var tabToHide = tab.closest('.tabs').querySelector('li.is-active');

        if (tabToHide) {
          var tabToHideLink = tabToHide.querySelector('a');
          var tabContentToHide = document.querySelector(tabToHideLink.getAttribute('href'));

          if (tabContentToHide) {
            tabContentToHide.classList.remove('is-active');
          }

          tabToHideLink.classList.remove('is-active');
          tabToHide.classList.remove('is-active');
        }

        tabToShow.closest('li').classList.add('is-active');
        tabContentToShow.classList.add('is-active');
      }
    }

    _clickEvents.forEach(function (clickEvent) {
      tab.addEventListener(clickEvent, function (event) {
        event.preventDefault();
        var tab = event.currentTarget;
        var tabToHide = tab.closest('.tabs').querySelector('li.is-active');

        if (tabToHide) {
          var _tabToHideLink = tabToHide.querySelector('a');

          var _tabContentToHide = document.querySelector(_tabToHideLink.getAttribute('href'));

          if (_tabContentToHide) {
            _tabContentToHide.classList.remove('is-active');
          }

          _tabToHideLink.classList.remove('is-active');

          tabToHide.classList.remove('is-active');
        }

        tab.closest('li').classList.add('is-active');
        var tabContentToShow = document.querySelector(tab.getAttribute('href'));

        if (tabContentToShow) {
          tabContentToShow.classList.add('is-active');
        }
      });
    });
  });
});

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ "./resources/js/components/Home.vue");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/About */ "./resources/js/components/About.vue");
/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Articles */ "./resources/js/Articles.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  mode: "history",
  routes: [{
    path: '/',
    component: _components_Home__WEBPACK_IMPORTED_MODULE_0__["default"]
  }, {
    path: '/about',
    component: _components_About__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, {
    path: '/articles',
    component: _Articles__WEBPACK_IMPORTED_MODULE_2__["default"]
  }]
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/vendor.scss":
/*!************************************!*\
  !*** ./resources/sass/vendor.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/vendor.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sujitbaniya/Sites/coding/resources/js/app.js */"./resources/js/app.js");
__webpack_require__(/*! /Users/sujitbaniya/Sites/coding/resources/sass/app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! /Users/sujitbaniya/Sites/coding/resources/sass/vendor.scss */"./resources/sass/vendor.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);