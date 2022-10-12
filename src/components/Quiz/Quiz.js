import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Quiz = ({quiz}) => {
    
    const {id, name, logo, total,userId} = quiz;
    
    const navigate = useNavigate();
    const handleQuiz = () =>{
        navigate(`/home/${id}`)
    }

    return (
        <div className='border-solid border-2 border-indigo-600 p-4 rounded-2xl '>
            <img src={logo}  alt="" />
            <div className='flex justify-between gap-4 bg-white p-4' >
            <h3>{name}</h3>
            <button onClick={handleQuiz}  className='text-2xl bg-blue-600 p-1 '>Quiz Practice</button>
            </div>
        </div>
    );
};

export default Quiz;