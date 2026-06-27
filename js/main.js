(function () {
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Sticky header */
  function onScroll() {
    const scrolled = window.scrollY > 20;
    header.classList.toggle("scrolled", scrolled);
    const hero =
      document.getElementById("home") ||
      document.getElementById("about-hero") ||
      document.getElementById("services-hero");
    if (
      hero &&
      (document.body.classList.contains("page-home") ||
        document.body.classList.contains("page-about") ||
        document.body.classList.contains("page-services"))
    ) {
      const heroBottom = hero.offsetTop + hero.offsetHeight - varHeader();
      header.classList.toggle("nav-solid", window.scrollY > heroBottom - varHeader());
    }
  }

  function varHeader() {
    return parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h"), 10) || 72;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  navToggle?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle?.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  /* Scroll reveal */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* Hero globe — subtle pointer parallax */
  const heroSection = document.getElementById("home");
  const globeScene = document.getElementById("heroGlobeScene");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (heroSection && globeScene && !reduceMotion) {
    heroSection.addEventListener(
      "mousemove",
      (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        globeScene.style.setProperty("--tilt-y", `${x * 10}deg`);
        globeScene.style.setProperty("--tilt-x", `${y * -8}deg`);
      },
      { passive: true }
    );

    heroSection.addEventListener("mouseleave", () => {
      globeScene.style.setProperty("--tilt-x", "0deg");
      globeScene.style.setProperty("--tilt-y", "0deg");
    });
  }

  /* Contact form — sends via PHP SMTP (api/contact.php) */
  const contactEndpoint =
    contactForm?.dataset.endpoint || "api/contact.php";

  contactForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    formNote.classList.remove("error");

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const phone = contactForm.phone?.value?.trim() || "";
    const subject = contactForm.subject?.value?.trim() || "";
    const messageBody = contactForm.message.value.trim();
    const website = contactForm.website?.value?.trim() || "";

    const messageParts = [];
    if (subject) messageParts.push(`Subject: ${subject}`);
    if (phone) messageParts.push(`Phone: ${phone}`);
    messageParts.push(messageBody);
    const message = messageParts.join("\n\n");

    if (!name || !email || !messageBody) {
      formNote.textContent = "Please fill in all fields.";
      formNote.classList.add("error");
      return;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      formNote.textContent = "Please enter a valid email address.";
      formNote.classList.add("error");
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const defaultLabel = submitBtn?.textContent || "Send message";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }

    formNote.textContent = "";

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send your message.");
      }

      formNote.textContent = data.message;
      contactForm.reset();
    } catch (err) {
      formNote.textContent =
        err instanceof Error
          ? err.message
          : "Sorry, something went wrong. Please try again or email info@shribi.com.";
      formNote.classList.add("error");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = defaultLabel;
      }
    }
  });
})();
