import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AnimatedButton from './button';
import author from '../svg/author.jpg';
import styled from 'styled-components';
import './carousel.css';

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

export default class slideCarousel extends Component {
    render() {
        return (
          <div className="carousel-wrapper">
            <Carousel showArrows={false} autoPlay={true}>
              <ArticleContainer>
                <AuthorContainer>
                  <Author src={author} alt='author'></Author>
                </AuthorContainer>
                <ArticleDescriptionContainer><h1>Dr.Jennifer Houston</h1><h2>Origins of Democracy</h2><p>Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.</p>
                  <AnimatedButton />
                </ArticleDescriptionContainer>
              </ArticleContainer>

              <ArticleContainer>
                <AuthorContainer>
                  <Author src={author} alt='author'></Author>
                </AuthorContainer>
                <ArticleDescriptionContainer><h1>Dr.Jennifer Houston</h1><h2>Origins of Democracy</h2><p>Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.</p>
                  <AnimatedButton />
                </ArticleDescriptionContainer>
              </ArticleContainer>

              <ArticleContainer>
                <AuthorContainer>
                  <Author src={author} alt='author'></Author>
                </AuthorContainer>
                <ArticleDescriptionContainer><h1>Dr.Jennifer Houston</h1><h2>Origins of Democracy</h2><p>Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.</p>
                  <AnimatedButton />
                </ArticleDescriptionContainer>
              </ArticleContainer>

              <ArticleContainer>
                <AuthorContainer>
                  <Author src={author} alt='author'></Author>
                </AuthorContainer>
                <ArticleDescriptionContainer><h1>Dr.Jennifer Houston</h1><h2>Origins of Democracy</h2><p>Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.</p>
                  <AnimatedButton />
                </ArticleDescriptionContainer>
              </ArticleContainer>

              <ArticleContainer>
                <AuthorContainer>
                  <Author src={author} alt='author'></Author>
                </AuthorContainer>
                <ArticleDescriptionContainer><h1>Dr.Jennifer Houston</h1><h2>Origins of Democracy</h2><p>Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.</p>
                  <AnimatedButton />
                </ArticleDescriptionContainer>
              </ArticleContainer>
            </Carousel>
          </div>
        );
    }
}
