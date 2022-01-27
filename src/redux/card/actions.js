import {
    REFRESH_CARDS_LIST,ADD_CARD,DELETE_CARD, SET_MAIN_CARD
} from './constants';


export const refreshCardsList = (dataCards) => {
    let data = {
        type: REFRESH_CARDS_LIST,
        payload: dataCards
    }
    console.log('data',data);
    return data
};

export const addCard = (card) => ({
    type: ADD_CARD,
    payload : card
});

export const deleteCard = (card) => ({
    type: DELETE_CARD,
    payload : card
});

export const setMainCard = (card) => ({
    type: SET_MAIN_CARD,
    payload : card
});
