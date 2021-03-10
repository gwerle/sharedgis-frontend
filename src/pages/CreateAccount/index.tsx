import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { ContainerLogin } from '../Common/styles';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { useDispatch } from '../../store';
import { showSnackbar } from '../../store/modules/Snackbar/actions';

interface CreateUserFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const CreateAccount: React.FC = () => {
  const [fields, setFields] = useState<Partial<CreateUserFields>>({});

  const history = useHistory();
  const dispatch = useDispatch();

  const handleFieldChange = (field: string, value: string) => {
    setFields(stateFields => ({
      ...stateFields,
      [field]: value,
    }));
  };

  const handleSubmitForm = () => {
    api
      .post('users', fields)
      .then(response => {
        if (response.status === 200) {
          dispatch(showSnackbar('Conta Criada com Sucesso!', 'success'));
        }
      })
      .catch(strError => {
        const error = { ...strError };
        dispatch(showSnackbar(error.response.data.error, 'error'));
      });
  };

  return (
    <ContainerLogin>
      <Paper style={{ maxWidth: '767px' }}>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex' }}>
            <span>
              <Tooltip title="Voltar" placement="top">
                <IconButton onClick={() => history.push('/')}>
                  <KeyboardArrowLeftIcon />
                </IconButton>
              </Tooltip>
            </span>
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '32px',
                paddingTop: '10px',
                paddingLeft: '5px',
              }}
            >
              Criar sua conta do SharedGIS
            </h1>
          </div>
          <form style={{ margin: '20px 0' }}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={9}>
                <TextField
                  size="small"
                  label="Nome"
                  variant="outlined"
                  color="secondary"
                  style={{ margin: '10px' }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleFieldChange('firstName', event.currentTarget.value)
                  }
                />
                <TextField
                  size="small"
                  label="Sobrenome"
                  variant="outlined"
                  color="secondary"
                  style={{ margin: '10px' }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleFieldChange('lastName', event.currentTarget.value)
                  }
                />
                <TextField
                  size="small"
                  label="E-mail"
                  variant="outlined"
                  color="secondary"
                  style={{ margin: '10px', width: '89%' }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleFieldChange('email', event.currentTarget.value)
                  }
                />
                <TextField
                  size="small"
                  type="password"
                  label="Senha"
                  variant="outlined"
                  color="secondary"
                  style={{ margin: '10px' }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleFieldChange('password', event.currentTarget.value)
                  }
                />
                <TextField
                  size="small"
                  type="password"
                  label="Confirmar Senha"
                  variant="outlined"
                  color="secondary"
                  style={{ margin: '10px' }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleFieldChange(
                      'confirmPassword',
                      event.currentTarget.value,
                    )
                  }
                />
                <div style={{ textAlign: 'center' }}>
                  <Button
                    style={{
                      color: '#FFF',
                      padding: '6px 30px',
                      marginTop: '20px',
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubmitForm()}
                  >
                    Criar Conta
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    </ContainerLogin>
  );
};

export default CreateAccount;
