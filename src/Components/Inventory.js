import React from 'react';
import ItemBox from './ItemBox';
import Weapon from './Weapon';

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

export default Inventory
