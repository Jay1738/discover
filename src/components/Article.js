import React from 'react';
import styled from 'styled-components';
import AnimatedButton from './button';
import author from '../svg/author.jpg';
import authPic from '../svg/authPic.jpg';

const AuthorContainer = styled.div`
  margin-top:5%;
  margin-left:10%;
  height:350px;
  width:350px;
  border-radius:50%;
  overflow:hidden;
  display:flex;
`

const Author = styled.img`
  height:350px;
  max-width:250px;
`

const ArticleDescriptionContainer = styled.div`
  margin-top:5%;
  height:350px;
  width:500px;
  display:flex;
  flex-direction:column;
  margin-left:-2%;
  text-align:left;
`

const ArticleContainer = styled.div`
  width:850px;
  display:flex;
  flex-direction:row;
`

export default function Articles(array) {

  const ArticleDataHistory = [
    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: author,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },

    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: author,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },

    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: author,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },

    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: author,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },
  ]

  const ArticleDataArt = [
    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: authPic,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },

    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: authPic,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },

    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: authPic,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },

    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: authPic,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },
  ]

  const ArticleDataScience = [
    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: author,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },

    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: author,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },

    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: author,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },

    {
        AuthorName: 'Dr.Jennifer Houston',
        ArticleTitle: 'Origins of Democracy',
        Source: author,
        Description: 'Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.'
    },
  ]
  return (
    array.map( ({AuthorName, ArticleTitle, Source, Description}) => {

    return (
      <ArticleContainer>
        <AuthorContainer>
          <Author src={Source} alt='author'></Author>
        </AuthorContainer>
        <ArticleDescriptionContainer><h1>{ArticleTitle}</h1><h2>{ArticleTitle}</h2><p>{Description}</p>
          <AnimatedButton />
        </ArticleDescriptionContainer>
      </ArticleContainer>
    )
  })
)
}
