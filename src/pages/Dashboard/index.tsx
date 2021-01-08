import React, { useState, useEffect} from 'react';
import { Title, Trendings } from './styles';
import api from '../../services/api'
import {Link} from 'react-router-dom';
import { IntrinsicElementsKeys } from 'styled-components';

interface Movies {
  results: []
  title: string,
  release_date: Date,
  vote_average: number,
  id: IntrinsicElementsKeys,
  poster_path: string;
}

const Dashboard: React.FC = () => {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect (() => {
    api.get<Movies>('').then(response => {
      setMovies(response.data.results);
    });
  }, []);

  movies.sort((a, b) => a.vote_average > b.vote_average ? -1 : 1);

  return (
    <>
      <Title>Weekly Trending</Title>
      <Trendings>
        {movies.map((movie => (
          <div key={movie.id}>
            <Link to={`/displaymoreinfo/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="iconimage" />
            <div>
              <strong>{movie.title}</strong>
              <p>Vote Average: {movie.vote_average}</p>
              <p>Release date: {movie.release_date}</p>
            </div>
            </Link>
          </div>
        )))}
      </Trendings>
    </>
  )
}

export default Dashboard;
