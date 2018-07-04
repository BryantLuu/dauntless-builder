import React from 'react';

class Weapon extends React.Component {
  render() {
    return (
      <div>
        <div> {
          this.props.weaponsCategories.map((i, idx) => {
            return (
                <div
                  key={i.name}
                  className={`weapon-category ${i.selected ? 'selected' : ''}`}
                  onClick={() => this.props.selectWeaponCategory(idx)}
                >
                  {i.name}
                </div>
              )
          })
        }
        </div>
        <div>{
          this.props.weapons.map((i, idx) => {
            return (
              <div
                className={`${i.selected ? 'selected' : ''} item`}
                onClick={() => this.props.selectWeapon(idx)}
              >
                <img className="item-image" src={i.url}/>
                <p className="item-name">{i.name}</p>
              </div>
            )
          })
        }
        </div>
        <div className="cell-section">
          <h5> Cell 1 </h5>
          {
            Object.keys(this.props.weaponCells[0].selection).map((i, idx) => {
              console.log(i)
              console.log(this.props.weaponCells[0].selection[i])
              return this.props.weaponCells[0].selection[i].map((value) => {
                return (
                  <div
                    className={`${i.selected ? 'selected' : ''} item`}
                    onClick={() => this.props.selectWeaponCell1(idx)}
                  >
                    <img className="item-image cell" src={this.props.weaponCells[0].url} alt="None"/>

                    <p className="item-name">{`${i} +${value}`}</p>
                  </div>
                )
              })
            })
        }
        </div>
      </div>
    );
  }
}

export default Weapon
