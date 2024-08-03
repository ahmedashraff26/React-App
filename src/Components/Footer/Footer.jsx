import React from 'react'

export default function Footer() {
  return (
    <div className=''><footer className="bg-gray-800 text-white">
    <div className="w-9/12 mx-auto py-12">
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-2 lg:grid-cols-3 py-10">
            <div className="col-span-3 md:col-span-1">
                <div className="location text-center">
                    <h4 className="text-3xl font-bold mb-4">Location</h4>
                    <p>2215 John Daniel Drive <br/>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-span-3 md:col-span-1">
                <div className="links">
                    <h4 className="text-3xl text-center font-bold pb-14">Around the web</h4>
                    <ul className="flex justify-center space-x-4">
                        <li><a href="https://facebook.com" target='_blank' className="text-white hover:text-gray-800 border-2 py-2 px-3 rounded-full hover:bg-white duration-500"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://x.com" target='_blank' className="text-white hover:text-gray-800 border-2 p-2 rounded-full hover:bg-white duration-500"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://linkedin.com" target='_blank' className="text-white hover:text-gray-800 border-2 py-2 px-3 rounded-full hover:bg-white duration-500"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://youtube.com" target='_blank' className="text-white hover:text-gray-800 border-2 p-2 rounded-full hover:bg-white duration-500"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-span-3 md:col-span-1">
                <div className='text-center'>
                    <h4 className="text-3xl font-bold mb-4">About freelancer</h4>
                    <p className="font-bold">Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-gray-900 pb-5">
        <p className="py-4 text-center text-gray-300">Copyright &copy; Route 2024</p>
    </div>
</footer>
</div>
  )
}
