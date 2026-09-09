// import React from 'react';

// import { FaUserAlt } from "react-icons/fa";
import type { Iplayer } from "../../../../types/playerType";
import { TbTrash } from "react-icons/tb";

interface SelectedPlayerCardProps {
    player: Iplayer,
    selectedPlayers: Iplayer[],
    setSelectedPlayers:React.Dispatch<React.SetStateAction<Iplayer[]>>;
    coin: number,
    setCoin:React.Dispatch<React.SetStateAction<number>>
}

const SelectedPlayerCard = ({player,selectedPlayers, setSelectedPlayers, coin,setCoin}:SelectedPlayerCardProps) => {

    const handleDelete = ()=>{
        const restPlayers = selectedPlayers.filter(p=>p!==player)
        setSelectedPlayers(restPlayers)
        setCoin(coin+player.price)
    }
    return (
        <div className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl p-4 m-5">
            <div className="flex gap-2 items-center">
                <img src={player.playerImage} alt="" className="h-13 w-13" />
                <div>
                    <h2 className="font-bold text-2xl">{player.playerName}</h2>
                    <p>{player.playerType}</p>
                </div>
            </div>
            <span onClick={handleDelete} className="text-red-500 font-bold">
                <TbTrash/>
            </span>
        </div>
    );
};

export default SelectedPlayerCard;