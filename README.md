## Subject
Implement Dijkstra's Algorithm:

Write a JavaScript function named dijkstra that takes the following parameters:
graph: An object representing the weighted graph. Each key represents a vertex, and the corresponding value is an array of adjacent vertices with their respective weights. For example:
const graph = {
   'A': { 'B': 4, 'C': 2 },

   'B': { 'A': 4, 'C': 5, 'D': 10 },

   'C': { 'A': 2, 'B': 5, 'D': 3 },

   'D': { 'B': 10, 'C': 3 }

};

 

start: The starting vertex from which to find the shortest paths.
 
The function should return an object representing the shortest distances from the starting vertex to all other vertices. The keys of the object will be the vertices, and the corresponding values will be the shortest distances. For example, calling dijkstra(graph, 'A') should return:
{

   'A': 0,

   'B': 4,

   'C': 2,

   'D': 5

}
