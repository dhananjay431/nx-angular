(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([["features_profile_src_index_ts"],{

/***/ 1920
/*!***************************************!*\
  !*** ./features/profile/src/index.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Profile: () => (/* reexport safe */ _lib_profile_profile__WEBPACK_IMPORTED_MODULE_0__.Profile),
/* harmony export */   profileRoutes: () => (/* binding */ profileRoutes)
/* harmony export */ });
/* harmony import */ var _lib_profile_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/profile/profile */ 3759);


const profileRoutes = [{
  path: '',
  component: _lib_profile_profile__WEBPACK_IMPORTED_MODULE_0__.Profile
}];

/***/ },

/***/ 3759
/*!*****************************************************!*\
  !*** ./features/profile/src/lib/profile/profile.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Profile: () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1270);

class Profile {
  static {
    this.ɵfac = function Profile_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Profile)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Profile,
      selectors: [["lib-profile"]],
      decls: 6,
      vars: 0,
      consts: [[1, "card", "border-0", "shadow-sm", "rounded-4"], [1, "card-body", "p-4"], [1, "h4", "fw-bold"], [1, "text-body-secondary", "mb-0"]],
      template: function Profile_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Manage enterprise user profile, roles, and preferences. ");
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
//# sourceMappingURL=features_profile_src_index_ts.js.map