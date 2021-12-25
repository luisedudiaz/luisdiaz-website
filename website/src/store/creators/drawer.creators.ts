import { Dispatch } from "redux"
import { DrawerAction } from "../actions/drawer.actions"
import { DrawerActionType } from "../types/drawer.types"

export const open = () => {
    return (dispatch: Dispatch<DrawerAction>) => {
        dispatch({
            type: DrawerActionType.OPEN,
            payload: {
                isOpen: true
            }
        })
    }
}

export const close = () => {
    return (dispatch: Dispatch<DrawerAction>) => {
        dispatch({
            type: DrawerActionType.CLOSE,
            payload: {
                isOpen: false
            }
        })
    }
}