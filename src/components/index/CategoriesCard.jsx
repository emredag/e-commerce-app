import React, { useContext, useEffect, useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import ProductContext from "../../contexts/ProductContext";
import { fetchCategories } from "../../services/Services";

function CategoriesCard() {
  const { allCategories, currentCategory, setSearchParams } =
    useContext(ProductContext);

  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <div className="indexCategories">
      <div ref={ref} onMouseDown={onMouseDown} className="categoryCard">
        <div
          onClick={() => setSearchParams({ catagoryId: 0 })}
          className={`categoryName ${
            currentCategory === 0 && "activeCategory"
          }`}
        >
          Hepsi
        </div>

        {allCategories.map((item, index) => {
          return (
            <div
              onClick={() => setSearchParams({ catagoryId: item.id })}
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
