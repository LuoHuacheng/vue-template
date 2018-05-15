// mutations

import * as types from './mutation-types';

const mutations = {
  [types.LOGIN](state, data) {
    state.user = data;
  },
};

export default mutations;
