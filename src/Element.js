import React from 'react';
import styled from 'styled-components';

const El = styled.div`
  padding: 2px;
  border: solid 1px;
`;

function Element(props) {
  const { number, symbol, name, atomic_mass, onMouseEnter } = props;

  return (
    <El onMouseEnter={ () => onMouseEnter({number, symbol, name, atomic_mass}) }>
      <div>{number}</div>
      <div><b>{symbol}</b></div>
      <div>{name}</div>
      <div>{atomic_mass.toFixed(3)}</div>
    </El>
  );
}

export default Element;
