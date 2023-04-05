import React from 'react'
import styled from 'styled-components';
import { IoLogOutOutline } from 'react-icons/io5';

const ButtonLogout = ({onClick}) => {
  return (
    <Button
      onClick={onClick}
    >
      <i>
        <IoLogOutOutline size='2rem'></IoLogOutOutline>
      </i>
      Logout
    </Button>
  )
}

export default ButtonLogout


export const Button = styled.button`
    background-color: #E3E2E8;
    color: #A6A5AE;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    display: flex;
    cursor: pointer;
    align-items: center;
    transition: .3s ease all;
    margin-right: 5rem;
  :hover{
    background-color: #d5d4db;
  }

  i {
    margin-right: 10px;
  }
  @media screen and (min-width: 1020px) {
    margin-right: 0rem;
  }
`;
