import React from 'react';
import TitleContainer from './base/TitleContainer';

export default function CategoryWithTwoCard({title,itemData}) {
  return (
    <section className='category-2card-section py-4 px-5'>
        <div className="container-fluid">
                <TitleContainer title={title}/>
                    <ul>
                        {itemData.map((item,index)=>{
                            return <li key={index}>
                                <a href="#ShowNewPage">
                                    <div className="image-wrapper shadow-sm">
                                        <img src={item} className="img-fluid" alt={item} />
                                    </div>
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
    </section>
  )
}
