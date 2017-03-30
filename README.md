# Ejercicio 5.6.8. Utilización de JSONP
Ejercicio de asignaturas de aplicaciones HTML5. Tema jQuery. Utilización de JSONP.

## Enunciado
Escribe un programa que, usando la API de Flickr, y en particular el documento JSONP que incluye información sobre las últimas fotos que se han etiquetado con la etiqueta `fuenlabrada`, muestre estas fotos cuando se pica en pantalla sobre un cierto elemento.

Mejora tu programa para que admita que el usuario escriba en una caja la eitqueta, o lista de etiquetas que quiera, y el programa muestre las últimas fotos con esas etiquetas.

### Enlaces de interés
- [JSONP en Wikipedia](http://en.wikipedia.org/wiki/JSONP)
- [Documentación de la API jQuery sobre jQuery.getJSON()](http://api.jquery.com/jQuery.getJSON/)
- [Documentación de la API de Flickr](http://www.flickr.com/services/api/)
- [Acceso al fichero JSONP con las últimas fotos de Flickr con la etiqueta `fuenlabrada`](http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada&tagmode=any&format=json&jsoncallback=?)

## Resultado
[https://acamara7es.github.io/X-Nav-JQ-Flickr](https://acamara7es.github.io/X-Nav-JQ-Flickr)

## Comentarios y mejoras
- Para realizar el ejercicio también es de interés [este enlace](https://www.flickr.com/services/feeds/) que da información sobre los feeds de Flickr y los parámetros que puedes poner en cada petición.
- Las imágenes obtenidas están enlazadas con su publicación real en Flickr.
- Al poner varias tags separadas por comas, hace la búsqueda como "AND" y no como "OR", es decir, las imágenes obtenidas deben contener todas las etiquetas.
