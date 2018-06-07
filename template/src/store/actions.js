// actions
import { cookie } from 'vux';

import { login } from '../api/fetchData';

const actions = {
  LOGIN: ({ commit }, data) => login(data).then((res) => {
    cookie.set('token', res.token);
    commit('LOGIN', res);
  }),
};

export default actions;
