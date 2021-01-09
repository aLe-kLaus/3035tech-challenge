import styled from 'styled-components';

export const Display = styled.div`
  max-width: 960px;
  display: flex;
  margin-top: 15px;
  background: #fff;
  border: 2px solid black;
  border-radius: 8px;

  img {
    border-right: 2px solid black;
    width: 350px;
    height: 400px;
    border-radius: 8px;
  }
  div {
    margin: 7px;
    text-align: center;
    strong {
      font-style: bold;
      font-size: 40px;
    }
    #description {
      text-align: justify;
      font-size: 20px;
      margin-top: 5px;
    }
    #footer {
      text-align: center;
      font-size: 14px;
      font-style: italic;
      margin-top: 5px;
    }
    #runtime {
      font-size: 18px;
      text-align: justify;
      margin-top: 5px;
    }
    #genre {
      text-align: left;
      display: inline;
      font-size: 18px;
    }
  }
`
