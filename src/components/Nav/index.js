import React from 'react';
import { MainContainer, NavigationList } from '../../styledComponents';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <MainContainer>
      <NavigationList>
        <li>
          <Link to='/'>Strona główna</Link>
        </li>
        <li>
          <Link to='/favourites'>Wybrane komentarze</Link>
        </li>
        <li>
          <Link to='/add-comment'>Dodaj komentarz</Link>
        </li>
      </NavigationList>
    </MainContainer>
  );
};

export default Nav;
