import React from 'react';
import Option from '../Opton/Option';


const QuizQuestions = ({post}) => {
    const {options,question,id} = post 
    console.log(post)
    return (
        <div className='container mx-auto'>
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