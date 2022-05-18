/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import Logo from '../images/Logo.image';
import LinkItem from '../components/LinkItem/LinkItem';
import ArrowUp from '../icons/ArrowUp.icon';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LinksBlock>
        <BlocksContainer>
          <InfoBlock>
            <Logo />
            <TextBlock>
              Lorem ipsum dolor sit amet,
              <br></br>
              consectetur adipiscing elit. Tortor
              <br></br>
              facilisi tincidunt nibh.
            </TextBlock>
            <TextEmail href="mailto: info@aeglehealthpartners.com">info@aeglehealthpartners.com </TextEmail>
          </InfoBlock>
          <ProductBlock>
            <TitleBlock>
              Product
            </TitleBlock>
            <LinkItem text="Log in" url="/" />
            <LinkItem text="Simulate Aegle" url="/" />
            <LinkItem text="What is Aegle" url="/" />
            <LinkItem text="How Aegle Works" url="/" />
          </ProductBlock>
          <CompanyBlock>
            <TitleBlock>
              Company
            </TitleBlock>
            <LinkItem text="Our Story" url="/" />
            <LinkItem text="Aegle Team" url="/" />
            <LinkItem text="Careers" url="/" />
            <LinkItem text="Support" url="/" />
            <LinkItem text="Contact Us" url="/" />
          </CompanyBlock>
          <GeneralConditonsBlock>
            <TitleBlock>
              General Conditions
            </TitleBlock>
            <LinkItem text="Privacy Policy" url="/" />
            <LinkItem text="Terms & Conditions" url="/" />
            <LinkItem text="Cookies Management" url="/" />
          </GeneralConditonsBlock>
        </BlocksContainer>
      </LinksBlock>
      <Line></Line>
      <BottomContainer>
        <BottomBlock>
          <BottomText>
            © 2021 Aegle Health Partners
          </BottomText>
          <BottomText>
            4250 N Fairfax Dr, Ste 600, Arlington, VA 22203
          </BottomText>
        </BottomBlock>
      </BottomContainer>
      <ArrowUpBlock>
        <a href="#top"><ArrowUp /></a>
      </ArrowUpBlock>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 490px;
  background: #0e4656;
  position: relative;
`;

const LinksBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const BlocksContainer = styled.div`
  display: flex;
  align-items: space-between;
  gap: 100px;
  padding-left: 150px;
  padding-right: 150px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 80px;
`;

const TextBlock = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
`;

const TextEmail = styled.a`
  font-weight: 600;
  font-size: 18px;
  line-height: 123.5%;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const ProductBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CompanyBlock = styled(ProductBlock)`
  text-decoration: inherit;
`;

const GeneralConditonsBlock = styled(ProductBlock)`
  text-decoration: inherit;
`;

const TitleBlock = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

const Line = styled.p`
  margin-top: 70px;
  color: rgba(255, 255, 255, 0.3);
  width: 70%;
  height: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin: 70px auto;
`;

const ArrowUpBlock = styled.div`
  position: absolute;
  right: 80px;
  bottom: 400px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding-left: 150px;
  padding-right: 150px;
`;

const BottomText = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.5);
`;

export default Footer;
