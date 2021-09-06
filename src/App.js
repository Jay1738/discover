import './App.css';
import styled from 'styled-components';
import {  Banner, Category, SiteInfo } from './components';

const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
`

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
