import axios from 'axios';
import apiService from './api-service';
import mockHero from '../mock/hero';

const roleService = {
  getEmptyRole: () => {
    return {
      name: 'Unknown',
      avatar: {
        portrait: {
          url: 'http://localhost:5080/img/portrait.33f3c7eb.png'
        }
      },
      job: {
        name: '',
        powerType: 0
      },
      element: {
        name: ''
      },
      weaponType: {
        name: ''
      },
      attributes: {
        level: 0,
        exp: 0,
        hp: 0,
        mp: 0,
        strength: 0,
        vitality: 0,
        intelligence: 0,
        mentality: 0,
        dexterity: 0,
        speed: 0,
        luck: 0
      },
      equipments: [],
      skills: []
    };
  },
  fetchRoleById: async (id) => {
    let response = await axios.get(`${apiService.apiUri.roles}/${id}`, {
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': '*'
      }
    });

    const remoteData = response.data;
    const role = {
      ...mockHero,
      name: remoteData.name,
      attributes: {
        level: remoteData.level,
        exp: remoteData.exp,
        hp: remoteData.hp,
        mp: remoteData.mp,
        strength: remoteData.strength,
        vitality: remoteData.vitality,
        intelligence: remoteData.intelligence,
        mentality: remoteData.mentality,
        dexterity: remoteData.dexterity,
        speed: remoteData.speed,
        luck: remoteData.luck
      }
    };

    // console.log(role);
    return role;

    // axios
    //   .get(`${apiService.apiUri.roles}/${id}`, {
    //     header: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Request-Method': '*'
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    //   .then(response => {
    //     const remoteData = response.data;
    //     const role = {
    //       ...mockHero,
    //       name: remoteData.name,
    //       attributes: {
    //         level: remoteData.level,
    //         exp: remoteData.exp,
    //         hp: remoteData.hp,
    //         mp: remoteData.mp,
    //         strength: remoteData.strength,
    //         vitality: remoteData.vitality,
    //         intelligence: remoteData.intelligence,
    //         mentality: remoteData.mentality,
    //         dexterity: remoteData.dexterity,
    //         speed: remoteData.speed,
    //         luck: remoteData.luck
    //       }
    //     };

    //     console.log(role);

    //     return role;
    //   });
  }
}

export default roleService;
