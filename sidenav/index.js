const sidenav = document.querySelector(".sidenav");
// const sideProp = window.getComputedStyle(sidenav, null);
// const sidePropWidth = sideProp.getPropertyValue("width");
const openbtn = document.getElementById("openbtn");
openbtn.addEventListener("click", sidenavOpen);
const closebtn = document.getElementById("closebtn");
closebtn.addEventListener("click", sidenavClose);

function sidenavOpen() {
  sidenav.style.width = "230px";
}

function sidenavClose() {
  sidenav.style.width = "0px";
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
