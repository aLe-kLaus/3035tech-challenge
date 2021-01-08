import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import {Display} from './styles';

interface ShowMoreInfoParams {
  showmoreinfo: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<ShowMoreInfoParams>();


  return (
    <Display>
        <img src="https://avatars2.githubusercontent.com/u/69825078?s=460&u=9f276d8db58840361e7a6234201525888cd045f9&v=4" alt="displayimage" />
          <div>
            <strong>Movie Title</strong>
            <p>Movie Description</p>
            <p>Movie Title was Release in release_date and has a vote average of vote_average</p>
          </div>
    </Display>
  );
}

export default Repository;
