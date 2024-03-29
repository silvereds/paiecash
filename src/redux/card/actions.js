import {ADD_CARD, DELETE_CARD, REFRESH_CARDS_LIST, SET_MAIN_CARD} from './constants';


export const refreshCardsList = (dataCards) => {
    let data = {
        type: REFRESH_CARDS_LIST,
        payload: dataCards
    }
    return data
};

export const addCard = (card) => ({
    type: ADD_CARD,
    payload: card
});

export const deleteCard = (card) => ({
    type: DELETE_CARD,
    payload: card
});

export const setMainCard = (card) => ({
    type: SET_MAIN_CARD,
    payload: card
});
