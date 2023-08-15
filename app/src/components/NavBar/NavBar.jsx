import React from 'react'

import { IoSearchOutline } from 'react-icons/io5';
import { GrMenu } from 'react-icons/gr';


import { MdOutlineSettingsVoice } from 'react-icons/md';
import { CiTwitter } from 'react-icons/ci';
import { PiInstagramLogoThin } from 'react-icons/pi';
import { PiTelegramLogoThin } from 'react-icons/pi';

import "./NavBarStyle.css"
const NavBar = () => {

    const [openMenu, setOpenMenu] = React.useState(false)



    function Func (){
        setOpenMenu(false)
    }


    document.body.addEventListener("click" , Func , true)

    return (
        <div className='NavBarContainer'>

            {/* mobile */}
            <div className='ham-menu'>
                <div>
                    <GrMenu className='menuIcon' onClick={() => setOpenMenu(!openMenu)} />
                    {openMenu ? (<div className='sideBar'>


                        <div className='sideSearchBar'>
                            <div>
                                <input type='text' placeholder='جستجو' />
                                <span><IoSearchOutline /></span>
                            </div>
                        </div>


                        <div className='sideLinks'>
                            <div>
                                <ul>
                                    <li>
                                        <div></div>
                                        <span>آغاز</span>
                                    </li>

                                    <li className='activeLink'>
                                        <div></div>
                                        <span>چرا آمادست</span>
                                    </li>

                                    <li>
                                        <div></div>
                                        <span>منتخب صوت</span>
                                    </li>


                                    <li>
                                        <div></div>
                                        <span>جلسات</span>
                                    </li>
                                    <li>
                                        <div></div>
                                        <span>منتخب متن</span>
                                    </li>


                                    <li>
                                        <div></div>
                                        <span>شبکه های اجتماعی</span>
                                    </li>

                                    <li>
                                        <div></div>
                                        <span>سوالات متداول</span>
                                    </li>






                                </ul>
                            </div>
                        </div>
                        <div className='sideFooter'>
                            <div>
                                <span>
                                    <MdOutlineSettingsVoice className='voice'/>
                                </span>
                                <span>
                                    <CiTwitter className='twitter'/>
                                </span>
                                <span>
                                    <PiInstagramLogoThin className='instagram'/>
                                </span>
                                <span>
                                    <PiTelegramLogoThin className='telegram'/>
                                </span>
                            </div>
                        </div>
                    </div>) : null}
                </div>
            </div>



         


            {/* desktop */}
            <div className='searchBar'>
                <div>
                    <input type='text' placeholder='جستجو' />
                    <span><IoSearchOutline /></span>
                </div>
            </div>

            <div className="head-links">
                <ul>
                    <li>
                        <div></div>
                        <span>سوالات متداول</span>
                    </li>
                    <li>
                        <div></div>
                        <span>شبکه های اجتماعی</span>
                    </li>
                    <li>
                        <div></div>
                        <span>منتخب متن</span>
                    </li>

                    <li>
                        <div></div>
                        <span>جلسات</span>
                    </li>

                    <li>
                        <div></div>
                        <span>منتخب صوت</span>
                    </li>

                    <li className='activeLink'>
                        <div></div>
                        <span>چرا آمادست</span>
                    </li>

                    <li>
                        <div></div>
                        <span>آغاز</span>
                    </li>

                </ul>
            </div>

            <div className='Logo-navbar'>
                <img src={'https://amadast.com/_nuxt/logo64.a6a22600.png'} alt="Logo" />
            </div>
        </div>
    )
}

export default NavBar