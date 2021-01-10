import styled from 'styled-components';

interface ImageProps {
  border_color: string;
}

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Image = styled.img<ImageProps>`
    ${props => (`border: 5px ${props.border_color} solid`)};
    height: 200px;
    width: 200px;
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;

   @media (max-width: 450px) {
      ${props => (`border: 5px ${props.border_color} solid`)};
      height: 180px;
      width: 180px;
      border-radius: 50%;
  }
`

export const Trendings = styled.div `
  margin-top: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  text-align: center;
  align-content: center;

  a {
    height: 100%;
    min-height: 25rem;
    background: #9e61fa;
    display: grid;
    border-radius: .5rem;
    width: 100%;
    padding: 1rem;
    text-decoration: none;
    transition: transform .3s;

  strong {
      font-size: 1.5rem;
      color: #ffffff;
    }
  p {
      font-size: 1rem;
      color: #a8a8b3;
    }
    &:hover {
      transform: translateX(.5rem);
    }
    @media (max-width: 980px) {

    }
  }
`
