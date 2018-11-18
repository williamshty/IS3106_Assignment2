"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buyerCreateOrder = exports.buyerEditOrder = exports.buyerGetAllOrder = exports.buyerSearchItem = exports.buyerGetAllItem = exports.buyerUpdateProfile = exports.buyerLogin = exports.buyerRegister = exports.sellerUpdateOrderStatus = exports.sellerGetAllOrder = exports.sellerSearchItemByKey = exports.sellerGetAllItem = exports.sellerDeleteItem = exports.sellerEditItem = exports.sellerAddItem = exports.sellerUpdateProfile = exports.sellerLogin = exports.sellerRegister = exports.deactivateSeller = exports.activateSeller = exports.deactivateBuyer = exports.activateBuyer = exports.getAllSeller = exports.getAllBuyer = exports.adminLogin = undefined;

//************* */
//ADMIN
//************* */
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
})(); //************* */
//SELLER
//************* */


let sellerRegister = exports.sellerRegister = (() => {
  var _ref8 = _asyncToGenerator(function* (payload) {
    let resp = yield _axios2.default.post("/seller/register", payload);
    return resp;
  });

  return function sellerRegister(_x6) {
    return _ref8.apply(this, arguments);
  };
})();

let sellerLogin = exports.sellerLogin = (() => {
  var _ref9 = _asyncToGenerator(function* (payload) {
    let resp = yield _axios2.default.put("/seller/login", payload);
    return resp;
  });

  return function sellerLogin(_x7) {
    return _ref9.apply(this, arguments);
  };
})();

let sellerUpdateProfile = exports.sellerUpdateProfile = (() => {
  var _ref10 = _asyncToGenerator(function* (payload) {
    const {
      sellerID,
      sellerName,
      sellerGender
    } = payload;
    let resp = yield _axios2.default.put(`/seller/profile/${sellerID}/${sellerName}/${sellerGender}`);
    return resp;
  });

  return function sellerUpdateProfile(_x8) {
    return _ref10.apply(this, arguments);
  };
})();

let sellerAddItem = exports.sellerAddItem = (() => {
  var _ref11 = _asyncToGenerator(function* (payload) {
    const {
      sellerID,
      item
    } = payload;
    let resp = yield _axios2.default.put("/seller/item/add/" + sellerID, item);
    return resp;
  });

  return function sellerAddItem(_x9) {
    return _ref11.apply(this, arguments);
  };
})();

let sellerEditItem = exports.sellerEditItem = (() => {
  var _ref12 = _asyncToGenerator(function* (payload) {
    let resp = yield _axios2.default.put("/seller/item/edit", payload);
    return resp;
  });

  return function sellerEditItem(_x10) {
    return _ref12.apply(this, arguments);
  };
})();

let sellerDeleteItem = exports.sellerDeleteItem = (() => {
  var _ref13 = _asyncToGenerator(function* (itemID) {
    let resp = yield _axios2.default.put("/seller/item/delete/" + itemID);
    return resp;
  });

  return function sellerDeleteItem(_x11) {
    return _ref13.apply(this, arguments);
  };
})();

let sellerGetAllItem = exports.sellerGetAllItem = (() => {
  var _ref14 = _asyncToGenerator(function* (sellerID) {
    let resp = yield _axios2.default.get(`/seller/item/all/${sellerID}`);
    return resp;
  });

  return function sellerGetAllItem(_x12) {
    return _ref14.apply(this, arguments);
  };
})();

let sellerSearchItemByKey = exports.sellerSearchItemByKey = (() => {
  var _ref15 = _asyncToGenerator(function* (payload) {
    const {
      keyword,
      sellerID
    } = payload;
    let resp = yield _axios2.default.get(`seller/item/search/${sellerID}/${keyword}`);
    return resp;
  });

  return function sellerSearchItemByKey(_x13) {
    return _ref15.apply(this, arguments);
  };
})();

