import { useState } from "react";

const Player = ({initialName, symbol, isActive, onChangeName}) => {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(editing => !editing);
    }

    const handleChange = event => {
        setPlayerName(event.target.value);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {!isEditing && <span className="player-name">{playerName}</span>}
                {isEditing && <input type="text" value={playerName} required onChange={handleChange} />}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player;