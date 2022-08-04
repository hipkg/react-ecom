import React from 'react'
import TitleContainer from './base/TitleContainer'

export default function OfferSection({title,isTimer,offerData}) {
  return (
    <section className='offer-section py-4 px-5'>
        <div className="container-fluid">
                <TitleContainer  title={title} isTimer={isTimer}/>
                <ul className='pt-3 pb-3'>
                     {offerData.map((item,index)=>{
                        return   <li key={index}>
                        <a className='card bg-transparent border-0' href="#BuyNow">
                            <div className="image-wrapper shadow-sm">
                                <img src={require(`../assets/images/${item.img}`)} alt={item.title} className="img-fluid" />
                            </div>
                            <div className='text-capitalize text-center mt-3 my-2 text-truncate offer-title'>{item.title}</div>
                            <p className='text-capitalize text-center m-0 fw-bold'>OMR {item.price}</p>
                            <p className='text-capitalize text-center m-0 fw-light mt-3'>Earliest Delivery:<span className='text-success fw-bold'>Today</span></p>
                        </a>
                    </li>
                     })}
                    
                </ul>
        </div>
    </section>
  )
}
