import React ,{useState} from "react";

function CategoryFilter({CATEGORIES ,selectCategory,setSelectCategory}) {
 
  // const [btn , setBtn]= useState('');
 
  function handleClick(e){
    setSelectCategory(e.target.value)  
    // handletSelectCategory(e.target.value)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
{
  CATEGORIES.map((category) => (
    <button 
    key={category} 
    className={ selectCategory === category  ? "selected":null}
    onClick={handleClick} 
    value={category} 
    > {category} </button>
  )) 
}
</div>
  );
}
export default CategoryFilter;