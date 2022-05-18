import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { JsxElement } from 'typescript';

type LinkItemProps = {
  url: string;
  text: string | JsxElement;
};

const LinkItem = ({ url = '/', text = '' } : LinkItemProps) => {
  return (
    <Link to={url}>
      <LinkText>{text}</LinkText>
    </Link>
  );
};

const LinkText = styled.div`
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
`;

export default LinkItem;
