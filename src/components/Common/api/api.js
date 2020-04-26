import axios from 'axios';

const localServer = 'http://localhost:3333';

export function createSession(user) {
  return axios.post(`${localServer}/sessions`, {
    email: user.email,
    password: user.password,
  });
}
