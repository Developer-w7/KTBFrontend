import React from 'react';

import styled from 'styled-components';


const ButtonWrap = styled.input`
 
display:inline-block;
padding:0.5em 3em;
// border:1px solid var(--input-border);
background-color:#5f8bed;
margin:0 0.3em 0.3em 0;
height:40px;
box-sizing: border-box;
text-decoration:none;
text-transform:uppercase;
font-family:'Roboto',sans-serif;
font-weight:normal;
font-size:14px;
color:#fff;
cursor:pointer;
text-align:center;
transition: all 0.15s;
  width:${props => props.width ? props.width : "100%"};
// :focus {

//     box-shadow: 0 0 0 1px hsla(var(--input-focus-h), var(--input-focus-s), calc(var(--input-focus-l) +
//             40%), 0.8);
//             outline: 1px solid transparent;
//   }

  :hover{
    color:#DDDDDD;
    border-color:#DDDDDD;
    }
    :active{
        color:#BBBBBB;
        border-color:#BBBBBB;
        }
`

const Button = (props) => (
    <>
        <ButtonWrap onClick={props.onClick} width={props.width} value={props.title?props.title:"submit"} type={props.type?props.type:"submit"}/>
    </>
);

export default Button;