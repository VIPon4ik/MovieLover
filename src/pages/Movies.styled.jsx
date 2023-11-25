import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px auto;
  max-width: 320px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.2);  
`

export const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 0;
  padding-left: 20px;
  outline: none;

  &:focus {
    
  }
`

export const SearchButton = styled.button`
  color: #fff;
  height: 100%;
  width: 80px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  // border-radius: 20px;
  border: none;
  background-color: #eb4034;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #eb0034;
  }
`