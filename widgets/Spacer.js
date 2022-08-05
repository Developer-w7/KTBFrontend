import React from 'react';

import styled from 'styled-components';


const SpacerConatiner = styled.div`
 
  display:"block";
  width:${props => props.width ? props.width : "5px"};
  height:${props => props.height ? props.height : "5px"};


`

const Spacer = (props) => (
    <>
        <SpacerConatiner height={props.height} width={props.width}/>
    </>
);

export default Spacer;
