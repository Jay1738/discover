import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Articles from './Article';
import './carousel.css';
import author from '../svg/author.jpg';
import authPic from '../svg/authPic.jpg';

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

export default class CarouselComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      type: [],
    }
  }

  componentDidMount() {
    if(this.props.data === 'History') {
      this.setState({type: ArticleDataHistory});
    } else if(this.props.data === 'Art') {
      this.setState({type: ArticleDataArt});
    } else {
      this.setState({type: ArticleDataScience});
    }
  }

    render() {
        return (
          <div className="carousel-wrapper">
            <Carousel showArrows={false}>
              {Articles(this.state.type)}
            </Carousel>
          </div>
        );
    }
}
