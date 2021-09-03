import {ReactComponent as Top} from './svg/topBG.svg';
import titleImage from './svg/titleimage.png';
import author from './svg/author.jpg';
import authpic from './svg/authPic.jpg';
import './App.css';
import styled from 'styled-components';
import AnimatedButton from './components/button'

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
  flex-wrap:wrap;
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

const AuthorContainer = styled.div`
  margin-top:5%;
  margin-left:10%;
  height:350px;
  width:350px;
  border-radius:50%;
  overflow:hidden;
`

const Author = styled.img`
  height:350px;
  width:250px;
`

const ArticleDescriptionContainer = styled.div`
  margin-top:5%;
  height:350px;
  width:500px;
  display:flex;
  flex-direction:column;
  margin-left:-2%;
`

const ArticleContainer = styled.div`
  width:850px;
  display:flex;
  flex-direction:row;
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
        <ArticleContainer>
          <AuthorContainer>
            <Author src={author} alt='author'></Author>
          </AuthorContainer>
          <ArticleDescriptionContainer><h1>Dr.Jennifer Houston</h1><h2>Origins of Democracy</h2><p>Dr.Houston is an expert in Ancient Greece having earned a Masters in Ancient History from Yale. In her newest article she determines the most likely conditions that where required to form the makings of early democracy in Anthens.</p>
            <AnimatedButton />
          </ArticleDescriptionContainer>
        </ArticleContainer>
      </CategoryContainer>
    </AppContainer>
  );
}

export default App;
