import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizs = useLoaderData();
    const {data} = quizs;
    
    return (
      
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 w-full bg-slate-200 gap-8 border-spacing-2 p-10  '>
          
          {
            data.map(quiz => <Quiz
            key={quiz.id}
            quiz={quiz}
            ></Quiz>)
          }
          
        </div>
    );
};

export default Home;