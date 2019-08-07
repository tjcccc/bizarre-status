<template lang="pug">
  .battle-power(v-bind:class="containerStyle")
    <AttributeValue label="物理攻击力" v-bind:value="attributeFormula.calculateAttackPower(role.attributes).toString()"/>
    <AttributeValue label="防御力" v-bind:value="attributeFormula.calculateDefense(role.attributes).toString()"/>
    <AttributeValue label="魔法攻击力" v-bind:value="attributeFormula.calculateMagicPower(role.attributes).toString()"/>
    <AttributeValue label="魔法抵御力" v-bind:value="attributeFormula.calculateMagicResistance(role.attributes).toString()"/>
    <AttributeValue label="闪避率" v-bind:value="attributeFormula.calculateEvada(role.attributes)"/>
    <AttributeValue label="魔法闪避率" v-bind:value="attributeFormula.calculateMagicEvada(role.attributes)"/>
    <AttributeValue label="暴击率" v-bind:value="attributeFormula.calculateCritical(role.attributes)"/>
</template>

<style lang="scss" scoped>
  .battle-power {
    & > .level {
      text-align: center;
    }
  }
</style>

<script>
import AttributeValue from './AttributeValue';
import attributeFormula from '../utilities/attribute-formula';

export default {
  name: 'BattlePower',
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
  }
}
</script>

