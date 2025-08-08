const navbar = document.getElementById("navbar");
let scrolled = false;
window.onscroll = function () {
  // check if window y axis is greater than 100px(i.e scroll past 100px)
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};
//   smooth scrolling
$("#navbar a, .btn").on("click", function (e) {
  //   console.log("this.hash", this.hash);
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
