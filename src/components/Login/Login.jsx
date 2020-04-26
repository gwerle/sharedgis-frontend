import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  LoginCenterDiv,
  StyledWelcomeText,
  ContainerLogin,
  LogoDiv,
  StyledForm,
} from './styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  customButton: {
    marginTop: '30px',
    padding: '6px 50px',
  },
});

export default function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    props.thunks.loginUser({ email, password });
  };

  return (
    <ContainerLogin>
      <LoginCenterDiv>
        <StyledWelcomeText>Shared GIS</StyledWelcomeText>
        <LogoDiv>
          <img src="./logo.png" />
        </LogoDiv>
        <StyledForm>
          <TextField
            style={{ minWidth: '100%', margin: '10px 0px' }}
            name="email"
            label="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            style={{ minWidth: '100%', margin: '10px 0px' }}
            label="Senha"
            name="password"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button
            className={classes.customButton}
            variant="contained"
            color="primary"
            onClick={() => loginUser()}
          >
            Login
          </Button>
        </StyledForm>
      </LoginCenterDiv>
    </ContainerLogin>
  );
}
