import React from 'react'
import { Link } from 'react-router-dom'
import TitleContainer from '../base/TitleContainer'

export default function OfferSection({title,isTimer,offerData}) {
  return (
    <section className='offer-section py-4 px-5'>
        <div className="container-fluid">
                <TitleContainer  title={title} isTimer={isTimer}/>
                <ul className='pt-3 pb-3'>
                     {offerData.map((item,index)=>{
                        return   <li key={index} className="col-12 col-md-6 col-lg-3">
                        <Link className='card bg-transparent border-0' to="/buynow">
                            <div className="image-wrapper shadow-sm">
                                <img src={require(`../../assets/images/${item.img}`)} alt={item.title} className="img-fluid" />
                            </div>
                            <div className='text-capitalize text-center mt-3 my-2 text-truncate offer-title'>{item.title}</div>
                            <p className='text-capitalize text-center m-0 fw-bold'>OMR {item.price}</p>
                            <p className='text-capitalize text-center m-0 fw-light mt-3'>Earliest Delivery:<span className='text-success fw-bold'>Today</span></p>
                            { 
                                item.isBestSeller?<span className="position-absolute badge bg-success">Best Seller<span className="visually-hidden">unread messages</span>
                                </span>:''
                                }
                                {
                                item.availability<=0?<span className="position-absolute badge badge-availablity bg-danger">Out of Stock<span className="visually-hidden">unread messages</span>
                                </span>:''
                                }
                                {
                                item.availability<=10 && item.availability!==0?<span className="position-absolute badge badge-availablity" style={{backgroundColor:`rgba(${150+item.availability * 10}, 0, 0)`}} >Order Now {item.availability} Left<span className="visually-hidden">unread messages</span>
                                </span>:''
                                }
                        </Link>
                    </li>
                     })}
                    
                </ul>
        </div>
    </section>
  )
}
