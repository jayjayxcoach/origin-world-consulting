// OriginWorld Consulting — home
// 1) Enlaces de WhatsApp con mensaje según el botón (data-wa).
// 2) Formulario de diagnóstico: arma el mensaje y lo abre en WhatsApp.
//    Más adelante este envío se conecta también al CRM (webhook).
(function () {
  var WHATSAPP = "593990332449";
  var waUrl = function (text) { return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text); };

  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waUrl(a.getAttribute("data-wa"));
  });

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var form = document.getElementById("lead-form");
  var error = document.getElementById("form-error");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var get = function (k) { return String(data.get(k) || "").trim(); };
    var missing = [];

    ["nombre", "whatsapp"].forEach(function (k) {
      var input = form.elements[k];
      var empty = !get(k);
      input.setAttribute("aria-invalid", empty ? "true" : "false");
      if (empty) missing.push(input);
    });

    if (missing.length) {
      error.textContent = "Completa tu nombre y tu WhatsApp para enviar.";
      error.hidden = false;
      missing[0].focus();
      return;
    }
    error.hidden = true;

    var lines = [
      "Hola OriginWorld, quiero un diagnóstico.",
      "Nombre: " + get("nombre"),
      get("empresa") ? "Empresa: " + get("empresa") : null,
      "Necesito: " + get("servicio"),
      get("producto") ? "Producto y destino: " + get("producto") : null,
      "Mi WhatsApp: " + get("whatsapp")
    ].filter(Boolean);

    window.open(waUrl(lines.join("\n")), "_blank", "noopener");
  });
})();
