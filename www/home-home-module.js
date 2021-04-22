(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "/m1w":
/*!*************************************************************************!*\
  !*** ./src/app/components/work-experience/work-experience.component.ts ***!
  \*************************************************************************/
/*! exports provided: WorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return WorkExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_work_experience_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./work-experience.component.html */ "pufN");
/* harmony import */ var _work_experience_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-experience.component.scss */ "sxqg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _work_experience_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-experience-data.json */ "eYi7");
var _work_experience_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./work-experience-data.json */ "eYi7", 1);





let WorkExperienceComponent = class WorkExperienceComponent {
    constructor() {
        this.works = _work_experience_data_json__WEBPACK_IMPORTED_MODULE_4__["workplaces"];
    }
    ngOnInit() { }
};
WorkExperienceComponent.ctorParameters = () => [];
WorkExperienceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-work-experience',
        template: _raw_loader_work_experience_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_work_experience_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WorkExperienceComponent);



/***/ }),

/***/ "3tpA":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessageComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponentModule", function() { return MessageComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.component */ "eUAL");







let MessageComponentModule = class MessageComponentModule {
};
MessageComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        declarations: [_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]],
        exports: [_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]]
    })
], MessageComponentModule);



/***/ }),

/***/ "7a0G":
/*!********************************************************!*\
  !*** ./src/app/components/about-me/about-me.module.ts ***!
  \********************************************************/
/*! exports provided: AboutMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeModule", function() { return AboutMeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-me.component */ "h3vU");






let AboutMeModule = class AboutMeModule {
};
AboutMeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"]],
        exports: [_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"]]
    })
], AboutMeModule);



/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "BcNV":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-me/about-me.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\n  <ion-row>\n    <ion-col size-md=\"8\" offset-sm=\"2\">\n      <ion-card>\n      <ion-card-header class=\"ion-text-center\">\n        <ion-card-subtitle>\n          <ion-img [src]=\"avatarRoute\"></ion-img>\n        </ion-card-subtitle>\n        <ion-card-title>    <strong>\n          Hello there!</strong></ion-card-title>\n        <ion-card-subtitle><strong>I'm Marcos Peña Pollastri, and welcome to my personal website!</strong></ion-card-subtitle>\n\n      </ion-card-header>\n      <ion-card-content class=\"ion-text-left\">\n        <hr>\n        In ❤️ with Node.js development. <br>\n        I believe that the life limitations are only imposed by oneself, and surpassing them has become my personal objective.\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "EagB":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social-media/social-media.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\n  <ion-row>\n    <ion-col size-md=\"8\" offset-sm=\"2\">\n      <ion-card>\n      <ion-card-header class=\"ion-text-center\">\n        <ion-card-title>    <strong>\n          Let's get in touch!</strong></ion-card-title>\n\n      </ion-card-header>\n      <ion-card-content class=\"ion-text-left\">\n        <ion-list>\n          <ion-item *ngFor=\"let site of sites\">\n            <ion-avatar slot=\"start\">\n              <ion-icon [name]=\"site.avatar\" color=\"medium\"></ion-icon>            </ion-avatar>\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label class=\"ion-text-wrap\" > <strong> {{site.name}} </strong></ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label class=\"ion-text-wrap\">\n                    <p><a [href]=\"site.url\">{{site.description}}</a> </p>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n");

/***/ }),

/***/ "GAOm":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item *ngIf=\"message\" [routerLink]=\"'/message/' + message.id\" [detail]=\"false\">\n  <div slot=\"start\" [class]=\"!message.read ? 'dot dot-unread' : 'dot'\"></div>\n  <ion-label class=\"ion-text-wrap\">\n    <h2>\n      {{ message.fromName }}\n      <span class=\"date\">\n        <ion-note>{{ message.date }}</ion-note>\n        <ion-icon name=\"chevron-forward\" size=\"small\" *ngIf=\"isIos()\"></ion-icon>\n      </span>\n    </h2>\n    <h3>{{ message.subject }}</h3>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </p>\n  </ion-label>\n  </ion-item>");

/***/ }),

/***/ "NahZ":
/*!*************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\n  border: 1px solid;\n  height: 0;\n}\n\nion-img {\n  height: 25vh;\n  border-radius: 16px !important;\n  overflow: hidden impo !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFBbUIsU0FBQTtBQUVyQjs7QUFDQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUNDLGdDQUFBO0FBRUgiLCJmaWxlIjoiYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJocntcbiAgYm9yZGVyOiAxcHggc29saWQ7IGhlaWdodDogMFxufVxuXG5pb24taW1nIHtcbiAgaGVpZ2h0OiAyNXZoO1xuICBib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICBvdmVyZmxvdzogaGlkZGVuIGltcG8gIWltcG9ydGFudDtcblxufVxuIl19 */");

