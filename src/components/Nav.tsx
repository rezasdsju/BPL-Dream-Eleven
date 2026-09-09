

import { FaDollarSign } from 'react-icons/fa';
import Logo from '../assets/logo.png'

interface NavProps {
    coin: number
}
const Nav = ({coin}:NavProps) => {
    return (
        // <nav className=" bg-[#efebe3]">
        <nav>
            <div className='flex justify-between container mx-auto px-5'>

                <img src={Logo} alt="" />
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Players</li>
                    <li>Schedule</li>
                </ul>
                <p className='flex items-center'><FaDollarSign />{coin}</p>
            </div>
        </nav>
    );
};

export default Nav;