function nameEdit() {
  // document.getElementById("myName").readOnly = false;
  document.getElementById("myName").select();
  this.setSelectionRange(0, this.value.length);
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
