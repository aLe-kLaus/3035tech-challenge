import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  color: #3a3a3a;
`;

export const Trendings = styled.div `
  margin-top: 10px;
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  text-align: center;

  a {
    background: #fff;
    display: grid;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    text-decoration: none;
    transition: transform .3s;

  img {
    border: 5px black solid;
    height: 185px;
    width: 185px;
    border-radius: 50%;
    align-self: center;
  }
  strong {
      font-size: 25px;
      color: #3d3d4d;
    }
  p {
      font-size: 17px;
      color: #a8a8b3;
    }
    &:hover {
      transform: translateY(10px);
    }
}
`
