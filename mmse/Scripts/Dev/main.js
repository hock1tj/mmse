(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/angular-material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/playlist/playlist.component */ "./src/app/components/playlist/playlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'playlist', component: _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div header class=\"header\">\r\n  <mat-toolbar color=\"primary\">\r\n    <img mat-card-avatar src=\"https://beta.kittybattles.io/assets/SpaceIcon.svg\" alt=\"image\">\r\n    <div class=\"padding-left-10\">\r\n      <span class=\"padding-right-10\">Music Meaning Search Engine</span>\r\n    </div>\r\n    <span nav-top>\r\n      <a mat-button [routerLink]=\"['/home']\">Home</a>\r\n      <a mat-button [routerLink]=\"['/playlist']\">Playlist Search</a>\r\n      <a mat-button [routerLink]=\"['/about']\">About The Team</a>\r\n    </span>\r\n  </mat-toolbar>\r\n</div>\r\n<div app-content class=\"appContent\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<div footer>\r\n  <mat-toolbar color=\"primary\"></mat-toolbar>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mmse-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-material/material.module */ "./src/app/angular-material/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/playlist/playlist.component */ "./src/app/components/playlist/playlist.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Base Modules





//Third Party Modules

//Local Modules


//Components




//Services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])(({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_11__["PlaylistComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            providers: [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["MediaMatcher"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }))
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"aboutPage\">\r\n  <div>\r\n    <mat-card-header class=\"mmseTitle\">\r\n      <mat-card-title>\r\n        <h1>Brandi</h1>\r\n      </mat-card-title>\r\n      <mat-card-subtitle><h2>Grad info</h2></mat-card-subtitle>\r\n      <img mat-card-avatar class=\"aboutImg\" src=\"https://beta.kittybattles.io/assets/ArcticIcon.svg\" alt=\"image\">\r\n    </mat-card-header>\r\n  </div>\r\n  <mat-card-content>\r\n    <p>Ipsum text provided by <a href=\"https://pirateipsum.me/\" target=\"_blank\"> Pirate Ipsum</a></p>\r\n    <p>\r\n      Broadside tack Letter of Marque clipper execution dock lugger hang the jib loaded to the gunwalls Cat o'nine tails come about jib parrel.\r\n      Trysail yawl rope's end wherry Arr loot spanker draught dead men tell no tales hearties spirits killick. Nipperkin knave reef mutiny killick\r\n      lass careen no prey, no pay chase galleon Admiral of the Black pirate. Gabion jib crack Jennys tea cup American Main piracy scallywag boom rope's\r\n      end ahoy Sea Legs keel fire ship. Clap of thunder gangplank lugger Chain Shot lad carouser swab driver cog splice the main brace fire ship Jack Tar.\r\n      Killick hogshead list pillage Davy Jones' Locker fathom boom coxswain run a shot across the bow skysail black spot mizzenmast.\r\n    </p>\r\n    <!--<mat-card-actions>\r\n      <div fxFlex=\"35%\"></div>\r\n      <button mat-raised-button color=\"accent\" fxFlex=\"30%\">\r\n        CONNECT TO SPOTIFY\r\n      </button>\r\n    </mat-card-actions>-->\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n<mat-card class=\"aboutPage\">\r\n  <div>\r\n    <mat-card-header class=\"mmseTitle\">\r\n      <mat-card-title>\r\n        <h1>Candi</h1>\r\n      </mat-card-title>\r\n      <mat-card-subtitle><h2>Grad info</h2></mat-card-subtitle>\r\n      <img mat-card-avatar class=\"aboutImg\" src=\"https://beta.kittybattles.io/assets/ArcticIcon.svg\" alt=\"image\">\r\n    </mat-card-header>\r\n  </div>\r\n  <mat-card-content>\r\n    <p>Ipsum text provided by <a href=\"https://pirateipsum.me/\" target=\"_blank\"> Pirate Ipsum</a></p>\r\n    <p>\r\n      Broadside tack Letter of Marque clipper execution dock lugger hang the jib loaded to the gunwalls Cat o'nine tails come about jib parrel.\r\n      Trysail yawl rope's end wherry Arr loot spanker draught dead men tell no tales hearties spirits killick. Nipperkin knave reef mutiny killick\r\n      lass careen no prey, no pay chase galleon Admiral of the Black pirate. Gabion jib crack Jennys tea cup American Main piracy scallywag boom rope's\r\n      end ahoy Sea Legs keel fire ship. Clap of thunder gangplank lugger Chain Shot lad carouser swab driver cog splice the main brace fire ship Jack Tar.\r\n      Killick hogshead list pillage Davy Jones' Locker fathom boom coxswain run a shot across the bow skysail black spot mizzenmast.\r\n    </p>\r\n    <!--<mat-card-actions>\r\n      <div fxFlex=\"35%\"></div>\r\n      <button mat-raised-button color=\"accent\" fxFlex=\"30%\">\r\n        CONNECT TO SPOTIFY\r\n      </button>\r\n    </mat-card-actions>-->\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n<mat-card class=\"aboutPage\">\r\n  <div>\r\n    <mat-card-header class=\"mmseTitle\">\r\n      <mat-card-title>\r\n        <h1>Jackie</h1>\r\n      </mat-card-title>\r\n      <mat-card-subtitle><h2>Grad info</h2></mat-card-subtitle>\r\n      <img mat-card-avatar class=\"aboutImg\" src=\"https://beta.kittybattles.io/assets/ArcticIcon.svg\" alt=\"image\">\r\n    </mat-card-header>\r\n  </div>\r\n  <mat-card-content>\r\n    <p>Ipsum text provided by <a href=\"https://pirateipsum.me/\" target=\"_blank\"> Pirate Ipsum</a></p>\r\n    <p>\r\n      Broadside tack Letter of Marque clipper execution dock lugger hang the jib loaded to the gunwalls Cat o'nine tails come about jib parrel.\r\n      Trysail yawl rope's end wherry Arr loot spanker draught dead men tell no tales hearties spirits killick. Nipperkin knave reef mutiny killick\r\n      lass careen no prey, no pay chase galleon Admiral of the Black pirate. Gabion jib crack Jennys tea cup American Main piracy scallywag boom rope's\r\n      end ahoy Sea Legs keel fire ship. Clap of thunder gangplank lugger Chain Shot lad carouser swab driver cog splice the main brace fire ship Jack Tar.\r\n      Killick hogshead list pillage Davy Jones' Locker fathom boom coxswain run a shot across the bow skysail black spot mizzenmast.\r\n    </p>\r\n    <!--<mat-card-actions>\r\n      <div fxFlex=\"35%\"></div>\r\n      <button mat-raised-button color=\"accent\" fxFlex=\"30%\">\r\n        CONNECT TO SPOTIFY\r\n      </button>\r\n    </mat-card-actions>-->\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n<mat-card class=\"aboutPage\">\r\n  <div>\r\n    <mat-card-header class=\"mmseTitle\">\r\n      <mat-card-title>\r\n        <h1>Tyler</h1>\r\n      </mat-card-title>\r\n      <mat-card-subtitle><h2>Grad info</h2></mat-card-subtitle>\r\n      <img mat-card-avatar class=\"aboutImg\" src=\"https://beta.kittybattles.io/assets/ArcticIcon.svg\" alt=\"image\">\r\n    </mat-card-header>\r\n  </div>\r\n  <mat-card-content>\r\n    <p>Ipsum text provided by <a href=\"https://pirateipsum.me/\" target=\"_blank\"> Pirate Ipsum</a></p>\r\n    <p>\r\n      Broadside tack Letter of Marque clipper execution dock lugger hang the jib loaded to the gunwalls Cat o'nine tails come about jib parrel.\r\n      Trysail yawl rope's end wherry Arr loot spanker draught dead men tell no tales hearties spirits killick. Nipperkin knave reef mutiny killick\r\n      lass careen no prey, no pay chase galleon Admiral of the Black pirate. Gabion jib crack Jennys tea cup American Main piracy scallywag boom rope's\r\n      end ahoy Sea Legs keel fire ship. Clap of thunder gangplank lugger Chain Shot lad carouser swab driver cog splice the main brace fire ship Jack Tar.\r\n      Killick hogshead list pillage Davy Jones' Locker fathom boom coxswain run a shot across the bow skysail black spot mizzenmast.\r\n    </p>\r\n    <!--<mat-card-actions>\r\n      <div fxFlex=\"35%\"></div>\r\n      <button mat-raised-button color=\"accent\" fxFlex=\"30%\">\r\n        CONNECT TO SPOTIFY\r\n      </button>\r\n    </mat-card-actions>-->\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mmse-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <mat-card class=\"mainPage\">\r\n    <div>\r\n      <mat-card-header class=\"mmseTitle\">\r\n        <mat-card-title>\r\n        <h1> MUSIC MEANING SEARCH ENGINE</h1>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n    </div>\r\n  <mat-card-content>\r\n    <p>Ipsum text provided by <a href=\"https://pirateipsum.me/\" target=\"_blank\"> Pirate Ipsum</a></p>\r\n    <p>\r\n      Broadside tack Letter of Marque clipper execution dock lugger hang the jib loaded to the gunwalls Cat o'nine tails come about jib parrel.\r\n      Trysail yawl rope's end wherry Arr loot spanker draught dead men tell no tales hearties spirits killick. Nipperkin knave reef mutiny killick\r\n      lass careen no prey, no pay chase galleon Admiral of the Black pirate. Gabion jib crack Jennys tea cup American Main piracy scallywag boom rope's\r\n      end ahoy Sea Legs keel fire ship. Clap of thunder gangplank lugger Chain Shot lad carouser swab driver cog splice the main brace fire ship Jack Tar.\r\n      Killick hogshead list pillage Davy Jones' Locker fathom boom coxswain run a shot across the bow skysail black spot mizzenmast.\r\n    </p><p>\r\n      Handsomely grog reef Corsair gaff Buccaneer capstan log yardarm prow holystone spyglass. Strike colors Jack Tar Admiral of the Black furl driver\r\n      schooner jib Letter of Marque keelhaul hang the jib me holystone. Yard topsail quarter lookout hogshead hang the jib warp Jolly Roger sheet spirits\r\n      lass splice the main brace. Plate Fleet no prey, no pay fore Nelsons folly pirate sheet stern interloper rope's end aye handsomely brigantine. Cackle\r\n      fruit Sail ho bilge rat interloper mizzenmast carouser doubloon spyglass yawl draft dead men tell no tales bucko. Grog heave down yardarm jolly boat\r\n      Brethren of the Coast log jack lookout pillage belaying pin carouser list.\r\n    </p><p>\r\n      Square-rigged Jack Tar execution dock Letter of Marque gangplank quarterdeck belaying pin pirate doubloon clipper case shot yawl. Stern rum Pieces of\r\n      Eight draught Corsair long clothes Brethren of the Coast rigging trysail code of conduct lateen sail rutters. Long clothes rutters loaded to the gunwalls\r\n      salmagundi transom Admiral of the Black cackle fruit Chain Shot code of conduct topsail piracy splice the main brace. Boom interloper marooned pressgang\r\n      mizzen measured fer yer chains carouser hulk reef sails knave long boat mizzenmast. Me walk the plank strike colors league Davy Jones' Locker lugsail\r\n      keelhaul capstan Buccaneer hempen halter Sink me hulk. Spike Plate Fleet ye cutlass port smartly gabion parley me run a shot across the bow chandler bounty.\r\n    </p><p>\r\n      Pirate Round Plate Fleet plunder chase quarterdeck lateen sail poop deck Letter of Marque schooner matey Davy Jones' Locker scuttle. Jack salmagundi lugsail\r\n      Barbary Coast mizzen Sink me coffer bilge water piracy Yellow Jack hulk Corsair. Tack port walk the plank wherry lookout provost warp ho line brig hearties\r\n      lugger. Hogshead deadlights rum Yellow Jack poop deck log six pounders landlubber or just lubber lateen sail pressgang Blimey ballast. Maroon galleon barque\r\n      spanker killick Brethren of the Coast Admiral of the Black driver rigging Jolly Roger six pounders mizzenmast. Aye heave to gangplank Blimey gangway pink\r\n      gibbet Pirate Round splice the main brace yard yardarm schooner.\r\n    </p>\r\n\r\n    <mat-card-actions>\r\n      <div fxFlex=\"35%\"></div>\r\n      <button mat-raised-button color=\"accent\" fxFlex=\"30%\">\r\n        CONNECT TO SPOTIFY\r\n      </button>\r\n    </mat-card-actions>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mmse-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/playlist/playlist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/playlist/playlist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  playlist works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/playlist/playlist.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/playlist/playlist.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/playlist/playlist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/playlist/playlist.component.ts ***!
  \***********************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent() {
    }
    PlaylistComponent.prototype.ngOnInit = function () {
    };
    PlaylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mmse-playlist',
            template: __webpack_require__(/*! ./playlist.component.html */ "./src/app/components/playlist/playlist.component.html"),
            styles: [__webpack_require__(/*! ./playlist.component.scss */ "./src/app/components/playlist/playlist.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Candi\source\repos\mmse\Mmse.Ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map