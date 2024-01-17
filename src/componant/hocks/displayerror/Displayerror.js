import React from 'react';
import { useRouteError } from 'react-router-dom';
import useTitle from '../usetitle/useTitle';

const Displayerror = () => {
    const error = useRouteError()
    useTitle(error.message)
    return (
        <div>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Displayerror;