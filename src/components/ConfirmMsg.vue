<template>
  <div class="ConfirmMsg">
    <div class="text-center">
      <div class="image mb-3">
        <img src="/images/icon-thank-you.svg" alt="" />
      </div>
      <div class="message text-center">
        <h2 class="m-0 my-3">Thank you Mr. {{ useStore.userDetails.name }}!</h2>
        <p class="paraMsg w-75 mx-auto">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you
          ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSubscriptionStore } from "@/stores/useSubscriptionStore";
const useStore = useSubscriptionStore();
</script>

<style lang="scss" scoped>
.paraMsg {
  color: #999a9f !important;
}
</style>
