import React from "react";

// React Hook React.useEffect has a missing dependency: 'theWinnerIs'.
// Napraw błąd wysepujacy po przekazaniu odwołania do state w
// komponencie APP wyzej, Nasepnie dokończ blokowanie dalszej opcji
// klikania kienek do zaznaczania - linia 55 w APP

const Winner = ({ table, theWinnerIs }) => {
  const [gameWinner, setGameWinner] = React.useState(null);
  React.useEffect(() => {
    let winner = null;

    if (table[0] === "O" && table[1] === "O" && table[2] === "O") {
      winner = "O";
    } else if (table[0] === "O" && table[3] === "O" && table[6] === "O") {
      winner = "O";
    } else if (table[0] === "O" && table[3] === "O" && table[6] === "O") {
      winner = "O";
    } else if (table[2] === "O" && table[5] === "O" && table[8] === "O") {
      winner = "O";
    } else if (table[6] === "O" && table[7] === "O" && table[8] === "O") {
      winner = "O";
    } else if (table[0] === "O" && table[4] === "O" && table[8] === "O") {
      winner = "O";
    } else if (table[2] === "O" && table[4] === "O" && table[6] === "O") {
      winner = "O";
    } else if (table[0] === "X" && table[3] === "X" && table[6] === "X") {
      winner = "X";
    } else if (table[2] === "X" && table[5] === "X" && table[8] === "X") {
      winner = "X";
    } else if (table[6] === "X" && table[7] === "X" && table[8] === "X") {
      winner = "X";
    } else if (table[0] === "X" && table[4] === "X" && table[8] === "X") {
      winner = "X";
    } else if (table[2] === "X" && table[4] === "X" && table[6] === "X") {
      winner = "X";
    } else if (table[0] === "X" && table[1] === "X" && table[2] === "X") {
      winner = "X";
    } else if (table[0] === "X" && table[3] === "X" && table[6] === "X") {
      winner = "X";
    } else {
      return;
    }

    if (winner !== null) {
      theWinnerIs(winner);
      setGameWinner(winner);
    }
  }, [table]);

  return <span>{gameWinner !== null ? gameWinner : "?"}</span>;
};

export default Winner;
