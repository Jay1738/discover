import React from 'react'
import styled from 'styled-components';
import {ReactComponent as Top} from '../svg/topBG.svg';

const TopContainer = styled.div`
  position: relative;
  max-height:500px;
  height: 100%;
  width:100%;
  overflow: hidden;
`

const StyledOutlineBox = styled.div`
  border-style: solid;
  border-width: 5px;
  border-color: white;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  right:0;
  left:0;
  top:30%;
  max-height:250px;
  max-width: 900px;
  height: 100%;
  width:100%;
  text-align:center;
  line-height: 500%;
  @media (max-width: 700px) {
    max-height:50px;
    max-width: 200px;
  }
`

const Company = styled.h1`
  color:white;
  font-size:100px;
  margin-top:3%;
  @media (max-width: 700px) {
    font-size:20px;
    margin-top:-10%;
  }
`

const Slogan = styled.span`
  color:white;
  font-size:70px;
  @media (max-width: 700px) {
    display:none;
  }
`

export default function Banner() {
  return (
    <TopContainer>
      <Top />
      <StyledOutlineBox><Company>Discover<br></br><Slogan>A new way to learn</Slogan></Company></StyledOutlineBox>
    </TopContainer>
  )
}
