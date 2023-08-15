import React from 'react'
import "./FooterStyle.css"
import { BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'


const Footer = () => {
    return (
        <div className='footer-container'>

            <div className='footer-content'>
            <div className='quickAccess'>
                <ul>
                    <li>دوره مقدماتی خودشناسی</li>
                    <li>جلسه هفتگی</li>
                    <li>منتخب متن</li>
                    <li>سوالات متداول</li>
                    <li>پادکست</li>
                    <li>سایر دوره های خودشناسی</li>
                    <li>منتخب صوت</li>
                </ul>
            </div>


            <div className='footer-ex'>
                <div className='address'>
                    <p>amadast.com</p>
                    <span>
                        <img src={'https://amadast.com/_nuxt/logo64.a6a22600.png'} alt="Logo" />
                    </span>
                </div>

                <div className='explaine'>
                    <p>این سایت توسط جمعی از علاقمندان به جلسات خودشناسی حاج آقا نوروزی و راه اندازی شده تمام جلسات و محتوا کاملا راگان است و نشر و کپی برداری با ذکر متبع مجاز است . ارتباط با ما از طریق ایمیل :
                        info@test.me شبکه ها اجتماعی : <BsTwitter /><BsInstagram /><BsTelegram />
                    </p>
                   
                </div>
            </div>

            </div>
            
            <span className='hr'></span>

            <p className='copy'>تمام حقوق برای وبسایت آمادست محفوظ است 1400</p>
        </div>
    )
}

export default Footer