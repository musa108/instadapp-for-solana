import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-y-4'>
           <p className=' text-4xl'>  404 page</p>
            <Link to="/" className='bg-yellow-500 w-[250px]  rounded-lg text-center py-2'>Go back home</Link>
        </div>
    );
}

export default Error;
