function dijkstra (graph, start){
    let vertices = [];
    let distance = [];
    let distanceFinal = [];


    let queue = [];
    let numberOfVertices = 0;
    //Les conditions initiales
    for (let vertex in graph){
        vertices.push(vertex);

        numberOfVertices++;
        if(vertex === start){
            distance.push(0);
            distanceFinal.push(0);        
        }
        else{
            distance.push(Infinity);
            distanceFinal.push( Infinity);
        }
    }

    while(queue.length < numberOfVertices)
    {
        let filtered = distance.filter(j => j !== undefined)
        let minimum = Math.min(...filtered);
        let index = distance.indexOf(minimum);
        let used = vertices[index];

        for(let neighbor in graph[used])
        {
            let d = distanceFinal[index];

            let oldDistance = distanceFinal[vertices.indexOf(neighbor)];
            let newDistance = d + graph[used][neighbor];
            if((newDistance < oldDistance))
            {
                distanceFinal[vertices.indexOf(neighbor)] = newDistance;
                distance[vertices.indexOf(neighbor)] = newDistance;
            }
        }

        queue.push(used);
        distance[index] = undefined;
    }

    let result = {};

    for(let i = 0; i < vertices.length; i++)
    {
        result[vertices[i]] = distanceFinal[i];
    }

    return result;
}

const graph = {
    'A': { 'B': 4, 'C': 2 },
 
    'B': { 'A': 4, 'C': 5, 'D': 10 },
 
    'C': { 'A': 2, 'B': 5, 'D': 3 },
 
    'D': { 'B': 10, 'C': 3 }
};

console.log(dijkstra(graph, 'B'));

