import { staticData } from '../constants';
const initialState = {
  data: staticData,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default dashboardReducer;