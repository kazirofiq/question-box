import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizs = useLoaderData();
    const {data} = quizs;
    console.log(data)
    return (
        <div className='flex w-full bg-gray-500 gap-8 border-spacing-2'>
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