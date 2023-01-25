import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 2px;
  width: 700px;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  border-bottom: 1px solid grey;
  align-items: center;
  margin: 0auto;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(178, 220, 228, 1) 0%,
    rgba(230, 185, 255, 1) 86%
  );
  margin-bottom: 0.8rem p {
    justify-content: center;
    display: flex;
    font-weight: 600;
    max-width: 600px;
    width: 100%;
    height: 50px;
    word-break: break-all;
  }

  div {
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;

    .icon {
      width: 1.3rem;
      height: 1.3rem;
      opacity: 0.5;
      cursor: pointer;
    }
  }

  p {
    width: 600px;
    height: 50px;
    word-break: break-all;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
