import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import Loading from '../../../hocks/loading/Loading';
import Createselleraccount from '../createselleraccount/Createselleraccount';

const Sellerpage = () => {
    const {user}=useContext(Authcontext)
    const {data,isLoading}=useQuery({
        queryKey:[`selleruser`,user?.email],
        queryFn: async ()=>{
            const res=await fetch(`http://localhost:5000/selleruser/${user?.email}`)
            const data=res.json()
            return data
        }
    })
    // console.log(data.role);
    const menu = <>
    {
        data?.role ?  
        <li><Link to='/sellerpage/addproduct'>Add New Product</Link></li> :
        <li><Link to='/sellerpage/createdselleraccount'> Creat seller Account</Link></li>
    }
    </>
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-yellow-950 rounded-2xl">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2"><Link to='/sellerpage'>seller page</Link></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {menu}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <Outlet>
                    
                </Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Sellerpage;