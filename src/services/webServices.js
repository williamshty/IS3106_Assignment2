"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminLogin = undefined;

let adminLogin = exports.adminLogin = (() => {
  var _ref = _asyncToGenerator(function* (payload) {
    let resp = yield _axios2.default.put("/admin/login", payload);
    return resp;
  });

  return function adminLogin(_x) {
    return _ref.apply(this, arguments);
  };
})();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const base_url = "http://localhost:8080/ECA-war/webresources/eca/";
_axios2.default.defaults.baseURL = base_url;
