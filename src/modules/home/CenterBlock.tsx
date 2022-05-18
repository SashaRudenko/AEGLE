import React from 'react';
import styled from 'styled-components';
import Button from '../../common/components/Button/Button';
import SpentMoney from '../../common/icons/MoneyBox.icon';
import Umbrella from '../../common/icons/Umbrella.icon';

const CenterBlock = () => {
  const handleLowerSpent = () => {};

  const handleMoneyBox = () => {};

  return (
    <BlockContainer>
      <Title>Aegle in a Nutshell</Title>
      <TextContent>
        Aegle is a next-generation replacement of traditional stop-loss
        reinsurance for
        <br></br>
        self-insured employers and other risk-bearing entities.
      </TextContent>
      <BoxesContainer>
        <Box>
          <SpentMoney />
          <BoxTitle>Lower Spend</BoxTitle>
          <BoxText>
            20%+ cumulative savings over 5 years
            <br></br>
            Typical first-year savings: 60-80%
          </BoxText>
          <Button
            label="Learn More"
            labelColor="#CE9531"
            bgColor="transparent"
            borderColor="#CE9531"
            onclick={handleLowerSpent}
          />
        </Box>
        <Box>
          <Umbrella />
          <BoxTitle>Better Coverage</BoxTitle>
          <BoxText>
            No lasers or exclusions
            <br></br>
            Eliminates deductibles
          </BoxText>
          <Button
            label="Learn More"
            labelColor="#CE9531"
            bgColor="transparent"
            borderColor="#CE9531"
            onclick={handleMoneyBox}
          />
        </Box>
      </BoxesContainer>
    </BlockContainer>
  );
};

const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 30px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  height: 722px;
  margin-top: -70px;
  gap: 10px;
`;

const Title = styled.h1`
  font-family: 'Rufina', serif;
  font-size: 48px;
  font-weight: 400;
  color: #0e4656;
`;

const TextContent = styled.h3`
  font-size: 24px;
  color: #6f6f6f;
  text-align: center;
`;

const BoxesContainer = styled.div`
  display: flex;
  margin-top: 70px;
  min-padding-left: 50px;
  min-padding-right: 50px;
  gap: 40px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fbeed5;
  border-radius: 10px;
  width: 350px;
  height: 300px;
  padding: 0 30px;
  gap: 14px;
`;

const BoxTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`;

const BoxText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #6f6f6f;
  margin-bottom: 35px;
`;

export default CenterBlock;
