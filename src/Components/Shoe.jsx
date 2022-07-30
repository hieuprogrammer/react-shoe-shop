import React, { Component } from "react";

export default class Shoe extends Component {
    render() {
        let { image, name, shortDescription, price } = this.props.data;

        return <div className="col-3">
            <div className="card" style={{ width: "100% " }}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{shortDescription < 30 ? shortDescription : shortDescription.slice(0, 50) + "..."}</p>
                <p className="card-text">Price: ${price}.</p>
                <button
                    className="btn btn-primary"
                    onClick={() => {this.props.handleAddToCart(this.props.data)}}
                >Add to Cart</button>
            </div>
            </div>
        </div>
    }
}