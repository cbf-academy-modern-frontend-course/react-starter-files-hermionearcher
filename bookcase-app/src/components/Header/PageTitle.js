import React from 'react'
import styled from 'styled-components';

const PageTitle = ({text}) => {  
  return (
    <PageTitleStyle>{text}</PageTitleStyle>
  )
}

export const PageTitleStyle = styled.h3`
  display: flex;
  justify-content: left;
  align-items: center;
  white-space: nowrap;
`

export default PageTitle