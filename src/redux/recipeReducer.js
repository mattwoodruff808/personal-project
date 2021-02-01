import axios from 'axios';

const initialState = {
    recipe: {}
}

const GET_RECIPE = 'GET_RECIPE';

export function getRecipe(recipeId){
    const recipe = axios.get(`/api/recipe/${recipeId}`);

    return {
        type: GET_RECIPE,
        payload: recipe
    }
}

export default function recipeReducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_RECIPE + '_PENDING':
            return state;
        case GET_RECIPE + '_FULFILLED':
            return {...state, recipe: payload};
        case GET_RECIPE + '_REJECTED':
            return state;
        default:
            return state;
    }
}