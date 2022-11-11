import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({categoryData}) {
  return (
    <section className='category-section py-4 px-5'>
        <div className="container-fluid">
                <div className='heading-with-subtitle  text-center py-3'>
                    <h1>Find the perfect gifts every occassion</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, rem?</p>
                </div>
                <ul className='pt-3'>
                    {categoryData.map((category,index)=>{
                        return <li key={index} className="col-6 col-md-4 col-lg-3 col-xl">
                                <Link className='bg-white rounded shadow-sm' to="category" state={{data:category.title}}>
                                    <div className='img-box'>
                                        <img src={require(`../../assets/images/${category.img}`)} alt={category.title} />
                                    </div>
                                    <p className='text-capitalize'>{category.title}</p>
                                </Link>
                            </li>
                    })}
                </ul>
        </div>
    </section>
  )
}