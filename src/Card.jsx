import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Card = ({name,rating,price,pic}) => {
    const shortName = `${name.split(' ').slice(0, 5).join(' ').replace(/<.+?>/g, '')}...`
    return (
    <>

    <div className="card-wrapper">
     <div className="card-img-wrapper">
         <img src={pic} alt="no-pic" className='card-img' />
     </div>
     <p className='product-title'>{shortName}</p>
     <p className='product-price'>Price: ₹{price}</p>
     <p className='product-rating' id="rating"><span className="product-rating-span">{rating}<AiFillStar className='star'/></span></p>
    </div>

    </>
    )
}

export default Card
