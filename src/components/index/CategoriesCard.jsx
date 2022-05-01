import React, { useContext, useEffect } from "react";
import ProductContext from "../../contexts/ProductContext";
import { fetchCategories } from "../../services/Services";

function CategoriesCard() {
  const {
    allCategories,
    currentCategory,
    setCurrentCategory,
    setAllCategories,
  } = useContext(ProductContext);

  useEffect(() => {
    fetchCategories()
      .then((response) => {
        const categories = response.data;
        setAllCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="indexCategories">
      <div className="categoryCard">
        <div
          onClick={() => setCurrentCategory(0)}
          className={`categoryName ${
            currentCategory === 0 && "activeCategory"
          }`}
        >
          Hepsi
        </div>
        {allCategories.map((item, index) => {
          return (
            <div
              onClick={() => setCurrentCategory(item.id)}
              className={`categoryName ${
                currentCategory === item.id && "activeCategory"
              }`}
              key={index}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesCard;
