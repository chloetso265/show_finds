import "./FilterCategory.scss";
// import Card from "../../components/Card/Card";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from "react";

function FilterCategory({ name, options, onFilter }) {
  const [open, setOpen] = useState(false);
  function clickOpen() {
    setOpen(!open);
  }

  return (
    <section className="filter-category">
      <div className="filter-category__header" onClick={clickOpen}>
        <h4>{name}</h4>
      </div>
      <div
        className={`filter-category__content ${
          open === true ? "filter-category__content--open" : ""
        }`}
      >
        {options.map((option) => {
          return (
            <div className="content">
              <input
                type="checkbox"
                id={option}
                name={option}
                onChange={() => onFilter(option)}
              />
              <label for={option}>{option}</label>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FilterCategory;
