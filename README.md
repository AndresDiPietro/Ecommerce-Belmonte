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

### Ecommerce 
Es una app web **Responsive** dedicada a la venta de indumentaria/accesorios para la cabeza. La misma fué diseñada y desarrollada bajo la premisa de **Mobile-First**.

### Navegación React Router
React router es la librería encargada de la navegación por nuestra app, renderizando los componentes dependiendo de la ruta que el usuario seleccione. La misma se instaló mediante el comando: **npm install react-router-dom** 

Más info aquí: [https://reactrouter.com/web/guides/quick-start].

### Font Awesome
La librería **Font Awesome**  se encarga de facilitar iconos para este Ecommerce. La misma se está invocando mediante una etiqueta script con el siguiente enlace: [https://kit.fontawesome.com/44437af0d2.js" crossorigin="anonymous], en la línea 27 del archivo: **index.html**

Más info aquí : [https://fontawesome.com/].

### Firebase y Firestore
Esta app utiliza los servicios de **Firebase** para almacenar un listado de productos y las órdenes de compra que realicen l@s usuari@s, para ello utiliza la base de datos **Firestore**. 
La conección a ambos servicios se encuentra en el archivo [src/firebase/index.js], y todas las peticiones se encuentran en el archivo [src/firebase/firestore.js]

Más info aquí : [https://firebase.google.com/].

### Listado de productos
El listado de productos se encuentra en una colección llamada **items** en la base de datos de **Firestore**
Cada documento de dicha colección es un producto que contiene: "category", "title", "description", "pictureUrl" "price", "sale", "stock" y un "id" generado por **Firestore**.

### Home
La home muestra todo el listado de productos que se encuentra en la base de datos antes mencionada en un formato de tarjetas.
El componente encargado de mostrar dicha lista es **ItemListContainer** y se encuentra en el archivo [src/components/ItemListContainer/index.js].

### ItemListContainer
El componente ItemListContainer muestra todos los archivos si la **Route** es exact path="/" y sólo los de determinada categoría si la **Route** es path="/category/:categoryId". Si existe el **useParams** este componente mostrará en formato de lista los productos que sean de la categoría ingresada por el **useParams**.

Cada producto es presentado por un componente **Item**, ubicado en la ruta [src/components/item/index.js], el mismo muestra un artículo con imagen, título, precio, y si el producto cuenta con **stock**, un enlace al componente **ItemDetail**, que es el encargado de mostrar el detalle del producto, ofrece la posibilidad de seleccionar cantidad, un botón para **agregar al carrito** y otro para volvr al **home**. 

### Navegación
El componente **NavBar** es el encargado de mostrar los enlaces para filtrar productos por **categorías**, ir al **Carrito**
o volver al **Home**. Dicho componente se encuentra en el archivo [src/components/navBar/navBar.js].

El **listado de categorías** se mostrará cómo un menú desplegable en tamaños de hasta **1126px** y en tamaños mayores quedarán visibles en todo momento a la derecha en la barra de navegación. El componente que presenta cada **categoría** se encuentr en el archivo [src/components/navBar/navItmes.js].

La ruta al **carrito** estará presente en todo momento en la parte superior derecha de la app, en la barra de navegación, e indicará el número de items ingresados al carrito. Dicho componente se encuentra en la ruta [src/components/cartWidget/index.js].

### Cart
El componente **Cart**, que se encuentra en el archivo [src/components/cart/index.js], muestra un componente **CartItem** por cada item agregado por el usuario, un botón para vaciar el carrito, el precio total y un botón **continuar compra** con el enlace a **CartForm**. Toda la lógica que contiene el carrito se encuentra en el **Context** que envuelve a toda la app, dicha lógica se encuentra en el archivo [src/context/CartContext.js] 

El componente **CartItem** que se encuentra en el archivo [src/components/cartItem/index.js], muestra la foto del producto, el título, la cantidad, una botonera para modificar la cantidad, un botón para eliminar el producto del cart y el precio unitario.

### Órdenes de compra
El usuario puede generar una orden de compra agregando productos al **carrito** y llenando un **formulario**. Al finalizar dichas acciones **firebase** devuelve un 'id' que es presentado al usuario como comprobante de que la petición se realizó con éxito. Al realizarse la petición con óxito se ejecuta una actualizacion de 'stock' en la base de datos, unicamente de los productos que el usuario seleccionó. 

Las funciones que ejecutan estas interacciones se encuentran en el archivo: [src/firebase/firestore.js].

### Formulario
El formulario de compra es presentado al usuario cuándo ya agregó productos al carrito y presionó en el botón **Continuar compra**. El mismo requiere que el usuario ingrese: 'nombre', 'apellido', 'teléfono', 'email' y una 'confirmación de Email' que debe coincidir con el 'email' ingresado en el campo anterior.

Todos los campos tienen validación integrada de **HTML**: **required**,**minLength** y **maxLength**, y una validación mediante **expresiones regulares** dichas expresiones requieren que los campos cumplan con las siguientes requisitos:
    **'nombre', 'apellido'** deben contener de 3 a 16 letras mayúsculas y minúsculas, con o sin tildes.
    **telefono** debe contener de 7 a 16 caracteres 
    **email** debe contener un email válido.
    **confirmar email** debe coincidir con el campo anterior.

De no cumplirse **todos** estos requisitos el formulario no podrá ser enviado, y las validaciones de **html** mostrarán las correcciones que necesite hacer el usuario o un mensaje de error mostrado por el mismo componente **FormCart**

Si el **Formulario** es enviado correctamente, se mostrará un componente **mensaje** que contiene el detalle de la compra realizada, un **ID** de compra y un enlace para volver al **HOME**

Todas las funciones y expresiones regulares se encuentran en el archivo [src/regEx/index.js].

### Estilos
Todos los estilos fueron realizados con **CSS** y se encuentran en la carpeta correspondiente a cada archivo **.js**.  