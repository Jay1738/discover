import {ReactComponent as Top} from './svg/topBG.svg';
import titleImage from './svg/titleimage.png';
import './App.css';
import styled from 'styled-components';
import CarouselComponent from './components/Carousel';
import Articles from './components/Article';

const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
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
`

const TopContainer = styled.div`
  position: relative;
  max-height:500px;
  height: 100%;
  width:100%;
  overflow: hidden;
`

const Company = styled.h1`
  color:white;
  font-size:100px;
  margin-top:3%;
`

const Slogan = styled.span`
  color:white;
  font-size:70px;
`

const SiteDiscriptionContainer = styled.div`
  height:250px;
  width:100%;
  position:relative;
  display:flex;
  flex-direction:row;
  justify-content:center;
  text-align:center;
  align-items:center;
`

const SiteDiscription = styled.h2`
  font-size:20px;
  margin-top:-5%;
  font-weight: normal;

`

const AboutUsContainer = styled.div`
  text-align:left;
  padding-left:30px;
  border-left: solid;

`

const ResearchContainer = styled.div`
  padding-right:30px;
`

const Italic = styled.span`
  font-style: italic;
  font-weight: normal;

`

const CategoryContainer = styled.div`
  height:450px;
  width:100%;
  background-color:#EDECEC;
  position:relative;
  display:flex;
  flex-direction:row;
  flex-wrap:no-wrap;
`

const TitleContainer = styled.div`
  display:flex;
  flex-direction:row;
  text-align:center;
`

const TitlePic = styled.img`
  height:400px;
  width:400px;
`

const Title = styled.h1`
  font-size:70px;
  position:absolute;
  margin-left:2%;
  margin-top:1%;
  color:white;

`



function App() {
  return (
    <AppContainer>
      <TopContainer>
        <Top />
        <StyledOutlineBox><Company>Discover<br></br><Slogan>A new way to learn</Slogan></Company></StyledOutlineBox>
      </TopContainer>
      <SiteDiscriptionContainer>
        <ResearchContainer>
          <h1>Research <Italic>&</Italic> Discover</h1>
        </ResearchContainer>
        <AboutUsContainer>
          <h1>About Us</h1>
          <SiteDiscription>Discover aims to provide a place<br></br> in which you can expand your knowledge<br></br> on a broad range of intellectual topics</SiteDiscription>
        </ AboutUsContainer>

      </SiteDiscriptionContainer>
      <CategoryContainer>
        <TitleContainer><TitlePic src={titleImage} alt='hourglass'/> <Title>History</Title> </TitleContainer>
            <CarouselComponent></CarouselComponent>
      </CategoryContainer>
    </AppContainer>
  );
}

export default App;
