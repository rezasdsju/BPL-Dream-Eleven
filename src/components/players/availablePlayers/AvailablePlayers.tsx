import type { Iplayer } from "../../../types/playerType";
import AvailablePlayerCard from "./availablePlayersCard/AvailablePlayerCard";
// import React from 'react';
interface AvailablePlayersProps {
    players: Iplayer[],
    selectedPlayers: Iplayer[],
    setSelectedPlayers:React.Dispatch<React.SetStateAction<Iplayer[]>>;
    coin: number,
    setCoin:React.Dispatch<React.SetStateAction<number>>

}


const AvailablePlayers = ({players,selectedPlayers,setSelectedPlayers,coin, setCoin}:AvailablePlayersProps) => {
    return (
        <div className="grid grid-cols-3 gap-7 mt-6">
            {
                players.map((player,index)=> <AvailablePlayerCard coin={coin} setCoin={setCoin} key={index} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} player={player}></AvailablePlayerCard>)
            }
        </div>
    );
};

export default AvailablePlayers;