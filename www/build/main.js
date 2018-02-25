webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		162
	],
	"../pages/home/home.module": [
		161
	],
	"../pages/list/list.module": [
		158
	],
	"../pages/login/login.module": [
		153
	],
	"../pages/tabs/tabs.module": [
		151
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__tabs__["a" /* TabsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__tabs__["a" /* TabsPage */])]
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        // tab0Root: any = 'LoginPage';
        this.tab1Root = 'HomePage';
        this.tab2Root = 'AboutPage';
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Youness/Desktop/cityscan-front/src/pages/tabs/tabs.html"*/'<ion-tabs>\n\n  <!-- <ion-tab [root]="tab3Root" tabTitle="Login" tabIcon="person"></ion-tab> -->\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/Youness/Desktop/cityscan-front/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_session_session_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_session_session_data_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */])],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__providers_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4__core_session_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_5__core_session_session_data_service__["a" /* SessionDataService */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (credentials) {
        var url = '/auth/login';
        return this.http.post(url, credentials)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return Promise.reject(err || 'err'); });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
], LoginService);

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_data_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_session_constants__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionService = (function () {
    function SessionService(sessionDataService) {
        this.sessionDataService = sessionDataService;
    }
    // create session
    SessionService.prototype.create = function (data) {
        this.clear();
        if (data && data.user) {
            // save data of session in localStorage
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__constants_session_constants__["a" /* SessionConstants */].SESSION, JSON.stringify(data.user));
            this.data = data;
            // create instance of SessionData if given data are valid
            this.sessionDataService.create(data);
            if (data.token) {
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__constants_session_constants__["a" /* SessionConstants */].TOKEN, JSON.stringify(data.token));
                return true;
            }
        }
        return false;
    };
    // clear timeout and removed session data
    SessionService.prototype.clear = function () {
        this.sessionDataService.clear();
    };
    SessionService.prototype.load = function () {
        if (localStorage) {
            if (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__constants_session_constants__["a" /* SessionConstants */].SESSION)) {
                this.create(JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__constants_session_constants__["a" /* SessionConstants */].SESSION)));
            }
        }
    };
    SessionService.prototype.isAuthenticated = function () {
        return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__constants_session_constants__["a" /* SessionConstants */].SESSION) && localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__constants_session_constants__["a" /* SessionConstants */].TOKEN);
    };
    return SessionService;
}());
SessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__session_data_service__["a" /* SessionDataService */]])
], SessionService);

