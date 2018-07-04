import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Components/Inventory';
import './index.css';

const weaponCategories = [
  {
    name: 'Sword',
    selected: true,
  },
  {
    name: 'Axe',
  },
]

const weapons = {
  None: [
    {
      name: 'None',
      url: 'No Weapon',
      cell1: 'None',
      cell2: 'None',
    }
  ],
  Sword: [
    {
      name: 'Training Sword',
      url: 'images/weapons/swords/training.png',
      cell1: 'None',
      cell2: 'None',
    },
    {
      name: 'Recruit\'s Sword (Recruit)',
      url: 'images/weapons/swords/recruit.png',
      cell1: 'None',
      cell2: 'None',
    },
    {
      name: 'Gnashsaber (Gnasher)',
      url: 'images/weapons/swords/gnashsaber.png',
      cell1: 'Utility',
      cell2: 'Defense',
      perks: {
        Ragehunter: 2,
      },
    },
    {
      name: 'Shrikesaber (Shrike)',
      url: 'images/weapons/swords/shrikesaber.png',
      cell1: 'Mobility',
      cell2: 'Mobility',
      perks: {
      },
      unique: ['+30 Part Damage on Next Hit After a Dodge'],
    },
    {
      name: 'Quillripper',
      url: 'images/weapons/swords/quillripper.png',
      cell1: 'Technique',
      cell2: 'Defense',
      perks: {
        BladeStorm: 2,
      }
    },
    {
      name: 'Skarnsaber',
      url: 'images/weapons/swords/quillripper.png',
      cell1: 'Defense',
      cell2: 'Defense',
      perks: {
        'Weighted Strikes': 2,
      }

    }
  ],
  Axe: [
    {
      name: 'Recruit\s Axe (Recruit)',
      url: 'images/weapons/axes/recruit.png',
      cell1: 'None',
      cell2: 'None',
    },
    {
      name: 'Gnashaxe (Gnasher)',
      url: 'images/weapons/axes/gnashaxe.png',
      cell1: 'Power',
      cell2: 'Utility',
    },
    {
      name: 'Shrike Axe (Shrike)',
      url: 'images/weapons/axes/shrike.png',
      cell1: 'Power',
      cell2: 'Technique',
    },
  ],
}

const lanterns = ['Recruit\'s Lantern', 'Drask\'s Fury']

const cells = {
  Defense: {
    url: 'images/cells/defense.png',
    selection: {
      'Assassin\'s Vigour': [1, 2, 3],
      'Bloodless': [1, 2, 3],
      'Fireproof': [1, 2, 3],
      'Fortress': [1, 2, 3],
      'Insulated': [1, 2, 3],
      'Nine Lives': [1, 2, 3],
      'Shellshock Resist': [1, 2, 3],
      'Sturdy': [1, 2, 3],
      'Tough': [1, 2, 3],
      'Warmth': [1, 2, 3],
    }
  },
  Mobility: {
    url: 'images/cells/mobility.png',
    selection: {
      'Assassin\'s Vigour': [1, 2, 3],
      'Bloodless': [1, 2, 3],
      'Fireproof': [1, 2, 3],
      'Fortress': [1, 2, 3],
      'Insulated': [1, 2, 3],
      'Nine Lives': [1, 2, 3],
      'Shellshock Resist': [1, 2, 3],
      'Sturdy': [1, 2, 3],
      'Tough': [1, 2, 3],
      'Warmth': [1, 2, 3],
    }
  },
  Power: {
    url: 'images/cells/power.png',
    selection: {
      'Assassin\'s Vigour': [1, 2, 3],
      'Bloodless': [1, 2, 3],
      'Fireproof': [1, 2, 3],
      'Fortress': [1, 2, 3],
      'Insulated': [1, 2, 3],
      'Nine Lives': [1, 2, 3],
      'Shellshock Resist': [1, 2, 3],
      'Sturdy': [1, 2, 3],
      'Tough': [1, 2, 3],
      'Warmth': [1, 2, 3],
    }
  },
  Technique: {
    url: 'images/cells/technique.png',
    selection: {
      'Assassin\'s Vigour': [1, 2, 3],
      'Bloodless': [1, 2, 3],
      'Fireproof': [1, 2, 3],
      'Fortress': [1, 2, 3],
      'Insulated': [1, 2, 3],
      'Nine Lives': [1, 2, 3],
      'Shellshock Resist': [1, 2, 3],
      'Sturdy': [1, 2, 3],
      'Tough': [1, 2, 3],
      'Warmth': [1, 2, 3],
    }
  },
  Utility: {
    url: 'images/cells/utility.png',
    selection: {
      'Assassin\'s Vigour': [1, 2, 3],
      'Bloodless': [1, 2, 3],
      'Fireproof': [1, 2, 3],
      'Fortress': [1, 2, 3],
      'Insulated': [1, 2, 3],
      'Nine Lives': [1, 2, 3],
      'Shellshock Resist': [1, 2, 3],
      'Sturdy': [1, 2, 3],
      'Tough': [1, 2, 3],
      'Warmth': [1, 2, 3],
    }
  },
  None: {
    selection: {
      'None': [''],
    }
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weapons: weapons[weaponCategories[0].name],
      weaponCategories: weaponCategories,
      chosenWeaponCategory: weaponCategories[0],
      chosenWeapon: weapons['None'][0],
      chosenLantern: lanterns[0],
      weaponCells: [
        cells[weapons['None'][0].cell1],
        cells[weapons['None'][0].cell2],
      ],
    }
  }
  selectWeaponCategory = (index) => {
    const weaponCategories = [...this.state.weaponCategories].map((i) => {
      i.selected = false;
      return i;
    })
    weaponCategories[index].selected = true;
    this.setState({
      weaponCategories: weaponCategories,
      chosenWeaponCategory: weaponCategories[0],
      chosenWeapon: weapons['None'][0],
      weapons: weapons[weaponCategories[index].name].map((i) => {
        i.selected = false;
        return i;
      }),
    });
  }
  selectWeapon = (index) => {
    const weapons = [...this.state.weapons].map((i)=> {
      i.selected = false
      return i
    })
    weapons[index].selected = true;
    this.setState({
      weapons,
      chosenWeapon: weapons[index],
      weaponCells: [
        {...cells[weapons[index]['cell1']]},
        {...cells[weapons[index]['cell2']]}
      ],
    });
  }
  selectLantern = (event) => {
    this.setState(
      {chosenLantern: event.target.value}
    );
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Inventory
            weapons={this.state.weapons}
            weaponsCategories={weaponCategories}
            selectWeaponCategory={this.selectWeaponCategory}
            chosenWeaponCategory={this.state.chosenWeaponCategory}
            selectWeapon={this.selectWeapon}
            chosenWeapon={this.state.chosenWeapon}
            weaponCells={this.state.weaponCells}
            lanterns={lanterns}
            selectLantern={this.selectLantern}
            chosenLantern={this.state.chosenLantern}
          />
        </div>
        <div className="stats-info">
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
