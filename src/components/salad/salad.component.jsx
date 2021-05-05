import React from 'react';

import Ingredient from './ingredients/ingredient.component';

import './salad.scss';

const Salad = ({ currentIngredients }) => {
    let ingredientsArray = [];
    currentIngredients.forEach((ing) => {
        for (let i = 0; i < ing.amount; i++) { // in case there's more than one of type (i.e. 2 cucumbers) 
            ingredientsArray.push(<Ingredient key={ing.name + i} index={ingredientsArray.length} type={ing.name} />) // returns the ingredient component
        }
    })
        
    if (ingredientsArray.length === 0) {
        ingredientsArray = <div className="emptyBowl"> אז... מה לך לשים בפנים?</div>
    };

    return (
        <div className="salad">
            <div className="bowl">
                {ingredientsArray}
            </div>
        </div>
    );
};

export default Salad;