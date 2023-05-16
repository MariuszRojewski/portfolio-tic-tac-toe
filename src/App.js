import React from "react";
import Square from "./components/Square";
// import Winner from "./components/Winner";
import { nanoid } from "nanoid";

// Calość przeorana, nic nie działa... Sprawdź to rano.
// chciałeś wyciągnąć z komponentu winner ustawianie,
// X i O i coś ci się nie udało :)

function App() {
  const [squares, setSquares] = React.useState(fillTheTable(null));
  const [player, setPlayer] = React.useState(false);
  const [allFigure, setAllFigure] = React.useState([]);

  // console.log(winner);

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

  // function handleWinner(value) {
  //   setWinner(value);
  // }

  squares.forEach((element) => {
    if (element.isSelect) {
      setAllFigure((prevArray) => {
        return [...prevArray, "X"];
      });
    } else if (element.isSelect === false) {
      setAllFigure((prevArray) => {
        return [...prevArray, "O"];
      });
    } else {
      setAllFigure((prevArray) => {
        return [...prevArray, ""];
      });
    }
  });

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
      <h2>The winner is {""}</h2>
    </div>
  );
}

export default App;
