import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className='collectionCard'>
        <img src={image} alt="" />
        <div className='details'>
            <div className='name'>
                {name} <div className='id'>#{id}</div>
            </div>
            <div className='priceContainer'>
                <img src={weth} alt="" className='wethImage'/>
                <div className='price'>{traits[0]?.value}</div>
            </div>
            <div className="traits">
                {traits.map(trait => (
                    <div className='trait'>
                        <div className='traitName'>{trait.trait_type}:</div>
                        {/* render the first 10 characters and then ... only if the length is above 10  */}
                        <div className='traitValue'>{trait.value.length > 14 ? trait.value.substring(0, 14) + '...' : trait.value}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CollectionCard