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

  // Calculo dos filters
  const languages = [
    {name: 'JavaScript', count: 5, color: '#FCC419'},
    {name: 'CSS', count: 2, color: '#67bbf3'},
    {name: 'TypeScript', count: 1, color: '#1578b9'},
    {name: 'HTML', count: 2, color: '#db5b34'},
  ];

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
