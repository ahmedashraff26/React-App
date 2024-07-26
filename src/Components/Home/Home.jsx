import React from 'react';
import homeImg from "../images/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg"

export default function Home() {
    return <div class="flex items-center justify-center flex-col bg-emerald-400 py-10">
        <div>
        <div class="img flex justify-center py-7">
            <img className='w-1/2' src={homeImg} alt="" />
            </div>
            <h1 class="font-bold text-white text-7xl">Start React</h1>
            <div class="flex gap-3 justify-center py-7">
            <div className="bg-white w-[120px] h-[4px] mt-4"></div>
                <i class="fa-solid fa-star fa-xlg text-white text-4xl"></i>
                <div className="bg-white w-[120px] h-[4px] mt-4"></div>
                </div>
            <p class="text-white text-center font-[500]">Graphic Artist - Web Designer - Illustrator</p>
        </div>
            </div>
}