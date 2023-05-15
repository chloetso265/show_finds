import "./Filter.scss";
import FilterCategory from "../../components/FilterCategory/FilterCategory";
// import Card from "../../components/Card/Card";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from "react";
const locationsData = [
  "Arizona",
  "California",
  "Florida",
  "Georgia",
  "Illinois",
  "Maryland",
  "Michigan",
  "Nevada",
  "New York",
  "Oregon",
  "Tennessee",
  "Texas",
  "Utah",
  "Washington",
];

const genresData = [
  "Alternative",
  "Country",
  "Disco",
  "Electronic",
  "Funk",
  "Hip-Hop",
  "Indie",
  "Latin",
  "Pop",
  "R&B",
  "Rock",
];

function Filter({ filters, onFilter }) {
  function checkedOption(filterName) {
    if (filters.includes(filterName)) {
      onFilter(filters.filter((item) => item !== filterName));
    } else {
      onFilter([...filters, filterName]);
    }
  }

  //   console.log(filters);
  return (
    <section className="homepage__filter">
      <article className="homepage__filter-section">
        <p className="homepage__filter-title">Filter By:</p>
        <FilterCategory
          name={"Location"}
          options={locationsData}
          onFilter={checkedOption}
        />
        <FilterCategory
          name={"Genre"}
          options={genresData}
          onFilter={checkedOption}
        />
      </article>
    </section>
  );
}

export default Filter;
