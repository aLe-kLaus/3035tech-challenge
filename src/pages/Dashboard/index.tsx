import React, { useState } from 'react';
import { Title, Trendings } from './styles';
import api from '../../services/api'

const Dashboard: React.FC = () => {
  const [movies, setMovies] = useState([]);


  return (
    <>
      <Title>Movies On Trendings</Title>
      <Trendings>
        <div>
          <a href="teste">
            <img src="https://avatars2.githubusercontent.com/u/69825078?s=460&u=9f276d8db58840361e7a6234201525888cd045f9&v=4" alt="ale" />
          <div>
            <strong>Wonder Woman</strong>
            <p>Vote Average: 7.5</p>
            <p>Release date: 07/01/2021</p>
          </div>
          </a>
        </div>
      </Trendings>
    </>
  )
}

export default Dashboard;