//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionConstants; });
var SessionConstants = {
    SESSION: 'session',
    TOKEN: 'token'
};
//# sourceMappingURL=session.constants.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_select_ng_select__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_cityscan_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListPageModule = (function () {
    function ListPageModule() {
    }
    return ListPageModule;
}());
ListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__list__["a" /* ListPage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__list__["a" /* ListPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ng_select_ng_select__["a" /* NgSelectModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__providers_cityscan_service__["a" /* CityScanService */]
        ]
    })
], ListPageModule);

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cityscan_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(navCtrl, cityScanService, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.cityScanService = cityScanService;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: "Veuillez patienter un instant s'il vous plait...",
            spinner: 'dots'
        });
        this.loaderPdf = this.loadingCtrl.create({
            content: "Veuillez patienter un instant s'il vous plait, g\u00E9n\u00E9ration du rapport en cours...",
            spinner: 'dots'
        });
        this.loader.present().then(function () {
            _this.cityScanService
                .analyze(_this.navParams.get('params'))
                .then(function (response) {
                _this.loader.dismiss();
                _this.showInfos = true;
                _this.result = response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
            });
        });
    };
    ListPage.prototype.pdf = function () {
        var _this = this;
        this.loaderPdf.present().then(function () {
            _this.cityScanService
                .pdf()
                .then(function (response) {
                _this.loaderPdf.dismiss();
            })
                .catch(function (err) {
                _this.loaderPdf.dismiss();
            });
        });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/Youness/Desktop/cityscan-front/src/pages/list/list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>List</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n        <ion-fab top right>\n            <button ion-fab>\n                <ion-icon name="document"></ion-icon>\n            </button>\n            <ion-fab-list side="left">\n                <button ion-fab (click)="pdf()">\n                    <ion-icon name="ios-pie"></ion-icon>\n                </button>\n            </ion-fab-list>\n        </ion-fab>\n    </ion-row>\n    <ion-row *ngIf="showInfos">\n        <ion-col>\n            <ion-card>\n                <ion-card-header class="bold">\n                    Nombres de bien trouvés : {{ result?.nbResults }}\n                    <br>\n                    <br>\n                    Prix moyen du m<sup>2</sup> : {{ result?.avgPricePerSquareMeter }} €/m<sup>2</sup>\n                </ion-card-header>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col *ngFor="let product of result?.allData" col-4>\n            <ion-card>\n                <div class="corner-ribbon left">{{ product.pricePerSquareMeter }} €/m<sup>2</sup></div>\n                <img [src]="product.image" class="realestate-image">\n\n                <ion-row>\n                    <ion-col>\n                        <button ion-button clear small text-lowercase>\n                            <i class="ft-house-size"></i>\n                            <div>{{ product.size }} m<sup>2</sup></div>\n                        </button>\n                    </ion-col>\n                    <ion-col>\n                        <button ion-button clear small text-lowercase>\n                            <i class="ft-plans"></i>\n                            <div>{{ product.nbRooms }}</div>\n                        </button>\n                    </ion-col>\n                    <ion-col>\n                        <button ion-button clear small text-lowercase>\n                            <i class="ft-bed"></i>\n                            <div>{{ product.nbBedrooms }}</div>\n                        </button>\n                    </ion-col>\n                    <ion-col>\n                        <button ion-button clear small text-lowercase>\n                            <i class="ft-coins"></i>\n                            <div>{{ product.price }} €</div>\n                        </button>\n                    </ion-col>\n                </ion-row>\n\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/Youness/Desktop/cityscan-front/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_cityscan_service__["a" /* CityScanService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_select_ng_select__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_cityscan_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__ng_select_ng_select__["a" /* NgSelectModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__providers_cityscan_service__["a" /* CityScanService */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
        ]
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export httpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_HttpInterceptor__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_session_session_data_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Pages









function httpFactory(xhrBackend, requestOptions, sessionDataService) {
    return new __WEBPACK_IMPORTED_MODULE_13__config_HttpInterceptor__["a" /* HttpInterceptor */](xhrBackend, requestOptions, sessionDataService);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* App */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* App */], {
                tabsHideOnSubPages: true,
                tabsLayout: 'icon-left'
            }, {
                links: [
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__["HomePageModule"],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_module__["TabsPageModule"],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about_module__["AboutPageModule"],
            __WEBPACK_IMPORTED_MODULE_10__pages_list_list_module__["ListPageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* App */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */],
                useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */]
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */],
                useFactory: httpFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_14__core_session_session_data_service__["a" /* SessionDataService */]]
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_session_session_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, loginService, sessionService, fb, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.sessionService = sessionService;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.backgrounds = [
            'assets/img/bg1.jpg',
            'assets/img/bg2.jpg',
            'assets/img/bg3.jpg',
            'assets/img/bg4.jpg'
        ];
        this.emailCtrl = fb.control('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]);
        this.passwordCtrl = fb.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.userForm = fb.group({
            email: this.emailCtrl,
            password: this.passwordCtrl
        });
        this.loader = this.loadingCtrl.create({
            content: "Veuillez patienter un instant s'il vous plait...",
            spinner: 'dots'
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        if (this.sessionService.isAuthenticated()) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.userForm.valid) {
            this.loader.present();
            var email = this.emailCtrl.value;
            var password = this.passwordCtrl.value;
            this.loginService.login({ email: email, password: password })
                .then(function (response) {
                _this.loginSucceed(response);
            }, function (error) {
                _this.showError(error);
            });
        }
    };
    LoginPage.prototype.loginSucceed = function (response) {
        if (this.sessionService.create(response)) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
        }
        else {
            this.showError();
        }
        this.loader.dismiss();
    };
    LoginPage.prototype.showError = function (error) {
        // console.log('Oops!', 'Login ou mot de passe incorrect', error);
    };
    LoginPage.prototype.openResetPassword = function () {
        console.log('Open Reset Password');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Youness/Desktop/cityscan-front/src/pages/login/login.html"*/'<ion-content class="cloud-layer">\n    <ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n        <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds"\n                   [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n        </ion-slide>\n    </ion-slides>\n    <div class="login-container">\n        <img class="logo" src="assets/img/logo.png"/>\n        <form (ngSubmit)="login()" [formGroup]="userForm">\n            <ion-item>\n                <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="userForm.get(\'email\').dirty && userForm.get(\'email\').hasError(\'required\')">\n                <p ion-text color="danger">Email is required.</p>\n            </ion-item>\n            <ion-item>\n                <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="userForm.get(\'password\').dirty && userForm.get(\'password\').hasError(\'required\')">\n                <p ion-text color="danger">Password is required.</p>\n            </ion-item>\n            <button color="primary" ion-button full round icon-start class="login-btn">\n                <ion-icon name="ios-contact-outline"></ion-icon>\n                LOGIN\n            </button>\n        </form>\n        <p (click)="openResetPassword()"><strong>Forgot your password?</strong></p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Youness/Desktop/cityscan-front/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_4__core_session_session_service__["a" /* SessionService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
var Resource = (function () {
    function Resource(res) {
        this.operations = res ? res.operation : [];
    }
    Resource.prototype.operationAllowed = function (operation) {
        return this.operations.indexOf(operation) !== -1;
    };
    return Resource;
}());

//# sourceMappingURL=Resource.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceConstants; });
var ResourceConstants = {
    USER_ROLES_CASHIER: 'role.type.cashier',
    BTN_GENERATE_AUTHORIZATION: 'requests.details.btn-generate-authorization',
    REQUESTS: 'requests',
    LICENCES: 'licences',
    VEHICLES: 'vehicles',
    ESAFE_VIEW_EDIT: 'esafe.view-edit'
};
//# sourceMappingURL=resource.constants.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationConstants; });
var OrganizationConstants = {
    CLEARINGAGENT: 'CLEARINGAGENT',
    ECONOMICOPERATOR: 'ECONOMICOPERATOR',
    MINISTRY: 'MINISTRY'
};
//# sourceMappingURL=organization.constants.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cityscan_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, cityScanService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.cityScanService = cityScanService;
        this.places = [];
        this.productTypes = [
            {
                id: 1,
                label: 'Appartement'
            },
            {
                id: 2,
                label: 'Maison / Villa'
            },
            {
                id: 3,
                label: 'Parking'
            },
            {
                id: 4,
                label: 'Terrain'
            }
        ];
        // event emmiter is just RxJs Subject
        this.typeahead = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.typeahead
            .filter(function (query) { return query.length > 1; })
            .distinctUntilChanged()
            .debounceTime(200)
            .switchMap(function (term) { return _this.cityScanService.getPlaces(term); })
            .subscribe(function (items) {
            _this.places = items;
        }, function (err) {
            _this.places = [];
        });
    }
    HomePage.prototype.search = function () {
        this.params.productTypeId = this.productTypeId;
        var params = this.params;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */], { params: params });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Youness/Desktop/cityscan-front/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n        <ion-col>\n            <ion-label>Lieu</ion-label>\n            <ng-select [items]="places"\n                       bindLabel="Display"\n                       notFoundText="Aucun résultat trouvé"\n                       placeholder="Veuillez choisir un lieu"\n                       loadingText="Chargement ..."\n                       bindValue="Params"\n                       [(ngModel)]="params"\n                       [typeahead]="typeahead"\n                       [clearable]="false">\n            </ng-select>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-label>Type du bien</ion-label>\n            <ng-select [items]="productTypes"\n                       bindLabel="label"\n                       notFoundText="Aucun résultat trouvé"\n                       placeholder="Veuillez choisir un type de bien"\n                       loadingText="Chargement ..."\n                       bindValue="id"\n                       [(ngModel)]="productTypeId"\n                       [clearable]="false">\n            </ng-select>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button ion-button float-right (click)="search()">Rechercher</button>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/Youness/Desktop/cityscan-front/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_cityscan_service__["a" /* CityScanService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/Youness/Desktop/cityscan-front/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      À propos de nous\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Youness Houdass</ion-list-header>\n    <ion-item>\n      <ion-icon name="person" item-left></ion-icon>\n      Développeur JavaScript de la societé Hiit Consulting\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Youness/Desktop/cityscan-front/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var App = (function () {
    function App(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return App;
}());
App = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Youness/Desktop/cityscan-front/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Youness/Desktop/cityscan-front/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], App);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_app_config__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_session_session_data_service__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpInterceptor = (function (_super) {
    __extends(HttpInterceptor, _super);
    function HttpInterceptor(backend, defaultOptions, sessionDataService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.sessionDataService = sessionDataService;
        return _this;
    }
    HttpInterceptor.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    HttpInterceptor.prototype.get = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    HttpInterceptor.prototype.post = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    HttpInterceptor.prototype.put = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    HttpInterceptor.prototype.delete = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    HttpInterceptor.prototype.updateUrl = function (req) {
        return __WEBPACK_IMPORTED_MODULE_2__constants_app_config__["a" /* AppConfig */].API_ENDPOINT + req;
    };
    HttpInterceptor.prototype.getRequestOptionArgs = function (options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        }
        if (!options.headers) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', this.sessionDataService.getToken());
        return options;
    };
    return HttpInterceptor;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));
HttpInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */],
        __WEBPACK_IMPORTED_MODULE_3__core_session_session_data_service__["a" /* SessionDataService */]])
], HttpInterceptor);

//# sourceMappingURL=HttpInterceptor.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
    }
    return AppConfig;
}());

AppConfig.API_ENDPOINT = 'https://cityscan.herokuapp.com/api';
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resource__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_resource_constants__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_organization_constants__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_session_constants__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SessionDataService = (function () {
    function SessionDataService() {
    }
    SessionDataService.prototype.create = function (data) {
        if (data) {
            this.data = data;
            this.permissions = data.user.permissions;
            // this.organization = data.user.permissionModel.organization;
            this.role = data.user.role;
        }
    };
    SessionDataService.prototype.clear = function () {
        if (localStorage) {
            this.data = null;
            this.permissions = null;
            this.organization = null;
            this.role = null;
            localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_4__constants_session_constants__["a" /* SessionConstants */].SESSION);
            localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_4__constants_session_constants__["a" /* SessionConstants */].TOKEN);
        }
    };
    SessionDataService.prototype.operationAllowed = function (operation) {
        return this.operations.indexOf(operation) !== -1;
    };
    SessionDataService.prototype.getResource = function (resource) {
        return this.permissions.resources[resource] ?
            new __WEBPACK_IMPORTED_MODULE_1__Resource__["a" /* Resource */](this.permissions.resources[resource]) : null;
    };
    // organization
    SessionDataService.prototype.hasOrganization = function (organization) {
        return (this.organization === organization);
    };
    SessionDataService.prototype.hasAnyOrganization = function (organizations) {
        for (var i = 0; i < organizations.length; i++) {
            if (this.hasOrganization(organizations[i])) {
                return true;
            }
        }
        return false;
    };
    SessionDataService.prototype.hasRole = function (role) {
        return this.permissions.role.label === role;
    };
    SessionDataService.prototype.hasAnyRole = function (roles) {
        for (var i = 0; i < roles.length; i++) {
            if (this.hasRole(roles[i])) {
                return true;
            }
        }
        return false;
    };
    SessionDataService.prototype.getRoleRank = function () {
        return this.permissions.role.rank;
    };
    SessionDataService.prototype.hasResource = function (resource) {
        return this.permissions.resources[resource] !== undefined;
    };
    SessionDataService.prototype.hasAnyResource = function (resources) {
        for (var i = 0; i < resources.length; i++) {
            if (this.hasResource(resources[i])) {
                return true;
            }
        }
        return false;
    };
    SessionDataService.prototype.getName = function () {
        return this.data.user.firstname + ' ' + this.data.user.lastname;
    };
    SessionDataService.prototype.getRoleLabel = function () {
        return this.role.label;
    };
    SessionDataService.prototype.getUserDetails = function () {
        return this.data.user.details;
    };
    SessionDataService.prototype.isClearingAgent = function () {
        return this.hasOrganization(__WEBPACK_IMPORTED_MODULE_3__constants_organization_constants__["a" /* OrganizationConstants */].CLEARINGAGENT);
    };
    SessionDataService.prototype.isEconomicOperator = function () {
        return this.hasOrganization(__WEBPACK_IMPORTED_MODULE_3__constants_organization_constants__["a" /* OrganizationConstants */].ECONOMICOPERATOR);
    };
    SessionDataService.prototype.isMinistry = function () {
        return this.hasOrganization(__WEBPACK_IMPORTED_MODULE_3__constants_organization_constants__["a" /* OrganizationConstants */].MINISTRY);
    };
    SessionDataService.prototype.canGenerateAuthorizations = function () {
        return this.hasResource(__WEBPACK_IMPORTED_MODULE_2__constants_resource_constants__["a" /* ResourceConstants */].BTN_GENERATE_AUTHORIZATION);
    };
    SessionDataService.prototype.canViewESafe = function () {
        return this.getResource(__WEBPACK_IMPORTED_MODULE_2__constants_resource_constants__["a" /* ResourceConstants */].ESAFE_VIEW_EDIT) &&
            this.getResource(__WEBPACK_IMPORTED_MODULE_2__constants_resource_constants__["a" /* ResourceConstants */].ESAFE_VIEW_EDIT).operationAllowed('READ');
    };
    SessionDataService.prototype.getId = function () {
        var session = JSON.parse(localStorage.getItem('session'));
        return session._id;
    };
    SessionDataService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('token'));
    };
    return SessionDataService;
}());
SessionDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SessionDataService);

//# sourceMappingURL=session-data.service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityScanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CityScanService = (function () {
    function CityScanService(http) {
        this.http = http;
    }
    CityScanService.prototype.getPlaces = function (city) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        search.append('city', city);
        return this.http.get("/cityscan/places", { search: search })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return Promise.reject(err || 'err'); });
    };
    CityScanService.prototype.analyze = function (params) {
        // let search = new URLSearchParams();
        // let key = Object.keys(params)[0];
        // search.append(key, data[key]);
        return this.http.post("/cityscan/analyze", params)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return Promise.reject(err || 'err'); });
    };
    CityScanService.prototype.pdf = function () {
        return this.http.get("/cityscan/pdf", { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob })
            .toPromise()
            .then(function (response) {
            var blob = new Blob([response.blob()], { type: 'application/pdf' });
            return Object(__WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"])(blob, 'cityscan.pdf');
        })
            .catch(function (err) { return Promise.reject(err || 'err'); });
    };
    return CityScanService;
}());
CityScanService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
], CityScanService);

//# sourceMappingURL=cityscan.service.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map