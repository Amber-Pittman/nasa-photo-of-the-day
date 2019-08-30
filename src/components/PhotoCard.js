import React from 'react';
import styled from "styled-components";


const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: ghostwhite;
`;

const StyledH2 = styled.h2`
  margin: 0 0 1.2em 0;
  padding-top: 1.2em;
  text-align: center;
  font-size: 4.8em;
  background: -webkit-linear-gradient(#8533ff, #b380ff, #f0e6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledImage = styled.img`
  width: 60%;
  margin-left: 20%;
  margin-right: 20%
  border-radius: 25px;
  display: flex;
  justify-content: center;
`;

const StyledPhotoDate = styled.p`
  margin: 0 auto;
  font-weight: 700;
  font-size: 2.4em;
  display: flex;
  justify-content: center;
  color: #ac00e6;
`;

const StyledP = styled.p`
  font-size: 1.2em;
  margin-left: 20%;
  margin-right: 20%
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
            <StyledP> {props.explanation} </StyledP>
        </StyledContainer>
    );
}

export default PhotoCard;