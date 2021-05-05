import itemsJson from '../data/salad.json';

const TRANSLATE_OBJ = {
    cucumber: "מלפפון",
    tomato: "עגבניה",
    egg: "ביצה",
    tuna: "טונה" ,
    potato: "תפוח אדמה",
    lettuce: "חסה",
    corn: "תירס",
    onion: "בצל" ,
    mushroom: "פטריות",
    pasta: "פסטה",
    pickles: "חמוצים"
}

const initialIngredientsList = itemsJson.items.map(item => {
    const translated = TRANSLATE_OBJ[item.name];
    return ({
        ...item,
        amount: 0,
        label: translated
    })
});

const initialState = {
    ingredients: initialIngredientsList,
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_AMOUNT':
            const ingsUpdate = state.ingredients.map(ing => {
                if(ing.name === action.payload.type) {
                    if (ing.amount + action.payload.amount >= 0) {
                        return {
                            ...ing,
                            amount: ing.amount + action.payload.amount
                        };
                    }
                }

                return ing;
            });

            return {
                ...state,
                ingredients: ingsUpdate,
                totalPrice: state.totalPrice + (initialIngredientsList.find(ing => ing.name === action.payload.type).price * action.payload.amount)
            }

        case 'RESET':
            return {
                ...initialState
            }

        default:
            return state;
    }
}

export default reducer;