import React from 'react'
import './Middle.css'
function Middle() {
  return (
    <div id="Middle">
        <div className="sub1">
           <h2> Order Today </h2>
           <h2>Unwrap Tomorrow</h2>
        </div>
        <div className="sub2">
          <h1>Hoodie</h1>
          <img src=" https://www.redwolf.in/image/cache/catalog/sweatshirts/redwolf-basics-plain-black-hoodie-t-shirt-india-600x800.jpg?m=1704439588" alt="image" className='image'/>
          <button className='button'><b>Add to Cart</b></button>
        </div>
    </div>
  )
}

export default Middle