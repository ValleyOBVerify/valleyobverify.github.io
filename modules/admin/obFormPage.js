import { d } from "../../asset/js/custom.lib.js";
import { commonLoad } from "./common.js";

const obFormPage = `
<div>
  <style>
    .note-editable {
      min-height: 500px;
    }
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

          <ul class="navbar-nav">
            <li id="homeBtn">
              <a href="javascript:void(0);">
                <span class="txt">Home</span>
              </a>
            </li>
            <li id="obFormBtn">
              <a href="javascript:void(0);" class="active">
                <span class="txt">OB Form</span>
              </a>
            </li>
            <li id="gynFormBtn">
              <a href="javascript:void(0);">
                <span class="txt">GYN Form</span>
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
          <section class="dash-panel-sec mt-3 note-dash-sec">
            <aside class="dash-sidebar"></aside>
            <!-- dash-sidebar -->

            <section class="dash-content-box">
              <section class="content-main-dv note-dash-cont">
                <div class="note-share-sec">
                  <div class="row">
                    <div class="col-7">
                      <div id="content-row">

                      </div>
                    </div>
                    <!-- col -->

                    <div class="col-5">
                      <div class="note-share-opt">
                        <div class="btns-dv text-center pr-4">
                          <button id="editBtn" class="func-btn edit-btn">
                            <img
                              src="./asset/img/share-edit.png"
                              class="edit"
                              alt="Edit"
                            />
                            <img
                              src="./asset/img/ok.png"
                              class="editOk"
                              alt="Edit"
                              style="display: none"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- col -->
                  </div>
                </div>
                <!-- note-share-sec -->
              </section>
              <!-- content-main-dv -->
            </section>
            <!-- dash-content-box -->
          </section>
          <!-- dash-panel-sec -->
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

const obFormLoad = (data) => {
  const { post, GAS, database } = d;
  commonLoad(1);

  let button = document.querySelector("#editBtn");
  let loading = document.querySelector("#loading");
  let editImg = button.querySelector(".edit");
  let saveImg = button.querySelector(".editOk");
  let contentDiv = document.querySelector("#content-row");

  let editEnable = true;

  contentDiv.innerHTML = data;
  loading.style.display = "none";

  button.onclick = (e) => {
    editImg.style.display = "none";
    saveImg.style.display = "none";
    loading.style.display = "block";

    if (editEnable) {
      let content = contentDiv.innerHTML; // get content

      let textarea = document.createElement("textarea");
      textarea.setAttribute("style", "display: none");
      textarea.setAttribute("id", "code_preview__");
      textarea.innerText = content;
      contentDiv.innerHTML = "";
      contentDiv.appendChild(textarea);

      $("#code_preview__").summernote({
        callbacks: {
          onInit: function () {
            saveImg.style.display = "";
            setTimeout(() => {
              loading.style.display = "none";
            }, 100);
          },
        },
        spellCheck: false,
      });
    } else {
      let content = $("#code_preview__").summernote("code");
      post(GAS, {
        type: 7,
        data: JSON.stringify({
          database: database,
          content: content,
        }),
      })
        .then((res) => {
          res = JSON.parse(JSON.parse(res).messege);
          const { result, content } = res;
          if (result) {
            contentDiv.innerHTML = content;
            editImg.style.display = "";
            loading.style.display = "none";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    editEnable = !editEnable;
  };

};

export { obFormLoad, obFormPage };
