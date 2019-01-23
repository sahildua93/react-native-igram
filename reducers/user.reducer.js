
const initialState = {
  token: '',
};

const setToken = (state, { token }) => ({ ...state, token });

const removeToken = state => ({ ...state, token: '' });

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': return setToken(state, action);
    case 'LOGOUT_SUCCESS': return removeToken(state);
    default: return state;
  }
};

export default userReducer;