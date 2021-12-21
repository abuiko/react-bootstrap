import React, { useState, useContext } from 'react';
import { Context } from "../Context"
import { Col, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom"
import styled from "styled-components";
import Amex from "../assets/icons/amex.png";
import American from "../assets/icons/american-express.png";
import Paypal from "../assets/icons/paypal.png";
import Visa from "../assets/icons/visa.png";
import CartItem from "../components/CartItem"

const Styles = styled.div`
    .container {
        padding: 5rem 0rem;
    }
    .cart {
        
        
        margin-top: 5rem;
       
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .total__area {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        
    }
    
    .bank-logos {
        display: flex;
        margin: 1rem 0rem;
        
    }
    .banks {
        margin-top: 1rem;
    }
   
    .b-logo {
        width: 50px;
        height: 50px;
        margin-right: 2rem;
    }
    .empty__bag {
        h2 {
            margin-bottom: 2rem;
        }
    }
    @media only screen and (max-width: 1000px) {
        .b-logo {
            width: 33px;
            height: 33px;
        }   
        .banks p {
            font-size: 0.8rem;
        }
        .total__area__wrapper {
            margin-top: 6rem;
        }
        .empty__bag {
           
            text-align: center;
        }
    }

    @media only screen and (max-width: 780px) {
        .cart {
            margin-top: 0rem;
        }
        
        
    }
    @media only screen and (max-width: 380px) {
        .cart {
            padding: 0rem 2rem;
        }
         .empty__bag {
             h2 {
                 font-size: 1.1rem;
             }
             p {
                 font-size: 0.8rem;
             }
             .sign__btn {
                 font-size: 0.7rem;
             }
             
             
         }
     }
`;


export const Basket = () => {
    const [buttonText, setButtonText] = useState("Place Order")
    const { cartItems, emptyCart } = useContext(Context)

    const cartElements = cartItems.map(item => <CartItem key={item.id} item={item} />)

    const prices = cartItems.map(item => item.price)
    const totalPrice = prices.reduce((a, b) => a + b, 0).toFixed(2)

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (

        <Styles>
            <div className="cart">
                <div className="container">
                    <Row>
                        {cartItems.length > 0 ?
                            <Col lg="8" md="12">
                                {cartElements}
                            </Col> :
                            <Col lg="8" md="12" className="empty__bag">


                                <h2>YOUR SHOPPING BAG IS EMPTY!</h2>
                                <p>Sign in/Become a member to save or access saved items in your shopping bag.</p>

                                <Link to="/user"><Button className="sign__btn" type="button" variant="outline-dark">Sign in/Become a member</Button></Link>
                            </Col>
                        }

                        <Col lg="4" md="12" className="total__area__wrapper">
                            <div className="total__area">
                                <p>Order Value</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div className="total__area">
                                <p>Shipping Cost</p>
                                <p>$0</p>
                            </div>
                            <hr />
                            <div className="total__area">
                                <h4>Total</h4>
                                <h4 id="total">${totalPrice}</h4>
                            </div>
                            <Button onClick={placeOrder} type="button" variant="secondary">{buttonText}</Button>
                            <div className="banks">
                                <p>We accept</p>
                                <div className="bank-logos">
                                    <Image src={American} className="b-logo" />
                                    <Image src={Visa} className="b-logo" />
                                    <Image src={Paypal} className="b-logo" />
                                    <Image src={Amex} className="b-logo" />

                                </div>
                                <p>The estimated tax will be confirmed once you added your shipping address in checkout.</p>
                            </div>

                        </Col>
                    </Row>

                </div>

            </div>

        </Styles>

    )
}
