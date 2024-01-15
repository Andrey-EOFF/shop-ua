import React, { Component } from "react";
import styles from "./Order.module.css";

export class Order extends Component {
  render() {
    return (
      <div className={styles.order_item}>
        <img
          src={"./img/" + this.props.item.img}
          alt="Product"
          width="300px"
          height="300px"
          className={styles.product_img}
        />
        <div className="product_card_options">
          <h2 className={styles.product_title}>{this.props.item.title}</h2>
          <p className={styles.product_category}>{this.props.item.category}</p>
          <span className={styles.product_price}>
            {this.props.item.price} $
          </span>
        </div>
      </div>
    );
  }
}

export default Order;
