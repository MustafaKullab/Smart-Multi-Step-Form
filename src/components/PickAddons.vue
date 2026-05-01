<template>
  <div class="PickAddons">
    <div class="box pick d-flex flex-column justify-content-between">
      <div class="title mt-5">
        <h1>Pick add-ons</h1>
        <p class="subtitle">Add-ons help enhance your gaming experience.</p>
      </div>
      <form class="mx-1 my-2 g-2">
        <div class="ons" v-for="ons in useStore.addonsAfterPrice" :key="ons.title">
          <input
            type="checkbox"
            name="ons"
            :id="ons.title"
            :value="ons.id"
            v-model="useStore.selectedAddonsId"
          />
          <label :for="ons.title" class="d-flex justify-content-between align-items-center">
            <div class="details">
              <h4 class="titleOns m-0 mb-1">{{ ons.title }}</h4>
              <p class="description m-0">{{ ons.description }}</p>
            </div>
            <div class="price">
              <span>+${{ ons.price }}/mo </span>
            </div>
          </label>
        </div>
      </form>
      <div class="btns mt-5 d-flex justify-content-between align-items-center">
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
console.log(useStore.selectedOns);
</script>
