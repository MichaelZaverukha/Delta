import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyles';

export default function Carousel() {
   const [sliderRef, setSliderRef] = useState(null)
  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <Row justify="space-between" margin="1rem" wrap="wrap">
         <Heading width="auto" inverse>Find more about us</Heading>
         <ButtonContainer>
            <IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
                  <FaArrowLeft onClick={sliderRef?.slickPrev} />
						<FaArrowRight onClick={sliderRef?.slickNext} />
            </IconContext.Provider>
         </ButtonContainer>
      </Row>
      <ReviewSlider {...sliderSettings} ref = {setSliderRef}>
         {data.map((el,index) => (
            <ImageWrapper key={index}>
                  <CarouselImage src={el.image} />
						<TextWrapper size="1.1rem" margin="0.9rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.9rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
						<CardButton>Learn More</CardButton>
            </ImageWrapper>
         ))}
      </ReviewSlider>
    </Section>
  )
}
