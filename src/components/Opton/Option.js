import React from 'react';

const Option = ({option,id}) => {
    
    return (
        <div className='flex flex-row gap-8 m-4 p-4 border-solid border-2 border-indigo-600'>
            <input type="radio" name={id} id="" />
          <h3 className='ml-3 '>{option}</h3>  
        </div>
    );
};

export default Option;