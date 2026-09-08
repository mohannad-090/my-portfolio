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
    technostore: {
      title: {
        en: "Techno Store - E-Commerce Website",
        ar: "Techno Store - متجر إلكتروني"
      },
    
      category: {
        en: "E-Commerce Website",
        ar: "متجر إلكتروني"
      },
    
      image: "images/TechnoStore.png",
    
      description: {
        en: "A modern and responsive e-commerce website for electronics and technology products, featuring product browsing, shopping cart functionality, checkout, authentication, promotional offers, and customer testimonials.",
        ar: "متجر إلكتروني عصري ومتجاوب لمنتجات الإلكترونيات والتكنولوجيا، يحتوي على تصفح المنتجات وسلة المشتريات وإتمام الطلب وتسجيل الدخول والعروض الترويجية وآراء العملاء."
      },
    
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
    
      features: {
        en: [
          "Responsive e-commerce design",
          "Product listing and categories",
          "Product details",
          "Shopping cart functionality",
          "Checkout page",
          "Login page",
          "Best-selling products section",
          "Special offers and promotions",
          "Customer testimonials",
          "Mobile-friendly navigation"
        ],
    
        ar: [
          "تصميم متجر إلكتروني متجاوب",
          "عرض المنتجات والتصنيفات",
          "صفحات تفاصيل المنتجات",
          "سلة مشتريات تفاعلية",
          "صفحة إتمام الطلب",
          "صفحة تسجيل الدخول",
          "قسم المنتجات الأكثر مبيعًا",
          "العروض والخصومات",
          "آراء العملاء",
          "قائمة تنقل متوافقة مع الهواتف"
        ]
      },
    
      live: "https://mohannad-090.github.io/TechnoStore/"
    },
    
     
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
      "HTML",
      "CSS",
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
      "HTML",
      "CSS",
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

  },    

  
  decor: {
    title: {
      en: "DECOR - Interior Design Portfolio",
      ar: "DECOR - بورتفوليو تصميم داخلي"
    },
    category: {
      en: "Web Development",
      ar: "تطوير مواقع"
    },
    image: "images/decor.png",
    description: {
      en: "A professional portfolio website developed for an interior designer to showcase her previous projects, services, experience, and design work through a modern and responsive interface.",
      ar: "موقع بورتفوليو احترافي تم تطويره لمهندسة ديكور لعرض مشاريعها السابقة وخدماتها وخبرتها وأعمال التصميم من خلال واجهة عصرية ومتجاوبة."
    },
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    features: {
      en: [
        "Responsive design",
        "Modern and elegant UI",
        "Hero image slider",
        "Services showcase",
        "Previous projects gallery",
        "Project category filtering",
        "About section with statistics",
        "Contact form",
        "Social media integration",
        "Scroll reveal animations"
      ],
      ar: [
        "تصميم متجاوب",
        "واجهة عصرية وأنيقة",
        "Slider للصور",
        "عرض الخدمات",
        "معرض للمشاريع السابقة",
        "فلترة المشاريع حسب التصنيف",
        "قسم نبذة مع الإحصائيات",
        "نموذج للتواصل",
        "دمج وسائل التواصل الاجتماعي",
        "تأثيرات ظهور أثناء التمرير"
      ]
    },
    live: "https://mohannad-090.github.io/p/"
  },
  

  cleanride: {
    title: {
      en: "CleanRide - Car Wash Website",
      ar: "CleanRide - موقع غسيل سيارات"
    },  

    category: {
      en: "Web Design",
      ar: "تصميم مواقع"
    },  
    
    image: "images/CleanRide.png",

    description: {
      en: "A modern and responsive car wash website designed to provide a premium user experience, featuring service packages, special offers, customer testimonials, and an online booking form.",
      ar: "موقع عصري ومتجاوب لخدمات غسيل السيارات، مصمم لتقديم تجربة مستخدم مميزة، ويحتوي على باقات الخدمات والعروض الخاصة وآراء العملاء ونموذج لحجز الخدمة."
    },  
    
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],  
    
    features: {
      en: [
        "Fully responsive design",
        "Modern and clean UI",
        "Service packages with pricing",
        "Special offers section",
        "Customer testimonials",
        "Online booking form",
        "Mobile-friendly navigation",
        "Scroll reveal animations"
      ],  
      
      ar: [
        "تصميم متجاوب بالكامل",
        "واجهة عصرية ونظيفة",
        "باقات خدمات مع الأسعار",
        "قسم للعروض الخاصة",
        "آراء العملاء",
        "نموذج حجز أونلاين",
        "قائمة تنقل متوافقة مع الهواتف",
        "تأثيرات ظهور أثناء التمرير"
      ]  
    },  

    live: "https://mohannad-090.github.io/CleanRide/"
  },  

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

if (contactForm && formStatus && submitBtn) {

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

      const formData = new FormData(contactForm);

      const data = Object.fromEntries(formData.entries());

      const response = await fetch(contactForm.action, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },

        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Submission failed"
        );
      }

      formStatus.className = "form-status success";

      formStatus.textContent =
        language === "ar"
          ? "✓ تم إرسال رسالتك بنجاح، شكرًا لتواصلك معي."
          : "✓ Thanks! Your message has been sent successfully.";

      contactForm.reset();

    } catch (error) {

      console.error("FormSubmit Error:", error);

      formStatus.className = "form-status error";

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