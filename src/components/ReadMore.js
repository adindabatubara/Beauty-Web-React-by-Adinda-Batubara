import React, { useState } from "react";
import './NewsHealth.css'
import NewsHealthData from './NewsHealthData';
import News1 from '../assets/24.PNG'
import News2 from '../assets/25.PNG'
import News3 from '../assets/26.PNG'
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Content = () => {
    return (
        <>
        <div className='news'>
           <h1>Beauty News</h1>
           <p>Your guide to glowing skin, less acne, and the best products for your individual needs.</p>
            <div className="news-container">
                <NewsHealthData
                    className='first-news'
                    img1={News1}
                />
                <h4>Refillable Beauty Products</h4>
                <ReadMore className='text-nws'>
                    Beauty trends surge and fizzle out faster than ever these days. There's always a new buzzy skincare ingredient, controversial cosmetic product, and hot shade of the season to try. Even for the self-care and makeup-obsessed, this cycle can start to feel a little, well, wasteful.
                    On the flip side of all of this is another, more sustainable, trend: refillable beauty products. They're exactly what they sound like personal care items, toiletries, and cosmetics that you buy, use, and then replenish instead of just throwing out. These easier-on-the Earth refills can take many forms, from pouches to powders or tablets and pods.
                    Refillable beauty products aren't new, per se, but maybe you've noticed a recent uptick in brands getting in the refillable game. “During the pandemic, people became more aware of taking care of each other and our planet, and consumers began seeking out more sustainable options in addition to brands focusing on this as a priority as well,” says New York City-based board-certified dermatologist Dr. Marisa Garshick, MD."
                </ReadMore>

                <NewsHealthData
                    className='first-news'
                    img1={News2}
                />
                <h4>Acne Excoriée</h4>
                <ReadMore>
                  One of the most bothersome skin conditions is acne, and almost everyone struggles with it to some degree. Many conditions and behaviors can be developed from having acne—from popping pimples in the mirror to trying every trick in the book to get rid of it—but one condition takes those actions to another level. It's called acne excoriée, and it can be a serious condition. Here's what you need to know to keep your skin health. If you've never heard of it, acne excoriée is a skin condition “when one compulsively is picking, scratching, or squeezing acne or pimples,” leaving scabs, scars, and pigmentation, says board-certified multi-specialist physician, Dr. Azza Halim, MD. More common in adolescent females than males, the condition is usually associated with depression, anxiety, OCD, body dysmorphia, or emotional triggers.
                  “Pickers' acne,” as it's sometimes called, is more common than you might believe. That's because of underreported data, and also because it's not a well-understood concept, says Dr. Halim. A 2020 Journal of Psychiatric Research study of a population representative of the US revealed that 3.1 percent of females identified as having a lifetime skin-picking disorder. Savanna Boda, owner of Savanna Boda Aesthetics agrees: “Many people suffer in silence,” she adds.
                </ReadMore>
            
                <NewsHealthData
                    className='first-news'
                    img1={News3}
                />
                <h4>What exactly is a toner?</h4>
                <ReadMore>
                 "Facial toner is basically the in-between skincare step. It's meant to be used after washing your face but before applying your serum or moisturizer.
                  'Historically toners were used as a way to balance the pH of the skin after using an alkaline soap product for cleansing,' says Rebecca Kazin, MD, a dermatologist in Washington, DC. Now, as our cleansers tend to be more pH balanced and gentle, toners have evolved to a skincare category all their own. Dr. Kazin adds: 'The thought process has changed from just a typically astringent product. There are now more types of toners that provide different benefits.'' As for their alcohol content? Today's toners are typically pretty water-based. Face toners prep the skin for moisturizers and serum while getting rid of excess oil and stubborn dirt or makeup leftover on your face after you wash it, says Dr. Kim. But they're not a replacement for washing your face. Just think of facial toners as the extra credit rather than the shortcut of your skin-care routine.
                  The reformulated toners of today are used to target a varying array of skin concerns—from acne to dryness to aging, says Dr. Kim. Like their predecessors, some toners are formulated for oily skin. 'A toner with a combination of glycolic and salicylic acids can keep oily skin matte throughout the day,' says Estee Williams, MD, a dermatologist in NYC. Other toners are for drier skin types and contain hydrating ingredients. 'Some newer formulations are even toner-serum hybrids with more substantial gel or lotion textures,' Dr. Kim explains.
                </ReadMore>

                <NewsHealthData
                    className='first-news'
                    img1={News1}
                />
                <h4>Refillable Beauty Products</h4>
                <ReadMore className='text-nws'>
                    Beauty trends surge and fizzle out faster than ever these days. There's always a new buzzy skincare ingredient, controversial cosmetic product, and hot shade of the season to try. Even for the self-care and makeup-obsessed, this cycle can start to feel a little, well, wasteful.
                    On the flip side of all of this is another, more sustainable, trend: refillable beauty products. They're exactly what they sound like personal care items, toiletries, and cosmetics that you buy, use, and then replenish instead of just throwing out. These easier-on-the Earth refills can take many forms, from pouches to powders or tablets and pods.
                    Refillable beauty products aren't new, per se, but maybe you've noticed a recent uptick in brands getting in the refillable game. “During the pandemic, people became more aware of taking care of each other and our planet, and consumers began seeking out more sustainable options in addition to brands focusing on this as a priority as well,” says New York City-based board-certified dermatologist Dr. Marisa Garshick, MD."
                </ReadMore>
            
                <NewsHealthData
                    className='first-news'
                    img1={News2}
                />
                <h4>Acne Excoriée</h4>
                <ReadMore>
                  One of the most bothersome skin conditions is acne, and almost everyone struggles with it to some degree. Many conditions and behaviors can be developed from having acne—from popping pimples in the mirror to trying every trick in the book to get rid of it—but one condition takes those actions to another level. It's called acne excoriée, and it can be a serious condition. Here's what you need to know to keep your skin health. If you've never heard of it, acne excoriée is a skin condition “when one compulsively is picking, scratching, or squeezing acne or pimples,” leaving scabs, scars, and pigmentation, says board-certified multi-specialist physician, Dr. Azza Halim, MD. More common in adolescent females than males, the condition is usually associated with depression, anxiety, OCD, body dysmorphia, or emotional triggers.
                  “Pickers' acne,” as it's sometimes called, is more common than you might believe. That's because of underreported data, and also because it's not a well-understood concept, says Dr. Halim. A 2020 Journal of Psychiatric Research study of a population representative of the US revealed that 3.1 percent of females identified as having a lifetime skin-picking disorder. Savanna Boda, owner of Savanna Boda Aesthetics agrees: “Many people suffer in silence,” she adds.
                </ReadMore>
            
                <NewsHealthData
                    className='first-news'
                    img1={News3}
                />
                <h4>What exactly is a toner?</h4>
                <ReadMore>
                 "Facial toner is basically the in-between skincare step. It's meant to be used after washing your face but before applying your serum or moisturizer.
                  'Historically toners were used as a way to balance the pH of the skin after using an alkaline soap product for cleansing,' says Rebecca Kazin, MD, a dermatologist in Washington, DC. Now, as our cleansers tend to be more pH balanced and gentle, toners have evolved to a skincare category all their own. Dr. Kazin adds: 'The thought process has changed from just a typically astringent product. There are now more types of toners that provide different benefits.'' As for their alcohol content? Today's toners are typically pretty water-based. Face toners prep the skin for moisturizers and serum while getting rid of excess oil and stubborn dirt or makeup leftover on your face after you wash it, says Dr. Kim. But they're not a replacement for washing your face. Just think of facial toners as the extra credit rather than the shortcut of your skin-care routine.
                  The reformulated toners of today are used to target a varying array of skin concerns—from acne to dryness to aging, says Dr. Kim. Like their predecessors, some toners are formulated for oily skin. 'A toner with a combination of glycolic and salicylic acids can keep oily skin matte throughout the day,' says Estee Williams, MD, a dermatologist in NYC. Other toners are for drier skin types and contain hydrating ingredients. 'Some newer formulations are even toner-serum hybrids with more substantial gel or lotion textures,' Dr. Kim explains.
                </ReadMore>
             </div>



                {/* <div className="news-container">
                <NewsHealthData
                    className='first-news'
                    img1={News1}
                />
                <h4>Refillable Beauty Products</h4>
                <ReadMore>
                    Beauty trends surge and fizzle out faster than ever these days. There's always a new buzzy skincare ingredient, controversial cosmetic product, and hot shade of the season to try. Even for the self-care and makeup-obsessed, this cycle can start to feel a little, well, wasteful.
                    On the flip side of all of this is another, more sustainable, trend: refillable beauty products. They're exactly what they sound like personal care items, toiletries, and cosmetics that you buy, use, and then replenish instead of just throwing out. These easier-on-the Earth refills can take many forms, from pouches to powders or tablets and pods.
                    Refillable beauty products aren't new, per se, but maybe you've noticed a recent uptick in brands getting in the refillable game. “During the pandemic, people became more aware of taking care of each other and our planet, and consumers began seeking out more sustainable options in addition to brands focusing on this as a priority as well,” says New York City-based board-certified dermatologist Dr. Marisa Garshick, MD."
                </ReadMore>



                <NewsHealthData
                    className='first-news'
                    img1={News2}
                />
                <h4>Acne Excoriée</h4>
                <ReadMore>
                  One of the most bothersome skin conditions is acne, and almost everyone struggles with it to some degree. Many conditions and behaviors can be developed from having acne—from popping pimples in the mirror to trying every trick in the book to get rid of it—but one condition takes those actions to another level. It's called acne excoriée, and it can be a serious condition. Here's what you need to know to keep your skin health. If you've never heard of it, acne excoriée is a skin condition “when one compulsively is picking, scratching, or squeezing acne or pimples,” leaving scabs, scars, and pigmentation, says board-certified multi-specialist physician, Dr. Azza Halim, MD. More common in adolescent females than males, the condition is usually associated with depression, anxiety, OCD, body dysmorphia, or emotional triggers.
                  “Pickers' acne,” as it's sometimes called, is more common than you might believe. That's because of underreported data, and also because it's not a well-understood concept, says Dr. Halim. A 2020 Journal of Psychiatric Research study of a population representative of the US revealed that 3.1 percent of females identified as having a lifetime skin-picking disorder. Savanna Boda, owner of Savanna Boda Aesthetics agrees: “Many people suffer in silence,” she adds.
                </ReadMore>



                <NewsHealthData
                    className='first-news'
                    img1={News3}
                />
                <h4>What exactly is a toner?</h4>
                <ReadMore>
                 "Facial toner is basically the in-between skincare step. It's meant to be used after washing your face but before applying your serum or moisturizer.
                  'Historically toners were used as a way to balance the pH of the skin after using an alkaline soap product for cleansing,' says Rebecca Kazin, MD, a dermatologist in Washington, DC. Now, as our cleansers tend to be more pH balanced and gentle, toners have evolved to a skincare category all their own. Dr. Kazin adds: 'The thought process has changed from just a typically astringent product. There are now more types of toners that provide different benefits.'' As for their alcohol content? Today's toners are typically pretty water-based. Face toners prep the skin for moisturizers and serum while getting rid of excess oil and stubborn dirt or makeup leftover on your face after you wash it, says Dr. Kim. But they're not a replacement for washing your face. Just think of facial toners as the extra credit rather than the shortcut of your skin-care routine.
                  The reformulated toners of today are used to target a varying array of skin concerns—from acne to dryness to aging, says Dr. Kim. Like their predecessors, some toners are formulated for oily skin. 'A toner with a combination of glycolic and salicylic acids can keep oily skin matte throughout the day,' says Estee Williams, MD, a dermatologist in NYC. Other toners are for drier skin types and contain hydrating ingredients. 'Some newer formulations are even toner-serum hybrids with more substantial gel or lotion textures,' Dr. Kim explains.
                </ReadMore>
                </div> */}

        </div>
        </>
    );
  };
    
  export default Content;