"use strict";angular.module("testDafitiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$locationProvider","$httpProvider",function(a,b,c){a.when("/my-account",{templateUrl:"views/my-account.html",controller:"MyaccountCtrl",controllerAs:"account"}).when("/address-list",{templateUrl:"views/address-list.html",controller:"AddresslistCtrl",controllerAs:"address"}).when("/order-history",{templateUrl:"views/order-history.html",controller:"OrderhistoryCtrl",controllerAs:"history"}).when("/wishlist",{templateUrl:"views/wishlist.html",controller:"WishlistCtrl",controllerAs:"wishlist"}).otherwise({redirectTo:"/my-account"}),b.html5Mode(!0),b.hashPrefix("!"),c.defaults.withCredentials=!0}]),angular.module("testDafitiApp").controller("MyaccountCtrl",["ApiMethods","$routeParams","settings",function(a,b,c){var d=this,e={};e.userId=b.userId||1,d.detail={},d.viewEdit=!1,d.btnDisabled=!1,d.getAccount=function(){a.query({route:"myAccount",userId:e.userId},function(a){d.detail=a})},d.updateAccount=function(b){d.btnDisabled=!0;var f=c.normalizeDataMyAccount(b);a.update({route:"myAccount",update:e.userId},f,function(a){d.detail=a,d.viewEdit=!1,d.btnDisabled=!1})},d.init=function(){d.getAccount()},d.init()}]),angular.module("testDafitiApp").controller("AddresslistCtrl",["ApiMethods","settings",function(a,b){var c=this;c.detail=[],c.apiRoute="addressList",c.getAddress=function(){a.queryArray({route:c.apiRoute},function(a){c.detail=a})},c.updateAddress=function(d,e){var f=b.normalizeDataAdressList(d);a.update({route:c.apiRoute,update:e},f,function(a){c.getAddress()})},c.removeAddress=function(b){a.remove({route:c.apiRoute,"delete":b},function(a){c.getAddress()})},c.newAddress=function(d){var e=b.normalizeDataAdressList(d);a["new"]({route:c.apiRoute},e,function(a){c.getAddress()})},c.init=function(){c.getAddress()},c.init()}]),angular.module("testDafitiApp").controller("OrderhistoryCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("testDafitiApp").controller("WishlistCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("testDafitiApp").service("settings",function(){var a=this;a.listMenu=function(){return a.itensMenu=[{label:"Minha conta",link:"my-account"},{label:"Endereços de endrega",link:"address-list"},{label:"Histórico de pedido",link:"order-history"},{label:"Lista de desejos",link:"wishlist"}],a.itensMenu},a.normalizeDataMyAccount=function(a){var b={name:a.firstName.$modelValue,lastName:a.lastName.$modelValue,email:a.email.$modelValue};return b},a.normalizeDataAdressList=function(a){var b={fullName:a.fullName.$modelValue,address:a.addressItem.$modelValue,postalCode:a.postalCode.$modelValue};return b}}),angular.module("testDafitiApp").factory("ApiMethods",["$resource",function(a){return a("https://test-dafiti.herokuapp.com/:route/:delete/:update/:userId/",{},{query:{method:"GET",isArray:!1},queryArray:{method:"GET",isArray:!0},remove:{method:"DELETE","delete":"@delete"},update:{method:"PUT",uptade:"@update"},"new":{method:"POST"}})}]),angular.module("testDafitiApp").directive("menuleft",["settings","$location",function(a,b){var c={};return c.restrict="AE",c.transclude=!0,c.templateUrl="views/menu-left.html",c.scope={properties:"="},c.link=function(c){var d=c;d.$location=b,d.listMenu=a.listMenu()},c}]),angular.module("testDafitiApp").run(["$templateCache",function(a){a.put("views/address-list.html",'<div class="row"> <div class="col-md-3"> <menuleft></menuleft> </div> <div class="col-md-9"> <h5 class="title">lista de endereço <a data-toggle="modal" data-target="#modal-new">Cadastrar endereço</a></h5> <div ng-include="\'views/modal.html\'"></div> <div ng-repeat="item in address.detail"> <form name="formaddress" class="grid" novalidate> <div> <label ng-if="!labelEdit">{{item.fullName}}</label> <input type="text" class="form-control" name="fullName" ng-model="fullName" ng-init="fullName = item.fullName" ng-if="labelEdit"> </div> <div> <span ng-if="!labelEdit">{{item.address}}</span> <input type="text" class="form-control" name="addressItem" ng-model="addressItem" ng-init="addressItem = item.address" ng-if="labelEdit"> <p ng-if="!labelEdit"><label>CEP: </label> {{item.postalCode}}</p> <input type="text" class="form-control" name="postalCode" ng-model="postalCode" ng-init="postalCode = item.postalCode" ng-if="labelEdit"> </div> <div> <a class="btn btn-default" ng-model="labelEdit" ng-click="labelEdit = true" ng-hide="labelEdit">editar</a> <a class="btn btn-default" ng-click="address.removeAddress(item.id)" ng-hide="labelEdit">remover</a> <a class="btn btn-default" ng-click="address.updateAddress(formaddress, item.id)" ng-show="labelEdit">Salvar</a> <a class="btn btn-default" ng-click="labelEdit = false" ng-show="labelEdit">Cancelar</a> </div> </form> </div> </div> </div>'),a.put("views/menu-left.html",'<p>Olá, <strong>Fulano</strong></p> <div class="menu-left"> <ul> <li ng-repeat="item in listMenu"> <a href="{{item.link}}" ng-class="{ active: $location.path() == \'/{{item.link}}\'}">{{item.label}}</a> </li> </ul> </div>'),a.put("views/modal.html",'<div class="modal fade" id="modal-new" tabindex="-1" role="dialog" aria-labelledby="modal-new" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="modal-new">Novo endereço</h5> </div> <div class="modal-body"> <form name="form" novalidate> <div class="form-group"> <label>Nome Completo:</label> <input type="text" class="form-control" name="fullName" ng-model="fullName" ng-class="!form.fullName.$valid ? \'is-invalid\' : \'is-valid\'" required> <div ng-class="!form.fullName.$valid ? \'invalid-feedback\' : \'\'" ng-show="!form.fullName.$valid"> Este campo é obrigatório. </div> </div> <div class="form-group"> <label>Endereço:</label> <input type="text" class="form-control" name="addressItem" ng-model="addressItem" ng-class="!form.addressItem.$valid ? \'is-invalid\' : \'is-valid\'" required> <div ng-class="!form.addressItem.$valid ? \'invalid-feedback\' : \'\'" ng-show="!form.addressItem.$valid"> Este campo é obrigatório. </div> </div> <div class="form-group"> <label>CEP:</label> <input type="text" class="form-control" name="postalCode" ng-model="postalCode" ng-class="!form.postalCode.$valid ? \'is-invalid\' : \'is-valid\'" required> <div ng-class="!form.postalCode.$valid ? \'invalid-feedback\' : \'\'" ng-show="!form.postalCode.$valid"> Este campo é obrigatório. </div> </div> </form> </div> <div class="modal-footer"> <button class="btn btn-default" type="button" data-dismiss="modal">Cancelar</button> <button class="btn btn-default" ng-disabled="!form.fullName.$valid || !form.addressItem.$valid || !form.postalCode.$valid" type="button" data-dismiss="modal" ng-click="address.newAddress(form)">Cadastrar</button> </div> </div> </div> </div>'),a.put("views/my-account.html",'<div class="row"> <div class="col-md-3"> <menuleft properties="account.detail"></menuleft> </div> <div class="col-md-9"> <h5 class="title">Minha conta</h5> <form name="formAccount" novalidate> <div class="row"> <div class="information"> <div class="col-xs-3"> <label>Nome</label> </div> <div class="col-xs-9"> <span ng-if="!account.viewEdit">{{account.detail.name}}</span> <input type="text" class="form-control" name="firstName" ng-model="firstName" ng-init="firstName = account.detail.name" ng-if="account.viewEdit"> </div> </div> <div class="information"> <div class="col-xs-3"> <label>Sobrenome</label> </div> <div class="col-xs-9"> <span ng-if="!account.viewEdit">{{account.detail.lastName}}</span> <input type="text" class="form-control" name="lastName" ng-model="lastName" ng-init="lastName = account.detail.lastName" ng-if="account.viewEdit"> </div> </div> <div class="information"> <div class="col-xs-3"> <label>Email</label> </div> <div class="col-xs-9"> <span ng-if="!account.viewEdit">{{account.detail.email}}</span> <input type="text" class="form-control" name="email" ng-model="email" ng-init="email = account.detail.email" ng-if="account.viewEdit"> </div> </div> </div> <div class="row" ng-if="!account.viewEdit"> <div class="col-md-12 m-30"> <a class="btn btn-default" ng-click="account.viewEdit = true">Editar informações</a> </div> </div> <div class="row" ng-show="account.viewEdit"> <div class="col-md-12 m-30"> <a class="btn btn-default" ng-click="account.viewEdit = false" ng-disabled="account.btnDisabled">Cancelar</a> <a class="btn btn-default" ng-click="account.updateAccount(formAccount)" ng-disabled="account.btnDisabled">Confirmar</a> </div> </div> </form> </div> </div>'),a.put("views/order-history.html",'<div class="row"> <div class="col-md-3"> <menuleft></menuleft> </div> <div class="col-md-9"> <h5 class="title">historico de pedido</h5> </div> </div>'),a.put("views/wishlist.html",'<div class="row"> <div class="col-md-3"> <menuleft></menuleft> </div> <div class="col-md-9"> <h5 class="title">Lista de desejos</h5> </div> </div>')}]);