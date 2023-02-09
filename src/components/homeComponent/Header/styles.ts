import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  max-width: 700px;
  width: 100%;
  height: 300px;
  background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230));
  @media (max-width: 810px) {
    height: 500px;
  }
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
  @media (max-width: 810px) {
    justify-content: center;
  }
`;

export const PasswordInformation = styled.div`
  display: flex;
  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;
  }
  p {
    padding: 0.5rem;
    font-weight: 500;
  }
  .passwordLength {
    max-width: 300px;
    width: 100%;
    height: 100px;
    padding: 1rem;
  }

  .checkboxGroupOne {
    max-width: 240px;
    width: 100%;
    margin: 0.3rem;
    height: 250px;
    display: flex;
    flex-direction: column;

    @media (max-width: 810px) {
      height: 150px;
    }

    article {
      margin: 1rem;
      padding: 0.7rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    label {
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        cursor: pointer;
        background-color: #fff;
      }
    }
  }
`;
