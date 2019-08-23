import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Tavo pasirinkimai:</h3>
      <button
        onClick={props.handleDeleteOptions}
        className="button button--link"
      >
        Ištrinti visus
      </button>
    </div>
    <div>
      {props.options.length === 0 && (
        <p className="widget-message">Pridėk pasirinkimą</p>
      )}
      {props.options.map((option, index) => (
        <Option
          optionText={option}
          key={option}
          count={index + 1}
          handleDeleteOptionSingle={props.handleDeleteOptionSingle}
        />
      ))}
    </div>
  </div>
);

export default Options;
