

// import React from 'react';

import { use, useState } from "react";
import type { Iplayer } from "../../types/playerType";

import AvailablePlayers from "./availablePlayers/AvailablePlayers";
import SelectedPlayers from "./selectedPlayers/SelectedPlayers";

interface PlayersProps {
    playersPromise: Promise<Iplayer[]>,
    coin: number
    setCoin:React.Dispatch<React.SetStateAction<number>>
}
const Players = ({playersPromise,coin,setCoin}:PlayersProps) => {
    const players =  use(playersPromise)
    // console.log(players)

    const [buttonType, setButtonType] = useState<"available"| 'selected'>('available')
    const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([])
    const [searchedPlayers, setSearchedPlayers] = useState<Iplayer[]>(players)
    const handleButtonClick = ()=>{
        if (buttonType==='available') {
            setButtonType('selected')
        } else {
            setButtonType('available')
        }
        
    }

    const handleSearchPlayer = (searchedPlayerName:string):void=>{
        const matchedPlayers = players.filter(player=>player.playerName.toLocaleLowerCase().includes(searchedPlayerName.toLocaleLowerCase()))
       
        setSearchedPlayers(matchedPlayers)
    }
    console.log(searchedPlayers)
    // console.log(setSearchedPlayers)
    return (
        <div className="container mx-auto px-5 mt-5">
            <div className="flex justify-between gap-4 mb-2">
                <h2 className="font-bold text-xl">Available Players:</h2>
                <input className="border-2 rounded-2xl px-3" type="text" onChange={(e)=>handleSearchPlayer(e.target.value)} placeholder="Search..." />
                <div>
                    <button onClick={handleButtonClick} className={`btn rounded-r-none ${buttonType==='available'?'btn-success':''}`}>Available</button>
                    <button onClick={handleButtonClick} className={`btn rounded-l-none ${buttonType==='selected'?'btn-success':''}`}>Selected</button>
                </div>

            </div>
            {buttonType==='available'?<AvailablePlayers 
            coin={coin}
            setCoin={setCoin}
            setSelectedPlayers={setSelectedPlayers} 
            selectedPlayers={selectedPlayers} 
            players={searchedPlayers}></AvailablePlayers>:<SelectedPlayers setSelectedPlayers={setSelectedPlayers} 
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers} ></SelectedPlayers>}
        </div>
    );
};

export default Players;