let sellerGetAllOrder = exports.sellerGetAllOrder = (() => {
  var _ref16 = _asyncToGenerator(function* (sellerID) {
    let resp = yield _axios2.default.get("/seller/order/all/" + sellerID);
    return resp;
  });

  return function sellerGetAllOrder(_x14) {
    return _ref16.apply(this, arguments);
  };
})();

let sellerUpdateOrderStatus = exports.sellerUpdateOrderStatus = (() => {
  var _ref17 = _asyncToGenerator(function* (payload) {
    const {
      orderID,
      newStatus
    } = payload;
    let resp = yield _axios2.default.put(`/seller/order/edit/${orderID}/${newStatus}`);
    return resp;
  });

  return function sellerUpdateOrderStatus(_x15) {
    return _ref17.apply(this, arguments);
  };
})(); //************* */
//BUYER
//************* */


let buyerRegister = exports.buyerRegister = (() => {
  var _ref18 = _asyncToGenerator(function* (payload) {
    let resp = yield _axios2.default.post("/buyer/register", payload);
    return resp;
  });

  return function buyerRegister(_x16) {
    return _ref18.apply(this, arguments);
  };
})();

let buyerLogin = exports.buyerLogin = (() => {
  var _ref19 = _asyncToGenerator(function* (payload) {
    let resp = yield _axios2.default.put("/buyer/login", payload);
    return resp;
  });

  return function buyerLogin(_x17) {
    return _ref19.apply(this, arguments);
  };
})();

let buyerUpdateProfile = exports.buyerUpdateProfile = (() => {
  var _ref20 = _asyncToGenerator(function* (payload) {
    const {
      buyerID,
      buyerName,
      buyerGender
    } = payload;
    let resp = yield _axios2.default.put(`/buyer/profile/${buyerID}/${buyerName}/${buyerGender}`);
    return resp;
  });

  return function buyerUpdateProfile(_x18) {
    return _ref20.apply(this, arguments);
  };
})();

let buyerGetAllItem = exports.buyerGetAllItem = (() => {
  var _ref21 = _asyncToGenerator(function* () {
    let resp = yield _axios2.default.get(`/buyer/item/all`);
    return resp;
  });

  return function buyerGetAllItem() {
    return _ref21.apply(this, arguments);
  };
})();

let buyerSearchItem = exports.buyerSearchItem = (() => {
  var _ref22 = _asyncToGenerator(function* (payload) {
    const {
      type,
      key
    } = payload;
    let resp = yield _axios2.default.get(`/buyer/item/search/${type}/${key}`);
    return resp;
  });

  return function buyerSearchItem(_x19) {
    return _ref22.apply(this, arguments);
  };
})();

let buyerGetAllOrder = exports.buyerGetAllOrder = (() => {
  var _ref23 = _asyncToGenerator(function* (buyerID) {
    let resp = yield _axios2.default.get("/buyer/order/all/" + buyerID);
    return resp;
  });

  return function buyerGetAllOrder(_x20) {
    return _ref23.apply(this, arguments);
  };
})();

let buyerEditOrder = exports.buyerEditOrder = (() => {
  var _ref24 = _asyncToGenerator(function* (payload) {
    const {
      orderID,
      rating,
      review
    } = payload;
    let resp = yield _axios2.default.put(`/buyer/order/edit/${orderID}/${rating}/${review}`);
    return resp;
  });

  return function buyerEditOrder(_x21) {
    return _ref24.apply(this, arguments);
  };
})();

let buyerCreateOrder = exports.buyerCreateOrder = (() => {
  var _ref25 = _asyncToGenerator(function* (payload) {
    const {
      itemID,
      sellerID,
      buyerID
    } = payload;
    let resp = yield _axios2.default.put(`/buyer/order/create/${itemID}/${sellerID}/${buyerID}`);
    return resp;
  });

  return function buyerCreateOrder(_x22) {
    return _ref25.apply(this, arguments);
  };
})();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const base_url = "http://localhost:8080/ECA-war/webresources/eca/";
_axios2.default.defaults.baseURL = base_url;
