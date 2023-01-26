const Node = (data) => {
  children = [];
  return {
    data,
    children,
  };
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
      console.log(combination);
      if (combination[0] >= 0 && combination[1] >= 0)
        node.children.push(combination);
    }

    return node;
  };

  const moves = (start, end) => {};

  return { coords, possibleMoves };
};

const myKnight = Knight();

console.log(myKnight.possibleMoves());
console.log(myKnight.possibleMoves([3, 3]));
