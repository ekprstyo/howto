const london = document.getElementById("London");
london.style.display = "block";
const btLondon = document.getElementsByTagName("button");
btLondon[0].style.backgroundColor = "#ddd";

function openCity(evt, cityName) {
  btLondon[0].style.backgroundColor = "inherit";
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
