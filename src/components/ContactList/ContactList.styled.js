import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 18px;
  
  max-width: 100%;
  width: 300px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  
`;

export const Btn = styled.button`

  border: none;
  outline: none;
  border-radius: 8px;

`;
