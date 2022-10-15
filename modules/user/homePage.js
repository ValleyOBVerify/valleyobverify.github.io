import { commonLoad } from "./common.js";

const homePage = `
<div>
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

      <section class="common-sec login-page-sec" style="height: 80vh">
        <div class="container">
          <h2 class="text-center" style="font-weight: 600; margin-bottom: 50px">
            Insurance Verification Forms
          </h2>

          <div class="login-form-dv" style="max-width: 550px">
            <section class="custom-form-sec">
              <div class="row">
                <div class="col-md-6">
                  <div class="verification-bx-wrapp">
                    <a id="obFormBtn" href="javascript:void(0);">
                      <div class="txtBig">OB</div>
                      <div class="txt">Insurance Verification</div>
                    </a>
                  </div>
                </div>
                <!-- col -->

                <div class="col-md-6">
                  <div class="verification-bx-wrapp bg-blue">
                    <a id="gynFormBtn" href="javascript:void(0);">
                      <div class="txtBig">GYN</div>
                      <div class="txt">Insurance Verification</div>
                    </a>
                  </div>
                </div>
                <!-- col -->
              </div>
              <!-- row -->
            </section>
            <!-- custom-form-sec -->
          </div>
          <!-- login-form-dv -->
        </div>
        <!-- container -->
      </section>
      <!-- common-sec -->
    </section>
</div>
`;

export { homePage };
