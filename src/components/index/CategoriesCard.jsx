import React, { useContext, useEffect, useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import ProductContext from "../../contexts/ProductContext";
import { fetchCategories } from "../../services/Services";

function CategoriesCard() {
  const {
    allCategories,
    currentCategory,
    setCurrentCategory,
    setAllCategories,
    searchParams,
    setSearchParams,
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

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const categoryID = queryParams.get("catagoryId");
    setCurrentCategory(categoryID ? categoryID : 0);
  }, [searchParams]);

  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <div className="indexCategories">
      <div ref={ref} onMouseDown={onMouseDown} className="categoryCard">
        <div
          onClick={() => setSearchParams({ catagoryId: 0 })}
          className={`categoryName ${currentCategory == 0 && "activeCategory"}`}
        >
          Hepsi
        </div>
        {allCategories.map((item, index) => {
          return (
            <div
              onClick={() => setSearchParams({ catagoryId: item.id })}
              className={`categoryName ${
                currentCategory == item.id && "activeCategory"
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
