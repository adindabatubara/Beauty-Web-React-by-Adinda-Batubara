import React from 'react'
import './RecommendationStyles.css'
import BrandsProData from './BrandsProData'
import Bimage1 from '../assets/17.PNG'
import Bimage2 from '../assets/13.PNG'
import Bimage3 from '../assets/7.PNG'
import Bimage4 from '../assets/18.PNG'
import Bimage5 from '../assets/19.PNG'
import Bimage6 from '../assets/20.PNG'
import Bimage7 from '../assets/21.PNG'
import Bimage8 from '../assets/22.PNG'
import Bimage9 from '../assets/23.PNG'


function BrandsPro() {
  return (
    <div className='brands-pro'>
        <h1>La Roche-Posay</h1>
        <p>La Roche Posay Effaclar life changing dermatological skincare for oily & acne prone skin!</p>
        <div className='product-brands'>
            <BrandsProData
                image={Bimage1}
                heading='La Roche-Posay Anthelios UV Correct SPF 70 Daily Face Sunscreen'
                text="This provides great UV protection while offering the additional skin benefit of anti-aging ingredients. Niacinamide and antioxidants work together to minimize signs of sun damage. It is light, cosmetically elegant, and easy to layer—and it blends into all skin tones."
            />
            <BrandsProData
                image={Bimage2}
                heading='La Roche-Posay Toleriane Double Repair Matte Face Moisturizer'
                text="“As a lightweight oil-free gel moisturizer, this mattifying moisturizer absorbs easily while reducing shine and oiliness. Formulated with ceramides, niacinamide, glycerin and prebiotic thermal water, it helps to strengthen the skin barrier, provides all day hydration and soothes the skin. It is non-comedogenic so wont clog the pores.” — Dr. Garshick"
            />
            <BrandsProData
                image={Bimage3}
                heading='La Roche-Posay Pure Retinol Face Serum with Vitamin B3'
                text="The combination of oil-reducing retinol with a calming and anti-inflammatory vitamin make this a great choice for oily skin. It's also fast-absorbing, non-comedogenic, and oil-free."
            />
        </div>

        <h1>CeraVe</h1>
        <p>CeraVe offers effective, dermatologic skincare products for all skin types</p>
        <div className='product-brands'>
            <BrandsProData
                image={Bimage4}
                heading='CeraVe Daily Moisturizing Lotion for Dry Skin'
                text="This classic drugstore lotion is affordable and effective at keeping the body soft and moisturized. It's a must-have for fall and winter."
            />
            <BrandsProData
                image={Bimage5}
                heading='CeraVe Hydrating Facial Cleanser'
                text="This is a tried-and-true dermatologist favorite. It's a gentle cleanser that cleanses the skin without drying. It's well-tolerated by even the most sensitive skin types and contains ceramides, which help restore and maintain the skin barrier."
            />
            <BrandsProData
                image={Bimage6}
                heading='CeraVe Foaming Facial Cleanser for Normal to Oily Skin'
                text="It starts as a gel and transforms into a thick foam as you lather up. It's good enough to remove any trace of makeup and dirt from the face, and thanks to the addition of hyaluronic acid, it won't cause excessive dryness."
            />
        </div>

        <h1>Drunk Elephant</h1>
        <p>Bouncy Brightfacial clarifies uneven tone and fades stubborn spots to reveal a brighter, more even complexion</p>
        <div className='product-brands'>
            <BrandsProData
                image={Bimage7}
                heading='Drunk Elephant Ceramighty AF Eye Balm'
                text="This works wonders for the undereyes and makes the area feel so much softer and more hydrated. The formula has such a creamy, just-right consistency that's not too thick, not too watery, and easy to spread."
            />
            <BrandsProData
                image={Bimage8}
                heading='Drunk Elephant B-Hydra Intensive Hydration Serum with Hyaluronic Acid'
                text="This serum is vegan and formulated without essential oils, silicones, and fragrance. It is a lightweight, hydrating serum that replenishes the complexion and improves the look of skin texture and tone. It provides easily absorbed hydration for your skin, helps to reduce fine lines, and promote firm skin."
            />
            <BrandsProData
                image={Bimage9}
                heading='Drunk Elephant Call It A Night Glycolic Serum + Moisturizer duo'
                text="Give your skin a nightcap with this essential set, which provides an approximately 30-day supply. T.L.C. Framboos™ Glycolic Resurfacing Night Serum visibly resurfaces dull, congested skin by gently lifting away dead cells, while Lala Retro™ Whipped Moisturizer with Ceramides provides barrier support by reinforcing skin’s acid mantle and defending against the effects of everyday stressors."
            />
        </div>
    </div>
)}

export default BrandsPro