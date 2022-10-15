import { login, loginLoad } from "../../modules/user/login.js";

console.log("ValleyOB Verify Application for User.");

document.querySelector("#root").innerHTML = login;
loginLoad();
