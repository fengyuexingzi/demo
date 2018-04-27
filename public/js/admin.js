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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/assets/js/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/Role.vue":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/Role.vue ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n    mounted: function mounted() {\n        this.fetchData();\n    },\n    data: function data() {\n        return {\n            tasks: [],\n            task: {\n                name: ''\n            }\n        };\n    },\n\n    methods: {\n        remainingTasks: function remainingTasks() {\n            return this.tasks.filter(function (task) {\n                return !task.completed;\n            }).length;\n        },\n        completedTasks: function completedTasks() {\n            return this.tasks.filter(function (task) {\n                return task.completed;\n            }).length;\n        },\n        fetchData: function fetchData() {\n            var _this = this;\n\n            axios.get('/api/k_tasks').then(function (res) {\n                _this.tasks = res.data;\n            }).catch(function (err) {\n                console.log(err);\n            });\n        },\n        create: function create() {\n            var _this2 = this;\n\n            axios.post('/api/k_tasks', this.task).then(function (res) {\n                _this2.tasks.unshift(res.data);\n            }).catch(function (err) {\n                console.log(err);\n            });\n        },\n        done: function done(task) {\n            axios.put('/api/k_tasks/' + task.id, {\n                completed: !task.completed\n            }).then(function (res) {\n                console.log('task updated');\n            }).catch(function (err) {\n                console.log(err);\n            });\n        },\n        remove: function remove(task) {\n            var _this3 = this;\n\n            axios.delete('/api/k_tasks/' + task.id, {\n                completed: !task.completed\n            }).then(function (res) {\n                var taskIndex = _this3.tasks.indexOf(task);\n                _this3.tasks.splice(taskIndex, 1);\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    }\n};\n\n//# sourceURL=webpack:///./resources/assets/js/components/admin/Role.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Role.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Role.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./resources/assets/js/components/admin/Role.vue?./node_modules/extract-text-webpack-plugin/dist/loader.js?%7B%22omit%22:1,%22remove%22:true%7D!./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22scoped%22:false,%22sourceMap%22:false%7D!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/component-normalizer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/component-normalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  scriptExports = scriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof scriptExports.default\n  if (type === 'object' || type === 'function') {\n    scriptExports = scriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/component-normalizer.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3499c21a\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/Role.vue":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3499c21a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/Role.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"container\" }, [\n    _c(\"div\", { staticClass: \"row\" }, [\n      _c(\"div\", { staticClass: \"col-md-8 col-md-offset-2\" }, [\n        _c(\"div\", { staticClass: \"panel panel-default\" }, [\n          _c(\"div\", { staticClass: \"panel-heading\" }, [_vm._v(\"My Tasks\")]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"panel-body\" }, [\n            _c(\"div\", { staticClass: \"input-group\" }, [\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.task.name,\n                    expression: \"task.name\"\n                  }\n                ],\n                staticClass: \"form-control\",\n                attrs: { type: \"text\" },\n                domProps: { value: _vm.task.name },\n                on: {\n                  keydown: function($event) {\n                    if (\n                      !(\"button\" in $event) &&\n                      _vm._k($event.keyCode, \"enter\", 13, $event.key, \"Enter\")\n                    ) {\n                      return null\n                    }\n                    return _vm.create($event)\n                  },\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.$set(_vm.task, \"name\", $event.target.value)\n                  }\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"span\", { staticClass: \"input-group-btn\" }, [\n                _c(\n                  \"button\",\n                  { staticClass: \"btn btn-success\", on: { click: _vm.create } },\n                  [_vm._v(\"Add\")]\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"tasks-list\" }, [\n              !_vm.tasks.length\n                ? _c(\"div\", { staticClass: \"alert alert-danger\" }, [\n                    _vm._v(\n                      \"\\n                            You have no tasks!\\n                        \"\n                    )\n                  ])\n                : _vm._e(),\n              _vm._v(\" \"),\n              _c(\n                \"ul\",\n                { staticClass: \"list-unstyled\" },\n                _vm._l(_vm.tasks, function(task) {\n                  return _c(\n                    \"li\",\n                    { key: task.id, class: { done: task.completed } },\n                    [\n                      _c(\"div\", { staticClass: \"checkbox\" }, [\n                        _c(\"label\", [\n                          _c(\"input\", {\n                            directives: [\n                              {\n                                name: \"model\",\n                                rawName: \"v-model\",\n                                value: task.completed,\n                                expression: \"task.completed\"\n                              }\n                            ],\n                            attrs: { type: \"checkbox\" },\n                            domProps: {\n                              checked: Array.isArray(task.completed)\n                                ? _vm._i(task.completed, null) > -1\n                                : task.completed\n                            },\n                            on: {\n                              click: function($event) {\n                                _vm.done(task)\n                              },\n                              change: function($event) {\n                                var $$a = task.completed,\n                                  $$el = $event.target,\n                                  $$c = $$el.checked ? true : false\n                                if (Array.isArray($$a)) {\n                                  var $$v = null,\n                                    $$i = _vm._i($$a, $$v)\n                                  if ($$el.checked) {\n                                    $$i < 0 &&\n                                      _vm.$set(\n                                        task,\n                                        \"completed\",\n                                        $$a.concat([$$v])\n                                      )\n                                  } else {\n                                    $$i > -1 &&\n                                      _vm.$set(\n                                        task,\n                                        \"completed\",\n                                        $$a\n                                          .slice(0, $$i)\n                                          .concat($$a.slice($$i + 1))\n                                      )\n                                  }\n                                } else {\n                                  _vm.$set(task, \"completed\", $$c)\n                                }\n                              }\n                            }\n                          }),\n                          _vm._v(\n                            \" \" +\n                              _vm._s(task.name) +\n                              \"\\n                                    \"\n                          )\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"div\", { staticClass: \"pull-right\" }, [\n                          _c(\n                            \"a\",\n                            {\n                              attrs: { href: \"#\" },\n                              on: {\n                                click: function($event) {\n                                  $event.preventDefault()\n                                  _vm.remove(task)\n                                }\n                              }\n                            },\n                            [_vm._v(\"x\")]\n                          )\n                        ])\n                      ])\n                    ]\n                  )\n                })\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"panel-footer\" }, [\n            _c(\"span\", { staticClass: \"label label-default\" }, [\n              _vm._v(\"You have \" + _vm._s(_vm.tasks.length) + \" tasks\")\n            ]),\n            _vm._v(\" \"),\n            _c(\"span\", { staticClass: \"label label-warning\" }, [\n              _vm._v(_vm._s(_vm.remainingTasks()) + \" tasks left\")\n            ]),\n            _vm._v(\" \"),\n            _c(\"span\", { staticClass: \"label label-success\" }, [\n              _vm._v(_vm._s(_vm.completedTasks()) + \" tasks completed\")\n            ])\n          ])\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///./resources/assets/js/components/admin/Role.vue?./node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-3499c21a%22,%22hasScoped%22:false,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!./node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "./resources/assets/js/admin.js":
/*!**************************************!*\
  !*** ./resources/assets/js/admin.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jquery = __webpack_require__(/*! jquery */ \"jquery\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\n__webpack_require__(/*! metismenu */ \"metismenu\");\n\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _Role = __webpack_require__(/*! ./components/admin/Role.vue */ \"./resources/assets/js/components/admin/Role.vue\");\n\nvar _Role2 = _interopRequireDefault(_Role);\n\n__webpack_require__(/*! ../sass/admin.scss */ \"./resources/assets/sass/admin.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.$ = window.jQuery = _jquery2.default;\n\n/* CSS */\n/* Components */\n\n\n$().ready(function () {\n    $(\"#side-menu\").metisMenu();\n\n    $(window).bind(\"load resize\", function () {\n        var topOffset = 50;\n        var width = (this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.height) - 1;\n        if (width < 768) {\n            $(\"div.navbar-collapse\").addClass('collapse');\n            topOffset = 100;\n        } else {\n            $('div.navbar-collapse').removeClass('collapse');\n        }\n\n        var height = (this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height) - 1;\n        height = height - topOffset;\n        if (height < 1) height = 1;\n        if (height > topOffset) {\n            $(\"#page-wrapper\").css(\"min-height\", height + \"px\");\n        }\n    });\n\n    var url = window.location;\n    var element = $('ul.nav a').filter(function () {\n        return this.href == url;\n    }).addClass('active').parent();\n\n    while (true) {\n        if (element.is('li')) {\n            element = element.parent().addClass('in').parent();\n        } else {\n            break;\n        }\n    }\n});\n\nvar app = new _vue2.default({\n    el: '#app',\n    components: { role: _Role2.default }\n});\n\n//# sourceURL=webpack:///./resources/assets/js/admin.js?");

