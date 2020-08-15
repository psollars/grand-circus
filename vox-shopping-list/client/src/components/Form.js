import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text"
                       onChange={this.handleNameChange} />
          &nbsp;
          Price: <input type="number"
                        step="0.01"
                        min="0"
                        onChange={this.handlePriceChange} />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handlePriceChange = (e) => {
    this.setState({
      price: Number(e.target.value)
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewItemCallback(this.state);
  }
}

export default Form;
