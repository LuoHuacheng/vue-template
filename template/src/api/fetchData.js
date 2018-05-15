import $http from './ajax';
import api from './api';

export function login({ username, password, verifyCode }) {
  return $http.post(api.login, { username, password, verifyCode });
}
