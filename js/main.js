// Menu
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById(".menu").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById(".menu").style.width = "0%";
}

console.clear();

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#pinContainer",
      pin: true,
      start: "top top",
      end: "+=200%",
      scrub: true,
      //   markers: true,
    },
  })
  .fromTo(".panel.turqoise", { xPercent: 100 }, { xPercent: 0 })
  .fromTo(".panel.bordeaux", { yPercent: 100 }, { yPercent: 0 });
