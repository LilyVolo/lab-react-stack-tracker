import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";

function HomePage(props) {
  const [companie, setCompanieItem]= useState(props.companies)

  return (
    <div>

      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      {companie.map(el => {
        console.log(el)
        return  (
          <li key={el.id}>
            <img src={el.logo} style={{width: '5rem'}} alt="" />
          <Link to={`/company/${el.slug}`}>{el.name} </Link>
        </li>
          ) 


      })}
    </div>
  );
}

export default HomePage;
