import React, { useState, FormEvent } from 'react';
import {Form,
        Title,
        Display,
        Image,
        Error } from './styles';
import axios from 'axios';
import {Link} from 'react-router-dom'
import searchIcon from '../../assets/searchicon.png';
import imageplaceholder from '../../assets/imageplaceholder.png';

interface responseProps {
  results: [],
  title: string;
  id: number;
  vote_average: number;
  poster_path: string;
  colorid: string;
  release_date: Date;
  image: string;
}

const Searchbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [searchResponse, setSearchResponse] = useState<responseProps[]>([]);
  async function handleSearch(event: FormEvent<HTMLFormElement>, ): Promise<void> {
  event.preventDefault();
  const apisearch = axios.create({
    baseURL: `https://api.themoviedb.org/3/search/movie?api_key=680696aacd6dd222b951702b83ddb9e5&language=en-US&query=${searchValue}&page=1&include_adult=true`
  });

  if (!searchValue) {
    setInputError('type the movie name!');
    return;
  }
  try {
    const response = await apisearch.get('');
    setSearchResponse(response.data.results)
    setSearchValue('');
    setInputError('');
  } catch (err) {
    setInputError('we can not find your movie');
    }
  }

  return (
    <>
    <Title>Search for a movie</Title>

      <Form onSubmit={handleSearch}>
          <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text" placeholder="type here"/>
          <button type="submit"><img src={searchIcon} /></button>
      </Form>

     {inputError && <Error>{inputError}</Error>}
     {searchResponse.map((res => {
          if (res.vote_average >= 7) {
          res.colorid = "#00ff95"
          } else if (res.vote_average < 6) {
            res.colorid = "#ff0000"
          } else {
            res.colorid = "#fbff00"
          }
          if (res.poster_path === null) {
            res.image = imageplaceholder;
          } else {
            res.image = `https://image.tmdb.org/t/p/w500${res.poster_path}`;
          } return (
            <Display>
              <Link key={res.id} to={`/displaymoreinfo/${res.id}`}>
              <Image src={res.image} alt="iconimage" border_color={res.colorid} />
                <div>
                  <strong>{res.title}</strong>
                  <p>{res.release_date}</p>
                </div>
              </Link>
            </Display>
         )
        }
      ))}
      </>
  )
}
export default Searchbar;
