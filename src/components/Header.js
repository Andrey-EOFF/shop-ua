import React, { useState } from "react";

import { FaShoppingBasket } from "react-icons/fa";
import Order from "./Order/Order";

const showOrders = (props) => {
  let summa = 0;

  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Всього: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="shop_cart_empty">
      <h2>Ви ще не обрали жодного товару!</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div className="header">
        <span className="logo">Home UA</span>
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-item">Про нас</li>
            <li className="nav-item">Контакти</li>
            <li className="nav-item">Кабінет</li>
          </ul>
          <FaShoppingBasket
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`shop_card_button ${cartOpen && "active"}`}
          />
          {cartOpen && (
            <div className="shop_cart">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </div>
      </div>
      <div className="presentation"></div>
    </header>
  );
}

// props.orders.map((el) => (
//   <Order key={el.id} item={el} />
// ))
