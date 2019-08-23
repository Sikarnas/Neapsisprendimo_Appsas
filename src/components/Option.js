import React from "react";

const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>
    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOptionSingle(props.optionText);
      }}
    >
      <i class="trash alternate outline icon" />
    </button>
  </div>
);

export default Option;
