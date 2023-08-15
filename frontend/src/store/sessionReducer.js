import { RECEIVE_USER, REMOVE_USER } from "./usersReducer"





// REDUCER 
const sessionReducer = (state = {currentUser: null}, action) => {
    switch (action.type){
        
        case RECEIVE_USER:
            return {currentUser: action.payload.user.id}
        case REMOVE_USER:
            return { currentUser: null}
        default:
           return state
    }
}
export default sessionReducer;