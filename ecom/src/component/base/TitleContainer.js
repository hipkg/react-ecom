import React from 'react'

export default function TitleContainer({title,isTimer}) {
  return (
    <div className="d-flex w-100 align-items-center p-0">
        <h2 className='fw-normal py-2 text-capitalize '>{title}</h2>
        {isTimer?<p className='text-secondary d-flex align-items-center m-0'>
            <i className="material-symbols-outlined me-2 ms-2">timer</i>
            16 : 40 : 19 Left
        </p>:''}
        <button className='btn btn-danger w-auto ms-auto'>View More</button>
    </div>
  )
}
