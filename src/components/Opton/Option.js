import React from 'react';
import { toast } from 'react-toastify';


const Option = ({option,id, correctAnswer}) => {
    const handleRight = (ans) =>{
        if(correctAnswer === ans){
            toast.success('Answer is true')
        }
        else{
            toast.warning('your answer is incorrect')
        }
    }
    return (
        <div className='flex flex-row gap-8 m-4 p-4 border-solid border-2 border-indigo-600'>
            <input onClick={() => handleRight(option)} type="radio" name={id} id="" />
          <h3 className='ml-3 '>{option}</h3>  
        </div>
    );
};

export default Option;