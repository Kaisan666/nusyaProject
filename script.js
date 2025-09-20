
      // Лайтбокс
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = lightbox.querySelector("img");
      document.querySelectorAll(".lightbox-img").forEach((img) => {
        img.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lightboxImg.src = img.src;
        });
      });
      lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
      });

      // Анимация появления при скролле
      const fadeSections = document.querySelectorAll(".fade-section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      fadeSections.forEach((section) => observer.observe(section));