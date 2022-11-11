import React from 'react'

export default function MidBanner() {
  return (
    <section className='mid-banner-section py-4 px-5'>
       <div className='container-fluid'>
        <div className="banner-wrapper">
          <img src={require('../../assets/images/ChocolateCelebration.png')} alt="banner" className='img-fluid' />
        </div>
       </div>
    </section>
  )
}
