import React, { useEffect, useState } from 'react'

import Card from '../card/card.component'

import data from '../../data';

import './card-list.style.css'

function CardList({ option }) {

    // const getUsers = async () => {
    //     const res = (`http://localhost:5200/cruise`);
    //     console.log(res.data);
    // }

    useEffect(() =>{
        getUsers();
    },[])
    
    return (
        <div className='card-list'>
            {
                data[option] ?
                    data[option].map((item) => {
                        return <Card key={item.key} item={item} />
                    })
                    : null
            }
        </div>
        
    )
}
export default CardList