import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledH2 = styled.h2`
  margin: 1.6em;
  text-align: center;
  font-size: 4.8em;
`;

const StyledImage = styled.img`
  width: 75%;
  margin: 0 auto;
  border-radius: 25px;
  display: flex;
  justify-content: center;
`;

const StyledPhotoDate = styled.p``;

const StyledP = styled.p``;

function PhotoCard(props) {
    console.log(props);
    return (
        <StyledContainer>
            <StyledH2> {props.title} </StyledH2>
            <StyledImage src={props.url} alt="" data-pin-nopin="true"></StyledImage>
            <StyledPhotoDate>{props.date}</StyledPhotoDate>
            <StyledP> {props.explanation} </StyledP>
        </StyledContainer>
    );
}

export default PhotoCard;