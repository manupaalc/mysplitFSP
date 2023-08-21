import * as groupApiUtils from '../utils/groupApiUtils'

//CONSTANTS

const RECEIVE_GROUP = 'RECEIVE_GROUP'
const RECEIVE_GROUPS = 'RECEIVE_GROUPS'
const REMOVE_GROUP = 'REMOVE_GROUP'

// ACTION CREATORS
export const receiveGroup = group => ({
    type: RECEIVE_GROUP, 
    payload: group
})

//careful - groups paremeter could be an array or object
export const receiveGroups = groups => ({
    type: RECEIVE_GROUPS, 
    payload: groups
})

export const removeGroup = groupId => ({
    type: REMOVE_GROUP,
    payload: groupId
})

//THUNK ACTION CREATORS
export const fetchGroups = () => async (dispatch, getState) => {
    const groups = await groupApiUtils.fetchAllGroups()
    return dispatch(receiveGroups(groups))
}

export const fetchGroup = groupId => (dispatch, getState) => (
    groupApiUtils.fetchGroup(groupId)
        .then(data => (
            dispatch(receiveGroup(data))
        ))
)

export const createGroup = groupData => async dispatch => {
    try {
        const group = await groupApiUtils.createGroup(groupData)
        return dispatch(receiveGroup({group}))
    } catch(errors) {
        console.log(errors)
    }
}

// SELECTORS
export const selectAllGroups = state => state.entities.groups

//REDUCER
const groupReducer = (state = {}, action) => {
    const nextState = {...state}

    switch (action.type) {
        case RECEIVE_GROUP:
            nextState[action.payload.group.id] = action.payload.group
            return nextState
        case RECEIVE_GROUPS:
            return Object.assign(nextState, action.payload)
        case REMOVE_GROUP:
            delete nextState[action.payload]
            return nextState
        default:
            return state
    }
}

export default groupReducer;