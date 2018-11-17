import {
  adminLogin,
  getAllBuyer,
  getAllSeller,
  activateBuyer,
  deactivateBuyer,
  activateSeller,
  deactivateSeller,
  sellerRegister,
  sellerLogin,
  sellerUpdateProfile,
  sellerAddItem,
  sellerEditItem,
  sellerDeleteItem,
  sellerGetAllItem,
  sellerSearchItemByKey,
  sellerGetAllOrder,
  sellerUpdateOrderStatus,
  buyerRegister,
  buyerLogin,
  buyerUpdateProfile,
  buyerGetAllItem,
  buyerSearchItem,
  buyerGetAllOrder,
  buyerCreateOrder
} from "../services/webServices";

//************* */
//ADMIN
//************* */

async function adminLoginFunc(payload) {
  const adminLoginResp = await adminLogin(payload);
  console.log("adminLogin Status Code: " + adminLoginResp.status);
  console.log("adminLogin Data: " + JSON.stringify(adminLoginResp.data));
}

// adminLoginFunc({
//   username: "admin",
//   password: "admin"
// });

async function getAllBuyerFunc() {
  const getAllBuyerResp = await getAllBuyer();
  console.log("getAllBuyer Status Code: " + getAllBuyerResp.status);
  console.log("getAllBuyer Data: " + JSON.stringify(getAllBuyerResp.data));
}

// getAllBuyerFunc();

async function getAllSellerFunc() {
  const getAllSellerResp = await getAllSeller();
  console.log("getAllSeller Status Code: " + getAllSellerResp.status);
  console.log("getAllSeller Data: " + JSON.stringify(getAllSellerResp.data));
}

// getAllSellerFunc();

async function activateBuyerFunc(id) {
  const activateBuyerResp = await activateBuyer(id);
  console.log("activateBuyer Status Code: " + activateBuyerResp.status);
  console.log("activateBuyer Data: " + JSON.stringify(activateBuyerResp.data));
}

// activateBuyerFunc(101);

async function deactivateBuyerFunc(id) {
  const deactivateBuyerResp = await deactivateBuyer(id);
  console.log("deactivateBuyer Status Code: " + deactivateBuyerResp.status);
  console.log(
    "deactivateBuyer Data: " + JSON.stringify(deactivateBuyerResp.data)
  );
}

// deactivateBuyerFunc(101);

async function activateSellerFunc(id) {
  const activateSellerResp = await activateSeller(id);
  console.log("activateSeller Status Code: " + activateSellerResp.status);
  console.log(
    "activateSeller Data: " + JSON.stringify(activateSellerResp.data)
  );
}

// activateSellerFunc(201);

async function deactivateSellerFunc(id) {
  const deactivateSellerResp = await deactivateSeller(id);
  console.log("deactivateSeller Status Code: " + deactivateSellerResp.status);
  console.log(
    "deactivateSeller Data: " + JSON.stringify(deactivateSellerResp.data)
  );
}

// deactivateSellerFunc(201);

//************* */
//SELLER
//************* */

async function sellerRegisterFunc(payload) {
  const sellerRegisterResp = await sellerRegister(payload);
  console.log("sellerRegister Status Code: " + sellerRegisterResp.status);
  console.log(
    "sellerRegister Data: " + JSON.stringify(sellerRegisterResp.data)
  );
}

// sellerRegisterFunc({
//   username: "sellerABC",
//   password: "sellerABC",
//   name: "STYSTYSTYTIMEABC",
//   gender: 1
// });

async function sellerLoginFunc(payload) {
  const sellerLoginResp = await sellerLogin(payload);
  console.log("sellerLogin Status Code: " + sellerLoginResp.status);
  console.log("sellerLogin Data: " + JSON.stringify(sellerLoginResp.data));
}

// sellerLoginFunc({
//   username: "sellerABC",
//   password: "sellerABC"
// });

async function sellerUpdateProfileFunc(payload) {
  const sellerUpdateProfileResp = await sellerUpdateProfile(payload);
  console.log(
    "sellerUpdateProfile Status Code: " + sellerUpdateProfileResp.status
  );
  console.log(
    "sellerUpdateProfile Data: " + JSON.stringify(sellerUpdateProfileResp.data)
  );
}

// sellerUpdateProfileFunc({
//   sellerID: 201,
//   sellerName: "STYSTYHELLO",
//   sellerGender: 1
// });

async function sellerAddItemFunc(payload) {
  const sellerAddItemResp = await sellerAddItem(payload);
  console.log("sellerAddItem Status Code: " + sellerAddItemResp.status);
  console.log("sellerAddItem Data: " + JSON.stringify(sellerAddItemResp.data));
}

// sellerAddItemFunc({
//   sellerID: 201,
//   item: {
//     name: "from axios ABC",
//     description: "tes22t ABC from axios",
//     category: "axios",
//     price: 10,
//     quantity: 100
//   }
// });

async function sellerEditItemFunc(payload) {
  const sellerEditItemResp = await sellerEditItem(payload);
  console.log("sellerEditItem Status Code: " + sellerEditItemResp.status);
  console.log(
    "sellerEditItem Data: " + JSON.stringify(sellerEditItemResp.data)
  );
}

// sellerEditItemFunc({
//   id: 802,
//   name: "from axios ABC",
//   description: "tes22t ABC from axios",
//   category: "axiosABC",
//   price: 10,
//   quantity: 1020
// });

