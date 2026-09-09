

// import React from 'react';

import { use } from "react";
import type { Iplayer } from "../../types/playerType";

import AvailablePlayers from "./availablePlayers/AvailablePlayers";

interface PlayersProps {
    playersPromise: Promise<Iplayer[]>
}
const Players = ({playersPromise}:PlayersProps) => {
    const players =  use(playersPromise)
    console.log(players)
    return (
        <div className="container mx-auto px-5 mt-5">
            <div className="flex justify-between gap-4 mb-2">
                <h2 className="font-bold text-xl">Available Players:</h2>
                <div>
                    <button className="btn btn-success">Available</button>
                    <button className="btn ">Selected</button>
                </div>

            </div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;