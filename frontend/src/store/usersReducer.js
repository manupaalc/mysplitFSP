import { postUser } from "../utils/sessionApiUtils"

// CONSTANTS
const RECEIVE_USER = 'RECEIVE_USER'
const REMOVE_USER = 'REMOVE_USER'

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

export const createUser = userData => dispatch =>(
    postUser(userData)
    .then(user => {
        dispatch(receiveUser(user))
    })
)

//SELECTORS

//REDUCER

const usersReducer = (state = {}, action) => {
    const nextState = {...state}

    switch(action.type) {
        case RECEIVE_USER:
            nextState[action.payload.user.id] = action.payload.user
            return nextState
        case REMOVE_USER:
            delete nextState[action.payload]
            return nextState
        default:
            return state
    }
}

export default usersReducer;