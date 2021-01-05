import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ ingredients, setIngredients ] = useState([]);

  // 每次重新 render 时都会触发
  useEffect(() => {
    console.log('render');
  })

  // Search 初始化会触发
  // 初始化触发
  // useEffect(() => {
  //   console.log('initial')
  //   fetch('https://violetqqy-s-burger.firebaseio.com/ingredients.json')
  //   .then(response => response.json())
  //   .then(responseData => {
  //     const loadedIngredients = Object.keys(responseData).map(key => (
  //       { id: key, ...responseData[key] }
  //     ));
  //     setIngredients(loadedIngredients);
  //   });
  // }, []);

  // 每当 ingredients 发生改变时触发
  useEffect(() => {
    console.log('Rendering Ingredients', ingredients);
  }, [ingredients]);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
     setIngredients(filteredIngredients)
  }, [])
 
  const addIngredientsHandler = ingredient => {
    fetch('https://violetqqy-s-burger.firebaseio.com/ingredients.json', {
      method: 'post',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setIngredients(prevIngredients => ([
          ...prevIngredients, 
          { id: responseData.name, ...ingredient }
        ]));
      });
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientsHandler}  />

      <section>
        <Search onLoadingIngredients={filteredIngredientsHandler} />
        {/* Need to add list here! */}
        <IngredientList ingredients={ingredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
