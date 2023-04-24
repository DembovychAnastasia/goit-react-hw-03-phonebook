import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  font-size: 22px;
  justify-Content: center;
  /* align-content: center; */
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  transition: 0.5s;
  outline: none;
  &:hover,
  &:focus {
    background-color: #fff;
    color: #83bcbc;
  }
  
  
`;