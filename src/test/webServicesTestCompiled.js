"use strict";

//************* */
//ADMIN
//************* */
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
})(); // activateSellerFunc(201);


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
//************* */
//SELLER
//************* */


let sellerRegisterFunc = (() => {
  var _ref8 = _asyncToGenerator(function* (payload) {
    const sellerRegisterResp = yield (0, _webServices.sellerRegister)(payload);
    console.log("sellerRegister Status Code: " + sellerRegisterResp.status);
    console.log("sellerRegister Data: " + JSON.stringify(sellerRegisterResp.data));
  });

  return function sellerRegisterFunc(_x6) {
    return _ref8.apply(this, arguments);
  };
})(); // sellerRegisterFunc({
//   username: "sellerABC",
//   password: "sellerABC",
//   name: "STYSTYSTYTIMEABC",
//   gender: 1
// });


let sellerLoginFunc = (() => {
  var _ref9 = _asyncToGenerator(function* (payload) {
    const sellerLoginResp = yield (0, _webServices.sellerLogin)(payload);
    console.log("sellerLogin Status Code: " + sellerLoginResp.status);
    console.log("sellerLogin Data: " + JSON.stringify(sellerLoginResp.data));
  });

  return function sellerLoginFunc(_x7) {
    return _ref9.apply(this, arguments);
  };
})(); // sellerLoginFunc({
//   username: "sellerABC",
//   password: "sellerABC"
// });


let sellerUpdateProfileFunc = (() => {
  var _ref10 = _asyncToGenerator(function* (payload) {
    const sellerUpdateProfileResp = yield (0, _webServices.sellerUpdateProfile)(payload);
    console.log("sellerUpdateProfile Status Code: " + sellerUpdateProfileResp.status);
    console.log("sellerUpdateProfile Data: " + JSON.stringify(sellerUpdateProfileResp.data));
  });

  return function sellerUpdateProfileFunc(_x8) {
    return _ref10.apply(this, arguments);
  };
})(); // sellerUpdateProfileFunc({
//   sellerID: 201,
//   sellerName: "STYSTYHELLO",
//   sellerGender: 1
// });


let sellerAddItemFunc = (() => {
  var _ref11 = _asyncToGenerator(function* (payload) {
    const sellerAddItemResp = yield (0, _webServices.sellerAddItem)(payload);
    console.log("sellerAddItem Status Code: " + sellerAddItemResp.status);
    console.log("sellerAddItem Data: " + JSON.stringify(sellerAddItemResp.data));
  });

  return function sellerAddItemFunc(_x9) {
    return _ref11.apply(this, arguments);
  };
})(); // sellerAddItemFunc({
//   sellerID: 201,
//   item: {
//     name: "from axios ABC",
//     description: "tes22t ABC from axios",
//     category: "axios",
//     price: 10,
//     quantity: 100
//   }
// });


let sellerEditItemFunc = (() => {
  var _ref12 = _asyncToGenerator(function* (payload) {
    const sellerEditItemResp = yield (0, _webServices.sellerEditItem)(payload);
    console.log("sellerEditItem Status Code: " + sellerEditItemResp.status);
    console.log("sellerEditItem Data: " + JSON.stringify(sellerEditItemResp.data));
  });

  return function sellerEditItemFunc(_x10) {
    return _ref12.apply(this, arguments);
  };
})(); // sellerEditItemFunc({
//   id: 802,
//   name: "from axios ABC",
//   description: "tes22t ABC from axios",
//   category: "axiosABC",
//   price: 10,
//   quantity: 1020
// });


let sellerDeleteItemFunc = (() => {
  var _ref13 = _asyncToGenerator(function* (itemID) {
    const sellerDeleteItemResp = yield (0, _webServices.sellerDeleteItem)(itemID);
    console.log("sellerDeleteItem Status Code: " + sellerDeleteItemResp.status);
    console.log("sellerDeleteItem Data: " + JSON.stringify(sellerDeleteItemResp.data));
  });

  return function sellerDeleteItemFunc(_x11) {
    return _ref13.apply(this, arguments);
  };
})(); // sellerDeleteItemFunc(802);


let sellerGetAllItemFunc = (() => {
  var _ref14 = _asyncToGenerator(function* (sellerID) {
    const sellerGetAllItemResp = yield (0, _webServices.sellerGetAllItem)(sellerID);
    console.log("sellerGetAllItem Status Code: " + sellerGetAllItemResp.status);
    console.log("sellerGetAllItem Data: " + JSON.stringify(sellerGetAllItemResp.data));
  });

  return function sellerGetAllItemFunc(_x12) {
    return _ref14.apply(this, arguments);
  };
})(); // sellerGetAllItemFunc(201);


let sellerSearchItemByKeyFunc = (() => {
  var _ref15 = _asyncToGenerator(function* (payload) {
    const sellerSearchItemByKeyResp = yield (0, _webServices.sellerSearchItemByKey)(payload);
    console.log("sellerSearchItemByKey Status Code: " + sellerSearchItemByKeyResp.status);
    console.log("sellerSearchItemByKey Data: " + JSON.stringify(sellerSearchItemByKeyResp.data));
  });

  return function sellerSearchItemByKeyFunc(_x13) {
    return _ref15.apply(this, arguments);
  };
})(); // sellerSearchItemByKeyFunc({
//   sellerID: 201,
//   keyword: "o"
// });


