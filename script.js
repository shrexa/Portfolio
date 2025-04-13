document.addEventListener("DOMContentLoaded", function () {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");
  
    window.opentab = function (tabname, event) {
      Array.from(tablinks).forEach(tab => tab.classList.remove("active-link"));
      Array.from(tabcontents).forEach(tab => tab.classList.remove("active-tab"));
  
      event?.currentTarget?.classList.add("active-link");
      document.getElementById(tabname)?.classList.add("active-tab");
    };
  
    // Typed.js effect (uncomment when needed)
    /*
    var typed = new Typed(".inputt", {
      strings: ["Shriya BV", "Web Developer"],
      typeSpeed: 120,
      backSpeed: 110,
      loop: true
    });
    */
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = document.querySelectorAll(".tab-links");
    const tabContents = document.querySelectorAll(".tab-contents");
  
    tabLinks.forEach(link => {
      link.addEventListener("click", () => {
        // Remove all active states
        tabLinks.forEach(l => l.classList.remove("active-link"));
        tabContents.forEach(c => c.classList.remove("active-tab"));
  
        // Add active to clicked one
        link.classList.add("active-link");
        const selectedTab = link.getAttribute("data-tab");
        document.getElementById(selectedTab)?.classList.add("active-tab");
      });
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-modal");
  
    // Select all images globally
    const allImages = document.querySelectorAll("img");
  
    allImages.forEach((img) => {
      img.style.cursor = "zoom-in"; // Optional: give users a hint it's clickable
  
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal if clicked outside the image
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  
  
  