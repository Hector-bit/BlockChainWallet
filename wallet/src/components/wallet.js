import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Wallet() {
    const [info, setInfo] = useState({});

    axios
        .get('http://localhost:5000/chain')
        .then(res => (
            console.log(res),
            setInfo(res)
        ))
        .catch(err => console.log('ERROR: ', err))

    console.log(info, 'THIS IS INFO')

    return (
        <div>Hello this is the Wallet</div>
    )
}