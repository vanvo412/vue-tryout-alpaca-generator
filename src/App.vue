<template>
  <div id="app" class="bg-yellow-100 font-mono min-h-screen">
      <h1 class="font-black text-7xl text-green-800">Alpaca Generator</h1>
      <h2 class="font-black text-4xl text-green-500">by Van Vo</h2>
      <div>
        <div>
          <AlpacaArt v-bind:parts="parts"/>
        </div>

        <div>
          <div>
            <button
                class="border-2 border-indigo-500 rounded-full font-bold text-indigo-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white mr-6"
                v-for="a in alpaca"
                v-on:click="selectButton(a)"
                v-bind:key="a.id">
              {{a.label}}
            </button>
          </div>
          <div>
            <button
                class="border-2 border-indigo-500 rounded-full font-bold text-indigo-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white mr-6"
                v-for="c in chosenDir"
                v-bind:key="c.id"
                v-on:click="setFeatures(c)">
              {{c.label}}
            </button>
          </div>
        </div>
      </div>


  </div>
</template>


<script>
import {ALPACA} from "@/style/alpaca";
import mergeImage from "merge-image";
import AlpacaArt from "@/components/AlpacaArt";


export default {
  name: 'App',
  components: {AlpacaArt},
  data(){
    return {
      alpaca: ALPACA,
      chosenDir: ALPACA[0],
      //all parts of the alpaca
      parts: {
        // accessories: '',
        backgrounds: 'yellow50',
        ears: 'default',
        eyes: 'default',
        hair: 'default',
        leg: 'default',
        mouth: 'default',
        neck: 'default',
      },
      // image: './assets/alpaca/backgrounds/yellow70.png',
    }
  },

  methods:{
    selectButton(inp){
      this.chosenDir = inp.items;
    },
    setFeatures(inp){
      this.parts.this.chosenDir.directory=inp.filename;
    },
    download(){
      let imgArray=[];

      for (const p in this.parts){
        imgArray.push(this.fetchImage(Object.keys(p),p));
      }

      return mergeImage([imgArray])
          .then(b64 => document.querySelector('img').src = b64);
    }
  }
}
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;


</style>
