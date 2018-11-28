import React from 'react';
import styled from 'styled-components';
import {base} from './Pallete';

const Button = styled.button`
  display: inline-block;
  text-align: center;
  padding: 12px 25px;
  outline: none;
  font-size: 18px;
  background-color: ${base.hexa()};
  border-radius: 12px;
  margin-left: 10px;
  color: #fff;
  box-shadow: 1px 2px 7px rgba(0,0,0, .3);
  transition: box-shadow linear .2s;
  border: 4px solid ${base.hexa()};
  font-weight: 600;
  &:hover {
     cursor: pointer;
     box-shadow: 1px 2px 12px rgba(0,0,0, .1);
  }
`;

export default Button;