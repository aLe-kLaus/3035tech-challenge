import React from 'react';
import { Form,  } from './styles'

const Searchbar: React.FC = () => {
  return (
    <Form>
      <input type="text" placeholder="serch for a movie"/>
      <button type="submit">Search</button>
    </Form>
  )
};

export default Searchbar;
