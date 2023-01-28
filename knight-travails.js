const Knight = () => {
  const moves = (start, end) => {
    let visited = new Set();
    let queue = [[start]];
    let directions = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ];

    while (queue.length > 0) {
      let path = queue.shift();
      console.log('path ' + path);
      let current = path[path.length - 1];
      console.log('current ' + current);

      if (current[0] === end[0] && current[1] === end[1]) {
        return pathDisplay(path);
      }

      for (let direction of directions) {
        let x = current[0] + direction[0];
        let y = current[1] + direction[1];

        if (x < 0 || x > 7 || y < 0 || y > 7) continue;

        let newPosition = [x, y];

        if (visited.has(newPosition)) continue;

        visited.add(newPosition);
        queue.push(path.concat([newPosition]));
      }
    }

    return 'No path found';
  };

  return { moves };
};

const pathDisplay = (path) => {
  console.log(`You made it in ${path.length} move(s)! Here's your path:`);
  for (const move of path) {
    console.log(move);
  }
};

const myKnight = Knight();

myKnight.moves([0, 0], [3, 3]);
