function responsive() {
  const topnav = document.getElementById("mytopnav");
  if (topnav.className === "topnav") {
    topnav.className += " responsive";
  } else {
    topnav.className = "topnav";
  }
}
