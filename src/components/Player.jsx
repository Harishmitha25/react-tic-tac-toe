import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  //   const btnCaption = "Edit";
  //   const playerName = <span className="player-name">{name}</span>;
  function handleClick() {
    //If state depends on previous vcalue of state it should do ! instead it should pass a function
    // setIsEditing(!isEditing); // false to true
    // setIsEditing(!isEditing); // false to true - because its a schedule not an instant state update
    setIsEditing((editing) => !editing); // best practice - takes the latest state value - false to true
    // setIsEditing((editing) => !editing); // true to false
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  //   if (isEditing) {
  // playerName = <input type="text" required></input>;
  //     btnCaption = "Save";
  //   }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
