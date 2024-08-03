import React from 'react'
import PortfolioCards from '../PortfolioCards/PortfolioCards'

export default function Portfolio() {
    return <div className='text-center flex-col py-20'>
        <h1 class="font-bold text-slate-800 text-4xl">PORTFOLIO COMPONENT</h1>
            <div class="flex gap-3 justify-center py-7">
            <div className="bg-slate-800 w-[80px] h-[4px] mt-2"></div>
                <i class="fa-solid fa-star fa-xlg text-slabg-slate-800"></i>
                <div className="bg-slate-800 w-[80px] h-[4px] mt-2"></div>
                </div>
                <div className="cards">
                {
                    <PortfolioCards />
                }
                </div>
    </div>       
}