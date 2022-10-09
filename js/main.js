// type 'hi' on your keyboard
var key = [72,74,82];
var ck = 0;
var max = key.length;

var hi = function() {

  var shock = document.createElement('div');
  var img = new Image;
  img.src = data;
  img.style.width = '300px';
  img.style.height = '300px';
  img.style.transition = '1s all';
  img.style.position = 'fixed';
  img.style.left = 'calc(50% - 150px)';
  img.style.bottom = '-100px';
  img.style.zIndex = 999999;

  document.body.appendChild(img);

  window.setTimeout(function(){
    img.style.bottom = '-50px';
  },30);

  window.setTimeout(function(){
    img.style.bottom = '-300px';
  }, 4300);
  window.setTimeout(function(){
    img.parentNode.removeChild(img);
  }, 5400);

};

var record = function(e) {

  if ( e.which === key[ck] ) {
    ck++;
  } else {
    ck = 0;
  }

  if ( ck >= max ) {
    hi();
    ck = 0;
  }

};

var init = function(data) {
  document.addEventListener('keyup', record);
};

var data = 'https://i.gifer.com/5EeH.gif';

init(data);



var typed = new Typed("#typed", {
    typeSpeed: 50,
    stringsElement: "#typed-strings",
    cursorChar: "_",
});

