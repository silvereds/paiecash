import {
  UPDATE_PROFILE,
  VERIFY_EMAIL,
  CHANGE_PHONE_NUMBER,
  CHANGE_PASSWORD,
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
      cardId: '01FSYD9BMC80XNW7HT7GTM7FHY',
      cardOwner: 'Jaurès Jaurès',
      lastAmount: 2500,
    },
    {
      cardId: '01FSYD9BMC80XNW7HT7GTM7FHY',
      cardOwner: 'Maurice Junior',
      isFavorite: true,
      lastAmount: 7500,
    },
    {
      cardId: '01FSYD9BMC80XNW7HT7GTM7FHY',
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
    default:
      return state;
  }
};

export default reducer;
