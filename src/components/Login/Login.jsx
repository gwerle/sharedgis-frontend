import React from 'react';
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

export default function Login() {
  const classes = useStyles();
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
            label="Email"
          />
          <TextField
            style={{ minWidth: '100%', margin: '10px 0px' }}
            label="Senha"
            type="password"
          />
          <Button
            className={classes.customButton}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </StyledForm>
      </LoginCenterDiv>
    </ContainerLogin>
  );
}
