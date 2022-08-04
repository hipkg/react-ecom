import React from 'react'
import TitleContainer from './base/TitleContainer'
export default function ({title,titleColor,itemData,sidebanner}) {
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
                        return <li key={index} className="shadow-sm">
                            <a href="#BuyNow">
                                <div className="image-wrapper">
                                    <img src={require(`../assets/images/${item.img}`)} className="img-fluid" alt={item.title} />
                                </div>
                                <h6 className='item-title text-capitalize text-center m-0 font-small text-truncate text-dark py-4 fw-bold'>{item.title}</h6>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </section>
  )
}
