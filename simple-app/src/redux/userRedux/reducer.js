const initialState = {
  users: [],
  errs: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, users: action.payload};

    case 'LOGIN_SUCCESS':
      return {...state, users: action.payload};

    case 'LOGIN_FAILURE':
      return {...state, errs: action.payload};
    case 'REGISTER':
      return {...state, users: action.payload};

    case 'REGISTER_SUCCESS':
      return {...state, users: action.payload};

    case 'REGISTER_FAILURE':
      return {...state, errs: action.payload};
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};
