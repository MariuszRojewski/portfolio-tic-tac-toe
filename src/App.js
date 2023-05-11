import React from "react";
import Square from "./components/Square";
import { nanoid } from "nanoid";

function App() {
  const [squares, setSquares] = React.useState(fillTheTable());

  function fillTheTable() {
    const blankTable = [];

    for (let i = 1; i <= 9; i++) {
      const square = {
        isSelect: false,
        id: nanoid(),
      };
      blankTable.push(square);
    }

    return blankTable;
  }

  function handleSelect(id) {
    setSquares((oldSquares) => {
      return oldSquares.map((square) => {
        if (square.id === id) {
          return {
            ...square,
            isSelect: !square.isSelect,
          };
        } else {
          return {
            ...square,
          };
        }
      });
    });
  }

  const setTable = squares.map((square) => {
    return (
      <Square
        key={square.id}
        isSelect={square.isSelect}
        onClick={() => handleSelect(square.id)}
      />
    );
  });

  return (
    <div className="wrapper">
      <h1>Tic Tac Toe</h1>
      <div className="gameWrapper">{setTable}</div>
    </div>
  );
}

export default App;
