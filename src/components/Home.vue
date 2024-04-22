<template>
 <div  class="container mt-3">
   <h1>照相機設備檢測</h1>
  <div class="camera-container">
  <div class="camera-button">
      <a class="btn" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
        <span v-if="!isCameraOpen">Open Camera</span>
        <span v-else>Close Camera</span>
    </a>
  </div>

  <div v-show="isCameraOpen && isLoading" class="camera-loading">
    <ul class="loader-circle">
       <li>已檢測到照相機設備，如果您同意請按允許！</li>
      <li>照相機設備已就緒！</li>
    </ul>
  </div>

  <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">

    <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>

    <video v-show="!isPhotoTaken" ref="camera" :style="videoSize" autoplay></video>

    <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :style="videoSize"></canvas>
  </div>

  <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
    <a  class="button" @click="takePhoto">
      <i class="fa-solid fa-camera"></i>
    </a>
  </div>

  <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
    <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
      <i class="fa-solid fa-cloud-arrow-down"></i>
    </a>
  </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Camera',
  data () {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
      videoSize:"width:450px;height:337px",
    }
  },

  methods: {
    toggleCamera() {
      const vm=this;
      if(vm.isCameraOpen) {
       vm.isCameraOpen = false;
       vm.isPhotoTaken = false;
        vm.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        vm.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    //點擊檢測到攝影機
    createCameraElement() {
       const vm=this;
      vm.isLoading = true;

      const constraints = (window.constraints = {
				audio: false,
				video: true
			});

//https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices
//https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
//視頻軌道()瀏覽器媒體
			navigator.mediaDevices
				.getUserMedia(constraints).then(stream => {
          vm.isLoading = false;
					this.$refs.camera.srcObject = stream;
          console.log('MediaStream',stream)

          if(screen.width===414 || screen.width<414){
            vm.videoSize="width:80vw;height:auto";
          }


				})
				.catch(error => {
          vm.isLoading = false;
					alert("檢查是否有攝影機設備或瀏覽器不支持。");
				});
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

			tracks.forEach(track => {
				track.stop();
			});
    },
    //獲取照片
    takePhoto()
    {
       const vm=this;
      if(!vm.isPhotoTaken) {
       vm.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          vm.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      vm.isPhotoTaken = !vm.isPhotoTaken;

      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },
    //下載照片
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
    .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }
  }
}
</script>

