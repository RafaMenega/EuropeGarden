function leiaMais(){
var btleiamais=document.getElementById("btleiamais");
var altura=document.querySelector(".green");

if(altura.style.height == "400px"){
  altura.style.height = "600px";
  document.querySelector(".btleiamais").innerHTML = "Leia Menos";
 }

else{
  altura.style.height = "400px";
  document.querySelector(".btleiamais").innerHTML = "Leia Mais";
}
}

function leiaMais(){
var pontos=document.getElementById("pontos");
var mais=document.getElementById("mais");
var btleiamais=document.getElementById("btleiamais");
var altura=document.querySelector(".green");

if(pontos.style.display == "none"){
  altura.style.height = "400px";
  pontos.style.display="inline";
  mais.style.display="none";
  btleiamais.innerHTML="Leia Mais";     
 }

else{
  altura.style.height = "600px";
  pontos.style.display="none";
  mais.style.display="inline";
  btleiamais.innerHTML="Leia Menos";

}}

//111111111111111111111111111111111111111111111111

function leiaMais1(){
var btleiamais=document.getElementById("1btleiamais");
var altura=document.querySelector(".blue");

if(altura.style.height == "400px"){
  altura.style.height = "600px";
  document.querySelector(".1btleiamais").innerHTML = "Leia Menos";
 }

else{
  altura.style.height = "400px";
  document.querySelector(".1btleiamais").innerHTML = "Leia Mais";
}
}

function leiaMais1(){
var pontos=document.getElementById("1pontos");
var mais=document.getElementById("1mais");
var btleiamais=document.getElementById("1btleiamais");
var altura=document.querySelector(".blue");

if(pontos.style.display == "none"){
  altura.style.height = "400px";
  pontos.style.display="inline";
  mais.style.display="none";
  btleiamais.innerHTML="Leia Mais";     
 }

else{
  altura.style.height = "600px";
  pontos.style.display="none";
  mais.style.display="inline";
  btleiamais.innerHTML="Leia Menos";

}}
//222222222222222222222222222222222222222222

function leiaMais2(){
var btleiamais=document.getElementById("2btleiamais");
var altura=document.querySelector(".violet");

if(altura.style.height == "400px"){
  altura.style.height = "600px";
  document.querySelector(".2btleiamais").innerHTML = "Leia Menos";
 }

else{
  altura.style.height = "400px";
  document.querySelector(".2btleiamais").innerHTML = "Leia Mais";
}
}

function leiaMais2(){
var pontos=document.getElementById("2pontos");
var mais=document.getElementById("2mais");
var btleiamais=document.getElementById("2btleiamais");
var altura=document.querySelector(".violet");

if(pontos.style.display == "none"){
  altura.style.height = "400px";
  pontos.style.display="inline";
  mais.style.display="none";
  btleiamais.innerHTML="Leia Mais";     
 }

else{
  altura.style.height = "600px";
  pontos.style.display="none";
  mais.style.display="inline";
  btleiamais.innerHTML="Leia Menos";

}}
//333333333333333333333333333333333333333333333

function leiaMais3(){
var btleiamais=document.getElementById("3btleiamais");
var altura=document.querySelector(".red");

if(altura.style.height == "400px"){
  altura.style.height = "600px";
  document.querySelector(".3btleiamais").innerHTML = "Leia Menos";
 }

else{
  altura.style.height = "400px";
  document.querySelector(".3btleiamais").innerHTML = "Leia Mais";
}
}

function leiaMais3(){
var pontos=document.getElementById("3pontos");
var mais=document.getElementById("3mais");
var btleiamais=document.getElementById("3btleiamais");
var altura=document.querySelector(".red");

if(pontos.style.display == "none"){
  altura.style.height = "400px";
  pontos.style.display="inline";
  mais.style.display="none";
  btleiamais.innerHTML="Leia Mais";     
 }

else{
  altura.style.height = "600px";
  pontos.style.display="none";
  mais.style.display="inline";
  btleiamais.innerHTML="Leia Menos";

}}
//4444444444444444444444444444444444444444444444

function leiaMais4(){
var btleiamais=document.getElementById("4btleiamais");
var altura=document.querySelector(".yellow");

if(altura.style.height == "400px"){
  altura.style.height = "600px";
  document.querySelector(".4btleiamais").innerHTML = "Leia Menos";
 }

else{
  altura.style.height = "400px";
  document.querySelector(".4btleiamais").innerHTML = "Leia Mais";
}
}

function leiaMais4(){
var pontos=document.getElementById("4pontos");
var mais=document.getElementById("4mais");
var btleiamais=document.getElementById("4btleiamais");
var altura=document.querySelector(".yellow");

if(pontos.style.display == "none"){
  altura.style.height = "400px";
  pontos.style.display="inline";
  mais.style.display="none";
  btleiamais.innerHTML="Leia Mais";     
 }

else{
  altura.style.height = "600px";
  pontos.style.display="none";
  mais.style.display="inline";
  btleiamais.innerHTML="Leia Menos";

}}
//555555555555555555555555555555555555555555555

function leiaMais5(){
var btleiamais=document.getElementById("5btleiamais");
var altura=document.querySelector(".black");

if(altura.style.height == "400px"){
  altura.style.height = "600px";
  document.querySelector(".5btleiamais").innerHTML = "Leia Menos";
 }

else{
  altura.style.height = "400px";
  document.querySelector(".5btleiamais").innerHTML = "Leia Mais";
}
}


function leiaMais5(){
var pontos=document.getElementById("5pontos");
var mais=document.getElementById("5mais");
var btleiamais=document.getElementById("5btleiamais");
var altura=document.querySelector(".black");

if(pontos.style.display == "none"){
  altura.style.height = "400px";
  pontos.style.display="inline";
  mais.style.display="none";
  btleiamais.innerHTML="Leia Mais";     
 }

else{
  altura.style.height = "600px";
  pontos.style.display="none";
  mais.style.display="inline";
  btleiamais.innerHTML="Leia Menos";

}}
//-------------------------------------------------

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();