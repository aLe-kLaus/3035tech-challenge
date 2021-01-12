import React, {useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import {Display} from './styles';
import axios from 'axios';
import imagePlaceHolder from '../../assets/imageplaceholder.png';

interface ShowMoreInfoParams {
  id: string
}

interface ApiValue {
  title: string,
  release_date: Date,
  vote_average: number,
  id: number,
  poster_path: string,
  overview: string,
  runtime: number,
  colorid: string,
  image: string;
  genres: [
    {
    id: number,
    name: string,
    }
  ]
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<ShowMoreInfoParams>();
  const [movie, setMovie] = useState<ApiValue | null>(null);

  const api = axios.create ({
    baseURL: `https://api.themoviedb.org/3/movie/${params.id}?api_key=680696aacd6dd222b951702b83ddb9e5`
  });

  useEffect (() => {
    api.get<ApiValue>('').then(response => {
      setMovie(response.data);
    });
  }, []);

  if (movie != null) {
    if (movie.poster_path === null) {
      movie.image = imagePlaceHolder;
    } else {
      movie.image = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
    };
  };

  return (
    <Display>
      <img src={movie?.image} alt={movie?.title} />
        <div>
          <strong>{movie?.title}</strong>
          <p id="runtime">Runtime: {movie?.runtime} Minutes.</p>

          {movie?.genres.map((gen) => (<p key={gen.id} id="genre">{gen.name}; </p>))}

          <p id="description">Overview: {movie?.overview}</p>
          <p id="footer">{movie?.title} was released in {movie?.release_date} and has a vote average of {movie?.vote_average} out of 10.</p>
        </div>
    </Display>
  );
}

export default Repository;
