import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text1: '🏆 CEH v11 Certified', text: ''},
  { text1: '🏆 ICSI UK CNSS Certified', text: ''},
  { text1: '🎮  6 Games', text: 'tested during closed/private betas', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>✨ personal accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {card.text1}
          </BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
