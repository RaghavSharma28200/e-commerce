import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ShowCard from './ShowCard';

function Home() {
const[data,setData] = useState('');
  
useEffect(()=>{
    console.log('button clicked ');
    axios.get('https://kulshoragecommerce.herokuapp.com/allProducts').then((res)=>{
        console.log(res.data);
        setData(res.data);
    })
},[])
    return (
        <>
       <ShowCard data={data}/>
        </>
    )
}

export default Home
