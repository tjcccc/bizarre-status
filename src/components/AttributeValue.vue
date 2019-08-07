<template lang="pug">
  .attribute-value(v-bind:class="containerStyle")
    p(v-bind:class="labelStyle") {{ label }}
    p(v-bind:class="valueStyle") {{ value }}
</template>

<style lang="scss" scoped>
.attribute-value {
  height: 30px;
  border-bottom: 1px dotted #efefef;
  & > p {
    line-height: 30px;
  }
}
</style>

<script>
export default {
  name: 'AttributeValue',
  props: {
    label: String,
    value: String
  },
  data: function () {
    return {
      containerStyle: 'flex flex-1 justify-between font-bold px-4',
      labelStyle: 'flex-1 text-left font-sans text-base italic text-gray-600',
      valueStyle: 'flex-1 text-right font-mono text-xl text-gray-700'
    }
  }
}
</script>
