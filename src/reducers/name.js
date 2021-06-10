const initialState = 'Harry';

const nameReducer = (state = initialState, action) => {
  if (action.type === 'NAME') {
    return action.payload;
  }
  if (action.type === 'DEFAULT') {
    return state.initialState;
  }
  return state;
};

export default nameReducer;
