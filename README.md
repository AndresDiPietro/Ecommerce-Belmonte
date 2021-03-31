# Introducción a la aplicación Create React

Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recargará si realiza modificaciones. \
También verá los errores en la consola.

### `npm test`

Inicia el corredor de pruebas en el interactive watch mode.\
Consulte la sección sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`. \
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash. \
¡Tu aplicación está lista para implementarse!

Consulte la sección sobre
 [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

### `npm run eject`

**Nota: esta es una operación unidireccional. Una vez que haya "expulsado", ¡no podrá regresar!**

Si no está satisfecho con la herramienta de compilación y las opciones de configuración, puede "expulsar" en cualquier momento. Este comando eliminará la dependencia de compilación única de su proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en su proyecto para que tenga un control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que pueda modificarlos. En este punto, estás solo.

No es necesario que utilice nunca "eject". El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y no debe sentirse obligado a utilizar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudiera personalizarla cuando esté listo para usarla.

## Aprenda más 

Puedes aprender más en el [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulte el [React documentation](https://reactjs.org/).

### Code Splitting

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analizar el tamaño del paquete


Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Hacer una aplicación web progresiva

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuraciones avanzadas

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` no se minimiza

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

************************************************************************

### Ecommerce (nombre provisorio) 
Es una app **Responsive** dedicada a la venta de indumentaria/accesorios para la cabeza. La misma será diseñada y desarrollada bajo la premisa de **Mobile-First**.

### Navegación React Router
React router es la librería encargada de la navegación por nuestra app, renderizando los componentes dependiendo de la ruta que el usuario seleccione. La misma se instaló mediante el comando: **npm install react-router-dom** 

Más info aquí: [https://reactrouter.com/web/guides/quick-start].

### Font Awesome
La librería **Font Awesome**  se encarga de facilitar iconos para este Ecommerce. La misma se está invocando mediante una etiqueta script con el siguiente enlace: [https://kit.fontawesome.com/44437af0d2.js" crossorigin="anonymous], en la línea 27 del archivo: **index.html**

Más info aquí : [https://fontawesome.com/].

### Listado de productos
El listado de productos se encuentra en el archivo **products.json**
Cada producto es un objeto que contiene un "id", "category", "title", "description", "pictureUrl" "price" y "sale".

### Estilos
Los estilos aún están en proceso y están realizados con **CSS** 