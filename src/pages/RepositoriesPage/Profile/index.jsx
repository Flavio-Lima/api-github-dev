import React from 'react';

import {Container, Header, Avatar, Login, Name} from './styles'

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/76967245?v=4'  alt="Avatar do usuário"/>
        <Login>flaviolima</Login>
        <Name>Flávo Lima</Name>
      </Header>
    </Container>
  )
}

export default Profile
