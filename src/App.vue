<template>
  <div id="app">
    <StatusHeader v-bind:name="role.name"/>
    <div class="container mx-auto flex">
      <div class="flex-1">
        <RoleEquipments v-bind:equiped="role.equipments" />
      </div>
      <div class="flex-none w-1/3">
        <AvatarPortrait v-bind:imgUrl="tempPortrait"/>
        <PersonalData v-bind:role="role"/>
        <BattlePower v-bind:role="role"/>
      </div>
      <div class="flex-1">
        <JobSkills v-bind:skills="role.skills"/>
      </div>
    </div>
  </div>
</template>

<script>
import StatusHeader from './components/StatusHeader';
import AvatarPortrait from './components/AvatarPortrait';
import PersonalData from './components/PersonalData';
import RoleEquipments from './components/RoleEquipments';
import JobSkills from './components/JobSkills';
import BattlePower from './components/BattlePower';
import './styles/app.scss';
import mockHero from './mock/hero';

export default {
  name: 'app',
  components: {
    StatusHeader,
    AvatarPortrait,
    PersonalData,
    RoleEquipments,
    JobSkills,
    BattlePower
  },
  data: function () {
    return {
      role: mockHero
    }
  },
  computed: {
    tempPortrait: function () {
      return require('./assets/portrait.png');
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
