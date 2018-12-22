import React from 'react';

const Quote = ({ quote }) => (
  <div>
    {quote.content} - {quote.author}
  </div>
);

export default Quote;
