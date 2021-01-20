var constraints = { video: { facingMode: "environment" }, audio: false };

const cameraView = document.querySelector("#camera--view");
const cameraOutput = document.querySelector("#camera--output");
const cameraSensor = document.querySelector("#camera--sensor");
const cameraTrigger = document.querySelector("#camera--trigger");

window.addEventListener("load", cameraStart, false);

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    console.log(cameraOutput.src);
    cameraOutput.classList.add("taken");
};


function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks() [0];
            cameraView.srcObject = stream;
        })
        .catch(function(err) {
            console.error("Oops. Something is broken", err);
        })
}