import axios from 'axios';

const initialState = {
    recipe: {},
    category: []
}
// console.log(initialState)

const GET_RECIPE = 'GET_RECIPE';
const GET_CATEGORY = 'GET_CATEGORY';

export function getRecipe(recipeId){
    const recipe = axios.get(`/api/recipe/${recipeId}`);

    return {
        type: GET_RECIPE,
        payload: recipe
    }
}

export function getCategory(selected){
    let url = `/api/recipe`;

    if (selected !== null){
        url = url + `?category=${selected}`;
    }

    const category = axios.get(url).then(res => {
        // console.log(res.data);
        return res.data;
    });
    // console.log(category)

    return {
        type: GET_CATEGORY,
        payload: category
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
        case GET_CATEGORY + '_PENDING':
            return state;
        case GET_CATEGORY + '_FULFILLED':
            return {...state, category: payload};
        case GET_CATEGORY + '_REJECTED':
            return state;
        default:
            return state;
    }
}