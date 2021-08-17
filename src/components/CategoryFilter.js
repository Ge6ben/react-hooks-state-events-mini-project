import React from "react";

function CategoryFilter({ categories, selectCategory, setSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          className={category === selectCategory ? "selected" : null}
          key={category}
           onClick={() => setSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;
