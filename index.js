window.onload = function () {

  const navbar = document.querySelector(".navbar");
  const navbarIcon = document.querySelector(".navbar-icon");
  const navbarButton = document.querySelectorAll(".navbar-button");
  const navbarButtonSmall = document.querySelectorAll(".navbar-small-button");
  const navbarSmall = document.querySelectorAll(".navbar-small");


  navbarIcon.addEventListener("click", () => {
    navbarButtonSmall.forEach((button) => {
      if (button.style.display === "none") {
        button.style.display = "block";
        // button.style.setProperty("display", "block", "important");

        // button.style.animation = "slideDown 0.5s forwards";
      } else {
        button.style.display = "none";
        // button.style.animation = "slideUp 0.5s forwards";
      }
    });
  });


  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      // Show the button if the user has scrolled down 300px
      backToTopButton.classList.add("show");
    } else {
      // Hide the button if the user has not scrolled down 300px
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  });






  // Get all of the text elements that you want to slide in
  const elements = document.querySelectorAll('.slide-in-text');

  // Set up an intersection observer to detect when the elements come into view
  const observer = new IntersectionObserver((entries) => {
    // Iterate through each of the observed elements
    entries.forEach((entry) => {
      // If the element is intersecting the viewport, add the slide-in class
      if (entry.isIntersecting) {

        // Get the element that is being intersected
        const element = entry.target;
        element.classList.add("slide-in")
        // Stop observing the element
        observer.unobserve(element);
      }
    });
  });

  // Start observing each of the elements
  elements.forEach((element) => {
    observer.observe(element);
  });




  const slider = document.querySelector(".fade-bg");
  const images = [
    "img/img0429.jpg",
    "img/img0430.jpg",
    "img/img0433.jpg",
    "img/img0434.jpg",
    "img/img0435.jpg",
  ];
  let index = 0;

  function slide() {
    slider.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  }

  setInterval(slide, 3500);




  // Kapcsolatfelvétel Modal:
  document.getElementById("form-modal-trigger").addEventListener("click", function () {
    document.getElementById("form-modal").style.display = "block";
  });

  document.getElementById("close-modal-button").addEventListener("click", function () {
    document.getElementById("form-modal").style.display = "none";
  });

  document.getElementById("form-modal").addEventListener("click", function (event) {
    if (event.target === this) {
      document.getElementById("form-modal").style.display = "none";
    }
  });



  // gallery

  const thumbnails = document.querySelectorAll('.img-thumbnail');
  const lightbox = document.querySelector('#lightbox');
  const lightboxImg = document.querySelector('#lightbox-img');
  const close = document.querySelector('#close');
  const caption = document.querySelector('#caption');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
      lightboxImg.src = this.src;
      caption.innerHTML = this.alt;
      lightbox.style.display = "block";
    });
  });

  close.addEventListener('click', function () {
    lightbox.style.display = "none";
  });

};
