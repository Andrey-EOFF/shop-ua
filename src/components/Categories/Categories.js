import React from "react";
import styles from "./Categories.module.css";

const Categories = ({ chooseCategory }) => {
  const categories = [
    {
      key: "all",
      name: "Всі",
    },
    {
      key: "Furniture",
      name: "Меблі",
    },
    {
      key: "Kitchenware",
      name: "Кухонні прилади",
    },
    {
      key: "Bedding",
      name: "Постільні прилади",
    },
    {
      key: "Lighting",
      name: "Освітлення",
    },
    {
      key: "Hygiene",
      name: "Гігієна",
    },
    {
      key: "MedicalSupplies",
      name: "Медичні товари",
    },
    {
      key: "BeautyCare",
      name: "Краса та догляд",
    },
    {
      key: "HouseholdItems",
      name: "Побутові товари",
    },
    {
      key: "SportsAndRecreation",
      name: "Спорт та відпочинок",
    },
  ];

  return (
    <div className={styles.categories}>
      {categories.map((el) => (
        <div
          className={styles.categories_filter}
          key={el.key}
          onClick={() => chooseCategory(el.name)}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;




// CLASS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// import React, { Component } from "react";
// import styles from "./Categories.module.css";

// export class Categories extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       categories: [
//         {
//           key: "all",
//           name: "Всі",
//         },
//         {
//           key: "Furniture",
//           name: "Меблі",
//         },
//         {
//           key: "Kitchenware",
//           name: "Кухонні прилади",
//         },
//         {
//           key: "Bedding",
//           name: "Постільні прилади",
//         },
//         {
//           key: "Lighting",
//           name: "Освітлення",
//         },
//         {
//           key: "Hygiene",
//           name: "Гігієна",
//         },
//         {
//           key: "MedicalSupplies",
//           name: "Медичні товари",
//         },
//         {
//           key: "BeautyCare",
//           name: "Краса та догляд",
//         },
//         {
//           key: "HouseholdItems",
//           name: "Побутові товари",
//         },
//         {
//           key: "SportsAndRecreation",
//           name: "Спорт та відпочинок",
//         },
//       ],
//     };
//   }
//   render() {
//     return (
//       <div className={styles.categories}>
//         {this.state.categories.map((el) => (
//           <div
//             className={styles.categories_filter}
//             key={el.key}
//             onClick={() => this.props.chooseCategory(el.name)}
//           >
//             {el.name}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Categories;
