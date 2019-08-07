<template lang="pug">
  .avatar-portrait(v-bind:class="containerStyle")
    img(v-bind:class="portraitStyle", v-bind:src="imgUrl")
</template>

<style lang="scss" scoped>
.avatar-portrait {
  width: 100%;
  & > img {
    width: 200px;
    height: 200px;
  }
}
</style>

<script>
export default {
  name: 'AvatarPortrait',
  props: {
    imgUrl: String,
    isStatic: Boolean
  },
  data: function () {
    return {
      containerStyle: 'p-4',
      portraitStyle: 'mx-auto rounded-full object-cover'
    }
  }
}
</script>
