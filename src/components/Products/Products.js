import React, { Component } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";

export class Products extends Component {
  render() {
    return (
      <main className={styles.products}>
        {this.props.items.map((el) => (
          <Product key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}

export default Products;
