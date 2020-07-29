import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { ContainerLogin } from '../Common/styles';
import { BorderedDiv } from './styles';
import api from '../../services/api';

interface CreateUserFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const CreateAccount: React.FC = () => {
  const [fields, setFields] = useState<Partial<CreateUserFields>>({});

  const handleFieldChange = (field: string, value: string) => {
    setFields(stateFields => ({
      ...stateFields,
      [field]: value,
    }));
  };

  const handleSubmitForm = () => {
    api.post('users', fields);
  };

  return (
    <ContainerLogin>
      <BorderedDiv>
        <div style={{ padding: '20px' }}>
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
          <form style={{ margin: '20px 0' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <TextField
                size="small"
                label="Nome"
                variant="outlined"
                color="secondary"
                style={{ margin: '10px' }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleFieldChange('firstName', event.currentTarget.value)}
              />
              <TextField
                size="small"
                label="Sobrenome"
                variant="outlined"
                color="secondary"
                style={{ margin: '10px' }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleFieldChange('lastName', event.currentTarget.value)}
              />
              <TextField
                size="small"
                label="E-mail"
                variant="outlined"
                color="secondary"
                style={{ margin: '10px' }}
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
                  handleFieldChange('password', event.currentTarget.value)}
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
            </div>
            <div>
              <Button
                style={{
                  color: '#FFF',
                  padding: '6px 30px',
                  marginTop: '20px',
                  marginLeft: '10px',
                }}
                variant="contained"
                color="primary"
                onClick={() => handleSubmitForm()}
              >
                Criar Conta
              </Button>
            </div>
          </form>
        </div>
      </BorderedDiv>
    </ContainerLogin>
  );
};

export default CreateAccount;
