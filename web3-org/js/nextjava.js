
//about aditional javascripts starts.....
function btn1(){
   document.getElementById('showKlpkHistory').style.display="block";
   document.getElementById('showKlpkHistoryB').style.display="none";
   document.getElementById('showKlpkHistoryC').style.display="none";
   document.getElementById('showKlpkHistoryD').style.display="none";

   document.getElementById('about-content').style.display="none";
   

}
function btn2(){
   document.getElementById('showKlpkHistoryB').style.display="block";
   document.getElementById('showKlpkHistory').style.display="none";
   document.getElementById('showKlpkHistoryC').style.display="none";
   document.getElementById('showKlpkHistoryD').style.display="none";

}
function btn3(){
   document.getElementById('showKlpkHistoryC').style.display="block";
   document.getElementById('showKlpkHistory').style.display="none";
   document.getElementById('showKlpkHistoryB').style.display="none";
   document.getElementById('showKlpkHistoryD').style.display="none";

}
function btn4(){
   document.getElementById('showKlpkHistoryD').style.display="block";
   document.getElementById('showKlpkHistory').style.display="none";
   document.getElementById('showKlpkHistoryB').style.display="none";
   document.getElementById('showKlpkHistoryC').style.display="none";

}
function showHistoryMenu(){
	document.getElementById('about-content')
}
//about aditional javascripts *********end....********

//departments aditional javascripts starts......
         //div display=block//
 function youthblock(){
    document.getElementById('more-youth').style.display="block";
    document.getElementById('more-women').style.display="none";
    document.getElementById('more-children').style.display="none";
    document.getElementById('more-choir').style.display="none";
    document.getElementById('more-uinjilisti').style.display="none";

    document.getElementById('department-hide').style.display="none";

 }
 function womenblock(){
    document.getElementById('more-youth').style.display="none";
    document.getElementById('more-women').style.display="block";
    document.getElementById('more-children').style.display="none";
    document.getElementById('more-choir').style.display="none";
    document.getElementById('more-uinjilisti').style.display="none";

    document.getElementById('department-hide').style.display="none";
 }
 function childrenblock(){
    document.getElementById('more-youth').style.display="none";
    document.getElementById('more-women').style.display="none";
    document.getElementById('more-children').style.display="block";
    document.getElementById('more-choir').style.display="none";
    document.getElementById('more-uinjilisti').style.display="none";

    document.getElementById('department-hide').style.display="none";


 }
function choirblock(){
    document.getElementById('more-youth').style.display="none";
    document.getElementById('more-women').style.display="none";
    document.getElementById('more-children').style.display="none";
    document.getElementById('more-choir').style.display="block";
    document.getElementById('more-uinjilisti').style.display="none";

    document.getElementById('department-hide').style.display="none";
}
function uinjilistiblock(){
    document.getElementById('more-youth').style.display="none";
    document.getElementById('more-women').style.display="none";
    document.getElementById('more-children').style.display="none";
    document.getElementById('more-choir').style.display="none";
    document.getElementById('more-uinjilisti').style.display="block";

    document.getElementById('department-hide').style.display="none";
}

       //div display=none//

 function youthnone(){
    document.getElementById('more-youth').style.display="none";

 }
 function womennone(){
    document.getElementById('more-women').style.display="none";

 }
 function childrennone(){
    document.getElementById('more-children').style.display="none";

 }
function choirnone(){
    document.getElementById('more-choir').style.display="none";

}
function uinjilistinone(){
   document.getElementById('more-uinjilisti').style.display="none";

}
//departments aditional javascripts end......

