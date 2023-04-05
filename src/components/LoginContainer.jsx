import React from 'react'
import styled from 'styled-components'

const LoginContainer = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default LoginContainer


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid; 
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;

`;
