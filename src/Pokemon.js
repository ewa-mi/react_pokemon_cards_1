import React from "react";
import "./Pokemon.css";

export default function Pokemon(props) {
  return (
    <div className="element">
      <h2 className="headingName">Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
      <p>Abilities:</p>
      <ul>
        {props.abilities.map((ability) => {
          return <li>{ability}</li>;
        })}
      </ul>
      <button className="moreButton">
        <a class="moreButton:hover" target="_blank" rel="nofollow noopener">
          More
        </a>
      </button>
    </div>
  );
}
