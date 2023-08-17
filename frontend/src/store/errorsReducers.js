const RECEIVE_CREATE_USER_ERRORS = 'RECEIVE_CREATE_USER_ERRORS'
const RECEIVE_LOGIN_USER_ERRROS = 'RECEIVE_LOGIN_USER_ERRORS'

export const receiveCreateUserErrors = errors =>({
    type: RECEIVE_CREATE_USER_ERRORS,
    payload: errors 
})

export const receiveLoginUserErrors = errors =>({
    type: RECEIVE_LOGIN_USER_ERRROS,
    payload: errors
})

const defaultState = {
    createUser:[],
    loginUser:[]
}

const errorsReducer = (state = defaultState, action) => {
    switch(action.type){
        case RECEIVE_CREATE_USER_ERRORS:
            return {...state, createUser: action.payload.errors}
        case RECEIVE_LOGIN_USER_ERRROS:
            return {...state, loginUser: action.payload.errors}
        default:
            return state
    }

}

export default errorsReducer