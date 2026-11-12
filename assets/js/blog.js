// OriginWorld · artículos del blog: barra de lectura, índice activo y año del pie.
(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var bar = document.querySelector(".read-progress");
  var body = document.querySelector(".post-body");
  var links = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
  var heads = links.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); });

  function onScroll() {
    if (bar && body) {
      var r = body.getBoundingClientRect();
      var total = r.height - window.innerHeight;
      var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      bar.style.width = (p * 100).toFixed(1) + "%";
    }
    var current = -1;
    heads.forEach(function (h, i) { if (h && h.getBoundingClientRect().top < 140) current = i; });
    links.forEach(function (a, i) { a.classList.toggle("active", i === current); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // En celular, cerrar el índice desplegable al elegir una sección.
  var tm = document.querySelector(".toc-mobile");
  if (tm) tm.addEventListener("click", function (e) { if (e.target.tagName === "A") tm.open = false; });
})();
