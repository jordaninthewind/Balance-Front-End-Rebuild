import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllQuotes } from '../../actions/actions';
import Quote from '../Quote.js';
import './Footer.css';

class Footer extends Component {
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
      <div id="footer" onClick={this.selectQuote}>
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
)(Footer);
