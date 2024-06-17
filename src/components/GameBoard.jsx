import { useState } from "react";

export default function GameBoard({ onSquareSelect, board }) {
  //derived state from turns instead of having another state like below

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]), // prevGameBoard - main with three values, innerArray - actual values
  //       ]; // deep dopying because objects and arrays in JS are objects so when directly upadting it without deep copying will lead to
  //       // undesired results if the state update schedule is triggered somewhere else as well.
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });

  //     onSquareSelect();
  //   }
  return (
    <ol id="game-board">
      {board.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* <button onClick={() => handleSelectSquare(index, colIndex)}>
                  {playerSymbol}
                </button> */}
                <button
                  onClick={() => onSquareSelect(index, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
