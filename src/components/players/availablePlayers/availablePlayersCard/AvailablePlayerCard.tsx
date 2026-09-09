import { FaUserAlt } from "react-icons/fa";
import type { Iplayer } from "../../../../types/playerType";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";


// import React from 'react';
interface AvailablePlayerCardProps {
    player: Iplayer
    selectedPlayers: Iplayer[],
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
    coin: number,
    setCoin: React.Dispatch<React.SetStateAction<number>>
}
const AvailablePlayerCard = ({ player, selectedPlayers, setSelectedPlayers, coin, setCoin }: AvailablePlayerCardProps) => {
    const [isChossen, setIsChossen] = useState<boolean>(false)
    const handleChoosePlayer = () => {
        const newCoin = coin - player.price
        if (newCoin > 0) {
            setCoin(newCoin)
            setIsChossen(true)
            const newSelectedPlayers = [...selectedPlayers, player]
            setSelectedPlayers(newSelectedPlayers)

            toast.success(`${player.playerName} has been purchased Successfully`, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            toast.error(`Insufficient Coin to purchase`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }


    }
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 overflow-hidden">
            <figure className="h-60 overflow-hidden">
                <img
                    src={player.playerImage}
                    alt={player.playerName}
                    className="w-full h-full  hover:scale-105 transition-transform duration-300"
                />
            </figure>

            <div className="card-body p-5 space-y-4">

                {/* Player Name */}
                <h2 className="card-title text-xl font-bold flex items-center gap-2">
                    <FaUserAlt className="text-primary" />
                    {player.playerName}
                </h2>

                {/* Origin & Player Type */}
                <div className="flex justify-between items-center gap-3">
                    <p className="font-medium text-base-content/70">
                        {player.origin}
                    </p>

                    <span className="badge badge-primary badge-outline">
                        {player.playerType}
                    </span>
                </div>

                <div className="divider my-1"></div>

                {/* Rating */}
                <div>
                    <h3 className="font-bold text-lg mb-3">
                        Rating
                    </h3>

                    <div className="flex justify-between items-center">
                        <p className="font-medium text-base-content/80">
                            {player.battingStyle}
                        </p>

                        <span className="badge badge-neutral">
                            {player.bowlingStyle}
                        </span>
                    </div>
                </div>

                {/* Price & Button */}
                <div className="card-actions justify-between items-center pt-3 border-t border-base-200">
                    <div>
                        <p className="text-sm text-base-content/60">
                            Price
                        </p>
                        <h2 className="font-bold text-2xl text-primary">
                            ${player.price}
                        </h2>
                    </div>

                    <button onClick={handleChoosePlayer} className="btn btn-primary px-6 " disabled={isChossen}>
                        {isChossen ? 'Selected' : 'Choose Player'}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AvailablePlayerCard;