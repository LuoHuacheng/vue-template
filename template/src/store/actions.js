// actions
import * as Cookies from 'js-cookie';

import { login } from '../api/fetchData';

const actions = {
  LOGIN: ({ commit }, data) => {
    return login(data).then(res => {
      Cookies.set('token', res.token);
      commit('LOGIN', res);
    });
  },
};

export default actions;
