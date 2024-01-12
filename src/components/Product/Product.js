import React, { Component } from "react";
import styles from "./product.module.css"

export class Product extends Component {
  render() {
      return (
          <div className={styles.product_item}>
              <img src={"./img/" + this.props.item.img} alt="Product" width="300px" height="300px" className={styles.product_img} />
              <h2 className={styles.product_title}>{this.props.item.title}</h2>
              <p className={styles.product_desc}>{this.props.item.desc}</p>
              <p className={styles.product_category}>{this.props.item.category}</p>
              <span className={styles.product_price}>{this.props.item.price} $</span>
              <div className={styles.product_add_card}>+</div>
          </div>
      );
  }
}

export default Product;
