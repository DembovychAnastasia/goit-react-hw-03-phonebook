import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 22px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  color: red;
`;
export const Label = styled.div `
  display: flex;
  gap: 8px;
  margin-left: 8px;
  align-items: center;
`;

export const Button = styled.button`
    display: flex;
    justify-Content: center;
    align-items: center;
    width: 50%;
  padding: 10px 10px;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
 
  /* color: #000; */
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  &:hover,
  &:focus {
    background-color: #fff;
    color: #83bcbc;
  }
  &:active {
    scale: 0.95;
  }
`;