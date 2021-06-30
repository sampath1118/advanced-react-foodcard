import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import MenuBar from "./MenuBar";

const allCatValues = [
  ...new Set(Menu.map((curElem) => curElem.category)),
  "all",
];

const App = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (cat) => {
    if (cat === "all") {
      return setItems(Menu);
    } else {
      const filteredItems = Menu.filter((curElem) => {
        return curElem.category === cat;
      });
      setItems(filteredItems);
    }
  };
  return (
    <>
      <h1 className="mt-5 text-center text-capitalize main-heading">
        order your favourite dish
      </h1>
      <hr />
      <MenuBar filterItem={filterItem} catName={allCatValues} />
      <MenuItems items={items} />
    </>
  );
};

export default App;
