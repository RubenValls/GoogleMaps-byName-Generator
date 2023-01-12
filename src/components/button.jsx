import React, { useState } from 'react';
import Map from './map';

const Button = (props) => {
    
    const [mapLink, setLink] = useState(`https://maps.google.com/maps?q=Madrid&output=embed`);

    const setCities = () => {
        setLink(`https://maps.google.com/maps?q=${props.city}&output=embed`);
    };
    
    return (
        <div class="container-fluid">
            <div class="container w-50 m-auto mt-4">
            <button type="button" class="btn btn-lg btn-success" onClick={setCities}>Search</button>
            </div>
            <Map link={mapLink}/>
        </div>
    );
}

export default Button;
