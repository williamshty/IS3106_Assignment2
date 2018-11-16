"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deactivateSeller = exports.activateSeller = exports.deactivateBuyer = exports.activateBuyer = exports.getAllSeller = exports.getAllBuyer = exports.adminLogin = undefined;

let adminLogin = exports.adminLogin = (() => {
  var _ref = _asyncToGenerator(function* (payload) {
    let resp = yield _axios2.default.put("/admin/login", payload);
    return resp;
  });

  return function adminLogin(_x) {
    return _ref.apply(this, arguments);
  };
})();

let getAllBuyer = exports.getAllBuyer = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    let resp = yield _axios2.default.get("/admin/buyer/all");
    return resp;
  });

  return function getAllBuyer() {
    return _ref2.apply(this, arguments);
  };
})();

let getAllSeller = exports.getAllSeller = (() => {
  var _ref3 = _asyncToGenerator(function* () {
    let resp = yield _axios2.default.get("/admin/seller/all");
    return resp;
  });

  return function getAllSeller() {
    return _ref3.apply(this, arguments);
  };
})();

let activateBuyer = exports.activateBuyer = (() => {
  var _ref4 = _asyncToGenerator(function* (id) {
    let resp = yield _axios2.default.put("/admin/buyer/activate/" + id);
    return resp;
  });

  return function activateBuyer(_x2) {
    return _ref4.apply(this, arguments);
  };
})();

let deactivateBuyer = exports.deactivateBuyer = (() => {
  var _ref5 = _asyncToGenerator(function* (id) {
    let resp = yield _axios2.default.put("/admin/buyer/deactivate/" + id);
    return resp;
  });

  return function deactivateBuyer(_x3) {
    return _ref5.apply(this, arguments);
  };
})();

let activateSeller = exports.activateSeller = (() => {
  var _ref6 = _asyncToGenerator(function* (id) {
    let resp = yield _axios2.default.put("/admin/seller/activate/" + id);
    return resp;
  });

  return function activateSeller(_x4) {
    return _ref6.apply(this, arguments);
  };
})();

let deactivateSeller = exports.deactivateSeller = (() => {
  var _ref7 = _asyncToGenerator(function* (id) {
    let resp = yield _axios2.default.put("/admin/seller/deactivate/" + id);
    return resp;
  });

  return function deactivateSeller(_x5) {
    return _ref7.apply(this, arguments);
  };
})();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const base_url = "http://localhost:8080/ECA-war/webresources/eca/";
_axios2.default.defaults.baseURL = base_url;
