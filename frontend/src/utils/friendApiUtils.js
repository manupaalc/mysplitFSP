import { csrfFetch } from "./authUtils"


export const fetchUserFriends = async (userId) => {
    const res = await csrfFetch(`/api/users/${userId}/friends`)
    if (res.ok) {
        const friends = await res.json();
        return friends;
    } else {
        throw new Error("Failed to fetch user friends")
    }
}