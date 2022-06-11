const nav=[{geo:"projects",route:"second.html"},{geo:"shop with us",route:"third.html"} , {geo:"Register",route:"fourth.html"} ,{geo:"about us",route:"fifth.html"}];


let UL="<ul>";
let number=nav.length;

for(let i=0; i<number; i++) {
    UL+=`<li><a href=${nav[i].route}>` + nav[i].geo + '</a></li>';

}

document.getElementById("nav").innerHTML = UL;
console.log(UL);
UL+="</ul>";

function gamochenadamalva(){
   let display= document.getElementById("messagebox").style.display;
   console.log(display);
   
   if(document.getElementById("messagebox").style.display === "none") {
    document.getElementById("messagebox").style.display="block"
   }
   else{
    document.getElementById("messagebox").style.display="none";
   }
}
function hide(){
    document.getElementById("messagebox").style.display="none";
}

var video = document.getElementById("Video");


var button = document.getElementById("button");

 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },

        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})





