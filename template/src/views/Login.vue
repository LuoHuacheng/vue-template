<template>
  <div class="login-form">
    <Logo></Logo>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <input type="text" v-model="verifyCode" />
    <button type="button" @click="handleLogin">登录</button>
  </div>
</template>

<script>
import Logo from '../components/logo';
import { login } from '../api/fetchData';

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
  methods: {
    handleLogin() {
      const { username, password, verifyCode } = this;
      login({ username, password, verifyCode });
    },
  }
}
</script>

<style>

</style>
