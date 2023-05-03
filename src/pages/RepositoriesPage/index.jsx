/* eslint-disable no-console */
import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import {Container, Sidebar, Main} from "./styles"

import { getLangsFrom } from '../../services/api';

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

  const repositories = [
    {
      name: 'api-github-dev',
      description: 'Descrição',
      html_url: 'https://github.com/Flavio-Lima/api-github-dev',
      language: 'JavaScript',
    },
    {
      name: 'Meu_primeiro_projeto',
      description: 'Primeiro site que desenvolvi após algumas semanas de estudos em um curso rápido que havia iniciado a alguns anos atrás.',
      html_url: 'https://github.com/Flavio-Lima/Meu_primeiro_projeto',
      language: 'HTML',
    },
    {
      name: 'password_generator',
      description: 'Descrição',
      html_url: 'https://github.com/Flavio-Lima/password_generator',
      language: 'CSS',
    },
    {
      name: 'TODO_List',
      description: 'Descrição',
      html_url: 'https://github.com/Flavio-Lima/TODO_List',
      language: 'TypeScript',
    },
    {
      name: 'Projeto_a-ougue',
      description: 'Descrição',
      html_url: 'https://github.com/Flavio-Lima/Projeto_a-ougue',
      language: 'CSS',
    },
    {
      name: 'VendaAutomovel',
      description: 'Descrição',
      html_url: 'https://github.com/Flavio-Lima/VendaAutomovel',
      language: 'HTML',
    },
  ]

  const languages = getLangsFrom(repositories)

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  )
}

export default RepositoriesPage;
