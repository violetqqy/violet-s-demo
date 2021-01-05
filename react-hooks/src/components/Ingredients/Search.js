import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadingIngredients } = props
  const [ enteredFilter, setEnteredFilter ] = useState('')

  useEffect(() => {
    console.log('enteredFilter changed')
    const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`
    fetch('https://violetqqy-s-burger.firebaseio.com/ingredients.json' + query)
    .then(response => response.json())
    .then(responseData => {
      const loadedIngredients = Object.keys(responseData).map(key => (
        { id: key, ...responseData[key] }
      ));
      onLoadingIngredients(loadedIngredients)
    });
  }, [enteredFilter, onLoadingIngredients])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={enteredFilter} onChange={(event) => setEnteredFilter(event.target.value) } />
        </div>
      </Card>
    </section>
  );
});

export default Search;
