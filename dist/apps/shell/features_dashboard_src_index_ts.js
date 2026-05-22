(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([["features_dashboard_src_index_ts"],{

/***/ 1777
/*!*****************************************!*\
  !*** ./features/dashboard/src/index.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dashboard: () => (/* reexport safe */ _lib_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_0__.Dashboard),
/* harmony export */   dashboardRoutes: () => (/* binding */ dashboardRoutes)
/* harmony export */ });
/* harmony import */ var _lib_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dashboard/dashboard */ 4722);


const dashboardRoutes = [{
  path: '',
  component: _lib_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_0__.Dashboard
}];

/***/ },

/***/ 4722
/*!***********************************************************!*\
  !*** ./features/dashboard/src/lib/dashboard/dashboard.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dashboard: () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1270);

const _forTrack0 = ($index, $item) => $item.label;
function Dashboard_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "div", 12)(1, "div", 25)(2, "div", 31)(3, "div", 32)(4, "div")(5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElement"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()()()()();
  }
  if (rf & 2) {
    const summary_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](summary_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](summary_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinterpolate2"]("rounded-circle bg-", summary_r1.tone, " bg-opacity-10 text-", summary_r1.tone, " p-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](summary_r1.icon);
  }
}
class Dashboard {
  constructor() {
    this.summaries = [{
      label: 'Active customers',
      value: '1,284',
      icon: 'bi bi-people',
      tone: 'primary'
    }, {
      label: 'Open invoices',
      value: '342',
      icon: 'bi bi-receipt',
      tone: 'success'
    }, {
      label: 'Reports generated',
      value: '89',
      icon: 'bi bi-bar-chart',
      tone: 'warning'
    }, {
      label: 'SLA health',
      value: '99.9%',
      icon: 'bi bi-shield-check',
      tone: 'info'
    }];
  }
  static {
    this.ɵfac = function Dashboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Dashboard)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Dashboard,
      selectors: [["lib-dashboard"]],
      decls: 80,
      vars: 0,
      consts: [[1, "container-fluid", "px-0"], [1, "card", "border-0", "shadow-sm", "rounded-4", "mb-4"], [1, "card-body", "p-4"], [1, "row", "align-items-center", "g-3"], [1, "col-12", "col-lg"], [1, "badge", "text-bg-primary", "rounded-pill", "mb-2"], [1, "h3", "fw-bold", "mb-1"], [1, "text-body-secondary", "mb-0"], [1, "col-12", "col-lg-auto"], [1, "btn", "btn-primary", "w-100", "w-lg-auto"], [1, "bi", "bi-lightning-charge", "me-2"], [1, "row", "g-3", "mb-4"], [1, "col-12", "col-md-6", "col-xl-3"], [1, "row", "g-4"], [1, "col-12", "col-xl-8"], [1, "card", "border-0", "shadow-sm", "rounded-4"], [1, "card-header", "bg-body", "border-0", "pt-4", "px-4"], [1, "h5", "mb-0"], [1, "card-body", "p-4", "pt-2"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0"], [1, "badge", "text-bg-success"], [1, "badge", "text-bg-warning"], [1, "badge", "text-bg-info"], [1, "col-12", "col-xl-4"], [1, "card", "border-0", "shadow-sm", "rounded-4", "h-100"], [1, "h5"], [1, "d-grid", "gap-2", "mt-3"], ["href", "/customer", 1, "btn", "btn-outline-primary", "text-start"], ["href", "/billing", 1, "btn", "btn-outline-primary", "text-start"], ["href", "/reports", 1, "btn", "btn-outline-primary", "text-start"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "text-body-secondary", "small"], [1, "display-6", "fw-bold"]],
      template: function Dashboard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](7, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome back, Enterprise Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](9, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Monitor customer, billing, and report operations from one umbrella shell. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](11, "div", 8)(12, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElement"](13, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Quick action ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](16, Dashboard_For_17_Template, 11, 8, "div", 12, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "h2", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Recent activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](24, "div", 18)(25, "div", 19)(26, "table", 20)(27, "thead")(28, "tr")(29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Module");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](33, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](35, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Updated");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](37, "tbody")(38, "tr")(39, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](41, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "New enterprise account onboarded");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](43, "td")(44, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Complete");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](46, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Today");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](48, "tr")(49, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Billing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](51, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Invoice batch reviewed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](53, "td")(54, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](56, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Yesterday");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](58, "tr")(59, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](61, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Monthly sales report exported");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](63, "td")(64, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Shared");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](66, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "May 22");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](68, "div", 24)(69, "div", 25)(70, "div", 2)(71, "h2", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Module shortcuts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](73, "div", 27)(74, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Customer workspace");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](76, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Billing workspace");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](78, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Reports workspace");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.summaries);
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }

}])
//# sourceMappingURL=features_dashboard_src_index_ts.js.map