import React from 'react';

function Element(props) {
  const { atomic, symbol, name, weight } = props;

  return (
    <div className="element col">
      <div className="row">{atomic}</div>
      <div className="row"><b>{symbol}</b></div>
      <div className="row">{name}</div>
      <div className="row">{weight}</div>
    </div>
  );
}

export default Element;