//***********//
//**********//
//parish aditional javascripts starts......
         //div display=block//
 function kijitonyamablock(){
    document.getElementById('more-kijitonyama').style.display="block";
    document.getElementById('more-kisalawe').style.display="none";
    document.getElementById('more-mwananyamala').style.display="none";
    document.getElementById('more-tabata').style.display="none";
    document.getElementById('more-yombo').style.display="none";

    document.getElementById('parish-hide').style.display="none";

 }
 function kisalaweblock(){
    document.getElementById('more-kijitonyama').style.display="none";
    document.getElementById('more-kisalawe').style.display="block";
    document.getElementById('more-mwananyamala').style.display="none";
    document.getElementById('more-tabata').style.display="none";
    document.getElementById('more-yombo').style.display="none";

    document.getElementById('parish-hide').style.display="none";

 }
 function mwananyamalablock(){
    document.getElementById('more-kijitonyama').style.display="none";
    document.getElementById('more-kisalawe').style.display="none";
    document.getElementById('more-mwananyamala').style.display="block";
    document.getElementById('more-tabata').style.display="none";
    document.getElementById('more-yombo').style.display="none";

    document.getElementById('parish-hide').style.display="none";

 }
function tabatablock(){
    document.getElementById('more-kijitonyama').style.display="none";
    document.getElementById('more-kisalawe').style.display="none";
    document.getElementById('more-mwananyamala').style.display="none";
    document.getElementById('more-tabata').style.display="block";
    document.getElementById('more-yombo').style.display="none";

    document.getElementById('parish-hide').style.display="none";

}
function yomboblock(){
   document.getElementById('more-kijitonyama').style.display="none";
    document.getElementById('more-kisalawe').style.display="none";
    document.getElementById('more-mwananyamala').style.display="none";
    document.getElementById('more-tabata').style.display="none";
    document.getElementById('more-yombo').style.display="block";

    document.getElementById('parish-hide').style.display="none";

}

       //div display=none//

 function kijitonyamanone(){

    document.getElementById('more-kijitonyama').style.display="none";
    document.getElementById('more-kisalawe').style.display="block";
 }
 function Kisalawenone(){
    document.getElementById('more-kisalawe').style.display="none";
    document.getElementById('more-mwananyamala').style.display="block";
 }

function mwananyamalanone(){
    document.getElementById('more-mwananyamala').style.display="none";
    document.getElementById('more-tabata').style.display="block";
}

function tabatanone(){
    document.getElementById('more-tabata').style.display="none";
    document.getElementById('more-yombo').style.display="block";
 }

function yombonone(){
   document.getElementById('more-yombo').style.display="none";

}
//departments aditional javascripts end......


  //javascrips for hiding text box........

function textarea1(){
   document.getElementById('inputparts').style.display="none";
   document.getElementById('textarea').style.display="none";
   document.getElementById('arrowdown').style.display="block";
   document.getElementById('msg4user').style.display="block";
   document.getElementById('Txtmsg4user').style.display="block";

   document.getElementById('quickmessage').style.borderRadius ="23px";
   document.getElementById('quickmessage').style.border ="solid #01ffEE";
   document.getElementById('quickmessage').style.textAlign ="center";
   document.getElementById('msg_btn').style.backgroundColor ="solid #01ffEE";
}

/** for top scroll 
window.onscroll=function() {onscrollFunction()}; 

function onscrollFunction() {
   var onscrollToTop = document.getElementById("onscrollToTop");
   if (document.body.scollTop > 20 || document.getElement.scollTop > 20){
      onscrollToTop.style.display = "block";
   }
}

document.getElementById("onscrollToTop").onclick = function() {
   document.body.scollTop = 0;
   document.getElement.scollTop = 0;
};
*****/
function totop(){
  document.getElementById("top-s").style.display = "block";
  document.getElementById("top-s1").style.display = "block";
  document.getElementById("iconcontainer").style.display = "block";
 
}
function tops(){
  document.getElementById("top-s").style.display = "none";
  document.getElementById("top-s1").style.display = "none";
}


////////////style for parish to be displayed when clicked from another page/////
////////////////////                          //////////////////
/*function parishlist(){
   window.location.href="parish.html";
   document.getElementById("parish-summarydrop").style.display = "none";
   document.getElementById("kijitonyama-drop").style.display = "block";
   document.getElementById("kisalawe-drop").style.display = "none";
   document.getElementById("tabata-drop").style.display = "none";
   document.getElementById("yombo-drop").style.display = "none";





}
*/

//////////// end of style for parish to be displayed when clicked from another page/////
////////////////////*/
function showLinks(){
   document.getElementById("linksdiv").style.display = "block";
}


