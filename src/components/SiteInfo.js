import React from "react";
import styled from "styled-components";

const SiteDiscriptionContainer = styled.div`
  height: 250px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (max-width: 700px) {
    display:none;
  }
`;

const SiteDiscription = styled.h2`
  font-size: 20px;
  margin-top: -5%;
  font-weight: normal;
`;

const AboutUsContainer = styled.div`
  text-align: left;
  padding-left: 30px;
  border-left: solid;
`;


const ResearchContainer = styled.div`
  padding-right: 30px;
`;

const Italic = styled.span`
  font-style: italic;
  font-weight: normal;
`;

export default function SiteInfo() {
  return (
    <SiteDiscriptionContainer>
      <ResearchContainer>
        <h1>
          Research <Italic>&</Italic> Discover
        </h1>
      </ResearchContainer>
      <AboutUsContainer>
        <h1>About Us</h1>
        <SiteDiscription>
          Discover aims to provide a place<br></br> in which you can expand your
          knowledge<br></br> on a broad range of intellectual topics
        </SiteDiscription>
      </AboutUsContainer>
    </SiteDiscriptionContainer>
  );
}
