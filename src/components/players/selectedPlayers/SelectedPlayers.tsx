// import React from 'react';

import type { Iplayer } from "../../../types/playerType";
import SelectedPlayerCard from "./selectedPlayerCard/selectedPlayerCard";



interface SelectedPlayersProps {
    selectedPlayers: Iplayer[],
    setSelectedPlayers:React.Dispatch<React.SetStateAction<Iplayer[]>>;
}
const SelectedPlayers = ({selectedPlayers, setSelectedPlayers}:SelectedPlayersProps) => {
    console.log(setSelectedPlayers)
    return (
        <div className="grid grid-cols-3">
            {
                selectedPlayers.map((player,index)=> <SelectedPlayerCard key={index} 
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
                player={player} />)
            }
        </div>
    );
};

export default SelectedPlayers;