import React, {  useRef, useState } from 'react';
import logo from '../../../assets/logo.png'
// import { Authcontext } from '../../../context/authprovaider/Authprovider';

const Header = () => {

    const menuitem = <>

        <li><a href='/#'>Item 1</a></li>
        <li><a href='/#'>Item 2</a></li>
        <li><a href='/signup'>Sign UP</a></li>
        <li><a href='/login'>Sign UP</a></li>

    </>
    const searchref=useRef()
    const [search , setsearch]=useState()
    const searchendler=()=>{
        setsearch(searchref.current.value);
        console.log(search);
    }
    return (
        <div>
            <div className="navbar bg-orange-500 h-20 text-white">
                <div className="navbar-start mx-20">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            { menuitem }
                        </ul>
                    </div>
                    <img src={logo} alt='' className='w-8 right-4'></img>
                    <a href='/#' className="btn btn-ghost text-xl">Khan</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuitem}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                <input type="text" ref={searchref} placeholder="Search here" className="input input-bordered w-full max-w-xs" />
                    <button onClick={searchendler} className="btn">Search</button>
                {/* </div>
                <div className="navbar-end"> */}
                </div>
            </div>
        </div>
    );
};

export default Header;