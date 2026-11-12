# Origin World Consulting — sitio web

Landing de **asesoría en comercio exterior** de Origin World Consulting (Ecuador).
Sitio estático (HTML, CSS y JS sin compilar) publicado con GitHub Pages.

## Estructura

```
index.html              Página principal (landing de asesorías)
assets/css/styles.css   Estilos. Los colores de marca están en :root
assets/js/main.js       Formulario: arma el mensaje y abre WhatsApp
assets/img/             Logo (azul y blanco) y favicon
```

## Cómo editar

- Textos: `index.html`.
- Colores: variables al inicio de `assets/css/styles.css` (`--ink` es el azul del logo, #0A2D85).
- WhatsApp del formulario: constante `WHATSAPP` en `assets/js/main.js`.

## Pendiente

- Reemplazar el logo provisional (sacado de una captura) por el archivo original en SVG o PNG grande.
- Validar textos, servicios y preguntas frecuentes con Johanna y Marcelo.
- [x] noindex quitado el 12-nov-2026 (Jay aprobó: el cliente ya corrigió la web). robots.txt y sitemap.xml en la raíz.
- Conectar el formulario al CRM.
