import React, { useState } from 'react';
import Button from './button';

const Search = () => {
    
    const [city, setCity] = useState("Madrid");
    
    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div class="container mt-3">
            <div class="form-floating mb-2 w-50 m-auto">
                <input type="text" class="form-control" id="floatingInput" placeholder="London" onChange={handleChange}/>
                <label for="floatingInput">Write a City</label>
            </div>
            <Button city={city}/>
        </div>
    );
}

export default Search;
