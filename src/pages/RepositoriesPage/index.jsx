/* eslint-disable no-console */
import React, {useState} from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import {Container, Sidebar, Main} from "./styles"

import { getLangsFrom } from '../../services/api';

function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState();

  const user = {
    login: 'Flavio-Lima',
    name: 'Flávio Lima',
    avatar_url: 'https://avatars.githubusercontent.com/u/76967245?v=4"',
    followers: 1,
    following: 4,
    company: null,
    blog: null,
    location: 'Nova Friburgo - RJ',
  }

  const repositories = [
    {
      id: '1',
      name: 'api-github-dev',
      description: 'Descrição',
      html_url: 'https://github.com/Flavio-Lima/api-github-dev',
      language: 'JavaScript',
    },
    {
      id: '2',
      name: 'Meu_primeiro_projeto',
      description: 'Primeiro site que desenvolvi após algumas semanas de estudos em um curso rápido que havia iniciado a alguns anos atrás.',
      html_url: 'https://github.com/Flavio-Lima/Meu_primeiro_projeto',
      language: 'HTML',
    },
    {
      id: '3',
      name: 'password_generator',
      description: 'Descrição',
      html_url: 'https://github.com/Flavio-Lima/password_generator',
      language: 'CSS',
    },
    {
      id: '4',
      name: 'TODO_List',
      description: 'Descrição',
      html_url: 'https://github.com/Flavio-Lima/TODO_List',
      language: 'TypeScript',
    },
    {
      id: '5',
      name: 'Projeto_a-ougue',
      description: 'Descrição',
      html_url: 'https://github.com/Flavio-Lima/Projeto_a-ougue',
      language: 'CSS',
    },
    {
      id: '6',
      name: 'VendaAutomovel',
      description: 'Descrição',
      html_url: 'https://github.com/Flavio-Lima/VendaAutomovel',
      language: 'HTML',
    },
  ]

  const languages = getLangsFrom(repositories)

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  )
}

export default RepositoriesPage;
