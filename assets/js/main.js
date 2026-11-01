// Formulario de diagnóstico: arma el mensaje y lo abre en WhatsApp.
// Más adelante este envío se conecta también al CRM (webhook).
(function () {
  var WHATSAPP = "593987773291";
  var form = document.getElementById("lead-form");
  var error = document.getElementById("form-error");
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var get = function (k) { return String(data.get(k) || "").trim(); };
    var required = ["nombre", "producto", "whatsapp"];
    var missing = [];

    required.forEach(function (k) {
      var input = form.elements[k];
      var empty = !get(k);
      input.setAttribute("aria-invalid", empty ? "true" : "false");
      if (empty) missing.push(input);
    });

    if (missing.length) {
      error.textContent = "Completa tu nombre, el producto y tu WhatsApp para enviar.";
      error.hidden = false;
      missing[0].focus();
      return;
    }
    error.hidden = true;

    var lines = [
      "Hola Origin World, quiero un diagnóstico para exportar.",
      "Nombre: " + get("nombre"),
      get("empresa") ? "Empresa: " + get("empresa") : null,
      "Producto: " + get("producto"),
      "País de destino: " + (get("destino") || "Aún no lo sé"),
      "Mi WhatsApp: " + get("whatsapp")
    ].filter(Boolean);

    var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");
  });
})();
