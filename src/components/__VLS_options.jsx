export default (await import('vue')).defineComponent({
name: 'Camera',
data()
{
return {
isCameraOpen: false,
isPhotoTaken: false,
isShotPhoto: false,
isLoading: false,
link: '#',
videoSize: "width:450px;height:337px",
};
},

methods: {
toggleCamera()
{
const vm = this;
if (vm.isCameraOpen) {
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
createCameraElement()
{
const vm = this;
vm.isLoading = true;

const constraints = (window.constraints = {
audio: false,
video: true
});


navigator.mediaDevices
.getUserMedia(constraints).then(stream =>
{
vm.isLoading = false;
this.$refs.camera.srcObject = stream;
console.log('MediaStream', stream);

if (screen.width === 414 || screen.width < 414) {
vm.videoSize = "width:80vw;height:auto";
}


})
.catch(error =>
{
vm.isLoading = false;
alert("檢查是否有攝影機設備或瀏覽器不支持。");
});
},

stopCameraStream()
{
let tracks = this.$refs.camera.srcObject.getTracks();

tracks.forEach(track =>
{
track.stop();
});
},
//獲取照片
takePhoto()
{
if (!this.isPhotoTaken) {
this.isShotPhoto = true;

const FLASH_TIMEOUT = 50;

setTimeout(() =>
{
this.isShotPhoto = false;
}, FLASH_TIMEOUT);
}

this.isPhotoTaken = !this.isPhotoTaken;

const context = this.$refs.canvas.getContext('2d');
context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
},
//下載照片
downloadImage()
{
const download = document.getElementById("downloadPhoto");
const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
.replace("image/jpeg", "image/octet-stream");
download.setAttribute("href", canvas);
}
}
});
const __VLS_options = {
...({
name: 'Camera',
data()
{
return {
isCameraOpen: false,
isPhotoTaken: false,
isShotPhoto: false,
isLoading: false,
link: '#',
videoSize: "width:450px;height:337px",
};
},

methods: {
toggleCamera()
{
const vm = this;
if (vm.isCameraOpen) {
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
createCameraElement()
{
const vm = this;
vm.isLoading = true;

const constraints = (window.constraints = {
audio: false,
video: true
});


navigator.mediaDevices
.getUserMedia(constraints).then(stream =>
{
vm.isLoading = false;
this.$refs.camera.srcObject = stream;
console.log('MediaStream', stream);

if (screen.width === 414 || screen.width < 414) {
vm.videoSize = "width:80vw;height:auto";
}


})
.catch(error =>
{
vm.isLoading = false;
alert("檢查是否有攝影機設備或瀏覽器不支持。");
});
},

stopCameraStream()
{
let tracks = this.$refs.camera.srcObject.getTracks();

tracks.forEach(track =>
{
track.stop();
});
},
//獲取照片
takePhoto()
{
if (!this.isPhotoTaken) {
this.isShotPhoto = true;

const FLASH_TIMEOUT = 50;

setTimeout(() =>
{
this.isShotPhoto = false;
}, FLASH_TIMEOUT);
}

this.isPhotoTaken = !this.isPhotoTaken;

const context = this.$refs.canvas.getContext('2d');
context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
},
//下載照片
downloadImage()
{
const download = document.getElementById("downloadPhoto");
const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
.replace("image/jpeg", "image/octet-stream");
download.setAttribute("href", canvas);
}
}
}),
};
const __VLS_name = (await import('./__VLS_types.js')).getNameOption({
name: 'Camera',
data()
{
return {
isCameraOpen: false,
isPhotoTaken: false,
isShotPhoto: false,
isLoading: false,
link: '#',
videoSize: "width:450px;height:337px",
};
},

methods: {
toggleCamera()
{
const vm = this;
if (vm.isCameraOpen) {
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
createCameraElement()
{
const vm = this;
vm.isLoading = true;

const constraints = (window.constraints = {
audio: false,
video: true
});


navigator.mediaDevices
.getUserMedia(constraints).then(stream =>
{
vm.isLoading = false;
this.$refs.camera.srcObject = stream;
console.log('MediaStream', stream);

if (screen.width === 414 || screen.width < 414) {
vm.videoSize = "width:80vw;height:auto";
}


})
.catch(error =>
{
vm.isLoading = false;
alert("檢查是否有攝影機設備或瀏覽器不支持。");
});
},

stopCameraStream()
{
let tracks = this.$refs.camera.srcObject.getTracks();

tracks.forEach(track =>
{
track.stop();
});
},
//獲取照片
takePhoto()
{
if (!this.isPhotoTaken) {
this.isShotPhoto = true;

const FLASH_TIMEOUT = 50;

setTimeout(() =>
{
this.isShotPhoto = false;
}, FLASH_TIMEOUT);
}

this.isPhotoTaken = !this.isPhotoTaken;

const context = this.$refs.canvas.getContext('2d');
context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
},
//下載照片
downloadImage()
{
const download = document.getElementById("downloadPhoto");
const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
.replace("image/jpeg", "image/octet-stream");
download.setAttribute("href", canvas);
}
}
} as const);
function __VLS_template()
{
import * as __VLS_types from './__VLS_types.js'; import('./__VLS_types.js');
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components['/* __VLS_.SearchTexts.Components */'];
({} as __VLS_types.GlobalAttrs)['/* __VLS_.SearchTexts.GlobalAttrs */'];
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
{
<div class={"\u0063\u006f\u006e\u0061\u0074\u0069\u006e\u0065\u0072\u0020\u006d\u0074\u002d\u0033"}></div>;

{
<h1></h1>;

}
{
<div class={"\u0063\u0061\u006d\u0065\u0072\u0061\u002d\u0063\u006f\u006e\u0074\u0061\u0069\u006e\u0065\u0072"}></div>;

{
<div class={"\u0063\u0061\u006d\u0065\u0072\u0061\u002d\u0062\u0075\u0074\u0074\u006f\u006e"}></div>;

{
<a class={"\u0062\u0074\u006e"}></a>;

<a class={({ 'is-primary': !__VLS_ctx.isCameraOpen, 'is-danger': __VLS_ctx.isCameraOpen })} />;
const __VLS_6: {
'click': __VLS_types.FillingEventArg<
__VLS_types.GlobalAttrs['onClick']
>;
} = {
click: (__VLS_ctx.toggleCamera)
};
[isCameraOpen, isCameraOpen, toggleCamera,];
if (!__VLS_ctx.isCameraOpen) {
[isCameraOpen,];
{
<span></span>;

}
}
else {
{
<span></span>;

}
}
}
}
{
<div class={"\u0063\u0061\u006d\u0065\u0072\u0061\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067"}></div>;

__VLS_types.directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.isCameraOpen && __VLS_ctx.isLoading));
[isCameraOpen, isLoading,];
{
<ul class={"\u006c\u006f\u0061\u0064\u0065\u0072\u002d\u0063\u0069\u0072\u0063\u006c\u0065"}></ul>;

{
<li></li>;

}
{
<li></li>;

}
}
}
if (__VLS_ctx.isCameraOpen) {
[isCameraOpen,];
{
<div class={"\u0063\u0061\u006d\u0065\u0072\u0061\u002d\u0062\u006f\u0078"}></div>;

<div class={({ 'flash': __VLS_ctx.isShotPhoto })} />;
__VLS_types.directiveFunction(__VLS_ctx.vShow)((!__VLS_ctx.isLoading));
[isShotPhoto, isLoading,];
{
<div class={"\u0063\u0061\u006d\u0065\u0072\u0061\u002d\u0073\u0068\u0075\u0074\u0074\u0065\u0072"}></div>;

<div class={({ 'flash': __VLS_ctx.isShotPhoto })} />;
[isShotPhoto,];
}
{
<video ref={"\u0063\u0061\u006d\u0065\u0072\u0061"} style={(__VLS_ctx.videoSize)} autoplay={true}></video>;

__VLS_types.directiveFunction(__VLS_ctx.vShow)((!__VLS_ctx.isPhotoTaken));
[videoSize, isPhotoTaken,];
// @ts-ignore
(__VLS_ctx.camera);
[camera,];
}
{
<canvas id={"\u0070\u0068\u006f\u0074\u006f\u0054\u0061\u006b\u0065\u006e"} ref={"\u0063\u0061\u006e\u0076\u0061\u0073"} style={(__VLS_ctx.videoSize)}></canvas>;

__VLS_types.directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.isPhotoTaken));
[videoSize, isPhotoTaken,];
// @ts-ignore
(__VLS_ctx.canvas);
[canvas,];
}
}
}
if (__VLS_ctx.isCameraOpen && !__VLS_ctx.isLoading) {
[isCameraOpen, isLoading,];
{
<div class={"\u0063\u0061\u006d\u0065\u0072\u0061\u002d\u0073\u0068\u006f\u006f\u0074"}></div>;

{
<a class={"\u0062\u0075\u0074\u0074\u006f\u006e"}></a>;

const __VLS_20: {
'click': __VLS_types.FillingEventArg<
__VLS_types.GlobalAttrs['onClick']
>;
} = {
click: (__VLS_ctx.takePhoto)
};
[takePhoto,];
{
<i class={"\u0066\u0061\u002d\u0073\u006f\u006c\u0069\u0064\u0020\u0066\u0061\u002d\u0063\u0061\u006d\u0065\u0072\u0061"}></i>;

}
}
}
}
if (__VLS_ctx.isPhotoTaken && __VLS_ctx.isCameraOpen) {
[isPhotoTaken, isCameraOpen,];
{
<div class={"\u0063\u0061\u006d\u0065\u0072\u0061\u002d\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064"}></div>;

{
<a id={"\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u0050\u0068\u006f\u0074\u006f"} download={"\u006d\u0079\u002d\u0070\u0068\u006f\u0074\u006f\u002e\u006a\u0070\u0067"} class={"\u0062\u0075\u0074\u0074\u006f\u006e"} role={"\u0062\u0075\u0074\u0074\u006f\u006e"}></a>;

const __VLS_25: {
'click': __VLS_types.FillingEventArg<
__VLS_types.GlobalAttrs['onClick']
>;
} = {
click: (__VLS_ctx.downloadImage)
};
[downloadImage,];
{
<i class={"\u0066\u0061\u002d\u0073\u006f\u006c\u0069\u0064\u0020\u0066\u0061\u002d\u0063\u006c\u006f\u0075\u0064\u002d\u0061\u0072\u0072\u006f\u0077\u002d\u0064\u006f\u0077\u006e"}></i>;

}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
let __VLS_component!: typeof import('./Home.vue')['default'];
