const hamburger_menu = document.querySelector(".hamburger-menu");

const close_menu = document.querySelector(".close-menu");

const phone_links = document.querySelector(".phone-links");

const phone_link = document.querySelectorAll("ul li a");

const service_cards = document.querySelectorAll(".service-cards .card-holder");

const section_title = document.querySelectorAll(".section-title");
const list_reasons = document.querySelectorAll(".list-reasons li");
const steps = document.querySelectorAll(".step");
const form_input = document.querySelector(".form-input");

hamburger_menu.addEventListener('click', () =>{
  
  hamburger_menu.style.display = 'none';
  close_menu.style.display = 'flex';
  
  phone_links.style.visibility = "visible";
  phone_links.classList.add("show-links");
});

close_menu.addEventListener("click", () =>{
  
  hamburger_menu.style.display = 'flex';
  close_menu.style.display = 'none';
  
   phone_links.style.visibility = "hidden";
   phone_links.classList.remove("show-links")
});

phone_link.forEach(link =>{
  
  link.addEventListener("click", () =>{
    
    close_menu.style.display = 'none';
    hamburger_menu.style.display = 'flex';
    
    phone_links.style.visibility = "hidden";
    phone_links.classList.remove("show-links")
  });
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if(entry.target.classList.contains("card-holder")){
      entry.target.classList.add("show-cards");
      observer.unobserve(entry.target);
      }
      if (entry.target.classList.contains("section-title")) {
         entry.target.classList.add("show-cards");
         observer.unobserve(entry.target);
      }
      if(entry.target.classList.contains("reason")){
        entry.target.classList.add("post");
        observer.unobserve(entry.target);
      }
      if(entry.target.classList.contains("step")){
        entry.target.classList.add("adjust");
        observer.unobserve(entry.target);
      }
      if(entry.target.classList.contains("form-input")){
        entry.target.classList.add("move");
        observer.unobserve(entry.target);
      }
    }
  });
}, {
  root: null,
  threshold: 0.3,
  rootMargin: "0px"
});

service_cards.forEach(card => {
  observer.observe(card);
});
section_title.forEach(title =>{
  observer.observe(title);
});
list_reasons.forEach(reason =>{
  observer.observe(reason);
})
steps.forEach( step =>{
  observer.observe(step)
})
observer.observe(form_input)