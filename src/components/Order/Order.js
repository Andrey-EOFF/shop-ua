import React from "react";
import styles from "./Order.module.css";
import { FiTrash2 } from "react-icons/fi";

const Order = ({ item, onDelete }) => {
  return (
    <div className={styles.order_item}>
      <img
        src={"./img/" + item.img}
        alt="Product"
        width="300px"
        height="300px"
        className={styles.product_img}
      />
      <FiTrash2
        className={styles.delete_product}
        onClick={() => onDelete(item.id)}
      />
      <div className="product_card_options">
        <h2 className={styles.product_title}>{item.title}</h2>
        <p className={styles.product_category}>{item.category}</p>
        <span className={styles.product_price}>{item.price} $</span>
      </div>
    </div>
  );
};

export default Order;


// CLASS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// import React, { Component } from "react";
// import styles from "./Order.module.css";
// import { FiTrash2 } from "react-icons/fi";

// export class Order extends Component {
//   render() {
//     return (
//       <div className={styles.order_item}>
//         <img
//           src={"./img/" + this.props.item.img}
//           alt="Product"
//           width="300px"
//           height="300px"
//           className={styles.product_img}
//         />
//         <FiTrash2 className={styles.delete_product} onClick={() => this.props.onDelete(this.props.item.id)}/>
//         <div className="product_card_options">
//           <h2 className={styles.product_title}>{this.props.item.title}</h2>
//           <p className={styles.product_category}>{this.props.item.category}</p>
//           <span className={styles.product_price}>
//             {this.props.item.price} $
//           </span>
//         </div>
        
//       </div>
//     );
//   }
// }

// export default Order;
