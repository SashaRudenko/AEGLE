import React from 'react';
import styled from 'styled-components';

type PageContainerProps = {
  bgColor: string;
  children: React.ReactNode;
};

const PageContainer = ({
  children,
  bgColor = '#000000',
}: PageContainerProps) => (
  <Container bgColor={bgColor}>
    <>{children}</>
  </Container>
);

const Container = styled.div<{ bgColor: string }>`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
`;

export default PageContainer;
