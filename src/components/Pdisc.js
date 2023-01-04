import React from 'react'
import './PdiscStyle.css'
import PdiscData from './PdiscData'
import PDimage1 from '../assets/7.PNG'
import PDimage2 from '../assets/5.PNG'
import PDimage3 from '../assets/15.PNG'
import PDimage4 from '../assets/9.PNG'
import PDimage5 from '../assets/13.PNG'
import PDimage6 from '../assets/12.PNG'
import PDimage7 from '../assets/19.PNG'
import PDimage8 from '../assets/20.PNG'


function Pdisc() {
  return (
    <div className='pro-disc'>
        <h1>New Year Sale</h1>
        <p>Sale products up to 75% - December 2022</p>
        <div className='product-disk'>
            <PdiscData
                image={PDimage1}
                heading='La Roche-Posay Pure Retinol Face Serum with Vitamin B3'
                text="The combination of oil-reducing retinol with a calming and anti-inflammatory vitamin make this a great choice for oily skin. It's also fast-absorbing, non-comedogenic, and oil-free."
                link= '60%'
            />
            <PdiscData
                image={PDimage2}
                heading='Avène Tolerance Extremely Gentle Cleanser Lotion'
                text="This cleansing gel uses a combination of postbiotics (which help with skin barrier function and hydration) and thermal spring water with anti-inflammatory and soothing properties to remove dirt and oil. It's great as part of a double-cleanse routine: Use this first and a creamy wash second to lock in moisture."
                link= '35%'
            />
            <PdiscData
                image={PDimage3}
                heading='Estée Lauder Advanced Night Repair Eye Concentrate Matrix Synchronized Multi-Recovery Complex'
                text="A blend of peptides, hyaluronic acid, and vitmain E soften fine lines around the eyes. But the part part is the custom-designed stainless steel applicator wand, which soothes away puffiness."
                link= '25%'
                    />
             <PdiscData
                image={PDimage4}
                heading='Dr. Dennis Gross Skincare Alpha Beta Universal Daily Peel'
                text="“This is a unique, patented two-step peel pad that works great for oily and acne-prone skin. It contains seven different acids, including glycolic acid and salicylic acid, to provide effective chemical exfoliation—but is still safe enough to be used daily in people with the oily skin.” — Dr. Woolery Lloyd"
                link= '65%'
            />
        </div>
        <div className='product-disk'>
            <PdiscData
                image={PDimage5}
                heading='La Roche-Posay Anthelios UV Correct SPF 70 Daily Face Sunscreen'
                text="This provides great UV protection while offering the additional skin benefit of anti-aging ingredients. Niacinamide and antioxidants work together to minimize signs of sun damage. It is light, cosmetically elegant, and easy to layer—and it blends into all skin tones."
                link= '40%'
            />
            <PdiscData
                image={PDimage6}
                heading='Tatcha The Water Cream Oil-Free Pore Minimizing Moisturizer'
                text="“It's a light moisturizer that gently hydrates the skin without feeling heavy or suffocating.” — Dr. Kim"
                link= '55%'
            />
            <PdiscData
                image={PDimage7}
                heading='CeraVe Hydrating Facial Cleanser'
                text="This is a tried-and-true dermatologist favorite. It's a gentle cleanser that cleanses the skin without drying. It's well-tolerated by even the most sensitive skin types and contains ceramides, which help restore and maintain the skin barrier."
                link= '50%'
            />
             <PdiscData
                image={PDimage8}
                heading='CeraVe Foaming Facial Cleanser for Normal to Oily Skin'
                text="It starts as a gel and transforms into a thick foam as you lather up. It's good enough to remove any trace of makeup and dirt from the face, and thanks to the addition of hyaluronic acid, it won't cause excessive dryness."
                link= '75%'
            />
        </div>
    </div>
)}

export default Pdisc