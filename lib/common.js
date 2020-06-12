// character images
var singleChar = "<div class='character'></div>";
var singleCheckWrap = "<div class='characterCheckWrap'></div>";
var selectAllWrap = "<div class='selectAllWrap'></div>";
var gameFe = [	["fe", 0, ""],
                ["c21y9", 295, "Class of 2021 Year 9"],
                ["c21y11", 239, "Class of 2021 Year 11"],
                ];

var currentGame;
var currentGameChars = gameFe;
var characters;
var characterId;

$(document).on("click", "#characters", function() { // open game changer modal
    openPopup("#charChange");
});

$(document).on("click", "#help", function() { // open help modal
    openPopup("#helpMenu");
});

/*
$(function() {
    $( document ).tooltip({
        show: false,
        hide: false,
        position: { my: "top", at: "right bottom" }
    });
});
*/

$(document).on("change", ".selectAll", function() { // add/remove all characters
    if($(this).is(":checked")) {
        $(".characterCheck").each( function() {
            if (!$(this).is(":checked" )) {
                $(this).prop('checked', true).change();
            }
        });
    } else {
        $(".characterCheck").each( function() {
            $(this).prop('checked', false).change();
        });
    }
});

function openPopup(popup) {
    $(popup).css("display","block");
    $("#overlay").css("opacity", 1);
    $("#overlay").css("visibility", "visible");
    $(popup).css("top", alignPopup($(popup)));
}

function closePopups() {
    $("#modal").css("display", "none");
    $("#charChange").css("display", "none");
    $("#helpMenu").css("display", "none");
    $("#screenshotShow canvas").remove();
}

function alignPopup(popup) {
    return Math.floor(($(window).height() - popup.height())/2)+"px";
}

// http://stackoverflow.com/a/3971432 thanks Zack Katz :D
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

//Disclaimer
function GetCookie(name) {
    var arg=name+"=";
    var alen=arg.length;
    var clen=document.cookie.length;
    var i=0;
    while (i<clen) {
      var j=i+alen;
      if (document.cookie.substring(i,j)==arg)
        return "here";
      i=document.cookie.indexOf(" ",i)+1;
      if (i==0) break;
    }
    return null;
  }
  function testFirstCookie(){
      var visit=GetCookie("legalDisclaimerAccepted");
      if (visit==null){
          $("#legalDisclaimer").fadeIn(400);
      } else {
         }		
  }
  $(document).ready(function(){
      $("#legalButton").click(function(){
          console.log('Understood');
          var expire=new Date();
          expire=new Date(expire.getTime()+7776000000);
          document.cookie="legalDisclaimerAccepted=here; expires="+expire+";path=/";
          $("#legalDisclaimer").hide(400);
      });
      testFirstCookie();
  });