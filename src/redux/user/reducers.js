import {
  UPDATE_PROFILE,
  VERIFY_EMAIL,
  CHANGE_PHONE_NUMBER,
  CHANGE_PASSWORD,
  ADD_RECENT_CONTACT,
} from './constants';

const INIT_STATE = {
  user: {
    id: null,
    email: null,
    roles: [],
    phoneVerfiedAt: null,
    emailVerfiedAt: null,
    lastLoginAt: null,
    identityVerified: false,
    isActived: true,
    phone: null,
    firstName: null,
    lastName: null,
    cni: null,
    nui: null,
    birhday: null,
    city: null,
    createdAt: null,
    updatedAt: null,
  },
  token: null,
  refresh_token: null,
  expired_at: null,
  recentContacts: [
    {
      email: 'ruddyjaures@gmail.com',
      cardId: '01FSYD9BMC80XMW7HT7GTM7FHY',
      cardOwner: 'Jean Jacques',
      lastAmount: 2500,
    },
    {
      email: 'ruddyjaures@gmail.com',
      cardId: '01FSYD9BMC80XXW7HT7GTM7FHY',
      cardOwner: 'Maurice Junior',
      isFavorite: true,
      lastAmount: 7500,
    },
    {
      email: 'ruddyjaures@gmail.com',
      cardId: '01FSYD9BMC80XWW7HT7GTM7FHY',
      cardOwner: 'Atouh Charles',
      lastAmount: 12500,
    },
  ],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        refresh_token: action.payload.refresh_token,
        expired_at: action.payload.expired_at,
      };
    case VERIFY_EMAIL:
      return {...state};
    case CHANGE_PHONE_NUMBER:
      return {...state};
    case CHANGE_PASSWORD:
      return {...state};
    case ADD_RECENT_CONTACT:
      if(state.recentContacts.findIndex(card => card.cardId===action.payload.cardId)>=0)
        return {...state, recentContacts: [action.payload,...state.recentContacts.filter(card => card.cardId!==action.payload.cardId).slice(0,4)]}
      else
        return {...state, recentContacts: [action.payload,...state.recentContacts.slice(0,4)]}
    default:
      return state;
  }
};

export default reducer;
