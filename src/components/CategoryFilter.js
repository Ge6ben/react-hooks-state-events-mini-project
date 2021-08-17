import React from "react";

function CategoryFilter({ CATEGORIES, selectCategory, setSelectCategory }) {
    return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        CATEGORIES.map((category) => (
        <button
          key={category}
          className={category === selectCategory ? "selected" : null}
          onClick={() => setSelectCategory(category)}
        >
          {"   "}
          {category}
          {"   "}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;
