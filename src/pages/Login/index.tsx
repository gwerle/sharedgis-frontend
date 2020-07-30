import React, { useState } from 'react';
import { TextField, Button, Link } from '@material-ui/core';
import { ContainerLogin, BorderedDiv } from '../Common/styles';
import { LeftDiv, RightDiv } from './styles';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { useDispatch } from '../../store';
import { showSnackbar } from '../../store/modules/Snackbar/actions';

const Login: React.FC = () => {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmitLoginForm = () => {
    api
      .post('/sessions', { email: emailField, password: passwordField })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          history.push('/dashboard');
        }
      })
      .catch(errorStr => {
        const error = { ...errorStr };
        dispatch(showSnackbar(error.response.data.message, 'error'));
      });
  };

  return (
    <ContainerLogin>
      <BorderedDiv>
        <LeftDiv />
        <RightDiv>
          <div style={{ padding: '30% 0' }}>
            <div style={{ width: '60%', margin: '10px auto' }}>
              <form noValidate autoComplete="off">
                <TextField
                  value={emailField}
                  onChange={event => setEmailField(event.target.value)}
                  style={{ marginBottom: '40px' }}
                  fullWidth
                  label="E-mail"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                  value={passwordField}
                  onChange={event => setPasswordField(event.target.value)}
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
                onClick={() => handleSubmitLoginForm()}
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
