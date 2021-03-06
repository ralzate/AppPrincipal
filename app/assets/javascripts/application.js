// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require best_in_place
//= require jquery_ujs
//= require bootstrap
//= require lazybox
//= require jasny-bootstrap.min
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  
  // $('a#show_profesion_link').lazybox({closeImg: true});
  
  $('a[rel*=lazybox]').lazybox({close: false, modal: false, opacity: 0.7, klass: 'lazybox', speed: 200});
  $.lazybox.settings = {cancelClass: "button green", submitClass: 'button red', closeImg: false, niceClose: false}
  $.rails.allowAction = $.lazybox.confirm;
 
});

$('#teams').tooltip('show')


// Form Login
$(document).mousemove(function(e){
 TweenLite.to($('.login'), 
    .5, 
    { css: 
        {
            backgroundPosition: ""+ parseInt(event.pageX/8) + "px "+parseInt(event.pageY/'12')+"px, "+parseInt(event.pageX/'15')+"px "+parseInt(event.pageY/'15')+"px, "+parseInt(event.pageX/'30')+"px "+parseInt(event.pageY/'30')+"px"
        }
    });
});




// Validate Only Numbers
function numbersonly(e){
var code;
if (!e) var e = window.event;
if (e.keyCode) code = e.keyCode;
else if (e.which) code = e.which;
var character = String.fromCharCode(code);
//alert('Character was ' + character);
    //alert(code);
    //if (code == 8) return true;
    var AllowRegex  = /^[0-9]/;
    if (AllowRegex.test(character)) return true;     
    return false; 
}


/* Activating Best In Place */
$(document).ready(function() {
  jQuery(".best_in_place").best_in_place();
  $(".best_in_place")
  $(function() {
  $('.whatever-you-like .best-in-place').live('ajax:success', function(event, data, status, xhr) {
    alert("Got a callback!");
  });
});
});







