import axios from "axios";
const base_url = "http://localhost:8080/ECA-war/webresources/eca/";
axios.defaults.baseURL = base_url;

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
