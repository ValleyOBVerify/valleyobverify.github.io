import { d } from "../../asset/js/custom.lib.js";
import { commonLoad, searchLoad, sortingLoad, download } from "./common.js";

const historyPage = `
<div>
<style>
  .user-backup-table-wrapp .custom-table th:nth-child(1){min-width: 180px;}
  .user-backup-table-wrapp .custom-table th:nth-child(2){min-width: 180px;}
  .user-backup-table-wrapp .custom-table th:nth-child(3){min-width: 180px;}
  .user-backup-table-wrapp .custom-table th:nth-child(4){min-width: 180px;}
  .user-backup-table-wrapp .custom-table th:nth-child(5){min-width: 180px;}
  .user-backup-table-wrapp .custom-table th:nth-child(6){min-width: 250px;}
</style>
  <section id="wrapper">
    <header class="site-header">
      <div class="container-fluid">
        <nav class="navbar site-navigation">
          <div class="navbar-brand">
            <a href="javascript:void(0);">
              <img src="./asset/img/logo.svg" alt="Logo" />
            </a>
          </div>

          <div class="search-dv">
            <form name="search-form" id="search_form">
              <button type="submit">
                <img src="./asset/img/search-icon.png" alt="Search" />
              </button>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                autocomplete="off"
                spellchaeck="false"
              />
            </form>
            <span id="sortingBtn" class="ic-dv arrow-ic">
              <a href="javascript:void(0);">
                <img src="./asset/img/up-dwn-arr.png" alt="Icon" />
              </a>
            </span>
          </div>

          <ul class="navbar-nav">
            <li id="homeBtn">
              <a href="javascript:void(0);" class="">
                <span class="txt">Home</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="active">
                <span class="icon">
                  <img
                    src="./asset/img/share-clock.png"
                    alt="History"
                    class="iconBlack"
                  />
                  <img
                    src="./asset/img/share-clock-blue.png"
                    alt="History"
                    class="iconBlue"
                  />
                </span>
                <span class="txt">History</span>
              </a>
              </li>
            <li id="logoutBtn">
              <a href="javascript:void(0);">
                <span class="icon"
                  ><img src="./asset/img/logout.png" alt="LogOut"
                /></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- container -->
    </header>

    <main class="site-main">
      <section class="user-backup-sec">
        <div class="container-fluid">
          <div class="user-backup-table-wrapp">
            <table class="custom-table"></table>
          </div>
        </div>
        <!-- container -->
      </section>
      <!-- common-sec -->
    </main>
  </section>
  <!-- wrapper -->

  <div style="" id="loading">
    <div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</div>
`;

const showData = ({ user, database, data }, type = "") => {
  const { post, GAS, dateCovert } = d;
  let table = document.querySelector(".custom-table");
  let loading = document.querySelector("#loading");
  let result = "";
  let index = 1;
  let idList = [];
  for (let x of data) {
    let id = index;
    if (type) id = x[5];
    idList.push({
      id,
      file: x[3].substr(1),
      name: x[0].substr(1) + "_" + x[1].substr(1) + "_" + x[2].substr(1),
    });

    const downloadBtn = `
    <button download="${id}" class="icon-btn download">
      <span class="icon">
        <img src="./asset/img/download.png" alt="Download" class="iconBlack"/>
        <img src="./asset/img/download-white.png" alt="Download" class="iconBlue">
      </span>
    </button>`;

    result += `
    <tr>
    <td>${x[0].substr(1)}</td>
    <td><span>${x[1].substr(1)}</span></td>
    <td>${x[2].substr(1)}</td>
    <td><span>${dateCovert(x[4])}</span></td>
      <td class="text-center">
        ${downloadBtn}
      </td>
      <td class="text-center">
        <button id="delete-${id}" class="tb-btn-smpl delete">
          <span class="icon"
            ><img
              src="./asset/img/Icon-feather-trash.png"
              alt="Trash"
          /></span>
        </button>
      </td>
    </tr>
    `;
    index++;
  }

  table.innerHTML = `
  <caption
    style="
      text-align: center;
      display: table-caption;
      font-weight: 600;
      font-size: 18px;
      caption-side: top;
      color: #000;
      margin-bottom: 10px;
    "
  >
    ${user}
  </caption>
  <tr>
    <th>Name</th>
    <th>DOB</th>
    <th>Form Type</th>
    <th>Date</th>
    <th class="text-center">Download</th>
    <th class="text-center">
      <button id="clearAllBtn" class="custom-btn" style="font-size: 14px; padding: 10px 20px;">
        Clear History
      </button>
    </th>
  </tr>
	${result}
  `;

  for (let x of idList) {
    //console.log(x)
    let button = document.querySelector(`#delete-${x.id}`);
    let exportBtn = document.querySelector(`[download='${x.id}']`);
    // delete
    button.onclick = async () => {
      loading.style.display = "block";
      let res = await post(GAS, {
        type: 12,
        data: JSON.stringify({
          id: x.id,
          database: database,
        }),
      });
      res = JSON.parse(JSON.parse(res).messege);
      showData(res);
      searchLoad(res.data, showData, [0, 1, 2], res);
      document.querySelector("#search").value = "";
    };

    if (exportBtn) {
      exportBtn.onclick = () => {
        download(x.file, x.name);
      };
    }
  }
  table.style.display = "table";
  loading.style.display = "none";

  // clear all history
  let clearAllBtn = document.querySelector("#clearAllBtn");
  clearAllBtn.onclick = async () => {
    clearAllBtn.innerHTML = "Processing...";
    loading.style.display = "block";
    let res = await post(GAS, {
      type: 13,
      data: JSON.stringify({
        database: database,
      }),
    });
    res = JSON.parse(JSON.parse(res).messege);
    clearAllBtn.innerHTML = "Clear History";
    showData(res);
    searchLoad(res.data, showData, [0, 1, 2], res);
    document.querySelector("#search").value = "";
  };
  sortingLoad(0, data, type, showData, { user, database, data });
};

const historyLoad = (database) => {
  const { post, GAS } = d;
  commonLoad(1);
  post(GAS, {
    type: 11,
    data: JSON.stringify({
      database: database,
    }),
  })
    .then(async (res) => {
      res = JSON.parse(JSON.parse(res).messege);
      if (res.result) {
        showData(res);
        searchLoad(res.data, showData, [0, 1, 2], res);
      } else {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export { historyPage, historyLoad };
