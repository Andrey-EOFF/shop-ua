import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import homeProducts from "./productsData";
import Products from "./components/Products/Products";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: homeProducts,
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Products items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
