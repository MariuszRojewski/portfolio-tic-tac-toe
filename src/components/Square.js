import React from "react";

export default function Square({ isSelect, onClick }) {
  const styles = {
    backgroundColor: isSelect ? "green" : "white",
    color: isSelect ? "white" : "black",
  };
  return (
    <div className="square" style={styles} onClick={onClick}>
      {isSelect ? "X" : "O"}
    </div>
  );
}
