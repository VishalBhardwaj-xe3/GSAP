function breaktheText() {
  var name1 = document.querySelector("h1");
  var nam = name1.textContent;

  var splitText = nam.split("");

  var clutter = "";

  var halfValue = splitText.length/2

  splitText.forEach(function (e,idx) {
    if (idx < halfValue) {
      clutter = clutter + `<span class="a">${e}</span>`;
    } else {
      clutter = clutter + `<span class="b">${e}</span>`;
    }
  });

  name1.innerHTML = clutter;
}

breaktheText()


gsap.from("h1 .a", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger:0.15
})

gsap.from("h1 .b", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});