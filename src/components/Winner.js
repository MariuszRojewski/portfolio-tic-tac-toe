import React from "react";

// Dokończ kto to wygrał
const Winner = ({ allSquares }) => {
  const allFigure = [];
  let winner = null;

  React.useEffect(() => {
    console.log("ABC");
  }, [winner]);

  allSquares.forEach((element) => {
    if (element.isSelect) {
      allFigure.push("X");
    } else if (element.isSelect === false) {
      allFigure.push("O");
    } else {
      allFigure.push("");
    }
  });

  if (allFigure[0] === "O" && allFigure[1] === "O" && allFigure[2] === "O") {
    winner = "O";
  } else if (
    allFigure[0] === "O" &&
    allFigure[3] === "O" &&
    allFigure[6] === "O"
  ) {
    winner = "O";
  } else if (
    allFigure[2] === "O" &&
    allFigure[5] === "O" &&
    allFigure[8] === "O"
  ) {
    winner = "O";
  } else if (
    allFigure[6] === "O" &&
    allFigure[7] === "O" &&
    allFigure[8] === "O"
  ) {
    winner = "O";
  } else if (
    allFigure[0] === "O" &&
    allFigure[4] === "O" &&
    allFigure[8] === "O"
  ) {
    winner = "O";
  } else if (
    allFigure[2] === "O" &&
    allFigure[4] === "O" &&
    allFigure[6] === "O"
  ) {
    winner = "O";
  } else if (
    allFigure[0] === "X" &&
    allFigure[1] === "X" &&
    allFigure[2] === "X"
  ) {
    winner = "X";
  } else if (
    allFigure[0] === "X" &&
    allFigure[3] === "X" &&
    allFigure[6] === "X"
  ) {
    winner = "X";
  } else if (
    allFigure[2] === "X" &&
    allFigure[5] === "X" &&
    allFigure[8] === "X"
  ) {
    winner = "X";
  } else if (
    allFigure[6] === "X" &&
    allFigure[7] === "X" &&
    allFigure[8] === "X"
  ) {
    winner = "X";
  } else if (
    allFigure[0] === "X" &&
    allFigure[4] === "X" &&
    allFigure[8] === "X"
  ) {
    winner = "X";
  } else if (
    allFigure[2] === "X" &&
    allFigure[4] === "X" &&
    allFigure[6] === "X"
  ) {
    winner = "X";
  } else {
    return;
  }

  console.log("#############################");
  console.log(winner);

  return <span>{winner !== null ? winner : "?"}</span>;
};

export default Winner;
