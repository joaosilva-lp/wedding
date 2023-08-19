const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);



//Deslizar pelos menus
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, null, `#${sectionId}`);
      }
    }


//Contador:
// Set the date we're counting down to
var countDownDate = new Date("Sep 10, 2023 12:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `Faltam: <br><br>${days}d ${hours}h ${minutes}m ${seconds}s`;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
  }
}, 1000);

