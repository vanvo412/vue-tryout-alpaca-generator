<template>
  <div id="pic">
    <div v-for="(p,k) in parts" :key="k">
      <img v-bind:src="fetchImg(k,p)" class="min-w-98 min-h-98" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlpacaArt',
  props:{
    parts:{
      // accessories: String,
      backgrounds: String,
      ears: String,
      eyes: String,
      hair: String,
      leg: String,
      mouth: String,
      neck: String,
    }
  },
  methods:{
    fetchImg: function (dir, file) {
      return `../assets/alpaca/${dir}/${file}.png`;
    }
  }
}
</script>

<style >
@tailwind base;
@tailwind components;
@tailwind utilities;


</style>