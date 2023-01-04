import { Component } from "react";
import './NewsHealth.css'


class NewsHealthData extends Component{
    render(){
        return(
            <div className={this.props.className}>
             <div className='img-news'>
            <img src={this.props.img1} alt="img" />
            </div>
            <div className='news-text'>
                <h2>{this.props.heading}</h2>
                {/* <p>{this.props.text}</p> */}
            </div>
        </div>
        )
    }
}

export default NewsHealthData 


// import React, {useState} from 'react'
// import useCollapse from 'react-collapsed'

// const NewsHealthData = ({item}) => {
//     const [isExpanded, setExpanded] = useState(false);
//     const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
//   return (
//       <>
//         <div>
//             <button
//                 {...getToggleProps({
//                 onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//                 })}
//             >
//                 {isExpanded ? 'Collapse' : 'Expand'}
//             </button>
//             <section {...getCollapseProps()}>Collapsed content 🙈</section>
//         </div>
//       </>
//   );
// };

// export default NewsHealthData