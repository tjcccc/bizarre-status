<template lang="pug">
  header(v-bind:class="headerStyle")
    h1(v-bind:class="titleStyle") Bizarre Status: {{ roleName }}
</template>

<style lang="scss" scoped>
header {
  text-align: center;
}
</style>

<script>
export default {
  name: 'StatusHeader',
  props: {
    name: String
  },
  data: function () {
    return {
      headerStyle: 'flex items-center justify-between flex-wrap bg-green-800 p-6',
      titleStyle: 'font-bold text-white mx-auto text-center'
    };
  },
  computed: {
    roleName: function () {
      return this.name === undefined || this.name === '' ? '(Empty...)' : this.name.toUpperCase();
    }
  }
}
</script>
