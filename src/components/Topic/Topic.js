import React from 'react';
import { Link } from 'react-router-dom';

const Topic = () => {
    return (
        <div className='p-24'>
            <h2 className='text-5xl font-bold'>Welcome to <span className='text-purple-600'>QuestionBox</span> </h2>
            <p className='text-3xl '>Q. Quizizz is a fun way for your students to review and for you to see what you may need to review with them? answer choices.
            </p>
            <div className='flex justify-center gap-12 font-bold m-6'>
                <Link to="/statics" className='bg-purple-500 text-4xl text-white p-2 rounded-3xl'> Statics</Link>
                <Link to="/topic" className='bg-purple-500 text-4xl text-white p-2 rounded-3xl'>Topics</Link>
                
                
            </div>
        </div>
    );
};

export default Topic;