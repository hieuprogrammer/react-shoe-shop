import React, { Component } from "react";

export default class Cart extends Component {
    renderCartItems = () => {
        return this.props.cart.map((cartItem) => {
            return (
                <tr key={cartItem.id}>
                    <td>{cartItem.id}</td>
                    <td>{cartItem.name}</td>
                    <td>${cartItem.price}</td>
                    <td>
                        <button className="btn btn-secondary">-</button>
                        <span className="mx-2">{cartItem.quantity}</span>
                        <button className="btn btn-warning">+</button>
                    </td>
                    <td>${cartItem.price * cartItem.quantity}</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => {this.props.handleRemoveCartItem(cartItem.id)}}
                        >Remove</button>
                    </td>
                    <td></td>
                    {/* <td><img src={cartItem.image} className="card-img-top img-thumbnail" alt="Shoe Photo"/></td> */}
                </tr>
            );
        });
    }

    render() {
        return <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub-total</th>
                        <th>Action</th>
                        {/* <th>Image</th> */}
                    </tr>
                </thead>
                <tbody>
                    {this.renderCartItems()}
                </tbody>
            </table>
        </div>
    }
}