<template>
  <div class="FinishingUp">
    <div
      class="box pick d-flex flex-column justify-content-between"
      :class="useStore.selectedOns.length <= 1 ? 'gap-4' : ''"
    >
      <div class="title mt-5">
        <h1>Finishing up</h1>
        <p class="subtitle">Double-check everything looks OK before confirming.</p>
      </div>
      <div class="finishPlan mx-1 my-4 p-3 rounded-3">
        <div
          class="chosenPlan d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom"
        >
          <div class="planDetails">
            <h5 class="m-0">
              {{ useStore.selectedPlan.planName }} ({{ useStore.isYearly ? "Yearly" : "Monthly" }})
            </h5>
            <div class="backToPlan">
              <a href="" @click.prevent="useStore.currentStep = 2">Change</a>
            </div>
          </div>
          <div class="price">
            ${{ useStore.selectedPlan.price }}/{{ useStore.isYearly ? "yr" : "mo" }}
          </div>
        </div>
        <div
          class="selectedOns d-flex justify-content-between align-items-center mb-3"
          v-for="ons in useStore.selectedOns"
          :key="ons.title"
        >
          <div class="onsName">{{ ons.title }}</div>
          <div class="onsPrice">+${{ ons.price }}/{{ useStore.isYearly ? "yr" : "mo" }}</div>
        </div>
      </div>

      <div class="totalPrice d-flex justify-content-between align-items-center">
        <div class="priceDetails">Total (per {{ useStore.isYearly ? "year" : "month" }})</div>
        <div class="amountPrice">
          +${{ useStore.totalPrice }}/{{ useStore.isYearly ? "yr" : "mo" }}
        </div>
      </div>

      <div class="btns mt-5 d-flex justify-content-between align-items-center">
        <div class="backBtn" @click="executePreviousStep">
          <button class="btn">Go Back</button>
        </div>
        <div class="nxtBtn text-end" @click.prevent="confirmSubs">
          <button class="btn">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSubscriptionStore } from "@/stores/useSubscriptionStore";
const useStore = useSubscriptionStore();

const confirmSubs = () => {
  useStore.nextStep();
  useStore.confirmSubsc();
};

const executePreviousStep = () => {
  useStore.previousStep();
};
</script>

<style lang="scss" scoped>
.finishPlan {
  background-color: #f8f9fe !important;
}
.priceDetails {
  color: #a9aaaf;
}
.amountPrice {
  color: #443af1;
  font-weight: bold;
  font-size: 18px !important;
}
</style>
