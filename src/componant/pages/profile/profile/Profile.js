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
		<div className='max-w-7xl mx-auto px-4 py-6 min-h-[calc(100vh-5rem)]'>
			<div className="drawer lg:drawer-open">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<div className='lg:hidden flex items-center justify-between mb-4'>
						<label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
						</label>
						<h1 className='text-xl font-bold'>My Profile</h1>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
						<div className='lg:col-span-12 min-h-[calc(100vh-10rem)]'>
							<div className='rounded-xl border border-base-200 bg-base-100 p-4 h-full'>
								<Outlet />
							</div>
						</div>
					</div>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
					<div className='w-full min-h-screen p-4 bg-orange-300 text-neutral lg:sticky lg:top-20'>
						<div className='rounded-xl p-4 mb-4 bg-base-100 text-neutral'>
							<div className='font-semibold text-lg'>{user?.displayName || 'User'}</div>
							<div className='text-sm opacity-90'>{user?.email}</div>
						</div>
						<ul className="menu">
							{menu}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;