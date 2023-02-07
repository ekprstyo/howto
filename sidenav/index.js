const sidenav = document.querySelector(".sidenav");
const content = document.querySelector(".content");
// const sideProp = window.getComputedStyle(sidenav, null);
// const sidePropWidth = sideProp.getPropertyValue("width");
const openbtn = document.getElementById("openbtn");
openbtn.addEventListener("click", sidenavOpen);
const closebtn = document.getElementById("closebtn");
closebtn.addEventListener("click", sidenavClose);

function sidenavOpen() {
  sidenav.style.width = "230px";
  content.style.marginLeft = "230px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function sidenavClose() {
  sidenav.style.width = "0px";
  content.style.marginLeft = "0px";
  document.body.style.backgroundColor = "white";
}

// function side() {
//   if (sidePropWidth === "0px") {
//     sidePropWidth = "230px";
//   } else {
//     sidePropWidth = "";
//   }
//   // console.log("click");
// }

// function side() {
//   console.log("click");
// }

// function side(){
//   switch (sidePropWidth === "0px"){
//     case :
// sidenav.style.width = "230px";
//       break;
//       case sidenav.style.width === "230px":
// sidenav.style.width = "";
//   }
// }
