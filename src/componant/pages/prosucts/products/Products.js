import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MiniCartDrawer from '../../../sheard/header/navebar/MiniCartDrawer';
import Productscard from '../productscard/Productscard';
import useTitle from '../../../hocks/usetitle/useTitle';
import Loading from '../../../hocks/loading/Loading';
import Breadcrumbs from '../../../sheard/breadcrumbs/Breadcrumbs';
// import { Authcontext } from '../../../context/authprovaider/Authprovider';


const Products = () => {

    const [numberofproduc, setnumberofproduc] = useState()
    const [data, setdata] = useState([])
    const [page, setpage] = useState(0)
    const [prpagdata, setprpagdata] = useState(10)
    const [loading, setLoading] = useState(true);
    useTitle(`All Product`)
    // const [search, setsearch] = useState('')
    // const {search}=useContext(Authcontext)
    // console.log(data);

    useEffect(() => {
        const uri = `https://daraz-e-comarch-server.vercel.app/all-products?page=${page}&size=${prpagdata}`
        // const uri = `http://localhost:5000/all-products?page=${page}&size=${prpagdata}`
        fetch(uri)//?page=${page}&size=${prpagdata}
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setdata(data.resualt)
                setnumberofproduc(data.count)
                setLoading(false)
            })
    }, [page, prpagdata])
    // console.log(data);
    // console.log(numberofproduc);
    // const searchref = useRef()

    // const searchhendler=event=>{
    //     event.preventDefault()
    //     setsearch(event.target.search.value)
    //     console.log(search);
    // }
    // const searchendler = () => {
    //     setsearch(searchref.current.value);
    //     console.log(search);
    // }
    // const searchendler = () => {
    //     setsearch(searchref.current.value);
    // }
    const totalpag = Math.ceil(numberofproduc / prpagdata)
    // console.log(categorywicdata);
    // if(data.length=0){
    //     return 0
    // }
    // console.log(totalpag);
    const breadcrumbItems = useMemo(()=>[
        { label: 'Products' }
    ],[])

    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const searchQuery = useMemo(() => new URLSearchParams(location.search).get('q')?.toLowerCase() || '', [location.search]);

    const handlePriceChange = (event) => {
        const value = Number(event.target.value);
        setPriceRange([0, value]);
    };

    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    const handleBrandChange = (event) => {
        setBrandFilter(event.target.value);
    };

    const handleNameChange = (event) => {
        const value = event.target.value;
        setNameFilter(value);
        const params = new URLSearchParams(location.search);
        if (value) params.set('q', value); else params.delete('q');
        navigate({ pathname: '/products', search: params.toString() });
    };

    const availableCategories = useMemo(() => {
        const s = new Set((data || []).map(p => (p.category || '').toString().trim()).filter(Boolean));
        return Array.from(s).sort();
    }, [data]);

    const availableBrands = useMemo(() => {
        const s = new Set((data || []).map(p => (p.brand || '').toString().trim()).filter(Boolean));
        return Array.from(s).sort();
    }, [data]);

    const effectiveNameQuery = (nameFilter || searchQuery).toLowerCase();

    const filteredData = useMemo(() => {
        return data.filter(p => {
            const discounted = Math.floor((p.price / 100) * 80);
            const okPrice = discounted >= priceRange[0] && discounted <= priceRange[1];
            const okCat = categoryFilter ? p.category?.toLowerCase() === categoryFilter.toLowerCase() : true;
            const okBrand = brandFilter ? p.brand?.toLowerCase() === brandFilter.toLowerCase() : true;
            const okSearch = effectiveNameQuery ? p.name?.toLowerCase().includes(effectiveNameQuery) : true;
            return okPrice && okCat && okBrand && okSearch;
        });
    }, [data, priceRange, categoryFilter, brandFilter, effectiveNameQuery]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Breadcrumbs items={breadcrumbItems} />
            <div className='flex items-center justify-between mb-3 lg:hidden'>
                <button className='btn btn-outline btn-sm' onClick={()=>setShowFilters(!showFilters)}>{showFilters ? 'Hide Filters' : 'Show Filters'}</button>
                <div className='text-sm opacity-70'>Found: {filteredData.length}</div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                {/* sidebar */}
                <aside className={`lg:col-span-3 rounded-xl border border-base-200 p-4 h-max ${showFilters ? '' : 'hidden lg:block'} sticky top-24`}>
                    <h3 className='font-semibold mb-2'>Filters</h3>
                    <div className='mb-4 flex items-center justify-between'>
                        <label htmlFor='mini-cart' className='btn btn-ghost btn-sm'>Open Cart</label>
                        <span className='badge badge-secondary'>Items</span>
                    </div>
                    <div className='mb-4'>
                        <div className='text-sm font-medium mb-1'>Search by name</div>
                        <input onChange={handleNameChange} defaultValue={searchQuery} className='input input-bordered w-full' placeholder='e.g. iphone 13' />
                    </div>
                    <div className='mb-4'>
                        <div className='text-sm font-medium mb-1'>Category</div>
                        <select value={categoryFilter} onChange={handleCategoryChange} className='select select-bordered w-full'>
                            <option value=''>All</option>
                            {availableCategories.map((c)=> (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-4'>
                        <div className='text-sm font-medium mb-1'>Brand</div>
                        <select value={brandFilter} onChange={handleBrandChange} className='select select-bordered w-full'>
                            <option value=''>All</option>
                            {availableBrands.map((b)=> (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-2'>
                        <div className='text-sm font-medium mb-1'>Max Price: ${priceRange[1]}</div>
                        <input type='range' min='0' max='2000' step='50' value={priceRange[1]} onChange={handlePriceChange} className='range range-primary' />
                    </div>
                    <div className='flex justify-end'>
                        <button className='btn btn-ghost btn-sm' onClick={()=>{setCategoryFilter(''); setBrandFilter(''); setPriceRange([0,100000]); setNameFilter(''); navigate('/products');}}>Clear all</button>
                    </div>
                </aside>
                {/* list */}
                <div className='lg:col-span-9'>
                    {/* active filters chips */}
                    <div className='flex flex-wrap gap-2'>
                        {effectiveNameQuery && (
                            <button className='btn btn-xs btn-outline' onClick={()=>{setNameFilter(''); const p=new URLSearchParams(location.search); p.delete('q'); navigate({pathname:'/products', search:p.toString()});}}>Name: {effectiveNameQuery} ✕</button>
                        )}
                        {categoryFilter && (
                            <button className='btn btn-xs btn-outline' onClick={()=>setCategoryFilter('')}>Category: {categoryFilter} ✕</button>
                        )}
                        {brandFilter && (
                            <button className='btn btn-xs btn-outline' onClick={()=>setBrandFilter('')}>Brand: {brandFilter} ✕</button>
                        )}
                        {(priceRange[1] !== 100000) && (
                            <button className='btn btn-xs btn-outline' onClick={()=>setPriceRange([0,100000])}>Max: ${priceRange[1]} ✕</button>
                        )}
                    </div>
            {/* <form  className='flex gap-3 justify-center'>
                
                    
                    <input type="text" className=' w-full max-w-xs input input-bordered input-success bg-orange-300' name="search" placeholder='Search Here' />
                    <input type="text" placeholder="Search here" name="search" className="input input-bordered w-full max-w-xs text-white" />
                <input onClick={searchendler} type="submit" className='btn btn-primary btn-outline' value="Search" ref={searchref} />
            </form> */}
            
            <div className='grid mt-4 gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    filteredData.map(produc => <Productscard
                        key={produc._id}
                        produc={produc}
                    ></Productscard>)
                }
            </div>
            <div className="pagination">
                <p>Currently selected page: {page + 1} and size: {prpagdata}</p>
                {
                    [...Array(totalpag || numberofproduc).keys()].map(number => <button
                        key={number}
                        className={page === number ? 'btn m-3' : 'btn btn-outline m-3'}
                        onClick={() => setpage(number)}
                    >
                        {number + 1}
                    </button>)
                }
                <select onChange={event => setprpagdata(event.target.value)}
                    className='btn btn-outline m-3'
                >
                    <option value="10">10</option>
                    <option value="5">5</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
                </div>
            </div>
            <MiniCartDrawer />
        </div>
    );
};

export default Products;