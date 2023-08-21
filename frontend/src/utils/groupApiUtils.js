import { csrfFetch } from "./authUtils"

export const fetchAllGroups = () => (
    fetch('/api/groups')
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                //error handling
            }
        })
)


export const fetchGroup = async groupId => {
    const res = await fetch(`/api/groups/${groupId}`)
    if (res.ok) {
        const data = await res.json()
        return data
    } else {
        //error handling
    }
}

export const createGroup = async group => {
    const res = await csrfFetch ('/api/groups', {
        method: 'POST',
        body: group
    })
    if (res.ok) {
        const groupData = await res.json()
        return groupData
    } else {
        const errors = await res.json ()
        throw errors
    }
}

export const deleteGroup = groupId => (
    fetch(`/api/groups/${groupId}`, {
        method: 'DELETE'
    })
    .then(res => {
        if(res.ok){
            return res.json()
        } else {
            //error handling
        }
    })
)