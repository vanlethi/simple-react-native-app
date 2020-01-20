const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {...state, tasks: action.payload};

    case 'EDIT_TASK':
      return {...state, tasks: action.payload};

    case 'DELETE_TASK':
      return {...state, tasks: action.payload};
    default:
      return state;
  }
};
