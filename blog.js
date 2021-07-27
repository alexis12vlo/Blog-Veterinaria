

const caja1 =document.getElementById("caja1");
const caja2 =document.getElementById("caja2");
const caja3 =document.getElementById("caja3");
const caja4 =document.getElementById("caja4");
const caja5 =document.getElementById("caja5");
const caja6 =document.getElementById("caja6");
const h1 =document.getElementById("h1");

window.onload = function() {

   caja1.style.opacity="1";
   caja1.style.transform="translateY(0px)";
   caja2.style.opacity="1";
   caja2.style.transform="translateY(0px)";
   h1.style.transform="rotate3d(1, 0, 0, 0deg)";
};
document.getElementById("boy").onscroll= function() {scrollFunction()};




     
function scrollFunction() {
  if(document.documentElement.scrollTop >=500 ) {
      caja3.style.opacity="1";
   caja3.style.transform="translateY(0px)";
   caja4.style.opacity="1";
   caja4.style.transform="translateY(0px)";
   
  }
   if(document.documentElement.scrollTop >=1300 ) {
      caja5.style.opacity="1";
   caja5.style.transform="translateY(0px)";
   caja6.style.opacity="1";
   caja6.style.transform="translateY(0px)";
   
  }}