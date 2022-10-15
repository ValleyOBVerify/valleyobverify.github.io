import { d } from "../../asset/js/custom.lib.js";
import { commonLoad } from "./common.js";

const obFormPage = `
<div>
    <style>
      [value="div"] {
        display: none;
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
                <a href="javascript:void(0);" class="active">
                  <span class="txt">Home</span>
                </a>
              </li>
              <li id="historyBtn">
                <a href="javascript:void(0);">
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
          <form name="verificationForm">
            <div class="container-fluid">
              <div class="insurance-verification-wrapp">
                <h2 style="font-weight: 600; margin-bottom: 50px">
                  OB Insurance Verification
                </h2>

                <div class="row align-items-start">
                  <div class="col-lg-6">
                    <div class="user-insurance-form-wrapp">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>Date Today:</label>
                            <input
                              type="text"
                              name=""
                              id="todayDate"
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="mm-dd-yyyy"
                              spellcheck="false"
                              date="format"
                              format="Date Today"
                            />
                            <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->

                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>Patient's Name:</label>
                            <input
                              type="text"
                              name=""
                              id="Name"
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter Patient's Name"
                              spellcheck="false"
                              />
                              <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->

                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>Insurance ID Number:</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter Insurance ID Number"
                              spellcheck="false"
                              />
                              <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->

                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>Copay:</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter Copay"
                              spellcheck="false"
                              />
                              <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->
                      </div>
                      <!-- row -->

                      <div class="mdl-input-bx">
                        <label>Global Maternity benefits:</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          autocomplete="off"
                          required=""
                          placeholder="Enter Global Maternity benefits"
                          spellcheck="false"
                          />
                          <div value="div" class="form-control"></div>
                      </div>

                      <div class="mdl-input-bx">
                        <label
                          >Out of Pocket (if applicable) Covered at %</label
                        >
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          autocomplete="off"
                          required=""
                          placeholder="Enter Out of Pocket (if applicable) Covered at %"
                          spellcheck="false"
                          />
                          <div value="div" class="form-control"></div>
                      </div>

                      <div class="mdl-input-bx">
                        <label>Billing Address Verified:</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          autocomplete="off"
                          required=""
                          placeholder="Enter Billing Address"
                          spellcheck="false"
                          />
                          <div value="div" class="form-control"></div>
                      </div>

                      <div class="mdl-input-bx">
                        <label>Reference Number:</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          autocomplete="off"
                          required=""
                          placeholder="Enter Reference Number"
                          spellcheck="false"
                          />
                          <div value="div" class="form-control"></div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>Spoke to:</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter Spoke to"
                              spellcheck="false"
                              />
                              <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->

                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>Admins Name:</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter Admins Name"
                              spellcheck="false"
                              />
                              <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->

                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>Date of Birth:</label>
                            <input
                              type="text"
                              name=""
                              id="Date"
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter Date of Birth"
                              spellcheck="false"
                              date="format"
                              format="Date of Birth"
                            />
                            <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->

                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>PPO:</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter PPO"
                              spellcheck="false"
                            />
                            <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->

                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>HMO:</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter HMO"
                              spellcheck="false"
                            />
                            <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->

                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>Deductible:</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter Deductible "
                              spellcheck="false"
                            />
                            <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->

                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label>Deductible Met:</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter Deductible Met:"
                              spellcheck="false"
                            />
                            <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->

                        <div class="col-md-6">
                          <div class="mdl-input-bx">
                            <label> Insurance Effective Date:</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              class="form-control"
                              autocomplete="off"
                              required=""
                              placeholder="Enter Insurance Effective Date"
                              spellcheck="false"
                              date="format"
                              format="Insurance Effective Date"
                            />
                            <div value="div" class="form-control"></div>
                          </div>
                        </div>
                        <!-- col -->
                      </div>
                      <!-- row -->

                      <div class="mdl-input-bx">
                        <label>HRA/HAS Account Balance if Applicable:</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          autocomplete="off"
                          required=""
                          placeholder="Enter HRA/HAS Account Balance if Applicable"
                          spellcheck="false"
                          />
                          <div value="div" class="form-control"></div>
                      </div>

                      <div
                        style="
                          color: red;
                          text-align: center;
                          font-size: 14px;
                          margin-top: 10px;
                          margin-bottom: 15px;
                          display: none;
                        "
                        id="error"
                      >
                        Something is wrong. Please try again.
                      </div>

                      <button
                        type="submit"
                        class="custom-btn text-uppercase"
                        style="width: 100%; margin-top: 10px"
                        id="submitBtn"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <!-- col -->

                  <div
                    class="col-lg-6"
                    style="position: sticky; top: 0"
                  >
                    <div id="content-row" style="margin-top: 0px">
                    </div>
                  </div>
                  <!-- col -->
                </div>
                <!-- row -->
              </div>
              <!-- insurance-verification-wrapp -->
            </div>
            <!-- container -->
          </form>
        </section>
        <!-- common-sec -->
      </main>
    </section>

    <!-- Modal Thank you Success message -->
    <div
      class="modal fade custom-modal success-modal"
      id="submitModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close ml-auto"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <div class="img mb-4">
              <img src="./asset/img/verified.png" alt="Success" />
            </div>
            <h3 class="modal-title text-center">Thank You!</h3>
            <p>Successfully Submitted Document</p>
          </div>
          <!-- modal-body -->
        </div>
      </div>
    </div>
    <!-- modal -->

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

// download file
const download = (data, fileName) => {
  let loading = document.querySelector("#loading");
  loading.style.display = "block";

  const anchor = document.createElement("a");
  if ("download" in anchor) {
    //html5 A[download]

    anchor.href = data;
    anchor.setAttribute("download", fileName + ".pdf");
    anchor.innerHTML = "downloading...";
    anchor.style.display = "none";
    anchor.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    document.body.appendChild(anchor);
    setTimeout(function () {
      anchor.click();
      document.body.removeChild(anchor);
      loading.style.display = "none";
    }, 66);
  }
};

const obFormLoad = (data) => {
  const { GAS, post, database, blobToData64, dateCovert} = d;
  commonLoad();

  const loading = document.querySelector("#loading");
  const verificationForm = document.forms["verificationForm"];
  const formDiv = document.querySelector(".user-insurance-form-wrapp");
  const contentDiv = document.querySelector("#content-row");
  const button = document.querySelector("#submitBtn");
  const error = document.querySelector("#error");
  const todayDate = document.querySelector("#todayDate");
  const DOB = document.querySelector("#Date");
  const Name = document.querySelector("#Name");
  const dateLists = document.querySelectorAll(`input[date="format"]`);
  const inputAll = document.querySelectorAll("input.form-control");
  const inputDiv = document.querySelectorAll(`.form-control[value="div"]`);

  document.querySelector("#content-row").innerHTML = data;
  todayDate.value = dateCovert();
  loading.style.display = "none";

  verificationForm.onsubmit = async (e) => {
    e.preventDefault();

    error.style.display = "none";

    for (let date of dateLists) {
      let value = date.value;
      let field = date.getAttribute("format");

      if (
        /^(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])\-\d{4}$/.test(value) ==
        false
      ) {
        error.style.display = "block";
        error.innerText = `${field} allow only MM-DD-YYYY format.`;

        return;
      }
    }

    loading.style.display = "block";
    button.innerText = "Processing...";

    for (let i = 0; i < inputAll.length; i++) {
      let input = inputAll[i];
      let div = inputDiv[i];
      div.innerText = input.value;
      $(input).hide();
      $(div).show();
    }

    const { elementToSVG } = window["dom-to-svg"];

    $("#submitBtn").hide();

    const formSvg = new XMLSerializer().serializeToString(
      elementToSVG(formDiv)
    );

    $("#submitBtn").show();
    for (let i = 0; i < inputAll.length; i++) {
      let input = inputAll[i];
      let div = inputDiv[i];
      $(input).show();
      $(div).hide();
    }

    const contentSvg = new XMLSerializer().serializeToString(
      elementToSVG(contentDiv)
    );

    let formViewBox = formSvg.substr(formSvg.indexOf('viewBox="') + 9);
    formViewBox = formViewBox.substr(0, formViewBox.indexOf('"')).split(" ");

    let contentViewBox = contentSvg.substr(contentSvg.indexOf('viewBox="') + 9);
    contentViewBox = contentViewBox
      .substr(0, contentViewBox.indexOf('"'))
      .split(" ");

    const docTitle = "OB Insurance Verification";
    const docType = "OB";

    const ratio = Number(formViewBox[3]) / Number(formViewBox[2]);

    // formViewBox[2] = 300;

    const doc = new PDFDocument({
      compress: false,
      size: [
        Number(formViewBox[2]) + 100,
        Number(formViewBox[2]) * ratio + 150,
      ],
    });
    doc.fontSize(22);
    doc.font("Helvetica-Bold").text(docTitle, 50, 50);

    SVGtoPDF(doc, formSvg, 50, 100, {
      width: Number(formViewBox[2]),
      height: Number(formViewBox[3]),
      preserveAspectRatio: "xMinYMin meet",
    });

    doc.addPage({
      size: [Number(formViewBox[2]) + 100, Number(contentViewBox[3]) + 100],
      compress: false,
    });

    SVGtoPDF(doc, contentSvg, 50, 50, {
      width: Number(formViewBox[2]),
      preserveAspectRatio: "xMinYMin meet",
    });

    let stream = doc.pipe(blobStream());
    stream.on("finish", async () => {
      let blob = stream.toBlob("application/pdf");
      const resultData64 = await blobToData64(blob);
      const fileName = Name.value + "_" + DOB.value + "_" + docType;
      post(GAS, {
        type: 15,
        data: JSON.stringify({
          name: Name.value,
          date: DOB.value,
          docType: docType,
          file: resultData64,
          time: "",
          database: database,
          showName: fileName
        }),
      })
        .then(async (res) => {
          res = JSON.parse(JSON.parse(res).messege);
          const { result } = res;
          if (result) {
            e.target.reset();
            button.innerText = "Submit";
            loading.style.display = "none";
            $("#submitModal").modal("show");
            download(resultData64, fileName);
          } else {
            console.log(res);
            error.style.display = "block";
            error.innerText = "Something is wrong. Please try again.";
            button.innerText = "Submit";
            loading.style.display = "none";
          }
        })
        .catch((err) => {
          console.log(err);
          error.style.display = "block";
          error.innerText = "Something is wrong. Please try again.";
          button.innerText = "Submit";
          loading.style.display = "none";
        });
    });
    doc.end();
  };
};

export { obFormPage, obFormLoad };
