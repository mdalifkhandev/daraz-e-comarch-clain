import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import Loading from '../../../hocks/loading/Loading';
import useAdmin from '../../../hocks/isadmin/useAdmin';

const Profile = () => {

    const { loading,user } = useContext(Authcontext)
    const [isAdmin,isadminloding]=useAdmin(user?.email)
    const menu = <>
    {
        isAdmin && <>
        <li><Link to='/profile/user'>User</Link></li>
        
        </>
    }
        <li><Link to='/profile/myaddcart'>My Add Cart</Link></li>
        <li><Link to='/profile/myorder'>My Order</Link></li>

    </>
    if (loading || isadminloding) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-yellow-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-1 px-2 mx-2"><Link to='/profile'>Profile</Link></div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {menu}
                            </ul>
                        </div>
                    </div>
                    <Outlet>
                    </Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-slate-600">
                        {/* Sidebar content here */}
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;