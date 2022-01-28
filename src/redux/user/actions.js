import {ADD_RECENT_CONTACT, REMOVE_RECENT_CONTACT, UPDATE_PROFILE, UPDATE_RECENT_CONTACT,} from './constants';

export const updateProfile = data => ({
  type: UPDATE_PROFILE,
  payload: data,
});

export const verifyEmail = data => ({
  type: SET_DISCUSSION_LIST,
  payload: data,
});

export const addRecentContact = data => ({
  type: ADD_RECENT_CONTACT,
  payload: data
})

export const updateRecentContact = data => ({
  type: UPDATE_RECENT_CONTACT,
  payload: data
})

export const deleteRecentContact = data => ({
  type: REMOVE_RECENT_CONTACT,
  payload: data
})
