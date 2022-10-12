
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const Statictics = () => {
    const chart = useLoaderData();
    const {data} = chart
    console.log(data)
    
    return (
        <div>
            <h2>Find out how many Quiz are there In Each {data.total}</h2>
            

        </div>
    );
};

export default Statictics;