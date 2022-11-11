import React from 'react';
import { Link } from 'react-router-dom';
import TitleContainer from '../base/TitleContainer';

export default function CategoryWithThreeCard({title,itemData}) {
  return (
    <section className='category-3card-section py-4 px-5'>
        <div className="container-fluid">
                <TitleContainer title={title}/>
                    <ul>
                        {itemData.map((item,index)=>{
                            return <li key={index} className="col-12 col-md-6 col-lg-4">
                                <Link to="category" state={{data:item.title}}>
                                    <div className="image-wrapper shadow-sm">
                                        <img src={require(`../../assets/images/${item.img}`)} className="img-fluid" alt={item.title} />
                                    </div>
                                    <p className='item-title text-capitalize text-center m-0 pt-2 font-small text-truncate text-dark py-0 fw-bold'>{item.title}</p>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
    </section>
  )
}
