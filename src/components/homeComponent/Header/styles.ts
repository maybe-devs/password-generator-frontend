import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  width: 700px;
  height: 300px;
  background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230));
  .checkIcon {
    opacity: 0.5;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h3`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 1px solid grey;
`;

export const PasswordInformations = styled.div`
  display: flex;
  justify-content: space-around;

  p {
    padding: 0.5rem;
    font-weight: 500;
  }
  .passwordLenght {
    width: 300px;
    height: 100px;
    padding: 1rem;
  }

  .circleBox {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: none;
  }

  .checkboxGroupOne {
    width: 240px;
    height: 250px;
    display: flex;

    flex-direction: column;

    article {
      margin: 1rem;
      padding: 0.7rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    label {
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        cursor: pointer;
        width: 1rem;
        height: 1rem;
        clip-path: circle(46% at 50% 50%);
        /* -webkit-appearance: none;
        -moz-appearance: none; */
        /* appearance: initial; */
        background-color: #fff;
      }
    }
  }
`;
