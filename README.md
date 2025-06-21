# alerta peru 360

este repositorio contiene el sitio web del proyecto AlertaPeru360, para hacer el deploy usamos github pages de momento, luego pensamos usar vercel.

## que hace la carpeta .github/workflows

la carpeta `.github/workflows` contiene un archivo yaml que define un workflow de github actions. este workflow se activa automaticamente cada vez que se hace un push a la rama principal (`main`). para esto lo sacamos de la misma documentacion de https://docs.github.com/es e igualmente del apoyo de una AI para los pasos de la configuracion en JOBS 

el objetivo principal de este workflow es desplegar el contenido de la carpeta `public/` en github pages. para eso, se utiliza una accion llamada `peaceiris/actions-gh-pages`, que publica el sitio en la rama `gh-pages`.

una vez que esto se ejecuta correctamente, github pages sirve el sitio desde la url del repositorio:  
`https://and12326.github.io/AlertPeru360/` 


/public
/public/assets
/public/assets/styles/styles.css
/public/assets/images/<>.png/.jpg
/public/assets/scripts/main.js
tambien estructuramos el proyecto usando como carpeta principal /public -> /public/<otras carpetas> para tener un codigo mas ordenado

Esto es solo un avance de nuestra landing page, a futuro estamos planteando aplicar auth para nuestros usuarios con verificacion de correo y entre otras funcionalidades
