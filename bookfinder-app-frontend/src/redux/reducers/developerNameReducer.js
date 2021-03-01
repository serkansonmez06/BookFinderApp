import * as actionTypes from "../actions/actionTypes";

//we control states in here. it will check action
let initialState = {
    name: "",
    lastName: "",
    messages: [],
};

const developerNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DEVELOPER_NAME:
            return {
                ...state,
                name: "Serkan",
                lastName: "Sonmez",
            };
        case actionTypes.ADD_CONTACT_MESSAGE:
            console.log("change the messageReeducer");
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };

        default:
            return state;
    }
};

export default developerNameReducer;