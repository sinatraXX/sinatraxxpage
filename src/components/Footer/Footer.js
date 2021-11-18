import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="https://api.whatsapp.com/send?phone=6281314925283">Reach me on WhatsApp!</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:aisyah.ramadhania@binus.ac.id">aisyah.ramadhania@binus.ac.id</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with ❤️ by Me. <br/>Design inspired by JavaScript Mastery.</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/sinatraXX">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/aisyah-ramadhania/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://medium.com/@kxfein">
            <AiFillMediumSquare size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/aichakoenc/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
