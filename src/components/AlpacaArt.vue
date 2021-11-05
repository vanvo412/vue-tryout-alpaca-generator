<template>

</template>

<script>

export default {
  name: 'AlpacaArt',
  props:{
    parts:{
      // accessories: String,
      backgrounds: String,
      ears: String,
      hair: String,
      leg: String,
      mouth: String,
      neck: String,
      eyes: String,
    }
  },
  // mounted() {
  //   this.importAll(require.context('./../assets/alpaca', true, /\.png$/));
  // },
  methods:{

  },
  // watch:{
  //   parts: function (){
  //     this.$forceUpdate();
  //   }

}
</script>

<style >
@tailwind base;
@tailwind components;
@tailwind utilities;


</style>