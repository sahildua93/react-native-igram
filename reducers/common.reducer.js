
const initialState = {
  loader: false,
};

const showLoader = state => ({ ...state, loader: true });

const hideLoader = state => ({ ...state, loader: false });

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOADER': return showLoader(state);
    case 'HIDE_LOADER': return hideLoader(state);
    default: return state;
  }
};

export default commonReducer;