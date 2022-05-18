import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  bgColor: string;
  borderColor: string;
  labelColor: string;
  label: string | JSX.Element;
  onclick: () => void;
};

const Button = ({
  label,
  labelColor = '#ffffff',
  bgColor = '#E1A945',
  borderColor = 'none',
  onclick,
}: ButtonProps) => {
  return (
    <ButtonItem
      labelColor={labelColor}
      bgColor={bgColor}
      borderColor={borderColor}
      type="submit"
      onClick={onclick}
    >
      {label && label}
    </ButtonItem>
  );
};

const ButtonItem = styled.button<{
  borderColor?: string;
  bgColor?: string;
  labelColor: string;
}>`
  color: ${(props) => (props.labelColor ? props.labelColor : '#ffffff')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  border-color: ${(props) => (props.borderColor ? `${props.borderColor} !important` : 'none')};
  border-radius: 39px;
  padding: 20px 30px;
  border: 2px solid;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
