const initialState = {
  view: 'table'
};

export const layoutView = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_VIEW': return { ...state, view: action.view };
    default: return state;
  }
};