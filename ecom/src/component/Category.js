import React from 'react'

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
                        return <li key={index}>
                                <a className='bg-white rounded shadow-sm' href="#BuyNow">
                                    <div className='img-box'>
                                        <img src={require(`../assets/images/${category.img}`)} alt={category.title} />
                                    </div>
                                    <p className='text-capitalize'>{category.title}</p>
                                </a>
                            </li>
                    })}
                </ul>
        </div>
    </section>
  )
}
