import React from 'react';
import Card from './Card';

// Note that each Card in cards is generated with a unique key= value
// This was due to a React warning that requires unique keys for the case that an elemnt 
// needs to be referenced in the future
const CardList = ({robots}) => {
  const cards = robots.map((item, i) => {
	  return (<Card key={i} id={item.id} name={item.name} email={item.email} />)
  });
  return (
    <div>
      {cards}
    </div>
  );
}

export default CardList;