async function sellerDeleteItemFunc(itemID) {
  const sellerDeleteItemResp = await sellerDeleteItem(itemID);
  console.log("sellerDeleteItem Status Code: " + sellerDeleteItemResp.status);
  console.log(
    "sellerDeleteItem Data: " + JSON.stringify(sellerDeleteItemResp.data)
  );
}

// sellerDeleteItemFunc(802);

async function sellerGetAllItemFunc(sellerID) {
  const sellerGetAllItemResp = await sellerGetAllItem(sellerID);
  console.log("sellerGetAllItem Status Code: " + sellerGetAllItemResp.status);
  console.log(
    "sellerGetAllItem Data: " + JSON.stringify(sellerGetAllItemResp.data)
  );
}

// sellerGetAllItemFunc(201);

async function sellerSearchItemByKeyFunc(payload) {
  const sellerSearchItemByKeyResp = await sellerSearchItemByKey(payload);
  console.log(
    "sellerSearchItemByKey Status Code: " + sellerSearchItemByKeyResp.status
  );
  console.log(
    "sellerSearchItemByKey Data: " +
      JSON.stringify(sellerSearchItemByKeyResp.data)
  );
}

// sellerSearchItemByKeyFunc({
//   sellerID: 201,
//   keyword: "o"
// });

async function sellerGetAllOrderFunc(sellerID) {
  const sellerGetAllOrderResp = await sellerGetAllOrder(sellerID);
  console.log("sellerGetAllOrder Status Code: " + sellerGetAllOrderResp.status);
  console.log(
    "sellerGetAllOrder Data: " + JSON.stringify(sellerGetAllOrderResp.data)
  );
}

// sellerGetAllOrderFunc(201);

async function sellerUpdateOrderStatusFunc(payload) {
  const sellerUpdateOrderStatusResp = await sellerUpdateOrderStatus(payload);
  console.log(
    "sellerUpdateOrderStatus Status Code: " + sellerUpdateOrderStatusResp.status
  );
  console.log(
    "sellerUpdateOrderStatus Data: " +
      JSON.stringify(sellerUpdateOrderStatusResp.data)
  );
}

// sellerUpdateOrderStatusFunc({
//   orderID: 260,
//   newStatus: "STYSTYHELLO"
// });

//************* */
//BUYER
//************* */

async function buyerRegisterFunc(payload) {
  const buyerRegisterResp = await buyerRegister(payload);
  console.log("buyerRegister Status Code: " + buyerRegisterResp.status);
  console.log("buyerRegister Data: " + JSON.stringify(buyerRegisterResp.data));
}

// buyerRegisterFunc({
//   username: "buyerABC",
//   password: "buyerABC",
//   name: "STYSTYSTYTIMEABC",
//   gender: 1
// });

async function buyerLoginFunc(payload) {
  const buyerLoginResp = await buyerLogin(payload);
  console.log("buyerLogin Status Code: " + buyerLoginResp.status);
  console.log("buyerLogin Data: " + JSON.stringify(buyerLoginResp.data));
}

// buyerLoginFunc({
//   username: "buyerABC",
//   password: "buyerABC"
// });

async function buyerUpdateProfileFunc(payload) {
  const buyerUpdateProfileResp = await buyerUpdateProfile(payload);
  console.log(
    "buyerUpdateProfile Status Code: " + buyerUpdateProfileResp.status
  );
  console.log(
    "buyerUpdateProfile Data: " + JSON.stringify(buyerUpdateProfileResp.data)
  );
}

// buyerUpdateProfileFunc({
//   buyerID: 101,
//   buyerName: "STYSTYHELLO",
//   buyerGender: 1
// });

async function buyerGetAllItemFunc() {
  const buyerGetAllItemResp = await buyerGetAllItem();
  console.log("buyerGetAllItem Status Code: " + buyerGetAllItemResp.status);
  console.log(
    "buyerGetAllItem Data: " + JSON.stringify(buyerGetAllItemResp.data)
  );
}

// buyerGetAllItemFunc();

async function buyerSearchItemFunc(payload) {
  const buyerSearchItemResp = await buyerSearchItem(payload);
  console.log("buyerSearchItem Status Code: " + buyerSearchItemResp.status);
  console.log(
    "buyerSearchItem Data: " + JSON.stringify(buyerSearchItemResp.data)
  );
}

// buyerSearchItemFunc({
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

async function buyerGetAllOrderFunc(buyerID) {
  const buyerGetAllOrderResp = await buyerGetAllOrder(buyerID);
  console.log("buyerGetAllOrder Status Code: " + buyerGetAllOrderResp.status);
  console.log(
    "buyerGetAllOrder Data: " + JSON.stringify(buyerGetAllOrderResp.data)
  );
}

// buyerGetAllOrderFunc(101);

async function buyerCreateOrderFunc(payload) {
  const buyerCreateOrderResp = await buyerCreateOrder(payload);
  console.log("buyerCreateOrder Status Code: " + buyerCreateOrderResp.status);
  console.log(
    "buyerCreateOrder Data: " + JSON.stringify(buyerCreateOrderResp.data)
  );
}

// buyerCreateOrderFunc({
//   itemID: 552,
//   sellerID: 201,
//   buyerID: 101
// });
