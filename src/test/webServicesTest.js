import {
  adminLogin,
  getAllBuyer,
  getAllSeller,
  activateBuyer,
  deactivateBuyer,
  activateSeller,
  deactivateSeller
} from "../services/webServices";

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

activateSellerFunc(201);

async function deactivateSellerFunc(id) {
  const deactivateSellerResp = await deactivateSeller(id);
  console.log("deactivateSeller Status Code: " + deactivateSellerResp.status);
  console.log(
    "deactivateSeller Data: " + JSON.stringify(deactivateSellerResp.data)
  );
}

// deactivateSellerFunc(201);
