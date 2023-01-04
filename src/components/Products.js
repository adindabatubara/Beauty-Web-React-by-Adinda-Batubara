import React from 'react';
import ProductsData from './ProductsData';
import './ProductsStyle.css'
import Pro1 from '../assets/5.PNG'
import Pro2 from '../assets/6.PNG'
import Pro3 from '../assets/7.PNG'
import Pro4 from '../assets/8.PNG'
import Pro5 from '../assets/15.PNG'
import Pro6 from '../assets/16.PNG'

const Products = () => {
  return (
    <div className='products'>
        <h1>Popular Products</h1>
        <p>The products on this list were the top trending product categories</p>
        
        <ProductsData
          className='first-pro'
          heading='Avène Tolerance Extremely Gentle Cleanser Lotion'
          text="This cleansing gel uses a combination of postbiotics (which help with skin barrier function and hydration) and thermal spring water with anti-inflammatory and soothing properties to remove dirt and oil. It's great as part of a double-cleanse routine: Use this first and a creamy wash second to lock in moisture."
          img1={Pro1}
          img2={Pro2}
        />
        <ProductsData
          className='first-pro-reverse'
          heading='La Roche-Posay Pure Retinol Face Serum with Vitamin B3'
          text="The combination of oil-reducing retinol with a calming and anti-inflammatory vitamin make this a great choice for oily skin. It's also fast-absorbing, non-comedogenic, and oil-free."
          img1={Pro3}
          img2={Pro4}
        />
        <ProductsData
          className='first-pro'
          heading='Estée Lauder Advanced Night Repair Eye Concentrate Matrix Synchronized Multi-Recovery Complex'
          text="A blend of peptides, hyaluronic acid, and vitmain E soften fine lines around the eyes. But the part part is the custom-designed stainless steel applicator wand, which soothes away puffiness."
          img1={Pro5}
          img2={Pro6}
        />
    </div>
  )
}

export default Products