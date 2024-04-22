<template>
<div class="container mt-3">
   <h1>影片檢測</h1>
<div class="video-container">
  <div class="row justify-content-center">
  <a class="btn btn-outline-success" :disabled="isPlaying" @click="play">Play</a>
<a class="btn btn-outline-danger ml-2" :disabled="!isPlaying" @click="stop">Stop</a>

  </div>
    <div class="row justify-content-center mt-3">
         <video ref="video_player"
    src="https://www.w3schools.com/tags/mov_bbb.mp4"

    :width="videoSize" @ended="onEnd()">
<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
and watch it with your favorite video player!

</video>
    </div>
 </div>
</div>
</template>

<script>
export default {
    name: 'Play',
    data () {
        return {
            isPlaying: false,
             videoSize:"width:480",
        }
    },
    created(){
      this.videaSiae();
    },
    methods: {
      videaSiae(){
        const vm=this;
         vm.videoSize="480";
        if(screen.width<533 || screen.width===533){
            vm.videoSize="400";
          }
        if(screen.width===414){
           vm.videoSize="350";
        }
        if(screen.width===386){
           vm.videoSize="320";
        }

         if(screen.width===360){
           vm.videoSize="300";

        }
          if(screen.width===353){
           vm.videoSize="280";

        }
           if(screen.width===320){
           vm.videoSize="270";

        }
      },
   onEnd () {
      alert('test successfull');
    //  $('#myModal').modal('show')
    },
    play() {
      const vm=this;
    	this.$refs.video_player.play()
      vm.isPlaying = true
    },
    stop() {
      const vm=this;
    	this.$refs.video_player.pause()
      vm.isPlaying = false
    }
    }
}
</script>
