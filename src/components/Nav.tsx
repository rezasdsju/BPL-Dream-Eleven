

import Logo from '../assets/logo.png'

const Nav = () => {
    return (
        <nav className=" bg-red-200 ">
            <div className='flex justify-between container mx-auto px-5'>

                <img src={Logo} alt="" />
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Players</li>
                    <li>Schedule</li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;