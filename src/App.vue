<template>
  <div id="app">  
    <router-link to="/" class="list" title="Camera" name="Camera" alt="Camera"> <i class="fa-solid fa-video"></i></router-link> 
     <router-link to="/sound" class="list" title="Volume" name="Volume" alt="Volume"><i class="fa-solid fa-record-vinyl"></i></router-link> 
     <router-link to="/mic" class="list" title="Microphone" name="microphone" alt="microphone"><i class="fa-solid fa-microphone"></i></router-link> 
    
    <router-link to="/play" class="list" title="Play" name="Play" alt="Play"><i class="fa-solid fa-play"></i></router-link> 
     <router-link to="/aboutme" class="list" title="About Me" name="About Me" alt="About Me">Me</router-link>
    <router-view/>
    
   
    
  </div>
</template>

<script>
export default {
  name: 'App',
   data () {
    return {
      info: null
    }
  },
  created(){
    /*
    const api='https://api.coindesk.com/v1/bpi/currentprice.json';
    //console.log(process.env.APIPATH, process.env.CUSTOMPATH);
    this.$http.get(api).then((res) => {
      const vm=this;
      vm.info=res.data;
      console.log(res.data)
    })*/
    }

}
</script>

<style lang="scss">
@import"./assets/scss/all";
</style>
