 // fetch info about the current user from the backend
export const restoreSession = async () => {
    try{
        const res = await fetch('/api/session')
        const token = res.headers.get('X-CSRF-Token')
        if (res.ok){
            const data = await res.json()
            sessionStorage.setItem('currentUser', JSON.stringify(data.user))
            sessionStorage.setItem('csrfToken', token)
        } else {
            throw res
        }
    } catch {
        console.error('restoreSession is broken')
    }
}

export const csrfFetch = async(url, options = {}) => {
    options.method ||= 'GET'
    options.headers||= {}

    if(options.method.toUpperCase() !== 'GET'){
        if(!(options.body instanceof FormData)){
            options.headers['Content-Type'] = 'application/json'
        }
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('csrfToken')
    }
    const res = await fetch(url, options)
    return res
}