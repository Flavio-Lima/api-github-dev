import React, {useState} from "react";
import { MdSearch } from 'react-icons/md'

import { Container, Logo, Title, Form, Input, Button } from "./styles";


import githubLogo from '../../assets/image/github-logo.svg'

function MainPage() {
  const [login, setLogin] = useState('');

  return <Container>
        <Logo className="Logo" src={githubLogo} alt="Logo do GitHub" />
        <Title>API Github</Title>
        <Form>
          <Input
            placeholder="usuário"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
          <Button to={`/${login}/repositories`}>
            <MdSearch size={42} />
          </Button>
        </Form>
    </Container>
}


export default MainPage;
