import { csrfFetch } from "./authUtils";

export const postUser = async userData => {
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(userData)
    })
    const user = await res.json()
    return user
}

export const postSession = async credentials => {
    const res = await csrfFetch('/api/session', {
        method: 'POST', 
        body:JSON.stringify(credentials)
    })
    const user = res.json()
    return user
}

export const deleteSession = async () => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    if (res.ok) {
        console.log('logout succesful')
    }
}