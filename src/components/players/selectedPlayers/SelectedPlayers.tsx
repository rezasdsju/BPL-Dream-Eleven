// import React from 'react';

import type { Iplayer } from "../../../types/playerType";
import SelectedPlayerCard from "./selectedPlayerCard/selectedPlayerCard";



interface SelectedPlayersProps {
    selectedPlayers: Iplayer[],
    setSelectedPlayers:React.Dispatch<React.SetStateAction<Iplayer[]>>;
    coin: number,
    setCoin:React.Dispatch<React.SetStateAction<number>>
}
const SelectedPlayers = ({selectedPlayers, setSelectedPlayers,coin,setCoin}:SelectedPlayersProps) => {
    console.log(setSelectedPlayers)
    return (
        <div className="grid grid-cols-3">
            {
                selectedPlayers.map((player,index)=> <SelectedPlayerCard key={index} 
                coin={coin}
                setCoin={setCoin}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
                player={player} />)
            }
        </div>
    );
};

export default SelectedPlayers;