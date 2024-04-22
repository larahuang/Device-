<template>
<div class="container mt-3">
     <h1>麥克風設備檢測</h1>
    <div class="device-content">
        <div v-show="!seeMicrophoneBar">
            <div class="flex-space-center  mt-3 mb-3">
                <div class="confirm-text">
                    <b><i class="fa-solid fa-xmark"></i><span class="text-red">目前檢測不到麥克風設備!</span></b></div>
            </div>
            <div class="flex-space-start illustrate">
                <span class="icons-notification color-red"></span>
                <div class="ml-2">
                    <div class="confirm-text"><b>請選擇您的裝置，並確認您的麥克風是否能聽到自己說話的聲音？</b></div>
                    <div class="confirm-text">Please chose your device and check you can hear your voice?</div>
                </div>
            </div>
        </div>
        <div v-show="seeMicrophoneBar">
            <div class="flex-space-center result">
                <div class="confirm-text">
                    <b><i class="fa-solid fa-check"></i><span class="text-success">已檢測到麥克風設備!</span></b>
                </div>
            </div>

            <div class="videoBar flex-space-start mt-3">
                    <span>請選擇麥克風設備：</span>
                    <select id="MicSelect" name="MicSelect" class="custom-select"></select>
            </div>
                
            <div class="pids-wrapper d-flex justify-content-between">
                <div class="pid"></div>
                <div class="pid"></div>
                <div class="pid"></div>
                <div class="pid"></div>
                <div class="pid"></div>
                <div class="pid"></div>
                <div class="pid"></div>
                <div class="pid"></div>
                <div class="pid"></div>
                <div class="pid"></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'AudioInputTest',
    data () {
        return {
            MicSelect:document.querySelector('select#MicSelect'),
            seeMicrophoneBar:false,
            AUDIOInputOK:false,
            selectedAudioInput:[]
        }
    },
    mounted(){
        // debugger;
        if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
            // Good to go!
        } else {
            alert('getUserMedia() is not supported by your browser');
        }
        
        this.$nextTick(function () {
            this.askForPermission();
            const vm=this;
            document.querySelector('#MicSelect').onchange = () => {
                let new_selection = document.querySelector('#MicSelect').children[
                    document.querySelector('#MicSelect').selectedIndex
                ].value;
                vm.MicSelect = new_selection;
                this.setMic();
            };

            navigator.mediaDevices.ondevicechange = event => {
                document.querySelector('#MicSelect').innerHTML = '';
                this.askForPermission();
            }   
            
        })
    },
    methods:{
        askForPermission:function(){
           const vm=this;
            var constraints = { audio : true };
            navigator.mediaDevices.getUserMedia(constraints)
            .then(() => {
                this.populateMicList();  
                vm.AUDIOInputOK = true;
            })
            .catch(() => {
                this.NoDevice();
                // console.error(err);
            });
        },
        populateMicList(){
          const vm=this;
            var count = 0;
            document.querySelector('#MicSelect').innerHTML = '';
            navigator.mediaDevices.enumerateDevices().then((deviceList) => {
                // console.log(deviceList);
                vm.MicSelect = deviceList.filter((x) => x.kind == 'audioinput')[0].deviceId;
                this.setMic();

                deviceList.forEach((device) => {
                    if (device.kind == 'audioinput') {
                        count+=1;
                        let item = document.createElement('option');
                        item.value = device.deviceId;
                        if(device.label == ""){
                            item.innerHTML = "預設"
                        }else{
                            item.innerHTML = device.label;
                        }
                        document.querySelector('#MicSelect').appendChild(item);
                    }
                });
                
                if(count = 0){
                    this.NoDevice();
                }else{
                    vm.seeMicrophoneBar=true;
                }
            });
        },
        setMic(){
            // if (window.stream) {
            //     window.stream.getTracks().forEach(track => {
            //         track.stop();
            //     });
            // }
const vm=this;
            vm.selectedAudioInput = vm.MicSelect;
            var constraints = {
                audio: {
                    deviceId: vm.MicSelect ? {exact: vm.MicSelect} : undefined
                }
            };

            navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
                window.stream = stream; // make stream available to console
                const audioContext = new AudioContext();
                const analyser = audioContext.createAnalyser();
                const microphone = audioContext.createMediaStreamSource(stream);
                const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);

                analyser.smoothingTimeConstant = 0.8;
                analyser.fftSize = 1024;

                microphone.connect(analyser);
                analyser.connect(scriptProcessor);
                scriptProcessor.connect(audioContext.destination);
                scriptProcessor.onaudioprocess = function() {
                    const array = new Uint8Array(analyser.frequencyBinCount);
                    analyser.getByteFrequencyData(array);
                    const arraySum = array.reduce((a, value) => a + value, 0);
                    const average = arraySum / array.length;
                    const allPids = [...document.querySelectorAll('.pid')];
                    const numberOfPidsToColor = Math.round(average / 10);
                    const pidsToColor = allPids.slice(0, numberOfPidsToColor);
                    for (const pid of allPids) {
                        pid.style.backgroundColor = "#e6e7e8";
                    }
                    for (const pid of pidsToColor) {
                        // console.log(pid[i]);
                        pid.style.backgroundColor = "#69ce2b";
                    }
                };
            })
            .catch(function(err) {
                /* handle the error */
                console.error(err);
            });
        },
        NoDevice(){
          const vm=this;
            let item = document.createElement('option');
            item.innerHTML = "找不到麥克風設備";
            document.querySelector('#MicSelect').appendChild(item);
           vm.AUDIOInputOK = false;
           vm.seeMicrophoneBar=false;
        },
    }
}
</script>