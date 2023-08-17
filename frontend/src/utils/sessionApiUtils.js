import { csrfFetch } from "./authUtils";

export const postUser = async userData => {
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(userData)
    })
    if (res.ok){
        const user = await res.json()
        return user
    } else {
        const errors = await res.json();
        throw errors
    }
  
}

export const postSession = async credentials => {
    const res = await csrfFetch('/api/session', {
        method: 'POST', 
        body:JSON.stringify(credentials)
    }) 
    if(res.ok){
        const user = await res.json()
        return user
    }else {
        const errors = await res.json()
        throw errors
    }
}

export const deleteSession = async () => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    if (res.ok) {
      
    }
}