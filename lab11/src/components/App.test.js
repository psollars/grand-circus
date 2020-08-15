import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from '../reducers/index';
import { shuffleDeck, flipCard, nextCard, prevCard } from '../actions';

fit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


xdescribe("INITIAL_STATE", function() {
    it("starts out with empty  array", function() {
        const initialState = reducer(undefined, {});

        expect(initialState).toEqual({
            contacts: []
        });
    });
});


xdescribe("GAME", function() {

    it("shuffles up a new deck of cards", function() {
        const prevState = {
            deck: [ {} ]
        };
        const action = shuffleDeck();
        const nextState = reducer(prevState, action);

        expect(nextState).toEqual({
            deck: [ {} ] //have all the questions in it randomly, deck.length = 8 items
        });
    });

    it("adds when array starts empty", function() {
        const prevState = {
            deck: []
        };
        const action = addContact({ question: "Ben" });
        const nextState = reducer(prevState, action);

        expect(nextState).toEqual({
            deck: [ { question: "Ben" } ]
        });
    });

    it("does not mutate state", function() {
        const prevState = {
            deck: [ { question: "QUESTION #1" } ]
        };
        const action = addContact({ question: "Ben" });
        const nextState = reducer(prevState, action);

        expect(nextState).not.toBe(prevState);
        expect(nextState.deck).not.toBe(prevState.deck);
    });

});