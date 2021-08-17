import React ,{useState} from "react";

function CategoryFilter({CATEGORIES ,handletSelectCategory}) {
 
  const [btn , setBtn]= useState('');
 
  function handleClick(e){
    setBtn(e.target.value)  
    handletSelectCategory(e.target.value)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
{
  CATEGORIES.map((category) => (
    <button 
    key={category} 
    className={ btn === category  ? "selected":null}
    onClick={handleClick} 
    value={category} 
    > {category} </button>
  )) 
}
</div>
  );
}
export default CategoryFilter;