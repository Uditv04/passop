import React from 'react'
const Navbar = () => {
  return (
    <nav className=' bg-black text-white '>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
            
        <div className="logo font-bold text-2xl">
           
           <span className='text-blue-900'>&lt;</span> 
            Pass<span className='text-blue-900'>OP</span>
           <span className='text-blue-900'>/&gt;</span> 
           
            </div>
                <button className='flex text-white bg-blue-950 my-5 rounded-md items-center mx-96 hover:bg-blue-800'>

                <img className='invert w-8 p-1' src="/svg/github.png" alt="" />
                <span className='font-bold px-1'>Github</span>
                </button>
        </div>
    </nav>
  )
}

export default Navbar