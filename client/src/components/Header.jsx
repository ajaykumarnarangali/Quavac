import { useState } from 'react'
import Logo from '/Quavac_1.png'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const { setCurrentuser } = useUser();
    const navigate = useNavigate();

    const handleShowMenu = () => {
        setShowMenu(prev => !prev);
    }

    const handleLogout = () => {
        setCurrentuser(null);
        localStorage.removeItem('user');
        navigate('/');
    }

    const handlePrefernce = () => {
        navigate('/preference');
    }

    return (
        <div>
            <div className='bg-headColor w-full flex justify-between items-center'>
                <div className='bg-white w-fit ps-2 pe-16 rounded-br-full'>
                    <img src={Logo} alt="" className='h-12' />
                </div>
                <div className='text-headerLogo text-lg flex gap-3 px-4'>
                    <span className='cursor-pointer'>
                        <i className="fa-solid fa-circle-question"></i>
                    </span>
                    <span className='cursor-pointer relative'>
                        <i className="fa-solid fa-user" onClick={handleShowMenu}></i>
                        {showMenu &&
                            <div className='absolute w-32 h-16 bg-subHeadColor shadow-md right-0 top-8 text-sm'>
                                <div className='flex gap-2 items-center justify-start px-2 h-1/2
                            hover:bg-slate-700 border-b border-b-gray-600'
                                    onClick={handlePrefernce}>
                                    <span>
                                        <i className="fa-solid fa-sliders"></i>
                                    </span>
                                    Preference
                                </div>
                                <div className='flex gap-2 items-center justify-start px-2 h-1/2
                            hover:bg-slate-700'
                                    onClick={handleLogout}>
                                    <span>
                                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                    </span>
                                    Logout
                                </div>
                            </div>
                        }
                    </span>
                    <span className='cursor-pointer'>
                        <i className="fa-solid fa-bars"></i>
                    </span>
                </div>
            </div>

            <div className='flex flex-col gap-2'>

                <div className='text-subHeadLogo font-light bg-subHeadColor flex justify-between items-center p-1 px-1 
                md:px-8 overflow-x-scroll gap-2 md:gap-0'>
                    <div className='flex items-center gap-5'>
                        <div>
                            <i className="fa-solid fa-house"></i>
                        </div>
                        <div className='flex gap-1'>
                            <i className="fa-solid fa-map-location-dot"></i>
                            <label className='text-xs font-medium'>Monitoring</label>
                        </div>
                        <div className='flex gap-1'>
                            <i className="fa-solid fa-bell"></i>
                            <label className='text-xs font-medium'>Alarms</label>
                        </div>
                        <div className='flex gap-1'>
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                            <label className='text-xs font-medium'>Tasks</label>
                        </div>
                        <div className='flex gap-1'>
                            <i className="fa-solid fa-circle-question"></i>
                            <label className='text-xs font-medium'>Help</label>
                        </div>
                        <div className='flex gap-1'>
                            <i className="fa-solid fa-globe"></i>
                            <label className='text-xs font-medium'>Network</label>
                        </div>
                        <div className='flex gap-1'>
                            <i className="fa-solid fa-gear"></i>
                            <label className='text-xs font-medium'>Administration</label>
                        </div>
                    </div>
                    <div className='flex gap-2 text-xs'>
                        <span>23:12</span>
                        <span>
                            <i className="fa-solid fa-phone"></i>
                        </span>
                    </div>
                </div>

                <div className=' bg-subHeadColor py-2 px-1 flex justify-between items-center'>
                    <div className='text-subHeadLogo flex gap-3 items-center'>
                        <span>
                            <i className="fa-solid fa-filter"></i>
                        </span>
                        <div>
                            <h1 className='text-lg font-semibold text-white'>VPS</h1>
                            <h1 className='text-[10px] text-subHeadLogo'>PORT O'CONNOR, TX</h1>
                        </div>
                    </div>
                    <div>
                        <span className='text-white text-3xl'>
                            <i className="fa-solid fa-gauge-simple-high"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header