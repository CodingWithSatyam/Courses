$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  var typed = new Typed(".typing", {
    strings: ["Python", "HTML", "CSS", "JavaScript", "Django"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

let mobile_view = document.getElementById("moile_view");
let menu = document.querySelector(".navbar .menu");
let cut = document.querySelector(".mobile_cut");

mobile_view.onclick = function () {
  if ((menu.style.top = "-100%")) {
    menu.style.top = "0%";
    mobile_view.style.display = "none";
    cut.style.display = "block";
  }
};

cut.onclick = function () {
  if ((menu.style.top = "0%")) {
    menu.style.top = "-100%";
    mobile_view.style.display = "block";
    cut.style.display = "none";
  } else {
    menu.style.top = "0%";
  }
};

// course card

