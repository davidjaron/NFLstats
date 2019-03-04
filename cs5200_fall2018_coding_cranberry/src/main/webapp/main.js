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

/***/ "./src/app/admin-page/admin-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhZ2UvYWRtaW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 align-content-center\">\n  <h2> Admin Details</h2>\n\n  <h6>Users</h6>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>Id</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Username</th>\n      <th>Password</th>\n      <th>Verified Password</th>\n      <th>City</th>\n      <th>State</th>\n      <th>User Type</th>\n      <th>Action</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td>{{user.id}}</td>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.username}}</td>\n      <td>{{user.password}}</td>\n      <td>{{user.verifyPassword}}</td>\n      <td>{{user.city}}</td>\n      <td>{{user.state}}</td>\n      <td>{{user.userType}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete User</button></td>\n    </tr>\n    </tbody>\n  </table>\n  <br>\n  <br>\n  <hr>\n\n\n  <h6>Create or Update a User</h6>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>User Id </th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Username</th>\n      <th>Password</th>\n      <th>Verified Password</th>\n      <th>City</th>\n      <th>State</th>\n      <th>User Type</th>\n      <th>Create</th>\n      <th>Update</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td><input [(ngModel)]=\"user.id\" class=\"form-control\" placeholder=\"First Name\"/></td>\n      <td><input [(ngModel)]=\"user.firstName\" class=\"form-control\" placeholder=\"First Name\"/></td>\n      <td><input [(ngModel)]=\"user.lastName\" class=\"form-control\" placeholder=\"Last Name\"/></td>\n      <td><input [(ngModel)]=\"user.username\" class=\"form-control\" placeholder=\"Username\"/></td>\n      <td><input [(ngModel)]=\"user.password\" class=\"form-control\" placeholder=\"Password\"/></td>\n      <td><input [(ngModel)]=\"user.verifyPassword\" class=\"form-control\" placeholder=\"Verify Password\"/></td>\n      <td><input [(ngModel)]=\"user.city\" class=\"form-control\" placeholder=\"City\"/></td>\n      <td><input [(ngModel)]=\"user.state\" class=\"form-control\" placeholder=\"State\"/></td>\n      <td><select [(ngModel)]=\"user.userType\" id=\"userType\">\n        <option value=\"Fan\">Fan</option>\n        <option value=\"Player\">Athlete</option>\n        <option value=\"Team\">Team Management</option>\n        <option value=\"Basic-User\">Basic User</option>\n        <option value=\"Admin\">Admin</option>\n      </select></td>\n      <td><button class=\"btn btn-danger\" (click)=\"onSubmit()\"> Create User</button></td>\n      <td><button class=\"btn btn-danger\" (click)=\"updateUser()\"> Update User</button></td>\n    </tr>\n    </tbody>\n  </table>\n  <br>\n  <br>\n  <hr>\n\n  <h6>Monitor Comments</h6>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>Comment</th>\n      <th># of Likes</th>\n      <th>Update</th>\n      <th>Delete</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let comment of comments\">\n      <td>{{comment.content}}</td>\n      <td>{{comment.likes}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteComment(comment)\"> Delete </button></td>\n      <td><button class=\"btn btn-danger\" (click)=\"updateThisComment(comment)\"> Update </button></td>\n    </tr>\n    </tbody>\n  </table>\n  <input [(ngModel)]=\"newCommentContent\" class=\"form-control\" placeholder=\"New Content of Comment\"/>\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _models_commentPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/commentPlayer */ "./src/app/models/commentPlayer.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/comment.service */ "./src/app/services/comment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(adminService, registerService, commentService) {
        this.adminService = adminService;
        this.registerService = registerService;
        this.commentService = commentService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.submitted = false;
        this.deletedComment = new _models_commentPlayer__WEBPACK_IMPORTED_MODULE_4__["CommentPlayer"]();
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
        this.commentService.getComments()
            .subscribe(function (data) {
            _this.comments = data;
        });
    };
    AdminPageComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        alert('Comment has been deleted.');
        console.log(comment);
        this.deletedComment.content = comment.content;
        this.deletedComment.likes = comment.likes;
        this.commentService.deleteComment(this.deletedComment).subscribe(function (data) {
            _this.comments = _this.comments.filter(function (u) { return u !== comment; });
        });
    };
    AdminPageComponent.prototype.updateThisComment = function (comment) {
        if (this.newCommentContent !== undefined) {
            comment.content = this.newCommentContent;
            this.commentService.updateCommentContent(comment)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        }
    };
    AdminPageComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.adminService.deleteUser(user)
            .subscribe(function (data) {
            _this.users = _this.users.filter(function (u) { return u !== user; });
        });
    };
    AdminPageComponent.prototype.updateUser = function () {
        console.log(this.user);
        this.adminService.updateUser(this.user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    AdminPageComponent.prototype.save = function () {
        console.log(this.user);
        this.registerService.createUser(this.user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    AdminPageComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
        alert('Registration Successful');
    };
    AdminPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-page',
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/admin-page/admin-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/admin-page/admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
            _services_comment_service__WEBPACK_IMPORTED_MODULE_5__["CommentService"]])
    ], AdminPageComponent);
    return AdminPageComponent;
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _player_search_player_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-search/player-search.component */ "./src/app/player-search/player-search.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _player_page_player_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-page/player-page.component */ "./src/app/player-page/player-page.component.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _player_search_results_player_search_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player-search-results/player-search-results.component */ "./src/app/player-search-results/player-search-results.component.ts");
/* harmony import */ var _gamelog_box_gamelog_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gamelog-box/gamelog-box.component */ "./src/app/gamelog-box/gamelog-box.component.ts");
/* harmony import */ var _receiver_table_receiver_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./receiver-table/receiver-table.component */ "./src/app/receiver-table/receiver-table.component.ts");
/* harmony import */ var _quarterback_table_quarterback_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quarterback-table/quarterback-table.component */ "./src/app/quarterback-table/quarterback-table.component.ts");
/* harmony import */ var _runningback_table_runningback_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./runningback-table/runningback-table.component */ "./src/app/runningback-table/runningback-table.component.ts");
/* harmony import */ var _comment_for_player_comment_for_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comment-for-player/comment-for-player.component */ "./src/app/comment-for-player/comment-for-player.component.ts");
/* harmony import */ var _list_of_watchlists_list_of_watchlists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list-of-watchlists/list-of-watchlists.component */ "./src/app/list-of-watchlists/list-of-watchlists.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'player-search', component: _player_search_player_search_component__WEBPACK_IMPORTED_MODULE_5__["PlayerSearchComponent"] },
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'player-page', component: _player_page_player_page_component__WEBPACK_IMPORTED_MODULE_7__["PlayerPageComponent"] },
    { path: 'admin-page', component: _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_8__["AdminPageComponent"] },
    { path: 'player-search-results', component: _player_search_results_player_search_results_component__WEBPACK_IMPORTED_MODULE_9__["PlayerSearchResultsComponent"] },
    { path: 'game-log-box', component: _gamelog_box_gamelog_box_component__WEBPACK_IMPORTED_MODULE_10__["GamelogBoxComponent"] },
    { path: 'receiver-table', component: _receiver_table_receiver_table_component__WEBPACK_IMPORTED_MODULE_11__["ReceiverTableComponent"] },
    { path: 'quarterback-table', component: _quarterback_table_quarterback_table_component__WEBPACK_IMPORTED_MODULE_12__["QuarterbackTableComponent"] },
    { path: 'runningback-table', component: _runningback_table_runningback_table_component__WEBPACK_IMPORTED_MODULE_13__["RunningbackTableComponent"] },
    { path: 'comment-for-player', component: _comment_for_player_comment_for_player_component__WEBPACK_IMPORTED_MODULE_14__["CommentForPlayerComponent"] },
    { path: 'list-of-watchlists', component: _list_of_watchlists_list_of_watchlists_component__WEBPACK_IMPORTED_MODULE_15__["ListOfWatchlistsComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-button {\n  margin: 5px;\n  border-width: .2rem;\n}\n\n.btn-group {\n  text-align: center;\n}\n\n.navbar {\n  background-color: lightgray;\n  opacity: 80%;\n  border-bottom: 2px solid rgb(0,0,0);\n  padding-bottom: 15px;\n  margin: 0 0 10px 0;\n  left: 0;\n  right: 0;\n  box-shadow:0px 1px 1px #000;\n}\n\nh1 a:hover{\n  text-decoration: none;\n}\n\na {\n  color: black !important;\n}\n\n.wButton {\n  visibility: hidden;\n}\n\n.aButton {\n  visibility: hidden;\n}\n\n.pButton {\n  visibility: hidden;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsU0FBUztFQUdULDRCQUE0QjtDQUM3Qjs7QUFFRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci13aWR0aDogLjJyZW07XG59XG5cbi5idG4tZ3JvdXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIG9wYWNpdHk6IDgwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigwLDAsMCk7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6MHB4IDBweCAwcHggIzAwMDtcbiAgLW1vei1ib3gtc2hhZG93OjBweCAwcHggMHB4ICMwMDA7XG4gIGJveC1zaGFkb3c6MHB4IDFweCAxcHggIzAwMDtcbn1cblxuaDEgYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi53QnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uYUJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnBCdXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar\">\n  <h1 class=\"text-center header-format\"><a href=\"#\">{{title}}</a></h1>\n    <p>Hello {{currentUser}}!</p>\n  <app-player-search></app-player-search>\n  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n    <button type=\"button\" id=\"watchlist-button\" class=\"btn-large menu-button wButton\"><a routerLink=\"list-of-watchlists\">Watchlist</a></button>\n    <button type=\"button\" class=\"btn-large menu-button\"><a routerLink=\"register\">Register</a></button>\n    <button type=\"button\" class=\"btn-large menu-button\"><a routerLink=\"login\">Login</a></button>\n    <button type=\"button\" id=\"profile-button\" class=\"btn-large menu-button pButton\"><a routerLink=\"profile\">Profile</a></button>\n    <button type=\"button\" id=\"admin-button\" class=\"btn-large menu-button aButton\"><a routerLink=\"admin-page\">Admin</a></button>\n  </div>\n</nav>\n\n  <router-outlet></router-outlet>\n\n\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Sports By Watchlist';
        this.currentUser = '';
        this.currentUserType = 'Anonymous';
    }
    AppComponent.prototype.setCurrentUserType = function (userType) {
        this.currentUserType = userType;
    };
    AppComponent.prototype.getCurrentUserType = function () {
        return this.currentUserType;
    };
    AppComponent.prototype.setCurrentUser = function (username) {
        this.currentUser = username;
    };
    AppComponent.prototype.showWatchList = function () {
        this.buttonElement = document.getElementById('watchlist-button');
        this.buttonElement.setAttribute('style', 'visibility: visible');
    };
    AppComponent.prototype.showAdminButton = function () {
        this.buttonElement = document.getElementById('admin-button');
        this.buttonElement.setAttribute('style', 'visibility: visible');
    };
    AppComponent.prototype.hideAdminButton = function () {
        this.buttonElement = document.getElementById('admin-button');
        this.buttonElement.setAttribute('style', 'visibility: hidden');
    };
    AppComponent.prototype.showProfileButton = function () {
        this.buttonElement = document.getElementById('profile-button');
        this.buttonElement.setAttribute('style', 'visibility: visible');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _player_search_player_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player-search/player-search.component */ "./src/app/player-search/player-search.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _player_page_player_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./player-page/player-page.component */ "./src/app/player-page/player-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_player_page_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/player-page.service */ "./src/app/services/player-page.service.ts");
/* harmony import */ var _player_search_results_player_search_results_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./player-search-results/player-search-results.component */ "./src/app/player-search-results/player-search-results.component.ts");
/* harmony import */ var _gamelog_box_gamelog_box_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gamelog-box/gamelog-box.component */ "./src/app/gamelog-box/gamelog-box.component.ts");
/* harmony import */ var _receiver_table_receiver_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./receiver-table/receiver-table.component */ "./src/app/receiver-table/receiver-table.component.ts");
/* harmony import */ var _quarterback_table_quarterback_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quarterback-table/quarterback-table.component */ "./src/app/quarterback-table/quarterback-table.component.ts");
/* harmony import */ var _runningback_table_runningback_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./runningback-table/runningback-table.component */ "./src/app/runningback-table/runningback-table.component.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _comment_for_player_comment_for_player_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./comment-for-player/comment-for-player.component */ "./src/app/comment-for-player/comment-for-player.component.ts");
/* harmony import */ var _list_of_watchlists_list_of_watchlists_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./list-of-watchlists/list-of-watchlists.component */ "./src/app/list-of-watchlists/list-of-watchlists.component.ts");
/* harmony import */ var _services_watchlist_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/watchlist.service */ "./src/app/services/watchlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _player_search_player_search_component__WEBPACK_IMPORTED_MODULE_8__["PlayerSearchComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                _player_page_player_page_component__WEBPACK_IMPORTED_MODULE_10__["PlayerPageComponent"],
                _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__["AdminPageComponent"],
                _player_search_results_player_search_results_component__WEBPACK_IMPORTED_MODULE_16__["PlayerSearchResultsComponent"],
                _gamelog_box_gamelog_box_component__WEBPACK_IMPORTED_MODULE_17__["GamelogBoxComponent"],
                _receiver_table_receiver_table_component__WEBPACK_IMPORTED_MODULE_18__["ReceiverTableComponent"],
                _quarterback_table_quarterback_table_component__WEBPACK_IMPORTED_MODULE_19__["QuarterbackTableComponent"],
                _runningback_table_runningback_table_component__WEBPACK_IMPORTED_MODULE_20__["RunningbackTableComponent"],
                _comment_for_player_comment_for_player_component__WEBPACK_IMPORTED_MODULE_22__["CommentForPlayerComponent"],
                _list_of_watchlists_list_of_watchlists_component__WEBPACK_IMPORTED_MODULE_23__["ListOfWatchlistsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ],
            providers: [
                _services_register_service__WEBPACK_IMPORTED_MODULE_12__["RegisterService"],
                _services_admin_service__WEBPACK_IMPORTED_MODULE_14__["AdminService"],
                _services_player_page_service__WEBPACK_IMPORTED_MODULE_15__["PlayerPageService"],
                _services_comment_service__WEBPACK_IMPORTED_MODULE_21__["CommentService"],
                _services_watchlist_service__WEBPACK_IMPORTED_MODULE_24__["WatchlistService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comment-for-player/comment-for-player.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/comment-for-player/comment-for-player.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnQtZm9yLXBsYXllci9jb21tZW50LWZvci1wbGF5ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/comment-for-player/comment-for-player.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/comment-for-player/comment-for-player.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>Comments For Player</h6>\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <!--<th>Username</th>-->\n    <th>Content  </th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let comment of comments\">\n    <!--<td>{{comment.username}}</td>-->\n    <td>{{comment.content}}</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/comment-for-player/comment-for-player.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/comment-for-player/comment-for-player.component.ts ***!
  \********************************************************************/
/*! exports provided: CommentForPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentForPlayerComponent", function() { return CommentForPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/comment.service */ "./src/app/services/comment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentForPlayerComponent = /** @class */ (function () {
    //
    function CommentForPlayerComponent(commentService) {
        this.commentService = commentService;
    }
    //
    CommentForPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentService.getPlayerComments()
            .subscribe(function (data) {
            console.log(data);
            _this.comments = data;
        });
    };
    CommentForPlayerComponent.prototype.savePlayersName = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    CommentForPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment-for-player',
            template: __webpack_require__(/*! ./comment-for-player.component.html */ "./src/app/comment-for-player/comment-for-player.component.html"),
            styles: [__webpack_require__(/*! ./comment-for-player.component.css */ "./src/app/comment-for-player/comment-for-player.component.css")]
        }),
        __metadata("design:paramtypes", [_services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"]])
    ], CommentForPlayerComponent);
    return CommentForPlayerComponent;
}());



