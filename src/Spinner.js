import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//default spinner message in case we forget to pass the prop message
Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
