import React from 'react';
import styled from 'styled-components';
import Button from '../../common/components/Button/Button';
import Charts from '../../common/icons/Charts';
import WhatIsAegle from './assets/what-is-Aegle.png';
import HowWorksAegle from './assets/how-aegle-works.png';
import SimulateAegle from './assets/simulate-aegle.png';

const MainBlock = () => {
  const handleWhatIsAegle = () => {};

  const handleHowWorks = () => {};

  const handleSimulateAegle = () => {};

  return (
    <BlockContainer>

      <RowContent>
        <RowLeftSide>
          <ImgContainer src={`${WhatIsAegle}`} alt="" width="auto" />
        </RowLeftSide>
        <RowRightSide>
          <Charts />
          <BlockTitle>What is Aegle and Who Aegle Covers</BlockTitle>
          <BlockText>
            Same product, less cost, no lasers; available
            <br></br>
            for self-insured employers, health plans,
            <br></br>
            and at-risk health systems
          </BlockText>
          <Button
            label="Learn More"
            labelColor="#0E4656"
            bgColor="transparent"
            borderColor="#0E4656"
            onclick={handleWhatIsAegle}
          />
        </RowRightSide>
      </RowContent>

      <RowContent>
        <RowRightSide>
          <Charts />
          <BlockTitle>How Aegle Works</BlockTitle>
          <BlockText>
            See an illustrative example
          </BlockText>
          <Button
            label="Learn More"
            labelColor="#0E4656"
            bgColor="transparent"
            borderColor="#0E4656"
            onclick={handleHowWorks}
          />
        </RowRightSide>
        <RowLeftSide>
          <ImgContainer src={`${HowWorksAegle}`} alt="" width="auto" />
        </RowLeftSide>
      </RowContent>

      <RowContent>
        <RowLeftSide>
          <ImgContainer src={`${SimulateAegle}`} alt="" width="auto" />
        </RowLeftSide>
        <RowRightSide>
          <Charts />
          <BlockTitle>Simulate Aegle</BlockTitle>
          <BlockText>
            We put our money where our mouth is:
            <br></br>
            see how much Aegle would save for a
            <br></br>
            typical company using our Simulator!
          </BlockText>
          <Button
            label="Learn More"
            labelColor="#0E4656"
            bgColor="transparent"
            borderColor="#0E4656"
            onclick={handleSimulateAegle}
          />
        </RowRightSide>
      </RowContent>

    </BlockContainer>
  );
};

const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 30px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  height: 1550px;
  padding-top: 120px;
  gap: 140px;
`;

const RowContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  padding: 0 30px
`;

const ImgContainer = styled.img`
  max-width: 400px;
  max-height: auto;
`;

const RowLeftSide = styled.div`
  display: flex;
  justify-content: center;
`;

const RowRightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
  justify-content: center;
  align-items: start;
`;

const BlockTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`;

const BlockText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #808080;
  margin-bottom: -20px;
`;

export default MainBlock;
