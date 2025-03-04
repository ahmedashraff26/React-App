import React from 'react'

export default function About() {
    return (
        <div className="flex items-center justify-center flex-col bg-emerald-400 min-h-screen px-20">
            <div>
                <h1 className="text-center font-bold text-white text-4xl">ABOUT COMPONENT</h1>
                <div class="flex gap-3 justify-center py-4">
            <div className="bg-white w-[80px] h-[4px] mt-2"></div>
                <i class="fa-solid fa-star fa-xlg text-white"></i>
                <div className="bg-white w-[80px] h-[4px] mt-2"></div>
                </div>
            </div>
            <div className="lg:w-2/3">
            <div className="grid grid-cols-2 gap-7 text-white text-2xl">
                <div className="col-span-2 lg:col-span-1">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                <div className="col-span-2 lg:col-span-1">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</div>
            </div>
            </div>
        </div>
    )
}
