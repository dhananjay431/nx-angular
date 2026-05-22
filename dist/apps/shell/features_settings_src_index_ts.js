(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([["features_settings_src_index_ts"],{

/***/ 8248
/*!****************************************!*\
  !*** ./features/settings/src/index.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Settings: () => (/* reexport safe */ _lib_settings_settings__WEBPACK_IMPORTED_MODULE_0__.Settings),
/* harmony export */   settingsRoutes: () => (/* binding */ settingsRoutes)
/* harmony export */ });
/* harmony import */ var _lib_settings_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/settings/settings */ 3787);


const settingsRoutes = [{
  path: '',
  component: _lib_settings_settings__WEBPACK_IMPORTED_MODULE_0__.Settings
}];

/***/ },

/***/ 3787
/*!********************************************************!*\
  !*** ./features/settings/src/lib/settings/settings.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Settings: () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1270);

class Settings {
  static {
    this.ɵfac = function Settings_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Settings)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Settings,
      selectors: [["lib-settings"]],
      decls: 6,
      vars: 0,
      consts: [[1, "card", "border-0", "shadow-sm", "rounded-4"], [1, "card-body", "p-4"], [1, "h4", "fw-bold"], [1, "text-body-secondary", "mb-0"]],
      template: function Settings_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Configure customer module access, shell preferences, and platform settings. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }

}])
//# sourceMappingURL=features_settings_src_index_ts.js.map