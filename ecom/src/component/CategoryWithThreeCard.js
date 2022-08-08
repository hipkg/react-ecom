import React from 'react';
import TitleContainer from './base/TitleContainer';

export default function CategoryWithThreeCard({title,itemData}) {
  return (
    <section className='category-3card-section py-4 px-5'>
        <div className="container-fluid">
                <TitleContainer title={title}/>
                    <ul>
                        {itemData.map((item,index)=>{
                            return <li key={index}>
                                <a href="#ShowNewPage">
                                    <div className="image-wrapper shadow-sm">
                                        <img src={require(`../assets/images/${item.img}`)} className="img-fluid" alt={item.title} />
                                    </div>
                                    <div className='item-title text-capitalize text-center m-0 pt-2 font-small text-truncate text-dark py-0 fw-bold'>{item.title}</div>
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
    </section>
  )
}
