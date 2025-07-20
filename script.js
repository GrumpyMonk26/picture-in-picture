const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// promt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("selectMediaStream has an error", error);
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disable = true;
  //   start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disable = false;
});

selectMediaStream();
