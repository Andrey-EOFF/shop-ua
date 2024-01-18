
import React, { useEffect, useState } from "react";
import homeProducts from "../productsData";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import ShowModal from "../components/ShowModal/ShowModal";


const MainPage = ({ orders, setOrders }) => {
  const [currentItems, setCurrentItems] = useState(homeProducts);
  const [showModal, setShowModal] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useEffect(() => {
    setCurrentItems(homeProducts);
  }, []);


  const addToOrder = (item) => {
    const isInArray = orders.some((el) => el.id === item.id);
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  const chooseCategory = (category) => {
    if (category === "Всі") {
      setCurrentItems(homeProducts);
      return;
    }
    setCurrentItems(homeProducts.filter((el) => el.category === category));
  };

  const onShowModal = (item) => {
    setFullItem(item);
    setShowModal(!showModal);
  };

  return (
    <>
      <Categories chooseCategory={chooseCategory} />
      <Products items={currentItems} onAdd={addToOrder} onShowModal={onShowModal} />
      {showModal && (
        <ShowModal onShowModal={onShowModal} onAdd={addToOrder} item={fullItem} />
      )}
    </>
  );
};

export default MainPage;
