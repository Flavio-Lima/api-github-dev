import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import {Container, Sidebar, Main} from "./styles"

function RepositoriesPage() {
  const user = {
    login: 'Flavio-Lima',
    name: null,
    avatar_url: 'https://avatars.githubusercontent.com/u/76967245?v=4"',
    followers: 1,
    following: 4,
    company: null,
    blog: null,
    location: null,
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  )
}

export default RepositoriesPage;
