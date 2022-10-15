import { d } from "../../asset/js/custom.lib.js";
import { searchLoad, sortingLoad, download } from "../common.js";
import { login, loginLoad } from "./login.js";
import { obFormLoad, obFormPage } from "./obFormPage.js";
import { gynFormLoad, gynFormPage } from "./gynFormPage.js";
import { userPage, addUserLoad } from "./userPage.js";

const commonLoad = (type = "") => {
  if (type) {
    usersLoad();
    logoutLoad();
    return;
  }
  usersLoad();
  obFormPageLoad();
  gynFormPageLoad();
  backupFormLoad();
  changePasswordLoad();
  logoutLoad();
};

const usersLoad = () => {
  const { GAS, post, database, backup } = d;
  let button = document.querySelector("#homeBtn");
  button.onclick = () => {
    document.querySelector("#root").innerHTML = userPage;
    post(GAS, {
      type: 5,
      data: JSON.stringify({
        database: database,
      }),
    })
      .then(async (res) => {
        res = JSON.parse(JSON.parse(res).messege);
        const { result, data } = res;
        if (result) {
          addUserLoad(data);
          document.querySelector("#backupEmail").value = backup ? backup : "";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const obFormPageLoad = () => {
  const { GAS, post, database, backup } = d;
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

const gynFormPageLoad = () => {
  const { GAS, post, database, backup } = d;
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

const backupFormLoad = () => {
  const { GAS, post, database } = d;
  let backup = document.querySelector("#backupEmail");
  let button = document.querySelector("#backupBtn");
  let error = document.querySelector("#backup-error");
  let success = document.querySelector("#backup-success");

  document.forms["backup-form"].onsubmit = (e) => {
    e.preventDefault();
    button.innerText = "Processing..";
    error.style.display = "none";
    success.style.display = "none";
    loading.style.display = "block";
    d.backup = backup.value.trim();
    post(GAS, {
      type: 2,
      data: JSON.stringify({
        email: backup.value.trim(),
        database: database,
      }),
    })
      .then((res) => {
        res = JSON.parse(JSON.parse(res).messege);
        const { result } = res;
        if (result) {
          button.innerText = "Backup";
          success.innerText = "Successfully set up backup email!";
          success.style.display = "block";
          loading.style.display = "none";
        } else {
          button.innerText = "Backup";
          error.innerHTML = "Error Found! Please try again.";
          error.style.display = "block";
          loading.style.display = "none";
        }
      })
      .catch((err) => {
        console.log(err);
        button.innerText = "Backup";
        error.innerText = "Error Found! Please try again.";
        error.style.display = "block";
        loading.style.display = "none";
      });
  };
};

const changePasswordLoad = () => {
  const { GAS, post, database, customPasword } = d;
  let oldPass = document.querySelector("#oldPass");
  let newPass = document.querySelector("#newPass");
  let conNewPass = document.querySelector("#conNewPass");
  let button = document.querySelector("#changePasswordBtn");
  let error = document.querySelector("#changePassword-error");
  let success = document.querySelector("#changePassword-success");

  const { $password: $oldPass } = customPasword(oldPass);
  const { $password: $newPass } = customPasword(newPass);
  const { $password: $conNewPass } = customPasword(conNewPass);

  document.forms["changePasswordForm"].onsubmit = (e) => {
    e.preventDefault();
    button.innerText = "Changing..";
    error.style.display = "none";
    success.style.display = "none";
    loading.style.display = "block";

    if ($newPass() !== $conNewPass()) {
      button.innerText = "Change";
      error.innerText = "Confirm password doesn't match.";
      error.style.display = "block";
      loading.style.display = "none";
      return;
    }
    post(GAS, {
      type: 3,
      data: JSON.stringify({
        oldPass: $oldPass(),
        newPass: $newPass(),
        database: database,
      }),
    })
      .then((res) => {
        res = JSON.parse(JSON.parse(res).messege);
        const { result, messege } = res;
        if (result) {
          if (messege == "success") {
            button.innerText = "Change";
            success.innerText = "Successfully changed password!";
            success.style.display = "block";
            loading.style.display = "none";
          } else {
            button.innerText = "Change";
            error.innerHTML = "Old Password is't correct";
            error.style.display = "block";
            loading.style.display = "none";
          }
        } else {
          button.innerText = "Change";
          error.innerHTML = "Error Found! Please try again.";
          error.style.display = "block";
          loading.style.display = "none";
        }
      })
      .catch((err) => {
        console.log(err);
        button.innerText = "Change";
        error.innerText = "Error Found! Please try again.";
        error.style.display = "block";
        loading.style.display = "none";
      });
  };
};

const logoutLoad = () => {
  let button = document.querySelector("#logoutBtn");
  button.onclick = () => {
    document.querySelector("#root").innerHTML = login;
    loginLoad();
  };
};

export { commonLoad, searchLoad, sortingLoad, download };
