import React from "react";

const MenuItems = (props) => {
  return (
    <>
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-4">
              {props.items.map((elem) => {
                const { id, name, image, description, price } = elem;
                return (
                  <div
                    className="Item1 col-12 col-md-6 col-lg-6 col-xl-4 my-4"
                    key={id}
                  >
                    <div className="row Item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt="itempic" className="img-fluid" />
                      </div>
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title py-4">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between align-items-center">
                            <h2>Price : {price}</h2>
                            <button className="btn btn-primary">
                              Order Now
                            </button>
                          </div>
                          <p>*prices may vary for user to user</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
