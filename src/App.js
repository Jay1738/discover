import './App.css';
import styled from 'styled-components';
import {  Banner, Category, SiteInfo } from './components';

const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
`
//Categories add here to bottom of page with color scheme as TitleImage, Type of Category as Title and background color as bgColor

function App() {
  return (
    <AppContainer>
      <Banner />
      <SiteInfo />
      <Category TitleImage='Pink' Title='History' bgColor='grey' />
      <Category TitleImage='Blue' Title='Art' bgColor='white' />
      <Category TitleImage='Yellow' Title='Science' bgColor='grey' />
    </AppContainer>
  );
}

export default App;
