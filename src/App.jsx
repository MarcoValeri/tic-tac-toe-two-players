import { useState } from "react";

import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";

const App = () => {

    const [activePlayer, setActivePlayer] = useState('X');

    const handleSelectSquare = () => {
        setActivePlayer(curActivePlayer => curActivePlayer === 'X' ? 'O' : 'X');
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
            </div>

            LOG
        </main>
    )
}

export default App;