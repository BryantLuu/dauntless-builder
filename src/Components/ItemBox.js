import React from 'react';

function ItemBox(props) {
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
export default ItemBox
