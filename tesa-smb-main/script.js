// Mobile menu toggle
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-link").forEach((n) =>
        n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        })
      );

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Form submission handler
      document
        .querySelector(".contact-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Thank you for your message! We will get back to you soon.");
          this.reset();
        });

      // Add scroll effect to navbar
      window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 700) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

// Fetch and display services dynamically
  fetch('services.json')
    .then(response => response.json())
    .then(services => {
      const container = document.getElementById('services-container');
      services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.style.backgroundImage = `url('${service.background}')`;

        card.innerHTML = `
          <div class="service-icon"><i class="${service.icon}"></i></div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <ul>${service.features.map(item => `<li>${item}</li>`).join('')}</ul>
        `;

        container.appendChild(card);
      });
    });
