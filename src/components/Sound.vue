<template>
<div class="container mt-3">
	 <h1>錄音設備檢測</h1>
	<div class="recorder-container">
       	<div class="row phone-head">
            <span></span>


        </div>
		 <div class="phone-content">
			 <ul>
				<li class="msg eg" :key="-1">
                    <div class="avatar"></div>
                    <div class="audio">請說出錄音內容</div>
                </li>
				   <li v-for="(item, index) in chunkList" :key="index" class="msg" @click="onPlay(index)" @touchend.prevent="onPlay(index)">
                            <div class="avatar"></div>
                            <div v-cloak class="audio" :style="{width: 20 * item.duration + 'px'}" :class="{wink: item.wink}">
                                <span>(</span><span>(</span><span>(</span>
                            </div>
                            <div class="duration">{{item.duration}}"</div>
                        </li>
			 </ul>
			  <div class="btn phone-operate" @mousedown="onMousedown" @touchstart.prevent="onMousedown" @mouseup="onMouseup" @touchend.prevent="onMouseup">{{btnText}}</div>
            </div>
		 </div>
         <audio ref="audio"></audio>
    </div>

</template>

<script>
export default {

    //https://codepen.io/_tianxia/pen/JayxoG
  data () {
	  return {
		chunks: [],
		chunkList: [],
		btnText: '按住說話'
	}
  },
 methods: {
        requestAudioAccess () {
            navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
                this.recorder = new window.MediaRecorder(stream);
                this.bindEvents();
            }, error => {
                alert('出錯，請確認已允許瀏覽器錄音權限');
            });
        },

        onMousedown () {
            this.onStart();
            this.btnText = '鬆開結素';
        },

        onMouseup () {
            this.onStop();
            this.btnText = '按住說話';
        },

        onStart () {
            this.recorder.start();
        },

        onStop () {
            this.recorder.stop();
        },

        onPlay (index) {
            this.chunkList.forEach(item => {
                this.$set(item, 'wink', false);
            });

            let item = this.chunkList[index];
            this.audio.src = item.stream;
            this.audio.play();

            this.bindAudioEvent(index);
        },

        bindAudioEvent (index) {
            let item = this.chunkList[index];

            this.audio.onplaying = () => {
                this.$set(item, 'wink', true);
            }

            this.audio.onended = () => {
                this.$set(item, 'wink', false);
            }
        },

        bindEvents () {
            this.recorder.ondataavailable = this.getRecordingData;
            this.recorder.onstop = this.saveRecordingData;
        },

        getRecordingData (e) {
            this.chunks.push(e.data);
        },

        saveRecordingData  () {
            let blob = new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' }),
                audioStream = URL.createObjectURL(blob),
                //估算时长
                duration = parseInt(blob.size / 6600);
            if(duration <= 0) {
                alert('說話時間太短');
                return;
            }
            if(duration > 60) {
                duration = 60;
            }
            this.chunkList.push({duration: duration, stream: audioStream});
            this.chunks = [];
        }
    },

    mounted () {
        if (!navigator.mediaDevices) {
            alert('您的柳蘭契不支持獲取用戶設備');
            return;
        }
        if (!window.MediaRecorder) {
            alert('您的劉覽器不支持錄音');
            return;
        }
        this.audio = this.$refs.audio;
        this.requestAudioAccess();
    }


}
</script>
