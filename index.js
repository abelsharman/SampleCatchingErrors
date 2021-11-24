export const state = () => ({
    errorStatus: 0, 
    errorMessages: [],
});


export const mutations = {
    setErrorMessage(state, payload){
        state.errorStatus = payload
    },
    setErrorMessages(state, payload){
        state.errorMessages.push(payload)
    },
    clearErrorMessages(state, payload){
        state.errorMessages = []
    }
};


export const getters = {
    getErrorMessages: state => {
        return state.errorMessages
    },
    getErrorStatus: state => {
        return state.errorStatus
    }
};
