import React from 'react';
import firstImg from '../images/cabin.4417330275f78faa31c3.png';
import secondImg from '../images/cake.6554473016d32b343f02.png';
import thirdImg from '../images/circus.494a4a914b5471b41f3e.png';
import fourthImg from '../images/game.a940b57aa7bab2eacc52.png';
import fifthImg from '../images/safe.01792c0bdc342bf4bf9c.png';
import sixthImg from '../images/submarine.48c9704ca7f8ce901038.png';
import Swal from 'sweetalert2';




export default function PortfolioCards() {

  let names = ['LOG CABIN' , 'TASTY CAKE' , 'CIRCUS TENT' , 'CONTROLER' , 'LOCKED SAFE' , 'SUBMARINE'];
  function infoAlert(index , src) {
    Swal.fire({
      title: `${names[index]}`,
      html: `
      <div class="flex gap-3 justify-center pb-7">
            <div class="bg-black w-[120px] h-[4px] mt-4"></div>
                <i class="fa-solid fa-star fa-xlg text-black text-4xl"></i>
                <div class="bg-black w-[120px] h-[4px] mt-4"></div>
                </div>
      <div class='col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group'>
                <img class='w-full rounded-lg' src="${src}" alt=""/>
            </div>
      <div class="pt-7">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      
      </div>
      `
    });
  }
  return (
    <div className='px-10 md:px-32 md:mx-auto pb-28'>
        <div className="grid grid-cols-12 gap-14">
            <div onClick={function () {
              infoAlert(0 , firstImg);
            }} className='col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group w-2/3 md:w-full'>
                <img className='md:w-full rounded-lg' src={firstImg} alt=""/>
                <div className="layer text-8xl font-bold absolute top-0 right-0 left-0 bottom-0 bg-emerald-600 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-85 text-white duration-500 cursor-pointer">+</div>
            </div>
            <div onClick={function () {
              infoAlert(1 , secondImg);
            }} className='col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group w-2/3 md:w-full'>
                <img className='md:w-full rounded-lg' src={secondImg} alt=""/>
                <div className="layer text-8xl font-bold absolute top-0 right-0 left-0 bottom-0 bg-emerald-600 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-85 text-white duration-500 cursor-pointer">+</div>
            </div>
            <div onClick={function () {
              infoAlert(2 , thirdImg);
            }} className='col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group w-2/3 md:w-full'>
                <img className='md:w-full rounded-lg' src={thirdImg} alt=""/>
                <div className="layer text-8xl font-bold absolute top-0 right-0 left-0 bottom-0 bg-emerald-600 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-85 text-white duration-500 cursor-pointer">+</div>
            </div>
            <div onClick={function () {
              infoAlert(3 , fourthImg);
            }} className='col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group w-2/3 md:w-full'>
                <img className='md:w-full rounded-lg' src={fourthImg} alt=""/>
                <div className="layer text-8xl font-bold absolute top-0 right-0 left-0 bottom-0 bg-emerald-600 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-85 text-white duration-500 cursor-pointer">+</div>
            </div>
            <div onClick={function () {
              infoAlert(4 , fifthImg);
            }} className='col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group w-2/3 md:w-full'>
                <img className='md:w-full rounded-lg' src={fifthImg} alt=""/>
                <div className="layer text-8xl font-bold absolute top-0 right-0 left-0 bottom-0 bg-emerald-600 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-85 text-white duration-500 cursor-pointer">+</div>
            </div>
            <div onClick={function () {
              infoAlert(5 , sixthImg);
            }} className='col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group w-2/3 md:w-full'>
                <img className='md:w-full rounded-lg' src={sixthImg} alt=""/>
                <div className="layer text-8xl font-bold absolute top-0 right-0 left-0 bottom-0 bg-emerald-600 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-85 text-white duration-500 cursor-pointer">+</div>
            </div>
        </div>
    </div>
  )
}
