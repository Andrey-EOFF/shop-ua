import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import homeProducts from "./productsData";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import ShowModal from "./components/ShowModal/ShowModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: homeProducts,
      showModal: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowModal = this.onShowModal.bind(this);
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

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  chooseCategory(category) {
    if (category === "Всі") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  onShowModal(item) {
    this.setState({ fullItem: item });
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Products
          items={this.state.currentItems}
          onAdd={this.addToOrder}
          onShowModal={this.onShowModal}
        />

        {this.state.showModal && (
          <ShowModal
            onShowModal={this.onShowModal}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
