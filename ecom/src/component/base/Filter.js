import React from 'react'

export default function Filter() {
  return (
    <section className="px-5">
        <div className="container-fluid">
          <div class="dropdown float-end">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
              Filter
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2" >
              <li><span class="dropdown-item"><input type="checkbox" name="bestseller" id='bestseller' onChange={(event)=>{setIsBestSeller(event.target.checked)}} /> <label htmlFor="bestseller">Best Seller</label></span></li>
              <li><span class="dropdown-item"><input type="checkbox" name="freedelivery" id='freeDelivery' onChange={(event)=>{setIsFreeDelivery(event.target.checked)}} /> <label htmlFor="freeDelivery">Free Delivery</label></span></li>
              <li><span class="dropdown-item"><input type="checkbox" name="earliestdelivery" id='earliestDelivery' onChange={(event)=>{setIsEarliestDelivery(event.target.checked)}} /> <label htmlFor="earliestDelivery">Earliest Delivery</label></span></li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
  )
}
