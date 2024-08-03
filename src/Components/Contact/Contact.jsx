import React from 'react'

export default function Contact() {
    return (
        <div className="contact py-20">
            <div>
                <h1 className="text-center font-bold text-slate-900 text-4xl">CONTACT SECTION</h1>
                <div className="flex gap-3 justify-center py-7">
                    <div className="bg-slate-900 text-slate-900 w-[80px] h-[4px] mt-2"></div>
                    <i className="fa-solid fa-star fa-xlg text-slate-900"></i>
                    <div className="bg-slate-900 text-slate-900 w-[80px] h-[4px] mt-2"></div>
                </div>
            </div>
            <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
    <div class="form-group">
        <input type="text" placeholder="userName" class="p-3 mb-3 border-none w-full rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
    </div>
    <div class="form-group">
        <input type="number" placeholder="userAge" class="p-3 mb-3 border-none w-full rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
    </div>
    <div class="form-group">
        <input type="email" placeholder="userEmail" class="p-3 mb-3 border-none w-full rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
    </div>
    <div class="form-group">
        <input type="password" placeholder="userPassword" class="p-3 mb-3 border-none w-full rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
    </div>
    <div class="form-group text-center">
        <input type="submit" class="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-5 rounded" value="Send"/>
    </div>
</div>

        </div>
    )
}
