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
        <div>
            <h2 className={ `text-2xl mx-auto mb-5 ${selectedPlayers.length>0? ' text-black':'text-red-500'}`}>{selectedPlayers.length>0? `${selectedPlayers.length} Players has been selected`: 'No Players has been Selected '}</h2>
        <div className="grid grid-cols-1">
            {
                selectedPlayers.map((player,index)=> <SelectedPlayerCard key={index} 
                coin={coin}
                setCoin={setCoin}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
                player={player} />)
            }
        </div>
        </div>
    );
};

export default SelectedPlayers;