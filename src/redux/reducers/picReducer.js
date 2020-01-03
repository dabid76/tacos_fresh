const picReducer = (state = [] , action) => {
    switch (action.type) {
        case 'FOOD_PIC':
            return action.payload;
        default:
            return state;
    }
  }
  
export default picReducer ;