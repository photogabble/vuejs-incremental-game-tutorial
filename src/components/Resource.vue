<template>
    <div class="resource">
        <h1>{{ displayName }}</h1>
        <div v-if="transactional" class="resourcePurchase">
            <input v-model="orderAmount" type="text" placeholder="Amount to buy/sell">
            <button v-on:click="doSell" v-bind:disabled="!canSell">Sell {{ sellPrice }} credits{{units.length > 0 ? '/' + units : '' }}</button>
            <button v-on:click="doBuy" v-bind:disabled="!canBuy">Buy {{ buyPrice }} credits{{units.length > 0 ? '/' + units : '' }}</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'resource',
    props: {
      name: {
        type: String,
        required: true
      },
      units: {
        type: String,
        default: ''
      },
      amount: {
        type: Number,
        required: true
      },
      transactional: {
        type: Boolean,
        default: false
      },
      sellPrice: {
        type: Number,
        default: 0
      },
      buyPrice: {
        type: Number,
        default: 0
      },
      credits: {
        type: Number,
        required: true
      }
    },
    data: function(){
      return {
        orderAmount: 0
      };
    },
    computed: {
      displayName: function () {
        return this.name + ': ' + this.amount + (this.units.length > 0 ? this.units : '');
      },
      canBuy: function () {
        if (this.orderAmount < 1) { return false; }
        return (this.orderAmount * this.buyPrice) < this.credits;
      },
      canSell: function () {
        if (this.orderAmount < 1) { return false; }
        return this.amount > this.orderAmount;
      }
    },
    methods: {
      doBuy: function () {
        this.$emit('doBuy', parseInt(this.orderAmount));
      },
      doSell: function () {
        this.$emit('doSell', parseInt(this.orderAmount));
      }
    }
  }
</script>