import { d } from "../../asset/js/custom.lib.js";
import { searchLoad, sortingLoad, download } from "../common.js";
import { login, loginLoad } from "./login.js";
import { historyPage, historyLoad } from "./historyPage.js";
import { homeLoad, homePage } from "./homePage.js";
import { emailPage, emailLoad } from "./emailPage.js";

const commonLoad = () => {
  document.title = "Valley Obgyn - User";
  homeLoad_();
  historyLoad_();
  logoutLoad();
};

const homeLoad_ = () => {
  const { GAS, post, $database: database } = d;
  let button = document.querySelector("#homeBtn");
  button.onclick = () => {
    document.querySelector("#root").innerHTML = homePage;
    post(GAS, {
      type: 14,
      data: JSON.stringify({
        database: database,
      }),
    })
      .then(async (res) => {
        res = JSON.parse(JSON.parse(res).messege);
        const { result, data } = res;
        if (result) {
          homeLoad(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const emailLoad_ = (docName, id) => {
  document.querySelector("#root").innerHTML = emailPage;
  emailLoad(docName, id);
};

const historyLoad_ = () => {
  const { database } = d;
  let button = document.querySelector("#historyBtn");
  button.onclick = () => {
    document.querySelector("#root").innerHTML = historyPage;
    historyLoad(database);
  };
};

const logoutLoad = () => {
  let button = document.querySelector("#logoutBtn");
  button.onclick = () => {
    document.querySelector("#root").innerHTML = login;
    loginLoad();
  };
};

const inputPrevent = (e) => {
  if (e.inputType == "insertText" || e.inputType == "insertCompositionText") {
    let start = e.target.selectionStart - e.data.length;
    e.target.value =
      e.target.value.substr(0, e.target.selectionStart - e.data.length) +
      e.target.value.substr(e.target.selectionStart);
    d.setCaretPosition(e.target, start);
  }
};

window.inputPrevent = inputPrevent;

export { commonLoad, searchLoad, sortingLoad, download, emailLoad_ };
