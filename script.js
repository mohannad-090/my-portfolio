/* =====================================================
   MOBILE MENU
===================================================== */

const ul2 = document.querySelector(".ul2");

function showul2() {
  if (ul2) {
    ul2.style.display = "flex";
    document.body.classList.add("menu-open");
  }
}

function hideul2() {
  if (ul2) {
    ul2.style.display = "none";
    document.body.classList.remove("menu-open");
  }
}


/* =====================================================
   SCROLL TO PROJECTS
===================================================== */

function scrollProjects() {
  const section = document.getElementById("projects");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const sections = document.querySelectorAll(".section-animate");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


/* =====================================================
   THEME
===================================================== */

const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {

  if (theme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
      themeToggle.textContent = "☀";
    }

  } else {
    document.body.classList.remove("dark-mode");

    if (themeToggle) {
      themeToggle.textContent = "☾";
    }
  }

  localStorage.setItem("portfolio-theme", theme);
}

const savedTheme = localStorage.getItem("portfolio-theme");

/*
  Dark is the default theme because it is the original
  appearance of the portfolio.
*/

applyTheme(savedTheme || "dark");

if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    const isDark = document.body.classList.contains("dark-mode");

    applyTheme(isDark ? "light" : "dark");

  });

}


/* =====================================================
   LANGUAGE
===================================================== */

const languageToggle = document.getElementById("languageToggle");

function setLanguage(language) {

  const elements = document.querySelectorAll("[data-en][data-ar]");

  elements.forEach((element) => {

    const value =
      language === "ar"
        ? element.getAttribute("data-ar")
        : element.getAttribute("data-en");

    if (value) {
      element.textContent = value;
    }

  });

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  if (languageToggle) {
    languageToggle.textContent = language === "ar" ? "EN" : "AR";
  }

  localStorage.setItem("portfolio-language", language);
}

const savedLanguage =
  localStorage.getItem("portfolio-language") || "en";

setLanguage(savedLanguage);

if (languageToggle) {

  languageToggle.addEventListener("click", () => {

    const currentLanguage =
      localStorage.getItem("portfolio-language") || "en";

    setLanguage(currentLanguage === "en" ? "ar" : "en");

  });

}


/* =====================================================
   PROJECT DATA
===================================================== */

const projects = {

  ecommerce: {

    title: {
      en: "E-commerce Website",
      ar: "موقع تجارة إلكترونية"
    },

    category: {
      en: "Web Development",
      ar: "تطوير الويب"
    },

    image: "images/E-commerce.jpeg",

    description: {
      en: "A responsive e-commerce store interface with product listing and shopping cart functionality, built using HTML, CSS, and JavaScript.",
      ar: "واجهة متجر إلكتروني متجاوبة تحتوي على عرض المنتجات ووظائف عربة التسوق، وتم تطويرها باستخدام HTML وCSS وJavaScript."
    },

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],

    features: {
      en: [
        "Responsive interface",
        "Product listing",
        "Shopping cart functionality",
        "Modern user interface"
      ],

      ar: [
        "واجهة متجاوبة",
        "عرض المنتجات",
        "وظائف عربة التسوق",
        "واجهة مستخدم عصرية"
      ]
    },

    live:
      "https://mohannad-090.github.io/WLZ-Store/"

  },


  landing: {

    title: {
      en: "Modern Landing Page Website",
      ar: "موقع Landing Page عصري"
    },

    category: {
      en: "Web Design",
      ar: "تصميم مواقع"
    },

    image: "images/Modern-Landing.jpeg",

    description: {
      en: "A modern landing page built using HTML and CSS with responsive design and a clean user interface.",
      ar: "صفحة هبوط عصرية تم تطويرها باستخدام HTML وCSS مع تصميم متجاوب وواجهة مستخدم نظيفة."
    },

    technologies: [
      "HTML5",
      "CSS3"
    ],

    features: {
      en: [
        "Responsive design",
        "Clean UI",
        "Modern layout",
        "Mobile-friendly structure"
      ],

      ar: [
        "تصميم متجاوب",
        "واجهة نظيفة",
        "تخطيط عصري",
        "متوافق مع الهواتف"
      ]
    },

    live:
      "https://mohannad-090.github.io/project1/"

  },


  portfolio: {

    title: {
      en: "Personal Portfolio Website",
      ar: "موقع Portfolio شخصي"
    },

    category: {
      en: "Portfolio",
      ar: "Portfolio"
    },

    image: "images/portfolio.png",

    description: {
      en: "A modern responsive portfolio website showcasing projects, skills, education, and contact information using HTML, CSS, and JavaScript.",
      ar: "موقع Portfolio شخصي عصري ومتجاوب يعرض المشاريع والمهارات والتعليم وبيانات التواصل باستخدام HTML وCSS وJavaScript."
    },

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],

    features: {
      en: [
        "Responsive layout",
        "Modern portfolio design",
        "Projects showcase",
        "Contact section"
      ],

      ar: [
        "تصميم متجاوب",
        "تصميم Portfolio عصري",
        "عرض المشاريع",
        "قسم للتواصل"
      ]
    },

    live:
      "https://mohannad-090.github.io/my-portfolio/"

  }

};


