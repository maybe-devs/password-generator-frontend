import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0;

  h1 {
    border-radius: 5px;
    background-image: linear-gradient(
      to bottom,
      rebeccapurple,
      steelblue,
      turquoise
    );
    color: black;
    background-clip: text;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
  }
`;
