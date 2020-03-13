import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Wallet() {
    const [transactions, setTransactions] = useState({});
    const [id, setId] = useState(null);
    const [total, setTotal] = useState(0);
    
    function submitID(){
        console.log('clickedsaldfkjasl')
    }
    useEffect(() => {
        axios
        .get('http://localhost:5000/chain')
        .then(res => (
            console.log(res),
            setTransactions(res.data.chain)
        ))
        .catch(err => console.log('ERROR: ', err))
    },[]);

    console.log(transactions, 'THIS IS transactions')

    return (
        <div>
            <input placeholder='ID' onChange={setId(value)}/>
            <div>Wallet ID: {id}</div>
            <div>Total in Wallet: {total}</div>
        </div>
    )
}