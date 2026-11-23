// Появление блоков при прокрутке
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(function (el) {
  observer.observe(el);
});

// Тень у шапки при прокрутке
var header = document.getElementById("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// Обработка формы
var form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var result = document.getElementById("result");

    if (!name || !email || !message) {
      result.textContent = "Пожалуйста, заполните все поля.";
      result.style.color = "#b3261e";
      return;
    }

    result.textContent = "Спасибо, " + name + "! Ваше сообщение получено.";
    result.style.color = "#2e7d32";
    form.reset();
  });
}
