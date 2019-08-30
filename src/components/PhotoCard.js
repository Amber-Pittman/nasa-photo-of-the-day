import React from 'react';
import styled from "styled-components";


const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #e6e6e6;
`;

const StyledH2 = styled.h2`
  margin: 0 0 1.2em 0;
  padding-top: 0.5em;
  text-align: center;
  font-size: 8vw;
  background: -webkit-linear-gradient(#3d0099, #751aff, #f0e6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledH3 = styled.h3`
  font-size: 4vw;
  display: flex;
  justify-content: center;
  color: #751aff;
`;

const StyledImage = styled.img`
  width: 60%;
  margin-left: 20%;
  margin-right: 20%
  border-radius: 25px;
`;

const StyledPhotoDate = styled.p`
  margin: 3% auto;
  font-weight: 700;
  font-size: 3vw;
  display: flex;
  justify-content: center;
  color: #ac00e6;
`;

const StyledP = styled.p`
  font-size: 1.2em;
  margin: 5% 20%;
  width: 60%;
  line-height: 1.25;
`;

function PhotoCard(props) {
    console.log(props);
    return (
        <StyledContainer>
            <StyledH2> {props.title} </StyledH2>
            <StyledImage src={props.url} alt="" data-pin-nopin="true"></StyledImage>
            <StyledPhotoDate>{props.date}</StyledPhotoDate>
            <StyledH3>Tell Me More</StyledH3>
            <StyledP> {props.explanation} </StyledP>
        </StyledContainer>
    );
}

export default PhotoCard;