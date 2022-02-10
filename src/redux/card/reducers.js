import {REFRESH_CARDS_LIST,} from './constants';

const INIT_STATE = {
  totalCard: 0,
  cards: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case REFRESH_CARDS_LIST:
      return {
        ...state,
        cards: action.payload.cards,
        totalCard: action.payload.totalCard,
      };

    default:
      return {...state};
  }
};

export default reducer;
