import React from 'react';
import styled from 'styled-components';
import Element from './Element';

const Aside = styled.aside`
  padding: 0 25px 0 25px;
`;

const Properties = styled.div`
  padding: 0 25px 0 25px;
`;

const InfoAside = (props) => {
  const noop = () => null

  return (
    <Aside>
      <Element {...props} onMouseEnter={noop} />
      <Properties />
    </Aside>
  );
};

export default InfoAside;