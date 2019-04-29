function top10(){

}

function nytd(){
   document.getElementById("all_words_nyt").style.display = "block";
   document.getElementById("all_words_twitter").style.display = "none";
   document.getElementById("word_co").style.display = "none";
}
function twid(){
   document.getElementById("all_words_twitter").style.display = "block";
   document.getElementById("all_words_nyt").style.display = "none";
   document.getElementById("word_co").style.display = "none";
}
function wordco(){
   document.getElementById("all_words_twitter").style.display = "none";
   document.getElementById("all_words_nyt").style.display = "none";
   document.getElementById("word_co").style.display = "block";
}

function allWCNY(){
   document.getElementById("all_words_yt_wc").style.display = "block";
   document.getElementById("wall_words_yt_wc").style.display = "none";
   document.getElementById("ob_words_yt_wc").style.display = "none";
   document.getElementById("imp_words_yt_wc").style.display = "none";
   document.getElementById("wit_words_yt_wc").style.display = "none";
}


function wallWCNY(){
   document.getElementById("all_words_yt_wc").style.display = "none";
   document.getElementById("wall_words_yt_wc").style.display = "block";
   document.getElementById("ob_words_yt_wc").style.display = "none";
   document.getElementById("imp_words_yt_wc").style.display = "none";
   document.getElementById("wit_words_yt_wc").style.display = "none";
}

function obWCNY(){
   document.getElementById("all_words_yt_wc").style.display = "none";
   document.getElementById("wall_words_yt_wc").style.display = "none";
   document.getElementById("ob_words_yt_wc").style.display = "block";
   document.getElementById("imp_words_yt_wc").style.display = "none";
   document.getElementById("wit_words_yt_wc").style.display = "none";
}

function impWCNY(){
   document.getElementById("all_words_yt_wc").style.display = "none";
   document.getElementById("wall_words_yt_wc").style.display = "none";
   document.getElementById("ob_words_yt_wc").style.display = "none";
   document.getElementById("imp_words_yt_wc").style.display = "block";
   document.getElementById("wit_words_yt_wc").style.display = "none";
}

function witWCNY(){
   document.getElementById("all_words_yt_wc").style.display = "none";
   document.getElementById("wall_words_yt_wc").style.display = "none";
   document.getElementById("ob_words_yt_wc").style.display = "none";
   document.getElementById("imp_words_yt_wc").style.display = "none";
   document.getElementById("wit_words_yt_wc").style.display = "block";
}

function allWCTW(){
   document.getElementById("all_words_tw_wc").style.display = "block";
   document.getElementById("wall_words_tw_wc").style.display = "none";
   document.getElementById("ob_words_tw_wc").style.display = "none";
   document.getElementById("imp_words_tw_wc").style.display = "none";
   document.getElementById("wit_words_tw_wc").style.display = "none";
}


function wallWCTW(){
   document.getElementById("all_words_tw_wc").style.display = "none";
   document.getElementById("wall_words_tw_wc").style.display = "block";
   document.getElementById("ob_words_tw_wc").style.display = "none";
   document.getElementById("imp_words_tw_wc").style.display = "none";
   document.getElementById("wit_words_tw_wc").style.display = "none";
}

function obWCTW(){
   document.getElementById("all_words_tw_wc").style.display = "none";
   document.getElementById("wall_words_tw_wc").style.display = "none";
   document.getElementById("ob_words_tw_wc").style.display = "block";
   document.getElementById("imp_words_tw_wc").style.display = "none";
   document.getElementById("wit_words_tw_wc").style.display = "none";
}

function impWCTW(){
   document.getElementById("all_words_tw_wc").style.display = "none";
   document.getElementById("wall_words_tw_wc").style.display = "none";
   document.getElementById("ob_words_tw_wc").style.display = "none";
   document.getElementById("imp_words_tw_wc").style.display = "block";
   document.getElementById("wit_words_tw_wc").style.display = "none";
}

function witWCTW(){
   document.getElementById("all_words_tw_wc").style.display = "none";
   document.getElementById("wall_words_tw_wc").style.display = "none";
   document.getElementById("ob_words_tw_wc").style.display = "none";
   document.getElementById("imp_words_tw_wc").style.display = "none";
   document.getElementById("wit_words_tw_wc").style.display = "block";
}

function NYTWCO(){
   document.getElementById("wco_nyt").style.display = "block";
   document.getElementById("wco_tw").style.display = "none";
}
function TWCO(){
   document.getElementById("wco_nyt").style.display = "none";
   document.getElementById("wco_tw").style.display = "block";
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
var btnContainer1 = document.getElementById("myBtnContainer1");
var btns1 = btnContainer1.getElementsByClassName("btn1");
for (var i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
var btnContainer3 = document.getElementById("myBtnContainer3");
var btns3 = btnContainer3.getElementsByClassName("btn3");
for (var i = 0; i < btns3.length; i++) {
  btns3[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
