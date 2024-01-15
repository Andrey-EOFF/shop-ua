import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import homeProducts from "./productsData";
import Products from "./components/Products/Products";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: homeProducts,
    };
    this.addToOrder = this.addToOrder.bind(this);
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Products items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
}

export default App;
