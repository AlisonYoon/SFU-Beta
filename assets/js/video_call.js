var isfullscreen = false;
function nameEdit() {
  // document.getElementById("myName").readOnly = false;
  document.getElementById("myName").select();
  this.setSelectionRange(0, this.value.length);
};
function videoHeight() {
  if(isfullscreen){
    var screenContainer = document.getElementById("screenContainer");
    screenContainer.style.height = "";
    screenContainer.style.width = "";
    var videoDom = document.getElementsByClassName("video-box");
    for(var i=0, n=videoDom.length; i<n; i++){
      videoDom[i].style.height = "";
      videoDom[i].style.width = "";
    }
    $(".screen-container .video-box:nth-child(2), .screen-container .video-box:nth-child(3), .screen-container .video-box:nth-child(4)").css({
      'position':'relative',
      'width': '128px',
      'height': '96px',
      'bottom': '116px',
      'margin': '0 5px',
      'transition': 'all .2s ease'
    });
    return;
  }
  else{
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
  }

};
function openAttendee() {
   if($("#roomActivity").hasClass('open')){
    $("#roomActivity").removeClass('open');
    }
    else{
    $("#roomActivity").addClass('open');
    }
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
    $('#videoFrame').css({"background-color":"transparent",
    '-webkit-box-shadow': 'none',
  '-moz-box-shadow': 'none',
  'box-shadow': 'none'
  });
    $('.cam-off-msg').hide();
  } else if ($('.video-btn').css('display')=='block') {
    $('.video-btn-off').show();
    $('.video-btn').hide();
    $('.cam-off-msg').fadeTo('fast',1.00);
    $('#videoFrame').css({"background-color":"rgba(0,0,0,.5)",
    '-webkit-box-shadow': 'inset 0px 0px 153px 34px rgba(0,0,0,0.8)',
  '-moz-box-shadow': 'inset 0px 0px 153px 34px rgba(0,0,0,0.8)',
  'box-shadow': 'inset 0px 0px 153px 34px rgba(0,0,0,0.8)'});
  };
};
// toolVideoOnOff() changed for my video off screen
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
  isfullscreen = true;
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
$("#videoBox").addClass('fullscreen');
$(".screenShareOwner ").addClass('fullscreen');
$(".videoView-topToolbar button figure div").css('display','block');
$(".videoView-topToolbar button figure img").css('display','none');
$(".video-toolbar-fixed").css('z-index', 10000000000);
$(".video-space-header").css('z-index', 10000000000);
$(".screen-container").css('justify-content',"center");
}
else{
  isfullscreen = false;
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
$("#videoBox").removeClass('fullscreen');
$(".screenShareOwner ").removeClass('fullscreen');
$(".videoView-topToolbar button figure div").css('display','none');
$(".videoView-topToolbar button figure img").css('display','block');
}
};
function fullScreenToolBox() {
  if(isfullscreen){
    $("#videoToolbarFixed").toggleClass('toolbarHide');
    $('.screenShareOwner.fullscreen').toggleClass('ownervideoDown');
    $('.video-space-header').toggleClass('copylinkHide');
      if($("#videoToolbarFixed").hasClass('toolbarHide')) {
      $(".screen-container .video-box:nth-child(2), .screen-container .video-box:nth-child(3), .screen-container .video-box:nth-child(4) ").css('bottom','116px');
      } else {
      $(".screen-container .video-box:nth-child(2), .screen-container .video-box:nth-child(3), .screen-container .video-box:nth-child(4) ").css('bottom','206px');
      };
  }
};
// Tool bar hide function
function chatAreaOpen() {
  $('.chat-open-button').toggleClass('chat-area-open');
  if ($('#chatArea').css('width')=='0px') {
    $('#chatArea').css('width','320px');
  } else {
    $('#chatArea').css('width','0');
  };
}

// Copy Link button click
const copyLinkClick = () => {
  $('.copy-link-msg').text("Copied!");
}