/* =====================================================
   PROJECT MODAL
===================================================== */

const projectModal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalFeatures = document.getElementById("modalFeatures");
const modalLive = document.getElementById("modalLive");


function openProjectModal(projectId) {

  const project = projects[projectId];

  if (!project || !projectModal) {
    return;
  }

  const language =
    localStorage.getItem("portfolio-language") || "en";

  modalImage.src = project.image;

  modalImage.alt = project.title[language];

  modalTitle.textContent = project.title[language];

  modalCategory.textContent = project.category[language];

  modalDescription.textContent =
    project.description[language];


  /* Technologies */

  modalTech.innerHTML = "";

  project.technologies.forEach((technology) => {

    const span = document.createElement("span");

    span.textContent = technology;

    modalTech.appendChild(span);

  });


  /* Features */

  modalFeatures.innerHTML = "";

  project.features[language].forEach((feature) => {

    const li = document.createElement("li");

    li.textContent = feature;

    modalFeatures.appendChild(li);

  });


  /* Live project */

  modalLive.href = project.live;


  projectModal.classList.add("active");
  projectModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}


function closeProjectModal() {

  if (!projectModal) {
    return;
  }

  projectModal.classList.remove("active");
  projectModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

}


/* Close with Escape */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeProjectModal();

  }

});


/* =====================================================
   CONTACT FORM - FORMSUBMIT AJAX
===================================================== */

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");


if (contactForm) {

  contactForm.addEventListener("submit", async (event) => {

    event.preventDefault();


    const language =
      localStorage.getItem("portfolio-language") || "en";


    submitBtn.disabled = true;

    submitBtn.textContent =
      language === "ar"
        ? "جاري الإرسال..."
        : "Sending...";


    formStatus.className = "form-status";

    formStatus.textContent =
      language === "ar"
        ? "جاري إرسال رسالتك..."
        : "Sending your message...";


    try {

      const response = await fetch(
        contactForm.action,
        {
          method: "POST",

          body: new FormData(contactForm),

          headers: {
            Accept: "application/json"
          }
        }
      );


      if (!response.ok) {
        throw new Error("Submission failed");
      }


      formStatus.className =
        "form-status success";

      formStatus.textContent =
        language === "ar"
          ? "✓ تم إرسال رسالتك بنجاح، شكرًا لتواصلك معي."
          : "✓ Thanks! Your message has been sent successfully.";


      contactForm.reset();


    } catch (error) {

      formStatus.className =
        "form-status error";

      formStatus.textContent =
        language === "ar"
          ? "حدث خطأ أثناء الإرسال. حاول مرة أخرى."
          : "Something went wrong. Please try again.";

    } finally {

      submitBtn.disabled = false;

      submitBtn.textContent =
        language === "ar"
          ? "إرسال الرسالة"
          : "Send Message";

    }

  });

}


/* =====================================================
   PROFILE IMAGE - SUBTLE 3D MOUSE EFFECT
===================================================== */

const profileImage =
  document.querySelector(".profile-image");

const heroImageWrapper =
  document.querySelector(".hero-image-wrapper");


const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


if (
  profileImage &&
  heroImageWrapper &&
  !prefersReducedMotion
) {

  heroImageWrapper.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        heroImageWrapper.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateY =
        ((x - centerX) / centerX) * 6;

      const rotateX =
        ((centerY - y) / centerY) * 6;


      profileImage.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-3px)
         scale(1.015)`;

    }
  );


  heroImageWrapper.addEventListener(
    "mouseleave",
    () => {

      profileImage.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";

    }
  );

}


/* =====================================================
   CLOSE MOBILE MENU WHEN RESIZING
===================================================== */

window.addEventListener("resize", () => {

  if (window.innerWidth > 950) {
    hideul2();
  }

});