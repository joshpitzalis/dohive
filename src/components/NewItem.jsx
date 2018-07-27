import React, { Component } from 'react';

class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    let value = event.target.value;
    this.setState({ value });
  };

  handleSubmit = event => {
    const { addItem } = this.props;
    const { value } = this.state;

    event.preventDefault();

    addItem(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
