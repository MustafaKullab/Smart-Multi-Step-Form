<template>
  <div class="YourInfo">
    <div class="box yourInfo d-flex flex-column justify-content-between">
      <div class="title mt-5">
        <h1>Personal info</h1>
        <p class="subtitle">Please provide your name, email address, and phone number.</p>
      </div>
      <form class="my-5">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="e.g.stephen king"
            v-model="useStore.userDetails.name"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="e.g.stephenking@lorem.com"
            v-model="useStore.userDetails.email"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Phone Number</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="e.g. +1 234 567 89"
            v-model="useStore.userDetails.phone"
          />
        </div>
        <transition name="fade">
          <div class="validateMsg text-danger" v-if="validateMsg">{{ validateMsg }}</div>
        </transition>
      </form>
      <div class="nxtBtn text-end mt-4" @click.prevent="executeNextStep">
        <button class="btn">Next Step</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSubscriptionStore } from "@/stores/useSubscriptionStore";
const useStore = useSubscriptionStore();
const validateMsg = ref("");
const emailRegx =
  /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;
const phoneRegx = /^\+?[0-9]{7,15}$/;

const executeNextStep = () => {
  if (!useStore.userDetails.name || !useStore.userDetails.email || !useStore.userDetails.phone) {
    validateMsg.value = "All fields is required";
    return;
  } else if (!emailRegx.test(useStore.userDetails.email.trim())) {
    validateMsg.value = "Please enter a valid email address.";
    return;
  } else if (!phoneRegx.test(useStore.userDetails.phone)) {
    validateMsg.value =
      "Please enter a valid phone number (Enter a valid phone number (digits only, optional +).";
    return;
  }
  validateMsg.value = "";
  useStore.nextStep();
};
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-from {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.4s;
}
</style>
