<template lang="pug">
  .role-equipments(v-bind:class="containerStyle")
    ul
      li(v-bind:class="equipmentSlotStyle" v-for="(equipment, index) in equiped")
        .flex.justify-between.border.border-solid.border-gray-300.px-2.py-1.rounded-lg
          p(v-bind:class="labelStyle") {{ equipment.slot.toUpperCase() }}
          p(v-bind:class="valueStyle") {{ equipment.name }}
</template>

<style lang="scss" scoped>
.role-equipments {
  margin-top: 20px;
  & > ul {
    padding: 10px;
    & > li {
      display: block;
      padding: 5px 0;
      &:first-child {
        padding-top: 0;
      }
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
  & > p {
    line-height: 30px;
  }
}
</style>

<script>
export default {
  name: 'RoleEquipments',
  props: {
    equiped: Array
  },
  data: function () {
    return {
      containerStyle: 'mb-8',
      equipmentSlotStyle: 'flex flex-1 justify-between font-bold px-4',
      labelStyle: 'flex-1 text-left font-sans text-base italic text-gray-600',
      valueStyle: 'flex-1 text-right font-mono text-xl text-gray-700'
    }
  }
}
</script>
