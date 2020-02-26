const initialState = {
    user: {
        id: null,
        username: '',
        profile_pic: ''
    }
}

//get user off session
const GET_USER = 'GET_USER' 
//remove user from session
const LOGOUT = 'LOGOUT'

export function getUser(userObj){
    return {
        type: GET_USER,
        payload: userObj
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: null
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_USER:
            return{...state, user: {id: payload.id, username: payload.username, profile_pic: payload.profile_pic}}
        case LOGOUT:
            return{...state, username: {}}
        default:
            return state
    }
}