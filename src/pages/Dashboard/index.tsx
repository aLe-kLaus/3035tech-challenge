import React, { useState, useEffect} from 'react';
import { Title, Trendings, Image } from './styles';
import api from '../../services/api'
import {Link} from 'react-router-dom';
import imagePlaceHolder from '../../assets/imageplaceholder.png';

interface Movies {
  results: []
  title: string,
  release_date: Date,
  vote_average: number,
  id: string,
  poster_path: string;
  colorid: string;
  image: string;
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
        {movies.map((movie => {
          if (movie.vote_average >= 7) {
            movie.colorid = "#00ff95"
          }
          else if (movie.vote_average < 6) {
            movie.colorid = "#ff0000"
          }
          else {
            movie.colorid = "#fbff00"
          } if (movie.poster_path === null) {
            movie.image = imagePlaceHolder;
          } else {
            movie.image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          } return (
            <div key={movie.id}>
              <Link to={`/displaymoreinfo/${movie.id}`}>
                <Image src={movie.image} alt="iconimage" border_color={movie.colorid} />
              <div>
                <strong>{movie.title}</strong>
                <p>Vote Average: {movie.vote_average}</p>
                <p>Release date: {movie.release_date}</p>
              </div>
              </Link>
            </div>
          )}))}
      </Trendings>
    </>
  )
}

export default Dashboard;
