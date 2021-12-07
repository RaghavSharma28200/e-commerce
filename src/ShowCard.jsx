import React from 'react'
import Card from './Card'

const ShowCard = ({data}) => {
    console.log(data)
    return (
        <>
     <div className="flex">
       { Array.from(data).map((items)=>{
           return  <Card
                       key = {items._id}
                       name={items.name}
                       pic={items.images[0].url}
                       rating={items.ratings}
                       price={items.price}
                       /> 
       })}
       </div>
        </>
    )
}

export default ShowCard
