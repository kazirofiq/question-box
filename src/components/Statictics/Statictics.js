
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';


const Statictics = () => {
    const {data} = useLoaderData();

    console.log(data)
    
    
    return (
        <div>
            <h2>Find out how many Quiz are there In Each </h2>
            <ResponsiveContainer width="75%" height={450}>
                <BarChart data={data}>
                <XAxis dataKey="name" stroke='#fa7b0c'/>
                 <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                <Bar dataKey="total" barSize={40} fill="#8884d8"></Bar>
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statictics;