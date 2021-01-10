import styled from 'styled-components';

export const Display = styled.div`
  max-width: 960px;
  display: flex;
  margin-top: 15px;
  background: #9e61fa;
  border: 2px solid white;
  border-radius: 8px;

  img {
    border-right: 2px solid white;
    width: 350px;
    height: 450px;
    border-radius: 8px 8px 8px 8px;
  }

  div {
    margin: 7px;

    strong {
      font-style: bold;
      font-size: 2.1rem;
      color: #fff;
      text-align: center;
    }

    #description {
      text-align: justify;
      font-size: 1.1rem;
      margin-top: 5px;
      color:#d4d4d4;
    }

    #footer {
      display: flex;
      flex: end;
      text-align: center;
      font-size: 1rem;
      font-style: italic;
      margin-top: 5px;
      color: #a8a8a3;
      align-self: flex-end;
    }

    #runtime {
      font-size: 1.3rem;
      text-align: justify;
      margin-top: 5px;
      color: #d4d4d4;
    }

    #genre {
      text-align: left;
      display: flex;
      flex: start;
      display: inline;
      font-size: 1.3rem;
      color: #d4d4d4;
    }
  }
  @media (max-width: 800px) {
    img {
    border-right: 2px solid white;
    width: 250px;
    height: 350px;
    border-radius: 8px 8px 8px 8px;
    }

    div {
    margin: 7px;

    strong {
      position: relative;
      flex: 1;
      font-style: bold;
      font-size: 1.3rem;
      color: #fff;
      text-align: center;
    }

    #description {
      text-align: justify;
      font-size: 1rem;
      margin-top: 5px;
      color:#d4d4d4;
    }

    #footer {
      text-align: center;
      font-size: .7rem;
      font-style: italic;
      margin-top: 5px;
      color: #a8a8a3;
      align-self: flex-end;
    }

    #runtime {
      font-size: 1rem;
      text-align: justify;
      margin-top: 5px;
      color: #d4d4d4;
    }

    #genre {
      text-align: left;
      display: flex;
      flex: start;
      display: inline;
      font-size: 1rem;
      color: #d4d4d4;
    }
  }
}
@media (max-width: 625px) {
    img {
    border-right: 2px solid white;
    width: 150px;
    height: 250px;
    border-radius: 8px 8px 8px 8px;
    }

    div {
    margin: 7px;

    strong {
      font-size: 1rem;
      position: relative;
      flex: 1;
      font-style: bold;
      color: #fff;
      text-align: center;
    }

    #description {
      font-size: .8rem;
      text-align: justify;
      margin-top: 5px;
      color:#d4d4d4;
    }

    #footer {
      font-size: .5rem;
      display: flex;
      flex: end;
      text-align: center;
      font-style: italic;
      margin-top: 5px;
      color: #a8a8a3
    }

    #runtime {
      font-size: .8rem;
      text-align: justify;
      margin-top: 5px;
      color: #d4d4d4;
    }

    #genre {
      font-size: .8rem;
      text-align: left;
      display: flex;
      flex: start;
      display: inline;
      color: #d4d4d4;
      }
    }
  }
  @media (max-width: 490px) {
    img {
    border-right: 2px solid white;
    width: 100px;
    height: 175px;
    border-radius: 8px 8px 8px 8px;
    }

    div {
    margin: 7px;

    strong {
      font-size: .8rem;
      position: relative;
      flex: 1;
      font-style: bold;
      color: #fff;
      text-align: center;
    }

    #description {
      font-size: .6rem;
      text-align: justify;
      margin-top: 5px;
      color:#d4d4d4;
    }

    #footer {
      font-size: .3rem;
      display: flex;
      flex: end;
      text-align: center;
      font-style: italic;
      margin-top: 5px;
      color: #a8a8a3
    }

    #runtime {
      font-size: .6rem;
      text-align: justify;
      margin-top: 5px;
      color: #d4d4d4;
    }

    #genre {
      font-size: .6rem;
      text-align: left;
      display: flex;
      flex: start;
      display: inline;
      color: #d4d4d4;
      }
    }
  }
  @media (max-width: 415px) {
    img {
    border-right: 2px solid white;
    width: 75px;
    height: 125px;
    border-radius: 8px 8px 8px 8px;
    }

    div {
    margin: 7px;

    strong {
      font-size: .6rem;
      position: relative;
      flex: 1;
      font-style: bold;
      color: #fff;
      text-align: center;
    }

    #description {
      font-size: .4rem;
      text-align: justify;
      margin-top: 3px;
      color:#d4d4d4;
    }

    #footer {
      font-size: .25rem;
      display: flex;
      flex: end;
      text-align: center;
      font-style: italic;
      margin-top: 5px;
      color: #a8a8a3
    }

    #runtime {
      font-size: .4rem;
      text-align: justify;
      margin-top: 3px;
      color: #d4d4d4;
    }

    #genre {
      font-size: .4rem;
      text-align: left;
      display: flex;
      flex: start;
      display: inline;
      color: #d4d4d4;
      }
    }
  }
`
