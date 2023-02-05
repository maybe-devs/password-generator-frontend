import styled from 'styled-components';

interface ClipBoardProps {
  state: boolean;
}

export const Container = styled.div`
  border-radius: 2px;
  max-width: 700px;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
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

  article {
    max-width: 70px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    position: relative;

    .icon {
      width: 1.3rem;
      height: 1.3rem;
      opacity: 0.5;
      cursor: pointer;
    }
  }

  input {
    max-width: 600px;
    width: 100%;
    height: 50px;
    word-break: break-all;
    background-color: transparent;
    border: none;
    padding-left: 1rem;
  }

  button {
    background-color: transparent;
    border: none;
    width: 50%;
    position: absolute;
    top: 1.3rem;
    width: 100%;
  }

  span {
    display: none;
  }

  button:hover span {
    width: 100%;
    text-align: center;
    display: block;
    top: 0;
    opacity: 0.5;
  }
`;

export const DataValues = styled.div`
  max-width: 650px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
`;
