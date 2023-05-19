import React from "react";
import Square from "./components/Square";
import Winner from "./components/Winner";
import { nanoid } from "nanoid";

// Gra zakończona, dodj sobie jeszcze zapis wygranych dla X i O
// po lewej i prawej stronie

function App() {
  const [squares, setSquares] = React.useState(fillTheTable(null));
  const [player, setPlayer] = React.useState(false);
  const [allFigure, setAllFigure] = React.useState([]);
  const [winner, setWiner] = React.useState(null);

  React.useEffect(() => {
    const arrayOfFigures = squares.map((square) => {
      if (square.isSelect === false) {
        return "O";
      } else if (square.isSelect === true) {
        return "X";
      } else {
        return null;
      }
    });

    setAllFigure(arrayOfFigures);
  }, [squares]);

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

    setSquares((oldSquares) => {
      if (winner !== null) return oldSquares;

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

  function startNewGame() {
    console.log("Nowa gra");
    setSquares(fillTheTable(null));
    setPlayer(false);
    setAllFigure([]);
    setWiner(null);
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
      <div className="winner--table">
        <h2>
          The winner is
          <Winner
            table={allFigure}
            setWiner={setWiner}
            winner={winner ? winner : null}
          />
        </h2>
        {winner && (
          <button className="winner--new-game" onClick={startNewGame}>
            New Game
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
