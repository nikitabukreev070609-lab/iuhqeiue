var form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    document.getElementById("result").textContent =
      "Спасибо, " + name + "! Ваше сообщение получено.";
    form.reset();
  });
}

