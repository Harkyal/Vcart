import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js'

function Checkout() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className='checkout'>
      <img className='checkout_ad' src='https://av.sc.com/in/content/images/bandhan-bank-credit-cards-banner.jpg' alt='' />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Cart is empty</h2>
          <p>You have no items in your basket. To buy one or more items, click "Add To Basket" next to the item.</p>
        </div>
      ) : (
        <div>
          <h2 className='checkout_title'> Your Shopping Cart </h2>

          {basket.map((item) => (

            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />



          ))}

        </div>
      )}


    </div>
  );
}

export default Checkout;
