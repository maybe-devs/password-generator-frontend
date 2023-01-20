import styled from 'styled-components';

export const Container = styled.div`
  /* background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230)); */
  width: 700px;
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
