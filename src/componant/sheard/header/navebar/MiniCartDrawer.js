import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../../context/authprovaider/Authprovider';
import { Link } from 'react-router-dom';

const MiniCartDrawer = () => {
    const { user } = useContext(Authcontext)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user?.email) { setLoading(false); return }
        fetch(`https://daraz-e-comarch-server.vercel.app/cart?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data || [])
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [user?.email])

    const subtotal = items.reduce((sum, it) => sum + Math.floor((it.price / 100) * 80), 0)

    return (
        <>
            <input id="mini-cart" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side z-50">
                <label htmlFor="mini-cart" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
                    <h3 className='font-bold text-lg mb-3'>My Cart</h3>
                    {loading ? <span className="loading loading-infinity"></span> : (
                        items.length === 0 ? <p className='opacity-70'>Your cart is empty</p> : (
                            <div className='space-y-3'>
                                {items.map((it) => (
                                    <div key={it._id} className='flex gap-3 items-center'>
                                        <img alt={it.name} src={it.img} className='w-12 h-12 object-cover rounded' />
                                        <div className='flex-1'>
                                            <div className='text-sm font-medium line-clamp-2'>{it.name}</div>
                                            <div className='text-xs opacity-70'>${Math.floor((it.price / 100) * 80)}</div>
                                        </div>
                                        <Link className='btn btn-ghost btn-xs' to={`/producdetails/${it.cardid}`}>View</Link>
                                    </div>
                                ))}
                                <div className='divider'></div>
                                <div className='flex justify-between font-semibold'>
                                    <span>Subtotal</span>
                                    <span>${subtotal}</span>
                                </div>
                                <Link to='/profile/myaddcart' className='btn btn-primary btn-block'>Go to Cart</Link>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default MiniCartDrawer;


