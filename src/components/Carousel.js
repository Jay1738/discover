import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import Articles from './Article';
import './carousel.css';


export default class CarouselComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      type: [],

      ArticleDataScience: [],
      ArticleDataArt: [],
      ArticleDataHistory: [],

    }
  }


  componentDidMount = async ()  => {
    if(this.props.data === 'History') {
      try {
        const response = await axios.get('http://localhost:1337/Histories');
        this.setState({ ArticleDataHistory: response.data });
      } catch (error) {
        console.log(error);
      }
      this.setState({type: this.state.ArticleDataHistory});
    } else if(this.props.data === 'Art') {
      try {
        const response = await axios.get('http://localhost:1337/Arts');
        this.setState({ ArticleDataArt: response.data });
      } catch (error) {
        console.log(error);
      }
      this.setState({type: this.state.ArticleDataArt});
    } else {
      try {
        const response = await axios.get('http://localhost:1337/Sciences');
        this.setState({ ArticleDataScience: response.data });
      } catch (error) {
        console.log(error);
      }
      this.setState({type: this.state.ArticleDataScience});
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
