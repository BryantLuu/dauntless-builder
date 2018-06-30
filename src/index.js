import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Weapon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <select
          className=""
          onChange={this.props.selectWeaponCategory}
        >
          {
            this.props.weaponsCategories.map((i) => {
              return <option key={i} value={i}>{i}</option>
            })
          }
        </select>
        <select
          className=""
          onChange={this.props.selectWeapon}
        >
          {
            this.props.weapons.map((i) => {
              return <option key={i} value={i}>{i}</option>
            })
          }
        </select>
        <select
          className="cell1"
          // onChange={this.props.selectWeaponCell1}
        >
          {
            this.props.weaponCells[0].map((i) => {
              return <option key={i} value={i}>{i}</option>
            })
          }
        </select>
        <select
          className="cell2"
          // onChange={this.props.selectWeaponCell2}
        >
          {
            this.props.weaponCells[1].map((i) => {
              return <option key={i} value={i}>{i}</option>
            })
          }
        </select>
      </div>
    );
  }
}
function ItemBox(props) {
  console.log(props)
  return (
    <select
      className=""
      onChange={props.selectItem}
    >
      {
        props.items.map((i) => {
          return <option key={i} value={i}>{i}</option>
        })
      }
    </select>
  );
}

class Inventory extends React.Component {

  renderItem(items, selectItem) {
    return (
        <ItemBox
          items={items}
          selectItem={selectItem}
        />
    );
  }

  render() {
    return (
      <div>
        <div className="">
          <h2>Weapon</h2>
          <Weapon
            weaponsCategories={this.props.weaponsCategories}
            selectWeaponCategory={this.props.selectWeaponCategory}
            weapons={this.props.weapons}
            selectWeapon={this.props.selectWeapon}
            weaponCells={this.props.weaponCells}
          />
          <h2>Lantern</h2>
          {this.renderItem(this.props.lanterns, this.props.selectLantern)}
        </div>
        <div className="board-row">
        </div>
        <div className="board-row">
        </div>
      </div>
    );
  }
}

const weapons = {
  Swords: ['Recruit\'s Sword (Recruit)', 'Gnashsaber (Gnasher)'],
  Axes: ['Recruit\s Axe (Recruit)', 'Gnashaxe (Gnasher)'],
}

const weaponToCell = {
  [weapons['Swords'][0]]: ['None', 'None'],
  [weapons['Swords'][1]]: ['Utility', 'Defense'],
  [weapons['Axes'][0]]: ['None', 'None'],
  [weapons['Axes'][1]]: ['Power', 'Utility'],
}


const lanterns = ['Recruit\'s Lantern', 'Drask\'s Fury']

const cellToPerk = {
  Utility: ['None', 'Aetherborne +3', 'Aetherborne +2'],
  Defense: ['None', 'Assassin\'s Vigor +3', 'Assassin\'s Vigor +2'],
  None: ['No Cell Slot'],
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWeaponCategory: 'Swords',
      chosenWeapon: weapons['Swords'][0],
      chosenLantern: lanterns[0],
    }
  }
  selectWeaponCategory = (event) => {
    this.setState({
      chosenWeaponCategory: event.target.value,
      chosenWeapon: weapons[event.target.value][0],
    });
  }
  selectWeapon = (event) => {
    this.setState({
      chosenWeapon: event.target.value,
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
            weapons={weapons[this.state.chosenWeaponCategory]}
            weaponsCategories={Object.keys(weapons)}
            selectWeaponCategory={this.selectWeaponCategory}
            chosenWeaponCategory={this.state.chosenWeaponCategory}
            selectWeapon={this.selectWeapon}
            chosenWeapon={this.state.chosenWeapon}
            weaponCells={
              [
                cellToPerk[weaponToCell[this.state.chosenWeapon][0]],
                cellToPerk[weaponToCell[this.state.chosenWeapon][1]],
              ]
            }
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
