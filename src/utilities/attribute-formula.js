const attributeFormula = {
  calculateNextLevelExp: (attributes) => {
    // Temp
    return attributes.level === 99 ? 0 : Math.round(Math.pow(2, attributes.level / 3.5));
  },

  calculateAttackPower: (attributes) => {
    const baseAttackPower = attributes.strength * 1.7 + attributes.vitality * 0.8 + attributes.dexterity * 0.65;
    return Math.round(baseAttackPower);
  },

  calculateDefense: (attributes) => {
    const defense = attributes.strength * 0.8 + attributes.vitality * 1.6 + attributes.dexterity * 0.5;
    return Math.round(defense);
  },

  calculateMagicPower: (attributes) => {
    const magicPower = attributes.intelligence * 1.6 + attributes.mentality * 1.05 + attributes.dexterity * 0.5;
    return Math.round(magicPower);
  },

  calculateMagicResistance: (attributes) => {
    const magicResistance =  attributes.vitality * 0.5 + attributes.intelligence * 0.9 + attributes.mentality * 1.5;
    return Math.round(magicResistance);
  },

  calculateEvada: (attributes) => {
    const evada = (attributes.dexterity * 1.25 + attributes.speed * 1.15) / 9.8;
    return evada.toFixed(1) + "%";
  },

  calculateMagicEvada: (attributes) => {
    const magicEvada = (attributes.mentality * 1.1 + attributes.speed * 1.3) / 14.5;
    return magicEvada.toFixed(1) + "%";
  },

  calculateCritical: (attributes) => {
    const critical = (attributes.mentality * 0.35 + attributes.dexterity * 0.25 + attributes.speed * 0.25 + attributes.luck * 1.777) / 10;
    return critical.toFixed(1) + "%";
  }
}

export default attributeFormula;
