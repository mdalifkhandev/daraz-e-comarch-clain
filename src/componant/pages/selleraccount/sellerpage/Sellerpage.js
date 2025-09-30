import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import Loading from '../../../hocks/loading/Loading';

const Sellerpage = () => {
    const {user}=useContext(Authcontext)
    const {data,isLoading}=useQuery({
        queryKey:[`selleruser`,user?.email],
        queryFn: async ()=>{
            const res=await fetch(`https://daraz-e-comarch-server.vercel.app/selleruser/${user?.email}`)
            // const res=await fetch(`http://localhost:5000/selleruser/${user?.email}`)
            const data=res.json()
            return data
        }
    })
    // console.log(data.role);
    const menu = <>
    {
        data?.role && <li><Link to='/sellerpage/addproduct'>Add New Product</Link></li> 
    }
    {
        data?.role &&  <li><Link to='/sellerpage/sellerProducts'>Seller Products</Link></li> 
    }
    </>
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='max-w-7xl mx-auto px-4 py-6'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className='lg:hidden flex items-center justify-between mb-4'>
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <h1 className='text-xl font-bold'>Seller Dashboard</h1>
                    </div>
                    <div className='rounded-xl border border-base-200 bg-base-100 p-4'>
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className='w-80 min-h-full p-4 bg-neutral text-base-100'>
                        <div className='rounded-xl p-4 mb-4 bg-neutral/60'>
                            <div className='font-semibold text-lg'>{user?.displayName || 'Seller'}</div>
                            <div className='text-sm opacity-90'>{user?.email}</div>
                        </div>
                        <ul className="menu">
                            {menu}
                            {!data?.role && (
                                <li><Link to='/sellerpage'>Create seller account first</Link></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sellerpage;