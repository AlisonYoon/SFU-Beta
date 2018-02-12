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
function soundOnOff() {
  $("#soundStatusIcon1").toggleClass('sound-off');
}
function recOnOff() {
  if ($('.rec-btn-on').css('display')=='none') {
    $('.rec-btn').hide();
    $('.rec-btn-on').show();
  } else if ($('.rec-btn-on').css('display')=='block') {
    $('.rec-btn').show();
    $('.rec-btn-on').hide();
  };
};
// Video, Mic on off
function toolVideoOnOff() {
  if ($('.video-btn').css('display')=='none') {
    $('.video-btn-off').hide();
    $('.video-btn').show();
  } else if ($('.video-btn').css('display')=='block') {
    $('.video-btn-off').show();
    $('.video-btn').hide();
  };
};
function toolMicOnOff() {
  if ($('.mic-btn').css('display')=='none') {
    $('.mic-btn-off').hide();
    $('.mic-btn').show();
  } else if ($('.mic-btn').css('display')=='block') {
    $('.mic-btn-off').show();
    $('.mic-btn').hide();
  };
};
// End Video, Mic on off
function fullscreen(type){
let element = document.getElementById("screenContainer");
if(type===0){
if (element.requestFullScreen) {
element.requestFullScreen();
}
else if(element.webkitRequestFullScreen){
element.webkitRequestFullScreen();
}
else if(element.mozRequestFullScreen){
element.mozRequestFullScreen();
}
$("#screenContainer").addClass('fullscreen');
$(".video-box").addClass('fullscreen');
$(".screenShareOwner ").addClass('fullscreen');
$(".videoView-topToolbar button figure div").css('display','block');
$(".videoView-topToolbar button figure img").css('display','none');
}
else{
if (document.exitFullscreen){
document.exitFullscreen();
}
else if (document.msExitFullscreen){
document.msExitFullscreen();
}
else if (document.mozCancelFullScreen){
document.mozCancelFullScreen();
}
else if (document.webkitExitFullscreen){
document.webkitExitFullscreen();
}
$("#screenContainer").removeClass('fullscreen');
$(".video-box").removeClass('fullscreen');
$(".screenShareOwner ").removeClass('fullscreen');
$(".videoView-topToolbar button figure div").css('display','none');
$(".videoView-topToolbar button figure img").css('display','block');
}

};
