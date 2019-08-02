<template>
  <div id="app">
    <StatusHeader v-bind:name="role.name"/>
  </div>
</template>

<script>
import StatusHeader from './components/StatusHeader';
import './styles/app.scss';
import mockHero from './mock/hero';

export default {
  name: 'app',
  components: {
    StatusHeader
  },
  data: function () {
    return {
      role: mockHero
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
