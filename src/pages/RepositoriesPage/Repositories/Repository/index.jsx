import React from 'react'

import {Container, Name, Description, Footer, Lang, Link} from './Styles';

function Repository() {
  return (
    <Container color='#F1C419'>
      <Name> Repository Name</Name>
      <Description>Repository Description</Description>
      <Footer color='#F1C419'>
        <Lang>Repository Lange</Lang>
        <Link href='https://devsamurai.com.br/' target='_blank'>Ver</Link>
      </Footer>
    </Container>
  )
}

export default Repository
