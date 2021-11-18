import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

   const scroll = (node, left) => {
     return node.scrollTo({ left, behavior: 'smooth' });
   }

  const handleClick = (e, i) => {
     e.preventDefault();

     if (carouselRef.current) {
       const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
       scroll(carouselRef.current, scrollLeft);
     }
  }

   const handleScroll = () => {
     if (carouselRef.current) {
       const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

       setActiveItem(index);
     }
   }

   // snap back to beginning of scroll when window is resized
   // avoids a bug where content is covered up if coming from smaller screen
   useEffect(() => {
     const handleResize = () => {
       scroll(carouselRef.current, 0);
     }

     window.addEventListener('resize', handleResize);
   }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle main>👋🏻 get to know me!</SectionTitle>
      <SectionText>
        Well, hello! I'm Aisyah (or some people prefer to call me Aisy or Aicha). I'm currently a 5th semester student at BINUS University majoring in Cyber Security. I'm experienced in analysis and providing creative solutions to complex problems.<br />
        <br />
        I have huge interest in lots of things. To name a few, I'd love to learn a lot about Information Security, UI/UX Design, Internet Governance, and also Artificial Intelligence. <br />
        <br />
        With my background in Model UN scene, I'm pretty much experienced in analysis and critical thinking. It was also what brought me into Cyber Security in the first place. I got the chance to learn a more in depth on how to secure a system as well as what kinds of threat that could happen. With this, by the mid of 2021, I'm successfully passed my CEH v11 Exam with a score of 88.<br />
        <br />
        Regarding my organizational-life, I used to be a part of AIESEC in BINUS for a year. I worked as their Staff of Network Maintenance and Outreach under External Relations Division. I've conducted market research, documented the Minutes of Meeting, wrote several monthly-themed articles, reach out to potential partners for future collaborations/sponsors, and interviewed some of our member-applicants.<br/>
        <br />
      </SectionText>

      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index == TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
              <CarouselItemTitle>
                {item.year}
                <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton 
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem}/>
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
