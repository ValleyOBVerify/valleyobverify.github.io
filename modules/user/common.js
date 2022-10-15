import { d } from "../../asset/js/custom.lib.js";
import { searchLoad, sortingLoad, download } from "../common.js";
import { login, loginLoad } from "./login.js";
import { historyPage, historyLoad } from "./historyPage.js";
import { homePage } from "./homePage.js";
import { obFormLoad, obFormPage } from "./obForm.js";
import { gynFormLoad, gynFormPage } from "./gynForm.js";

const commonLoad = (type = "") => {
  document.title = "Insurance Verification";
  homeLoad_();
  historyLoad_();
  logoutLoad();

  if(type){
    obFormLoad_();
    gynFormLoad_();
  }
};

const homeLoad_ = () => {
  let button = document.querySelector("#homeBtn");
  button.onclick = () => {
    document.querySelector("#root").innerHTML = homePage;
    commonLoad(1);
  };
};

const obFormLoad_ = () => {
  const { GAS, post, $database: database } = d;
  let button = document.querySelector("#obFormBtn");
  button.onclick = () => {
    document.querySelector("#root").innerHTML = obFormPage;
    post(GAS, {
      type: 8,
      data: JSON.stringify({
        database: database,
      }),
    })
      .then(async (res) => {
        res = JSON.parse(JSON.parse(res).messege);
        const { result, content } = res;
        if (result) {
          obFormLoad(content);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const gynFormLoad_ = () => {
  const { GAS, post, $database: database } = d;
  let button = document.querySelector("#gynFormBtn");
  button.onclick = () => {
    document.querySelector("#root").innerHTML = gynFormPage;
    post(GAS, {
      type: 10,
      data: JSON.stringify({
        database: database,
      }),
    })
      .then(async (res) => {
        res = JSON.parse(JSON.parse(res).messege);
        const { result, content } = res;
        if (result) {
          gynFormLoad(content);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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

export { commonLoad, searchLoad, sortingLoad, download };