/***/ }),

/***/ "./src/app/gamelog-box/gamelog-box.component.css":
/*!*******************************************************!*\
  !*** ./src/app/gamelog-box/gamelog-box.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVsb2ctYm94L2dhbWVsb2ctYm94LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/gamelog-box/gamelog-box.component.html":
/*!********************************************************!*\
  !*** ./src/app/gamelog-box/gamelog-box.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  gamelog-box works!\n</p>\n\n<p>\n  {{this.name}}\n</p>\n"

/***/ }),

/***/ "./src/app/gamelog-box/gamelog-box.component.ts":
/*!******************************************************!*\
  !*** ./src/app/gamelog-box/gamelog-box.component.ts ***!
  \******************************************************/
/*! exports provided: GamelogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamelogBoxComponent", function() { return GamelogBoxComponent; });
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

var GamelogBoxComponent = /** @class */ (function () {
    function GamelogBoxComponent() {
    }
    GamelogBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GamelogBoxComponent.prototype, "name", void 0);
    GamelogBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gamelog-box',
            template: __webpack_require__(/*! ./gamelog-box.component.html */ "./src/app/gamelog-box/gamelog-box.component.html"),
            styles: [__webpack_require__(/*! ./gamelog-box.component.css */ "./src/app/gamelog-box/gamelog-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GamelogBoxComponent);
    return GamelogBoxComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cool-header{\n  margin-top: 10%;\n  margin-bottom: 10%;\n}\n\nh2, .h2 {\n  font-size: 2.5rem;\n  border: 2px #000000;\n}\n\n.hr-styling{\n  margin-bottom: 5%;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb29sLWhlYWRlcntcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbmgyLCAuaDIge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgYm9yZGVyOiAycHggIzAwMDAwMDtcbn1cblxuLmhyLXN0eWxpbmd7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"text-center cool-header\" style=\"background: white\">\n    <div style=\"border: 2px #000000;\"><h2>interacting with football stats and comments.</h2></div>\n\n  </div>\n\n  <hr class=\"hr-styling\">\n\n  <div class=\"container text-center\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <div><h5>Create Watchlists.</h5></div>\n        <br>\n        <p>Watchlists for Team Managers to keep track of athletes they are interested in.</p>\n      </div>\n      <div class=\"col-sm\">\n        <div><h5>Leave Comments & Likes.</h5></div>\n        <br>\n        <p>Talk 'trash' on athlete pages, like comments, and receive responses.</p>\n      </div>\n      <div class=\"col-sm\">\n        <div><h5>Search Data.</h5></div>\n        <br>\n        <p>Look through the stats to see how players perform in certain games.</p>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
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

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/list-of-watchlists/list-of-watchlists.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/list-of-watchlists/list-of-watchlists.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtb2Ytd2F0Y2hsaXN0cy9saXN0LW9mLXdhdGNobGlzdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/list-of-watchlists/list-of-watchlists.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/list-of-watchlists/list-of-watchlists.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"watchlist-box\">\n  <h4>\n    My Watchlist\n  </h4>\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">Player Name</th>\n      <th scope=\"col\">View Player</th>\n      <th scope=\"col\">Delete Player From Watchlist</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let player of players\">\n      <td>{{player.firstName}} {{player.lastName}}</td>\n      <td>\n        <button (click)=\"goToPlayerPage(player.firstName,player.lastName)\">View</button>\n      </td>\n      <td>\n        <button (click)=\"deletePlayerFromWatchList(player.firstName, player.lastName)\">Delete From Watchlist</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/list-of-watchlists/list-of-watchlists.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/list-of-watchlists/list-of-watchlists.component.ts ***!
  \********************************************************************/
/*! exports provided: ListOfWatchlistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfWatchlistsComponent", function() { return ListOfWatchlistsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_watchlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/watchlist.service */ "./src/app/services/watchlist.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_player_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/player-page.service */ "./src/app/services/player-page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListOfWatchlistsComponent = /** @class */ (function () {
    function ListOfWatchlistsComponent(router, appComponent, watchListService, playerService) {
        this.router = router;
        this.appComponent = appComponent;
        this.watchListService = watchListService;
        this.playerService = playerService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ListOfWatchlistsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.watchListService.getPlayers(this.appComponent.currentUser)
            .subscribe(function (data) {
            console.log(data);
            _this.players = data;
        });
    };
    ListOfWatchlistsComponent.prototype.goToPlayerPage = function (firstName, lastName) {
        this.playerService.setNames(firstName, lastName);
        this.router.navigate(['/player-page']);
    };
    ListOfWatchlistsComponent.prototype.deletePlayerFromWatchList = function (firstName, lastName) {
        alert('Deleted from watchlist: ' + firstName + lastName);
        this.watchListService.deletePlayerFromWatchList(firstName, lastName)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    ListOfWatchlistsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-of-watchlists',
            template: __webpack_require__(/*! ./list-of-watchlists.component.html */ "./src/app/list-of-watchlists/list-of-watchlists.component.html"),
            styles: [__webpack_require__(/*! ./list-of-watchlists.component.css */ "./src/app/list-of-watchlists/list-of-watchlists.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _services_watchlist_service__WEBPACK_IMPORTED_MODULE_1__["WatchlistService"], _services_player_page_service__WEBPACK_IMPORTED_MODULE_3__["PlayerPageService"]])
    ], ListOfWatchlistsComponent);
    return ListOfWatchlistsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n    </div>\n    <div class=\"col\">\n      <h3 class=\"text-center\">Login</h3>\n      <p>\n        <input [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"Username\"/>\n        <input [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\"/>\n        <button (click)=\"login1(username)\" class=\"btn btn-primary btn-block\" style=\"margin-top: 10px\">\n          Login\n        </button>\n      </p>\n    </div>\n    <div class=\"col\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, appComponent, adminService) {
        var _this = this;
        this.router = router;
        this.appComponent = appComponent;
        this.adminService = adminService;
        this.aUser = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.login1 = function (username) {
            _this.appComponent.setCurrentUser(username);
            _this.adminService.getUser(username)
                .subscribe(function (data) {
                console.log(data);
                _this.aUser = data;
                _this.aUserType = _this.aUser.userType;
                _this.appComponent.setCurrentUserType(_this.aUserType);
                console.log('This is the current Type: ' + _this.appComponent.getCurrentUserType());
                if (_this.aUserType === 'Team Manager') {
                    _this.appComponent.showWatchList();
                    _this.appComponent.hideAdminButton();
                    _this.router.navigate(['/profile']);
                }
                else if (_this.aUserType === 'Admin') {
                    _this.appComponent.showAdminButton();
                    _this.router.navigate(['/admin-page']);
                }
                else {
                    _this.router.navigate(['/profile']);
                }
            });
            _this.appComponent.showProfileButton();
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/commentPlayer.ts":
/*!*****************************************!*\
  !*** ./src/app/models/commentPlayer.ts ***!
  \*****************************************/
/*! exports provided: CommentPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPlayer", function() { return CommentPlayer; });
var CommentPlayer = /** @class */ (function () {
    function CommentPlayer() {
    }
    return CommentPlayer;
}());



/***/ }),

/***/ "./src/app/models/player.ts":
/*!**********************************!*\
  !*** ./src/app/models/player.ts ***!
  \**********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
// export class Player {
//    firstName: String;
//    jerseyNum: String;
//    lastName: String;
//    teamId: Number;
//    games: Game[];
//    comments: Comment[];
// }
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/player-page/player-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/player-page/player-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin-bottom: 5px;\n}\n\nselect {\n  margin-left: 10px;\n}\n\n.total-average-box {\n  border: 2px solid lightgrey;\n  padding: 15px;\n  border-radius: 5px;\n  margin-bottom: 25px;\n}\n\ntr:nth-child(even) {background-color: #f2f2f2;}\n\nbutton {\n  margin: 10px;\n  background-color: lightblue;\n}\n\n.aWatch {\n  visibility: hidden;\n}\n\n.likeButton {\n  visibility: visible;\n}\n\n.aCommentBox {\n  visibility: visible;\n}\n\n.aReplyInput {\n  visibility: visible;\n}\n\n.input-reply-box {\n  visibility: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyLXBhZ2UvcGxheWVyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjs7QUFFRCxvQkFBb0IsMEJBQTBCLENBQUM7O0FBRS9DO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtDQUM3Qjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci1wYWdlL3BsYXllci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50b3RhbC1hdmVyYWdlLWJveCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxuXG5idXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuLmFXYXRjaCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmxpa2VCdXR0b24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYUNvbW1lbnRCb3gge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYVJlcGx5SW5wdXQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uaW5wdXQtcmVwbHktYm94IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/player-page/player-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/player-page/player-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Name: {{this.player.firstName}} {{this.player.lastName}} </h3>\n<h5>Jersey Number: {{this.player.jerseyNum}}</h5>\n<h5>Position: {{this.player.type}}</h5>\n<h5>User Likes: {{this.player.likes}}</h5>\n<span>\n  <button class=\"btn aWatch\" id=\"addWatchlistButton\"\n          (click)=\"addToWatchList(this.player.firstName,this.player.lastName)\"\n          style=\"background-color: lightblue; margin: 10px\">Add Player to Watchlist</button>\n  <button class=\"btn likeButton\" id=\"likePlayerButton\"\n          (click)=\"addLikeToPlayer(this.player.firstName,this.player.lastName)\"\n          style=\"background-color: lightgreen; margin: 10px\">Like Player</button>\n</span>\n<hr>\n<h3>Game Logs</h3>\n\n<app-receiver-table *ngIf=this.receiverDisplay></app-receiver-table>\n<app-quarterback-table *ngIf=this.quarterbackDisplay></app-quarterback-table>\n<app-runningback-table *ngIf=this.runningbackDisplay></app-runningback-table>\n<div id=\"giantDIV\" class=\"aGiantDIV\">\n<div  id=\"commentBox\"  class=\"total-average-box aCommentBox\">\n    <h4>\n      Add a Comment\n    </h4>\n    <input [(ngModel)]=\"comment.username\" class=\"form-control\" placeholder=\"Author\"/>\n    <textarea [(ngModel)]=\"comment.content\" rows=\"4\" cols=\"50\" name=\"comment\" form=\"comment-form\"\n              placeholder=\"Enter comment here....\">\n  </textarea>\n    <form id=\"comment-form\">\n      <input type=\"submit\" (click)=\"createPlayerComment()\">\n    </form>\n  </div>\n\n<hr>\n<h3>COMMENTS</h3>\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>Username</th>\n    <th>Content</th>\n    <th>Likes</th>\n    <th>React to Comment</th>\n    <th></th>\n    <th></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let comment of comments\">\n    <td>{{comment.userName}}</td>\n    <td>{{comment.content}}</td>\n    <td>{{comment.likes}}</td>\n    <td>\n      <button id=\"like-button\" class=\"btn\" (click)=\"clickedFunctions(comment); \">Like This Comment</button>\n      <button class=\"btn aReplyButton\" id=\"replyButton\" (click)=\"createReply(comment.content)\">Add Your Reply To This Comment</button>\n      <button class=\"btn\" (click)=\"fetchReplies(comment)\">Show Responses</button>\n    </td>\n  </tbody>\n</table>\n\n  <div class=\"reply-box input-reply-box\" id=\"replyInput\">\n    <input [(ngModel)]=\"athleteReply\" class=\"form-control\" placeholder=\"Author\"/>\n    <input name=\"yay\" placeholder=\"Leave a Reply\" class=\"form-control\" [(ngModel)]=\"this.reply.content\"/>\n  </div>\n\n\n<hr>\n<h3>RESPONSES TO THAT COMMENT </h3>\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>Username</th>\n    <th>Reply Content</th>\n    <th></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let reply of replies\">\n    <td>{{reply.userName}}</td>\n    <td>{{reply.content}}</td>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/player-page/player-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/player-page/player-page.component.ts ***!
  \******************************************************/
/*! exports provided: PlayerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageComponent", function() { return PlayerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/player */ "./src/app/models/player.ts");
/* harmony import */ var _services_player_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player-page.service */ "./src/app/services/player-page.service.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _models_commentPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/commentPlayer */ "./src/app/models/commentPlayer.ts");
/* harmony import */ var _services_watchlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/watchlist.service */ "./src/app/services/watchlist.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlayerPageComponent = /** @class */ (function () {
    function PlayerPageComponent(playerService, commentService, watchListService, appComponent) {
        this.playerService = playerService;
        this.commentService = commentService;
        this.watchListService = watchListService;
        this.appComponent = appComponent;
        this.player = new _models_player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
        this.comment = new _models_commentPlayer__WEBPACK_IMPORTED_MODULE_4__["CommentPlayer"]();
        this.reply = new _models_commentPlayer__WEBPACK_IMPORTED_MODULE_4__["CommentPlayer"]();
    }
    PlayerPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.receiverDisplay = false;
        this.quarterbackDisplay = false;
        this.runningbackDisplay = false;
        if (this.appComponent.getCurrentUserType() === 'Team Manager') {
            this.buttonElement = document.getElementById('addWatchlistButton');
            this.buttonElement.setAttribute('style', 'visibility: visible');
        }
        if (this.appComponent.getCurrentUserType() === 'Anonymous') {
            this.likebuttonElement = document.getElementById('likePlayerButton');
            this.likebuttonElement.setAttribute('style', 'visibility: hidden');
        }
        if (this.appComponent.getCurrentUserType() === 'Athlete' || this.appComponent.getCurrentUserType() === 'Anonymous'
            || this.appComponent.getCurrentUserType() === 'Basic User') {
            this.commentBox = document.getElementById('commentBox');
            this.commentBox.setAttribute('style', 'visibility: hidden');
        }
        if (this.appComponent.getCurrentUserType() === 'Anonymous') {
            this.giantDIV = document.getElementById('giantDIV');
            this.giantDIV.setAttribute('style', 'visibility: hidden');
        }
        if (this.appComponent.getCurrentUserType() === 'Athlete') {
            this.replyInput = document.getElementById('replyInput');
            this.replyInput.setAttribute('style', 'visibility: visible');
            // this.replyInputAuthor = document.getElementById('input-reply-author');
            // this.replyInputAuthor.setAttribute('style', 'visibility: visible');
        }
        this.playerService.getPlayer()
            .subscribe(function (data) {
            _this.player = data;
            if (_this.player.type === 'WR' || _this.player.type === 'TE') {
                _this.receiverDisplay = true;
            }
            if (_this.player.type === 'QB') {
                _this.quarterbackDisplay = true;
            }
            if (_this.player.type === 'RB') {
                _this.runningbackDisplay = true;
                console.log(_this.player.firstName);
            }
        });
        this.playerService.getPlayerComments()
            .subscribe(function (data) {
            console.log(data);
            _this.comments = data;
        });
        this.playerService.getPlayerGameLogs()
            .subscribe(function (data) {
            _this.gamelogs = data;
        });
        this.commentService.setPlayerName(this.player.firstName, this.player.lastName);
    };
    PlayerPageComponent.prototype.createPlayerComment = function () {
        this.comment.playerFirstName = this.player.firstName;
        this.comment.playerLastName = this.player.lastName;
        this.commentService.createComment(this.comment)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    PlayerPageComponent.prototype.addOne = function (currentComment) {
        console.log(currentComment.content);
        this.commentService.updateCommentLikes(currentComment)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    PlayerPageComponent.prototype.likeResponse = function () {
        alert('You liked a comment! Search for this player again from the Homepage to see the updated like amount');
    };
    PlayerPageComponent.prototype.clickedFunctions = function (currentComment) {
        this.addOne(currentComment);
        this.likeResponse();
    };
    PlayerPageComponent.prototype.createReply = function (originalContent) {
        this.reply.playerFirstName = this.player.firstName;
        this.reply.playerLastName = this.player.lastName;
        this.reply.originalContent = originalContent;
        this.reply.username = this.athleteReply;
        console.log(this.reply.originalContent);
        console.log(this.comment.content);
        if (this.reply.content !== undefined) {
            this.commentService.createReply(this.reply, this.reply.playerFirstName, this.reply.playerLastName)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        }
    };
    PlayerPageComponent.prototype.fetchReplies = function (content) {
        var _this = this;
        this.commentService.getReplies(content, this.player.firstName, this.player.lastName)
            .subscribe(function (data) {
            console.log(data);
            _this.replies = data;
        });
        console.log(content);
    };
    PlayerPageComponent.prototype.addToWatchList = function (firstName, lastName) {
        alert('You have tried to add ' + firstName + ' ' + lastName
            + ' to your watchlist. If another user has claimed ' + firstName + ' '
            + lastName + ' then you may not be able to add this athlete to your watchlist!');
        console.log(this.appComponent.currentUser);
        this.watchListService.addPlayerToWatchList(firstName, lastName, this.appComponent.currentUser)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    PlayerPageComponent.prototype.addLikeToPlayer = function (firstName, lastName) {
        alert('Liked player: ' + firstName + ' ' + lastName);
        this.playerService.addPlayerLike(firstName, lastName, this.player)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    PlayerPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-page',
            template: __webpack_require__(/*! ./player-page.component.html */ "./src/app/player-page/player-page.component.html"),
            styles: [__webpack_require__(/*! ./player-page.component.css */ "./src/app/player-page/player-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_player_page_service__WEBPACK_IMPORTED_MODULE_2__["PlayerPageService"], _services_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"],
            _services_watchlist_service__WEBPACK_IMPORTED_MODULE_5__["WatchlistService"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
    ], PlayerPageComponent);
    return PlayerPageComponent;
}());



/***/ }),

/***/ "./src/app/player-search-results/player-search-results.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/player-search-results/player-search-results.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci1zZWFyY2gtcmVzdWx0cy9wbGF5ZXItc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/player-search-results/player-search-results.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/player-search-results/player-search-results.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n  <h4>\n    Search Results:\n  </h4>\n\n  <table class=\"table\" style=\"margin-top: 10px\">\n    <thead>\n    <tr>\n      <th scope=\"col\">First Name</th>\n      <th scope=\"col\">Last Name</th>\n      <th scope=\"col\">Jersey Number</th>\n      <th scope=\"col\">View Player</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let player of players\">\n      <td>{{player.firstName}}</td>\n      <td>{{player.lastName}}</td>\n      <td>{{player.jerseyNum}}</td>\n      <td>\n        <button (click)=\"goToPage(player.firstName,player.lastName)\">View</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/player-search-results/player-search-results.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/player-search-results/player-search-results.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlayerSearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchResultsComponent", function() { return PlayerSearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_player_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/player-page.service */ "./src/app/services/player-page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerSearchResultsComponent = /** @class */ (function () {
    function PlayerSearchResultsComponent(router, searchService) {
        this.router = router;
        this.searchService = searchService;
    }
    PlayerSearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getPlayersByKeyword()
            .subscribe(function (data) {
            _this.players = data;
        });
    };
    PlayerSearchResultsComponent.prototype.goToPage = function (firstName, lastName) {
        this.searchService.setNames(firstName, lastName);
        this.router.navigate(['/player-page']);
    };
    PlayerSearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-search-results',
            template: __webpack_require__(/*! ./player-search-results.component.html */ "./src/app/player-search-results/player-search-results.component.html"),
            styles: [__webpack_require__(/*! ./player-search-results.component.css */ "./src/app/player-search-results/player-search-results.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_player_page_service__WEBPACK_IMPORTED_MODULE_1__["PlayerPageService"]])
    ], PlayerSearchResultsComponent);
    return PlayerSearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/player-search/player-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/player-search/player-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci1zZWFyY2gvcGxheWVyLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/player-search/player-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/player-search/player-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"input-group\">\n  <input [(ngModel)]=\"player\" class=\"form-control\" placeholder=\"Search Athletes\">\n  <div class=\"input-group-append\">\n    <button (click)=\"search(player)\" class=\"btn btn-primary\">\n      Search\n    </button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/player-search/player-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/player-search/player-search.component.ts ***!
  \**********************************************************/
/*! exports provided: PlayerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchComponent", function() { return PlayerSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_player_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player-page.service */ "./src/app/services/player-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerSearchComponent = /** @class */ (function () {
    function PlayerSearchComponent(router, searchService) {
        var _this = this;
        this.router = router;
        this.searchService = searchService;
        this.search = function (player1) {
            var LSplit = player1.split(' ', 2);
            if (LSplit.length === 2) {
                _this.searchService.setNames(LSplit[0], LSplit[1]);
                _this.router.navigate(['/player-page']);
            }
            else {
                _this.searchService.setOneName(LSplit[0]);
                _this.router.navigate(['/player-search-results']);
            }
        };
    }
    PlayerSearchComponent.prototype.ngOnInit = function () {
    };
    PlayerSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-search',
            template: __webpack_require__(/*! ./player-search.component.html */ "./src/app/player-search/player-search.component.html"),
            styles: [__webpack_require__(/*! ./player-search.component.css */ "./src/app/player-search/player-search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_player_page_service__WEBPACK_IMPORTED_MODULE_2__["PlayerPageService"]])
    ], PlayerSearchComponent);
    return PlayerSearchComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-bottom: 25px;\n}\n\n.profile-box {\n  border: 2px solid lightgrey;\n  padding: 15px;\n  border-radius: 5px;\n  margin-bottom: 25px;\n}\n\ntr:nth-child(even) {background-color: #f2f2f2;}\n\n.not-basic-box {\n  visibility: visible;\n}\n\n.watchlist-box {\n  visibility: hidden;\n}\n\n.other-user-box {\n  visibility: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQsb0JBQW9CLDBCQUEwQixDQUFDOztBQUUvQztFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucHJvZmlsZS1ib3gge1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cblxuLm5vdC1iYXNpYy1ib3gge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ud2F0Y2hsaXN0LWJveCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm90aGVyLXVzZXItYm94IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Profile\n</h2>\n\n<div class=\"profile-box\">\n  <h4>\n    Profile Information for {{getUsername()}}\n  </h4>\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">ID</th>\n      <th scope=\"col\">First Name</th>\n      <th scope=\"col\">Last Name</th>\n      <th scope=\"col\">Username</th>\n      <th scope=\"col\">Password</th>\n      <th scope=\"col\">User Type</th>\n      <th scope=\"col\">City</th>\n      <th scope=\"col\">State</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>{{user.id}}</td>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.username}}</td>\n      <td>{{user.password}}</td>\n      <td>{{user.userType}}</td>\n      <td>{{user.city}}</td>\n      <td>{{user.state}}</td>\n      <td>\n        <button>Edit</button>\n      </td>\n      <td>\n        <button>Update</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<h6>Update</h6>\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Username</th>\n    <th>Password</th>\n    <th>City</th>\n    <th>State</th>\n    <th>Update</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td><input [(ngModel)]=\"newUser.firstName\" class=\"form-control\" placeholder=\"First Name\"/></td>\n    <td><input [(ngModel)]=\"newUser.lastName\" class=\"form-control\" placeholder=\"Last Name\"/></td>\n    <td><input [(ngModel)]=\"newUser.username\" class=\"form-control\" placeholder=\"Last Name\"/></td>\n    <td><input [(ngModel)]=\"newUser.password\" class=\"form-control\" placeholder=\"Password\"/></td>\n    <td><input [(ngModel)]=\"newUser.city\" class=\"form-control\" placeholder=\"City\"/></td>\n    <td><input [(ngModel)]=\"newUser.state\" class=\"form-control\" placeholder=\"State\"/></td>\n    <td><button class=\"btn btn-danger\" (click)=\"updateUser()\"> Update User</button></td>\n  </tr>\n  </tbody>\n</table>\n\n<div class=\"not-basic-box\" id=\"notBasicBox\">\n<div class=\"profile-box\">\n  <h3>\n    Comments\n  </h3>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">Comment</th>\n      <th scope=\"col\"># of Likes</th>\n      <th scope=\"col\"></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let aComment of commentsByUser\">\n      <td>{{aComment.content}}</td>\n      <td>{{aComment.likes}}</td>\n      <td>\n        <button (click)=\"updateThisComment(aComment)\">Update This Comment</button>\n      </td>\n      <td>\n        <button (click)=\"deleteComment(aComment)\">Delete</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n  <input [(ngModel)]=\"newCommentContent\" class=\"form-control\" placeholder=\"New Content of Comment\"/>\n</div>\n\n<div class=\"watchlist-box\" id=\"watchlistBoxID\">\n<app-list-of-watchlists></app-list-of-watchlists>\n</div>\n</div>\n\n<h6>Users</h6>\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>Username</th>\n    <th>View Comments </th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let user of userz\">\n    <td>{{user.username}}</td>\n    <td><button (click)=\"retrieveComments(user.username)\" class=\"btn btn-danger\">View User's Comments</button></td>\n  </tr>\n  </tbody>\n</table>\n\n<div id=\"otherUsers\" class=\"other-user-box\">\n<h2>{{userWeHaveComments}}'s Comments</h2>\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>Comment</th>\n    <th>Likes</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let comm of userComments\">\n    <td>{{comm.content}}</td>\n    <td>{{comm.likes}}</td>\n  </tr>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _models_commentPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/commentPlayer */ "./src/app/models/commentPlayer.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(appComponent, commentService, adminService) {
        this.appComponent = appComponent;
        this.commentService = commentService;
        this.adminService = adminService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.newUser = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.deletedComment = new _models_commentPlayer__WEBPACK_IMPORTED_MODULE_2__["CommentPlayer"]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getUsers()
            .subscribe(function (data) {
            _this.userz = data;
        });
        this.commentService.getCommentsByUser(this.appComponent.currentUser)
            .subscribe(function (data) {
            console.log(data);
            _this.commentsByUser = data;
        });
        this.adminService.getUser(this.appComponent.currentUser)
            .subscribe(function (data) {
            console.log(data);
            _this.user = data;
        });
        console.log(this.appComponent.getCurrentUserType());
        if (this.appComponent.getCurrentUserType() === 'Basic User') {
            this.nonBasicBox = document.getElementById('notBasicBox');
            this.nonBasicBox.setAttribute('style', 'visibility: hidden');
        }
        if (this.appComponent.getCurrentUserType() === 'Team Manager') {
            this.nonBasicBox = document.getElementById('watchlistBoxID');
            this.nonBasicBox.setAttribute('style', 'visibility: visible');
        }
    };
    ProfileComponent.prototype.getUsername = function () {
        return this.appComponent.currentUser;
    };
    ProfileComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        alert('Comment has been deleted.');
        console.log(comment);
        this.deletedComment.content = comment.content;
        this.deletedComment.likes = comment.likes;
        this.commentService.deleteComment(this.deletedComment).subscribe(function (data) {
            _this.commentsByUser = _this.commentsByUser.filter(function (u) { return u !== comment; });
        });
    };
    ProfileComponent.prototype.updateThisComment = function (comment) {
        comment.content = this.newCommentContent;
        this.commentService.updateCommentContent(comment)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    ProfileComponent.prototype.updateUser = function () {
        this.newUser.id = this.user.id;
        this.newUser.userType = this.user.userType;
        this.adminService.updateUser(this.newUser)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    ProfileComponent.prototype.retrieveComments = function (username) {
        var _this = this;
        this.userReponse = document.getElementById('otherUsers');
        this.userReponse.setAttribute('style', 'visibility: visible');
        this.userWeHaveComments = username;
        this.commentService.getCommentsByUser(username)
            .subscribe(function (data) {
            _this.userComments = data;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _services_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/quarterback-table/quarterback-table.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/quarterback-table/quarterback-table.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1YXJ0ZXJiYWNrLXRhYmxlL3F1YXJ0ZXJiYWNrLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/quarterback-table/quarterback-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/quarterback-table/quarterback-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>Game Date</th>\n    <th>Passing Attempts</th>\n    <th>Passing Completions</th>\n    <th>Passing Yards</th>\n    <th>Passing Touchdowns</th>\n    <th>Interceptions</th>\n    <th>Completion Percentage</th>\n    <th>Quarterback Rating</th>\n    <th>Longest Completion</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let gamelog of gamelogs\">\n    <td>{{gamelog.gameDate}}</td>\n    <td>{{gamelog.passAttempts}}</td>\n    <td>{{gamelog.passCompletions}}</td>\n    <td>{{gamelog.passYards}}</td>\n    <td>{{gamelog.passTD}}</td>\n    <td>{{gamelog.passInt}}</td>\n    <td>{{gamelog.passPct}}</td>\n    <td>{{gamelog.qbRating}}</td>\n    <td>{{gamelog.passLng}}</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/quarterback-table/quarterback-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/quarterback-table/quarterback-table.component.ts ***!
  \******************************************************************/
/*! exports provided: QuarterbackTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuarterbackTableComponent", function() { return QuarterbackTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/player */ "./src/app/models/player.ts");
/* harmony import */ var _services_player_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player-page.service */ "./src/app/services/player-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuarterbackTableComponent = /** @class */ (function () {
    function QuarterbackTableComponent(playerService) {
        this.playerService = playerService;
        this.player = new _models_player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
        this.comment = new Comment();
    }
    QuarterbackTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayer()
            .subscribe(function (data) {
            _this.player = data;
        });
        this.playerService.getPlayerGameLogs()
            .subscribe(function (data) {
            _this.gamelogs = data;
        });
    };
    QuarterbackTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quarterback-table',
            template: __webpack_require__(/*! ./quarterback-table.component.html */ "./src/app/quarterback-table/quarterback-table.component.html"),
            styles: [__webpack_require__(/*! ./quarterback-table.component.css */ "./src/app/quarterback-table/quarterback-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_player_page_service__WEBPACK_IMPORTED_MODULE_2__["PlayerPageService"]])
    ], QuarterbackTableComponent);
    return QuarterbackTableComponent;
}());



/***/ }),

/***/ "./src/app/receiver-table/receiver-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/receiver-table/receiver-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpdmVyLXRhYmxlL3JlY2VpdmVyLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/receiver-table/receiver-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/receiver-table/receiver-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>Game Date</th>\n    <th>Receptions</th>\n    <th>Receiving Yards</th>\n    <th>Receiving Touchdowns</th>\n    <th>Rec. 20+ yds.</th>\n    <th>Rec. 40+ yds.</th>\n    <th>Targets</th>\n    <th>Longest Rec.</th>\n    <th>First Downs</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let gamelog of gamelogs\">\n    <td>{{gamelog.gameDate}}</td>\n    <td>{{gamelog.receptions}}</td>\n    <td>{{gamelog.recYards}}</td>\n    <td>{{gamelog.recTD}}</td>\n    <td>{{gamelog.rec20Plus}}</td>\n    <td>{{gamelog.rec40Plus}}</td>\n    <td>{{gamelog.targets}}</td>\n    <td>{{gamelog.recLng}}</td>\n    <td>{{gamelog.recFirstDowns}}</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/receiver-table/receiver-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/receiver-table/receiver-table.component.ts ***!
  \************************************************************/
/*! exports provided: ReceiverTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiverTableComponent", function() { return ReceiverTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/player */ "./src/app/models/player.ts");
/* harmony import */ var _services_player_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player-page.service */ "./src/app/services/player-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReceiverTableComponent = /** @class */ (function () {
    function ReceiverTableComponent(playerService) {
        this.playerService = playerService;
        this.player = new _models_player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
        this.comment = new Comment();
    }
    ReceiverTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayer()
            .subscribe(function (data) {
            _this.player = data;
        });
        this.playerService.getPlayerGameLogs()
            .subscribe(function (data) {
            _this.gamelogs = data;
        });
    };
    ReceiverTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receiver-table',
            template: __webpack_require__(/*! ./receiver-table.component.html */ "./src/app/receiver-table/receiver-table.component.html"),
            styles: [__webpack_require__(/*! ./receiver-table.component.css */ "./src/app/receiver-table/receiver-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_player_page_service__WEBPACK_IMPORTED_MODULE_2__["PlayerPageService"]])
    ], ReceiverTableComponent);
    return ReceiverTableComponent;
}());

