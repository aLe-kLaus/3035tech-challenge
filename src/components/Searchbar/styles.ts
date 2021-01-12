import styled from 'styled-components';
import {tint} from 'polished';

interface ImageProps {
  border_color: string;
}

export const Title = styled.h1 `
  margin-top: 5px;
  text-align: center;
  font-size: 48px;
  color: #fff;
`

export const Form = styled.form `
  display: flex;
  max-width: 960px;
  height: 40px;
  margin-top: 15px;

  input {
    flex: 1;
    border-radius: 5px 0 0 5px;
    padding: 0 24px;
    border: 0;
    height: 50px;
    border: 1px solid black;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    border: 1px solid black;
    width: 60px;
    border-radius: 0 5px 5px 0;
    height: 50px;
    color: #ffffff;
    background: #3a3a3a;
    transition: .3s ease-out;

    &:hover {
      background: ${tint(0.2, "#3a3a3a")}
    }

    img {
      width: 25px;
      height: 25px;
    }
  }
  @media screen and (max-width: 960px) {
    input {
      width: 160px;
    }

    button {
      width: 60px;
    }
  }
`
export const Display = styled.div`
  margin-top: 50px;

  a {
    background: #9e61fa;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  div {
    margin-left: 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #fff;
    }

    p {
      font-size: 18px;
      color: #a8a8a8;
    }
  }
`
export const Image = styled.img<ImageProps>`
    ${props => (`border: 3px ${props.border_color} solid`)};
    height: 100px;
    width: 100px;
    border-radius: 50%;
    align-self: center;
`

export const Error = styled.span`
  font-size: 18px;
  margin-top: 15px;
  display: block;
  color: red;
`
