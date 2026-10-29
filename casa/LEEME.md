# Casa limpia – tiempo real con Firebase (gratis)

1. Entra a console.firebase.google.com → Agregar proyecto.
2. Construcción → Realtime Database → Crear base de datos (modo de prueba).
3. Pestaña Reglas, pega esto y Publicar:
   {"rules":{".read":true,".write":true}}
4. Configuración del proyecto → Tus apps → Web (</>) y copia los datos en `firebase-config.js`.
5. Sube la carpeta completa a Netlify (index.html, plano.jpg, firebase-config.js).

Admin y usuario verán misiones, dinero y notas al instante.

## Instalar en Android
1. Abre la dirección de Netlify en Chrome.
2. Menú ⋮ → "Instalar app" (o "Agregar a la pantalla principal").
3. Se abre a pantalla completa como una app normal.
