import React from 'react';
import styled from 'styled-components';

const El = styled.div`
  padding: 2px;
  border: solid 1px;
`;

function Element(props) {
  const { number, symbol, name, atomic_mass } = props;

  return (
    <El className="element col">
      <div className="row">{number}</div>
      <div className="row"><b>{symbol}</b></div>
      <div className="row">{name}</div>
      <div className="row">{atomic_mass.toFixed(3)}</div>
    </El>
  );
}

export default Element;
