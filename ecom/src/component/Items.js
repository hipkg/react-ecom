import React from 'react'
import TitleContainer from './base/TitleContainer';

// eslint-disable-next-line 
export default function ({title,itemData,sidebanner}) {
  return (
    <section className='item-section py-4 px-5'>
        <div className="container-fluid">
        <TitleContainer title={title}/>
            <div className="category-row">
                <div className="side-banner">
                    <img src={sidebanner} alt={title} className="img-fluid" />
                </div>
                <ul>
                    {itemData.map((item,index)=>{
                        return <li key={index} className="col-12 col-md-6 col-lg-4">
                            <a href="#BuyNow" className='shadow-sm position-relative'>
                                <div className="image-wrapper">
                                    <img src={require(`../assets/images/${item.img}`)} className="img-fluid" alt={item.title} />
                                </div>
                                <h6 className='item-title text-capitalize text-center m-0 font-small text-truncate text-dark py-4 fw-bold'>{item.title}</h6>
                                { 
                                item.isBestSeller?<span className="position-absolute badge bg-success">Best Seller<span className="visually-hidden">unread messages</span>
                                </span>:''
                                }
                                {
                                item.availability<=0?<span className="position-absolute badge badge-availablity bg-danger">Out of Stock<span className="visually-hidden">unread messages</span>
                                </span>:''
                                }
                                {
                                item.availability<=10 && item.availability!==0?<span className="position-absolute badge badge-availablity" style={{backgroundColor:`rgba(${item.availability*25}, 0, 0)`}}>Order Now {item.availability} Left<span className="visually-hidden">unread messages</span>
                                </span>:''
                                }
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </section>
  )
}
