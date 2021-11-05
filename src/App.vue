<template>
  <div id="app" class="bg-yellow-100 font-mono min-h-screen">
      <h1 class="font-black text-7xl text-green-800">Alpaca Generator</h1>
      <h2 class="font-black text-4xl text-green-500">by Van Vo</h2>
      <div>
        <div id="pic" class="relative block">

          <img v-for="(filename,folder,index) in parts"
               v-bind:key="index"
               v-bind:src="fetchImg(folder,filename)"
               class="absolute w-96 h-96"
               alt=""
               v-bind:class="{'z-index':index}">

          <img src="./assets/alpaca/nose.png"
               class="absolute w-96 h-96"
               alt="" style="z-index: 10">

          <div class="block relative w-96 h-96"></div>

        </div>

        <div>
          <div>
            <h3 class="font-black text-xl text-indigo-800 my-3"> Acessorize your Alpaca</h3>
            <button
                class="m-1 border-2 border-indigo-500 rounded-full font-bold text-indigo-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white mr-6"
                v-for="a in alpaca"
                v-on:click="selectButton(a)"
                v-bind:key="a.id">
              {{a.label}}
            </button>
          </div>
          <div>
            <h3 class="font-black text-xl text-indigo-800 my-3"> {{chosenDir.label}}</h3>
            <button
                class="m-1 border-2 border-indigo-500 rounded-full font-bold text-indigo-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white mr-6"
                v-for="c in chosenDir.items"
                v-bind:key="c.id"
                v-on:click="setFeatures(c)">
              {{c.label}}
            </button>
          </div>
        </div>

<!--        <div>-->
<!--          <button-->
<!--              class="mx-1 my-5 border-4 border-green-900 bg-green-900 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-opacity-0 hover:text-green-900 mr-6"-->
<!--              v-on:click="download"-->
<!--          > Download</button>-->
<!--        </div>-->
      </div>


  </div>
</template>


<script>
import {ALPACA} from "@/style/alpaca";
import mergeImage from "merge-image";
// import AlpacaArt from "@/components/AlpacaArt";


export default {
  name: 'App',
  // components: {AlpacaArt},
  data(){
    return {
      alpaca: ALPACA,
      chosenDir: ALPACA[0],
      //all parts of the alpaca
      parts: {
        backgrounds: 'yellow50',
        ears: 'default',
        hair: 'default',
        leg: 'default',
        neck: 'default',
        mouth: 'default',
        eyes: 'default',
        accessories: 'glasses',
      },
      image: require('@/assets/alpaca/backgrounds/yellow70.png'),
    }
  },

  methods:{
    selectButton(inp){
      // if(event)
        this.chosenDir = inp;
    },
    fetchImg: function (dir, file) {
        return require(`@/assets/alpaca/${dir}/${file}.png`) ;

    },
    setFeatures(inp){
        for(const p in this.parts){
          if(p===this.chosenDir.directory){
            this.parts[p]=inp.filename;
            this.$forceUpdate();
            // this.image= require(`@/assets/alpaca/${this.chosenDir.directory}/${inp.filename}.png`)
          }
        }

    },
    download(){
      let imgArray=[];

      for (const p in this.parts){
        imgArray.push(this.fetchImg(p,this.parts[p]));
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
