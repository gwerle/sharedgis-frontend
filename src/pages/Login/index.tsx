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
  const dispatch = useDispatch();

  const handleSubmitLoginForm = () => {
    api
      .post('/sessions', { email: emailField, password: passwordField })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/dashboard';
      })
      .catch(errorStr => {
        const error = { ...errorStr };
        dispatch(showSnackbar(error.response.data.message, 'error'));
      });
  };

  React.useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      window.location.href = '/dashboard';
    }
  });

  return (
    <ContainerLogin>
      <BorderedDiv>
        <LeftDiv />
        <RightDiv>
          <div style={{ padding: '30% 0' }}>
            <form
              onSubmit={event => {
                event.preventDefault();
                handleSubmitLoginForm();
              }}
              noValidate
              autoComplete="off"
            >
              <div style={{ width: '60%', margin: '10px auto' }}>
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
                  type="submit"
                  onClick={() => handleSubmitLoginForm()}
                >
                  Login
                </Button>
              </div>
            </form>
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
