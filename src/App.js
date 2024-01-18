import React, { useState } from "react";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Account from "./components/Account/Account";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const [orders, setOrders] = useState([]);

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  return (
    <>
      <Header orders={orders} onDelete={deleteOrder} />

      <Routes>
        <Route
          path="/"
          element={<MainPage orders={orders} setOrders={setOrders} />}
        />

        <Route path="/about-us" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
