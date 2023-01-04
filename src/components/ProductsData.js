import { Component } from "react";
import './ProductsStyle.css'


class ProductsData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className='pro-text'>
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className='img-pro'>
            <img src={this.props.img1} alt="img" />
            <img src={this.props.img2} alt="img" />

            </div>
        </div>
        )
    }
}

export default ProductsData