"use strict";angular.module("testDafitiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$locationProvider","$httpProvider",function(a,b,c){a.when("/my-account",{templateUrl:"views/my-account.html",controller:"MyaccountCtrl",controllerAs:"account"}).when("/adrress-list",{templateUrl:"views/adrress-list.html",controller:"AddresslistCtrl",controllerAs:"adrress"}).when("/order-history",{templateUrl:"views/order-history.html",controller:"OrderhistoryCtrl",controllerAs:"history"}).when("/wishlist",{templateUrl:"views/wishlist.html",controller:"WishlistCtrl",controllerAs:"wishlist"}).otherwise({redirectTo:"/my-account"}),b.html5Mode(!0),b.hashPrefix("!"),c.defaults.withCredentials=!0}]),angular.module("testDafitiApp").service("settings",function(){var a=this;a.listMenu=function(){return a.itensMenu=[{label:"Minha conta",link:"my-account"},{label:"Endereços de endrega",link:"adrress-list"},{label:"Histórico de pedido",link:"order-history"},{label:"Lista de desejos",link:"wishlist"}],a.itensMenu},a.normalizeData=function(a){var b={name:a.firstName.$modelValue,lastName:a.lastName.$modelValue,email:a.email.$modelValue};return b}}),angular.module("testDafitiApp").factory("ApiMethods",["$resource",function(a){return a("https://test-dafiti.herokuapp.com/:route/:update/:userId",{},{query:{method:"GET",isArray:!1},remove:{method:"DELETE","delete":"@delete"},update:{method:"PUT",uptade:"@update"},"new":{method:"POST"}})}]),angular.module("testDafitiApp").directive("menuleft",["settings","$location",function(a,b){var c={};return c.restrict="AE",c.transclude=!0,c.templateUrl="views/menu-left.html",c.link=function(c){var d=c;d.$location=b,d.listMenu=a.listMenu()},c}]),angular.module("testDafitiApp").controller("MyaccountCtrl",["ApiMethods","$routeParams","settings",function(a,b,c){var d=this,e={};e.userId=b.userId||1,d.detail={},d.viewEdit=!1,d.btnDisabled=!1,d.getAccount=function(){a.query({route:"myAccount",userId:e.userId},function(a){d.detail=a})},d.updateAccount=function(b){d.btnDisabled=!0;var f=c.normalizeData(b);a.update({route:"myAccount",update:e.userId},f,function(a){d.detail=a,d.viewEdit=!1,d.btnDisabled=!1})},d.init=function(){d.getAccount()},d.init()}]),angular.module("testDafitiApp").controller("AddresslistCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("testDafitiApp").controller("OrderhistoryCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("testDafitiApp").controller("WishlistCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("testDafitiApp").run(["$templateCache",function(a){a.put("views/adrress-list.html",'<div class="row"> <div class="col-md-3"> <menuleft></menuleft> </div> <div class="col-md-9"> <h5 class="title">lista de endereço</h5> </div> </div>'),a.put("views/menu-left.html",'<p>Olá, <strong>fulano</strong></p> <div class="menu-left"> <ul> <li ng-repeat="item in listMenu"> <a href="{{item.link}}" ng-class="{ active: $location.path() == \'/{{item.link}}\'}">{{item.label}}</a> </li> </ul> </div>'),a.put("views/my-account.html",'<div class="row"> <div class="col-md-3"> <menuleft></menuleft> </div> <div class="col-md-9"> <h5 class="title">Minha conta</h5> <form name="formAccount" novalidate> <div class="row"> <div class="information"> <div class="col-xs-3"> <label>Nome</label> </div> <div class="col-xs-9"> <span ng-if="!account.viewEdit">{{account.detail.name}}</span> <input type="text" class="form-control" name="firstName" ng-model="firstName" ng-init="firstName = account.detail.name" ng-if="account.viewEdit"> </div> </div> <div class="information"> <div class="col-xs-3"> <label>Sobrenome</label> </div> <div class="col-xs-9"> <span ng-if="!account.viewEdit">{{account.detail.lastName}}</span> <input type="text" class="form-control" name="lastName" ng-model="lastName" ng-init="lastName = account.detail.lastName" ng-if="account.viewEdit"> </div> </div> <div class="information"> <div class="col-xs-3"> <label>Email</label> </div> <div class="col-xs-9"> <span ng-if="!account.viewEdit">{{account.detail.email}}</span> <input type="text" class="form-control" name="email" ng-model="email" ng-init="email = account.detail.email" ng-if="account.viewEdit"> </div> </div> </div> <div class="row" ng-if="!account.viewEdit"> <div class="col-md-12 m-30"> <a class="btn btn-default" ng-click="account.viewEdit = true">Editar informações</a> </div> </div> <div class="row" ng-show="account.viewEdit"> <div class="col-md-12 m-30"> <a class="btn btn-default" ng-click="account.viewEdit = false" ng-disabled="account.btnDisabled">Cancelar</a> <a class="btn btn-default" ng-click="account.updateAccount(formAccount)" ng-disabled="account.btnDisabled">Confirmar</a> </div> </div> </form> </div> </div>'),a.put("views/order-history.html",'<div class="row"> <div class="col-md-3"> <menuleft></menuleft> </div> <div class="col-md-9"> <h5 class="title">historico de pedido</h5> </div> </div>'),a.put("views/wishlist.html",'<div class="row"> <div class="col-md-3"> <menuleft></menuleft> </div> <div class="col-md-9"> <h5 class="title">Lista de desejos</h5> </div> </div>')}]);