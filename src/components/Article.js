import React from 'react';
import styled from 'styled-components';
import AnimatedButton from './button';

const AuthorContainer = styled.div`
  margin-top:5%;
  margin-left:10%;
  height:350px;
  width:350px;
  border-radius:50%;
  overflow:hidden;
  display:flex;
  @media (max-width: 1100px) {
    height:250px;
    width:250px;
    font-size:20px; 
    margin-top:10%;
  }
  @media (max-width: 700px) {
    height:150px;
    width:150px;
    font-size:10px;
    margin-top:0%;
  }
`

const Author = styled.img`
  height:350px;
  max-width:250px;
  @media (max-width: 1100px) {
    height:250px;
    max-width:200px;
  }
  @media (max-width: 700px) {
    height:150px;
    max-width:100px;
  }
`

const ArticleDescriptionContainer = styled.div`
  margin-top:5%;
  height:350px;
  width:500px;
  display:flex;
  flex-direction:column;
  margin-left:-2%;
  text-align:left;
  @media (max-width: 1100px) {
    margin-top:0%;
    height:350px;
    width:250px;
  }
  @media (max-width: 700px) {
    margin-top:-5%;
    height:350px;
    width:250px;
  }
`

const ArticleContainer = styled.div`
  width:850px;
  display:flex;
  flex-direction:row;
  @media (max-width: 1100px) {
    height:200px;
    width:650px;
    margin-top:2%;
  }
  @media (max-width: 700px) {
    height:200px;
    width:350px;
    margin-top:0%;
  }
`

const AuthTitle = styled.h1`
  @media (max-width: 1100px) {
    font-size:30px;
  }
  @media (max-width: 700px) {
    font-size:20px;
  }
`

const ArtTitle = styled.h2`
  @media (max-width: 1100px) {
    font-size:20px;
  }
  @media (max-width: 700px) {
    font-size:15px;
  }
`
const ArtDesc = styled.p`
  @media (max-width: 1100px) {
    font-size:15px;
  }
  @media (max-width: 700px) {
    font-size:10px;
  }
`

export default function Articles(array) {


  return (
    array.map( ({AuthorName, ArticleTitle, Source, Description}) => {

    return (
      <ArticleContainer>
        <AuthorContainer>
          <Author src={Source} alt='author'></Author>
        </AuthorContainer>
        <ArticleDescriptionContainer><AuthTitle>{AuthorName}</AuthTitle><ArtTitle>{ArticleTitle}</ArtTitle><ArtDesc>{Description}</ArtDesc>
          <AnimatedButton />
        </ArticleDescriptionContainer>
      </ArticleContainer>
    )
  })
)
}
