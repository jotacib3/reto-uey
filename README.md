# Diseño de Sistema:
En uey.mx ofrecemos una amplia variedad de productos que nuestros clientes pueden comprar o rentar para sus eventos. Desde bebidas y alimentos hasta mobiliario, equipo de sonido y espacios, nuestros productos están diseñados para satisfacer todas las necesidades de nuestros clientes.

Algunos ejemplos de los productos que ofrecemos son mesas y sillas, mantelería, cristalería, iluminación, carpas y decoración. Todos nuestros productos tienen una descripción detallada y fotografías de alta calidad para que los clientes puedan tener una idea clara de lo que están comprando o rentando.

Para mejorar la experiencia de nuestros clientes, estamos buscando diseñar un servicio que permita consultar los productos disponibles en una ubicación determinada. Para ello, contamos con tres tipos de productos en nuestro sistema:

**Productos simples**: Estos productos son aquellos que no son rentables, como la vajilla, la mantelería y otros accesorios para eventos. Cada producto simple tiene un nombre, una imagen y una descripción detallada, así como un identificador del vendedor y del producto. Además, cada producto simple se marca como rentable o no rentable para ayudar a los clientes a identificar rápidamente qué productos están disponibles para la compra y cuáles solo se pueden alquilar.

**Productos rentables**: Estos productos son aquellos que se pueden rentar, como las mesas y las sillas. Cada producto rentable tiene un nombre, una imagen y una descripción detallada, así como un identificador del vendedor y del producto. Además, cada producto rentable especifica el tipo de renta (por horas o por días), lo que permite a los clientes planificar su evento de manera más efectiva. También incluyen información sobre la disponibilidad en una fecha determinada.

**Espacios**: Estos productos son espacios para eventos, como salones y jardines. Cada espacio tiene un nombre, una imagen y una descripción detallada, así como un identificador del vendedor y del producto. Además, cada espacio especifica su ubicación y disponibilidad en una fecha determinada, lo que permite a los clientes planificar su evento de manera efectiva.

En resumen, nuestros productos están diseñados para satisfacer todas las necesidades de nuestros clientes, y nuestro servicio de consulta de productos hará que sea fácil para ellos encontrar los productos que necesitan en una ubicación determinada.

## Para ejecutar esta aplicación:

```
npm run dev
```

## Ejercicios

1- Modela las clases necesarias que representan los productos de tipo Simple, Rentable y Espacio descritos en el enunciado.

2- En el archivo /data/index.ts agrega una instancia de cada tipo de productos en el array products que se exporta.

3- Diseña una consulta(API REST) GET al endpoint /products para obtener la información de los productos. Actualmente tenemos instalada la última versión de la librería axios.

**Bonus**:
Agrega un filtro por algún campo que prefieras para tus productos.

4- Diseña una consulta GraphQL a query __products__ para obtener la información de los productos. Actualmente tenemos instalada la última versión de la librería @apollo/client.

**Bonus**:
Agrega un filtro por algún campo que prefieras para tus productos.

(Habilidades buscadas: Diseño de consultas GraphQL, uso de filtros y paginación)

5- Maqueta una vista que muestre los tres productos que obtendras usando graphql preferiblemente. Tienes instalada la librería [Material UI](https://mui.com)


6- Maquetar la vista detalle para el producto rentable:
Debes crear una vista que muestre los detalles de un producto rentable (bookable), incluyendo la información del producto, el precio y la disponibilidad en una ubicación y fecha determinadas. Puedes utilizar bibliotecas de componentes como Material UI para diseñar la interfaz de usuario.(Habilidades buscadas: Diseño de interfaces de usuario, uso de bibliotecas de componentes)

7- Maquetar la vista detalle para el producto de tipo espacio:
Debes crear una vista que muestre los detalles de un espacio para eventos, incluyendo la información del producto, el precio y la disponibilidad en una ubicación y fecha determinadas. Puedes utilizar bibliotecas de componentes como Material UI para diseñar la interfaz de usuario.(Habilidades buscadas: Diseño de interfaces de usuario, uso de bibliotecas de componentes)

8- Integrar el API de Google Map(Bonus)
Este ejercicio es opcional y consiste en integrar la API de Google Maps en el sistema de productos para mostrar la ubicación de los espacios y los productos rentables en un mapa interactivo. Para lograr esto, debes utilizar la documentación de la API de Google Maps y las bibliotecas de JavaScript necesarias para conectar el sistema de productos con el mapa interactivo.

Es importante que para resolver estos ejercicios demuestres habilidades en diseño de interfaces de usuario, uso de bibliotecas de componentes y conocimientos en integración de APIs externas. Además, es recomendable seguir las mejores prácticas de desarrollo de software y asegurarse de que el código sea legible, escalable y mantenible.