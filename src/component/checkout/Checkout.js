import React from "react";
import Subtotal from "../subtotal/Subtotal";
import { useStateValue } from "../stateProvider/StateProvider";

import "./Checkout.css";
import CheckProduct from "../checkProduct/CheckProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        <div>
          <h1 className="checkout_title">Your Shopping Cart</h1>

          {/* <CheckProduct
            id="12233"
            title="This is a lorem 90 product that is never used to public top priopvide sercbjkj"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={1526.56}
            rating={5}
          />
          <CheckProduct
            id="12233"
            title="This is a lorem 90 product that is never used to public top priopvide sercbjkj"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={1526.56}
            rating={5}
          />
          <CheckProduct
            id="12233"
            title="This is a lorem 90 product that is never used to public top priopvide sercbjkj"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={1526.56}
            rating={5}
          /> */}

          {basket.map((item) => (
            <CheckProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/**CheckoutProduct */}
          {/**CheckoutProduct */}
          {/**CheckoutProduct */}
          {/**CheckoutProduct */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
