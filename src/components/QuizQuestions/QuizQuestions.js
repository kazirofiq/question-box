import React from 'react';
import Option from '../Opton/Option';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'


const QuizQuestions = ({post}) => {
    const {options,question,id} = post 
    console.log(post)
    return (
        <div className='container mx-auto bg-slate-300 m-8 rounded-2xl'>
            <div className='flex justify-end p-8'>
            <EyeIcon className="h-6 w-6 text-blue-500  "/>
            </div>
           <h2 className='text-2xl'>{question}</h2>

            <div className='grid grid-cols-2 justify-center shadow-orange-500'>
            {
                options.map(option => <Option
                key={option.id}
                option={option}
                id={id}
                ></Option>)
            }
            </div>

        </div>
    );
};

export default QuizQuestions;