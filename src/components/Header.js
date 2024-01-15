import React, { useState } from "react";

import { FaShoppingBasket } from "react-icons/fa";

export default function Header() {
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
          <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop_card_button ${cartOpen && 'active'}`} />
          {cartOpen && (
            <div className="shop_cart"></div>
          )}
        </div>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
