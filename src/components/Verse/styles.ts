import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const VerceTitle = styled.h2`
  font-size: 2rem;
  
  color: white;
  text-shadow: 0 0 4px #000;
`;
export const VerseBody = styled.h3`
  margin: 2rem;
  max-width: 700px;

  font-size: 1.5rem;

  color: white;
  text-shadow: 0 0 3px #000;
`;
export const VerseSource = styled.h3`
  font-size: 1.5rem;
  
  color: white;
  text-shadow: 0 0 4px #000;
`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;

  margin: 2rem;

  font-size: 0.9rem;
  color: black;
  
  border-radius: 10px;

  box-shadow: 1px 1px 5px #000;

  &:hover{
    box-shadow: 0 2px 10px black;
    cursor: pointer;
  }
`;