import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        hi, my name is <br />
        Aisyah Ramadhania.
      </SectionTitle>
      <SectionText>
        I provide creative solutions to complex problems
      </SectionText>
      <Button onClick={() => window.location = "https://linktr.ee/aisykuncoro"}>reach me out!</Button>
    </LeftSection>
  </Section>
);

export default Hero;