import styled from 'styled-components';
import {tint} from 'polished';

export const Form = styled.form `
  display: flex;
  max-width: 400px;
  height: 40px;

  input {
    width: 320px;
    flex: 1;
    border-radius: 5px 0 0 5px;
    padding: 0 24px;
    border: 0;
    height: 40px;
  }
  button {
    width: 60px;
    border-radius: 0 5px 5px 0;
    height: 40px;
    font-weight: bold;
    color: #ffffff;
    background: #3a3a3a;
    transition: .3s ease-out;
    }

    button:hover {
      background: ${tint(0.2, "#3a3a3a")}
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
