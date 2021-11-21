import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flag, capital, population } = props.country
    return (
        <div className="country">
            <h4>This is a single Country</h4>
            <h2>Name: {name}</h2>
            <img src={flag} alt="" />
            <p>Capital is: {capital} Population: {population}</p>
        </div>
    );
};

export default Country;