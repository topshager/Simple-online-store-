Window.onscroll = function(){myfunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myfunction(){
  if (window.pageYoofset > sticky){
    header.classList.add("sticky");
  }else{
    header.classList.remove("sticky")
  }
}
