import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToDatabase } from '../actions';
import ListItem from "./ListItem";

class ShoppingList extends Component {

    render() {
        let shoppingListTotal = 0;

        const renderShoppingList = this.props.shoppingList.map((item) => {
            shoppingListTotal += Number(item.price);
            return <ListItem key={item.id} item={item}/>;
        });

        return (
            <div className="ShoppingList">
                <h1>Shopping List</h1>
                <div className="list-title">
                    <p>Item</p>
                    <p>Price</p>
                </div>
                {renderShoppingList}
                <div className="total">
                    ${shoppingListTotal.toFixed(2)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loading,
        shoppingList: state.shoppingList
    };
}

const mapActionsToProps = {
    addItemToDatabase
};

export default connect(mapStateToProps, mapActionsToProps)(ShoppingList);
