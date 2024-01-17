import React, { useState, useRef, useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Order from "./Order/Order";

const ShowOrders = ({ orders, onDelete }) => {
  let summa = 0;

  orders.forEach((el) => (summa += Number.parseFloat(el.price)));

  return (
    <div>
      {orders.map((el) => (
        <Order onDelete={onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Всього: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const ShowNothing = () => {
  return (
    <div className="shop_cart_empty">
      <h2>Ви ще не обрали жодного товару!</h2>
    </div>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  const handleCloseCart = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setCartOpen(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseCart);
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("mousedown", handleCloseCart);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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
            onClick={handleCartClick}
            className={`shop_card_button ${cartOpen && "active"}`}
          />
          {cartOpen && (
            <div ref={cartRef} className="shop_cart">
              {props.orders.length > 0 ? (
                <ShowOrders orders={props.orders} onDelete={props.onDelete} />
              ) : (
                <ShowNothing />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