let sellerGetAllOrderFunc = (() => {
  var _ref16 = _asyncToGenerator(function* (sellerID) {
    const sellerGetAllOrderResp = yield (0, _webServices.sellerGetAllOrder)(sellerID);
    console.log("sellerGetAllOrder Status Code: " + sellerGetAllOrderResp.status);
    console.log("sellerGetAllOrder Data: " + JSON.stringify(sellerGetAllOrderResp.data));
  });

  return function sellerGetAllOrderFunc(_x14) {
    return _ref16.apply(this, arguments);
  };
})(); // sellerGetAllOrderFunc(201);


let sellerUpdateOrderStatusFunc = (() => {
  var _ref17 = _asyncToGenerator(function* (payload) {
    const sellerUpdateOrderStatusResp = yield (0, _webServices.sellerUpdateOrderStatus)(payload);
    console.log("sellerUpdateOrderStatus Status Code: " + sellerUpdateOrderStatusResp.status);
    console.log("sellerUpdateOrderStatus Data: " + JSON.stringify(sellerUpdateOrderStatusResp.data));
  });

  return function sellerUpdateOrderStatusFunc(_x15) {
    return _ref17.apply(this, arguments);
  };
})(); // sellerUpdateOrderStatusFunc({
//   orderID: 260,
//   newStatus: "STYSTYHELLO"
// });
//************* */
//BUYER
//************* */


let buyerRegisterFunc = (() => {
  var _ref18 = _asyncToGenerator(function* (payload) {
    const buyerRegisterResp = yield (0, _webServices.buyerRegister)(payload);
    console.log("buyerRegister Status Code: " + buyerRegisterResp.status);
    console.log("buyerRegister Data: " + JSON.stringify(buyerRegisterResp.data));
  });

  return function buyerRegisterFunc(_x16) {
    return _ref18.apply(this, arguments);
  };
})(); // buyerRegisterFunc({
//   username: "buyerABC",
//   password: "buyerABC",
//   name: "STYSTYSTYTIMEABC",
//   gender: 1
// });


let buyerLoginFunc = (() => {
  var _ref19 = _asyncToGenerator(function* (payload) {
    const buyerLoginResp = yield (0, _webServices.buyerLogin)(payload);
    console.log("buyerLogin Status Code: " + buyerLoginResp.status);
    console.log("buyerLogin Data: " + JSON.stringify(buyerLoginResp.data));
  });

  return function buyerLoginFunc(_x17) {
    return _ref19.apply(this, arguments);
  };
})(); // buyerLoginFunc({
//   username: "buyerABC",
//   password: "buyerABC"
// });


let buyerUpdateProfileFunc = (() => {
  var _ref20 = _asyncToGenerator(function* (payload) {
    const buyerUpdateProfileResp = yield (0, _webServices.buyerUpdateProfile)(payload);
    console.log("buyerUpdateProfile Status Code: " + buyerUpdateProfileResp.status);
    console.log("buyerUpdateProfile Data: " + JSON.stringify(buyerUpdateProfileResp.data));
  });

  return function buyerUpdateProfileFunc(_x18) {
    return _ref20.apply(this, arguments);
  };
})(); // buyerUpdateProfileFunc({
//   buyerID: 101,
//   buyerName: "STYSTYHELLO",
//   buyerGender: 1
// });


let buyerGetAllItemFunc = (() => {
  var _ref21 = _asyncToGenerator(function* () {
    const buyerGetAllItemResp = yield (0, _webServices.buyerGetAllItem)();
    console.log("buyerGetAllItem Status Code: " + buyerGetAllItemResp.status);
    console.log("buyerGetAllItem Data: " + JSON.stringify(buyerGetAllItemResp.data));
  });

  return function buyerGetAllItemFunc() {
    return _ref21.apply(this, arguments);
  };
})(); // buyerGetAllItemFunc();


let buyerSearchItemFunc = (() => {
  var _ref22 = _asyncToGenerator(function* (payload) {
    const buyerSearchItemResp = yield (0, _webServices.buyerSearchItem)(payload);
    console.log("buyerSearchItem Status Code: " + buyerSearchItemResp.status);
    console.log("buyerSearchItem Data: " + JSON.stringify(buyerSearchItemResp.data));
  });

  return function buyerSearchItemFunc(_x19) {
    return _ref22.apply(this, arguments);
  };
})(); // buyerSearchItemFunc({
//   type: "quantity",
//   key: 100
// });
// buyerSearchItemFunc({
//   type: "keyword",
//   key: "o"
// });
// buyerSearchItemFunc({
//   type: "category",
//   key: "this"
// });


let buyerGetAllOrderFunc = (() => {
  var _ref23 = _asyncToGenerator(function* (buyerID) {
    const buyerGetAllOrderResp = yield (0, _webServices.buyerGetAllOrder)(buyerID);
    console.log("buyerGetAllOrder Status Code: " + buyerGetAllOrderResp.status);
    console.log("buyerGetAllOrder Data: " + JSON.stringify(buyerGetAllOrderResp.data));
  });

  return function buyerGetAllOrderFunc(_x20) {
    return _ref23.apply(this, arguments);
  };
})(); // buyerGetAllOrderFunc(101);


let buyerCreateOrderFunc = (() => {
  var _ref24 = _asyncToGenerator(function* (payload) {
    const buyerCreateOrderResp = yield (0, _webServices.buyerCreateOrder)(payload);
    console.log("buyerCreateOrder Status Code: " + buyerCreateOrderResp.status);
    console.log("buyerCreateOrder Data: " + JSON.stringify(buyerCreateOrderResp.data));
  });

  return function buyerCreateOrderFunc(_x21) {
    return _ref24.apply(this, arguments);
  };
})();

var _webServices = require("../services/webServices");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

buyerCreateOrderFunc({
  itemID: 552,
  sellerID: 201,
  buyerID: 101
});
