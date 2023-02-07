window.addEventListener("scroll", scroll);

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.top = "0px";
  } else {
    document.querySelector(".navbar").style.top = "-50px";
  }
}
