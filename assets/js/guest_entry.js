function nameEdit() {
  // document.getElementById("myName").readOnly = false;
  document.getElementById("myName").select();
  this.setSelectionRange(0, this.value.length);
};
function recOnOff() {
  if ($('.rec-btn-on').css('display')=='none') {
    $('.rec-btn').hide();
    $('.rec-btn-on').show();
  } else if ($('.rec-btn-on').css('display')=='block') {
    $('.rec-btn').show();
    $('.rec-btn-on').hide();
  };
};
function camOnOff() {
  if ($('.videoOn').css('display')=='none') {
    $('.videoOff').hide();
    $('.videoOn').show();
    $('#videoFrame').css("background-color","transparent");
    $('.cam-off-msg').hide();
  } else if ($('.videoOn').css('display')=='block') {
    $('.videoOff').show();
    $('.videoOn').hide();
    $('.cam-off-msg').fadeTo('fast',1.00);
    $('#videoFrame').css("background-color","#000");
  };
};
function micOnOff() {
  if ($('.micOn').css('display')=='none') {
    $('.micOff').hide();
    $('.micOn').show();
    $('.micOnParent').show();
  } else if ($('.micOn').css('display')=='block') {
    $('.micOff').show();
    $('.micOn').hide();
    $('.micOnParent').hide();
  };
};
function settingsBox() {
  if ($('.settings-box').css('display')== 'flex') {
    $('.settings-box').css({
       transform: 'translateX(-600px)',
       MozTransform: 'translateX(-600px)',
       WebkitTransform: 'translateX(-600px)',
       msTransform: 'translateX(-600px)',
       display: 'none'
    });
  } else {
    // $('.settings-box').show();
    $('.settings-box').css({
      transform: 'translateX(0px)',
      MozTransform: 'translateX(0px)',
      WebkitTransform: 'translateX(0px)',
      msTransform: 'translateX(0px)',
       display: 'flex'
  });
};
};
