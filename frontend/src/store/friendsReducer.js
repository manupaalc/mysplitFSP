import { fetchUserFriends } from "../utils/friendApiUtils"

// CONSTANTS
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND'
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS'
export const REMOVE_FRIEND = 'REMOVE_FRIEND'

// ACTIONS CREATORS

export const receiveFriend = friend => ({
    type: RECEIVE_FRIEND,
    payload: friend
})

export const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    payload: friends
})

export const removeFriend = friendId => ({
    type: REMOVE_FRIEND,
    payload: friendId
})

// THUNK ACTION CREATORS
export const fetchFriends = (userId) => async (dispatch, getState) => {
    const friends = await fetchUserFriends(userId);

    
    const normalizedFriends = friends.reduce((acc, friendData) => {
        acc[friendData.friend.id] = {
            id: friendData.id,
            userId: friendData.friend.id,
            username: friendData.friend.username,
            email: friendData.friend.email,
            userPhotoUrl: friendData.friend.user_photo_url, 
            createdAt: friendData.created_at
        };
        return acc;
    }, {});

    return dispatch(receiveFriends(normalizedFriends));
};

 


const friendsReducer = (state = {}, action) => {
    const nextState = {...state}
    switch (action.type){
        case RECEIVE_FRIEND:
            nextState[action.payload.friend.id] = action.payload.friend;
            return  nextState
        case RECEIVE_FRIENDS:
            return Object.assign(nextState, action.payload)
        case REMOVE_FRIEND:
            delete nextState[action.payload]
            return nextState
        default:
            return state
    }
}

export default friendsReducer