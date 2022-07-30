import React, { Component } from "react";
import { shoes } from "../data/data.js";
import Shoe from "./Shoe";
import Cart from "./Cart";

export default class Home extends Component {
    state = {
        shoes: shoes,
        cart: []
    };

    renderShoes = () => {
        return this.state.shoes.map((shoe) => {
            return (
                <Shoe
                    handleAddToCart = {this.handleAddToCart}
                    data = {shoe} 
                    key = {shoe.id}
                    
                />
            )
        });
    };

    handleAddToCart = (cartItem) => {
        // let cartClone = [...this.state.cart];
        // cartClone.push(cartItem);
        // let cartClone = [...this.state.cart, cartItem];
        // this.setState({ cart: cartClone });

        // Scenario 1: Cart item with ID doesn't exist in cart => create new object.
        // Scenario 2: Cart item with ID already exists in cart => quantity++ based on cart[index].
        let index = this.state.cart.findIndex((item) => {
            return item.id === cartItem.id
        });
        let cartClone = [...this.state.cart];
        if (index === -1) {
            let newCartItem = { ...cartItem, quantity: 1 };            
            cartClone.push(newCartItem);
        } else {
            cartClone[index].quantity++;
        }
        this.setState({ cart: cartClone });
    };

    handleRemoveCartItem = (id) => {
        let index = this.state.cart.findIndex((item) => {
            return (item.id === id)
        });

        if (index !== -1) {
            let cartClone = [...this.state.cart];
            cartClone.splice(index, 1);
            this.setState({ cart: cartClone });
        }
    };

    render() {
        return (
            <div className="container">
                <h1 className="display-1 text-center mb-4">Hieu's Shoe Shop</h1>
                {
                    this.state.cart.length > 0 && (
                        <Cart
                            cart={this.state.cart}
                            handleRemoveCartItem = {this.handleRemoveCartItem}
                        />
                    )
                }                
                <div className="row">{this.renderShoes()}</div>
            </div>
        );
    }
}