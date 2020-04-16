import { ActionTypes, Status } from '../ActionTypes'

const initialState = {
    type:  ActionTypes.BASE,
    data: {},
    status: Status.INIT
}
export function Common (state=initialState, action) {
    switch(action.reducerType) {
        case ActionTypes.BASE: 
            return Object.assign({}, state, {
                type: action.type,
                data: action.data,
                status: action.status
            })
        default:
            return state
    }
}