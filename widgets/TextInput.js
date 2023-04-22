import { prototype } from 'events';
import React from 'react';

import styled from 'styled-components';


const TextField = styled.input`
 
  font-size: 14px;
  font-size: max(14px, .8em);
  font-family: inherit;
  padding: 0em 0.5em;
  background-color: #fff;
  height:${props => props.height? props.height : "45px"};
  border: 1px solid var(--input-border);
  border-radius: 4px;
  transition: 180ms box-shadow ease-in-out;
  width:${props => props.width ? props.width : "100%"};
  
:focus {

    box-shadow: 0 0 0 1px hsla(var(--input-focus-h), var(--input-focus-s), calc(var(--input-focus-l) +
            40%), 0.8);
            outline: 1px solid transparent;
  }
`

const TextInput = React.forwardRef((props, ref) => (
   
        <TextField name={props.name} value={props.value} onChange={(e)=>props.onChange(e)} ref={ref} placeholder={props.placeholder} width={props.width} height={props.height} type={props.type?props.type:"text"}/>
   
));

TextInput.displayName = 'TextInput';
export default TextInput;
