import React from 'react'

export default function Navbar() {
  return (
    <div className="fixed-top left-0 right-0 flex justify-between w-full bg-slate-700 text-white px-10 lg:px-20 py-8">
        <h2 className="p-3 text-3xl font-bold">START REACT</h2>
        <div className="grid grid-cols-3 gap-14 font-bold text-lg">
        <div className="col-span-3 md:col-span-1 bg-emerald-400 p-3 cursor-pointer rounded-md">PORTFOLIO</div>
        <div className="col-span-3 md:col-span-1 p-3 cursor-pointer rounded-md">ABOUT</div>
        <div className="col-span-3 md:col-span-1 p-3 cursor-pointer rounded-md">CONTACT</div>
        </div>
    </div>
  )
}
