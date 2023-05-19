import React from "react";

const Winner = ({ table, setWiner }) => {
  const [gameWinner, setGameWinner] = React.useState(null);

  React.useEffect(() => {
    const winningFields = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    function calculateWinner(table) {
      for (let i = 0; i < winningFields.length; i++) {
        const [a, b, c] = winningFields[i];
        if (table[a] && table[a] === table[b] && table[a] === table[c]) {
          return table[a];
        }
      }
      return null;
    }

    const winner = calculateWinner(table);

    if (winner !== null) {
      setWiner(winner);
      setGameWinner(winner);
    }
  }, [table, setWiner]);

  return (
    <span className="winner--figure">
      {gameWinner !== null ? gameWinner : "?"}
    </span>
  );
};

export default Winner;
