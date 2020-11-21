import React from 'react'
import './Checkout.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    
    const[{basket}] = useStateValue();

    return (
        <div className = "checkout">
            <div className = "checkout_left">
            <img className = "checkout_ad" src = " "/>

            {basket?.length == 0 ? (
                <div>
                <h2>Your Shopping Basket is Empty</h2>
                </div>
               ) : (
                    <div>
                        <h2 className = "checkout_title">Your Shopping Basket</h2>

                        {
                            basket.map(item => (
                             <CheckoutProduct
                             id = {item.id}
                             title = {item.title}
                             image = {item.image}
                             price = {item.price}
                             rating = {item.rating}             
                             />
                            ))

                        }
                    </div>
                )
            }
        </div>
        {basket.length > 0 && 
        <div className ="checkout_right">
            <h3><Subtotal/></h3>
        </div>
        }
    </div>
    )
}

export default Checkout
