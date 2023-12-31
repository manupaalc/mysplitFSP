import { deleteSession, postSession, postUser } from "../utils/sessionApiUtils"
import { receiveCreateUserErrors, receiveLoginUserErrors, restoreLoginErrors } from "./errorsReducers"

// CONSTANTS
export const RECEIVE_USER = 'RECEIVE_USER'
export const REMOVE_USER = 'REMOVE_USER'


//ACTION CREATORS

export const receiveUser = user => ({
    type: RECEIVE_USER, 
    payload: user
})

export const removeUser = userId => ({
    type: REMOVE_USER,
    payload: userId
})



// THUNK ACTION CREATORS

export const createUser = userData => dispatch =>{
    postUser(userData)
    .then(user => {
        sessionStorage.setItem('currentUser', JSON.stringify(user.user))
        dispatch(receiveUser(user.user))
        dispatch(restoreLoginErrors())
     
    })
    .catch((errors) => dispatch(receiveCreateUserErrors(errors)))
}

export const loginUser = credentials => dispatch => (
    postSession(credentials)
    .then(user => {
        sessionStorage.setItem('currentUser', JSON.stringify(user.user))
        dispatch(receiveUser(user))
        dispatch(restoreLoginErrors())
    
    })
    .catch (errors => dispatch(receiveLoginUserErrors(errors)))
)

export const logoutUser = userId =>  dispatch => (

    deleteSession()
    .then(()=> {
        sessionStorage.setItem('currentUser', null)
        dispatch(removeUser(userId))
    })
)

//SELECTORS

//REDUCER

const usersReducer = (state = { signupError: null }, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_USER:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case REMOVE_USER:
            delete nextState[action.payload];
            return nextState;
        
        default:
            return nextState;
    }
}

export default usersReducer;