const input = document.getElementById("input");
// input.addEventListener("input", myFunction);
input.oninput = myFunction;

function myFunction() {
  let filter, li, a, i;
  filter = input.value.toUpperCase();
  li = document.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// function myFunction() {
//   console.log(input.value);
// }
