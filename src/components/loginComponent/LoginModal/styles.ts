import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  border-radius: 5px;
  flex-direction: column;
  margin: 1rem;
  z-index: 999;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const SubTitle = styled.p`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 2.5rem;
  color: #04b0ee;
  letter-spacing: 4px;
  font-size: 1.5rem;
`;

export const Information = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  padding: 1rem;

  span {
    margin: 0.7rem 0 0.7rem 0.5rem;
    max-width: 350px;
    width: 100%;
    text-align: left;
    letter-spacing: 2px;
    color: #fff;
  }

  .email {
    max-width: 350px;
    width: 100%;
    padding: 0.5rem;
    border-radius: 1rem;
    border: none;
    padding: 10px;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  height: 8rem;
  display: flex;

  align-items: center;
  bottom: 2rem;
  display: flex;
  flex-direction: column-reverse;
  a {
    font-size: 12px;
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const Button = styled.div`
  div {
    cursor: pointer;
    height: 2.5rem;
    width: 7rem;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    overflow: hidden;
    background-color: #1c1b29;
  }
  div:before {
    content: '';
    background-image: conic-gradient(#04b0ee 20deg, transparent 160deg);
    height: 140%;
    width: 140%;
    position: absolute;
    left: -20%;
    top: -20%;
    animation: rotate 1.5s infinite linear;
  }
  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }
  div:after {
    content: 'SIGN IN';
    height: 94%;
    width: 94%;
    position: absolute;
    background-color: #1c1b29;
    border-radius: 5px;
    top: 3%;
    left: 3%;
    color: #04b0ee;
    display: grid;
    place-items: center;
    font-size: 10px;
    letter-spacing: 6px;
  }
`;
