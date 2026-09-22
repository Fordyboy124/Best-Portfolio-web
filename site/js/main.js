/* Antonny Ochieng — Portfolio — shared behaviour */
(function(){
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links){
    toggle.addEventListener("click", function(){
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.innerHTML = open ? iconClose() : iconMenu();
    });
    links.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = iconMenu();
      });
    });
  }
  function iconMenu(){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="20" height="20"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'; }
  function iconClose(){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="20" height="20"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>'; }

  /* Nav background on scroll */
  var nav = document.querySelector(".nav");
  var onScroll = function(){
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 12);
    var top = document.querySelector(".to-top");
    if (top){ top.classList.toggle("show", window.scrollY > 600); }
  };
  document.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  /* Back to top */
  var toTop = document.querySelector(".to-top");
  if (toTop){
    toTop.addEventListener("click", function(){
      window.scrollTo({ top:0, behavior: "smooth" });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.16, rootMargin:"0px 0px -60px 0px" });
    revealEls.forEach(function(el, idx){
      el.style.setProperty("--i", idx % 8);
      io.observe(el);
    });
  } else {
    revealEls.forEach(function(el){ el.classList.add("in"); });
  }

  /* Animated counters e.g. <span data-count="120" data-suffix="+"> */
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length){
    var animateCount = function(el){
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var duration = 1400;
      var start = null;
      function step(ts){
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var val = Math.round(target * eased);
        el.textContent = val.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };
    if ("IntersectionObserver" in window){
      var cio = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting){
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      }, { threshold:0.5 });
      counters.forEach(function(el){ cio.observe(el); });
    } else {
      counters.forEach(animateCount);
    }
  }

  /* Skill bars e.g. <div class="skill-fill" data-level="82"> */
  var bars = document.querySelectorAll("[data-level]");
  if (bars.length && "IntersectionObserver" in window){
    var bio = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.style.width = entry.target.getAttribute("data-level") + "%";
          bio.unobserve(entry.target);
        }
      });
    }, { threshold:0.4 });
    bars.forEach(function(el){ bio.observe(el); });
  } else {
    bars.forEach(function(el){ el.style.width = el.getAttribute("data-level") + "%"; });
  }

  /* Contact form — static hosting friendly demo handler
     NOTE: replace the form's action with your endpoint (e.g. Formspree)
     or wire it to a small PHP mail script; see README for instructions. */
  var form = document.querySelector("#contact-form");
  if (form){
    form.addEventListener("submit", function(e){
      var action = form.getAttribute("action");
      if (!action || action.indexOf("REPLACE_WITH") !== -1){
        e.preventDefault();
        var note = document.querySelector("#form-status");
        if (note){
          note.textContent = "This form isn't connected to an email service yet — see README.md to connect Formspree or a PHP mail handler.";
          note.style.color = "#E4C766";
        }
      }
    });
  }

  /* Footer year */
  var yearEl = document.querySelector("#year");
  if (yearEl){ yearEl.textContent = new Date().getFullYear(); }

})();
