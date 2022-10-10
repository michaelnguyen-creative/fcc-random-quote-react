// Direction:
/*
Everytime click button, it should generate a new random number

This random number will be used to access the value of the JSON object--new quote
*/

import React from 'react';
import './App.css';

// Load data from JSON into React app
const quote = require('./quotes.json');

// Random number generator, MDN referenced
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
const getRandomIntInclusive = () => {
    let max = Math.ceil(quote.length - 1);
    let min = 0
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: getRandomIntInclusive()
        }
    }
    handleClick() {
        this.setState({
            index: getRandomIntInclusive()
        })
    }
    render() {
        return (
            <div id="wrapper">
                <h1>Random Quote Machine</h1>
                <div id="quote-box">
                    <div id="text">{quote[this.state.index].quote}</div>
                    <div id="author">{quote[this.state.index].author}</div>
                    <a id="tweet-quote" className="btn btn-primary" href="twitter.com/intent/tweet" target="_blank" title="Tweet this quote!"><i className="fab fa-twitter"></i></a>
                    <button onClick={this.handleClick.bind(this)} id="new-quote" className="btn">New Quote</button>
                </div>
            </div>
        );
    }
};

// How to share your content to social media pages? API?
// Does Bootstrap works in React?
// What is a CND?


// Name export
export {QuoteMachine};