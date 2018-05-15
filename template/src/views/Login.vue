<template>
  <div class="login-form">
    <Logo></Logo>
    <h1>{{ time | timeAgo }}</h1>
    <h2>{{ num }}</h2>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <input type="text" v-model="verifyCode" />
    <button type="button" @click="handleLogin">登录</button>
  </div>
</template>

<script>
import Logo from '../components/logo';
import { login } from '../api/fetchData';
import { formatNumber } from '../plugins/utils';

export default {
  name: 'Login',
  components: { Logo },
  data() {
    return {
      username: '',
      password: '',
      verifyCode: '',
    };
  },
  computed: {
    time() {
      return new Date('2018/05/01');
    },
    num() {
      return formatNumber(9);
    },
  },
  methods: {
    handleLogin() {
      const { username, password, verifyCode } = this;
      login({ username, password, verifyCode });
    },
  },
};
</script>

<style>
</style>
