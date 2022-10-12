import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';


const QuizDetails = () => {
    const posts = useLoaderData();
    const {data} = posts 
    const {id, logo, name, questions, total} = data
    console.log(data)

    return (
        <div>
               
            <h2>Quiz: {id}</h2>
            <h2> {name}</h2>
            {
                questions.map(post => <QuizQuestions
                key={post.id}
                post={post}
                ></QuizQuestions>)
            }
            
        </div>
    );
};

export default QuizDetails;