import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Statictics = () => {
    const details = useLoaderData();
    
    return (
        <div>
            {/* {
                data.map(detail => <QuizDetails
                key={detail.id}
                detail={detail}
                ></QuizDetails>)
            } */}
        </div>
    );
};

export default Statictics;