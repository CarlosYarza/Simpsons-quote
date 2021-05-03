import React from 'react';

function DisplayQuote({quote}) {
    return(
        quote &&(
<div className='DisplayQuote'>
 <img src={quote.image} alt={quote.character} />
 <figcaption>
      <blockquote>{quote.quote}</blockquote>
      <cite>{quote.character}</cite>
    </figcaption>
</div>
        )
    );
};

export default DisplayQuote;