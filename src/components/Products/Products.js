import React from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";

const Products = ({ items, onAdd, onShowModal }) => {
  return (
    <main className={styles.products}>
      {items.map((el) => (
        <Product
          key={el.id}
          item={el}
          onAdd={onAdd}
          onShowModalProduct={onShowModal}
        />
      ))}
    </main>
  );
};

export default Products;


// CLASS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// import React, { Component } from "react";
// import Product from "../Product/Product";
// import styles from "./Products.module.css";

// export class Products extends Component {
//   render() {
//     return (
//       <main className={styles.products}>
//         {this.props.items.map((el) => (
//           <Product
//             key={el.id}
//             item={el}
//             onAdd={this.props.onAdd}
//             onShowModalProduct={this.props.onShowModal}
//           />
//         ))}
//       </main>
//     );
//   }
// }

// export default Products;
