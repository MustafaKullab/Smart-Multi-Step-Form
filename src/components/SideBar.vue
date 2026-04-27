<template>
  <div class="SideBar">
    <div class="row ms-3">
      <div class="steps col-md-10">
        <div
          class="step1 mt-4 d-flex flex-column flex-lg-row text-center text-lg-start align-items-center gap-4 mb-3"
        >
          <div class="stepNum text-light active">1</div>
          <div class="stepText">
            <p class="stepCount m-0 text-uppercase">step 1</p>
            <span class="title text-uppercase text-light fw-bold">your info</span>
          </div>
        </div>
        <div
          class="step2 mt-4 d-flex flex-column flex-lg-row text-center text-lg-start align-items-center gap-4 mb-3"
        >
          <div class="stepNum text-light">2</div>
          <div class="stepText">
            <p class="stepCount m-0 text-uppercase">step 2</p>
            <span class="title text-uppercase text-light fw-bold">select plan</span>
          </div>
        </div>
        <div
          class="step3 mt-4 d-flex flex-column flex-lg-row text-center text-lg-start align-items-center gap-4 mb-3"
        >
          <div class="stepNum text-light">3</div>
          <div class="stepText">
            <p class="stepCount m-0 text-uppercase">step 3</p>
            <span class="title text-uppercase text-light fw-bold">add-ons</span>
          </div>
        </div>
        <div
          class="step4 mt-4 d-flex flex-column flex-lg-row text-center text-lg-start align-items-center gap-4 mb-3"
        >
          <div class="stepNum text-light">4</div>
          <div class="stepText">
            <p class="stepCount m-0 text-uppercase">step 4</p>
            <span class="title text-uppercase text-light fw-bold">summary</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.SideBar {
  height: 77vh;
  background-image: url("../public/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  overflow: hidden;
  @media (max-width: 767px) {
    background-image: url("../public/images/bg-sidebar-mobile.svg") !important;
    background-size: 100%;
    height: 21vh;
  }
  .row {
    .steps {
      @media (max-width: 767px) {
        display: flex;
        justify-content: center !important;
        align-items: center !important;
        margin-top: 20px;
        gap: 20px;
      }
      > div {
        .stepNum {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid #bee1ff;
          &.active {
            background: #bee1ff !important;
            color: #0e2e5d !important;
            font-weight: bold;
          }
        }
        .stepText {
          .stepCount {
            color: #bee1ff;
          }
          @media (max-width: 767px) {
            display: none !important;
          }
        }
      }
    }
  }
}
</style>
