import styled from 'styled-components';

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;

  padding: 20px;
  margin: 0 auto;

  /* color: #000; */


  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  /* border-radius: 0.5rem; */
  border: 3px solid #83bcbc;


  /* margin-bottom: 20px; */
  backdrop-filter: blur(10px);
  background-color: #fff;
  & > h2 {
    margin-bottom: 20px;    
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #000;

   
  }

  :first-child {
    border-bottom: 0;
    /* border: 0; */
  }
  :last-child {
    border-top: 0;
  }
`;