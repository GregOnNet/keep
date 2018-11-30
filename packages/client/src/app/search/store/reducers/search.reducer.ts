import { SearchActions, SearchActionTypes } from '../actions/search.actions';

export interface State {
  query: string;
}

export const initialState: State = {
  query: ''
};

export function reducer(state = initialState, action: SearchActions): State {
  switch (action.type) {
    case SearchActionTypes.UpdateSearch:
      return { ...state, query: action.payload };

    default:
      return state;
  }
}
