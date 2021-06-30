import React from "react";

const MenuBar = ({ filterItem, catName }) => {
  return (
    <>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          {catName.map((curElem, index) => {
            return (
              <button
                key={index}
                className="btn btn-warning text-capitalize"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuBar;
