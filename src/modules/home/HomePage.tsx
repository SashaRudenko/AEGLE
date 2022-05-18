import React from 'react';
import styled from 'styled-components';
import Button from '../../common/components/Button/Button';
import LinkItem from '../../common/components/LinkItem/LinkItem';
import CenterBlock from './CenterBlock';
import Graph from './assets/graph_homepage.png';
import MainBlock from './MainBlock';

const HomePage: React.FC = () => {
  const handleContact = () => {};

  return (
    <HomeContainer>
      <HeadContainer>
        <TwoSideContainer>
          <LeftHeadContainer>
            <LeftHeadText>
              Stop-loss reinsurance hasn’t
              <br></br>
              changed in decades.
              <br></br>
              We are fixing that.
            </LeftHeadText>
            <LeftHeadBottom>
              <Button
                label="Contact us"
                bgColor="#E1A945"
                borderColor="#E1A945"
                labelColor="#FFFFFF"
                onclick={handleContact}
              />
              <LinkItem url="/" text="Learn more" />
            </LeftHeadBottom>
          </LeftHeadContainer>
          <RightHeadContainer>
            <ImgContainer src={`${Graph}`} alt="" width="900" />
          </RightHeadContainer>
        </TwoSideContainer>
      </HeadContainer>
      <CenterBlockContainer>
        <CenterBlock />
        <Spacer />
        <MainBlock />
        <Spacer />
      </CenterBlockContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  background: #E5E5E5;
`;
const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15%;
  background: #0E4656;
  height: 600px;
  postion: relative;
`;

const TwoSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 150px;
`;

const LeftHeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 177px;
  max-width: 700px;
  padding-top: 100px;
  gap: 100px;
  `;

const RightHeadContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

const ImgContainer = styled.img`
  position: relative;
  max-width: 700px;
  max-height: auto;
`;

const LeftHeadText = styled.p`
  font-family: 'Rufina', san-serif;
  font-size: 48px;
  line-height: 59px;
  color: #FFFFFF;
`;

const LeftHeadBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 37px;
`;

const CenterBlockContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Spacer = styled.div`
  width: 100%;
  display: block;
  height: 20px;
`;

export default HomePage;
