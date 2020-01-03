import { combineReducers } from 'redux';

const tacos = (state = [] , action) => {
    switch (action.type) {
        case 'FOOD_DINE':
            return action.payload;
        default:
            return state;
    }
  }

const sushiTaco = (state = [] , action) => {
    switch (action.type) {
        case 'SUSHI_TACOS':
            return action.payload;
        default:
            return state;
    }
  }

const sushiMakiRoll = (state = [] , action) => {
    switch (action.type) {
        case 'SUSHI_MAKI_ROLL':
            return action.payload;
        default:
            return state;
    }
  }

const specialtyRoll = (state = [] , action) => {
    switch (action.type) {
        case 'SPECIALTY_ROLL':
            return action.payload;
        default:
            return state;
    }
  }

const appetizers = (state = [] , action) => {
    switch (action.type) {
        case 'APPETIZERS':
            return action.payload;
        default:
            return state;
    }
  }
  
  export default combineReducers({
    tacos,
    sushiTaco,
    sushiMakiRoll,
    specialtyRoll,
    appetizers
    // newQS
  });