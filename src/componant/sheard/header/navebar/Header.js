import React, { useContext, useRef, useState } from 'react';
import logo from '../../../assets/logo.png'
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

	const { user } = useContext(Authcontext)

	const location = useLocation();
	const navigate = useNavigate();

	const menuitem = <>
		<li><NavLink to='/' className={({isActive})=> isActive ? 'active font-semibold' : ''}>Home</NavLink></li>
		<li><NavLink to='/products' className={({isActive})=> isActive ? 'active font-semibold' : ''}>Products</NavLink></li>
	</>
	const searchref = useRef()
	const [showSearch, setShowSearch] = useState(false)
	const [mobileOpen, setMobileOpen] = useState(false)
	const searchendler = () => {
		const val = searchref.current?.value || ''
		if (location.pathname !== '/products') {
			navigate(`/products?q=${encodeURIComponent(val)}`)
		} else {
			navigate(`/products?q=${encodeURIComponent(val)}`)
		}
	}
	return (
		<div className='sticky top-0 z-40 bg-orange-300 text-base-100 text-black'>
			<div className="navbar h-20">
				<div className="navbar-start px-4 md:px-10 lg:px-20">
					<div className="lg:hidden relative">
						<button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" className="btn btn-ghost">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
						</button>
						{mobileOpen && (
							<>
								<div className='fixed inset-0 z-40 bg-black/40' onClick={() => setMobileOpen(false)}></div>
								<ul className="menu menu-sm absolute mt-3 z-50 p-2 shadow bg-base-100 text-neutral rounded-box w-56" onClick={() => setMobileOpen(false)}>
									{menuitem}
								</ul>
							</>
						)}
					</div>
					<img src={logo} alt='' className='w-9 h-9 rounded-md ring-2 ring-primary/30'></img>
					<a href='/' className="btn btn-ghost normal-case text-xl font-extrabold tracking-wide">
						<span className='text-primary'>Khan</span> Market
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						{menuitem}
					</ul>
				</div>
				<div className="navbar-end gap-2 md:gap-3 px-4 md:px-10 lg:px-20">
					{/* Desktop search */}
					{user && location.pathname.startsWith('/products') && (
						<div className='hidden md:flex items-center gap-2'>
							<input type="text" ref={searchref} placeholder="Search products" className="input input-bordered w-56 md:w-64 lg:w-80 text-neutral" />
							<button onClick={searchendler} className="btn btn-primary">Search</button>
						</div>
					)}
					{/* Mobile search toggle */}
					{user && location.pathname.startsWith('/products') && (
					<button onClick={() => setShowSearch(!showSearch)} className="btn btn-ghost md:hidden" aria-label="Toggle search">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
					</button>
					)}
					{user ? (
						<Link to='/profile' className='btn btn-primary'>Profile</Link>
					) : (
						<div className='flex items-center gap-2'>
							<Link to='/signup' className='btn btn-primary'>Sign up</Link>
						</div>
					)}
				</div>
			</div>
			{/* Mobile search row */}
			{user && location.pathname.startsWith('/products') && showSearch && (
				<div className='md:hidden px-4 pb-3'>
					<div className='flex gap-2'>
						<input type="text" ref={searchref} placeholder="Search products" className="input input-bordered flex-1 text-neutral" />
						<button onClick={searchendler} className="btn btn-primary">Go</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;