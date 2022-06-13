import React from 'react';

const Card = (robots) => {
  const {id, name, email}= robots;		// Distructuring: id = robots.id, name=robots.name, email=robots.email
  const wpage=`https://robohash.org/${id}?size=200x200`;
										//Note the used quotes: `` (under the ~) rather than '' (under the ")
  
  // Only one element can be returned, hence the <div>...</div> encapsulating the entire JSX 
  return (
    <div className='f7 tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={wpage} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;	//default means that this source only exposrts one entity
