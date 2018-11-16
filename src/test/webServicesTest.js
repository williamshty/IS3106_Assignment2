import { adminLogin } from "../services/webServices";
async function adminLoginFunc(payload) {
  const adminLoginResp = await adminLogin(payload);
  console.log(adminLoginResp);
}

adminLoginFunc({
  username: "admin",
  password: "admin"
});
