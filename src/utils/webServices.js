import axios from "axios";
const base_url = "http://localhost:8080/ECA-war/webresources/eca/";
axios.defaults.baseURL = base_url;

export async function adminLogin(payload) {
  let resp = await axios.put("/admin/login", payload);
  return resp;
}
