<template>
  <div class="HomePage">
    <div class="container-fluid w-75">
      <div class="row m-5 p-3 rounded-3 bg-white justify-content-between position-relative">
        <div class="col col-md-5 col-xl-4 p-0">
          <SideBar />
        </div>
        <div class="detailsSide col-md-7">
          <div class="box yourInfo">
            <div class="title mt-5">
              <h1>Personal info</h1>
              <p class="subtitle">Please provide your name, email address, and phone number.</p>
            </div>
            <form class="my-5">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="e.g.stephen king" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="e.g.stephenking@lorem.com"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Phone Number</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="e.g. +1 234 567 89"
                />
              </div>
            </form>
            <div class="nxtBtn text-end">
              <button class="btn mt-5">Next Step</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
</script>

<style lang="scss" scoped>
.HomePage {
  .container-fluid {
    @media (max-width: 767px) {
      width: 100% !important;
      padding: 0 !important;
      .row {
        margin: 0 !important;
        padding: 0 !important;
      }
    }
    .row {
      .detailsSide {
        @media (max-width: 767px) {
          position: absolute !important;
          z-index: 6000 !important;
          top: 110px;
          background-color: white;
          width: 80%;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 10px;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        }
        .box {
          .title {
            @media (max-width: 767px) {
              margin-top: 20px !important;
            }
            h1 {
              color: #052852 !important;
            }
            .subtitle {
              color: #a1a1a9 !important;
            }
          }

          form {
            @media (max-width: 767px) {
              margin: 20px 0 !important;
            }
            input {
              box-shadow: none !important;
              &:focus {
                border-color: #052852 !important;
              }
            }
            > div {
              label {
                color: #052852;
                font-weight: bold;
              }
            }
          }
        }
        .nxtBtn {
          @media (max-width: 767px) {
            display: flex;
            justify-content: end;
            align-items: center;
            margin-top: 40px;
            position: absolute;
            right: 0;
            width: 100%;
            background-color: white;
            padding: 20px 10px 20px 20px;
            border-radius: 6px;
          }
          button {
            background-color: #174a8b !important;
            color: #f4ffff !important;
            &:hover {
              background-color: #144079 !important;
            }
            @media (max-width: 767px) {
              margin: 0 !important;
            }
          }
        }
      }
    }
  }
}
</style>
