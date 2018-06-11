import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { item, onRemove, onToggle } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onToggle(item)}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={onRemove}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;