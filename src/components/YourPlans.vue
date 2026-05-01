<template>
  <div class="YourPlans">
    <div class="box plans d-flex flex-column justify-content-between">
      <div class="title mt-5">
        <h1>Select your plan</h1>
        <p class="subtitle">You have the option of monthly or yearly billing.</p>
      </div>
      <form class="my-5 mx-1 row g-2">
        <div
          class="radioLabels col-12 col-md-4"
          v-for="plan in useStore.plansAfterPrice"
          :key="plan.planName"
        >
          <input
            type="radio"
            :value="plan.id"
            :name="plan.name"
            :id="plan.id"
            :checked="plan.id === useStore.selectedPlanId"
            v-model="useStore.selectedPlanId"
          />
          <label
            :for="plan.id"
            class="d-flex justify-content-start justify-content-md-between flex-row flex-md-column align-items-start"
          >
            <div class="image me-3 me-md-0">
              <img :src="plan.img" alt="" />
            </div>
            <div class="planDetails">
              <p class="planName m-0">{{ plan.planName }}</p>
              <span class="price">${{ plan.price }}/{{ useStore.isYearly ? "yr" : "mo" }}</span>
              <transition name="fade" mode="out-in">
                <div class="twoMonthsFree" v-if="useStore.isYearly">
                  <p class="freeMonths m-0 fw-normal">2 months free</p>
                </div>
              </transition>
            </div>
          </label>
        </div>
        <div class="monthlyYearly mt-4 rounded-2 justify-content-center p-3 d-flex gap-5">
          <div class="monthly">
            <input
              id="monthly"
              type="radio"
              value="monthly"
              name="time"
              checked
              @click="useStore.isYearly = false"
            />
            <label for="monthly" class="switch-label">Monthly</label>
          </div>
          <div class="yearly">
            <input
              id="yearly"
              type="radio"
              value="yearly"
              name="time"
              @click="useStore.isYearly = true"
            />
            <label for="yearly" class="switch-label">Yearly</label>
          </div>
        </div>
      </form>
      <div class="btns d-flex justify-content-between align-items-center">
        <div class="backBtn" @click="executePreviousStep">
          <button class="btn">Go Back</button>
        </div>
        <div class="nxtBtn text-end" @click.prevent="executeNextStep">
          <button class="btn">Next Step</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSubscriptionStore } from "@/stores/useSubscriptionStore";
const useStore = useSubscriptionStore();

const executeNextStep = () => {
  useStore.nextStep();
};
const executePreviousStep = () => {
  useStore.previousStep();
};
</script>

<style lang="scss" scoped>
.freeMonths {
  font-size: 16px;
}
</style>
