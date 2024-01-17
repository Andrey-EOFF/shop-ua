import React, { useEffect, useRef } from "react";
import styles from "./ShowModal.module.css";
import { FiHeart } from "react-icons/fi";

const ShowModal = ({ item, onShowModal, onAdd }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onShowModal();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onShowModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onShowModal]);

  return (
    <div id="showModalItem" className={styles.showModalItem}>
      <div ref={modalRef} className={styles.modal_product}>
        <img
          src={"./img/" + item.img}
          alt="Product"
          width="300px"
          height="300px"
          className={styles.product_img}
          onClick={() => onShowModal(item)}
        />
        <div className="product_card_options">
          <h2 className={styles.product_title}>{item.title}</h2>
          <p className={styles.product_desc}>{item.desc}</p>
          <p className={styles.product_category}>{item.category}</p>
          <span className={styles.product_price}>{item.price} $</span>
        </div>
        <FiHeart
          className={styles.product_add_card}
          onClick={() => onAdd(item)}
        />
      </div>
    </div>
  );
};

export default ShowModal;

// CLASS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// import React, { Component } from "react";
// import styles from "./ShowModal.module.css";
// import { FiHeart } from "react-icons/fi";

// export class ShowModal extends Component {
//   componentDidMount() {
//     document.addEventListener("mousedown", this.handleClickOutside);
//     document.addEventListener("keydown", this.handleEscKey);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("mousedown", this.handleClickOutside);
//     document.removeEventListener("keydown", this.handleEscKey);
//   }

//   handleClickOutside = (event) => {
//     const modal = document.getElementById("showModalItem");
//     if (modal && modal.contains(event.target)) {
//       this.props.onShowModal();
//       // закриваємо модалку, якщо клік відбувається за її межами
//     }
//     if (modal && modal.contains(event.target)) {
//       this.props.onShowModal();
//       // закриваємо модалку, якщо клік відбувається за її межами
//     }
//   };

//   handleEscKey = (event) => {
//     if (event.key === "Escape") {
//       this.props.onShowModal(); // закриваємо модалку при натисканні на клавішу "ESC"
//     }
//   };

//   render() {
//     return (
//       <div id="showModalItem" className={styles.showModalItem}>
//         <div className={styles.modal_product}>
//           <img
//             src={"./img/" + this.props.item.img}
//             alt="Product"
//             width="300px"
//             height="300px"
//             className={styles.product_img}
//             onClick={() => this.props.onShowModal(this.props.item)}
//           />
//           <div className="product_card_options">
//             <h2 className={styles.product_title}>{this.props.item.title}</h2>
//             <p className={styles.product_desc}>{this.props.item.desc}</p>
//             <p className={styles.product_category}>
//               {this.props.item.category}
//             </p>
//             <span className={styles.product_price}>
//               {this.props.item.price} $
//             </span>
//           </div>
//           <FiHeart
//             className={styles.product_add_card}
//             onClick={() => this.props.onAdd(this.props.item)}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default ShowModal;
