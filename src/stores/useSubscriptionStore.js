import { defineStore } from "pinia";

export const useSubscriptionStore = defineStore("subscription", {
  state: () => ({
    currentStep: 1,
    userDetails: { name: "", email: "", phone: "" },
    plans: [
      {
        name: "plans",
        id: "plan1",
        img: "/images/icon-arcade.svg",
        planName: "Arcade",
        price: 9,
      },
      {
        name: "plans",
        id: "plan2",
        img: "/images/icon-advanced.svg",
        planName: "Advanced",
        price: 12,
      },
      {
        name: "plans",
        id: "plan3",
        img: "/images/icon-pro.svg",
        planName: "Pro",
        price: 15,
      },
    ],
    addOns: [
      { id: 1, title: "Online service", description: "Access to multiplayer games", price: 1 },
      { id: 2, title: "Larger storage", description: "Extra 1TB of cloud save", price: 2 },
      {
        id: 3,
        title: "Customizable profile",
        description: "Custom theme on your  profile",
        price: 2,
      },
    ],
    selectedPlanId: "plan1",
    selectedAddonsId: [],
    isYearly: false,
    isConfirmed: false,
    subscribe: {},
  }),
  getters: {
    selectedOns() {
      const multiplier = this.isYearly ? 10 : 1;
      const ons = this.addOns.filter((ons) => this.selectedAddonsId.includes(ons.id));
      return ons.map((ons) => ({ ...ons, price: ons.price * multiplier }));
    },
    selectedPlan() {
      const multiplier = this.isYearly ? 10 : 1;
      const plan = this.plans.find((plan) => plan.id === this.selectedPlanId);
      return { ...plan, price: plan.price * multiplier };
    },
    plansAfterPrice() {
      const multiplier = this.isYearly ? 10 : 1;
      return this.plans.map((plan) => ({ ...plan, price: plan.price * multiplier }));
    },
    addonsAfterPrice() {
      const multiplier = this.isYearly ? 10 : 1;
      return this.addOns.map((ons) => ({ ...ons, price: ons.price * multiplier }));
    },
    totalPrice() {
      const pricePlan = this.selectedPlan.price;
      const priceOns = this.selectedOns.reduce((acc, ons) => acc + ons.price, 0);
      return pricePlan + priceOns;
    },
  },
  actions: {
    nextStep() {
      if (this.currentStep === 5) {
        return;
      }
      return this.currentStep++;
    },
    previousStep() {
      if (this.currentStep === 1) {
        return;
      }
      this.currentStep--;
    },
    confirmSubsc() {
      this.subscribe = { user: this.userDetails, plan: this.selectedPlan, ons: this.selectedOns };
      console.log(this.subscribe);
      this.isConfirmed = true;
    },
  },
});
