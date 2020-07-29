import React from 'react';
import { TextField, Button, Link } from '@material-ui/core';
import { ContainerLogin, BorderedDiv } from '../Common/styles';
import { LeftDiv, RightDiv } from './styles';

const Login: React.FC = () => {
  return (
    <ContainerLogin>
      <BorderedDiv>
        <LeftDiv />
        <RightDiv>
          <div style={{ padding: '30% 0' }}>
            <div style={{ width: '60%', margin: '10px auto' }}>
              <form noValidate autoComplete="off">
                <TextField
                  style={{ marginBottom: '40px' }}
                  fullWidth
                  label="E-mail"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                  type="password"
                  fullWidth
                  label="Senha"
                  variant="outlined"
                  color="secondary"
                />
              </form>
            </div>
            <div>
              <Button
                style={{
                  color: '#FFF',
                  padding: '6px 30px',
                  marginTop: '20px',
                }}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </div>
          </div>
          <div style={{ fontSize: '14px', color: 'rgb(0,0,0, 0.8)' }}>
            Ainda não é cadastrado?
            <span>
              <Link
                style={{ fontWeight: 'bold', paddingLeft: '5px' }}
                href="/create-account"
              >
                Criar Conta
              </Link>
            </span>
          </div>
        </RightDiv>
      </BorderedDiv>
    </ContainerLogin>
  );
};

export default Login;
