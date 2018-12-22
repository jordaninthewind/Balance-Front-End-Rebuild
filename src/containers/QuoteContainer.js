import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllQuotes } from '../reducers/quotesReducer';
import Quote from '../components/Quote.js';

class QuoteContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuoteIndex: 0
    };
  }

  componentDidMount() {
    this.props.getAllQuotes();
    setInterval(this.selectQuote.bind(this), 15000);
  }

  selectQuote = () =>
    this.setState({
      currentQuoteIndex: Math.floor(
        Math.random() * (this.props.quotes.length - 1)
      )
    });

  render() {
    return (
      <div className="App-footer" onClick={this.selectQuote}>
        {this.props.quotes.length && (
          <Quote 
            content={this.props.quotes[this.state.currentQuoteIndex].content}
            author={this.props.quotes[this.state.currentQuoteIndex].author}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotesReducer.quotes };
};

const mapDispatchToProps = dispatch => {
  return { getAllQuotes: () => dispatch(getAllQuotes()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteContainer);
