import { useEffect, useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    console.log(country)
    const {name, flags, population, area} = country;

    const [visited,setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    


    return (
        <div className={`country ${visited ? 'color' : 'no-color'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <h5>Area : {area}</h5>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            {visited ? 'visited this': 'I want to visit'}
        </div>
    );
};

export default Country;