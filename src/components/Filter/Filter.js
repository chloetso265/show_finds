import "./Filter.scss";
import FilterCategory from "../../components/FilterCategory/FilterCategory";
// import Card from "../../components/Card/Card";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from "react";
const locationsData = [
  "Alabama",
  "Arkansas",
  "Utah",
  "Illinois",
  "California",
  "Wisconsin",
  "Florida",
];

const genresData = [
  "Pop",
  "Rock",
  "Indie",
  "Alternative",
  "Country",
  "Dubstep",
  "Hip-Hop",
  "Funk",
  "Disco",
];

function Filter({ filters, onFilter }) {
  function checkedOption(filterName) {
    if (filters.includes(filterName)) {
      onFilter(filters.filter((item) => item !== filterName));
    } else {
      onFilter([...filters, filterName]);
    }
  }

  console.log(filters);
  return (
    <section className="showpage">
      <article className="homepage__filter">
        <FilterCategory
          name={"Location"}
          options={locationsData}
          onFilter={checkedOption}
        />
      </article>
    </section>
  );
}

export default Filter;
