const Node = (data) => {
  children = [];
  return { data, children };
};

const Knight = (coords = [0, 0]) => {
  const possibleMoves = (start = coords) => {
    const node = Node(start);
    const x = node.data[0];
    const y = node.data[1];

    const combinations = [
      [x + 1, y + 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x + 1, y - 2],
      [x - 1, y - 2],
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x - 1, y + 2],
    ];

    for (const combination of combinations) {
      if (combination[0] >= 0 && combination[1] >= 0)
        node.children.push(combination);
    }

    return node;
  };

  const levelOrder = (start, end) => {
    const node = Node(start);
    let result = [];
    let queue = [];
    queue.push(node);

    // console.log(queue[0].data);
    // console.log(node.data)
    // console.log(end)

    if (end.toString() === node.data.toString()) return result;

    queue.push(possibleMoves(start));
    console.log(queue);

    // while (queue.length !== 0) {
    //   let current = queue.shift();
    //   result.push(current.data);

    // }

  };

  const moves = (start, end) => {};

  return { coords, possibleMoves, levelOrder };
};

const myKnight = Knight();

console.log(myKnight.possibleMoves());
console.log(myKnight.possibleMoves([3, 3]));
console.log(myKnight.levelOrder([0, 0], [3, 3]));
