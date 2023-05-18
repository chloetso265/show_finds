import "./FilterCategory.scss";
import { useState, useEffect } from "react";

function FilterCategory({ name, options, onFilter }) {
  const [open, setOpen] = useState(false);
  function clickOpen() {
    setOpen(!open);
  }

  return (
    <section className="filter-category">
      <div className="filter-category__header" onClick={clickOpen}>
        <h4 className="filter-category__title">{name}</h4>
      </div>
      <div
        className={`filter-category__content ${
          open === true ? "filter-category__content--open" : ""
        }`}
      >
        {options.map((option) => {
          return (
            <div className="filter-category__options">
              <input
                type="checkbox"
                id={option}
                name={option}
                onChange={() => onFilter(option)}
              />
              <label htmlFor={option} className="filter-category__option">
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FilterCategory;
