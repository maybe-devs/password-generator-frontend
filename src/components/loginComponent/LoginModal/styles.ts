import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  flex-direction: column;
  margin: 1rem;
`;

export const Title = styled.h3`
  width: 100%;
  background-color: green;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 2rem;
`;

export const Informations = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: orange;
  padding: 1rem;

  span {
    margin: 0.5rem 0 0.5rem 0rem;
    max-width: 350px;
    width: 100%;
    text-align: left;
  }

  input {
    max-width: 350px;
    width: 100%;
    padding: 0.5rem;
    border-radius: 1rem;
    border: none;
    padding: 10px;
  }
`;

export const ButtonContainer = styled.div`
  background-color: blue;
  position: absolute;
  bottom: 0rem;
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1rem;
  display: flex;
  flex-direction: column;

  button {
    height: 2rem;
    max-width: 5rem;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: grey;
    font-weight: 600;
    color: #fff;
    margin: 0.5rem 0 0.5rem 0;
  }

  .signIn {
    background-color: #000000;
  }
`;
