<template>
    <div id="app">
        <Resource name="Credits" v-bind:amount="credits" v-bind:credits="credits"></Resource>
        <Resource name="Ore Reserves" units="tons" v-on:doBuy="buyOre" v-on:doSell="sellOre" v-bind:amount="ore" v-bind:buyPrice="oreBuy" v-bind:sellPrice="oreSell" v-bind:credits="credits" transactional></Resource>
        <Resource name="Mines" v-bind:amount="mines" v-bind:credits="credits"></Resource>
        <Resource name="Colonists" v-bind:amount="colonists" v-bind:credits="credits"></Resource>
        <Resource name="Food" units="units" v-on:doBuy="buyFood" v-on:doSell="sellFood" v-bind:amount="food" v-bind:buyPrice="foodBuy" v-bind:sellPrice="foodSell" v-bind:credits="credits" transactional></Resource>
        <Resource name="Satisfaction" v-bind:amount="satisfaction" v-bind:credits="credits"></Resource>
        <br>
        <button v-on:click="mineOre">Mine Ore</button>
    </div>
</template>

<script>
  import Resource from './components/Resource';
  export default {
    name: 'app',
    components: {
      Resource
    },
    data () {
      return {
        ore: 0,
        mines: 1,
        colonists: 12,
        food: 1800,
        satisfaction: 1.0,
        credits: 1000,
        foodBuy: 18,
        foodSell: 6,
        oreBuy: 25,
        oreSell: 8,
      }
    },
    methods: {
      sellOre: function(amount) {
        this.credits += amount * this.oreSell;
        this.ore -= amount;
      },
      buyOre: function(amount) {
        this.credits -= amount * this.oreBuy;
        this.ore += amount;
      },
      sellFood: function(amount) {
        this.credits += amount * this.foodSell;
        this.food -= amount;
      },
      buyFood: function(amount) {
        this.credits -= amount * this.foodBuy;
        this.food += amount;
      },
      mineOre: function() {
        this.ore+=(((10 * this.satisfaction) * this.colonists) * this.mines);
      },
      gameLoop: function() {
        this.mineOre();
        this.food-=(this.colonists * 2);
        if (this.food < 0){
          this.food = 0;
        }

        if (this.food / this.colonists > 120) {
          this.satisfaction+=0.1;
        }
        if (this.food / this.colonists < 80) {
          this.satisfaction-=0.2;
        }
        if (this.satisfaction > 1) {
          this.satisfaction = 1;
        }
        if (this.satisfaction < 0) {
          this.satisfaction = 0;
        }

        if (this.satisfaction > 0.6){
          this.colonists+=1
        } else if(this.colonists > 0){

          this.colonists-=1
        }
      }
    },
    mounted: function() {
      setInterval(this.gameLoop, 1000);
    }
  }
</script>

<style lang="css">
    #app {
        color: red;
    }
</style>