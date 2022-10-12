import React, { useState } from 'react';
import Option from '../Opton/Option';
import { XMarkIcon, EyeIcon } from '@heroicons/react/24/solid'


const QuizQuestions = ({post}) => {
    const [open, setOpen] = useState(false);
    const {options,question,id} = post 
    console.log(post)
    return (
        <div className='container mx-auto bg-slate-300 m-8 rounded-2xl'>
            <div className='flex justify-end p-8'>
            
                    
                    
                    

                  
                
            
            <label for="my-modal-3" class="btn modal-button"> <EyeIcon className="h-6 w-6 text-blue-500  "/> </label>


                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Correct Answer</h3>
                    
                </div>
                </div> 
            
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