// createTable(position: String) {
//   if (position === 'WR') {
//     this.router.navigate(['/rece']);
//   }
// }
// doSomething() {
//   this.playerService.getPlayer()
//     .subscribe( data => {
//       this.player = data;
//     });
//   this.playerService.getPlayerGameLogs()
//     .subscribe(data => {
//       this.gamelogs = data;
//     });
// }


/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin-bottom: 5px;\n}\n\nselect {\n  margin-left: 10px;\n}\n\n.aGiantDIV {\n  visibility: visible;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5hR2lhbnRESVYge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n    </div>\n    <div class=\"col\">\n      <h2 class=\"text-center\">Register</h2>\n      <p>\n        <input [(ngModel)]=\"user.firstName\" class=\"form-control\" placeholder=\"First Name\"/>\n        <input [(ngModel)]=\"user.lastName\" class=\"form-control\" placeholder=\"Last Name\"/>\n        <input [(ngModel)]=\"user.username\" class=\"form-control\" placeholder=\"Username\"/>\n        <input [(ngModel)]=\"user.password\" class=\"form-control\" placeholder=\"Password\"/>\n        <input [(ngModel)]=\"user.verifyPassword\" class=\"form-control\" placeholder=\"Verify Password\"/>\n        <input [(ngModel)]=\"user.city\" class=\"form-control\" placeholder=\"City\"/>\n        <input [(ngModel)]=\"user.state\" class=\"form-control\" placeholder=\"State\"/>\n        <label>User Type: </label>\n        <select [(ngModel)]=\"user.userType\" id=\"userType\">\n          <option value=\"Fan\">Fan</option>\n          <option value=\"Player\">Athlete</option>\n          <option value=\"Team\">Team Management</option>\n          <option value=\"Basic-User\">Basic User</option>\n          <option value=\"Admin\">Admin</option>\n        </select>\n        <button (click)=\"onSubmit()\"\n                class=\"btn btn-primary btn-block\">\n          Register\n        </button>\n      </p>\n    </div>\n    <div class=\"col\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.newUser = function () {
        this.submitted = false;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    RegisterComponent.prototype.save = function () {
        console.log(this.user);
        this.registerService.createUser(this.user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
        alert('Registration Successful');
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/runningback-table/runningback-table.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/runningback-table/runningback-table.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1bm5pbmdiYWNrLXRhYmxlL3J1bm5pbmdiYWNrLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/runningback-table/runningback-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/runningback-table/runningback-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>Game Date</th>\n    <th>Rushing Attempts</th>\n    <th>Rushing Yards</th>\n    <th>Yds per Attempt</th>\n    <th>Rushing TDs</th>\n    <th>Longest Rush</th>\n    <th>Receptions</th>\n    <th>Receiving Yards</th>\n    <th>Receiving TDs</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let gamelog of gamelogs\">\n    <td>{{gamelog.gameDate}}</td>\n    <td>{{gamelog.rushAttempts}}</td>\n    <td>{{gamelog.rushYards}}</td>\n    <td>{{gamelog.rushAvg}}</td>\n    <td>{{gamelog.rushTD}}</td>\n    <td>{{gamelog.rushLong}}</td>\n    <td>{{gamelog.receptions}}</td>\n    <td>{{gamelog.recYards}}</td>\n    <td>{{gamelog.recTD}}</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/runningback-table/runningback-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/runningback-table/runningback-table.component.ts ***!
  \******************************************************************/
/*! exports provided: RunningbackTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunningbackTableComponent", function() { return RunningbackTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/player */ "./src/app/models/player.ts");
/* harmony import */ var _services_player_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player-page.service */ "./src/app/services/player-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RunningbackTableComponent = /** @class */ (function () {
    function RunningbackTableComponent(playerService) {
        this.playerService = playerService;
        this.player = new _models_player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
        this.comment = new Comment();
    }
    RunningbackTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayer()
            .subscribe(function (data) {
            _this.player = data;
        });
        this.playerService.getPlayerGameLogs()
            .subscribe(function (data) {
            _this.gamelogs = data;
        });
    };
    RunningbackTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-runningback-table',
            template: __webpack_require__(/*! ./runningback-table.component.html */ "./src/app/runningback-table/runningback-table.component.html"),
            styles: [__webpack_require__(/*! ./runningback-table.component.css */ "./src/app/runningback-table/runningback-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_player_page_service__WEBPACK_IMPORTED_MODULE_2__["PlayerPageService"]])
    ], RunningbackTableComponent);
    return RunningbackTableComponent;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.baseUrl = '/api/admin';
    }
    AdminService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl, user);
    };
    AdminService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl + '/find');
    };
    AdminService.prototype.deleteUser = function (user) {
        return this.http.delete(this.baseUrl + '/delete/' + user.id);
    };
    AdminService.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + '/update/', user);
    };
    AdminService.prototype.getUser = function (username) {
        return this.http.get(this.baseUrl + '/find/' + username);
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/comment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.baseUrl = '/api/comment';
    }
    CommentService.prototype.getPlayerComments = function () {
        return this.http.get(this.baseUrl + '/player/find/' + this.firstName + '/' + this.lastName + '/');
    };
    CommentService.prototype.createComment = function (comment) {
        return this.http.post("" + (this.baseUrl + '/player/find/' + this.firstName + '/' + this.lastName + '/create'), comment);
    };
    CommentService.prototype.setPlayerName = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    CommentService.prototype.updateCommentLikes = function (comment) {
        return this.http.put("" + (this.baseUrl + '/player/update/' + this.firstName + '/' + this.lastName), comment);
    };
    CommentService.prototype.createReply = function (comment, replyFirst, replyLast) {
        return this.http.post("" + (this.baseUrl + '/player/find/' + replyFirst + '/' + replyLast + '/reply'), comment);
    };
    CommentService.prototype.getReplies = function (comment, firstName, lastName) {
        return this.http.post("" + (this.baseUrl + '/player/find/'
            + firstName + '/' + lastName + '/find-replies'), comment);
    };
    CommentService.prototype.getCommentsByUser = function (user) {
        return this.http.get(this.baseUrl + '/find/' + user + '/');
    };
    CommentService.prototype.deleteComment = function (comment) {
        return this.http.put("" + (this.baseUrl + '/delete'), comment);
    };
    CommentService.prototype.updateCommentContent = function (comment) {
        return this.http.put("" + (this.baseUrl + '/update/'), comment);
    };
    CommentService.prototype.getComments = function () {
        return this.http.get(this.baseUrl);
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/player-page.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/player-page.service.ts ***!
  \*************************************************/
/*! exports provided: PlayerPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageService", function() { return PlayerPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerPageService = /** @class */ (function () {
    function PlayerPageService(http) {
        this.http = http;
        this.baseUrl = '/api/player';
        this.otherBASE = '/api/comment/player/find/';
    }
    PlayerPageService.prototype.getPlayer = function () {
        if (this.firstName.length > 0) {
            return this.http.get(this.baseUrl + '/find/' + this.firstName + '/' + this.lastName);
        }
        else {
            this.setNames(this.firstName, this.lastName);
            return this.http.get(this.baseUrl + '/find/' + this.firstName + '/' + this.lastName);
        }
    };
    PlayerPageService.prototype.getPlayersByKeyword = function () {
        return this.http.get(this.baseUrl + '/find/' + this.keyword);
    };
    PlayerPageService.prototype.getPlayerGameLogs = function () {
        return this.http.get(this.baseUrl + '/log/' + this.firstName + '/' + this.lastName);
    };
    PlayerPageService.prototype.getPlayerComments = function () {
        return this.http.get(this.otherBASE + this.firstName + '/' + this.lastName + '/');
    };
    PlayerPageService.prototype.setOneName = function (keyword) {
        this.keyword = keyword;
    };
    PlayerPageService.prototype.setNames = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    PlayerPageService.prototype.addPlayerLike = function (firstName, lastName, player) {
        return this.http.put("" + (this.baseUrl + '/likes/update/' + firstName + '/' + lastName), player);
    };
    PlayerPageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlayerPageService);
    return PlayerPageService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.baseUrl = '/api/user/';
    }
    RegisterService.prototype.createUser = function (user) {
        return this.http.post("" + this.baseUrl, user);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/watchlist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/watchlist.service.ts ***!
  \***********************************************/
/*! exports provided: WatchlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistService", function() { return WatchlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WatchlistService = /** @class */ (function () {
    function WatchlistService(http) {
        this.http = http;
        this.baseUrl = '/api/';
    }
    WatchlistService.prototype.getPlayers = function (username) {
        return this.http.get(this.baseUrl + 'find/watchlist/' + username);
    };
    WatchlistService.prototype.addPlayerToWatchList = function (firstName, lastName, username) {
        return this.http.get(this.baseUrl + username + '/watchlist/add/player/find/' + firstName + '/' + lastName);
    };
    WatchlistService.prototype.deletePlayerFromWatchList = function (firstName, lastName) {
        return this.http.get(this.baseUrl + 'p/watchlist/delete/' + firstName + '/' + lastName);
    };
    WatchlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WatchlistService);
    return WatchlistService;
}());

// /api/{user}/watchlist/delete/{firstName}/{lastName}


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidaron/Desktop/finishedProject/5200Project/sportsWeather/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map