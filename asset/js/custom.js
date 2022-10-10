import { login, loginLoad } from "../../modules/admin/login.js";

console.log("ValleyOB Verify Application.");

document.querySelector("#root").innerHTML = login;
loginLoad();
