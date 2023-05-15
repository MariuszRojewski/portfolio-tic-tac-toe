import React from "react";
import Square from "./components/Square";
import Winner from "./components/Winner";
import { nanoid } from "nanoid";

function App() {
  const [squares, setSquares] = React.useState(fillTheTable(null));
  const [player, setPlayer] = React.useState(false);

  function fillTheTable(value) {
    const blankTable = [];

    for (let i = 1; i <= 9; i++) {
      const square = {
        isSelect: value,
        id: nanoid(),
      };
      blankTable.push(square);
    }

    return blankTable;
  }

  function handleSelect(id) {
    squares.forEach((el) => {
      if (el.id === id) {
        if (el.isSelect === null) {
          setPlayer(!player);
        } else {
          return;
        }
      }
    });

    // Popraw zmienną odp na coś normalnego
    setSquares((oldSquares) => {
      return oldSquares.map((square) => {
        if (square.id === id) {
          const odp =
            square.isSelect === null
              ? {
                  ...square,
                  isSelect: (square.isSelect = player),
                }
              : { ...square };

          return odp;
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
      <h2>The winner is {<Winner allSquares={squares} />}</h2>
    </div>
  );
}

export default App;
