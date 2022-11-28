import React from 'react'
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledLanding>Welcome to the Bookcase App</StyledLanding>
    
  )
}

export const StyledLanding = styled.h1`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Home

