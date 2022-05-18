import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import LinkItem from '../components/LinkItem/LinkItem';
import Logo from '../images/Logo.image';

const Header: React.FC = () => {
  const handleContactUs = () => {};

  const handleLogin = () => {};

  return (
    <HeaderContainer id="top">
      <HeaderItems>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <MenuContainer>
          <MenuLink>
            <LinkItem url="/what-is-aegle" text="What is Aegle" />
          </MenuLink>
          <MenuLink>
            <LinkItem url="/how-aegle-works" text="How Aegle Works" />
          </MenuLink>
          <MenuLink>
            <LinkItem url="/simulate-aegle" text="Simulate Aegle" />
          </MenuLink>
          <MenuLink>
            <LinkItem url="/about-aegle" text="About Aegle &or;" />
          </MenuLink>
        </MenuContainer>
        <UserContainer>
          <ContactUs type="submit" onClick={handleContactUs}>
            Contact Us
          </ContactUs>
          <Button
            label="Log in to Aegle"
            bgColor="#E1A945"
            borderColor="#E1A945"
            labelColor="#FFFFFF"
            onclick={handleLogin}
          />
        </UserContainer>
      </HeaderItems>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 122px;
  background: #0e4656;
  justify-content: center;
`;

const HeaderItems = styled.div`
  display: flex;
  align-items: space-between;
  gap: 108px;
  max-padding-left: 150px;
  max-padding-right: 150px;
`;

const LogoContainer = styled.div`
  text-decoration: none;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 47px;
`;

const MenuLink = styled.div`
  text-decoration: inherit;
`;

const ContactUs = styled.button`
  border: none;
  font-size: 18px;
  font-weight: 500px;
  color: #e1a945;
  background: transparent;
  cursor: pointer;
  max-margin-left: 300px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default Header;
