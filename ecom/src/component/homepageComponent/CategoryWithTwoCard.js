import React from 'react';
import { Link } from 'react-router-dom';
import TitleContainer from '../base/TitleContainer';

export default function CategoryWithTwoCard({title,itemData}) {
  return (
    <section className='category-2card-section py-4 px-5'>
        <div className="container-fluid">
                <TitleContainer title={title}/>
                    <ul>
                        {itemData.map((item,index)=>{
                            return <li key={index} className="col-12 col-md-6">
                                <Link to="category" state={{data:item.category} }>
                                    <div className="image-wrapper shadow-sm">
                                        <img src={item.img} className="img-fluid" alt={item} />
                                    </div>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
    </section>
  )
}
