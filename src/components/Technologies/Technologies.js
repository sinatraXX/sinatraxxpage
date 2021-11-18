import React from 'react';
import { DiFirebase, DiPython, DiScrum, DiUikit, DiZend } from 'react-icons/di';
import { BiTerminal } from 'react-icons/bi'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle main>💪🏻 skills</SectionTitle>
    <SectionText>
      Throughout my activities in exploring a wide-range amount of computer science field, below I've listed several of my most-used tools as well as the tools that I'm experienced with.
    </SectionText>

    <List>
      <ListItem>
        <BiTerminal size="5rem"/>
        <ListContainer>
          <ListTitle>Security</ListTitle>
          <ListParagraph>
            Experienced with: <br />
            - Nmap (3.5/5) <br />
            - Wireshark (3.5/5) <br />
            - Metasploit (3.5/5)<br />
            - BurpSuite (3/5)<br />
            - Autopsy (3/5)
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPython size="5rem"/>
        <ListContainer>
          <ListTitle>Development</ListTitle>
          <ListParagraph>
            Experienced with: <br />
            - Python (4/5) <br />
            - HTML/CSS (3.5/5)<br />
            - JavaScript (2/5)<br />
            - C/C++ (2.5/5)<br />
            - Next.js (2/5)
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiUikit size="5rem"/>
        <ListContainer>
          <ListTitle>Visual Design</ListTitle>
          <ListParagraph>
            Experienced with: <br />
            - Figma (4/5)<br />
            - Lunacy (2/5)<br />
            - Canva (4.5/5)<br />
            - Adobe XD (3/5)<br />
            - VSCO (3.5/5)
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiScrum size="5rem"/>
        <ListContainer>
          <ListTitle>Organization</ListTitle>
          <ListParagraph>
            Experienced with: <br />
            - Google Suites (4/5)<br />
            - Notion (3/5)<br />
            - Leadership (3/5)<br />
            - Project Management (3/5)<br />
            - Research (3.5/5)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
