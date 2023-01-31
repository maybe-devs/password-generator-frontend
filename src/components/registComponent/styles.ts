import styled from 'styled-components';

export const Container = styled.div`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #031321;
  }
  a {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    color: #2196f3;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    font-size: 24px;
    overflow: hidden;
    transition: 0.2s span {
      position: absolute;
      display: block;
    }
    span:nth-child(1) {
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent #2196f3);
    }
  }
  /* 
  a:hover {
    color: #255784;
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #219643, 0 0 80px #2196f3;
    transition-delay: 1s;
  } */

  a a a:hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
  }

  a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent #2196f3);
  }

  a:hover span:nth-child(3) {
    left: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }
`;
