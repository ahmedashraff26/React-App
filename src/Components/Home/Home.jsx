import React from 'react';
import homeImg from "../images/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg"

export default function Home() {
    return <div class="flex items-center justify-center flex-col bg-mainColor py-10 min-h-screen">
        <div className=''>
        <div class="img flex justify-center py-7">
            <img className='w-4/6' src={homeImg} alt="" />
            </div>
            <h1 class="font-bold text-white text-4xl">START FRAMEWORK</h1>
            <div class="flex gap-3 justify-center py-4">
            <div className="bg-white w-[80px] h-[4px] mt-2"></div>
                <i class="fa-solid fa-star fa-xlg text-white"></i>
                <div className="bg-white w-[80px] h-[4px] mt-2"></div>
                </div>
            <p class="text-white text-center font-[500]">Graphic Artist - Web Designer - Illustrator</p>
        </div>
            </div>
}