/*
Dado el siguiente javascript usa forof para recorrer el array de películas, 
genera un nuevo array con las categorías de las películas e imprime 
por consola el array de categorías. Ten en cuenta que las categorías no deberían 
repetirse. Para filtrar las categorías puedes ayudarte de la función .includes()
*/

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let pelisPorCategory = [];
for (let pelis of movies){
    for (let category of pelis.categories){
        if (!pelisPorCategory.includes(category)) {
            pelisPorCategory.push(category);
        }
    }
}

console.log(pelisPorCategory);

