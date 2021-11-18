import Link from 'next/link';
import React from 'react';
import { AiFillCode, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <AiFillCode size="3rem" />
          <span> portfolio </span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>whoami</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
