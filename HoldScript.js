// pin and scrollTrigger
gsap.to("#box2 h1", {
  transform: "translateX(-165%)",
  scrollTrigger: {
    trigger: "#box2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});


// String animation like guitar
var initialPath = `M 10 100 Q 250 100 490 100`;

var finalPath = `M 10 100 Q 250 100 490 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.8)",
  });
});

//Animated Sidebar
const menu = document.querySelector("#nav i");
const cross = document.querySelector("#full i");

const tl = gsap.timeline();
tl.to("#full", {
  right: 0,
  duration: 0.4,
});
tl.from("#full h4", {
  x: 150,
  duration: 0.4,
  stagger: 0.05,
  opacity: 0,
});
tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
}); 