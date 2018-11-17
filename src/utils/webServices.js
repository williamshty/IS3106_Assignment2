import axios from "axios";
const base_url = "http://localhost:8080/ECA-war/webresources/eca/";
axios.defaults.baseURL = base_url;

//************* */
//ADMIN
//************* */

export async function adminLogin(payload) {
  let resp = await axios.put("/admin/login", payload);
  return resp;
}

export async function getAllBuyer() {
  let resp = await axios.get("/admin/buyer/all");
  return resp;
}

export async function getAllSeller() {
  let resp = await axios.get("/admin/seller/all");
  return resp;
}

export async function activateBuyer(id) {
  let resp = await axios.put("/admin/buyer/activate/" + id);
  return resp;
}

export async function deactivateBuyer(id) {
  let resp = await axios.put("/admin/buyer/deactivate/" + id);
  return resp;
}

export async function activateSeller(id) {
  let resp = await axios.put("/admin/seller/activate/" + id);
  return resp;
}

export async function deactivateSeller(id) {
  let resp = await axios.put("/admin/seller/deactivate/" + id);
  return resp;
}

//************* */
//SELLER
//************* */

export async function sellerRegister(payload) {
  let resp = await axios.post("/seller/register", payload);
  return resp;
}

export async function sellerLogin(payload) {
  let resp = await axios.put("/seller/login", payload);
  return resp;
}

export async function sellerUpdateProfile(payload) {
  const { sellerID, sellerName, sellerGender } = payload;
  let resp = await axios.put(
    `/seller/profile/${sellerID}/${sellerName}/${sellerGender}`
  );
  return resp;
}

export async function sellerAddItem(payload) {
  const { sellerID, item } = payload;
  let resp = await axios.put("/seller/item/add/" + sellerID, item);
  return resp;
}

export async function sellerEditItem(payload) {
  let resp = await axios.put("/seller/item/edit", payload);
  return resp;
}

export async function sellerDeleteItem(itemID) {
  let resp = await axios.put("/seller/item/delete/" + itemID);
  return resp;
}

export async function sellerGetAllItem(sellerID) {
  let resp = await axios.get(`/seller/item/all/${sellerID}`);
  return resp;
}

export async function sellerSearchItemByKey(payload) {
  const { keyword, sellerID } = payload;
  let resp = await axios.get(`seller/item/search/${sellerID}/${keyword}`);
  return resp;
}

export async function sellerGetAllOrder(sellerID) {
  let resp = await axios.get("/seller/order/all/" + sellerID);
  return resp;
}

export async function sellerUpdateOrderStatus(payload) {
  const { orderID, newStatus } = payload;
  let resp = await axios.put(`/seller/order/edit/${orderID}/${newStatus}`);
  return resp;
}

//************* */
//BUYER
//************* */

export async function buyerRegister(payload) {
  let resp = await axios.post("/buyer/register", payload);
  return resp;
}

export async function buyerLogin(payload) {
  let resp = await axios.put("/buyer/login", payload);
  return resp;
}

export async function buyerUpdateProfile(payload) {
  const { buyerID, buyerName, buyerGender } = payload;
  let resp = await axios.put(
    `/buyer/profile/${buyerID}/${buyerName}/${buyerGender}`
  );
  return resp;
}

export async function buyerGetAllItem() {
  let resp = await axios.get(`/buyer/item/all`);
  return resp;
}

export async function buyerSearchItem(payload) {
  const { type, key } = payload;
  let resp = await axios.get(`/buyer/item/search/${type}/${key}`);
  return resp;
}

export async function buyerGetAllOrder(buyerID) {
  let resp = await axios.get("/buyer/order/all/" + buyerID);
  return resp;
}

export async function buyerCreateOrder(payload) {
  const { itemID, sellerID, buyerID } = payload;
  let resp = await axios.put(
    `/buyer/order/create/${itemID}/${sellerID}/${buyerID}`
  );
  return resp;
}