/***/ }),

/***/ "./resources/assets/js/components/admin/Role.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/admin/Role.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Role_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Role.vue */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/Role.vue\");\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Role_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Role_vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Role_vue__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Role_vue__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3499c21a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Role_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-3499c21a\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Role.vue */ \"./node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-3499c21a\\\",\\\"hasScoped\\\":false,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/Role.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"./node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !../../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!vue-style-loader!css-loader!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Role.vue */ \"./node_modules/extract-text-webpack-plugin/dist/loader.js?{\\\"omit\\\":1,\\\"remove\\\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"scoped\\\":false,\\\"sourceMap\\\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Role.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Role_vue__WEBPACK_IMPORTED_MODULE_0___default.a,\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3499c21a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Role_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3499c21a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Role_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"resources\\\\assets\\\\js\\\\components\\\\admin\\\\Role.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///./resources/assets/js/components/admin/Role.vue?");

/***/ }),

/***/ "./resources/assets/sass/admin.scss":
/*!******************************************!*\
  !*** ./resources/assets/sass/admin.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./resources/assets/sass/admin.scss?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ }),

/***/ "metismenu":
/*!***********************************!*\
  !*** external "jQuery.MetisMenu" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery.MetisMenu;\n\n//# sourceURL=webpack:///external_%22jQuery.MetisMenu%22?");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Vue;\n\n//# sourceURL=webpack:///external_%22Vue%22?");

/***/ })

/******/ });