import React from 'react'
import truck from '../assets/images/icon/truck.png';
import cake from '../assets/images/icon/cake.png';

export default function Category({categoryData}) {
  return (
    <section className='category-section py-4 px-5'>
        <div className="container-fluid">
            <div className="row">
                <h1 className='fw-normal text-center py-2'>Find the perfect gifts every occassion</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, rem?</p>
                <ul className='pt-3'>
                    {categoryData.map((category)=>{
                        return <li>
                                <a className='card shadow-sm' href="#">
                                    <div className='img-box'>
                                        <img src={category.img} alt={category.title} className=""  width={'100px'} height={'100px'} />
                                    </div>
                                    <p className='text-capitalize'>{category.title}</p>
                                </a>
                            </li>
                    })}
                </ul>
            </div>
        </div>
    </section>
  )
}
