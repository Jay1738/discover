import React, { Component } from 'react'
import styled from 'styled-components';
import titleImagePink from '../svg/titleImagePink.png';
import titleImageBlue from '../svg/titleImageBlue.png';
import titleImageYellow from '../svg/titleImageYellow.png';
import CarouselComponent from './Carousel';

const CategoryContainer = styled.div`
  height:450px;
  width:100%;
  position:relative;
  display:flex;
  flex-direction:row;
  flex-wrap:no-wrap;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const TitleContainer = styled.div`
  display:flex;
  flex-direction:row;
  text-align:center;
  @media (max-width: 700px) {
    height:150px;
  }

`



const TitlePic = styled.img`
  height:400px;
  width:400px;
  @media (max-width: 1100px) {
    height:200px;
    width:200px;
  }
  @media (max-width: 700px) {
    height:200px;
    width:200px;
  }
`

const Title = styled.h1`
  font-size:70px;
  position:absolute;
  margin-left:2%;
  margin-top:1%;
  color:white;
  @media (max-width: 1200px) {
    font-size:45px;
  }
  @media (max-width: 700px) {
    font-size:40px;
  }
`

export default class Category extends Component {

  constructor(props) {
    super(props)

    this.state = {
      backgroundColor: '#EDECEC',
      source: titleImagePink
    }
  }

  componentDidMount() {
    if(this.props.bgColor === 'grey') {
      this.setState({backgroundColor: '#EDECEC'});
    } else {
      this.setState({backgroundColor: 'white'});
    }
    if(this.props.TitleImage === 'Blue') {
      this.setState({source: titleImageBlue});
    } else if(this.props.TitleImage === 'Yellow') {
      this.setState({source: titleImageYellow});
    } else {
      this.setState({source: titleImagePink});
    }
  }
    render() {
  return (
    <CategoryContainer style={{backgroundColor: this.state.backgroundColor}}>
      <TitleContainer><TitlePic src={this.state.source} alt='color image'/> <Title>{this.props.Title}</Title> </TitleContainer>
          <CarouselComponent data={this.props.Title}></CarouselComponent>
    </CategoryContainer>
  )
}
}
