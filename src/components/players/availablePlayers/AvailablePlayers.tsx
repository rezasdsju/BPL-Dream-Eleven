import type { Iplayer } from "../../../types/playerType";
import AvailablePlayerCard from "./availablePlayersCard/AvailablePlayerCard";
// import React from 'react';
interface AvailablePlayersProps {
    players: Iplayer[]
}
const AvailablePlayers = ({players}:AvailablePlayersProps) => {
    return (
        <div className="grid grid-cols-3 gap-7 mt-6">
            {
                players.map((player,index)=> <AvailablePlayerCard key={index} player={player}></AvailablePlayerCard>)
            }
        </div>
    );
};

export default AvailablePlayers;