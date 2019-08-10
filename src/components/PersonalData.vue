<template lang="pug">
  .personal-data(v-bind:class="containerStyle")
    p(v-bind:class="nameStyle") {{ role.name }}
    <AttributeValue label="LEVEL" v-bind:value="roleData.attributes.level.toString()"/>
    <AttributeValue label="职业" v-bind:value="roleData.job.name"/>
    <AttributeValue label="元素属性" v-bind:value="roleData.element.name"/>
    <AttributeValue label="武器类型" v-bind:value="roleData.weaponType.name"/>
    <hr>
    <AttributeValue label="HP" v-bind:value="roleData.attributes.hp.toLocaleString()"/>
    <AttributeValue label="MP" v-bind:value="roleData.attributes.mp.toLocaleString()"/>
    <hr>
    .w-full.flex.items-center
      <AttributeValue label="力量" v-bind:value="roleData.attributes.strength.toLocaleString()"/>
      <AttributeValue label="体能" v-bind:value="roleData.attributes.vitality.toLocaleString()"/>
    .w-full.flex.items-center
      <AttributeValue label="智力" v-bind:value="roleData.attributes.intelligence.toLocaleString()"/>
      <AttributeValue label="精神" v-bind:value="roleData.attributes.mentality.toLocaleString()"/>
    .w-full.flex.items-center
      <AttributeValue label="灵巧" v-bind:value="roleData.attributes.dexterity.toLocaleString()"/>
      <AttributeValue label="速度" v-bind:value="roleData.attributes.speed.toLocaleString()"/>
    .w-full.flex.items-center
      <AttributeValue label="幸运" v-bind:value="roleData.attributes.luck.toLocaleString()"/>
      span(class='w-1/2')
    <hr>
    <AttributeValue label="EXP" v-bind:value="roleData.attributes.exp.toLocaleString()"/>
    <AttributeValue label="NEXT" v-bind:value="attributeFormula.calculateNextLevelExp(roleData.attributes).toString()"/>
</template>

<style lang="scss" scoped>
  .personal-data {
    & > .level {
      text-align: center;
    }
  }
</style>

<script>
import AttributeValue from './AttributeValue';
import attributeFormula from '../utilities/attribute-formula';
import roleService from '../services/role-service';

export default {
  name: 'AvatarPortrait',
  components: { AttributeValue },
  props: {
    role: Object
  },
  data: function () {
    return {
      containerStyle: 'p-1',
      nameStyle: 'mb-4 font-serif text-3xl subpixel-antialiased font-extrabold tracking-wide leading-loose text-center',
      labelStyle: 'font-sans text-xs',
      valueStyle: 'font-mono text-2xl',
      attributeFormula: attributeFormula
    }
  },
  computed: {
    roleData: function () {
      return this.role && this.role.attributes ? this.role : roleService.getEmptyRole()
    }
  }
}
</script>

