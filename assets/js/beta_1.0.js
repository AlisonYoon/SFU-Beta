function nameEdit() {
  // document.getElementById("myName").readOnly = false;
  document.getElementById("myName").select();
  this.setSelectionRange(0, this.value.length);
};
function videoHeight() {
console.error("ttttttt");
var videoDom = document.getElementsByClassName("video-box");
for(var i=0, n=videoDom.length; i<n; i++){
  var videoWidth = videoDom[i].offsetWidth;
  var videoHeight = videoWidth * 3/4;
  if (n < 3) {
    videoWidth = videoDom[i].offsetWidth;
    videoHeight = videoWidth * 3/4;
    videoDom[i].style.height == videoHeight + "px";
  } else if (n === 3) {
    videoDom[i].style.width = 31 + "%";
    videoWidth;
    videoHeight;
    videoDom[i].style.height = videoHeight + "px";
  }  else if (n === 4) {
  var screenContainer = document.getElementById("screenContainer");
  screenContainer.style.height = 80 + "%";
  screenContainer.style.width = 65 + "%";
  videoHeight = (1 / 2 * document.getElementById("screenContainer").offsetHeight) - 120;

  videoWidth = videoHeight * 4 / 3;
  videoDom[i].style.height = videoHeight + "px";
  videoDom[i].style.width = videoWidth + "px";
} else {
  var screenContainer = document.getElementById("screenContainer");
  screenContainer.style.width = 65 + "%";
  screenContainer.style.height = 80 + "%";
  videoHeight = (1 / 2 * document.getElementById("screenContainer").offsetHeight) - 120 ;

  videoDom[i].style.width = 31 + "%";

  videoWidth = videoDom[i].offsetWidth;
  videoHeight = videoWidth * 3 / 4;
  videoDom[i].style.height = videoHeight + "px";

  console.error(document.getElementById("screenContainer").offsetHeight);
  console.error(document.getElementById("screenContainer").offsetWidth);
  };
  videoDom[i].style.height = videoHeight + "px";
  console.error('videoWidth = ' + videoWidth + "  Height = " + videoHeight);
}
};
function openAttendee() {
   $("#roomActivity").toggle('open');
};
function videoOnOff() {
    $("#cameraStatusIcon1").toggleClass('cam-off');
};