/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" >\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <strong>Code from La Rioja <ion-icon name=\"heart\"></ion-icon></strong>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\" [options]=\"slideOpts\">\n    <ion-slide>\n      <ion-img src=\"https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399__340.png\"></ion-img>\n    </ion-slide>\n    <ion-slide>\n      <h1>Awesome Slide 2</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>Awesome Slide 3</h1>\n    </ion-slide>\n  </ion-slides> -->\n\n  <app-about-me></app-about-me>\n  <app-work-experience></app-work-experience>\n  <app-social-media></app-social-media>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">\n        Experience\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list>\n    <app-message *ngFor=\"let message of getMessages()\" [message]=\"message\"></app-message>\n  </ion-list> -->\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _message_message_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message/message.module */ "3tpA");
/* harmony import */ var _components_about_me_about_me_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/about-me/about-me.module */ "7a0G");
/* harmony import */ var _components_work_experience_work_experience_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/work-experience/work-experience.module */ "hUMh");
/* harmony import */ var _components_social_media_social_media_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/social-media/social-media.module */ "up43");











let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _message_message_module__WEBPACK_IMPORTED_MODULE_7__["MessageComponentModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _components_about_me_about_me_module__WEBPACK_IMPORTED_MODULE_8__["AboutMeModule"],
            _components_work_experience_work_experience_module__WEBPACK_IMPORTED_MODULE_9__["WorkExperienceModule"],
            _components_social_media_social_media_module__WEBPACK_IMPORTED_MODULE_10__["SocialMediaModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "dV/K":
/*!************************************************!*\
  !*** ./src/app/message/message.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\nion-label {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-item h2 {\n  font-weight: 600;\n  margin: 0;\n}\n\nion-item p {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 95%;\n}\n\nion-item .date {\n  float: right;\n  align-items: center;\n  display: flex;\n}\n\nion-item ion-icon {\n  color: #c9c9ca;\n}\n\nion-item ion-note {\n  font-size: 15px;\n  margin-right: 8px;\n  font-weight: normal;\n}\n\nion-item ion-note.md {\n  margin-right: 14px;\n}\n\n.dot {\n  display: block;\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  align-self: start;\n  margin: 16px 10px 16px 16px;\n}\n\n.dot-unread {\n  background: var(--ion-color-primary);\n}\n\nion-footer ion-title {\n  font-size: 11px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24taXRlbSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWl0ZW0gcCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogOTUlO1xufVxuXG5pb24taXRlbSAuZGF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogI2M5YzljYTtcbn1cblxuaW9uLWl0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pb24taXRlbSBpb24tbm90ZS5tZCB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cblxuLmRvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBtYXJnaW46IDE2cHggMTBweCAxNnB4IDE2cHg7XG59XG5cbi5kb3QtdW5yZWFkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tZm9vdGVyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0iXX0= */");

/***/ }),

/***/ "eUAL":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message.component.html */ "GAOm");
/* harmony import */ var _message_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.component.scss */ "dV/K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MessageComponent = class MessageComponent {
    constructor() { }
    ngOnInit() { }
    isIos() {
        const win = window;
        return win && win.Ionic && win.Ionic.mode === 'ios';
    }
};
MessageComponent.ctorParameters = () => [];
MessageComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-message',
        template: _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessageComponent);



/***/ }),

/***/ "eYi7":
/*!**********************************************************************!*\
  !*** ./src/app/components/work-experience/work-experience-data.json ***!
  \**********************************************************************/
/*! exports provided: workplaces, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"workplaces\":[{\"name\":\"Node.js Developer\",\"place\":\"IncluIT\",\"country\":\"Argentina\",\"dates\":\"Nov 2020 - Actualidad\",\"description\":\"I work developing Node.js microservices solutions for one of the biggest financial companies of Argentina, Naranja\",\"avatar\":\"assets/img/workplaces/incluit.jpeg\"},{\"name\":\"Fullstack Web Developer\",\"place\":\"Ministerio de Vivienda, Tierras y Hábitat Social de la Provincia de La Rioja\",\"country\":\"Argentina\",\"dates\":\"May 2019 - Mar 2021\",\"description\":\"Part of the Systems Development Division. Developed projects in Node.js and Ionic Framework.\",\"avatar\":\"assets/img/workplaces/vivienda.jpg\"},{\"name\":\"Fullstack Web Developer\",\"place\":\"Appstract\",\"country\":\"Argentina\",\"dates\":\"Jul 2019 - Dec 2021\",\"description\":\"I developed serverless functions with Firebase, API REST in Node.js and front-end applications with Ionic/Angular.\",\"avatar\":\"assets/img/workplaces/appstract.png\"},{\"name\":\"Programming Teacher\",\"place\":\"UNLaR\",\"country\":\"Argentina\",\"dates\":\"Sept 2018 - May 2019\",\"description\":\"I teached programming basics in Java as part of the Plan 111Mil program, in the Universidad Nacional de La Rioja (National University of La Rioja)\",\"avatar\":\"assets/img/workplaces/unlar.jpeg\"}]}");

/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "fAVW":
/*!****************************************************************!*\
  !*** ./src/app/components/social-media/social-media-data.json ***!
  \****************************************************************/
