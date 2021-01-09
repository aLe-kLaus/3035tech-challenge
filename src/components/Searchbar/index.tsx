import React, { useState } from 'react';
import { Form } from './styles';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Searchbar: React.FC = () => {
  const [value, setValue] = useState('');

  const getQuery = () => {
    let qp = new URLSearchParams(value)
  }
  console.log(value)

  function userSearch() : void {
    console.log(value);

  }

  const apisearch = axios.create({
   // baseURL: `https://api.themoviedb.org/3/search/movie?api_key=680696aacd6dd222b951702b83ddb9e5&language=en-US&query=${}&page=1&include_adult=true`
  });
  return (
    <>
      <Form onSubmit={userSearch}>
          <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text" placeholder="serch for a movie"/>
          <button type="submit">Search</button>
      </Form>
    </>
  )
}
export default Searchbar;
