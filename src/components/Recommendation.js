import React from 'react'
import './RecommendationStyles.css'
import RecomData from './RecomData'
import Recom1 from '../assets/9.PNG'
import Recom2 from '../assets/10.PNG'
import Recom3 from '../assets/11.PNG'
import Recom4 from '../assets/12.PNG'
import Recom5 from '../assets/13.PNG'
import Recom6 from '../assets/14.PNG'

function Recommendation() {
  return (
    <div className='recommendation'>
        <h1>Best Daily Skincare Routine</h1>
        <p>How to build the perfect at-home regimen for your skin type</p>
        <div className='product-recom'>
            <RecomData
                image={Recom1}
                heading='Dr. Dennis Gross Skincare Alpha Beta Universal Daily Peel'
                text="“This is a unique, patented two-step peel pad that works great for oily and acne-prone skin. It contains seven different acids, including glycolic acid and salicylic acid, to provide effective chemical exfoliation—but is still safe enough to be used daily in people with the oily skin.” — Dr. Woolery Lloyd"
            />
            <RecomData
                image={Recom2}
                heading='Bioré Cover & Conquer Blemish Patch'
                text="“The kids these days love experimenting with pimple patches in all kinds of funky designs. Me, I prefer something a touch more discreet, which is why I love these clear patches. They help blemishes health and prevent scarring and no one but you will even know you're wearing one.” —Underwood"
            />
            <RecomData
                image={Recom3}
                heading='Undefined Beauty R&R Sun Serum'
                text="“This SPF addresses two of my biggest pet peeves about mineral facial sunscreens handily. 1.) It goes on sheer with no white cast. 2.) It's slightly tinted to blend into skin, but the color never transfers. This has been my go-to since it launched a few months ago.” -Underwood"
            />
        </div>
        <div className='product-recom'>
        <RecomData
                image={Recom4}
                heading='Tatcha The Water Cream Oil-Free Pore Minimizing Moisturizer'
                text="“It's a light moisturizer that gently hydrates the skin without feeling heavy or suffocating.” — Dr. Kim"
            />
            <RecomData
                image={Recom5}
                heading='La Roche-Posay Toleriane Double Repair Matte Face Moisturizer'
                text="“As a lightweight oil-free gel moisturizer, this mattifying moisturizer absorbs easily while reducing shine and oiliness. Formulated with ceramides, niacinamide, glycerin and prebiotic thermal water, it helps to strengthen the skin barrier, provides all day hydration and soothes the skin. It is non-comedogenic so wont clog the pores.” — Dr. Garshick"
            />
            <RecomData
                image={Recom6}
                heading='Aveeno Calm + Restore Oat Gel Moisturizer'
                text="“A lightweight, gentle, and calming moisturizer, this is great for soothing irritated skin and nourishing dehydrated skin.” — Dr. Kim"
            />
        </div>
    </div>
)}

export default Recommendation