import React from 'react'
import TitleContainer from './base/TitleContainer'
export default function ({title,titleColor,itemData,sidebanner}) {
  return (
    <section className='item-section py-4 px-5'>
        <div className="container-fluid">
            <div className="row">
                <TitleContainer title={title}/>
                <div className="col-4">
                    <div className="side-banner pt-5 text-capitalize" style={{background:`url(${sidebanner})`,color:`${titleColor}`}}>
                    </div>
                </div>
                <div className="col-8">
                    <ul>
                        {itemData.map((item,index)=>{
                            return <li key={index}>
                                <a href="#BuyNow">
                                    <div className="image-wrapper">
                                        <img src={require(`../assets/images/${item.img}`)} className="img-fluid" alt={item.title} />
                                    </div>
                                    <div className='item-title text-capitalize text-center m-0 pt-2 font-small text-truncate text-dark py-3 fw-bold'>{item.title}</div>
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
