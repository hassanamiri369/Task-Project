import React from 'react'
import "./HeaderStyle.css";

import { BsHeart } from 'react-icons/bs';

import { MdOutlineVisibility } from 'react-icons/md';
import { GoClock } from 'react-icons/go';
import { BsCalendar2Date } from 'react-icons/bs';

const Header = () => {

    const [count , setCount] = React.useState(110)

    const inc = ()=> setCount(prev => prev + 1)

  return (
    <div className='header-container'>


        <div className='top-header'>
            <div className='heart' onClick={inc}>
               <span ><BsHeart color={count == 110 ? "gray": "red"} /></span>
               <span style={{ cursor : "pointer" ,  color : `${count ==110 ? "gray" : "red"}`}}>{count}</span>
            </div>

            <div className='header-text'>
                <h2>زندگی غیر از زندگی کردن </h2>
            </div>


            <div className='header-route'>
               <p>  / صفحه اصلی / وبلاگ / خودشناسی </p>
            </div>
        </div>

        <div className='main-header'>
            <img src='https://cdn.nody.ir/files/2021/12/18/nody-%D8%B9%DA%A9%D8%B3-%D8%A7%D8%B2-%DA%A9%D9%88%DB%8C%D8%B1-1639806045.jpg'/>
        </div>


        <div className='bottom-header'>
            <div className='tags'>
                <span>خودشناسی</span>
                <span>خودشناسی</span>
                <span>خودشناسی</span>
                <span>خودشناسی</span>
            </div>

            <div className='date'>
                <div className='vsite'>
                    <span>622 بازدید</span>
                    <span><MdOutlineVisibility/></span>
                </div >
                <div className='oclock'>
                    <span>زمان مطالعه 6 دقیقه</span>
                    <span><GoClock/></span>
                </div>
                <div className='day'>
                    <span>1400/2/1</span>
                    <span><BsCalendar2Date/></span>
                </div>
            </div>
        </div>




    </div>
  )
}

export default Header