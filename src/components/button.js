import React, { useState } from 'react';
import './button.css';
import styled from 'styled-components';

const Button = styled.button`
  border-width: 0px;
  border-radius:25px;
  color: rgb(255, 2, 112);
  border-color:rgb(255, 2, 112);
  width:150px;
  height: 50px;
  align-items: right;
  background: linear-gradient(273deg, rgba(255,0,111,1) 0%, rgba(254,97,171,1) 100%);
  background-size: 0%;
  background-repeat: no-repeat;
  font-weight: bold;
  font-size:18px;
  box-shadow: 0 0px 0px 0px rgb(255, 2, 112), 0 1px 3px 0px rgb(255, 2, 112);
  margin-top:3%;
`

const AnimatedButton = () => {

    const [shake, setShake] = useState(false);

    const animate = () => {

        // Button begins to shake
        setShake(true);

    }

    const unAnimate = () => {

        // Button begins to shake
        setShake(false);

    }

    return(
        <Button onMouseEnter = {animate} onMouseLeave={unAnimate} className = {shake ? `shake` : null}>Read Article</Button>
    );

}

export default AnimatedButton;
