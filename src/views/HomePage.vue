<template>
  <div class="HomePage">
    <div class="container-fluid w-75">
      <div class="row m-5 p-3 rounded-3 bg-white position-relative">
        <div class="col col-md-4 col-xl-4 p-0">
          <SideBar />
        </div>
        <div
          class="detailsSide col-md-8"
          :class="
            useStore.isConfirmed ? 'd-flex justify-content-center align-items-center p-3' : ''
          "
        >
          <transition name="fade" mode="out-in">
            <keep-alive>
              <YourInfo v-if="useStore.currentStep === 1" />
              <YourPlans v-else-if="useStore.currentStep === 2" />
              <PickAddons v-else-if="useStore.currentStep === 3" />
              <FinishingUp v-else-if="useStore.currentStep === 4" />
              <ConfirmMsg v-else-if="useStore.isConfirmed" />
            </keep-alive>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import YourInfo from "@/components/YourInfo.vue";
import YourPlans from "@/components/YourPlans.vue";
import PickAddons from "@/components/PickAddons.vue";
import FinishingUp from "@/components/FinishingUp.vue";
import ConfirmMsg from "@/components/ConfirmMsg.vue";
import { useSubscriptionStore } from "@/stores/useSubscriptionStore";
const useStore = useSubscriptionStore();
</script>

<style lang="scss">
// step 1
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
            background-color: white;
            padding: 20px 10px 20px 20px;
            border-radius: 6px;
            width: fit-content;
            margin-left: auto;
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
        .backBtn {
          @media (max-width: 767px) {
            width: fit-content;
            padding: 20px 10px 20px 20px;
            border-radius: 6px;
            z-index: 100;
          }
          button {
            color: #9699a2;
            font-weight: bold;
            transition: 0.3s;
            &:hover {
              color: #052852 !important;
            }
            &:focus {
              border: none !important;
            }
          }
        }
      }
    }
  }
}
// step 1

// step 2
form {
  .radioLabels {
    input {
      display: none !important;
      &:checked + label {
        background-color: #f8f9fe !important;
        border: 2px solid #534aa7;
      }
    }
    label {
      height: 180px !important;
      @media (max-width: 767px) {
        height: fit-content !important;
      }
      cursor: pointer;
      padding: 10px !important;
      font-size: 20px;
      border-radius: 10px;
      height: 170px;
      border: 2px solid #dbdbdd;
      &:hover {
        background-color: #f7f8fb88 !important;
      }
    }
    .planDetails {
      @media (max-width: 991px) {
        .planName {
          font-size: 13px;
        }
        .price {
          font-size: 12px !important;
        }
      }
      .price {
        font-size: 15px;
        color: #a0a0a0;
        font-weight: normal;
      }

      @media (min-width: 992px) and (max-width: 1199px) {
        .twoMonthsFree {
          width: 200px;
          p {
            font-size: 16px !important;
          }
        }
      }

      @media (max-width: 991px) {
        .twoMonthsFree {
          width: 200px;
          p {
            font-size: 11px !important;
          }
        }
      }
    }
  }
}
.monthlyYearly {
  div {
    position: relative;
    input {
      cursor: pointer;
      appearance: none;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-40%);
        left: -30px;
        width: 20px;
        height: 20px;
        border: 2px solid #534aa7;
        border-radius: 3px;
      }
      &::after {
        content: "";
        position: absolute;
        left: -27px;
        top: 50%;
        transform: translateY(-35%);
        width: 0;
        height: 0;
        border-radius: 1px;
        transition: 0.4s;
      }
      &:checked::after {
        background: #534aa7;
        background-position: center;
        width: 14px;
        height: 14px;
      }
    }
    label {
      cursor: pointer !important;
      color: #a1a1a9 !important;
      transition: 0.4s;
    }
    input:checked + label {
      color: #534aa7 !important;
    }
  }
}
// step 2

// Step 3
.ons {
  input {
    appearance: none;
    position: relative;
    &::before {
      content: "";
      transition: 0.3s;
      position: absolute;
      top: -50%;
      left: 30px;
      width: 20px;
      height: 20px;
      transform: translate(-50%, 35px);
      border-radius: 2px;
      border: 1px solid #ccc;
      @media (max-width: 767px) {
        transform: translate(-50%, 30px);
      }
    }
    &:checked::before {
      background: #4540fc;
    }
    &::after {
      content: "\f00c";
      font-weight: 900;
      font-family: "Font Awesome 5 free";
      position: absolute;
      left: 23px;
      top: -50%;
      transform: translate(0, 35px);
      width: 20px;
      height: 20px;
      border-radius: 2px;
      font-size: 14px;
      color: white;
      @media (max-width: 767px) {
        transform: translate(0%, 30px);
      }
    }
  }
  label {
    transition: 0.3s;
    padding: 10px;
    border-radius: 6px;
    border: 2px solid #4e49ad;
    .details {
      padding-left: 50px;
      @media (max-width: 767px) {
        padding-left: 40px !important;
      }
      p {
        color: #b5b5b9 !important;
      }
      @media (max-width: 767px) {
        h4 {
          font-size: 16px;
        }
        p {
          font-size: 11px;
        }
      }
    }
    @media (max-width: 767px) {
      .price {
        font-size: 14px;
      }
    }
  }
  input:checked + label,
  label:hover {
    background-color: #f8f9fe;
  }
}
// Step 3

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s;
}
</style>
