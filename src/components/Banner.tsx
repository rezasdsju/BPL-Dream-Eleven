
import BannerImage from '../assets/banner-main.png'

const Banner = () => {
    return (
        <div
            className='flex flex-col items-center mx-auto justify-center  overflow-hidden pt-5 pb-10 space-y-3'
            style={{
                background: 'radial-gradient(circle at 4% 100%, rgba(102, 119, 255, 0.3), transparent 24%), radial-gradient(circle at 100% 0%, rgba(235, 177, 164, 0.5), transparent 25%), #131313',
            }}
        >
            <img src={BannerImage} alt="" />
            <h2 className='font-bold text-3xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className='font-semibold text-white'>Beyond Boundaries Beyond Limits</p>
            <button className="btn btn-warning font-bold">Claim Free Credit</button>

        </div>
    );
};

export default Banner;