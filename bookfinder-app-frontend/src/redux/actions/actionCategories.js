import * as actionTypes from "./actionTypes";

export const developerName = () => ({

    type: actionTypes.DEVELOPER_NAME,
});

export const addContactMessage = (message) => ({
    // add messages to connact component and passt it to userComments components
    type: actionTypes.ADD_CONTACT_MESSAGE,
    payload: message,
});