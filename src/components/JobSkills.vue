<template lang="pug">
  .job-skills(v-bind:class="containerStyle")
    ul.passive-skills
      li(v-bind:class="passiveSkillSlotStyle" v-for="(skill, index) in passiveSkills")
        .flex.justify-between.border.border-solid.border-gray-300.px-2.py-1.rounded-lg(v-bind:title="skill.description")
          img(v-bind:class="iconStyle" v-bind:src="iconLoader.getIconUrlById(skill.icon_id)")
          p(v-bind:class="nameStyle") {{ skill.name }}
    ul.action-skills
      li(v-bind:class="actionSkillSlotStyle" v-for="(skill, index) in actionSkills")
        .flex.justify-between.border.border-solid.border-gray-300.px-2.py-1.rounded-lg(v-bind:title="skill.description")
          img(v-bind:class="iconStyle" v-bind:src="iconLoader.getIconUrlById(skill.icon_id)")
          p(v-bind:class="nameStyle") {{ skill.name }}
          p(v-bind:class="costStyle") {{ skill.cost }}
</template>

<style lang="scss" scoped>
.job-skills {
  margin-top: 20px;
  & > ul.passive-skills {
    padding: 0 5px;
    & > li {
      display: inline-block;
      width: 50%;
      padding: 5px;
    }
  }
  & > ul.action-skills {
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
import iconLoader from '../utilities/icon-loader';

export default {
  name: 'JobSkills',
  props: {
    skills: Array
  },
  data: function () {
    return {
      iconLoader: iconLoader,
      containerStyle: 'mb-8',
      passiveSkillSlotStyle: 'flex flex-1 justify-between font-bold px-1',
      actionSkillSlotStyle: 'flex flex-1 justify-between font-bold px-4',
      iconStyle: 'flex-none text-left w-8 h-8',
      nameStyle: 'flex-1 text-left font-mono text-lg text-gray-700 px-2',
      costStyle: 'flex-1 text-right font-mono text-lg text-gray-700'
    }
  },
  computed: {
    passiveSkills: function () {
      return this.skills.filter(skill => skill.type === 0);
    },
    actionSkills: function () {
      return this.skills.filter(skill => skill.type !== 0);
    }
  }
}
</script>
