import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="mt-10 bg-orange-300 text-base-100 w-full text-black">
                <div className="w-full px-4 md:px-10 lg:px-20 py-10">
                    <div className="grid gap-8 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-extrabold">Khan <span className="text-primary">Market</span></h3>
                            <p className="opacity-80 mt-2">Trusted marketplace for quality products, fast delivery, and great prices.</p>
                            <div className="mt-4 flex items-center gap-3">
                                <a href='/' aria-label="Facebook" className="btn btn-circle btn-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.5-3.88 3.8-3.88 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" /></svg></a>
                                <a href='/' aria-label="Instagram" className="btn btn-circle btn-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"/></svg></a>
                                <a href='/' aria-label="Twitter" className="btn btn-circle btn-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.04A4.15 4.15 0 0 0 12 8.7c0 .32.03.64.1.94-3.45-.17-6.5-1.83-8.55-4.34-.36.62-.56 1.34-.56 2.1 0 1.45.74 2.73 1.86 3.48-.69-.02-1.34-.21-1.9-.52v.05c0 2.03 1.5 3.72 3.49 4.11-.37.1-.76.15-1.16.15-.28 0-.56-.03-.83-.08.56 1.73 2.2 2.99 4.14 3.02A8.32 8.32 0 0 1 2 19.54a11.76 11.76 0 0 0 6.29 1.84c7.55 0 11.68-6.4 11.68-11.95 0-.18 0-.36-.01-.54.8-.58 1.5-1.3 2.05-2.13Z"/></svg></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="footer-title opacity-100">Shop</h4>
                            <a href='/products' className="link link-hover">All Products</a>
                            <a href='/category/phone' className="link link-hover">Phones</a>
                            <a href='/category/laptop' className="link link-hover">Laptops</a>
                            <a href='/category/fashion' className="link link-hover">Fashion</a>
                        </div>
                        <div>
                            <h4 className="footer-title opacity-100">Company</h4>
                            <a href='/' className="link link-hover">About</a>
                            <a href='/' className="link link-hover">Contact</a>
                            <a href='/' className="link link-hover">Careers</a>
                            <a href='/' className="link link-hover">Press</a>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="footer-title opacity-100">Stay in the loop</h4>
                            <p className="opacity-80">Get exclusive deals and updates. No spam, we promise.</p>
                            <form onSubmit={(e)=>e.preventDefault()} className="mt-3 join w-full">
                                <input type="email" required placeholder="Your email" className="input input-bordered join-item w-full" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </form>
                            <div className="mt-4 opacity-80 text-sm">We accept VISA, MasterCard, bKash, Nagad.</div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-base-300">
                    <div className="w-full px-4 md:px-10 lg:px-20 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
                        <p className="text-sm opacity-80">© {new Date().getFullYear()} Khan Market. All rights reserved.</p>
                        <div className="flex items-center gap-2">
                            <select className="select select-bordered select-xs">
                                <option>English</option>
                                <option>বাংলা</option>
                            </select>
                            <select className="select select-bordered select-xs">
                                <option>USD</option>
                                <option>BDT</option>
                            </select>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;