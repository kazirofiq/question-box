import React from 'react';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    

    return (
        <div className=''>
            <img src={logo}  alt="" />
            <div className='flex justify-between gap-4 bg-white'>
            <h3>{name}</h3>
            <button className='text-2xl'>Quiz Practice</button>
            </div>
        </div>
    );
};

export default Quiz;