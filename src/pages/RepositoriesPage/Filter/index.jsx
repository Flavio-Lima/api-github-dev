import React from 'react'

import {Container, Selector, Cleaner} from './styles';

function Filter() {
  const langs = [
    {name: 'JavaScript', count: 5, color: '#FCC419'},
    {name: 'Shell', count: 2, color: '#A4ACB4'},
    {name: 'PHP', count: 1, color: '#3498db'},
  ];

  const selectors = langs.map(({name, count, color}) => (
    <Selector
      key={name.toLocaleLowerCase()}
      color={color}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  )); // usei parenteses pq vou usar JSX

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  )
}

export default Filter
