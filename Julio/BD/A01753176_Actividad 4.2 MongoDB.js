/*Ejercicio 1: Número total de películas estrenadas en 2015 con una duración superior a 120 minutos.*/
db.getCollection("movies")
	.find({
		"year": 2015.0,
		"runtime": 120.0
	});
	
	
/*Ejercicio 2: Listado de países origen de las películas (sin repeticiones).*/
db.movies.distinct("countries")


/*Ejercicio 3: Listado de películas pertenecientes a géneros "Action" y "Comedy" (ambos).*/
db.movies.find({genres: {$all: ["Action", "Comedy"]}},
{title:1, genres:1, directors:1})


/*Ejercicio 4: Listado de películas que han ganado al menos 10 premios 
(sólo título, director y número de premios).*/
db.movies.aggregate([
{ $project: { title: 1, directors: 1, awards: 1 } },
{ $unwind: "$awards" },
{ $project: { title: 1, directors: 1, wins: "$awards.wins" } },
{ $match: { wins: { $gte: 10 } } }
])


/*Ejercicio 5: Número total de películas por país, ordenado por total de películas de forma descendente.*/
db.movies.aggregate([
{
$unwind: "$countries"
},
{
$group: {
_id: "$countries",
total_movies: { $sum: 1 }
}
},
{
$sort: {
total_movies: -1
}
},
{
$project: {
_id: 0,
country: "$_id",
total_movies: 1
}
}
])


/*Ejercicio 6: Título de la película con más comentarios y su respectivo número de comentarios.*/
db.movies.aggregate([
{ $sort: { num_mflix_comments: -1 } },
{ $limit: 1 },
{ $project: { _id: 0, title: 1, num_mflix_comments: 1 } }
])


/*Ejercicio 7: Duración promedio de películas por año, ordenadas por año de forma ascendente.*/
db.movies.aggregate([
{
$group: {
_id: "$year",
avg_runtime: { $avg: "$runtime" }
}
},
{
$project: {
_id: 0,
year: "$_id",
avg_runtime: 1
}
},
{
$sort: { year: 1 }
}
])


/*Ejercicio 8: Número total de películas por cada periodo de 10 años*/
db.movies.aggregate([
{
$group: {
_id: {
$subtract: [
{ $year: "$released" },
{ $mod: [{ $year: "$released" }, 10] }
]
},
count: { $sum: 1 }
}
},
{
$project: {
decade: {
$concat: [
{
$toString: {
$subtract: ["$_id", 9]
}
},
" - ",
{
$substr: [
{ $toString: "$_id" },
0,
-1
]
}
]
},
count: 1,
_id: 0
}
}
])


/*Ejercicio 9: 10 actores que han aparecido en el mayor número de películas 
(solo nombre de actor y número de películas ordenado descendentemente).*/
db.movies.aggregate([
{ $unwind: "$cast" },
{ $group: { _id: "$cast", count: { $sum: 1 } } },
{ $sort: { count: -1 } },
{ $limit: 10 },
{ $project: { _id: 0, actor: "$_id", num_movies: "$count" } }
])


/*Ejercicio 10: Puntuación de MetaCritic promedio para directores que ha dirigido al 
menos 5 películas, ordenado por puntación en orden descendiente.*/
db.movies.aggregate([
  // Filtrar solo las películas con puntuación de MetaCritic
  { $match: { "metacritic": { $ne: null } } },
  // Agrupar por director y calcular la cantidad de películas y la puntuación promedio
  { $group: {
      _id: "$directors",
      count: { $sum: 1 },
      avg_metacritic: { $avg: "$metacritic" }
  }},
  // Filtrar solo los directores con al menos 5 películas
  { $match: { count: { $gte: 5 } } },
  // Ordenar por puntuación promedio en orden descendiente
  { $sort: { avg_metacritic: -1 } },
  // Proyectar solo el nombre del director y la puntuación promedio
  { $project: { _id: 1, avg_metacritic: 1 } }
]).pretty()
