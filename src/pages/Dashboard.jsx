import React, { PureComponent } from 'react';
import CountDown from '../components/CountDown';
import NewItem from '../components/NewItem';
import Items from '../components/Items';
import { connect } from 'react-redux';
import {
  addNewItem,
  removeItem,
  toggleItem,
  markAllAsUnpacked
} from '../features/items/items-actions';
import { packedOnly, unpackedOnly } from '../features/items/selectors';
import PropTypes from 'prop-types';

class Application extends PureComponent {
  static propTypes = {
    doRemoveItem: PropTypes.func.isRequired,
    doAddNewItem: PropTypes.func.isRequired,
    doToggleItem: PropTypes.func.isRequired,
    doMarkAllAsUnpacked: PropTypes.func.isRequired,
    packedItems: PropTypes.array,
    unpackedItems: PropTypes.array
  };

  render() {
    let {
      doRemoveItem,
      doAddNewItem,
      doToggleItem,
      doMarkAllAsUnpacked,
      packedItems,
      unpackedItems
    } = this.props;

    return (
      <React.StrictMode>
        <div className="Application">
          <NewItem addItem={doAddNewItem} />
          <CountDown />
          <Items
            title="Unpacked Items"
            items={unpackedItems}
            onRemove={doRemoveItem}
            onToggle={doToggleItem}
          />
          <Items
            title="Packed Items"
            items={packedItems}
            onRemove={doRemoveItem}
            onToggle={doToggleItem}
          />
          <button className="button full-width" onClick={doMarkAllAsUnpacked}>
            Mark All As Unpacked
          </button>
        </div>
      </React.StrictMode>
    );
  }
}

const select = store => ({
  packedItems: packedOnly(store.items),
  unpackedItems: unpackedOnly(store.items)
});

const actions = {
  doAddNewItem: addNewItem,
  doRemoveItem: removeItem,
  doToggleItem: toggleItem,
  doMarkAllAsUnpacked: markAllAsUnpacked
};

export default connect(
  select,
  actions
)(Application);
