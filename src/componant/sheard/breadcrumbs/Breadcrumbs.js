import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items = [] }) => {
    return (
        <div className="text-sm breadcrumbs my-3">
            <ul>
                <li><Link to="/">Home</Link></li>
                {
                    items.map((item, index) => (
                        <li key={index}>
                            {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Breadcrumbs;


