"use strict";

let adminLoginFunc = (() => {
  var _ref = _asyncToGenerator(function* (payload) {
    const adminLoginResp = yield (0, _webServices.adminLogin)(payload);
    console.log("adminLogin Status Code: " + adminLoginResp.status);
    console.log("adminLogin Data: " + JSON.stringify(adminLoginResp.data));
  });

  return function adminLoginFunc(_x) {
    return _ref.apply(this, arguments);
  };
})(); // adminLoginFunc({
//   username: "admin",
//   password: "admin"
// });


let getAllBuyerFunc = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    const getAllBuyerResp = yield (0, _webServices.getAllBuyer)();
    console.log("getAllBuyer Status Code: " + getAllBuyerResp.status);
    console.log("getAllBuyer Data: " + JSON.stringify(getAllBuyerResp.data));
  });

  return function getAllBuyerFunc() {
    return _ref2.apply(this, arguments);
  };
})(); // getAllBuyerFunc();


let getAllSellerFunc = (() => {
  var _ref3 = _asyncToGenerator(function* () {
    const getAllSellerResp = yield (0, _webServices.getAllSeller)();
    console.log("getAllSeller Status Code: " + getAllSellerResp.status);
    console.log("getAllSeller Data: " + JSON.stringify(getAllSellerResp.data));
  });

  return function getAllSellerFunc() {
    return _ref3.apply(this, arguments);
  };
})(); // getAllSellerFunc();


let activateBuyerFunc = (() => {
  var _ref4 = _asyncToGenerator(function* (id) {
    const activateBuyerResp = yield (0, _webServices.activateBuyer)(id);
    console.log("activateBuyer Status Code: " + activateBuyerResp.status);
    console.log("activateBuyer Data: " + JSON.stringify(activateBuyerResp.data));
  });

  return function activateBuyerFunc(_x2) {
    return _ref4.apply(this, arguments);
  };
})(); // activateBuyerFunc(101);


let deactivateBuyerFunc = (() => {
  var _ref5 = _asyncToGenerator(function* (id) {
    const deactivateBuyerResp = yield (0, _webServices.deactivateBuyer)(id);
    console.log("deactivateBuyer Status Code: " + deactivateBuyerResp.status);
    console.log("deactivateBuyer Data: " + JSON.stringify(deactivateBuyerResp.data));
  });

  return function deactivateBuyerFunc(_x3) {
    return _ref5.apply(this, arguments);
  };
})(); // deactivateBuyerFunc(101);


let activateSellerFunc = (() => {
  var _ref6 = _asyncToGenerator(function* (id) {
    const activateSellerResp = yield (0, _webServices.activateSeller)(id);
    console.log("activateSeller Status Code: " + activateSellerResp.status);
    console.log("activateSeller Data: " + JSON.stringify(activateSellerResp.data));
  });

  return function activateSellerFunc(_x4) {
    return _ref6.apply(this, arguments);
  };
})();

let deactivateSellerFunc = (() => {
  var _ref7 = _asyncToGenerator(function* (id) {
    const deactivateSellerResp = yield (0, _webServices.deactivateSeller)(id);
    console.log("deactivateSeller Status Code: " + deactivateSellerResp.status);
    console.log("deactivateSeller Data: " + JSON.stringify(deactivateSellerResp.data));
  });

  return function deactivateSellerFunc(_x5) {
    return _ref7.apply(this, arguments);
  };
})(); // deactivateSellerFunc(201);


var _webServices = require("../services/webServices");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

activateSellerFunc(201);
