import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AnimatedButton from './button';
import Articles from './Article';
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
            <Carousel showArrows={false}>
              {Articles()}
            </Carousel>
          </div>
        );
    }
}
