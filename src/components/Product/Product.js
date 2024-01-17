import React, { Component } from "react";
import styles from "./product.module.css";
import { FiHeart } from "react-icons/fi";

export class Product extends Component {
  render() {
    return (
      <div className={styles.product_item}>
        <img
          src={"./img/" + this.props.item.img}
          alt="Product"
          width="300px"
          height="300px"
          className={styles.product_img}
          onClick={() => this.props.onShowModalProduct(this.props.item)}
        />
        <div className="product_card_options">
          <h2 className={styles.product_title}>{this.props.item.title}</h2>
          <p className={styles.product_desc}>{this.props.item.desc}</p>
          <p className={styles.product_category}>{this.props.item.category}</p>
          <span className={styles.product_price}>
            {this.props.item.price} $
          </span>
        </div>
        <FiHeart
          className={styles.product_add_card}
          onClick={() => this.props.onAdd(this.props.item)}
        />
      </div>
    );
  }
}

export default Product;