/*! exports provided: social-media, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"social-media\":[{\"name\":\"LinkedIn\",\"description\":\"in/mppollastri\",\"avatar\":\"logo-linkedin\",\"url\":\"https://www.linkedin.com/in/mppollastri/\"},{\"name\":\"GitHub\",\"description\":\"/marcosppollastri\",\"avatar\":\"logo-github\",\"url\":\"https://github.com/marcosppollastri\"}]}");

/***/ }),

/***/ "h3vU":
/*!***********************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_me_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-me.component.html */ "BcNV");
/* harmony import */ var _about_me_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me.component.scss */ "NahZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutMeComponent = class AboutMeComponent {
    constructor() {
        this.avatarRoute = 'assets/img/avatar.jpeg';
    }
    ngOnInit() { }
};
AboutMeComponent.ctorParameters = () => [];
AboutMeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-me',
        template: _raw_loader_about_me_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_me_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutMeComponent);



/***/ }),

/***/ "hUMh":
/*!**********************************************************************!*\
  !*** ./src/app/components/work-experience/work-experience.module.ts ***!
  \**********************************************************************/
/*! exports provided: WorkExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceModule", function() { return WorkExperienceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _work_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-experience.component */ "/m1w");






let WorkExperienceModule = class WorkExperienceModule {
};
WorkExperienceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_work_experience_component__WEBPACK_IMPORTED_MODULE_5__["WorkExperienceComponent"]],
        exports: [_work_experience_component__WEBPACK_IMPORTED_MODULE_5__["WorkExperienceComponent"]]
    })
], WorkExperienceModule);



/***/ }),

/***/ "okmb":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-media/social-media.component.ts ***!
  \*******************************************************************/
/*! exports provided: SocialMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function() { return SocialMediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_social_media_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./social-media.component.html */ "EagB");
/* harmony import */ var _social_media_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-media.component.scss */ "zLrC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _social_media_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-media-data.json */ "fAVW");
var _social_media_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./social-media-data.json */ "fAVW", 1);





let SocialMediaComponent = class SocialMediaComponent {
    constructor() {
        this.sites = _social_media_data_json__WEBPACK_IMPORTED_MODULE_4__["social-media"];
    }
    ngOnInit() { }
};
SocialMediaComponent.ctorParameters = () => [];
SocialMediaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-social-media',
        template: _raw_loader_social_media_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_social_media_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SocialMediaComponent);



/***/ }),

/***/ "pufN":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-experience/work-experience.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\n  <ion-row>\n    <ion-col size-md=\"8\" offset-sm=\"2\">\n      <ion-card>\n      <ion-card-header class=\"ion-text-center\">\n        <ion-card-title>    <strong>\n          Work Experience</strong></ion-card-title>\n\n      </ion-card-header>\n      <ion-card-content class=\"ion-text-left\">\n        <ion-list>\n          <ion-item *ngFor=\"let work of works\">\n            <ion-avatar slot=\"start\">\n              <img [src]=\"work.avatar\" />\n            </ion-avatar>\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label class=\"ion-text-wrap\"> <strong> {{work.name}} </strong></ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label class=\"ion-text-wrap\">\n                    <p>{{work.place}}</p>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <!-- <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text color=\"medium\">\n                    {{work.description}}\n                  </ion-text>\n                </ion-col>\n              </ion-row> -->\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "sxqg":
/*!***************************************************************************!*\
  !*** ./src/app/components/work-experience/work-experience.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "up43":
/*!****************************************************************!*\
  !*** ./src/app/components/social-media/social-media.module.ts ***!
  \****************************************************************/
/*! exports provided: SocialMediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaModule", function() { return SocialMediaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _social_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-media.component */ "okmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let SocialMediaModule = class SocialMediaModule {
};
SocialMediaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
        ],
        declarations: [_social_media_component__WEBPACK_IMPORTED_MODULE_3__["SocialMediaComponent"]],
        exports: [_social_media_component__WEBPACK_IMPORTED_MODULE_3__["SocialMediaComponent"]]
    })
], SocialMediaModule);



/***/ }),

/***/ "zLrC":
/*!*********************************************************************!*\
  !*** ./src/app/components/social-media/social-media.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzb2NpYWwtbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");





let HomePage = class HomePage {
    constructor(data) {
        this.data = data;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    refresh(ev) {
        setTimeout(() => {
            ev.detail.complete();
        }, 3000);
    }
    getMessages() {
        return this.data.getMessages();
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map