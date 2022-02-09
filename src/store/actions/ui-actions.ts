const INITIAL_STATE = {
  solid: false
};

// @ts-ignore
const reducers = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'TOP_BAR_SOLID':
      return {
        ...state,
        solid: action.payload.solid
      };
    default:
      return state;
  }
};

export default reducers;