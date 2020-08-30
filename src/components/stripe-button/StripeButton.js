import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {

  //Convert dollars($) to cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HLnXaFG322qImU9wcrIhrgZ1xUvGvJ7K3LIZgROFOguYJBUU1W2zDP91MjVe4MrWTAs60fMfoY3vNYdVrLmRsq800QeRdzK3T';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
    label = "Pay Now"
    name = "CRWN Clothing Ltd."
    billingAddress
    shippingAddress
    image = "https://svgshare.com/i/CUz.svg"
    description = {`Your total price is $${price}`}
    amount = {priceForStripe}
    panelLabel = "Pay Now"
    token = {onToken}
    stripeKey = {publishableKey} />
  )
}
export default StripeButton;